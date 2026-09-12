import { ArrowLeft, ChevronLeft, ChevronRight, CheckCircle2, Terminal } from 'lucide-react';

type HeaderProps = {
  viewMode: 'list' | 'solve';
  onBackToList: () => void;
  completedCount: number;
  totalCount: number;
  currentExerciseTitle?: string;
  currentExerciseId?: number;
  onPrevExercise?: () => void;
  onNextExercise?: () => void;
  hasPrev?: boolean;
  hasNext?: boolean;
};

export default function Header({
  viewMode,
  onBackToList,
  completedCount,
  totalCount,
  currentExerciseTitle,
  currentExerciseId,
  onPrevExercise,
  onNextExercise,
  hasPrev,
  hasNext,
}: HeaderProps) {
  return (
    <header className="topbar">
      <div className="topbar-left">
        {viewMode === 'solve' ? (
          <div className="solve-nav-group">
            <button
              type="button"
              className="back-btn"
              onClick={onBackToList}
              title="Return to all questions"
            >
              <ArrowLeft size={16} />
              <span>All Questions</span>
            </button>

            <span className="topbar-separator" />

            <div className="problem-nav-controls">
              <button
                type="button"
                className="nav-arrow-btn"
                onClick={onPrevExercise}
                disabled={!hasPrev}
                title="Previous Question"
              >
                <ChevronLeft size={16} />
              </button>
              <span className="nav-q-indicator">
                Problem {currentExerciseId?.toString().padStart(2, '0')}
              </span>
              <button
                type="button"
                className="nav-arrow-btn"
                onClick={onNextExercise}
                disabled={!hasNext}
                title="Next Question"
              >
                <ChevronRight size={16} />
              </button>
            </div>

            {currentExerciseTitle && (
              <span className="topbar-q-title">{currentExerciseTitle}</span>
            )}
          </div>
        ) : (
          <div className="brand-minimal">
            <div className="brand-icon-simple">
              <Terminal size={17} />
            </div>
            <span className="brand-text">C Programming Practice</span>
          </div>
        )}
      </div>

      <div className="topbar-right">
        <div className="progress-badge">
          <CheckCircle2 size={15} className="text-success" />
          <span><strong>{completedCount}</strong> / {totalCount} Solved</span>
        </div>
      </div>
    </header>
  );
}
