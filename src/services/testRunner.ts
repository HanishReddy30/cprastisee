import type { TestCase, TestResult } from '../types'
import { executeC } from './pistonApi'

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export async function runTests(
  code: string,
  testCases: TestCase[],
  onProgress?: (results: TestResult[]) => void
): Promise<TestResult[]> {
  const results: TestResult[] = []
  let compileErrorEncountered = false
  let compileStderr = ''

  for (let i = 0; i < testCases.length; i++) {
    const testCase = testCases[i]

    if (compileErrorEncountered) {
      results.push({
        testCaseId: testCase.id,
        status: 'error',
        actualOutput: '',
        expectedOutput: testCase.expectedOutput,
        stderr: compileStderr,
      })
      onProgress?.([...results])
      continue
    }

    // Small delay between tests to space out requests gracefully
    if (i > 0) {
      await delay(120)
    }

    const result = await executeC(code, testCase.input)

    if (result.compileError) {
      compileErrorEncountered = true
      compileStderr = result.compileError
      results.push({
        testCaseId: testCase.id,
        status: 'error',
        actualOutput: '',
        expectedOutput: testCase.expectedOutput,
        stderr: result.compileError,
      })
      onProgress?.([...results])
      continue
    }

    if (result.timedOut) {
      results.push({
        testCaseId: testCase.id,
        status: 'timeout',
        actualOutput: result.stdout,
        expectedOutput: testCase.expectedOutput,
        stderr: result.stderr || 'Execution timed out',
      })
      onProgress?.([...results])
      continue
    }

    if (result.exitCode !== 0) {
      results.push({
        testCaseId: testCase.id,
        status: 'error',
        actualOutput: result.stdout,
        expectedOutput: testCase.expectedOutput,
        stderr: result.stderr,
      })
      onProgress?.([...results])
      continue
    }

    const passed = result.stdout.trim() === testCase.expectedOutput.trim()
    results.push({
      testCaseId: testCase.id,
      status: passed ? 'passed' : 'failed',
      actualOutput: result.stdout,
      expectedOutput: testCase.expectedOutput,
      stderr: result.stderr || undefined,
    })
    onProgress?.([...results])
  }

  return results
}
