import { useState } from 'react';
import { Copy, Check, BookOpen, AlertCircle, FileText } from 'lucide-react';
import type { Exercise } from '../types';

type ProblemPanelProps = {
  exercise: Exercise;
};

export default function ProblemPanel({ exercise }: ProblemPanelProps) {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <article className="problem-panel">
      <div className="problem-header">
        <div className="problem-meta-tags">
          <span className="problem-index-badge">Problem {exercise.id.toString().padStart(2, '0')}</span>
          <span className="problem-category-tag">{exercise.category}</span>
        </div>
        <span className={`difficulty ${exercise.difficulty.toLowerCase()}`}>
          {exercise.difficulty}
        </span>
      </div>

      <h1 className="problem-title">{exercise.title}</h1>

      <div className="problem-section description-section">
        <p className="problem-description">{exercise.description}</p>
      </div>

      <div className="problem-section">
        <h3 className="section-title">
          <FileText size={15} /> Input Format
        </h3>
        <div className="section-content text-box">{exercise.inputFormat}</div>
      </div>

      <div className="problem-section">
        <h3 className="section-title">
          <FileText size={15} /> Output Format
        </h3>
        <div className="section-content text-box">{exercise.outputFormat}</div>
      </div>

      {exercise.constraints && exercise.constraints.length > 0 && (
        <div className="problem-section">
          <h3 className="section-title">
            <AlertCircle size={15} /> Constraints
          </h3>
          <ul className="constraints-list">
            {exercise.constraints.map((constraint, idx) => (
              <li key={idx}><code>{constraint}</code></li>
            ))}
          </ul>
        </div>
      )}

      <div className="problem-section sample-io-grid">
        <div className="sample-card">
          <div className="sample-header">
            <span>Sample Input</span>
            <button
              className="copy-btn"
              onClick={() => copyToClipboard(exercise.sampleInput, 'input')}
              title="Copy to clipboard"
            >
              {copiedField === 'input' ? <Check size={13} className="text-success" /> : <Copy size={13} />}
              <span>{copiedField === 'input' ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
          <pre className="sample-block"><code>{exercise.sampleInput}</code></pre>
        </div>

        <div className="sample-card">
          <div className="sample-header">
            <span>Sample Output</span>
            <button
              className="copy-btn"
              onClick={() => copyToClipboard(exercise.sampleOutput, 'output')}
              title="Copy to clipboard"
            >
              {copiedField === 'output' ? <Check size={13} className="text-success" /> : <Copy size={13} />}
              <span>{copiedField === 'output' ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
          <pre className="sample-block"><code>{exercise.sampleOutput}</code></pre>
        </div>
      </div>

      {exercise.explanation && (
        <div className="problem-section">
          <h3 className="section-title">
            <BookOpen size={15} /> Explanation
          </h3>
          <div className="section-content explanation-box">{exercise.explanation}</div>
        </div>
      )}
    </article>
  );
}
