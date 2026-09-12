export type Category = 'All' | 'Basics' | 'Conditionals' | 'Switch' | 'Numbers' | 'Series' | 'Patterns'

export type Difficulty = 'Starter' | 'Core' | 'Challenge'

export type TestCase = {
  id: number
  input: string
  expectedOutput: string
  isHidden: boolean
}

export type Exercise = {
  id: number
  title: string
  category: Exclude<Category, 'All'>
  difficulty: Difficulty
  description: string
  inputFormat: string
  outputFormat: string
  constraints: string[]
  sampleInput: string
  sampleOutput: string
  explanation?: string
  testCases: TestCase[]
  starterCode: string
  solutionCode: string
  hint: string
}

export type TestResultStatus = 'passed' | 'failed' | 'error' | 'timeout' | 'running' | 'pending'

export type TestResult = {
  testCaseId: number
  status: TestResultStatus
  actualOutput: string
  expectedOutput: string
  stderr?: string
}

export type SubmissionStatus = 'idle' | 'running' | 'compileError' | 'allPassed' | 'someFailed'

export type CategoryInfo = {
  label: Category
  count: number
}
