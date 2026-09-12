export type ExecutionResult = {
  stdout: string
  stderr: string
  exitCode: number
  compileError?: string
  timedOut: boolean
}

// Judge0 Public CE API endpoint (CORS-enabled, GCC 9.2.0)
const JUDGE0_API_URL = 'https://ce.judge0.com/submissions?base64_encoded=true&wait=true'

function toBase64(str: string): string {
  try {
    return btoa(unescape(encodeURIComponent(str)))
  } catch {
    return btoa(str)
  }
}

function fromBase64(str: string | null | undefined): string {
  if (!str) return ''
  try {
    return decodeURIComponent(escape(atob(str)))
  } catch {
    try {
      return atob(str)
    } catch {
      return str
    }
  }
}

export async function executeC(code: string, stdin: string, retries = 2): Promise<ExecutionResult> {
  let response: Response

  try {
    response = await fetch(JUDGE0_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        source_code: toBase64(code),
        language_id: 50, // C (GCC 9.2.0)
        stdin: toBase64(stdin || ''),
        cpu_time_limit: 4,
        memory_limit: 128000,
      }),
    })
  } catch {
    return {
      stdout: '',
      stderr: 'Network error: Unable to reach the code execution server. Please check your internet connection.',
      exitCode: 1,
      timedOut: false,
    }
  }

  // Automatic retry on rate limiting (useful when classroom of students submit at once)
  if (response.status === 429) {
    if (retries > 0) {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      return executeC(code, stdin, retries - 1)
    }
    return {
      stdout: '',
      stderr: 'Compiler busy: Many students are submitting right now. Please wait 3 seconds and retry.',
      exitCode: 1,
      timedOut: false,
    }
  }

  if (!response.ok) {
    return {
      stdout: '',
      stderr: `Server error (${response.status}): Unable to execute code. Please try again.`,
      exitCode: 1,
      timedOut: false,
    }
  }

  const data = await response.json()

  const stdout = fromBase64(data.stdout)
  const stderr = fromBase64(data.stderr)
  const compileOutput = fromBase64(data.compile_output)
  const statusId = data.status?.id ?? 0

  // Status 6: Compilation Error
  if (statusId === 6 || compileOutput) {
    return {
      stdout: '',
      stderr: compileOutput || 'Compilation failed',
      compileError: compileOutput || 'Compilation failed',
      exitCode: 1,
      timedOut: false,
    }
  }

  // Status 5: Time Limit Exceeded
  if (statusId === 5) {
    return {
      stdout,
      stderr: 'Time Limit Exceeded: Your program took more than 4 seconds to execute.',
      exitCode: 1,
      timedOut: true,
    }
  }

  // Status 3: Accepted (Success)
  // Status >= 7: Runtime error
  const isRuntimeError = statusId > 6
  return {
    stdout,
    stderr: stderr || (isRuntimeError ? (data.status?.description || 'Runtime error') : ''),
    exitCode: isRuntimeError ? 1 : 0,
    timedOut: false,
  }
}
