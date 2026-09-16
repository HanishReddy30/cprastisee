import { useState } from 'react';
import {
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Clock,
  Terminal,
  Lightbulb,
  CircleHelp,
  Loader2,
  EyeOff,
  Code2,
  SlidersHorizontal,
} from 'lucide-react';
import type { TestResult, TestCase, SubmissionStatus, CustomExecutionResult } from '../types';

type TestResultsProps = {
  results: TestResult[];
  testCases: TestCase[];
  status: SubmissionStatus;
  compileError?: string;
  customResult?: CustomExecutionResult | null;
  showHint: boolean;
  showSolution: boolean;
  hint: string;
  solutionCode: string;
  onToggleHint: () => void;
  onToggleSolution: () => void;
};

export default function TestResults({
  results,
  testCases,
  status,
  compileError,
  customResult,
  showHint,
  showSolution,
  hint,
  solutionCode,
  onToggleHint,
  onToggleSolution,
}: TestResultsProps) {
  const [selectedCaseTab, setSelectedCaseTab] = useState<number>(1);

  if (status === 'idle') {
    return (
      <div className="results-panel">
        <div className="results-empty">
          <Terminal size={22} className="text-muted" />
          <div className="results-empty-title">Ready to Test Your Solution</div>
          <p className="results-empty-desc">
            Click <strong>Run Code</strong> to test against sample cases, enable <strong>Test against custom input</strong> to provide your own input, or <strong>Submit</strong> to evaluate all test cases.
          </p>
        </div>

        <div className="support-row">
          <button type="button" className="support-btn" onClick={onToggleHint}>
            <Lightbulb size={14} /> {showHint ? 'Hide Hint' : 'Need a Hint?'}
          </button>
          <button type="button" className="support-btn" onClick={onToggleSolution}>
            <CircleHelp size={14} /> {showSolution ? 'Hide Solution' : 'View Reference Solution'}
          </button>
        </div>

        {showHint && (
          <div className="reveal-box hint-box">
            <Lightbulb size={16} />
            <span>{hint}</span>
          </div>
        )}

        {showSolution && (
          <div className="reveal-box solution-box">
            <div className="solution-title"><Code2 size={14} /> Reference Solution (C)</div>
            <pre><code>{solutionCode}</code></pre>
          </div>
        )}
      </div>
    );
  }

  if (status === 'running') {
    return (
      <div className="results-panel">
        <div className="results-loading">
          <Loader2 size={24} className="spin text-accent" />
          <div className="results-loading-title">Compiling and running your C code...</div>
          <p className="results-empty-desc">Executing in secure container sandbox via GCC</p>
        </div>
      </div>
    );
  }

  if (status === 'compileError') {
    return (
      <div className="results-panel">
        <div className="compile-error-card">
          <div className="compile-error-header">
            <AlertTriangle size={17} />
            <strong>Compilation Error</strong>
          </div>
          <pre className="compile-error-log"><code>{compileError}</code></pre>
        </div>

        <div className="support-row">
          <button type="button" className="support-btn" onClick={onToggleHint}>
            <Lightbulb size={14} /> {showHint ? 'Hide Hint' : 'Need a Hint?'}
          </button>
          <button type="button" className="support-btn" onClick={onToggleSolution}>
            <CircleHelp size={14} /> {showSolution ? 'Hide Solution' : 'View Reference Solution'}
          </button>
        </div>

        {showHint && (
          <div className="reveal-box hint-box">
            <Lightbulb size={16} />
            <span>{hint}</span>
          </div>
        )}

        {showSolution && (
          <div className="reveal-box solution-box">
            <div className="solution-title"><Code2 size={14} /> Reference Solution (C)</div>
            <pre><code>{solutionCode}</code></pre>
          </div>
        )}
      </div>
    );
  }

  // Custom input execution results view
  if ((status === 'customSuccess' || status === 'customError') && customResult) {
    const isSuccess = status === 'customSuccess';
    return (
      <div className="results-panel">
        <div className={`results-banner ${isSuccess ? 'banner-accepted' : 'banner-failed'}`}>
          <div className="banner-left">
            {isSuccess ? (
              <CheckCircle2 size={20} className="banner-icon text-success" />
            ) : (
              <XCircle size={20} className="banner-icon text-danger" />
            )}
            <div>
              <div className="banner-title">
                {customResult.timedOut
                  ? 'Time Limit Exceeded'
                  : isSuccess
                  ? 'Executed Successfully'
                  : 'Runtime Error'}
              </div>
              <div className="banner-subtitle">
                Executed with custom input stdin (Exit code: {customResult.exitCode})
              </div>
            </div>
          </div>
        </div>

        <div className="test-case-card">
          <div className="test-case-meta">
            <span className="case-title">
              <SlidersHorizontal size={13} style={{ marginRight: 6, verticalAlign: 'middle' }} />
              Custom Input Execution
            </span>
            <span className={`case-badge ${isSuccess ? 'status-passed' : 'status-failed'}`}>
              {isSuccess ? 'SUCCESS' : 'ERROR'}
            </span>
          </div>

          <div className="io-compare-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
            <div className="io-column">
              <div className="io-header">Your Custom Input (stdin)</div>
              <pre className="io-block"><code>{customResult.stdin || '<no input provided>'}</code></pre>
            </div>

            <div className="io-column">
              <div className="io-header">Program Output (stdout)</div>
              <pre className={`io-block ${isSuccess ? 'actual-pass' : 'actual-fail'}`}>
                <code>{customResult.stdout || '<no output printed>'}</code>
              </pre>
            </div>
          </div>

          {customResult.stderr && (
            <div className="stderr-block">
              <div className="io-header text-danger">Runtime stderr / messages:</div>
              <pre className="io-block stderr-content"><code>{customResult.stderr}</code></pre>
            </div>
          )}
        </div>

        <div className="support-row">
          <button type="button" className="support-btn" onClick={onToggleHint}>
            <Lightbulb size={14} /> {showHint ? 'Hide Hint' : 'Need a Hint?'}
          </button>
          <button type="button" className="support-btn" onClick={onToggleSolution}>
            <CircleHelp size={14} /> {showSolution ? 'Hide Solution' : 'View Reference Solution'}
          </button>
        </div>

        {showHint && (
          <div className="reveal-box hint-box">
            <Lightbulb size={16} />
            <span>{hint}</span>
          </div>
        )}

        {showSolution && (
          <div className="reveal-box solution-box">
            <div className="solution-title"><Code2 size={14} /> Reference Solution (C)</div>
            <pre><code>{solutionCode}</code></pre>
          </div>
        )}
      </div>
    );
  }

  const passedCount = results.filter((r) => r.status === 'passed').length;
  const totalCount = testCases.length;
  const isAllPassed = status === 'allPassed' || passedCount === totalCount;

  // Active test case to display in tab
  const activeTestCase = testCases.find((tc) => tc.id === selectedCaseTab) || testCases[0];
  const activeResult = results.find((r) => r.testCaseId === activeTestCase?.id);

  return (
    <div className="results-panel">
      <div className={`results-banner ${isAllPassed ? 'banner-accepted' : 'banner-failed'}`}>
        <div className="banner-left">
          {isAllPassed ? (
            <CheckCircle2 size={20} className="banner-icon text-success" />
          ) : (
            <XCircle size={20} className="banner-icon text-danger" />
          )}
          <div>
            <div className="banner-title">
              {isAllPassed ? 'Accepted' : 'Wrong Answer'}
            </div>
            <div className="banner-subtitle">
              {passedCount} of {totalCount} test cases passed
            </div>
          </div>
        </div>
      </div>

      {/* Test case tabs */}
      <div className="test-tabs-header">
        {testCases.map((tc) => {
          const res = results.find((r) => r.testCaseId === tc.id);
          const isPassed = res?.status === 'passed';
          const isFailed = res?.status === 'failed';
          const isTimeout = res?.status === 'timeout';
          const isError = res?.status === 'error';

          return (
            <button
              key={tc.id}
              type="button"
              className={`test-tab-btn ${selectedCaseTab === tc.id ? 'active' : ''}`}
              onClick={() => setSelectedCaseTab(tc.id)}
            >
              <span>Case {tc.id}</span>
              {tc.isHidden && <span className="hidden-pill" title="Hidden test case"><EyeOff size={10} /></span>}
              {isPassed && <span className="tab-status-dot passed" />}
              {isFailed && <span className="tab-status-dot failed" />}
              {(isTimeout || isError) && <span className="tab-status-dot error" />}
            </button>
          );
        })}
      </div>

      {/* Active test case detail card */}
      {activeTestCase && (
        <div className="test-case-card">
          <div className="test-case-meta">
            <span className="case-title">Test Case {activeTestCase.id}</span>
            {activeResult && (
              <span className={`case-badge status-${activeResult.status}`}>
                {activeResult.status === 'passed' && <CheckCircle2 size={13} />}
                {activeResult.status === 'failed' && <XCircle size={13} />}
                {activeResult.status === 'timeout' && <Clock size={13} />}
                {activeResult.status === 'error' && <AlertTriangle size={13} />}
                {activeResult.status.toUpperCase()}
              </span>
            )}
            {activeTestCase.isHidden && (
              <span className="case-badge hidden-badge">
                <EyeOff size={12} /> Hidden Test Case
              </span>
            )}
          </div>

          {activeTestCase.isHidden ? (
            <div className="hidden-case-notice">
              <EyeOff size={16} />
              <span>This is a hidden test case to evaluate edge cases. Input and expected output are protected.</span>
            </div>
          ) : (
            <div className="io-compare-grid">
              <div className="io-column">
                <div className="io-header">Compiler Input (stdin)</div>
                <pre className="io-block"><code>{activeTestCase.input || '<no input>'}</code></pre>
              </div>

              <div className="io-column">
                <div className="io-header">Expected Output</div>
                <pre className="io-block expected"><code>{activeTestCase.expectedOutput}</code></pre>
              </div>

              <div className="io-column">
                <div className="io-header">Your Output (stdout)</div>
                <pre className={`io-block ${activeResult?.status === 'passed' ? 'actual-pass' : 'actual-fail'}`}>
                  <code>{activeResult?.actualOutput || '<no output>'}</code>
                </pre>
              </div>
            </div>
          )}

          {activeResult?.stderr && (
            <div className="stderr-block">
              <div className="io-header text-danger">Runtime stderr:</div>
              <pre className="io-block stderr-content"><code>{activeResult.stderr}</code></pre>
            </div>
          )}
        </div>
      )}

      {/* Support toggles */}
      <div className="support-row">
        <button type="button" className="support-btn" onClick={onToggleHint}>
          <Lightbulb size={14} /> {showHint ? 'Hide Hint' : 'Need a Hint?'}
        </button>
        <button type="button" className="support-btn" onClick={onToggleSolution}>
          <CircleHelp size={14} /> {showSolution ? 'Hide Solution' : 'View Reference Solution'}
        </button>
      </div>

      {showHint && (
        <div className="reveal-box hint-box">
          <Lightbulb size={16} />
          <span>{hint}</span>
        </div>
      )}

      {showSolution && (
        <div className="reveal-box solution-box">
          <div className="solution-title"><Code2 size={14} /> Reference Solution (C)</div>
          <pre><code>{solutionCode}</code></pre>
        </div>
      )}
    </div>
  );
}
