import CodeMirror from '@uiw/react-codemirror';
import { cpp } from '@codemirror/lang-cpp';
import { oneDark } from '@codemirror/theme-one-dark';
import { Play, Send, RotateCcw, Code, Loader2, SlidersHorizontal } from 'lucide-react';

type CodeEditorProps = {
  code: string;
  onChange: (code: string) => void;
  onRun: () => void;
  onSubmit: () => void;
  isRunning: boolean;
  onReset: () => void;
  customInput: string;
  onCustomInputChange: (val: string) => void;
  useCustomInput: boolean;
  onToggleCustomInput: (val: boolean) => void;
};

export default function CodeEditor({
  code,
  onChange,
  onRun,
  onSubmit,
  isRunning,
  onReset,
  customInput,
  onCustomInputChange,
  useCustomInput,
  onToggleCustomInput,
}: CodeEditorProps) {
  return (
    <div className="editor-panel">
      <div className="editor-topbar">
        <div className="editor-file-info">
          <Code size={15} className="editor-icon" />
          <span className="editor-file">main.c</span>
          <span className="editor-badge">C (GCC)</span>
        </div>
        <div className="editor-topbar-tools">
          <button
            type="button"
            className="reset-button"
            onClick={onReset}
            disabled={isRunning}
            title="Reset code to initial template"
          >
            <RotateCcw size={13} />
            <span>Reset</span>
          </button>
        </div>
      </div>

      <div className="codemirror-wrapper">
        <CodeMirror
          value={code}
          height="370px"
          extensions={[cpp()]}
          theme={oneDark}
          onChange={onChange}
          basicSetup={{
            lineNumbers: true,
            bracketMatching: true,
            closeBrackets: true,
            autocompletion: true,
            indentOnInput: true,
            foldGutter: true,
            highlightActiveLineGutter: true,
          }}
        />
      </div>

      {/* Custom Input Section */}
      <div className="custom-input-section">
        <label className="custom-input-checkbox-label">
          <input
            type="checkbox"
            checked={useCustomInput}
            onChange={(e) => onToggleCustomInput(e.target.checked)}
            disabled={isRunning}
          />
          <SlidersHorizontal size={13} />
          <span>Test against custom input</span>
        </label>

        {useCustomInput && (
          <div className="custom-input-wrapper">
            <textarea
              className="custom-input-textarea"
              placeholder="Enter your custom input (stdin) here... e.g. values to be read by scanf()"
              value={customInput}
              onChange={(e) => onCustomInputChange(e.target.value)}
              disabled={isRunning}
              rows={3}
            />
          </div>
        )}
      </div>

      <div className="editor-actions">
        <div className="editor-actions-left">
          <span className="shortcut-hint">
            {useCustomInput ? 'Will execute with your custom stdin' : 'Ready to compile & test'}
          </span>
        </div>
        <div className="editor-actions-right">
          <button
            type="button"
            className={`run-button ${useCustomInput ? 'custom-active' : ''}`}
            onClick={onRun}
            disabled={isRunning}
            title={useCustomInput ? 'Run code with custom input' : 'Run against sample test cases'}
          >
            {isRunning ? (
              <Loader2 size={14} className="spin" />
            ) : (
              <Play size={14} fill="currentColor" />
            )}
            <span>{useCustomInput ? 'Run with Custom Input' : 'Run Code'}</span>
          </button>
          <button
            type="button"
            className="submit-button"
            onClick={onSubmit}
            disabled={isRunning}
            title="Submit against all test cases including hidden ones"
          >
            {isRunning ? <Loader2 size={14} className="spin" /> : <Send size={14} />}
            <span>Submit Solution</span>
          </button>
        </div>
      </div>
    </div>
  );
}
