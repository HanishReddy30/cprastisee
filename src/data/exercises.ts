import type { Exercise, CategoryInfo } from '../types';

export const exercises: Exercise[] = [
  {
    "id": 1,
    "title": "Calculate total and average of six subjects",
    "category": "Basics",
    "difficulty": "Starter",
    "description": "Write a program that takes marks obtained in six subjects as floating point values, calculates the total sum of marks, and finds the average mark.",
    "inputFormat": "Six space-separated or newline-separated floating point numbers representing marks in 6 subjects.",
    "outputFormat": "Print 'Total: <total>' on the first line and 'Average: <average>' on the second line, both formatted to 2 decimal places.",
    "constraints": [
      "0 <= marks <= 100"
    ],
    "sampleInput": "85 90 78 92 88 76",
    "sampleOutput": "Total: 509.00\nAverage: 84.83",
    "explanation": "Sum of 85+90+78+92+88+76 = 509.00. Average = 509 / 6 = 84.83.",
    "testCases": [
      {
        "id": 1,
        "input": "85 90 78 92 88 76",
        "expectedOutput": "Total: 509.00\nAverage: 84.83",
        "isHidden": false
      },
      {
        "id": 2,
        "input": "100 100 100 100 100 100",
        "expectedOutput": "Total: 600.00\nAverage: 100.00",
        "isHidden": false
      },
      {
        "id": 3,
        "input": "50 60 70 80 90 100",
        "expectedOutput": "Total: 450.00\nAverage: 75.00",
        "isHidden": true
      },
      {
        "id": 4,
        "input": "35.5 42.5 58.0 65.5 70.0 82.5",
        "expectedOutput": "Total: 354.00\nAverage: 59.00",
        "isHidden": true
      }
    ],
    "starterCode": "#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}",
    "solutionCode": "#include <stdio.h>\n\nint main() {\n    float marks[6], total = 0;\n    for (int i = 0; i < 6; i++) {\n        if (scanf(\"%f\", &marks[i]) != 1) return 0;\n        total += marks[i];\n    }\n    printf(\"Total: %.2f\\nAverage: %.2f\\n\", total, total / 6.0f);\n    return 0;\n}",
    "hint": "Use an array or loop to accumulate sum into a float variable, then divide by 6.0."
  },
  {
    "id": 2,
    "title": "Convert Fahrenheit to Centigrade",
    "category": "Basics",
    "difficulty": "Starter",
    "description": "Write a program to convert temperature from Fahrenheit scale to Centigrade (Celsius) scale using the formula C = (F - 32) * 5 / 9.",
    "inputFormat": "A single floating point number representing temperature in Fahrenheit.",
    "outputFormat": "Print the converted temperature in Centigrade formatted to 2 decimal places followed by ' C'.",
    "constraints": [
      "-459.67 <= F <= 10000"
    ],
    "sampleInput": "212",
    "sampleOutput": "100.00 C",
    "explanation": "(212 - 32) * 5 / 9 = 180 * 5 / 9 = 100.00 C.",
    "testCases": [
      {
        "id": 1,
        "input": "212",
        "expectedOutput": "100.00 C",
        "isHidden": false
      },
      {
        "id": 2,
        "input": "32",
        "expectedOutput": "0.00 C",
        "isHidden": false
      },
      {
        "id": 3,
        "input": "98.6",
        "expectedOutput": "37.00 C",
        "isHidden": true
      },
      {
        "id": 4,
        "input": "-40",
        "expectedOutput": "-40.00 C",
        "isHidden": true
      }
    ],
    "starterCode": "#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}",
    "solutionCode": "#include <stdio.h>\n\nint main() {\n    float fahrenheit;\n    if (scanf(\"%f\", &fahrenheit) == 1) {\n        float centigrade = (fahrenheit - 32.0f) * 5.0f / 9.0f;\n        printf(\"%.2f C\\n\", centigrade);\n    }\n    return 0;\n}",
    "hint": "Subtract 32 before multiplying by 5.0 / 9.0 using floating point numbers."
  },
  {
    "id": 3,
    "title": "Swap two numbers without a third variable",
    "category": "Basics",
    "difficulty": "Core",
    "description": "Swap two integer values without declaring or using any third/temporary variable.",
    "inputFormat": "Two space-separated integers A and B.",
    "outputFormat": "Print the swapped integers separated by a space.",
    "constraints": [
      "-10^6 <= A, B <= 10^6"
    ],
    "sampleInput": "5 10",
    "sampleOutput": "10 5",
    "explanation": "Original A = 5, B = 10. After swap A = 10, B = 5.",
    "testCases": [
      {
        "id": 1,
        "input": "5 10",
        "expectedOutput": "10 5",
        "isHidden": false
      },
      {
        "id": 2,
        "input": "-3 7",
        "expectedOutput": "7 -3",
        "isHidden": false
      },
      {
        "id": 3,
        "input": "100 200",
        "expectedOutput": "200 100",
        "isHidden": true
      },
      {
        "id": 4,
        "input": "0 42",
        "expectedOutput": "42 0",
        "isHidden": true
      }
    ],
    "starterCode": "#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}",
    "solutionCode": "#include <stdio.h>\n\nint main() {\n    int a, b;\n    if (scanf(\"%d %d\", &a, &b) == 2) {\n        a = a + b;\n        b = a - b;\n        a = a - b;\n        printf(\"%d %d\\n\", a, b);\n    }\n    return 0;\n}",
    "hint": "Use addition and subtraction: a = a + b; b = a - b; a = a - b."
  },
  {
    "id": 4,
    "title": "Swap two numbers using a temp variable",
    "category": "Basics",
    "difficulty": "Starter",
    "description": "Write a program to exchange the values of two integers using a third temporary variable.",
    "inputFormat": "Two space-separated integers.",
    "outputFormat": "Print the swapped numbers separated by a space.",
    "constraints": [
      "-10^6 <= A, B <= 10^6"
    ],
    "sampleInput": "15 30",
    "sampleOutput": "30 15",
    "explanation": "Initial values 15 and 30 become 30 and 15 after swapping.",
    "testCases": [
      {
        "id": 1,
        "input": "15 30",
        "expectedOutput": "30 15",
        "isHidden": false
      },
      {
        "id": 2,
        "input": "1 2",
        "expectedOutput": "2 1",
        "isHidden": false
      },
      {
        "id": 3,
        "input": "-10 -20",
        "expectedOutput": "-20 -10",
        "isHidden": true
      },
      {
        "id": 4,
        "input": "99 0",
        "expectedOutput": "0 99",
        "isHidden": true
      }
    ],
    "starterCode": "#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}",
    "solutionCode": "#include <stdio.h>\n\nint main() {\n    int a, b, temp;\n    if (scanf(\"%d %d\", &a, &b) == 2) {\n        temp = a;\n        a = b;\n        b = temp;\n        printf(\"%d %d\\n\", a, b);\n    }\n    return 0;\n}",
    "hint": "Store variable 'a' in 'temp', assign 'b' to 'a', then assign 'temp' to 'b'."
  },
  {
    "id": 5,
    "title": "Sum of first n natural numbers, squares and cubes",
    "category": "Basics",
    "difficulty": "Core",
    "description": "Calculate and print the sum of the first N natural numbers, the sum of their squares, and the sum of their cubes.",
    "inputFormat": "A single positive integer N.",
    "outputFormat": "Print 'Sum: <sum>', 'Squares: <sum_squares>', and 'Cubes: <sum_cubes>' each on a new line.",
    "constraints": [
      "1 <= N <= 1000"
    ],
    "sampleInput": "5",
    "sampleOutput": "Sum: 15\nSquares: 55\nCubes: 225",
    "explanation": "Numbers: 1+2+3+4+5=15. Squares: 1+4+9+16+25=55. Cubes: 1+8+27+64+125=225.",
    "testCases": [
      {
        "id": 1,
        "input": "5",
        "expectedOutput": "Sum: 15\nSquares: 55\nCubes: 225",
        "isHidden": false
      },
      {
        "id": 2,
        "input": "1",
        "expectedOutput": "Sum: 1\nSquares: 1\nCubes: 1",
        "isHidden": false
      },
      {
        "id": 3,
        "input": "10",
        "expectedOutput": "Sum: 55\nSquares: 385\nCubes: 3025",
        "isHidden": true
      },
      {
        "id": 4,
        "input": "20",
        "expectedOutput": "Sum: 210\nSquares: 2870\nCubes: 44100",
        "isHidden": true
      }
    ],
    "starterCode": "#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}",
    "solutionCode": "#include <stdio.h>\n\nint main() {\n    int n;\n    if (scanf(\"%d\", &n) == 1) {\n        long long sum = 0, sq = 0, cb = 0;\n        for (int i = 1; i <= n; i++) {\n            sum += i;\n            sq += (long long)i * i;\n            cb += (long long)i * i * i;\n        }\n        printf(\"Sum: %lld\\nSquares: %lld\\nCubes: %lld\\n\", sum, sq, cb);\n    }\n    return 0;\n}",
    "hint": "Use long long variables to prevent overflow while summing squares and cubes in a loop."
  },
  {
    "id": 6,
    "title": "Maximum of four numbers using simple if",
    "category": "Conditionals",
    "difficulty": "Starter",
    "description": "Find and print the largest of four integers using simple if statements.",
    "inputFormat": "Four space-separated integers A, B, C, D.",
    "outputFormat": "Print the maximum value.",
    "constraints": [
      "-10^6 <= A, B, C, D <= 10^6"
    ],
    "sampleInput": "12 45 23 38",
    "sampleOutput": "45",
    "explanation": "45 is the greatest among 12, 45, 23, and 38.",
    "testCases": [
      {
        "id": 1,
        "input": "12 45 23 38",
        "expectedOutput": "45",
        "isHidden": false
      },
      {
        "id": 2,
        "input": "99 2 5 10",
        "expectedOutput": "99",
        "isHidden": false
      },
      {
        "id": 3,
        "input": "1 2 3 100",
        "expectedOutput": "100",
        "isHidden": true
      },
      {
        "id": 4,
        "input": "-10 -50 -5 -20",
        "expectedOutput": "-5",
        "isHidden": true
      }
    ],
    "starterCode": "#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}",
    "solutionCode": "#include <stdio.h>\n\nint main() {\n    int a, b, c, d;\n    if (scanf(\"%d %d %d %d\", &a, &b, &c, &d) == 4) {\n        int max = a;\n        if (b > max) max = b;\n        if (c > max) max = c;\n        if (d > max) max = d;\n        printf(\"%d\\n\", max);\n    }\n    return 0;\n}",
    "hint": "Initialize max = a, then compare with b, c, and d one by one."
  },
  {
    "id": 7,
    "title": "Positive or Negative number",
    "category": "Conditionals",
    "difficulty": "Starter",
    "description": "Determine whether a given integer is Positive, Negative, or Zero.",
    "inputFormat": "A single integer.",
    "outputFormat": "Print 'Positive', 'Negative', or 'Zero'.",
    "constraints": [
      "-10^9 <= N <= 10^9"
    ],
    "sampleInput": "5",
    "sampleOutput": "Positive",
    "explanation": "5 is strictly greater than 0, so it is Positive.",
    "testCases": [
      {
        "id": 1,
        "input": "5",
        "expectedOutput": "Positive",
        "isHidden": false
      },
      {
        "id": 2,
        "input": "-15",
        "expectedOutput": "Negative",
        "isHidden": false
      },
      {
        "id": 3,
        "input": "0",
        "expectedOutput": "Zero",
        "isHidden": true
      },
      {
        "id": 4,
        "input": "1000",
        "expectedOutput": "Positive",
        "isHidden": true
      }
    ],
    "starterCode": "#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}",
    "solutionCode": "#include <stdio.h>\n\nint main() {\n    int n;\n    if (scanf(\"%d\", &n) == 1) {\n        if (n > 0) printf(\"Positive\\n\");\n        else if (n < 0) printf(\"Negative\\n\");\n        else printf(\"Zero\\n\");\n    }\n    return 0;\n}",
    "hint": "Use if (n > 0), else if (n < 0), and else."
  },
  {
    "id": 8,
    "title": "Even or Odd number",
    "category": "Conditionals",
    "difficulty": "Starter",
    "description": "Check whether a given integer is Even or Odd.",
    "inputFormat": "A single integer N.",
    "outputFormat": "Print 'Even' if the number is even, otherwise 'Odd'.",
    "constraints": [
      "-10^9 <= N <= 10^9"
    ],
    "sampleInput": "4",
    "sampleOutput": "Even",
    "explanation": "4 % 2 == 0, so it is Even.",
    "testCases": [
      {
        "id": 1,
        "input": "4",
        "expectedOutput": "Even",
        "isHidden": false
      },
      {
        "id": 2,
        "input": "7",
        "expectedOutput": "Odd",
        "isHidden": false
      },
      {
        "id": 3,
        "input": "0",
        "expectedOutput": "Even",
        "isHidden": true
      },
      {
        "id": 4,
        "input": "101",
        "expectedOutput": "Odd",
        "isHidden": true
      }
    ],
    "starterCode": "#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}",
    "solutionCode": "#include <stdio.h>\n\nint main() {\n    int n;\n    if (scanf(\"%d\", &n) == 1) {\n        if (n % 2 == 0) printf(\"Even\\n\");\n        else printf(\"Odd\\n\");\n    }\n    return 0;\n}",
    "hint": "Use the modulo operator: if (n % 2 == 0)."
  },
  {
    "id": 9,
    "title": "Divisible by 3 or not",
    "category": "Conditionals",
    "difficulty": "Starter",
    "description": "Check whether a given integer is exactly divisible by 3.",
    "inputFormat": "A single integer.",
    "outputFormat": "Print 'Divisible by 3' or 'Not divisible by 3'.",
    "constraints": [
      "-10^9 <= N <= 10^9"
    ],
    "sampleInput": "9",
    "sampleOutput": "Divisible by 3",
    "explanation": "9 divided by 3 leaves a remainder of 0.",
    "testCases": [
      {
        "id": 1,
        "input": "9",
        "expectedOutput": "Divisible by 3",
        "isHidden": false
      },
      {
        "id": 2,
        "input": "10",
        "expectedOutput": "Not divisible by 3",
        "isHidden": false
      },
      {
        "id": 3,
        "input": "0",
        "expectedOutput": "Divisible by 3",
        "isHidden": true
      },
      {
        "id": 4,
        "input": "333",
        "expectedOutput": "Divisible by 3",
        "isHidden": true
      }
    ],
    "starterCode": "#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}",
    "solutionCode": "#include <stdio.h>\n\nint main() {\n    int n;\n    if (scanf(\"%d\", &n) == 1) {\n        if (n % 3 == 0) printf(\"Divisible by 3\\n\");\n        else printf(\"Not divisible by 3\\n\");\n    }\n    return 0;\n}",
    "hint": "Check if (n % 3 == 0)."
  },
  {
    "id": 10,
    "title": "Vowel or Consonant",
    "category": "Conditionals",
    "difficulty": "Starter",
    "description": "Given a single alphabet letter (lowercase or uppercase), determine if it is a Vowel or a Consonant.",
    "inputFormat": "A single character.",
    "outputFormat": "Print 'Vowel' if vowel, 'Consonant' otherwise.",
    "constraints": [
      "Character is an English alphabet letter."
    ],
    "sampleInput": "a",
    "sampleOutput": "Vowel",
    "explanation": "'a' is one of the vowels (a, e, i, o, u).",
    "testCases": [
      {
        "id": 1,
        "input": "a",
        "expectedOutput": "Vowel",
        "isHidden": false
      },
      {
        "id": 2,
        "input": "z",
        "expectedOutput": "Consonant",
        "isHidden": false
      },
      {
        "id": 3,
        "input": "E",
        "expectedOutput": "Vowel",
        "isHidden": true
      },
      {
        "id": 4,
        "input": "B",
        "expectedOutput": "Consonant",
        "isHidden": true
      }
    ],
    "starterCode": "#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}",
    "solutionCode": "#include <stdio.h>\n#include <ctype.h>\n\nint main() {\n    char ch;\n    if (scanf(\" %c\", &ch) == 1) {\n        char lower = tolower(ch);\n        if (lower == 'a' || lower == 'e' || lower == 'i' || lower == 'o' || lower == 'u')\n            printf(\"Vowel\\n\");\n        else\n            printf(\"Consonant\\n\");\n    }\n    return 0;\n}",
    "hint": "Check both lowercase and uppercase vowels or convert character using tolower()."
  },
  {
    "id": 11,
    "title": "Biggest or Smallest of two numbers",
    "category": "Conditionals",
    "difficulty": "Starter",
    "description": "Given two distinct integers, print which one is the biggest and which one is the smallest.",
    "inputFormat": "Two space-separated integers A and B.",
    "outputFormat": "Print 'Biggest: <val>' on the first line and 'Smallest: <val>' on the second line.",
    "constraints": [
      "-10^6 <= A, B <= 10^6"
    ],
    "sampleInput": "15 8",
    "sampleOutput": "Biggest: 15\nSmallest: 8",
    "explanation": "15 is greater than 8.",
    "testCases": [
      {
        "id": 1,
        "input": "15 8",
        "expectedOutput": "Biggest: 15\nSmallest: 8",
        "isHidden": false
      },
      {
        "id": 2,
        "input": "3 20",
        "expectedOutput": "Biggest: 20\nSmallest: 3",
        "isHidden": false
      },
      {
        "id": 3,
        "input": "-5 -1",
        "expectedOutput": "Biggest: -1\nSmallest: -5",
        "isHidden": true
      },
      {
        "id": 4,
        "input": "100 0",
        "expectedOutput": "Biggest: 100\nSmallest: 0",
        "isHidden": true
      }
    ],
    "starterCode": "#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}",
    "solutionCode": "#include <stdio.h>\n\nint main() {\n    int a, b;\n    if (scanf(\"%d %d\", &a, &b) == 2) {\n        if (a > b)\n            printf(\"Biggest: %d\\nSmallest: %d\\n\", a, b);\n        else\n            printf(\"Biggest: %d\\nSmallest: %d\\n\", b, a);\n    }\n    return 0;\n}",
    "hint": "Compare if (a > b) and print accordingly."
  },
  {
    "id": 12,
    "title": "Leap year or not",
    "category": "Conditionals",
    "difficulty": "Core",
    "description": "Determine whether a given calendar year is a Leap year or Not a leap year.",
    "inputFormat": "A single integer year Y.",
    "outputFormat": "Print 'Leap year' or 'Not a leap year'.",
    "constraints": [
      "1 <= Y <= 9999"
    ],
    "sampleInput": "2000",
    "sampleOutput": "Leap year",
    "explanation": "2000 is divisible by 400, hence it is a leap year.",
    "testCases": [
      {
        "id": 1,
        "input": "2000",
        "expectedOutput": "Leap year",
        "isHidden": false
      },
      {
        "id": 2,
        "input": "1900",
        "expectedOutput": "Not a leap year",
        "isHidden": false
      },
      {
        "id": 3,
        "input": "2024",
        "expectedOutput": "Leap year",
        "isHidden": true
      },
      {
        "id": 4,
        "input": "2023",
        "expectedOutput": "Not a leap year",
        "isHidden": true
      }
    ],
    "starterCode": "#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}",
    "solutionCode": "#include <stdio.h>\n\nint main() {\n    int year;\n    if (scanf(\"%d\", &year) == 1) {\n        if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0))\n            printf(\"Leap year\\n\");\n        else\n            printf(\"Not a leap year\\n\");\n    }\n    return 0;\n}",
    "hint": "A year is leap if divisible by 400 OR (divisible by 4 and not divisible by 100)."
  },
  {
    "id": 13,
    "title": "Biggest of 3 Numbers",
    "category": "Conditionals",
    "difficulty": "Starter",
    "description": "Find and display the biggest of three integers.",
    "inputFormat": "Three space-separated integers A, B, and C.",
    "outputFormat": "Print the largest value.",
    "constraints": [
      "-10^6 <= A, B, C <= 10^6"
    ],
    "sampleInput": "12 45 23",
    "sampleOutput": "45",
    "explanation": "45 is greater than both 12 and 23.",
    "testCases": [
      {
        "id": 1,
        "input": "12 45 23",
        "expectedOutput": "45",
        "isHidden": false
      },
      {
        "id": 2,
        "input": "100 50 25",
        "expectedOutput": "100",
        "isHidden": false
      },
      {
        "id": 3,
        "input": "10 20 80",
        "expectedOutput": "80",
        "isHidden": true
      },
      {
        "id": 4,
        "input": "-30 -10 -50",
        "expectedOutput": "-10",
        "isHidden": true
      }
    ],
    "starterCode": "#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}",
    "solutionCode": "#include <stdio.h>\n\nint main() {\n    int a, b, c;\n    if (scanf(\"%d %d %d\", &a, &b, &c) == 3) {\n        if (a >= b && a >= c) printf(\"%d\\n\", a);\n        else if (b >= a && b >= c) printf(\"%d\\n\", b);\n        else printf(\"%d\\n\", c);\n    }\n    return 0;\n}",
    "hint": "Use logical && in an else-if ladder."
  },
  {
    "id": 14,
    "title": "Smallest of 3 numbers",
    "category": "Conditionals",
    "difficulty": "Starter",
    "description": "Find and display the smallest of three integers.",
    "inputFormat": "Three space-separated integers A, B, and C.",
    "outputFormat": "Print the smallest value.",
    "constraints": [
      "-10^6 <= A, B, C <= 10^6"
    ],
    "sampleInput": "12 45 23",
    "sampleOutput": "12",
    "explanation": "12 is smaller than 45 and 23.",
    "testCases": [
      {
        "id": 1,
        "input": "12 45 23",
        "expectedOutput": "12",
        "isHidden": false
      },
      {
        "id": 2,
        "input": "70 20 50",
        "expectedOutput": "20",
        "isHidden": false
      },
      {
        "id": 3,
        "input": "5 5 1",
        "expectedOutput": "1",
        "isHidden": true
      },
      {
        "id": 4,
        "input": "-15 -5 -30",
        "expectedOutput": "-30",
        "isHidden": true
      }
    ],
    "starterCode": "#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}",
    "solutionCode": "#include <stdio.h>\n\nint main() {\n    int a, b, c;\n    if (scanf(\"%d %d %d\", &a, &b, &c) == 3) {\n        int min = a;\n        if (b < min) min = b;\n        if (c < min) min = c;\n        printf(\"%d\\n\", min);\n    }\n    return 0;\n}",
    "hint": "Initialize min = a, then compare with b and c."
  },
  {
    "id": 15,
    "title": "Arithmetic operations using else-if ladder",
    "category": "Conditionals",
    "difficulty": "Core",
    "description": "Perform basic arithmetic (+, -, *, /) on two floating point numbers using an else-if ladder.",
    "inputFormat": "A character operator (+, -, *, /) followed by two space-separated numbers.",
    "outputFormat": "Print the calculated result formatted to 2 decimal places.",
    "constraints": [
      "Divisor is non-zero for division."
    ],
    "sampleInput": "+ 10 20",
    "sampleOutput": "30.00",
    "explanation": "10.0 + 20.0 = 30.00.",
    "testCases": [
      {
        "id": 1,
        "input": "+ 10 20",
        "expectedOutput": "30.00",
        "isHidden": false
      },
      {
        "id": 2,
        "input": "- 50 15",
        "expectedOutput": "35.00",
        "isHidden": false
      },
      {
        "id": 3,
        "input": "* 6 7",
        "expectedOutput": "42.00",
        "isHidden": true
      },
      {
        "id": 4,
        "input": "/ 25 4",
        "expectedOutput": "6.25",
        "isHidden": true
      }
    ],
    "starterCode": "#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}",
    "solutionCode": "#include <stdio.h>\n\nint main() {\n    char op;\n    float a, b;\n    if (scanf(\" %c %f %f\", &op, &a, &b) == 3) {\n        if (op == '+') printf(\"%.2f\\n\", a + b);\n        else if (op == '-') printf(\"%.2f\\n\", a - b);\n        else if (op == '*') printf(\"%.2f\\n\", a * b);\n        else if (op == '/') printf(\"%.2f\\n\", a / b);\n    }\n    return 0;\n}",
    "hint": "Use scanf(\" %c %f %f\", &op, &a, &b) with a leading space before %c."
  },
  {
    "id": 16,
    "title": "Student grade using else-if ladder",
    "category": "Conditionals",
    "difficulty": "Core",
    "description": "Assign a letter grade based on marks: 90-100: A, 80-89: B, 70-79: C, 60-69: D, below 60: F.",
    "inputFormat": "A single integer marks (0-100).",
    "outputFormat": "Print the corresponding grade letter.",
    "constraints": [
      "0 <= marks <= 100"
    ],
    "sampleInput": "85",
    "sampleOutput": "B",
    "explanation": "85 is between 80 and 89, so grade is B.",
    "testCases": [
      {
        "id": 1,
        "input": "85",
        "expectedOutput": "B",
        "isHidden": false
      },
      {
        "id": 2,
        "input": "95",
        "expectedOutput": "A",
        "isHidden": false
      },
      {
        "id": 3,
        "input": "62",
        "expectedOutput": "D",
        "isHidden": true
      },
      {
        "id": 4,
        "input": "45",
        "expectedOutput": "F",
        "isHidden": true
      }
    ],
    "starterCode": "#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}",
    "solutionCode": "#include <stdio.h>\n\nint main() {\n    int m;\n    if (scanf(\"%d\", &m) == 1) {\n        if (m >= 90) printf(\"A\\n\");\n        else if (m >= 80) printf(\"B\\n\");\n        else if (m >= 70) printf(\"C\\n\");\n        else if (m >= 60) printf(\"D\\n\");\n        else printf(\"F\\n\");\n    }\n    return 0;\n}",
    "hint": "Check upper limits first using else-if ladder."
  },
  {
    "id": 17,
    "title": "Electricity bill using else-if ladder",
    "category": "Conditionals",
    "difficulty": "Challenge",
    "description": "Calculate electricity bill according to units consumed:\n- First 100 units: Rs 1.50/unit\n- Next 100 units (101-200): Rs 2.50/unit\n- Above 200 units: Rs 4.00/unit",
    "inputFormat": "A single integer units consumed.",
    "outputFormat": "Print total bill formatted to 2 decimal places.",
    "constraints": [
      "units >= 0"
    ],
    "sampleInput": "250",
    "sampleOutput": "600.00",
    "explanation": "First 100: 100*1.5 = 150. Next 100: 100*2.5 = 250. Remaining 50: 50*4.0 = 200. Total = 600.00.",
    "testCases": [
      {
        "id": 1,
        "input": "250",
        "expectedOutput": "600.00",
        "isHidden": false
      },
      {
        "id": 2,
        "input": "80",
        "expectedOutput": "120.00",
        "isHidden": false
      },
      {
        "id": 3,
        "input": "150",
        "expectedOutput": "275.00",
        "isHidden": true
      },
      {
        "id": 4,
        "input": "300",
        "expectedOutput": "800.00",
        "isHidden": true
      }
    ],
    "starterCode": "#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}",
    "solutionCode": "#include <stdio.h>\n\nint main() {\n    int units;\n    if (scanf(\"%d\", &units) == 1) {\n        float bill = 0;\n        if (units <= 100) bill = units * 1.5f;\n        else if (units <= 200) bill = 100 * 1.5f + (units - 100) * 2.5f;\n        else bill = 100 * 1.5f + 100 * 2.5f + (units - 200) * 4.0f;\n        printf(\"%.2f\\n\", bill);\n    }\n    return 0;\n}",
    "hint": "Break units into distinct tier slabs."
  },
  {
    "id": 18,
    "title": "Roots of quadratic equation using else-if ladder",
    "category": "Conditionals",
    "difficulty": "Challenge",
    "description": "Given coefficients a, b, c for quadratic equation ax^2 + bx + c = 0, determine the nature of the roots using discriminant D = b^2 - 4ac.",
    "inputFormat": "Three space-separated floating point numbers a, b, c.",
    "outputFormat": "Print 'Two real roots', 'One repeated root', or 'No real roots'.",
    "constraints": [
      "a != 0"
    ],
    "sampleInput": "1 -5 6",
    "sampleOutput": "Two real roots",
    "explanation": "D = (-5)^2 - 4*1*6 = 25 - 24 = 1 > 0, so there are two real roots.",
    "testCases": [
      {
        "id": 1,
        "input": "1 -5 6",
        "expectedOutput": "Two real roots",
        "isHidden": false
      },
      {
        "id": 2,
        "input": "1 2 1",
        "expectedOutput": "One repeated root",
        "isHidden": false
      },
      {
        "id": 3,
        "input": "1 1 1",
        "expectedOutput": "No real roots",
        "isHidden": true
      },
      {
        "id": 4,
        "input": "2 4 2",
        "expectedOutput": "One repeated root",
        "isHidden": true
      }
    ],
    "starterCode": "#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}",
    "solutionCode": "#include <stdio.h>\n\nint main() {\n    float a, b, c;\n    if (scanf(\"%f %f %f\", &a, &b, &c) == 3) {\n        float d = b * b - 4 * a * c;\n        if (d > 0) printf(\"Two real roots\\n\");\n        else if (d == 0) printf(\"One repeated root\\n\");\n        else printf(\"No real roots\\n\");\n    }\n    return 0;\n}",
    "hint": "Check discriminant D: if (d > 0), else if (d == 0), else."
  },
  {
    "id": 19,
    "title": "Arithmetic operations using switch case",
    "category": "Switch",
    "difficulty": "Core",
    "description": "Implement a simple calculator using switch-case that supports '+', '-', '*', and '/'.",
    "inputFormat": "Operator (+, -, *, /) followed by two integers.",
    "outputFormat": "Print the integer result (for division, use integer quotient).",
    "constraints": [
      "Second operand non-zero for division."
    ],
    "sampleInput": "+ 14 6",
    "sampleOutput": "20",
    "explanation": "14 + 6 = 20.",
    "testCases": [
      {
        "id": 1,
        "input": "+ 14 6",
        "expectedOutput": "20",
        "isHidden": false
      },
      {
        "id": 2,
        "input": "* 7 8",
        "expectedOutput": "56",
        "isHidden": false
      },
      {
        "id": 3,
        "input": "- 50 20",
        "expectedOutput": "30",
        "isHidden": true
      },
      {
        "id": 4,
        "input": "/ 100 5",
        "expectedOutput": "20",
        "isHidden": true
      }
    ],
    "starterCode": "#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}",
    "solutionCode": "#include <stdio.h>\n\nint main() {\n    char op;\n    int a, b;\n    if (scanf(\" %c %d %d\", &op, &a, &b) == 3) {\n        switch(op) {\n            case '+': printf(\"%d\\n\", a + b); break;\n            case '-': printf(\"%d\\n\", a - b); break;\n            case '*': printf(\"%d\\n\", a * b); break;\n            case '/': printf(\"%d\\n\", a / b); break;\n            default: printf(\"Invalid\\n\");\n        }\n    }\n    return 0;\n}",
    "hint": "Use switch(op) with case '+', '-', '*', '/' and break statements."
  },
  {
    "id": 20,
    "title": "Print day of week using switch case",
    "category": "Switch",
    "difficulty": "Core",
    "description": "Given a day number from 1 to 7, print the corresponding day name (1 for Monday, 2 for Tuesday, ..., 7 for Sunday). If out of range, print 'Invalid'.",
    "inputFormat": "An integer between 1 and 7.",
    "outputFormat": "Print the day of the week or 'Invalid'.",
    "constraints": [
      "1 <= Day <= 7"
    ],
    "sampleInput": "3",
    "sampleOutput": "Wednesday",
    "explanation": "Day 3 corresponds to Wednesday.",
    "testCases": [
      {
        "id": 1,
        "input": "3",
        "expectedOutput": "Wednesday",
        "isHidden": false
      },
      {
        "id": 2,
        "input": "1",
        "expectedOutput": "Monday",
        "isHidden": false
      },
      {
        "id": 3,
        "input": "7",
        "expectedOutput": "Sunday",
        "isHidden": true
      },
      {
        "id": 4,
        "input": "5",
        "expectedOutput": "Friday",
        "isHidden": true
      }
    ],
    "starterCode": "#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}",
    "solutionCode": "#include <stdio.h>\n\nint main() {\n    int day;\n    if (scanf(\"%d\", &day) == 1) {\n        switch(day) {\n            case 1: printf(\"Monday\\n\"); break;\n            case 2: printf(\"Tuesday\\n\"); break;\n            case 3: printf(\"Wednesday\\n\"); break;\n            case 4: printf(\"Thursday\\n\"); break;\n            case 5: printf(\"Friday\\n\"); break;\n            case 6: printf(\"Saturday\\n\"); break;\n            case 7: printf(\"Sunday\\n\"); break;\n            default: printf(\"Invalid\\n\"); break;\n        }\n    }\n    return 0;\n}",
    "hint": "Use switch(day) with cases 1 through 7."
  },
  {
    "id": 21,
    "title": "Convert two digit number to words using switch statement",
    "category": "Switch",
    "difficulty": "Core",
    "description": "Convert a two-digit integer (from 20 to 99) into English words (e.g. 45 -> 'Forty Five', 20 -> 'Twenty').",
    "inputFormat": "A single two-digit integer between 20 and 99.",
    "outputFormat": "Print the number in words.",
    "constraints": [
      "20 <= N <= 99"
    ],
    "sampleInput": "45",
    "sampleOutput": "Forty Five",
    "explanation": "Tens digit is 4 ('Forty'), units digit is 5 ('Five').",
    "testCases": [
      {
        "id": 1,
        "input": "45",
        "expectedOutput": "Forty Five",
        "isHidden": false
      },
      {
        "id": 2,
        "input": "20",
        "expectedOutput": "Twenty",
        "isHidden": false
      },
      {
        "id": 3,
        "input": "99",
        "expectedOutput": "Ninety Nine",
        "isHidden": true
      },
      {
        "id": 4,
        "input": "31",
        "expectedOutput": "Thirty One",
        "isHidden": true
      }
    ],
    "starterCode": "#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}",
    "solutionCode": "#include <stdio.h>\n\nint main() {\n    int n;\n    if (scanf(\"%d\", &n) == 1) {\n        int tens = n / 10, ones = n % 10;\n        switch(tens) {\n            case 2: printf(\"Twenty\"); break;\n            case 3: printf(\"Thirty\"); break;\n            case 4: printf(\"Forty\"); break;\n            case 5: printf(\"Fifty\"); break;\n            case 6: printf(\"Sixty\"); break;\n            case 7: printf(\"Seventy\"); break;\n            case 8: printf(\"Eighty\"); break;\n            case 9: printf(\"Ninety\"); break;\n        }\n        if (ones > 0) {\n            printf(\" \");\n            switch(ones) {\n                case 1: printf(\"One\"); break;\n                case 2: printf(\"Two\"); break;\n                case 3: printf(\"Three\"); break;\n                case 4: printf(\"Four\"); break;\n                case 5: printf(\"Five\"); break;\n                case 6: printf(\"Six\"); break;\n                case 7: printf(\"Seven\"); break;\n                case 8: printf(\"Eight\"); break;\n                case 9: printf(\"Nine\"); break;\n            }\n        }\n        printf(\"\\n\");\n    }\n    return 0;\n}",
    "hint": "Extract tens = n / 10 and units = n % 10, then use two switch statements."
  },
  {
    "id": 22,
    "title": "Factors of a given number",
    "category": "Numbers",
    "difficulty": "Core",
    "description": "Find and print all factors of a positive integer N in increasing order separated by spaces.",
    "inputFormat": "A single positive integer N.",
    "outputFormat": "All factors separated by spaces.",
    "constraints": [
      "1 <= N <= 10^5"
    ],
    "sampleInput": "12",
    "sampleOutput": "1 2 3 4 6 12",
    "explanation": "Factors of 12 are 1, 2, 3, 4, 6, and 12.",
    "testCases": [
      {
        "id": 1,
        "input": "12",
        "expectedOutput": "1 2 3 4 6 12",
        "isHidden": false
      },
      {
        "id": 2,
        "input": "7",
        "expectedOutput": "1 7",
        "isHidden": false
      },
      {
        "id": 3,
        "input": "20",
        "expectedOutput": "1 2 4 5 10 20",
        "isHidden": true
      },
      {
        "id": 4,
        "input": "1",
        "expectedOutput": "1",
        "isHidden": true
      }
    ],
    "starterCode": "#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}",
    "solutionCode": "#include <stdio.h>\n\nint main() {\n    int n;\n    if (scanf(\"%d\", &n) == 1) {\n        int first = 1;\n        for (int i = 1; i <= n; i++) {\n            if (n % i == 0) {\n                if (!first) printf(\" \");\n                printf(\"%d\", i);\n                first = 0;\n            }\n        }\n        printf(\"\\n\");\n    }\n    return 0;\n}",
    "hint": "Iterate from 1 to n and print i when n % i == 0."
  },
  {
    "id": 23,
    "title": "Prime Number Program",
    "category": "Numbers",
    "difficulty": "Core",
    "description": "Determine whether a given integer N is a Prime number or Not prime.",
    "inputFormat": "A single positive integer N.",
    "outputFormat": "Print 'Prime' or 'Not prime'.",
    "constraints": [
      "1 <= N <= 10^7"
    ],
    "sampleInput": "13",
    "sampleOutput": "Prime",
    "explanation": "13 is only divisible by 1 and itself, so it is Prime.",
    "testCases": [
      {
        "id": 1,
        "input": "13",
        "expectedOutput": "Prime",
        "isHidden": false
      },
      {
        "id": 2,
        "input": "1",
        "expectedOutput": "Not prime",
        "isHidden": false
      },
      {
        "id": 3,
        "input": "4",
        "expectedOutput": "Not prime",
        "isHidden": true
      },
      {
        "id": 4,
        "input": "97",
        "expectedOutput": "Prime",
        "isHidden": true
      }
    ],
    "starterCode": "#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}",
    "solutionCode": "#include <stdio.h>\n\nint main() {\n    int n;\n    if (scanf(\"%d\", &n) == 1) {\n        if (n <= 1) {\n            printf(\"Not prime\\n\");\n            return 0;\n        }\n        int isPrime = 1;\n        for (int i = 2; (long long)i * i <= n; i++) {\n            if (n % i == 0) {\n                isPrime = 0;\n                break;\n            }\n        }\n        if (isPrime) printf(\"Prime\\n\");\n        else printf(\"Not prime\\n\");\n    }\n    return 0;\n}",
    "hint": "Numbers <= 1 are not prime. Test divisors up to sqrt(n)."
  },
  {
    "id": 24,
    "title": "Prime numbers in a given range",
    "category": "Numbers",
    "difficulty": "Core",
    "description": "Print all prime numbers between two integers start and end (inclusive), separated by spaces.",
    "inputFormat": "Two space-separated integers start and end.",
    "outputFormat": "Space-separated prime numbers in that range.",
    "constraints": [
      "1 <= start <= end <= 1000"
    ],
    "sampleInput": "10 30",
    "sampleOutput": "11 13 17 19 23 29",
    "explanation": "Primes between 10 and 30 are 11, 13, 17, 19, 23, 29.",
    "testCases": [
      {
        "id": 1,
        "input": "10 30",
        "expectedOutput": "11 13 17 19 23 29",
        "isHidden": false
      },
      {
        "id": 2,
        "input": "1 10",
        "expectedOutput": "2 3 5 7",
        "isHidden": false
      },
      {
        "id": 3,
        "input": "20 25",
        "expectedOutput": "23",
        "isHidden": true
      },
      {
        "id": 4,
        "input": "30 40",
        "expectedOutput": "31 37",
        "isHidden": true
      }
    ],
    "starterCode": "#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}",
    "solutionCode": "#include <stdio.h>\n\nint isPrime(int n) {\n    if (n <= 1) return 0;\n    for (int i = 2; i * i <= n; i++) {\n        if (n % i == 0) return 0;\n    }\n    return 1;\n}\n\nint main() {\n    int start, end;\n    if (scanf(\"%d %d\", &start, &end) == 2) {\n        int first = 1;\n        for (int i = start; i <= end; i++) {\n            if (isPrime(i)) {\n                if (!first) printf(\" \");\n                printf(\"%d\", i);\n                first = 0;\n            }\n        }\n        printf(\"\\n\");\n    }\n    return 0;\n}",
    "hint": "Use a helper function to check primality for each integer in the loop."
  },
  {
    "id": 25,
    "title": "Prime factors of a number",
    "category": "Numbers",
    "difficulty": "Core",
    "description": "Find and print all prime factors of an integer N in ascending order, separated by spaces.",
    "inputFormat": "A single integer N.",
    "outputFormat": "Prime factors separated by spaces.",
    "constraints": [
      "2 <= N <= 10^6"
    ],
    "sampleInput": "60",
    "sampleOutput": "2 2 3 5",
    "explanation": "60 = 2 * 2 * 3 * 5.",
    "testCases": [
      {
        "id": 1,
        "input": "60",
        "expectedOutput": "2 2 3 5",
        "isHidden": false
      },
      {
        "id": 2,
        "input": "13",
        "expectedOutput": "13",
        "isHidden": false
      },
      {
        "id": 3,
        "input": "84",
        "expectedOutput": "2 2 3 7",
        "isHidden": true
      },
      {
        "id": 4,
        "input": "100",
        "expectedOutput": "2 2 5 5",
        "isHidden": true
      }
    ],
    "starterCode": "#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}",
    "solutionCode": "#include <stdio.h>\n\nint main() {\n    int n;\n    if (scanf(\"%d\", &n) == 1) {\n        int first = 1;\n        for (int i = 2; i * i <= n; i++) {\n            while (n % i == 0) {\n                if (!first) printf(\" \");\n                printf(\"%d\", i);\n                first = 0;\n                n /= i;\n            }\n        }\n        if (n > 1) {\n            if (!first) printf(\" \");\n            printf(\"%d\", n);\n        }\n        printf(\"\\n\");\n    }\n    return 0;\n}",
    "hint": "Repeatedly divide out the smallest factor starting from 2."
  },
  {
    "id": 26,
    "title": "Multiplication table",
    "category": "Numbers",
    "difficulty": "Core",
    "description": "Print the multiplication table of a given number N up to 10 rows formatted as 'N x i = <result>'.",
    "inputFormat": "A single integer N.",
    "outputFormat": "10 lines formatted as 'N x i = result' for i from 1 to 10.",
    "constraints": [
      "1 <= N <= 1000"
    ],
    "sampleInput": "5",
    "sampleOutput": "5 x 1 = 5\n5 x 2 = 10\n5 x 3 = 15\n5 x 4 = 20\n5 x 5 = 25\n5 x 6 = 30\n5 x 7 = 35\n5 x 8 = 40\n5 x 9 = 45\n5 x 10 = 50",
    "explanation": "Products of 5 with 1 through 10.",
    "testCases": [
      {
        "id": 1,
        "input": "5",
        "expectedOutput": "5 x 1 = 5\n5 x 2 = 10\n5 x 3 = 15\n5 x 4 = 20\n5 x 5 = 25\n5 x 6 = 30\n5 x 7 = 35\n5 x 8 = 40\n5 x 9 = 45\n5 x 10 = 50",
        "isHidden": false
      },
      {
        "id": 2,
        "input": "3",
        "expectedOutput": "3 x 1 = 3\n3 x 2 = 6\n3 x 3 = 9\n3 x 4 = 12\n3 x 5 = 15\n3 x 6 = 18\n3 x 7 = 21\n3 x 8 = 24\n3 x 9 = 27\n3 x 10 = 30",
        "isHidden": false
      },
      {
        "id": 3,
        "input": "7",
        "expectedOutput": "7 x 1 = 7\n7 x 2 = 14\n7 x 3 = 21\n7 x 4 = 28\n7 x 5 = 35\n7 x 6 = 42\n7 x 7 = 49\n7 x 8 = 56\n7 x 9 = 63\n7 x 10 = 70",
        "isHidden": true
      },
      {
        "id": 4,
        "input": "12",
        "expectedOutput": "12 x 1 = 12\n12 x 2 = 24\n12 x 3 = 36\n12 x 4 = 48\n12 x 5 = 60\n12 x 6 = 72\n12 x 7 = 84\n12 x 8 = 96\n12 x 9 = 108\n12 x 10 = 120",
        "isHidden": true
      }
    ],
    "starterCode": "#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}",
    "solutionCode": "#include <stdio.h>\n\nint main() {\n    int n;\n    if (scanf(\"%d\", &n) == 1) {\n        for (int i = 1; i <= 10; i++) {\n            printf(\"%d x %d = %d\\n\", n, i, n * i);\n        }\n    }\n    return 0;\n}",
    "hint": "Use a for loop from 1 to 10 printing %d x %d = %d."
  },
  {
    "id": 27,
    "title": "Multiplication tables from 1 to 10",
    "category": "Numbers",
    "difficulty": "Core",
    "description": "Generate a compact grid of multiplication tables from 1 to 10. For a given input integer limit K (1 <= K <= 10), print the table for K (from 1 to 10 on a single line separated by space).",
    "inputFormat": "A single integer K between 1 and 10.",
    "outputFormat": "The products K*1, K*2, ..., K*10 separated by spaces.",
    "constraints": [
      "1 <= K <= 10"
    ],
    "sampleInput": "2",
    "sampleOutput": "2 4 6 8 10 12 14 16 18 20",
    "explanation": "Multiples of 2 up to 10.",
    "testCases": [
      {
        "id": 1,
        "input": "2",
        "expectedOutput": "2 4 6 8 10 12 14 16 18 20",
        "isHidden": false
      },
      {
        "id": 2,
        "input": "5",
        "expectedOutput": "5 10 15 20 25 30 35 40 45 50",
        "isHidden": false
      },
      {
        "id": 3,
        "input": "9",
        "expectedOutput": "9 18 27 36 45 54 63 72 81 90",
        "isHidden": true
      },
      {
        "id": 4,
        "input": "1",
        "expectedOutput": "1 2 3 4 5 6 7 8 9 10",
        "isHidden": true
      }
    ],
    "starterCode": "#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}",
    "solutionCode": "#include <stdio.h>\n\nint main() {\n    int k;\n    if (scanf(\"%d\", &k) == 1) {\n        for (int i = 1; i <= 10; i++) {\n            printf(\"%d%s\", k * i, (i == 10) ? \"\\n\" : \" \");\n        }\n    }\n    return 0;\n}",
    "hint": "Print k * i separated by space for i from 1 to 10."
  },
  {
    "id": 28,
    "title": "Sum of digits of a number",
    "category": "Numbers",
    "difficulty": "Core",
    "description": "Calculate and print the sum of all digits of a positive integer N.",
    "inputFormat": "A single non-negative integer N.",
    "outputFormat": "Print the integer sum of its digits.",
    "constraints": [
      "0 <= N <= 10^9"
    ],
    "sampleInput": "1234",
    "sampleOutput": "10",
    "explanation": "1 + 2 + 3 + 4 = 10.",
    "testCases": [
      {
        "id": 1,
        "input": "1234",
        "expectedOutput": "10",
        "isHidden": false
      },
      {
        "id": 2,
        "input": "999",
        "expectedOutput": "27",
        "isHidden": false
      },
      {
        "id": 3,
        "input": "0",
        "expectedOutput": "0",
        "isHidden": true
      },
      {
        "id": 4,
        "input": "505",
        "expectedOutput": "10",
        "isHidden": true
      }
    ],
    "starterCode": "#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}",
    "solutionCode": "#include <stdio.h>\n\nint main() {\n    long long n;\n    if (scanf(\"%lld\", &n) == 1) {\n        long long sum = 0;\n        if (n == 0) sum = 0;\n        while (n > 0) {\n            sum += n % 10;\n            n /= 10;\n        }\n        printf(\"%lld\\n\", sum);\n    }\n    return 0;\n}",
    "hint": "Extract digits using n % 10 and reduce using n /= 10."
  },
  {
    "id": 29,
    "title": "Reverse of a number",
    "category": "Numbers",
    "difficulty": "Core",
    "description": "Reverse the digits of a given positive integer and print the reversed number.",
    "inputFormat": "A single positive integer N.",
    "outputFormat": "The reversed integer (without leading zeros).",
    "constraints": [
      "1 <= N <= 10^9"
    ],
    "sampleInput": "12345",
    "sampleOutput": "54321",
    "explanation": "Digits reversed: 12345 -> 54321.",
    "testCases": [
      {
        "id": 1,
        "input": "12345",
        "expectedOutput": "54321",
        "isHidden": false
      },
      {
        "id": 2,
        "input": "1000",
        "expectedOutput": "1",
        "isHidden": false
      },
      {
        "id": 3,
        "input": "7",
        "expectedOutput": "7",
        "isHidden": true
      },
      {
        "id": 4,
        "input": "9870",
        "expectedOutput": "789",
        "isHidden": true
      }
    ],
    "starterCode": "#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}",
    "solutionCode": "#include <stdio.h>\n\nint main() {\n    long long n;\n    if (scanf(\"%lld\", &n) == 1) {\n        long long rev = 0;\n        while (n > 0) {\n            rev = rev * 10 + (n % 10);\n            n /= 10;\n        }\n        printf(\"%lld\\n\", rev);\n    }\n    return 0;\n}",
    "hint": "Build reversed number using rev = rev * 10 + (n % 10)."
  },
  {
    "id": 30,
    "title": "Palindrome number",
    "category": "Numbers",
    "difficulty": "Core",
    "description": "Check whether a given positive integer is a Palindrome (reads the same backwards as forwards).",
    "inputFormat": "A single positive integer N.",
    "outputFormat": "Print 'Palindrome' or 'Not palindrome'.",
    "constraints": [
      "1 <= N <= 10^9"
    ],
    "sampleInput": "121",
    "sampleOutput": "Palindrome",
    "explanation": "121 reversed is 121, so it is a palindrome.",
    "testCases": [
      {
        "id": 1,
        "input": "121",
        "expectedOutput": "Palindrome",
        "isHidden": false
      },
      {
        "id": 2,
        "input": "123",
        "expectedOutput": "Not palindrome",
        "isHidden": false
      },
      {
        "id": 3,
        "input": "1221",
        "expectedOutput": "Palindrome",
        "isHidden": true
      },
      {
        "id": 4,
        "input": "10",
        "expectedOutput": "Not palindrome",
        "isHidden": true
      }
    ],
    "starterCode": "#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}",
    "solutionCode": "#include <stdio.h>\n\nint main() {\n    long long n;\n    if (scanf(\"%lld\", &n) == 1) {\n        long long original = n, rev = 0;\n        while (n > 0) {\n            rev = rev * 10 + (n % 10);\n            n /= 10;\n        }\n        if (original == rev) printf(\"Palindrome\\n\");\n        else printf(\"Not palindrome\\n\");\n    }\n    return 0;\n}",
    "hint": "Save original number, calculate its reverse, and check if original == rev."
  },
  {
    "id": 31,
    "title": "Palindrome numbers within a range",
    "category": "Numbers",
    "difficulty": "Core",
    "description": "Print all palindrome numbers between start and end (inclusive) separated by spaces.",
    "inputFormat": "Two space-separated integers start and end.",
    "outputFormat": "Space-separated palindrome numbers.",
    "constraints": [
      "1 <= start <= end <= 10000"
    ],
    "sampleInput": "10 100",
    "sampleOutput": "11 22 33 44 55 66 77 88 99",
    "explanation": "Two-digit palindromes between 10 and 100.",
    "testCases": [
      {
        "id": 1,
        "input": "10 100",
        "expectedOutput": "11 22 33 44 55 66 77 88 99",
        "isHidden": false
      },
      {
        "id": 2,
        "input": "100 130",
        "expectedOutput": "101 111 121",
        "isHidden": false
      },
      {
        "id": 3,
        "input": "1 9",
        "expectedOutput": "1 2 3 4 5 6 7 8 9",
        "isHidden": true
      },
      {
        "id": 4,
        "input": "130 150",
        "expectedOutput": "131 141",
        "isHidden": true
      }
    ],
    "starterCode": "#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}",
    "solutionCode": "#include <stdio.h>\n\nint isPal(int n) {\n    int orig = n, rev = 0;\n    while (n > 0) {\n        rev = rev * 10 + (n % 10);\n        n /= 10;\n    }\n    return orig == rev;\n}\n\nint main() {\n    int a, b;\n    if (scanf(\"%d %d\", &a, &b) == 2) {\n        int first = 1;\n        for (int i = a; i <= b; i++) {\n            if (isPal(i)) {\n                if (!first) printf(\" \");\n                printf(\"%d\", i);\n                first = 0;\n            }\n        }\n        printf(\"\\n\");\n    }\n    return 0;\n}",
    "hint": "Iterate from start to end and check palindrome condition for each number."
  },
  {
    "id": 32,
    "title": "Armstrong number",
    "category": "Numbers",
    "difficulty": "Core",
    "description": "An Armstrong number of order k is a number that is the sum of its own digits each raised to the power of k. Write a program to check whether a given number is an Armstrong number.",
    "inputFormat": "A single positive integer N.",
    "outputFormat": "Print 'Armstrong' or 'Not Armstrong'.",
    "constraints": [
      "1 <= N <= 10^7"
    ],
    "sampleInput": "153",
    "sampleOutput": "Armstrong",
    "explanation": "153 has 3 digits. 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153.",
    "testCases": [
      {
        "id": 1,
        "input": "153",
        "expectedOutput": "Armstrong",
        "isHidden": false
      },
      {
        "id": 2,
        "input": "370",
        "expectedOutput": "Armstrong",
        "isHidden": false
      },
      {
        "id": 3,
        "input": "123",
        "expectedOutput": "Not Armstrong",
        "isHidden": true
      },
      {
        "id": 4,
        "input": "9474",
        "expectedOutput": "Armstrong",
        "isHidden": true
      }
    ],
    "starterCode": "#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}",
    "solutionCode": "#include <stdio.h>\n#include <math.h>\n\nint main() {\n    long long n;\n    if (scanf(\"%lld\", &n) == 1) {\n        long long temp = n, sum = 0;\n        int digits = 0;\n        while (temp > 0) { digits++; temp /= 10; }\n        temp = n;\n        while (temp > 0) {\n            int d = temp % 10;\n            long long p = 1;\n            for (int i = 0; i < digits; i++) p *= d;\n            sum += p;\n            temp /= 10;\n        }\n        if (sum == n) printf(\"Armstrong\\n\");\n        else printf(\"Not Armstrong\\n\");\n    }\n    return 0;\n}",
    "hint": "Count digits first, then raise each digit to the power of total digits."
  },
  {
    "id": 33,
    "title": "Armstrong numbers within a range",
    "category": "Numbers",
    "difficulty": "Core",
    "description": "Print all Armstrong numbers between start and end (inclusive) separated by spaces.",
    "inputFormat": "Two space-separated integers start and end.",
    "outputFormat": "Space-separated Armstrong numbers.",
    "constraints": [
      "1 <= start <= end <= 1000"
    ],
    "sampleInput": "1 500",
    "sampleOutput": "1 2 3 4 5 6 7 8 9 153 370 371 407",
    "explanation": "Armstrong numbers under 500.",
    "testCases": [
      {
        "id": 1,
        "input": "1 500",
        "expectedOutput": "1 2 3 4 5 6 7 8 9 153 370 371 407",
        "isHidden": false
      },
      {
        "id": 2,
        "input": "100 400",
        "expectedOutput": "153 370 371",
        "isHidden": false
      },
      {
        "id": 3,
        "input": "400 500",
        "expectedOutput": "407",
        "isHidden": true
      },
      {
        "id": 4,
        "input": "1 10",
        "expectedOutput": "1 2 3 4 5 6 7 8 9",
        "isHidden": true
      }
    ],
    "starterCode": "#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}",
    "solutionCode": "#include <stdio.h>\n\nint isArmstrong(int n) {\n    int temp = n, digits = 0;\n    while (temp > 0) { digits++; temp /= 10; }\n    temp = n;\n    int sum = 0;\n    while (temp > 0) {\n        int d = temp % 10;\n        int p = 1;\n        for (int i = 0; i < digits; i++) p *= d;\n        sum += p;\n        temp /= 10;\n    }\n    return sum == n;\n}\n\nint main() {\n    int a, b;\n    if (scanf(\"%d %d\", &a, &b) == 2) {\n        int first = 1;\n        for (int i = a; i <= b; i++) {\n            if (isArmstrong(i)) {\n                if (!first) printf(\" \");\n                printf(\"%d\", i);\n                first = 0;\n            }\n        }\n        printf(\"\\n\");\n    }\n    return 0;\n}",
    "hint": "Iterate from start to end and apply Armstrong check."
  },
  {
    "id": 34,
    "title": "Factorial",
    "category": "Numbers",
    "difficulty": "Core",
    "description": "Compute and print the factorial of a given non-negative integer N (N! = 1 * 2 * ... * N). Note 0! = 1.",
    "inputFormat": "A single non-negative integer N.",
    "outputFormat": "Print the factorial value.",
    "constraints": [
      "0 <= N <= 20"
    ],
    "sampleInput": "5",
    "sampleOutput": "120",
    "explanation": "5! = 5 * 4 * 3 * 2 * 1 = 120.",
    "testCases": [
      {
        "id": 1,
        "input": "5",
        "expectedOutput": "120",
        "isHidden": false
      },
      {
        "id": 2,
        "input": "0",
        "expectedOutput": "1",
        "isHidden": false
      },
      {
        "id": 3,
        "input": "10",
        "expectedOutput": "3628800",
        "isHidden": true
      },
      {
        "id": 4,
        "input": "7",
        "expectedOutput": "5040",
        "isHidden": true
      }
    ],
    "starterCode": "#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}",
    "solutionCode": "#include <stdio.h>\n\nint main() {\n    int n;\n    if (scanf(\"%d\", &n) == 1) {\n        unsigned long long fact = 1;\n        for (int i = 1; i <= n; i++) {\n            fact *= i;\n        }\n        printf(\"%llu\\n\", fact);\n    }\n    return 0;\n}",
    "hint": "Use unsigned long long to avoid overflow when computing factorials up to 20."
  },
  {
    "id": 35,
    "title": "Strong number",
    "category": "Numbers",
    "difficulty": "Core",
    "description": "A Strong number is a number whose sum of factorials of digits equals the original number (e.g., 145 = 1! + 4! + 5!). Check whether a given integer is a Strong number.",
    "inputFormat": "A single positive integer N.",
    "outputFormat": "Print 'Strong' or 'Not strong'.",
    "constraints": [
      "1 <= N <= 10^6"
    ],
    "sampleInput": "145",
    "sampleOutput": "Strong",
    "explanation": "1! + 4! + 5! = 1 + 24 + 120 = 145.",
    "testCases": [
      {
        "id": 1,
        "input": "145",
        "expectedOutput": "Strong",
        "isHidden": false
      },
      {
        "id": 2,
        "input": "120",
        "expectedOutput": "Not strong",
        "isHidden": false
      },
      {
        "id": 3,
        "input": "1",
        "expectedOutput": "Strong",
        "isHidden": true
      },
      {
        "id": 4,
        "input": "2",
        "expectedOutput": "Strong",
        "isHidden": true
      }
    ],
    "starterCode": "#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}",
    "solutionCode": "#include <stdio.h>\n\nint fact(int d) {\n    int f = 1;\n    for (int i = 1; i <= d; i++) f *= i;\n    return f;\n}\n\nint main() {\n    int n;\n    if (scanf(\"%d\", &n) == 1) {\n        int temp = n, sum = 0;\n        while (temp > 0) {\n            sum += fact(temp % 10);\n            temp /= 10;\n        }\n        if (sum == n) printf(\"Strong\\n\");\n        else printf(\"Not strong\\n\");\n    }\n    return 0;\n}",
    "hint": "Precompute or compute factorial for each digit and add them up."
  },
  {
    "id": 36,
    "title": "Strong numbers between a range",
    "category": "Numbers",
    "difficulty": "Core",
    "description": "Find and print all strong numbers within a given range [start, end] separated by spaces.",
    "inputFormat": "Two space-separated integers start and end.",
    "outputFormat": "Space-separated strong numbers.",
    "constraints": [
      "1 <= start <= end <= 100000"
    ],
    "sampleInput": "1 200",
    "sampleOutput": "1 2 145",
    "explanation": "1, 2, and 145 are strong numbers within 1 to 200.",
    "testCases": [
      {
        "id": 1,
        "input": "1 200",
        "expectedOutput": "1 2 145",
        "isHidden": false
      },
      {
        "id": 2,
        "input": "1 5",
        "expectedOutput": "1 2",
        "isHidden": false
      },
      {
        "id": 3,
        "input": "100 150",
        "expectedOutput": "145",
        "isHidden": true
      },
      {
        "id": 4,
        "input": "10 100",
        "expectedOutput": "",
        "isHidden": true
      }
    ],
    "starterCode": "#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}",
    "solutionCode": "#include <stdio.h>\n\nint fact(int d) {\n    int f = 1;\n    for (int i = 1; i <= d; i++) f *= i;\n    return f;\n}\n\nint isStrong(int n) {\n    int temp = n, sum = 0;\n    while (temp > 0) {\n        sum += fact(temp % 10);\n        temp /= 10;\n    }\n    return sum == n;\n}\n\nint main() {\n    int a, b;\n    if (scanf(\"%d %d\", &a, &b) == 2) {\n        int first = 1;\n        for (int i = a; i <= b; i++) {\n            if (isStrong(i)) {\n                if (!first) printf(\" \");\n                printf(\"%d\", i);\n                first = 0;\n            }\n        }\n        printf(\"\\n\");\n    }\n    return 0;\n}",
    "hint": "Check isStrong() for each number between start and end."
  },
  {
    "id": 37,
    "title": "Perfect number",
    "category": "Numbers",
    "difficulty": "Core",
    "description": "A perfect number is a positive integer that is equal to the sum of its proper positive divisors (excluding the number itself). Determine if N is a Perfect number.",
    "inputFormat": "A single positive integer N.",
    "outputFormat": "Print 'Perfect' or 'Not perfect'.",
    "constraints": [
      "1 <= N <= 10^7"
    ],
    "sampleInput": "6",
    "sampleOutput": "Perfect",
    "explanation": "Divisors of 6 (excluding 6) are 1, 2, 3. 1 + 2 + 3 = 6.",
    "testCases": [
      {
        "id": 1,
        "input": "6",
        "expectedOutput": "Perfect",
        "isHidden": false
      },
      {
        "id": 2,
        "input": "28",
        "expectedOutput": "Perfect",
        "isHidden": false
      },
      {
        "id": 3,
        "input": "12",
        "expectedOutput": "Not perfect",
        "isHidden": true
      },
      {
        "id": 4,
        "input": "496",
        "expectedOutput": "Perfect",
        "isHidden": true
      }
    ],
    "starterCode": "#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}",
    "solutionCode": "#include <stdio.h>\n\nint main() {\n    int n;\n    if (scanf(\"%d\", &n) == 1) {\n        if (n <= 1) {\n            printf(\"Not perfect\\n\");\n            return 0;\n        }\n        int sum = 1;\n        for (int i = 2; i * i <= n; i++) {\n            if (n % i == 0) {\n                sum += i;\n                if (i * i != n) sum += n / i;\n            }\n        }\n        if (sum == n) printf(\"Perfect\\n\");\n        else printf(\"Not perfect\\n\");\n    }\n    return 0;\n}",
    "hint": "Sum all proper divisors from 1 to sqrt(n) and compare with n."
  },
  {
    "id": 38,
    "title": "Perfect numbers within a range",
    "category": "Numbers",
    "difficulty": "Core",
    "description": "Print all perfect numbers between start and end (inclusive) separated by spaces.",
    "inputFormat": "Two space-separated integers start and end.",
    "outputFormat": "Space-separated perfect numbers.",
    "constraints": [
      "1 <= start <= end <= 10000"
    ],
    "sampleInput": "1 500",
    "sampleOutput": "6 28 496",
    "explanation": "Perfect numbers up to 500 are 6, 28, and 496.",
    "testCases": [
      {
        "id": 1,
        "input": "1 500",
        "expectedOutput": "6 28 496",
        "isHidden": false
      },
      {
        "id": 2,
        "input": "1 30",
        "expectedOutput": "6 28",
        "isHidden": false
      },
      {
        "id": 3,
        "input": "10 50",
        "expectedOutput": "28",
        "isHidden": true
      },
      {
        "id": 4,
        "input": "500 1000",
        "expectedOutput": "",
        "isHidden": true
      }
    ],
    "starterCode": "#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}",
    "solutionCode": "#include <stdio.h>\n\nint isPerfect(int n) {\n    if (n <= 1) return 0;\n    int sum = 1;\n    for (int i = 2; i * i <= n; i++) {\n        if (n % i == 0) {\n            sum += i;\n            if (i * i != n) sum += n / i;\n        }\n    }\n    return sum == n;\n}\n\nint main() {\n    int a, b;\n    if (scanf(\"%d %d\", &a, &b) == 2) {\n        int first = 1;\n        for (int i = a; i <= b; i++) {\n            if (isPerfect(i)) {\n                if (!first) printf(\" \");\n                printf(\"%d\", i);\n                first = 0;\n            }\n        }\n        printf(\"\\n\");\n    }\n    return 0;\n}",
    "hint": "Check isPerfect() in a loop."
  },
  {
    "id": 39,
    "title": "Fibonacci series up to n terms",
    "category": "Series",
    "difficulty": "Core",
    "description": "Print the first N terms of the Fibonacci sequence starting with 0, 1, 1, 2, 3, ... separated by spaces.",
    "inputFormat": "A single integer N (N >= 1).",
    "outputFormat": "The first N Fibonacci terms separated by spaces.",
    "constraints": [
      "1 <= N <= 40"
    ],
    "sampleInput": "7",
    "sampleOutput": "0 1 1 2 3 5 8",
    "explanation": "First 7 Fibonacci terms.",
    "testCases": [
      {
        "id": 1,
        "input": "7",
        "expectedOutput": "0 1 1 2 3 5 8",
        "isHidden": false
      },
      {
        "id": 2,
        "input": "1",
        "expectedOutput": "0",
        "isHidden": false
      },
      {
        "id": 3,
        "input": "2",
        "expectedOutput": "0 1",
        "isHidden": true
      },
      {
        "id": 4,
        "input": "10",
        "expectedOutput": "0 1 1 2 3 5 8 13 21 34",
        "isHidden": true
      }
    ],
    "starterCode": "#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}",
    "solutionCode": "#include <stdio.h>\n\nint main() {\n    int n;\n    if (scanf(\"%d\", &n) == 1) {\n        long long a = 0, b = 1;\n        for (int i = 1; i <= n; i++) {\n            printf(\"%lld%s\", a, (i == n) ? \"\\n\" : \" \");\n            long long next = a + b;\n            a = b;\n            b = next;\n        }\n    }\n    return 0;\n}",
    "hint": "Maintain a = 0, b = 1 and in each step next = a + b."
  },
  {
    "id": 40,
    "title": "First n Fibonacci numbers",
    "category": "Series",
    "difficulty": "Core",
    "description": "Generate and display the first N Fibonacci numbers starting from 0, 1.",
    "inputFormat": "A single positive integer N.",
    "outputFormat": "First N Fibonacci numbers separated by spaces.",
    "constraints": [
      "1 <= N <= 30"
    ],
    "sampleInput": "5",
    "sampleOutput": "0 1 1 2 3",
    "explanation": "The first 5 Fibonacci values are 0, 1, 1, 2, 3.",
    "testCases": [
      {
        "id": 1,
        "input": "5",
        "expectedOutput": "0 1 1 2 3",
        "isHidden": false
      },
      {
        "id": 2,
        "input": "3",
        "expectedOutput": "0 1 1",
        "isHidden": false
      },
      {
        "id": 3,
        "input": "6",
        "expectedOutput": "0 1 1 2 3 5",
        "isHidden": true
      },
      {
        "id": 4,
        "input": "8",
        "expectedOutput": "0 1 1 2 3 5 8 13",
        "isHidden": true
      }
    ],
    "starterCode": "#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}",
    "solutionCode": "#include <stdio.h>\n\nint main() {\n    int n;\n    if (scanf(\"%d\", &n) == 1) {\n        long long a = 0, b = 1;\n        for (int i = 1; i <= n; i++) {\n            printf(\"%lld%s\", a, (i == n) ? \"\\n\" : \" \");\n            long long next = a + b;\n            a = b;\n            b = next;\n        }\n    }\n    return 0;\n}",
    "hint": "Use a simple loop with two state variables."
  },
  {
    "id": 41,
    "title": "Fibonacci number or not",
    "category": "Series",
    "difficulty": "Core",
    "description": "Check whether a given non-negative integer N is a member of the Fibonacci sequence.",
    "inputFormat": "A single non-negative integer N.",
    "outputFormat": "Print 'Fibonacci' or 'Not Fibonacci'.",
    "constraints": [
      "0 <= N <= 10^9"
    ],
    "sampleInput": "8",
    "sampleOutput": "Fibonacci",
    "explanation": "8 appears in the sequence: 0, 1, 1, 2, 3, 5, 8.",
    "testCases": [
      {
        "id": 1,
        "input": "8",
        "expectedOutput": "Fibonacci",
        "isHidden": false
      },
      {
        "id": 2,
        "input": "9",
        "expectedOutput": "Not Fibonacci",
        "isHidden": false
      },
      {
        "id": 3,
        "input": "0",
        "expectedOutput": "Fibonacci",
        "isHidden": true
      },
      {
        "id": 4,
        "input": "21",
        "expectedOutput": "Fibonacci",
        "isHidden": true
      }
    ],
    "starterCode": "#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}",
    "solutionCode": "#include <stdio.h>\n\nint main() {\n    long long n;\n    if (scanf(\"%lld\", &n) == 1) {\n        if (n == 0 || n == 1) {\n            printf(\"Fibonacci\\n\");\n            return 0;\n        }\n        long long a = 0, b = 1;\n        while (b < n) {\n            long long next = a + b;\n            a = b;\n            b = next;\n        }\n        if (b == n) printf(\"Fibonacci\\n\");\n        else printf(\"Not Fibonacci\\n\");\n    }\n    return 0;\n}",
    "hint": "Generate Fibonacci terms until term >= n, then check equality."
  },
  {
    "id": 42,
    "title": "Right triangle star pattern",
    "category": "Patterns",
    "difficulty": "Challenge",
    "description": "Print a right-angled triangle pattern of asterisks (*) with N rows. Row i should have i asterisks.",
    "inputFormat": "A single integer N.",
    "outputFormat": "N lines of asterisks forming a right-angled triangle.",
    "constraints": [
      "1 <= N <= 20"
    ],
    "sampleInput": "4",
    "sampleOutput": "*\n**\n***\n****",
    "explanation": "Row 1 has 1 star, row 2 has 2 stars, ..., row 4 has 4 stars.",
    "testCases": [
      {
        "id": 1,
        "input": "4",
        "expectedOutput": "*\n**\n***\n****",
        "isHidden": false
      },
      {
        "id": 2,
        "input": "2",
        "expectedOutput": "*\n**",
        "isHidden": false
      },
      {
        "id": 3,
        "input": "1",
        "expectedOutput": "*",
        "isHidden": true
      },
      {
        "id": 4,
        "input": "5",
        "expectedOutput": "*\n**\n***\n****\n*****",
        "isHidden": true
      }
    ],
    "starterCode": "#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}",
    "solutionCode": "#include <stdio.h>\n\nint main() {\n    int n;\n    if (scanf(\"%d\", &n) == 1) {\n        for (int i = 1; i <= n; i++) {\n            for (int j = 1; j <= i; j++) printf(\"*\");\n            printf(\"\\n\");\n        }\n    }\n    return 0;\n}",
    "hint": "Outer loop for rows i from 1 to N, inner loop for stars j from 1 to i."
  },
  {
    "id": 43,
    "title": "Inverted triangle pattern",
    "category": "Patterns",
    "difficulty": "Challenge",
    "description": "Print an inverted right-angled triangle pattern of asterisks with N rows. Row 1 has N asterisks, row 2 has N-1 asterisks, down to 1.",
    "inputFormat": "A single integer N.",
    "outputFormat": "N lines of asterisks.",
    "constraints": [
      "1 <= N <= 20"
    ],
    "sampleInput": "4",
    "sampleOutput": "****\n***\n**\n*",
    "explanation": "Decreasing number of stars per row.",
    "testCases": [
      {
        "id": 1,
        "input": "4",
        "expectedOutput": "****\n***\n**\n*",
        "isHidden": false
      },
      {
        "id": 2,
        "input": "3",
        "expectedOutput": "***\n**\n*",
        "isHidden": false
      },
      {
        "id": 3,
        "input": "1",
        "expectedOutput": "*",
        "isHidden": true
      },
      {
        "id": 4,
        "input": "5",
        "expectedOutput": "*****\n****\n***\n**\n*",
        "isHidden": true
      }
    ],
    "starterCode": "#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}",
    "solutionCode": "#include <stdio.h>\n\nint main() {\n    int n;\n    if (scanf(\"%d\", &n) == 1) {\n        for (int i = n; i >= 1; i--) {\n            for (int j = 1; j <= i; j++) printf(\"*\");\n            printf(\"\\n\");\n        }\n    }\n    return 0;\n}",
    "hint": "Outer loop from n down to 1."
  },
  {
    "id": 44,
    "title": "Number triangle pattern",
    "category": "Patterns",
    "difficulty": "Challenge",
    "description": "Print a triangle of numbers where row i contains numbers from 1 to i separated by space.",
    "inputFormat": "A single integer N.",
    "outputFormat": "N rows of numbers.",
    "constraints": [
      "1 <= N <= 10"
    ],
    "sampleInput": "4",
    "sampleOutput": "1\n1 2\n1 2 3\n1 2 3 4",
    "explanation": "Each row prints numbers starting from 1 up to row index.",
    "testCases": [
      {
        "id": 1,
        "input": "4",
        "expectedOutput": "1\n1 2\n1 2 3\n1 2 3 4",
        "isHidden": false
      },
      {
        "id": 2,
        "input": "3",
        "expectedOutput": "1\n1 2\n1 2 3",
        "isHidden": false
      },
      {
        "id": 3,
        "input": "1",
        "expectedOutput": "1",
        "isHidden": true
      },
      {
        "id": 4,
        "input": "5",
        "expectedOutput": "1\n1 2\n1 2 3\n1 2 3 4\n1 2 3 4 5",
        "isHidden": true
      }
    ],
    "starterCode": "#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}",
    "solutionCode": "#include <stdio.h>\n\nint main() {\n    int n;\n    if (scanf(\"%d\", &n) == 1) {\n        for (int i = 1; i <= n; i++) {\n            for (int j = 1; j <= i; j++) {\n                printf(\"%d%s\", j, (j == i) ? \"\" : \" \");\n            }\n            printf(\"\\n\");\n        }\n    }\n    return 0;\n}",
    "hint": "Print j from 1 to i with space separation."
  },
  {
    "id": 45,
    "title": "Floyd's triangle",
    "category": "Patterns",
    "difficulty": "Challenge",
    "description": "Print Floyd's triangle with N rows. Floyd's triangle starts at 1 and increments consecutively row by row.",
    "inputFormat": "A single integer N.",
    "outputFormat": "N rows of consecutive integers.",
    "constraints": [
      "1 <= N <= 10"
    ],
    "sampleInput": "4",
    "sampleOutput": "1\n2 3\n4 5 6\n7 8 9 10",
    "explanation": "Numbers continue consecutively from 1 to 10.",
    "testCases": [
      {
        "id": 1,
        "input": "4",
        "expectedOutput": "1\n2 3\n4 5 6\n7 8 9 10",
        "isHidden": false
      },
      {
        "id": 2,
        "input": "2",
        "expectedOutput": "1\n2 3",
        "isHidden": false
      },
      {
        "id": 3,
        "input": "3",
        "expectedOutput": "1\n2 3\n4 5 6",
        "isHidden": true
      },
      {
        "id": 4,
        "input": "1",
        "expectedOutput": "1",
        "isHidden": true
      }
    ],
    "starterCode": "#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}",
    "solutionCode": "#include <stdio.h>\n\nint main() {\n    int n;\n    if (scanf(\"%d\", &n) == 1) {\n        int num = 1;\n        for (int i = 1; i <= n; i++) {\n            for (int j = 1; j <= i; j++) {\n                printf(\"%d%s\", num++, (j == i) ? \"\" : \" \");\n            }\n            printf(\"\\n\");\n        }\n    }\n    return 0;\n}",
    "hint": "Keep a running counter initialized to 1 and print it with increment."
  },
  {
    "id": 46,
    "title": "Diamond pattern",
    "category": "Patterns",
    "difficulty": "Challenge",
    "description": "Print a diamond star pattern with 2*N - 1 rows for a given integer N.",
    "inputFormat": "A single positive integer N.",
    "outputFormat": "Diamond pattern of asterisks.",
    "constraints": [
      "1 <= N <= 15"
    ],
    "sampleInput": "3",
    "sampleOutput": "  *\n ***\n*****\n ***\n  *",
    "explanation": "3 upper rows, 2 lower rows.",
    "testCases": [
      {
        "id": 1,
        "input": "3",
        "expectedOutput": "  *\n ***\n*****\n ***\n  *",
        "isHidden": false
      },
      {
        "id": 2,
        "input": "2",
        "expectedOutput": " *\n***\n *",
        "isHidden": false
      },
      {
        "id": 3,
        "input": "1",
        "expectedOutput": "*",
        "isHidden": true
      },
      {
        "id": 4,
        "input": "4",
        "expectedOutput": "   *\n  ***\n *****\n*******\n *****\n  ***\n   *",
        "isHidden": true
      }
    ],
    "starterCode": "#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}",
    "solutionCode": "#include <stdio.h>\n\nint main() {\n    int n;\n    if (scanf(\"%d\", &n) == 1) {\n        for (int i = 1; i <= n; i++) {\n            for (int s = 1; s <= n - i; s++) printf(\" \");\n            for (int j = 1; j <= 2 * i - 1; j++) printf(\"*\");\n            printf(\"\\n\");\n        }\n        for (int i = n - 1; i >= 1; i--) {\n            for (int s = 1; s <= n - i; s++) printf(\" \");\n            for (int j = 1; j <= 2 * i - 1; j++) printf(\"*\");\n            printf(\"\\n\");\n        }\n    }\n    return 0;\n}",
    "hint": "Print spaces (n-i) and stars (2*i - 1) for top half, then reverse for bottom half."
  },
  {
    "id": 47,
    "title": "Hollow square pattern",
    "category": "Patterns",
    "difficulty": "Challenge",
    "description": "Print a hollow square of asterisks of size N x N.",
    "inputFormat": "A single integer N (N >= 2).",
    "outputFormat": "N lines each having N characters (stars or spaces).",
    "constraints": [
      "2 <= N <= 20"
    ],
    "sampleInput": "4",
    "sampleOutput": "****\n*  *\n*  *\n****",
    "explanation": "Outer border is '*' and inner is spaces.",
    "testCases": [
      {
        "id": 1,
        "input": "4",
        "expectedOutput": "****\n*  *\n*  *\n****",
        "isHidden": false
      },
      {
        "id": 2,
        "input": "3",
        "expectedOutput": "***\n* *\n***",
        "isHidden": false
      },
      {
        "id": 3,
        "input": "5",
        "expectedOutput": "*****\n*   *\n*   *\n*   *\n*****",
        "isHidden": true
      },
      {
        "id": 4,
        "input": "2",
        "expectedOutput": "**\n**",
        "isHidden": true
      }
    ],
    "starterCode": "#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}",
    "solutionCode": "#include <stdio.h>\n\nint main() {\n    int n;\n    if (scanf(\"%d\", &n) == 1) {\n        for (int i = 1; i <= n; i++) {\n            for (int j = 1; j <= n; j++) {\n                if (i == 1 || i == n || j == 1 || j == n) printf(\"*\");\n                else printf(\" \");\n            }\n            printf(\"\\n\");\n        }\n    }\n    return 0;\n}",
    "hint": "Print '*' on border coordinates (i==1, i==n, j==1, j==n), else ' '."
  },
  {
    "id": 48,
    "title": "Pascal triangle",
    "category": "Patterns",
    "difficulty": "Challenge",
    "description": "Print the first N rows of Pascal's triangle. Numbers in each row should be separated by space without leading indentation.",
    "inputFormat": "A single positive integer N.",
    "outputFormat": "N lines of numbers.",
    "constraints": [
      "1 <= N <= 12"
    ],
    "sampleInput": "4",
    "sampleOutput": "1\n1 1\n1 2 1\n1 3 3 1",
    "explanation": "First 4 rows of Pascal's triangle.",
    "testCases": [
      {
        "id": 1,
        "input": "4",
        "expectedOutput": "1\n1 1\n1 2 1\n1 3 3 1",
        "isHidden": false
      },
      {
        "id": 2,
        "input": "3",
        "expectedOutput": "1\n1 1\n1 2 1",
        "isHidden": false
      },
      {
        "id": 3,
        "input": "1",
        "expectedOutput": "1",
        "isHidden": true
      },
      {
        "id": 4,
        "input": "5",
        "expectedOutput": "1\n1 1\n1 2 1\n1 3 3 1\n1 4 6 4 1",
        "isHidden": true
      }
    ],
    "starterCode": "#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}",
    "solutionCode": "#include <stdio.h>\n\nint main() {\n    int n;\n    if (scanf(\"%d\", &n) == 1) {\n        for (int i = 0; i < n; i++) {\n            int val = 1;\n            for (int j = 0; j <= i; j++) {\n                printf(\"%d%s\", val, (j == i) ? \"\" : \" \");\n                val = val * (i - j) / (j + 1);\n            }\n            printf(\"\\n\");\n        }\n    }\n    return 0;\n}",
    "hint": "Use binomial coefficient property: next_val = val * (i - j) / (j + 1)."
  },
  {
    "id": 49,
    "title": "Pyramid pattern",
    "category": "Patterns",
    "difficulty": "Challenge",
    "description": "Print a centered pyramid pattern of asterisks with N rows. Row i has N - i leading spaces and 2*i - 1 asterisks.",
    "inputFormat": "A single positive integer N.",
    "outputFormat": "N lines forming a pyramid of asterisks.",
    "constraints": [
      "1 <= N <= 20"
    ],
    "sampleInput": "4",
    "sampleOutput": "   *\n  ***\n *****\n*******",
    "explanation": "Row 1 has 3 spaces and 1 star, row 4 has 0 spaces and 7 stars.",
    "testCases": [
      {
        "id": 1,
        "input": "4",
        "expectedOutput": "   *\n  ***\n *****\n*******",
        "isHidden": false
      },
      {
        "id": 2,
        "input": "3",
        "expectedOutput": "  *\n ***\n*****",
        "isHidden": false
      },
      {
        "id": 3,
        "input": "1",
        "expectedOutput": "*",
        "isHidden": true
      },
      {
        "id": 4,
        "input": "5",
        "expectedOutput": "    *\n   ***\n  *****\n *******\n*********",
        "isHidden": true
      }
    ],
    "starterCode": "#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}",
    "solutionCode": "#include <stdio.h>\n\nint main() {\n    int n;\n    if (scanf(\"%d\", &n) == 1) {\n        for (int i = 1; i <= n; i++) {\n            for (int s = 1; s <= n - i; s++) printf(\" \");\n            for (int j = 1; j <= 2 * i - 1; j++) printf(\"*\");\n            printf(\"\\n\");\n        }\n    }\n    return 0;\n}",
    "hint": "Print (n - i) spaces followed by (2 * i - 1) stars."
  },
  {
    "id": 50,
    "title": "Centered number pyramid",
    "category": "Patterns",
    "difficulty": "Challenge",
    "description": "Print a centered number pyramid of height N. Row i has N - i leading spaces, followed by numbers from 1 to i and back down to 1 (e.g., 1, 121, 12321).",
    "inputFormat": "A single positive integer N.",
    "outputFormat": "N lines of a palindromic number pyramid.",
    "constraints": [
      "1 <= N <= 9"
    ],
    "sampleInput": "3",
    "sampleOutput": "  1\n 121\n12321",
    "explanation": "Pyramid with numbers ascending then descending.",
    "testCases": [
      {
        "id": 1,
        "input": "3",
        "expectedOutput": "  1\n 121\n12321",
        "isHidden": false
      },
      {
        "id": 2,
        "input": "2",
        "expectedOutput": " 1\n121",
        "isHidden": false
      },
      {
        "id": 3,
        "input": "1",
        "expectedOutput": "1",
        "isHidden": true
      },
      {
        "id": 4,
        "input": "4",
        "expectedOutput": "   1\n  121\n 12321\n1234321",
        "isHidden": true
      }
    ],
    "starterCode": "#include <stdio.h>\n\nint main() {\n    // Write your code here\n    return 0;\n}",
    "solutionCode": "#include <stdio.h>\n\nint main() {\n    int n;\n    if (scanf(\"%d\", &n) == 1) {\n        for (int i = 1; i <= n; i++) {\n            for (int s = 1; s <= n - i; s++) printf(\" \");\n            for (int j = 1; j <= i; j++) printf(\"%d\", j);\n            for (int j = i - 1; j >= 1; j--) printf(\"%d\", j);\n            printf(\"\\n\");\n        }\n    }\n    return 0;\n}",
    "hint": "Print leading spaces, then ascending loop to i, then descending loop to 1."
  }
];

export const categories: CategoryInfo[] = [
  {
    "label": "All",
    "count": 50
  },
  {
    "label": "Basics",
    "count": 5
  },
  {
    "label": "Conditionals",
    "count": 13
  },
  {
    "label": "Switch",
    "count": 3
  },
  {
    "label": "Numbers",
    "count": 17
  },
  {
    "label": "Series",
    "count": 3
  },
  {
    "label": "Patterns",
    "count": 9
  }
];
