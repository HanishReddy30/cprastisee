import { Search, X, Check, ArrowRight, BookOpen, Sparkles } from 'lucide-react';
import type { Exercise, Category, CategoryInfo } from '../types';

type MainPageProps = {
  exercises: Exercise[];
  allExercises: Exercise[];
  completedIds: number[];
  category: Category;
  categories: CategoryInfo[];
  query: string;
  onSelectExercise: (id: number) => void;
  onCategoryChange: (cat: Category) => void;
  onQueryChange: (q: string) => void;
};

export default function MainPage({
  exercises,
  allExercises,
  completedIds,
  category,
  categories,
  query,
  onSelectExercise,
  onCategoryChange,
  onQueryChange,
}: MainPageProps) {
  const totalCount = allExercises.length;
  const completedCount = completedIds.length;
  const percentage = Math.round((completedCount / (totalCount || 1)) * 100);

  return (
    <div className="main-page-container">
      {/* Hero / Overview Banner */}
      <section className="main-hero">
        <div className="main-hero-content">
          <div className="hero-eyebrow">
            <Sparkles size={14} /> C Programming Lab
          </div>
          <h1 className="hero-title">Practice C Programming</h1>
          <p className="hero-desc">
            Select any problem below to start writing code, compile in real-time, and verify your solution against test cases.
          </p>
        </div>

        <div className="hero-stats-cards">
          <div className="stat-card">
            <span className="stat-label">Total Problems</span>
            <strong className="stat-value">{totalCount}</strong>
          </div>
          <div className="stat-card">
            <span className="stat-label">Solved</span>
            <strong className="stat-value text-success">{completedCount}</strong>
          </div>
          <div className="stat-card">
            <span className="stat-label">Completion</span>
            <strong className="stat-value text-accent">{percentage}%</strong>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="main-filter-section">
        <div className="category-pills">
          {categories.map((c) => (
            <button
              key={c.label}
              type="button"
              className={`cat-pill ${category === c.label ? 'active' : ''}`}
              onClick={() => onCategoryChange(c.label)}
            >
              <span>{c.label === 'All' ? 'All Questions' : c.label}</span>
              <span className="pill-count">{c.count}</span>
            </button>
          ))}
        </div>

        <div className="main-search-box">
          <Search size={16} />
          <input
            type="text"
            placeholder="Search questions by title, category, difficulty..."
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
          />
          {query && (
            <button
              type="button"
              className="clear-search-btn"
              onClick={() => onQueryChange('')}
              aria-label="Clear search"
            >
              <X size={14} />
            </button>
          )}
        </div>
      </section>

      {/* Questions List */}
      <section className="questions-section">
        <div className="questions-table-header">
          <span className="col-status">Status</span>
          <span className="col-num">#</span>
          <span className="col-title">Question Title</span>
          <span className="col-category">Category</span>
          <span className="col-difficulty">Difficulty</span>
          <span className="col-action">Action</span>
        </div>

        <div className="questions-list">
          {exercises.length === 0 ? (
            <div className="no-questions-found">
              <BookOpen size={28} className="text-muted" />
              <p>No questions found matching your filter.</p>
              <button
                type="button"
                className="reset-filter-btn"
                onClick={() => {
                  onCategoryChange('All');
                  onQueryChange('');
                }}
              >
                Clear filters
              </button>
            </div>
          ) : (
            exercises.map((ex) => {
              const isCompleted = completedIds.includes(ex.id);
              return (
                <div
                  key={ex.id}
                  className={`question-row ${isCompleted ? 'row-completed' : ''}`}
                  onClick={() => onSelectExercise(ex.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      onSelectExercise(ex.id);
                    }
                  }}
                >
                  <div className="col-status">
                    <span className={`status-pill ${isCompleted ? 'completed' : 'unsolved'}`}>
                      {isCompleted ? <Check size={13} /> : null}
                    </span>
                  </div>

                  <div className="col-num">
                    {ex.id.toString().padStart(2, '0')}
                  </div>

                  <div className="col-title">
                    <strong className="q-title-text">{ex.title}</strong>
                    <p className="q-preview-text">{ex.description}</p>
                  </div>

                  <div className="col-category">
                    <span className="category-badge">{ex.category}</span>
                  </div>

                  <div className="col-difficulty">
                    <span className={`diff-pill ${ex.difficulty.toLowerCase()}`}>
                      {ex.difficulty}
                    </span>
                  </div>

                  <div className="col-action">
                    <button
                      type="button"
                      className="solve-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectExercise(ex.id);
                      }}
                    >
                      <span>{isCompleted ? 'Review' : 'Solve'}</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>
    </div>
  );
}
