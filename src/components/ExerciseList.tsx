import { Search, X, Check, ChevronRight, Lightbulb, Filter, Layers } from 'lucide-react';
import type { Exercise, Category, CategoryInfo } from '../types';

type ExerciseListProps = {
  exercises: Exercise[];
  selectedId: number;
  completedIds: number[];
  category: Category;
  categories: CategoryInfo[];
  query: string;
  mobileOpen: boolean;
  onSelectExercise: (id: number) => void;
  onCategoryChange: (cat: Category) => void;
  onQueryChange: (q: string) => void;
  onCloseMobile: () => void;
};

export default function ExerciseList({
  exercises,
  selectedId,
  completedIds,
  category,
  categories,
  query,
  mobileOpen,
  onSelectExercise,
  onCategoryChange,
  onQueryChange,
  onCloseMobile,
}: ExerciseListProps) {
  return (
    <aside className={`sidebar ${mobileOpen ? 'is-open' : ''}`}>
      <div className="sidebar-heading">
        <span><Filter size={13} style={{ marginRight: 6 }} />Categories</span>
        <span className="library-count">{exercises.length}</span>
      </div>

      <nav className="category-nav">
        {categories.map((c) => (
          <button
            key={c.label}
            className={`category-btn ${category === c.label ? 'active' : ''}`}
            onClick={() => onCategoryChange(c.label)}
          >
            <span>{c.label === 'All' ? 'All problems' : c.label}</span>
            <span className="cat-count">{c.count}</span>
          </button>
        ))}
      </nav>

      <div className="sidebar-search-wrap">
        <div className="search-box">
          <Search size={15} />
          <input
            type="text"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Search problems..."
          />
          <span className="kbd-hint">/</span>
          {query && (
            <button className="clear-search-btn" onClick={() => onQueryChange('')} aria-label="Clear search">
              <X size={13} />
            </button>
          )}
        </div>
      </div>

      <div className="list-meta">
        <span><Layers size={12} style={{ marginRight: 4 }} />{exercises.length} Exercises</span>
        <span>{completedIds.length} Solved</span>
      </div>

      <div className="exercise-list">
        {exercises.map((ex) => {
          const isCompleted = completedIds.includes(ex.id);
          const isSelected = ex.id === selectedId;
          return (
            <button
              key={ex.id}
              type="button"
              className={`exercise-card ${isSelected ? 'selected' : ''}`}
              onClick={() => {
                onSelectExercise(ex.id);
                onCloseMobile();
              }}
            >
              <span className="exercise-number">{ex.id.toString().padStart(2, '0')}</span>
              <span className="exercise-info">
                <strong className="exercise-card-title">{ex.title}</strong>
                <small className="exercise-card-sub">
                  <span>{ex.category}</span>
                  <i className="dot-separator" />
                  <span className={`diff-tag ${ex.difficulty.toLowerCase()}`}>{ex.difficulty}</span>
                </small>
              </span>
              <span className={`status-icon-wrap ${isCompleted ? 'is-completed' : ''}`}>
                {isCompleted ? <Check size={14} /> : <ChevronRight size={14} className="card-arrow" />}
              </span>
            </button>
          );
        })}
      </div>

      <div className="sidebar-note">
        <Lightbulb size={16} />
        <span>Solve and run test cases to build your C programming mastery.</span>
      </div>
    </aside>
  );
}
