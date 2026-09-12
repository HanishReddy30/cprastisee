import { useState, useEffect, useMemo, useCallback } from 'react';
import { exercises, categories } from './data/exercises';
import type { Category, Exercise, SubmissionStatus, TestCase, TestResult } from './types';
import Header from './components/Header';
import MainPage from './components/MainPage';
import ProblemPanel from './components/ProblemPanel';
import CodeEditor from './components/CodeEditor';
import TestResults from './components/TestResults';
import { runTests } from './services/testRunner';
import './App.css';

const LOCAL_STORAGE_COMPLETED_KEY = 'c-lab-complete';
const LOCAL_STORAGE_CODES_KEY = 'c-lab-user-codes';

export default function App() {
  const [viewMode, setViewMode] = useState<'list' | 'solve'>('list');
  const [selectedId, setSelectedId] = useState<number>(1);
  const [category, setCategory] = useState<Category>('All');
  const [query, setQuery] = useState<string>('');

  // Completed exercise IDs
  const [completed, setCompleted] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_COMPLETED_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // User written code per exercise ID
  const [userCodes, setUserCodes] = useState<Record<number, string>>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_CODES_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Test execution state
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [submissionStatus, setSubmissionStatus] = useState<SubmissionStatus>('idle');
  const [testResults, setTestResults] = useState<TestResult[]>([]);
  const [currentTestCases, setCurrentTestCases] = useState<TestCase[]>([]);
  const [compileError, setCompileError] = useState<string | undefined>(undefined);

  // Hints & solution toggles
  const [showHint, setShowHint] = useState<boolean>(false);
  const [showSolution, setShowSolution] = useState<boolean>(false);

  // Active exercise
  const selected: Exercise = useMemo(() => {
    return exercises.find((ex) => ex.id === selectedId) || exercises[0];
  }, [selectedId]);

  // Index of active exercise for Prev/Next navigation
  const currentIndex = useMemo(() => {
    return exercises.findIndex((ex) => ex.id === selectedId);
  }, [selectedId]);
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < exercises.length - 1;

  // Current code in editor
  const currentCode = userCodes[selected.id] !== undefined
    ? userCodes[selected.id]
    : selected.starterCode;

  // Filter exercises for Main Page
  const filteredExercises = useMemo(() => {
    return exercises.filter((item) => {
      const matchesCategory = category === 'All' || item.category === category;
      const matchesQuery = query.trim() === '' ||
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase()) ||
        item.difficulty.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  // Persist completed list
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_COMPLETED_KEY, JSON.stringify(completed));
    } catch (e) {
      console.error('Failed to save progress to localStorage', e);
    }
  }, [completed]);

  // Persist user codes
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_CODES_KEY, JSON.stringify(userCodes));
    } catch (e) {
      console.error('Failed to save code to localStorage', e);
    }
  }, [userCodes]);

  // Switch to problem solve view
  const handleSelectExercise = useCallback((id: number) => {
    setSelectedId(id);
    setViewMode('solve');
    setShowHint(false);
    setShowSolution(false);
    setSubmissionStatus('idle');
    setTestResults([]);
    setCompileError(undefined);
  }, []);

  // Return to all questions list
  const handleBackToList = useCallback(() => {
    setViewMode('list');
  }, []);

  // Prev / Next question navigation
  const handlePrevExercise = useCallback(() => {
    if (currentIndex > 0) {
      handleSelectExercise(exercises[currentIndex - 1].id);
    }
  }, [currentIndex, handleSelectExercise]);

  const handleNextExercise = useCallback(() => {
    if (currentIndex < exercises.length - 1) {
      handleSelectExercise(exercises[currentIndex + 1].id);
    }
  }, [currentIndex, handleSelectExercise]);

  // Handle code edit
  const handleCodeChange = useCallback((newCode: string) => {
    setUserCodes((prev) => ({
      ...prev,
      [selected.id]: newCode,
    }));
  }, [selected.id]);

  // Reset current code to starter template
  const handleResetCode = useCallback(() => {
    if (window.confirm('Reset code to the starting template?')) {
      setUserCodes((prev) => {
        const next = { ...prev };
        delete next[selected.id];
        return next;
      });
      setSubmissionStatus('idle');
      setTestResults([]);
      setCompileError(undefined);
    }
  }, [selected.id]);

  // Run visible/sample test cases
  const handleRunCode = async () => {
    if (isRunning) return;

    const sampleCases = selected.testCases.filter((tc) => !tc.isHidden);
    setCurrentTestCases(sampleCases);
    setIsRunning(true);
    setSubmissionStatus('running');
    setTestResults([]);
    setCompileError(undefined);

    try {
      const results = await runTests(currentCode, sampleCases, (partial) => {
        setTestResults([...partial]);
      });

      setTestResults(results);

      // Check if compile error happened
      const compileErr = results.find((r) => r.stderr && r.stderr.toLowerCase().includes('error:'));
      if (compileErr && results.every((r) => r.status === 'error')) {
        setCompileError(compileErr.stderr);
        setSubmissionStatus('compileError');
      } else {
        const allPassed = results.length > 0 && results.every((r) => r.status === 'passed');
        setSubmissionStatus(allPassed ? 'allPassed' : 'someFailed');
      }
    } catch (error: any) {
      setCompileError(error?.message || 'An unexpected error occurred during execution.');
      setSubmissionStatus('compileError');
    } finally {
      setIsRunning(false);
    }
  };

  // Submit against ALL test cases (including hidden)
  const handleSubmitCode = async () => {
    if (isRunning) return;

    const allCases = selected.testCases;
    setCurrentTestCases(allCases);
    setIsRunning(true);
    setSubmissionStatus('running');
    setTestResults([]);
    setCompileError(undefined);

    try {
      const results = await runTests(currentCode, allCases, (partial) => {
        setTestResults([...partial]);
      });

      setTestResults(results);

      // Check if compile error happened
      const compileErr = results.find((r) => r.stderr && r.stderr.toLowerCase().includes('error:'));
      if (compileErr && results.every((r) => r.status === 'error')) {
        setCompileError(compileErr.stderr);
        setSubmissionStatus('compileError');
      } else {
        const allPassed = results.length > 0 && results.every((r) => r.status === 'passed');
        setSubmissionStatus(allPassed ? 'allPassed' : 'someFailed');

        // Mark as completed when all test cases pass on submit
        if (allPassed) {
          setCompleted((prev) => {
            if (!prev.includes(selected.id)) {
              return [...prev, selected.id];
            }
            return prev;
          });
        }
      }
    } catch (error: any) {
      setCompileError(error?.message || 'An unexpected error occurred during execution.');
      setSubmissionStatus('compileError');
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div className="app-shell">
      <Header
        viewMode={viewMode}
        onBackToList={handleBackToList}
        completedCount={completed.length}
        totalCount={exercises.length}
        currentExerciseTitle={selected.title}
        currentExerciseId={selected.id}
        onPrevExercise={handlePrevExercise}
        onNextExercise={handleNextExercise}
        hasPrev={hasPrev}
        hasNext={hasNext}
      />

      {viewMode === 'list' ? (
        /* Main Page with All Questions */
        <main className="main-page-scroll">
          <MainPage
            exercises={filteredExercises}
            allExercises={exercises}
            completedIds={completed}
            category={category}
            categories={categories}
            query={query}
            onSelectExercise={handleSelectExercise}
            onCategoryChange={setCategory}
            onQueryChange={setQuery}
          />
        </main>
      ) : (
        /* Question Solve View: Left Question, Right Code Editor (No sidebar on the left) */
        <main className="solve-workspace">
          {/* Left Panel: Problem Statement & Constraints */}
          <section className="problem-container">
            <ProblemPanel exercise={selected} />
          </section>

          {/* Right Panel: Code Editor & Test Results */}
          <section className="studio-container">
            <CodeEditor
              code={currentCode}
              onChange={handleCodeChange}
              onRun={handleRunCode}
              onSubmit={handleSubmitCode}
              isRunning={isRunning}
              onReset={handleResetCode}
            />

            <TestResults
              results={testResults}
              testCases={currentTestCases.length > 0 ? currentTestCases : selected.testCases}
              status={submissionStatus}
              compileError={compileError}
              showHint={showHint}
              showSolution={showSolution}
              hint={selected.hint}
              solutionCode={selected.solutionCode}
              onToggleHint={() => setShowHint((prev) => !prev)}
              onToggleSolution={() => setShowSolution((prev) => !prev)}
            />
          </section>
        </main>
      )}
    </div>
  );
}
