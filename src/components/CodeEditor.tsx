import CodeMirror from '@uiw/react-codemirror';
import { cpp } from '@codemirror/lang-cpp';
import { oneDark } from '@codemirror/theme-one-dark';
import { Play, Send, RotateCcw, Code, Loader2 } from 'lucide-react';

type CodeEditorProps = {
  code: string;
  onChange: (code: string) => void;
  onRun: () => void;
  onSubmit: () => void;
  isRunning: boolean;
  onReset: () => void;
};

export default function CodeEditor({
  code,
  onChange,
  onRun,
  onSubmit,
  isRunning,
  onReset,
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
          height="380px"
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

      <div className="editor-actions">
        <div className="editor-actions-left">
          <span className="shortcut-hint">Ready to compile & test</span>
        </div>
        <div className="editor-actions-right">
          <button
            type="button"
            className="run-button"
            onClick={onRun}
            disabled={isRunning}
            title="Run against visible sample test cases"
          >
            {isRunning ? <Loader2 size={14} className="spin" /> : <Play size={14} fill="currentColor" />}
            <span>Run Code</span>
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
