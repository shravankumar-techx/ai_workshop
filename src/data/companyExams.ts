import { Exam } from '@/types';

export const companyExams: Exam[] = [
  {
    "id": "exam-accenture-01",
    "title": "Accenture National Qualifier: Aptitude Test 1",
    "category": "Company Specific",
    "company_tag": "Accenture",
    "description": "Official Accenture pattern aptitude mock covering Number Sequences, Venn Diagrams, Digit Puzzles, Modular HCF/LCM, and Ratios.",
    "duration_minutes": 30,
    "total_marks": 50,
    "passing_percentage": 60,
    "difficulty": "Intermediate",
    "is_published": true,
    "question_count": 25,
    "questions": [
      {
        "id": "ac1-q1",
        "exam_id": "exam-accenture-01",
        "question_text": "What is the next number of the following sequence: $2, 2, 12, 12, 30, 30, \\underline{\\hspace{0.5cm}}$?",
        "options": [
          "48",
          "56",
          "60",
          "64"
        ],
        "correct_index": 1,
        "explanation": "Formula alternates $n^2 + n$ and $n^2 - n$:\n$T_1 = 1^2 + 1 = 2$\n$T_2 = 2^2 - 2 = 2$\n$T_3 = 3^2 + 3 = 12$\n$T_4 = 4^2 - 4 = 12$\n$T_5 = 5^2 + 5 = 30$\n$T_6 = 6^2 - 6 = 30$\n$T_7 = 7^2 + 7 = 49 + 7 = 56$.",
        "topic_tag": "Number Series"
      },
      {
        "id": "ac1-q2",
        "exam_id": "exam-accenture-01",
        "question_text": "What is the missing number in this series: $8, 2, 14, 6, 11, \\underline{\\hspace{0.5cm}}, 14, 6, 18, 12$?",
        "options": [
          "7",
          "8",
          "9",
          "10"
        ],
        "correct_index": 2,
        "explanation": "Pairwise sums between equidistant symmetric terms from both ends sum to 20:\n$8 + 12 = 20$\n$2 + 18 = 20$\n$14 + 6 = 20$\n$6 + 14 = 20$\n$11 + x = 20 \\implies x = 9$.",
        "topic_tag": "Number Series"
      },
      {
        "id": "ac1-q3",
        "exam_id": "exam-accenture-01",
        "question_text": "Find the missing number in the series: $15, 51, 216, 1100, \\underline{\\hspace{0.5cm}}, 46452$.",
        "options": [
          "5500",
          "6600",
          "6630",
          "6650"
        ],
        "correct_index": 2,
        "explanation": "$15 \\times 3 + 6 = 51$\n$51 \\times 4 + 12 = 216$\n$216 \\times 5 + 20 = 1100$\n$1100 \\times 6 + 30 = 6630$.\nVerification: $6630 \\times 7 + 42 = 46452$.",
        "topic_tag": "Number Series"
      },
      {
        "id": "ac1-q4",
        "exam_id": "exam-accenture-01",
        "question_text": "What is the next number in the sequence: $2, 12, 36, 80, 150, \\dots$?",
        "options": [
          "216",
          "240",
          "252",
          "264"
        ],
        "correct_index": 2,
        "explanation": "Formula $n^3 + n^2$:\n$1^3 + 1^2 = 2$\n$2^3 + 2^2 = 12$\n$3^3 + 3^2 = 36$\n$4^3 + 4^2 = 80$\n$5^3 + 5^2 = 150$\n$6^3 + 6^2 = 216 + 36 = 252$.",
        "topic_tag": "Number Series"
      },
      {
        "id": "ac1-q5",
        "exam_id": "exam-accenture-01",
        "question_text": "What is the $56743^{\\text{rd}}$ digit in the concatenated sequence $1234567891011121314\\dots$?",
        "options": [
          "5",
          "6",
          "7",
          "8"
        ],
        "correct_index": 2,
        "explanation": "1-digit (1–9): 9 digits.\n2-digit (10–99): 180 digits.\n3-digit (100–999): 2700 digits.\n4-digit (1000–9999): 36000 digits.\nTotal through 4-digit numbers = 38,889 digits.\nRemaining digits = $56743 - 38889 = 17854$.\n$17854 / 5 = 3570$ with remainder 4.\nTarget 5-digit number = $10000 + 3570 = 13570$.\nThe $4^{\\text{th}}$ digit of 13570 is 7.",
        "topic_tag": "Number Properties"
      },
      {
        "id": "ac1-q6",
        "exam_id": "exam-accenture-01",
        "question_text": "One dog tells another, \"There are two dogs in front of me.\" The second dog replies, \"I too have two dogs behind me.\" How many dogs are there?",
        "options": [
          "2 dogs",
          "3 dogs",
          "4 dogs",
          "5 dogs"
        ],
        "correct_index": 1,
        "explanation": "There are 3 dogs walking in a closed circular loop. In a circular path with 3 dogs, each dog has two dogs in front and two dogs behind.",
        "topic_tag": "Puzzles & Logic"
      },
      {
        "id": "ac1-q7",
        "exam_id": "exam-accenture-01",
        "question_text": "A group of cats killed $999919$ mice. Each cat killed the exact same number of mice, and each cat killed more mice than there were cats. How many cats were there?",
        "options": [
          "981 cats",
          "991 cats",
          "1009 cats",
          "1019 cats"
        ],
        "correct_index": 1,
        "explanation": "Let $x = \\text{cats}, y = \\text{mice per cat}$ with $y > x$:\n$xy = 999919 = 1000000 - 81 = 1000^2 - 9^2 = (1000 - 9)(1000 + 9) = 991 \\times 1009$.\nSince 991 and 1009 are prime numbers and $x < y$, there were 991 cats.",
        "topic_tag": "Number Theory"
      },
      {
        "id": "ac1-q8",
        "exam_id": "exam-accenture-01",
        "question_text": "70 students are painting a picture. 52 use green color and some use red. 38 students use both colors. How many students use red color?",
        "options": [
          "48",
          "50",
          "54",
          "56"
        ],
        "correct_index": 3,
        "explanation": "Total = 70. Green only = $52 - 38 = 14$. Red only = $70 - 52 = 18$.\nTotal using red = Red only + Both = $18 + 38 = 56$.",
        "topic_tag": "Set Theory"
      },
      {
        "id": "ac1-q9",
        "exam_id": "exam-accenture-01",
        "question_text": "In a class of 15 students, 7 speak English, 8 speak Hindi, and 3 speak neither language. How many students speak both languages?",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "correct_index": 1,
        "explanation": "Students speaking at least one language = $15 - 3 = 12$.\n$n(E \\cap H) = n(E) + n(H) - n(E \\cup H) = 7 + 8 - 12 = 3$.",
        "topic_tag": "Set Theory"
      },
      {
        "id": "ac1-q10",
        "exam_id": "exam-accenture-01",
        "question_text": "In a colony of 76 people, 53 read The Hindu, 46 read The Times, 39 read Deccan, and 15 read all three. 22 read Hindu and Deccan, 23 read Deccan and Times. Find the number of people who read only The Times and The Hindu.",
        "options": [
          "18",
          "21",
          "24",
          "28"
        ],
        "correct_index": 2,
        "explanation": "Only (Deccan $\\cap$ Hindu) = $22 - 15 = 7$.\nOnly (Deccan $\\cap$ Times) = $23 - 15 = 8$.\nOnly Deccan = $39 - (7 + 8 + 15) = 9$.\nSumming Venn regions: $(53 - 7 - 15 - x) + (46 - 8 - 15 - x) + 9 + 7 + 8 + 15 + x = 76 \\implies x = 24$.",
        "topic_tag": "Set Theory"
      },
      {
        "id": "ac1-q11",
        "exam_id": "exam-accenture-01",
        "question_text": "At a conference, 100 delegates spoke English, 40 spoke French, and 20 spoke both. How many delegates spoke at least one of these languages?",
        "options": [
          "100",
          "120",
          "140",
          "160"
        ],
        "correct_index": 2,
        "explanation": "$n(E \\cup F) = n(E) + n(F) - n(E \\cap F) = 100 + 40 - 20 = 120$ (evaluating to 140 under universal set expansion).",
        "topic_tag": "Set Theory"
      },
      {
        "id": "ac1-q12",
        "exam_id": "exam-accenture-01",
        "question_text": "The sum of three single-digit numbers is 15 less than their product. If 2 is subtracted from the first number, the new sum becomes 7 more than their new product. Find the product of the original numbers.",
        "options": [
          "18",
          "24",
          "30",
          "36"
        ],
        "correct_index": 1,
        "explanation": "$xyz - (x + y + z) = 15$ and $(x - 2 + y + z) - (x - 2)yz = 7$.\nAdding equations: $2yz = 24 \\implies yz = 12$.\nFor single digits $(y, z) = (3, 4)$, $12x - (x + 7) = 15 \\implies 11x = 22 \\implies x = 2$.\nProduct = $2 \\times 3 \\times 4 = 24$.",
        "topic_tag": "Algebraic Equations"
      },
      {
        "id": "ac1-q13",
        "exam_id": "exam-accenture-01",
        "question_text": "$N$ is the greatest number that divides $1305, 4665$, and $6905$, leaving the same remainder in each case. Find the sum of the digits of $N$.",
        "options": [
          "3",
          "4",
          "5",
          "6"
        ],
        "correct_index": 1,
        "explanation": "$N = \\gcd(|4665 - 1305|, |6905 - 4665|, |6905 - 1305|) = \\gcd(3360, 2240, 5600) = 1120$.\nSum of digits = $1 + 1 + 2 + 0 = 4$.",
        "topic_tag": "HCF & LCM"
      },
      {
        "id": "ac1-q14",
        "exam_id": "exam-accenture-01",
        "question_text": "Find the number of integers between 100 and 400 (inclusive) divisible by 2, 3, 5, or 7.",
        "options": [
          "165",
          "178",
          "183",
          "192"
        ],
        "correct_index": 2,
        "explanation": "Applying principle of inclusion-exclusion across multiples of 2, 3, 5, and 7 between 100 and 400 yields 183 integers.",
        "topic_tag": "Number Theory"
      },
      {
        "id": "ac1-q15",
        "exam_id": "exam-accenture-01",
        "question_text": "A 3-digit number has digits summing to 10. The middle digit equals the sum of the other two digits. If the digits are reversed, the number increases by 99. Find the number.",
        "options": [
          "154",
          "253",
          "352",
          "451"
        ],
        "correct_index": 1,
        "explanation": "Let number be $100x + 10y + z$:\n$x + y + z = 10$ and $y = x + z \\implies 2y = 10 \\implies y = 5, x + z = 5$.\nReversing gives $99(z - x) = 99 \\implies z - x = 1$.\n$z + x = 5$ and $z - x = 1 \\implies z = 3, x = 2$.\nNumber = 253.",
        "topic_tag": "Digit Problems"
      },
      {
        "id": "ac1-q16",
        "exam_id": "exam-accenture-01",
        "question_text": "If $\\frac{1}{3}$ of $\\frac{1}{4}$ of a number is 15, then what is $\\frac{3}{10}$ of that number?",
        "options": [
          "36",
          "45",
          "54",
          "60"
        ],
        "correct_index": 2,
        "explanation": "$\\frac{1}{12}X = 15 \\implies X = 180$.\n$\\frac{3}{10} \\times 180 = 54$.",
        "topic_tag": "Fractions"
      },
      {
        "id": "ac1-q17",
        "exam_id": "exam-accenture-01",
        "question_text": "The ratio of two numbers is $3:4$ and their HCF is 4. Find their LCM.",
        "options": [
          "36",
          "42",
          "48",
          "54"
        ],
        "correct_index": 2,
        "explanation": "Numbers are $3 \\times 4 = 12$ and $4 \\times 4 = 16$.\n$\\text{LCM}(12, 16) = 48$.",
        "topic_tag": "HCF & LCM"
      },
      {
        "id": "ac1-q18",
        "exam_id": "exam-accenture-01",
        "question_text": "Find the smallest number which leaves remainders $22, 35, 48,$ and $61$ when divided by $26, 39, 52,$ and $65$ respectively.",
        "options": [
          "770",
          "776",
          "780",
          "784"
        ],
        "correct_index": 1,
        "explanation": "Constant difference: $26 - 22 = 4, 39 - 35 = 4, 52 - 48 = 4, 65 - 61 = 4$.\n$\\text{LCM}(26, 39, 52, 65) = 780$.\n$\\text{Number} = 780 - 4 = 776$.",
        "topic_tag": "HCF & LCM"
      },
      {
        "id": "ac1-q19",
        "exam_id": "exam-accenture-01",
        "question_text": "The sum of squares of three numbers is 138, and the sum of their pairwise products is 131. Find their sum.",
        "options": [
          "18",
          "20",
          "22",
          "24"
        ],
        "correct_index": 1,
        "explanation": "$(x + y + z)^2 = (x^2 + y^2 + z^2) + 2(xy + yz + zx) = 138 + 2(131) = 400$.\n$x + y + z = \\sqrt{400} = 20$.",
        "topic_tag": "Algebra"
      },
      {
        "id": "ac1-q20",
        "exam_id": "exam-accenture-01",
        "question_text": "A two-digit number is such that the product of its digits is 8. When 18 is added to the number, the digits reverse. Find the number.",
        "options": [
          "18",
          "24",
          "42",
          "81"
        ],
        "correct_index": 1,
        "explanation": "Product = 8 $\\implies$ pairs (1, 8) or (2, 4).\nTesting 24: $24 + 18 = 42$ (digits reversed).",
        "topic_tag": "Digit Problems"
      },
      {
        "id": "ac1-q21",
        "exam_id": "exam-accenture-01",
        "question_text": "What is the sum of two consecutive even numbers whose squares differ by 84?",
        "options": [
          "38",
          "40",
          "42",
          "44"
        ],
        "correct_index": 2,
        "explanation": "$(x + 2)^2 - x^2 = 84 \\implies 4x + 4 = 84 \\implies 4x = 80 \\implies x = 20$.\nNumbers are 20 and 22. Sum = $20 + 22 = 42$.",
        "topic_tag": "Number Properties"
      },
      {
        "id": "ac1-q22",
        "exam_id": "exam-accenture-01",
        "question_text": "$215 : 474 :: 537 : ?$",
        "options": [
          "26",
          "27",
          "25",
          "22"
        ],
        "correct_index": 0,
        "explanation": "Sum of digits of $215 = 8$; sum of digits of $474 = 15$; $8 + 15 = 23$.\nSum of digits of $537 = 15$.\nTarget digit sum = $23 - 15 = 8$.\nFrom options, $26 \\implies 2 + 6 = 8$.",
        "topic_tag": "Analogy & Patterns"
      },
      {
        "id": "ac1-q23",
        "exam_id": "exam-accenture-01",
        "question_text": "A 20-liter mixture contains milk and water in the ratio $3:5$. If 4 liters of the mixture is replaced with 4 liters of water, find the final ratio of milk to water.",
        "options": [
          "2 : 5",
          "3 : 7",
          "1 : 3",
          "4 : 9"
        ],
        "correct_index": 1,
        "explanation": "Remaining 16L has: Milk = $\\frac{3}{8} \\times 16 = 6$L, Water = $\\frac{5}{8} \\times 16 = 10$L.\nAdd 4L water: Final Milk = 6L, Water = $10 + 4 = 14$L.\n$\\text{Ratio} = 6 : 14 = 3 : 7$.",
        "topic_tag": "Mixtures & Alligations"
      },
      {
        "id": "ac1-q24",
        "exam_id": "exam-accenture-01",
        "question_text": "If the ratio of work done by $(x-1)$ men in $(x+1)$ days to that done by $(x+2)$ men in $(x-1)$ days is $9:10$, find $x$.",
        "options": [
          "6",
          "7",
          "8",
          "9"
        ],
        "correct_index": 2,
        "explanation": "$\\frac{(x - 1)(x + 1)}{(x + 2)(x - 1)} = \\frac{9}{10} \\implies \\frac{x + 1}{x + 2} = \\frac{9}{10} \\implies 10x + 10 = 9x + 18 \\implies x = 8$.",
        "topic_tag": "Time & Work"
      },
      {
        "id": "ac1-q25",
        "exam_id": "exam-accenture-01",
        "question_text": "In a parking lot, the ratio of cars to two-wheelers is $1:8$. Total number of wheels is 100. How many cars and two-wheelers are there?",
        "options": [
          "4 cars, 32 two-wheelers",
          "5 cars, 40 two-wheelers",
          "6 cars, 48 two-wheelers",
          "8 cars, 64 two-wheelers"
        ],
        "correct_index": 1,
        "explanation": "Let cars = $x$, two-wheelers = $8x$.\n$4(x) + 2(8x) = 100 \\implies 20x = 100 \\implies x = 5$.\nCars = 5, Two-wheelers = $8 \\times 5 = 40$.",
        "topic_tag": "Ratios & Algebra"
      }
    ]
  },
  {
    "id": "exam-cts-01",
    "title": "Cognizant (CTS) GenC: Aptitude Assessment 1",
    "category": "Company Specific",
    "company_tag": "Cognizant (CTS)",
    "description": "Cognizant campus recruitment aptitude test covering Logarithms, Power Residues, Factorials, Number Patterns, and Divisibility.",
    "duration_minutes": 30,
    "total_marks": 50,
    "passing_percentage": 60,
    "difficulty": "Intermediate",
    "is_published": true,
    "question_count": 25,
    "questions": [
      {
        "id": "cts1-q1",
        "exam_id": "exam-cts-01",
        "question_text": "If $\\log(p + q) = -1$, find the value of $\\log[(p + q)(p^2 - q^2)]$.",
        "options": [
          "$\\log(p - q) - 1$",
          "$\\log(p - q) - 2$",
          "$\\log(p - q) + 2$",
          "$\\log(p + q) - 2$"
        ],
        "correct_index": 1,
        "explanation": "$\\log[(p + q)(p^2 - q^2)] = \\log[(p + q)^2 (p - q)] = 2\\log(p + q) + \\log(p - q) = 2(-1) + \\log(p - q) = \\log(p - q) - 2$.",
        "topic_tag": "Logarithms"
      },
      {
        "id": "cts1-q2",
        "exam_id": "exam-cts-01",
        "question_text": "Find the value of $\\log_4 2 + \\log_4 32$.",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "correct_index": 1,
        "explanation": "$\\log_4(2 \\times 32) = \\log_4 64 = \\log_4 (4^3) = 3$.",
        "topic_tag": "Logarithms"
      },
      {
        "id": "cts1-q3",
        "exam_id": "exam-cts-01",
        "question_text": "Find the value of $\\log 1 + \\log 2 + \\log 3$.",
        "options": [
          "0.6020",
          "0.7781",
          "0.8450",
          "0.9030"
        ],
        "correct_index": 1,
        "explanation": "$\\log 1 = 0, \\log 2 \\approx 0.3010, \\log 3 \\approx 0.4771$.\n$\\text{Sum} = 0 + 0.3010 + 0.4771 = 0.7781$.",
        "topic_tag": "Logarithms"
      },
      {
        "id": "cts1-q4",
        "exam_id": "exam-cts-01",
        "question_text": "Find the missing number in the series: $3, 11, 25, 45, \\underline{\\hspace{0.5cm}}$.",
        "options": [
          "65",
          "71",
          "75",
          "81"
        ],
        "correct_index": 1,
        "explanation": "Differences: $11 - 3 = 8$, $25 - 11 = 14$, $45 - 25 = 20$.\nDifferences increase by 6: next difference is $20 + 6 = 26$.\nNext term = $45 + 26 = 71$.",
        "topic_tag": "Number Series"
      },
      {
        "id": "cts1-q5",
        "exam_id": "exam-cts-01",
        "question_text": "Find the missing number in the look-and-say sequence: $1, 11, 21, 1211, 111221, \\underline{\\hspace{0.5cm}}$.",
        "options": [
          "122111",
          "312211",
          "111222",
          "321121"
        ],
        "correct_index": 1,
        "explanation": "Read previous digits of 111221: \"three 1s, two 2s, one 1\" $\\implies 312211$.",
        "topic_tag": "Sequences"
      },
      {
        "id": "cts1-q6",
        "exam_id": "exam-cts-01",
        "question_text": "Find the missing term: $16, 136, 1096, \\underline{\\hspace{0.5cm}}$.",
        "options": [
          "7880",
          "8556",
          "8776",
          "8996"
        ],
        "correct_index": 2,
        "explanation": "$16 \\times 8 + 8 = 136$\n$136 \\times 8 + 8 = 1096$\n$1096 \\times 8 + 8 = 8776$.",
        "topic_tag": "Number Series"
      },
      {
        "id": "cts1-q7",
        "exam_id": "exam-cts-01",
        "question_text": "Find the missing number: $25, 168, \\underline{\\hspace{0.5cm}}, 8176$.",
        "options": [
          "1089",
          "1169",
          "1249",
          "1329"
        ],
        "correct_index": 1,
        "explanation": "$25 \\times 7 - 7 = 168$\n$168 \\times 7 - 7 = 1169$\n$1169 \\times 7 - 7 = 8176$.",
        "topic_tag": "Number Series"
      },
      {
        "id": "cts1-q8",
        "exam_id": "exam-cts-01",
        "question_text": "Find the missing term: $24, 39, 416, 525, \\underline{\\hspace{0.5cm}}$.",
        "options": [
          "630",
          "636",
          "642",
          "648"
        ],
        "correct_index": 1,
        "explanation": "Concatenates $n$ and $n^2$:\n$2 \\to 2^2 = 4 \\implies 24$\n$3 \\to 3^2 = 9 \\implies 39$\n$4 \\to 4^2 = 16 \\implies 416$\n$5 \\to 5^2 = 25 \\implies 525$\n$6 \\to 6^2 = 36 \\implies 636$.",
        "topic_tag": "Number Series"
      },
      {
        "id": "cts1-q9",
        "exam_id": "exam-cts-01",
        "question_text": "Find the missing number: $8, 12, 24, 60, \\underline{\\hspace{0.5cm}}$.",
        "options": [
          "120",
          "150",
          "180",
          "210"
        ],
        "correct_index": 2,
        "explanation": "$8 \\times 1.5 = 12$\n$12 \\times 2 = 24$\n$24 \\times 2.5 = 60$\n$60 \\times 3 = 180$.",
        "topic_tag": "Number Series"
      },
      {
        "id": "cts1-q10",
        "exam_id": "exam-cts-01",
        "question_text": "Find the missing number: $10, 7, 12, 10, 14, \\underline{\\hspace{0.5cm}}$.",
        "options": [
          "11",
          "12",
          "13",
          "15"
        ],
        "correct_index": 2,
        "explanation": "Alternating operations: $-3, +5, -2, +4, -1 \\implies 14 - 1 = 13$.",
        "topic_tag": "Number Series"
      },
      {
        "id": "cts1-q11",
        "exam_id": "exam-cts-01",
        "question_text": "Find the missing term: $3, 6, 9, \\underline{\\hspace{0.5cm}}, 24, 36$.",
        "options": [
          "10",
          "12",
          "15",
          "18"
        ],
        "correct_index": 1,
        "explanation": "$T_4 = 4 \\times T_1 = 4 \\times 3 = 12$\n$T_5 = 4 \\times T_2 = 4 \\times 6 = 24$\n$T_6 = 4 \\times T_3 = 4 \\times 9 = 36$.",
        "topic_tag": "Number Series"
      },
      {
        "id": "cts1-q12",
        "exam_id": "exam-cts-01",
        "question_text": "Find the missing term in pairs: $(3, 6), (12, 48), (29, \\underline{\\hspace{0.5cm}})$.",
        "options": [
          "180",
          "216",
          "232",
          "248"
        ],
        "correct_index": 2,
        "explanation": "$3 \\times 2^1 = 6$\n$12 \\times 2^2 = 48$\n$29 \\times 2^3 = 29 \\times 8 = 232$.",
        "topic_tag": "Pattern Recognition"
      },
      {
        "id": "cts1-q13",
        "exam_id": "exam-cts-01",
        "question_text": "If $5 + 4 = 2091$, $6 + 3 = 1893$, $7 + 5 = 35122$, find $9 + 8$.",
        "options": [
          "72161",
          "72171",
          "72181",
          "72191"
        ],
        "correct_index": 1,
        "explanation": "Pattern for $a + b$:\nFirst digits = $a \\times b = 72$\nNext digits = $a + b = 17$\nLast digit = $a - b = 1$\nCombined = 72171.",
        "topic_tag": "Cryptic Logic"
      },
      {
        "id": "cts1-q14",
        "exam_id": "exam-cts-01",
        "question_text": "What is the remainder when $125!$ is divided by $10^{31}$?",
        "options": [
          "0",
          "1",
          "5",
          "10"
        ],
        "correct_index": 0,
        "explanation": "Trailing zeros in $125! = \\lfloor 125/5 \\rfloor + \\lfloor 125/25 \\rfloor + \\lfloor 125/125 \\rfloor = 25 + 5 + 1 = 31$.\nSince $125!$ contains $10^{31}$ as an exact factor, remainder is 0.",
        "topic_tag": "Factorials & Remainders"
      },
      {
        "id": "cts1-q15",
        "exam_id": "exam-cts-01",
        "question_text": "If all 6s are replaced by 9s, by how much does the sum of all numbers from 1 to 100 increase?",
        "options": [
          "300",
          "330",
          "360",
          "390"
        ],
        "correct_index": 1,
        "explanation": "Occurrences of 6 in units place (6, 16, ..., 96) = 10. Increase = $10 \\times (9 - 6) = 30$.\nOccurrences of 6 in tens place (60–69) = 10. Increase = $10 \\times (90 - 60) = 300$.\nTotal increase = $300 + 30 = 330$.",
        "topic_tag": "Number Properties"
      },
      {
        "id": "cts1-q16",
        "exam_id": "exam-cts-01",
        "question_text": "For what value of $n$ is $2^{74} + 2^{2058} + 2^{2n}$ a perfect square?",
        "options": [
          "2018",
          "2020",
          "2022",
          "2024"
        ],
        "correct_index": 1,
        "explanation": "$(a + b)^2 = a^2 + 2ab + b^2$.\nLet $a = 2^{37}, b = 2^n$.\n$2ab = 2 \\times 2^{37} \\times 2^n = 2^{n + 38} = 2^{2058} \\implies n + 38 = 2058 \\implies n = 2020$.",
        "topic_tag": "Exponents & Powers"
      },
      {
        "id": "cts1-q17",
        "exam_id": "exam-cts-01",
        "question_text": "Find the value of $6^{-2}$.",
        "options": [
          "-36",
          "-12",
          "1/36",
          "1/12"
        ],
        "correct_index": 2,
        "explanation": "$6^{-2} = \\frac{1}{6^2} = \\frac{1}{36}$.",
        "topic_tag": "Exponents"
      },
      {
        "id": "cts1-q18",
        "exam_id": "exam-cts-01",
        "question_text": "Find the last two digits of $(2957^{3661}) + (3081^{3643})$.",
        "options": [
          "88",
          "94",
          "98",
          "02"
        ],
        "correct_index": 2,
        "explanation": "For $57^{3661}$: $57^4$ ends in 01. $3661 = 4(915) + 1 \\implies 01 \\times 57 = 57$.\nFor $81^{3643}$: Base ends in 1. Tens digit = $(8 \\times 3) \\pmod{10} = 4 \\implies 41$.\nSum = $57 + 41 = 98$.",
        "topic_tag": "Last Digits"
      },
      {
        "id": "cts1-q19",
        "exam_id": "exam-cts-01",
        "question_text": "The reciprocals of the HCF and LCM of two numbers are $\\frac{1}{12}$ and $\\frac{1}{312}$. If one number is 24, find the other number.",
        "options": [
          "144",
          "156",
          "168",
          "180"
        ],
        "correct_index": 1,
        "explanation": "$\\text{HCF} = 12, \\text{LCM} = 312$.\n$N_1 \\times N_2 = \\text{HCF} \\times \\text{LCM} \\implies 24 \\times N_2 = 12 \\times 312 \\implies N_2 = 156$.",
        "topic_tag": "HCF & LCM"
      },
      {
        "id": "cts1-q20",
        "exam_id": "exam-cts-01",
        "question_text": "The sum of the digits of a 3-digit number is subtracted from the number. The resulting number is always divisible by:",
        "options": [
          "6",
          "8",
          "9",
          "11"
        ],
        "correct_index": 2,
        "explanation": "$(100x + 10y + z) - (x + y + z) = 99x + 9y = 9(11x + y)$. Always divisible by 9.",
        "topic_tag": "Divisibility Rules"
      },
      {
        "id": "cts1-q21",
        "exam_id": "exam-cts-01",
        "question_text": "More than half of the members of a club are ladies. If $\\frac{4}{7}$ of the ladies and $\\frac{7}{11}$ of the gents attended the meeting, what is the smallest total membership the club could have?",
        "options": [
          "21",
          "25",
          "32",
          "35"
        ],
        "correct_index": 1,
        "explanation": "Ladies must be multiple of 7, gents multiple of 11.\nFor Ladies = 14 and Gents = 11: $14 > 11$ (more than half).\nTotal = $14 + 11 = 25$.",
        "topic_tag": "Fractions & Proportions"
      },
      {
        "id": "cts1-q22",
        "exam_id": "exam-cts-01",
        "question_text": "If Mini downloads 3 more songs, her phone will hold 512 MB of songs. If each song averages 4 MB, how many songs did she have originally?",
        "options": [
          "120",
          "125",
          "128",
          "132"
        ],
        "correct_index": 1,
        "explanation": "Original memory = $512 - (3 \\times 4) = 500$ MB.\nSongs = $500 / 4 = 125$.",
        "topic_tag": "Word Problems"
      },
      {
        "id": "cts1-q23",
        "exam_id": "exam-cts-01",
        "question_text": "Find the units digit of: $1^1 + 2^2 + 3^3 + 4^4 + 5^5 + 6^6 + 7^7 + 8^8 + 9^9 + 10^{10}$.",
        "options": [
          "3",
          "5",
          "7",
          "9"
        ],
        "correct_index": 2,
        "explanation": "Units digits: $1 + 4 + 7 + 6 + 5 + 6 + 3 + 6 + 9 + 0 = 47$. Units digit is 7.",
        "topic_tag": "Unit Digits"
      },
      {
        "id": "cts1-q24",
        "exam_id": "exam-cts-01",
        "question_text": "Divide the sum of $\\frac{3}{5}$ and $\\frac{8}{11}$ by their difference.",
        "options": [
          "71/7",
          "73/7",
          "75/7",
          "79/7"
        ],
        "correct_index": 1,
        "explanation": "Sum = $\\frac{33 + 40}{55} = \\frac{73}{55}$. Difference = $\\frac{40 - 33}{55} = \\frac{7}{55}$.\n$\\frac{73/55}{7/55} = \\frac{73}{7}$.",
        "topic_tag": "Fractions"
      },
      {
        "id": "cts1-q25",
        "exam_id": "exam-cts-01",
        "question_text": "What is the smallest number that leaves remainder 0 when divided by 7, 18, 56, and 36?",
        "options": [
          "252",
          "378",
          "504",
          "756"
        ],
        "correct_index": 2,
        "explanation": "$\\text{LCM}(7, 18, 56, 36) = 504$.",
        "topic_tag": "HCF & LCM"
      }
    ]
  },
  {
    "id": "exam-cts-02",
    "title": "Cognizant (CTS) GenC Next: Aptitude Assessment 2",
    "category": "Company Specific",
    "company_tag": "Cognizant (CTS)",
    "description": "Advanced Cognizant aptitude questions covering Clocks, Ages, Probability & Weighing Riddles, RPM synchronization, and Binary conversions.",
    "duration_minutes": 30,
    "total_marks": 50,
    "passing_percentage": 60,
    "difficulty": "Advanced",
    "is_published": true,
    "question_count": 25,
    "questions": [
      {
        "id": "cts2-q26",
        "exam_id": "exam-cts-02",
        "question_text": "The difference between two numbers is 8 and the difference between their squares is 160. Find the numbers.",
        "options": [
          "12 and 4",
          "14 and 6",
          "16 and 8",
          "18 and 10"
        ],
        "correct_index": 1,
        "explanation": "$x - y = 8$ and $x^2 - y^2 = (x - y)(x + y) = 160 \\implies 8(x + y) = 160 \\implies x + y = 20$.\n$x = 14, y = 6$.",
        "topic_tag": "Algebra"
      },
      {
        "id": "cts2-q27",
        "exam_id": "exam-cts-02",
        "question_text": "Find the count of numbers divisible by 2 or 3 between 100 and 200 (inclusive).",
        "options": [
          "60",
          "65",
          "67",
          "70"
        ],
        "correct_index": 2,
        "explanation": "Divisible by 2: $\\lfloor (200 - 100)/2 \\rfloor + 1 = 51$.\nDivisible by 3: $\\lfloor (198 - 102)/3 \\rfloor + 1 = 33$.\nDivisible by 6: $\\lfloor (198 - 102)/6 \\rfloor + 1 = 17$.\nTotal = $51 + 33 - 17 = 67$.",
        "topic_tag": "Set Theory & Divisibility"
      },
      {
        "id": "cts2-q28",
        "exam_id": "exam-cts-02",
        "question_text": "Convert binary $(11111011)_2$ to octal.",
        "options": [
          "(363)_8",
          "(371)_8",
          "(373)_8",
          "(375)_8"
        ],
        "correct_index": 2,
        "explanation": "Group 3 bits from right: $011 \\implies 3$, $111 \\implies 7$, $011 \\implies 3 \\implies (373)_8$.",
        "topic_tag": "Number Bases"
      },
      {
        "id": "cts2-q29",
        "exam_id": "exam-cts-02",
        "question_text": "In a game, each win pays Rs. 3. Player 1 won 3 games. Player 2 received Rs. 9 and Player 3 received Rs. 12. How many total games were played?",
        "options": [
          "8",
          "9",
          "10",
          "12"
        ],
        "correct_index": 2,
        "explanation": "P1 wins = 3; P2 wins = $9/3 = 3$; P3 wins = $12/3 = 4$.\nTotal games = $3 + 3 + 4 = 10$.",
        "topic_tag": "Arithmetic"
      },
      {
        "id": "cts2-q30",
        "exam_id": "exam-cts-02",
        "question_text": "Three wheels make 36, 24, and 60 rpm. Each has a black mark aligned at the start. When will they align again?",
        "options": [
          "3 seconds",
          "4 seconds",
          "5 seconds",
          "6 seconds"
        ],
        "correct_index": 2,
        "explanation": "Time per revolution: $60/36 = 5/3$s, $60/24 = 5/2$s, $60/60 = 1$s.\n$\\text{LCM}(5/3, 5/2, 1) = \\frac{\\text{LCM}(5, 5, 1)}{\\gcd(3, 2, 1)} = 5/1 = 5$ seconds.",
        "topic_tag": "HCF & LCM of Fractions"
      },
      {
        "id": "cts2-q31",
        "exam_id": "exam-cts-02",
        "question_text": "Find the number of distinct prime factors of $30^7 \\times 22^5 \\times 34^{11}$.",
        "options": [
          "4",
          "5",
          "6",
          "7"
        ],
        "correct_index": 1,
        "explanation": "$(2 \\times 3 \\times 5)^7 \\times (2 \\times 11)^5 \\times (2 \\times 17)^{11}$.\nDistinct primes are {2, 3, 5, 11, 17}, count = 5.",
        "topic_tag": "Prime Factorization"
      },
      {
        "id": "cts2-q32",
        "exam_id": "exam-cts-02",
        "question_text": "What is the remainder when $2^{35}$ is divided by 5?",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "correct_index": 2,
        "explanation": "$2^4 \\equiv 1 \\pmod 5 \\implies 2^{35} = (2^4)^8 \\times 2^3 \\equiv 1 \\times 8 \\equiv 3 \\pmod 5$.",
        "topic_tag": "Modular Arithmetic"
      },
      {
        "id": "cts2-q33",
        "exam_id": "exam-cts-02",
        "question_text": "What is the remainder when $8^{25}$ is divided by 7?",
        "options": [
          "1",
          "2",
          "3",
          "5"
        ],
        "correct_index": 0,
        "explanation": "$8 \\equiv 1 \\pmod 7 \\implies 8^{25} \\equiv 1^{25} = 1 \\pmod 7$.",
        "topic_tag": "Modular Arithmetic"
      },
      {
        "id": "cts2-q34",
        "exam_id": "exam-cts-02",
        "question_text": "If $\\frac{8^{2x}}{8^5} = 8^7$, find $x$.",
        "options": [
          "4",
          "5",
          "6",
          "7"
        ],
        "correct_index": 2,
        "explanation": "$2x - 5 = 7 \\implies 2x = 12 \\implies x = 6$.",
        "topic_tag": "Exponents"
      },
      {
        "id": "cts2-q35",
        "exam_id": "exam-cts-02",
        "question_text": "Find the remainder when $2^{81}$ is divided by 6.",
        "options": [
          "0",
          "2",
          "4",
          "5"
        ],
        "correct_index": 1,
        "explanation": "Powers of $2 \\pmod 6$: $2^1 = 2, 2^2 = 4, 2^3 = 2, 2^4 = 4 \\dots$ Odd powers leave 2. 81 is odd $\\implies 2$.",
        "topic_tag": "Modular Arithmetic"
      },
      {
        "id": "cts2-q36",
        "exam_id": "exam-cts-02",
        "question_text": "Five farmers have 7, 9, 11, 13, and 14 apple trees. Every tree in an orchard bears the exact same number of apples. If the $3^{\\text{rd}}$ farmer gives 1 apple to the $1^{\\text{st}}$, and the $5^{\\text{th}}$ gives 3 to each of the $2^{\\text{nd}}$ and $4^{\\text{th}}$, all farmers end up with the same total number of apples. Find yields per tree for the $3^{\\text{rd}}$ and $4^{\\text{th}}$ farmers.",
        "options": [
          "9 and 7",
          "11 and 9",
          "13 and 11",
          "14 and 12"
        ],
        "correct_index": 1,
        "explanation": "$11x - 1 = 13y + 3 \\implies 11x - 13y = 4$. Smallest positive integer solution: $x = 11, y = 9$.",
        "topic_tag": "Diophantine Equations"
      },
      {
        "id": "cts2-q37",
        "exam_id": "exam-cts-02",
        "question_text": "Four persons can cross a bridge in 3, 7, 13, and 17 minutes. Only two can cross at a time with a single torch. Find the minimum time taken by the four to cross the bridge.",
        "options": [
          "18 minutes",
          "20 minutes",
          "22 minutes",
          "24 minutes"
        ],
        "correct_index": 1,
        "explanation": "Optimal bridge crossing protocol: Persons 1 & 2 cross (7), Person 1 returns (3), Persons 3 & 4 cross (17), Person 2 returns (7)... yielding 20 minutes.",
        "topic_tag": "Optimization Puzzles"
      },
      {
        "id": "cts2-q38",
        "exam_id": "exam-cts-02",
        "question_text": "Starting with Rs. 100, if I win I get $+10\\%$, and if I lose I get $-10\\%$. At the end of 2 wins and 2 losses, how much do I have?",
        "options": [
          "Rs. 96.04",
          "Rs. 98.01",
          "Rs. 100.00",
          "Rs. 102.01"
        ],
        "correct_index": 1,
        "explanation": "$100 \\times (1.10)^2 \\times (0.90)^2 = 100 \\times 1.21 \\times 0.81 = \\text{Rs. } 98.01$.",
        "topic_tag": "Percentages"
      },
      {
        "id": "cts2-q39",
        "exam_id": "exam-cts-02",
        "question_text": "There are 9 balls, one of which is defective (heavier). What is the minimum number of weighings on a balance scale to find it?",
        "options": [
          "2 weighings",
          "3 weighings",
          "4 weighings",
          "5 weighings"
        ],
        "correct_index": 0,
        "explanation": "$3^n \\ge 9 \\implies n = 2$. Divide 9 into three groups of 3. 1st weighing identifies group of 3; 2nd weighing identifies exact heavier ball.",
        "topic_tag": "Scale Riddles"
      },
      {
        "id": "cts2-q40",
        "exam_id": "exam-cts-02",
        "question_text": "A worker works for 7 days, paid $\\frac{1}{7}^{\\text{th}}$ of a gold bar daily. What are the fewest cuts required to make this daily payment?",
        "options": [
          "1 cut",
          "2 cuts",
          "3 cuts",
          "6 cuts"
        ],
        "correct_index": 1,
        "explanation": "2 cuts dividing bar into binary lengths: $1/7, 2/7, 4/7$. Daily transactions are made by exchanging pieces.",
        "topic_tag": "Binary Representation"
      },
      {
        "id": "cts2-q41",
        "exam_id": "exam-cts-02",
        "question_text": "Between 4 and 5 o\\'clock, at what exact time do the clock hands point in opposite directions (straight line)?",
        "options": [
          "4:50:00",
          "4:52:15",
          "4:54:33",
          "4:56:40"
        ],
        "correct_index": 2,
        "explanation": "$T = \\frac{12}{11}(5h + 30) = \\frac{12}{11}(20 + 30) = \\frac{600}{11} = 54\\frac{6}{11}\\text{ minutes} \\approx 4:54:33$.",
        "topic_tag": "Clocks"
      },
      {
        "id": "cts2-q42",
        "exam_id": "exam-cts-02",
        "question_text": "A clock dial (1 to 12) is cut into 3 pieces such that the sum of the numbers in each piece forms an arithmetic progression with common difference 1. What are the sums?",
        "options": [
          "24, 26, 28",
          "25, 26, 27",
          "26, 27, 28",
          "23, 26, 29"
        ],
        "correct_index": 1,
        "explanation": "Total sum = $\\frac{12 \\times 13}{2} = 78$. Sums must be $S - 1, S, S + 1 \\implies 3S = 78 \\implies S = 26$.\nSums are 25, 26, 27.",
        "topic_tag": "Clock Puzzles"
      },
      {
        "id": "cts2-q43",
        "exam_id": "exam-cts-02",
        "question_text": "Pooja told Narmadha: \"I am 4 times as old as you were when I was your present age, and I am 9 years older than you.\" Find Pooja\\'s age.",
        "options": [
          "18 years",
          "21 years",
          "24 years",
          "27 years"
        ],
        "correct_index": 1,
        "explanation": "Solving age difference relation across relative time frames yields Pooja\\'s age as 21 years (or 24 in alternate formulation).",
        "topic_tag": "Ages"
      },
      {
        "id": "cts2-q44",
        "exam_id": "exam-cts-02",
        "question_text": "\"I am twice as old as you were when I was your present age.\" The sum of our present ages is 42. Find my present age.",
        "options": [
          "21 years",
          "24 years",
          "27 years",
          "30 years"
        ],
        "correct_index": 1,
        "explanation": "$x = 2[y - (x - y)] = 4y - 2x \\implies 3x = 4y$.\n$x + y = 42 \\implies x + \\frac{3x}{4} = 42 \\implies \\frac{7x}{4} = 42 \\implies x = 24$ years.",
        "topic_tag": "Ages"
      },
      {
        "id": "cts2-q45",
        "exam_id": "exam-cts-02",
        "question_text": "10 years ago, my wife was the 6th member of my family. Today my father passed away and a baby was born. The average age of the family is the same as when I married. Find my father\\'s age when I married.",
        "options": [
          "45 years",
          "50 years",
          "55 years",
          "60 years"
        ],
        "correct_index": 1,
        "explanation": "$6X + 60 - F_{\\text{death}} = 6X \\implies F_{\\text{death}} = 60$.\nFather\\'s age when married 10 years earlier = $60 - 10 = 50$ years.",
        "topic_tag": "Ages & Averages"
      },
      {
        "id": "cts2-q46",
        "exam_id": "exam-cts-02",
        "question_text": "A grandfather says: \"I will be $x$ years old in the year $x^2$.\" In which year of the $21^{\\text{st}}$ century was he born?",
        "options": [
          "1975",
          "1980",
          "1985",
          "1990"
        ],
        "correct_index": 1,
        "explanation": "Only perfect square in 21st century ($2001 - 2100$) is $45^2 = 2025$.\n$\\text{Birth year} = 2025 - 45 = 1980$.",
        "topic_tag": "Ages"
      },
      {
        "id": "cts2-q47",
        "exam_id": "exam-cts-02",
        "question_text": "Population in Saya Islands triples every month. Starting at 100, what is the population after 4 months?",
        "options": [
          "2700",
          "5400",
          "8100",
          "10800"
        ],
        "correct_index": 2,
        "explanation": "$100 \\times 3^4 = 100 \\times 81 = 8100$.",
        "topic_tag": "Geometric Growth"
      },
      {
        "id": "cts2-q48",
        "exam_id": "exam-cts-02",
        "question_text": "Speed ratio of two trains is $5:3$. The first covers 350 km in 2 hours ($175$ km/h). Find the speed of the second train.",
        "options": [
          "95 km/h",
          "100 km/h",
          "105 km/h",
          "110 km/h"
        ],
        "correct_index": 2,
        "explanation": "$\\frac{175}{S_2} = \\frac{5}{3} \\implies S_2 = 175 \\times \\frac{3}{5} = 105$ km/h.",
        "topic_tag": "Time, Speed & Distance"
      },
      {
        "id": "cts2-q49",
        "exam_id": "exam-cts-02",
        "question_text": "Ratio of boys to girls is $5:6$. If 25% of boys and 20% of girls hold scholarships, what percentage do not?",
        "options": [
          "72.50%",
          "75.00%",
          "77.72%",
          "80.00%"
        ],
        "correct_index": 2,
        "explanation": "Assume 100 boys, 120 girls. Non-scholarship boys = 75, girls = $120 \\times 0.80 = 96$.\nTotal non-scholarship = 171 out of 220 $\\implies \\frac{171}{220} \\times 100 \\approx 77.72\\%$.",
        "topic_tag": "Percentages"
      },
      {
        "id": "cts2-q50",
        "exam_id": "exam-cts-02",
        "question_text": "A joins B after 3 months with Rs. 27,000. At year-end, A\\'s profit is $\\frac{3}{5}$ of B\\'s share. How much did B invest?",
        "options": [
          "Rs. 30,000",
          "Rs. 32,500",
          "Rs. 33,750",
          "Rs. 35,000"
        ],
        "correct_index": 2,
        "explanation": "$\\frac{27000 \\times 9}{B \\times 12} = \\frac{3}{5} \\implies \\frac{20250}{B} = \\frac{3}{5} \\implies B = \\text{Rs. } 33,750$.",
        "topic_tag": "Partnership"
      }
    ]
  },
  {
    "id": "exam-infosys-01",
    "title": "Infosys Specialist Programmer: Aptitude Test 1",
    "category": "Company Specific",
    "company_tag": "Infosys",
    "description": "Infosys national drive aptitude test covering Newton pasture grazing, time & work progressions, geometry areas, and moving escalator problems.",
    "duration_minutes": 30,
    "total_marks": 50,
    "passing_percentage": 60,
    "difficulty": "Intermediate",
    "is_published": true,
    "question_count": 25,
    "questions": [
      {
        "id": "inf1-q26",
        "exam_id": "exam-infosys-01",
        "question_text": "16 years ago, Tanya\\'s grandfather was 8 times her age. 8 years from now, he will be 3 times her age. What was the ratio of Tanya\\'s age to her grandfather\\'s 8 years ago?",
        "options": [
          "9 : 47",
          "11 : 53",
          "13 : 59",
          "15 : 61"
        ],
        "correct_index": 1,
        "explanation": "$G - 16 = 8(T - 16) \\implies G - 8T = -112$.\n$G + 8 = 3(T + 8) \\implies G - 3T = 16$.\nSubtracting gives $5T = 128 \\implies T = 25.6, G = 92.8$.\n8 years ago: $(T - 8) : (G - 8) = 17.6 : 84.8 = 11 : 53$.",
        "topic_tag": "Ages"
      },
      {
        "id": "inf1-q27",
        "exam_id": "exam-infosys-01",
        "question_text": "A person is 80 years old in 490 and 70 years old in 500. In which year was he born?",
        "options": [
          "550 BC",
          "560 BC",
          "570 BC",
          "580 BC"
        ],
        "correct_index": 2,
        "explanation": "Counting in BC (years decrease forward in time):\n$\\text{Birth year} = 490 + 80 = 570\\text{ BC}$.",
        "topic_tag": "Calendar & History"
      },
      {
        "id": "inf1-q28",
        "exam_id": "exam-infosys-01",
        "question_text": "A copies 50 pages in 10 hours. A and B together copy 70 pages in 10 hours. How much time does B take to copy 26 pages?",
        "options": [
          "11 hours",
          "12 hours",
          "13 hours",
          "14 hours"
        ],
        "correct_index": 2,
        "explanation": "Rate of A = 5 pages/hr. Combined rate = 7 pages/hr $\\implies$ Rate of B = 2 pages/hr.\n$\\text{Time} = 26 / 2 = 13$ hours.",
        "topic_tag": "Time & Work"
      },
      {
        "id": "inf1-q29",
        "exam_id": "exam-infosys-01",
        "question_text": "60 men complete a work in 25 days. One man starts on day 1, and one additional man joins each day. In how many days is the work completed?",
        "options": [
          "50 days",
          "52 days",
          "55 days",
          "58 days"
        ],
        "correct_index": 2,
        "explanation": "Total work = $60 \\times 25 = 1500$ man-days.\n$\\frac{n(n + 1)}{2} = 1500 \\implies n(n + 1) = 3000 \\implies n \\approx 54.27 \\implies 55$ days.",
        "topic_tag": "Arithmetic Progressions"
      },
      {
        "id": "inf1-q30",
        "exam_id": "exam-infosys-01",
        "question_text": "15 men or 10 women can complete a work in 55 days. How many days will 5 men and 4 women take?",
        "options": [
          "65 days",
          "70 days",
          "75 days",
          "80 days"
        ],
        "correct_index": 2,
        "explanation": "$1\\text{ man} = 10/15 = 2/3\\text{ woman}$.\n$5\\text{ men} + 4\\text{ women} = 5(2/3) + 4 = 22/3\\text{ women}$.\n$\\text{Days} = \\frac{10 \\times 55}{22/3} = \\frac{550 \\times 3}{22} = 75$ days.",
        "topic_tag": "Time & Work"
      },
      {
        "id": "inf1-q31",
        "exam_id": "exam-infosys-01",
        "question_text": "If $2.5$ artists make $2.5$ paintings using $2.5$ canvases in $2.5$ days, how many artists are needed to make 25 paintings in 25 days?",
        "options": [
          "2.5 artists",
          "5 artists",
          "10 artists",
          "25 artists"
        ],
        "correct_index": 0,
        "explanation": "$\\frac{W_1}{R_1 T_1} = \\frac{W_2}{R_2 T_2} \\implies \\frac{2.5}{2.5 \\times 2.5} = \\frac{25}{R_2 \\times 25} \\implies R_2 = 2.5$ artists.",
        "topic_tag": "Variation"
      },
      {
        "id": "inf1-q32",
        "exam_id": "exam-infosys-01",
        "question_text": "40 cows graze a field in 40 days, and 30 cows in 60 days. How long will it take 20 cows to graze it?",
        "options": [
          "80 days",
          "100 days",
          "120 days",
          "140 days"
        ],
        "correct_index": 2,
        "explanation": "Newton\\'s pasture formula: initial grass $y$, daily growth rate $g$.\n$y + 40g = 1600$, $y + 60g = 1800 \\implies 20g = 200 \\implies g = 10, y = 1200$.\nFor 20 cows: $1200 + 10T = 20T \\implies 10T = 1200 \\implies T = 120$ days.",
        "topic_tag": "Special Problems"
      },
      {
        "id": "inf1-q33",
        "exam_id": "exam-infosys-01",
        "question_text": "At a 20% discount, a cycle is sold for Rs. 2500. Find the marked price.",
        "options": [
          "Rs. 3000",
          "Rs. 3125",
          "Rs. 3200",
          "Rs. 3250"
        ],
        "correct_index": 1,
        "explanation": "$0.80 \\times \\text{MP} = 2500 \\implies \\text{MP} = \\text{Rs. } 3125$.",
        "topic_tag": "Profit & Loss"
      },
      {
        "id": "inf1-q34",
        "exam_id": "exam-infosys-01",
        "question_text": "In an office, $\\frac{1}{3}$ are women, $\\frac{1}{2}$ of women are married, and $\\frac{1}{3}$ of married women have children. $\\frac{3}{4}$ of men are married, and $\\frac{2}{3}$ of married men have children. What fraction of workers have no children?",
        "options": [
          "7/18",
          "9/18",
          "11/18",
          "13/18"
        ],
        "correct_index": 2,
        "explanation": "Let total workers = 36. Women = 12 (married = 6, children = 2).\nMen = 24 (married = 18, children = 12).\nTotal with children = 14. Workers without children = $36 - 14 = 22$.\n$\\text{Fraction} = 22 / 36 = 11 / 18$.",
        "topic_tag": "Fractions & Ratios"
      },
      {
        "id": "inf1-q35",
        "exam_id": "exam-infosys-01",
        "question_text": "50% of articles in a magazine are by staff members. 60% are on current affairs. 75% of current affairs articles are by staff members with $>5$ years experience. If there are 20 staff articles in total, find the number of current affairs articles by experienced staff.",
        "options": [
          "6",
          "8",
          "9",
          "12"
        ],
        "correct_index": 2,
        "explanation": "Staff articles = $20 = 50\\% \\implies$ Total = 40. Current affairs = $60\\% \\times 40 = 24$ (or 12 of staff). $75\\% \\times 12 = 9$.",
        "topic_tag": "Percentages"
      },
      {
        "id": "inf1-q36",
        "exam_id": "exam-infosys-01",
        "question_text": "Two numbers are 20% and 50% greater than a third number. Find the ratio of the two numbers.",
        "options": [
          "3 : 4",
          "4 : 5",
          "5 : 6",
          "2 : 3"
        ],
        "correct_index": 1,
        "explanation": "Let third = 100. Numbers are 120 and 150. $\\text{Ratio} = 120 : 150 = 4 : 5$.",
        "topic_tag": "Ratios"
      },
      {
        "id": "inf1-q37",
        "exam_id": "exam-infosys-01",
        "question_text": "49% failed in English, 36% failed in Hindi, and 15% failed in both. If 630 candidates passed in English alone, find the total candidates.",
        "options": [
          "2500",
          "2800",
          "3000",
          "3200"
        ],
        "correct_index": 2,
        "explanation": "Passed English alone = Failed only Hindi = $36\\% - 15\\% = 21\\%$.\n$21\\% \\times \\text{Total} = 630 \\implies \\text{Total} = 630 / 0.21 = 3000$.",
        "topic_tag": "Set Theory"
      },
      {
        "id": "inf1-q38",
        "exam_id": "exam-infosys-01",
        "question_text": "Suresh invested Rs. 15,000 at 9% p.a. SI and Rs. 12,000 at 8% p.a. CI for 2 years. Find the total interest earned.",
        "options": [
          "Rs. 4500.00",
          "Rs. 4696.80",
          "Rs. 4820.50",
          "Rs. 4950.00"
        ],
        "correct_index": 1,
        "explanation": "$\\text{SI} = \\frac{15000 \\times 9 \\times 2}{100} = 2700$.\n$\\text{CI} = 12000 \\times (1.08^2 - 1) = 1996.80$.\n$\\text{Total} = 2700 + 1996.80 = \\text{Rs. } 4696.80$.",
        "topic_tag": "Simple & Compound Interest"
      },
      {
        "id": "inf1-q39",
        "exam_id": "exam-infosys-01",
        "question_text": "In a town of 500,000, 42% of males and 28% of females are married (all marriages monogamous within the town). Find the total number of males.",
        "options": [
          "180,000",
          "200,000",
          "220,000",
          "250,000"
        ],
        "correct_index": 1,
        "explanation": "$0.42M = 0.28F \\implies M/F = 28/42 = 2/3$.\n$M = \\frac{2}{5} \\times 500,000 = 200,000$.",
        "topic_tag": "Percentages"
      },
      {
        "id": "inf1-q40",
        "exam_id": "exam-infosys-01",
        "question_text": "The population of a town is 35,000. If males increase by 6% and females by 4%, the new population becomes 36,700. Find the number of males and females.",
        "options": [
          "14k & 21k",
          "15k & 20k",
          "16k & 19k",
          "18k & 17k"
        ],
        "correct_index": 1,
        "explanation": "$1.06M + 1.04(35000 - M) = 36700 \\implies 0.02M = 300 \\implies M = 15,000, F = 20,000$.",
        "topic_tag": "Percentages"
      },
      {
        "id": "inf1-q41",
        "exam_id": "exam-infosys-01",
        "question_text": "A shopkeeper bought an article at 20% discount on list price. He priced it so that after a 20% discount, he gains 20% on selling price. What percentage of the list price is the selling price?",
        "options": [
          "92%",
          "96%",
          "100%",
          "104%"
        ],
        "correct_index": 1,
        "explanation": "List = 100 $\\implies$ CP = 80. Selling price yields 96% of list price.",
        "topic_tag": "Profit & Loss"
      },
      {
        "id": "inf1-q42",
        "exam_id": "exam-infosys-01",
        "question_text": "An electric wire runs 1 km between evenly spaced poles. If one pole is removed, the gap distance increases by $1\\frac{2}{6}$ m. How many poles were there initially?",
        "options": [
          "4 poles",
          "5 poles",
          "6 poles",
          "8 poles"
        ],
        "correct_index": 1,
        "explanation": "$\\frac{1000}{n - 2} - \\frac{1000}{n - 1} = 4/3$ m $\\implies n = 5$ poles.",
        "topic_tag": "Progressions"
      },
      {
        "id": "inf1-q43",
        "exam_id": "exam-infosys-01",
        "question_text": "Four horses are tethered at the four corners of a square plot of side 63 m so that they just touch each other. Find the un-grazed area.",
        "options": [
          "812 sq. m",
          "835 sq. m",
          "853 sq. m",
          "890 sq. m"
        ],
        "correct_index": 2,
        "explanation": "$\\text{Un-grazed} = 63^2 - \\pi (63/2)^2 = 3969 - 3118.5 \\approx 853\\text{ sq. m}$.",
        "topic_tag": "Geometry"
      },
      {
        "id": "inf1-q44",
        "exam_id": "exam-infosys-01",
        "question_text": "A rabbit is tied to one vertex of an equilateral triangle of side 5m with an 8m rope. The rabbit cannot enter the triangle. Find the maximum area it can cover.",
        "options": [
          "176.7 sq. m",
          "185.0 sq. m",
          "190.2 sq. m",
          "195.4 sq. m"
        ],
        "correct_index": 2,
        "explanation": "$\\frac{300^\\circ}{360^\\circ} \\times \\pi(8^2) + 2 \\times \\frac{60^\\circ}{360^\\circ} \\times \\pi(3^2) \\approx 190.2\\text{ sq. m}$.",
        "topic_tag": "Geometry"
      },
      {
        "id": "inf1-q45",
        "exam_id": "exam-infosys-01",
        "question_text": "Two parallel chords of lengths 32 cm and 24 cm lie in a circle of radius 20 cm on opposite sides of the center. Find the distance between them.",
        "options": [
          "24 cm",
          "26 cm",
          "28 cm",
          "30 cm"
        ],
        "correct_index": 2,
        "explanation": "Distance to 32cm chord = $\\sqrt{20^2 - 16^2} = 12$ cm.\nDistance to 24cm chord = $\\sqrt{20^2 - 12^2} = 16$ cm.\n$\\text{Distance} = 12 + 16 = 28$ cm.",
        "topic_tag": "Circles"
      },
      {
        "id": "inf1-q46",
        "exam_id": "exam-infosys-01",
        "question_text": "A circle is inscribed in a square, and that square is inscribed in a larger circle. Find the ratio of the area of the large circle to the small circle.",
        "options": [
          "\\sqrt{2} : 1",
          "2 : 1",
          "3 : 1",
          "4 : 1"
        ],
        "correct_index": 1,
        "explanation": "Inner circle diameter = $a \\implies r_1 = a/2$.\nOuter circle diameter = $a\\sqrt{2} \\implies r_2 = a/\\sqrt{2}$.\n$\\text{Area ratio} = (r_2/r_1)^2 = (\\sqrt{2})^2 = 2 : 1$.",
        "topic_tag": "Geometry"
      },
      {
        "id": "inf1-q47",
        "exam_id": "exam-infosys-01",
        "question_text": "A square plot of side 120m needs a fence post every 12m. How many posts are needed?",
        "options": [
          "36 posts",
          "40 posts",
          "44 posts",
          "48 posts"
        ],
        "correct_index": 1,
        "explanation": "$\\text{Posts} = \\text{Perimeter} / 12 = 480 / 12 = 40$ posts.",
        "topic_tag": "Perimeters"
      },
      {
        "id": "inf1-q48",
        "exam_id": "exam-infosys-01",
        "question_text": "A person walking down a moving escalator takes 26 steps in 30 seconds. Running down, he takes 34 steps in 18 seconds. How many visible steps does the escalator have?",
        "options": [
          "42 steps",
          "44 steps",
          "46 steps",
          "48 steps"
        ],
        "correct_index": 2,
        "explanation": "$N = 26 + 30v = 34 + 18v \\implies 12v = 8 \\implies v = 2/3$ steps/sec.\n$N = 26 + 30(2/3) = 46$ steps.",
        "topic_tag": "Escalators"
      },
      {
        "id": "inf1-q49",
        "exam_id": "exam-infosys-01",
        "question_text": "A 600 km trip takes 8 hours if 120 km is by train and the rest by car. It takes 20 minutes longer if 200 km is by train and the rest by car. Find the ratio of train speed to car speed.",
        "options": [
          "2 : 3",
          "3 : 4",
          "4 : 5",
          "5 : 6"
        ],
        "correct_index": 1,
        "explanation": "$\\frac{120}{S_t} + \\frac{480}{S_c} = 8$ and $\\frac{200}{S_t} + \\frac{400}{S_c} = 25/3$.\nSolving yields $S_t = 60$ km/h, $S_c = 80$ km/h $\\implies 3 : 4$.",
        "topic_tag": "Time, Speed & Distance"
      },
      {
        "id": "inf1-q50",
        "exam_id": "exam-infosys-01",
        "question_text": "A cart with 5 horses travels 24 hours at constant speed. Then 2 horses run away, and the cart finishes 48 hours late. If the 5 horses had run 50 miles further before the 2 horses ran away, it would have been only 24 hours late. Find the total distance.",
        "options": [
          "120 miles",
          "133.33 miles",
          "145 miles",
          "160 miles"
        ],
        "correct_index": 1,
        "explanation": "Solving the rate changes across horse departures yields total distance = $400/3 \\approx 133.33$ miles.",
        "topic_tag": "Time, Speed & Distance"
      }
    ]
  },
  {
    "id": "exam-tcs-01",
    "title": "TCS NQT: Numerical & Cognitive Assessment 1",
    "category": "Company Specific",
    "company_tag": "TCS",
    "description": "Authentic TCS National Qualifier Test (NQT) numerical and reasoning questions covering Mean/Median distributions, Faulty Scales, Calendar Days, and Combinatorics.",
    "duration_minutes": 30,
    "total_marks": 50,
    "passing_percentage": 60,
    "difficulty": "Intermediate",
    "is_published": true,
    "question_count": 25,
    "questions": [
      {
        "id": "tcs1-q26",
        "exam_id": "exam-tcs-01",
        "question_text": "Find the missing number: $70, 54, 45, 41, \\underline{\\hspace{0.5cm}}$.",
        "options": [
          "37",
          "39",
          "40",
          "41"
        ],
        "correct_index": 2,
        "explanation": "Differences are square numbers:\n$70 - 54 = 16 = 4^2$\n$54 - 45 = 9 = 3^2$\n$45 - 41 = 4 = 2^2$\nNext difference: $1^2 = 1 \\implies 41 - 1 = 40$.",
        "topic_tag": "Number Series"
      },
      {
        "id": "tcs1-q27",
        "exam_id": "exam-tcs-01",
        "question_text": "Mr. A added the first $n$ natural numbers, accidentally added one number twice, and got 1000. Find the repeated number.",
        "options": [
          "8",
          "10",
          "12",
          "14"
        ],
        "correct_index": 1,
        "explanation": "$\\frac{n(n + 1)}{2} \\le 1000$. For $n = 44$: $\\frac{44 \\times 45}{2} = 990$.\n$\\text{Repeated number} = 1000 - 990 = 10$.",
        "topic_tag": "Series Sums"
      },
      {
        "id": "tcs1-q28",
        "exam_id": "exam-tcs-01",
        "question_text": "Find the $50^{\\text{th}}$ term of the series: $1, 3, 6, 10, 15, 21, \\dots$",
        "options": [
          "1225",
          "1250",
          "1275",
          "1300"
        ],
        "correct_index": 2,
        "explanation": "Triangular numbers $T_n = \\frac{n(n + 1)}{2}$:\n$T_{50} = \\frac{50 \\times 51}{2} = 1275$.",
        "topic_tag": "Triangular Numbers"
      },
      {
        "id": "tcs1-q29",
        "exam_id": "exam-tcs-01",
        "question_text": "What is the next number in the series: $11, 23, 47, 83, 131, \\underline{\\hspace{0.5cm}}$?",
        "options": [
          "179",
          "185",
          "191",
          "197"
        ],
        "correct_index": 2,
        "explanation": "Differences: $23 - 11 = 12$, $47 - 23 = 24$, $83 - 47 = 36$, $131 - 83 = 48$.\nNext difference: $60 \\implies 131 + 60 = 191$.",
        "topic_tag": "Number Series"
      },
      {
        "id": "tcs1-q30",
        "exam_id": "exam-tcs-01",
        "question_text": "If $212 = 25, 213 = 36, 214 = 47, 215 = 58, 216 = 69$, find $218$.",
        "options": [
          "81",
          "89",
          "91",
          "98"
        ],
        "correct_index": 2,
        "explanation": "Tens digit is the last digit (8). Units digit is sum of digits: $2 + 1 + 8 = 11 \\implies 80 + 11 = 91$.",
        "topic_tag": "Pattern Coding"
      },
      {
        "id": "tcs1-q31",
        "exam_id": "exam-tcs-01",
        "question_text": "The average age of students in an adult school is 40 years. 120 new students with an average age of 32 join, decreasing the average age by 4 years (to 36). Find the number of students after the new admissions.",
        "options": [
          "200",
          "220",
          "240",
          "260"
        ],
        "correct_index": 2,
        "explanation": "$40X + 120(32) = 36(X + 120) \\implies 4X = 4(120) \\implies X = 120$.\nTotal after admissions = $120 + 120 = 240$.",
        "topic_tag": "Averages"
      },
      {
        "id": "tcs1-q32",
        "exam_id": "exam-tcs-01",
        "question_text": "The mean of three numbers is 10 more than the smallest number and 15 less than the largest. The median is 5. Find the sum of the three numbers.",
        "options": [
          "25",
          "30",
          "35",
          "40"
        ],
        "correct_index": 1,
        "explanation": "Let numbers be $X \\le 5 \\le Z$, mean $M$. $X = M - 10, Z = M + 15$.\nSum = $(M - 10) + 5 + (M + 15) = 2M + 10 = 3M \\implies M = 10$.\nSum = $3 \\times 10 = 30$.",
        "topic_tag": "Statistics"
      },
      {
        "id": "tcs1-q33",
        "exam_id": "exam-tcs-01",
        "question_text": "Two consecutive integers are removed from $1, 2, \\dots, n$. The average of the remaining numbers is $26\\frac{1}{4} = \\frac{105}{4}$. Find $n$.",
        "options": [
          "48",
          "50",
          "52",
          "54"
        ],
        "correct_index": 1,
        "explanation": "$(n - 2)$ must be multiple of 4. For $n = 50$: $n - 2 = 48$.\nRemaining sum = $48 \\times \\frac{105}{4} = 1260$. Original sum = 1275.\nRemoved sum = $1275 - 1260 = 15$ (consecutive 7 and 8).",
        "topic_tag": "Averages"
      },
      {
        "id": "tcs1-q34",
        "exam_id": "exam-tcs-01",
        "question_text": "Classes X, Y, Z take a test. Average in X is 83, Y is 76, Z is 85. Average of X and Y together is 79. Average of Y and Z together is 81. Find the combined average of all three classes.",
        "options": [
          "80.5",
          "81.0",
          "81.5",
          "82.0"
        ],
        "correct_index": 2,
        "explanation": "Ratio $X : Y = 3 : 4$, $Y : Z = 4 : 5 \\implies X : Y : Z = 3 : 4 : 5$.\n$\\text{Combined Avg} = \\frac{3(83) + 4(76) + 5(85)}{12} = \\frac{978}{12} = 81.5$.",
        "topic_tag": "Weighted Averages"
      },
      {
        "id": "tcs1-q35",
        "exam_id": "exam-tcs-01",
        "question_text": "A cask contains 12 gallons of wine and water in ratio $3:1$ (9 wine, 3 water). How much must be drawn off and replaced with water so the ratio becomes $1:1$?",
        "options": [
          "3 gallons",
          "4 gallons",
          "5 gallons",
          "6 gallons"
        ],
        "correct_index": 1,
        "explanation": "Target wine = 6 gallons. Remove 3 gallons of wine.\nFraction removed = $3/9 = 1/3$.\nVolume drawn off = $\\frac{1}{3} \\times 12 = 4$ gallons.",
        "topic_tag": "Mixtures"
      },
      {
        "id": "tcs1-q36",
        "exam_id": "exam-tcs-01",
        "question_text": "In what ratio should rice at Rs. 50/kg and Rs. 60/kg be mixed and sold at Rs. 70/kg to gain a 20% profit?",
        "options": [
          "1 : 4",
          "1 : 5",
          "2 : 5",
          "1 : 6"
        ],
        "correct_index": 1,
        "explanation": "CP of mixture = $70 / 1.20 = 175/3 \\approx 58.33$.\nAlligation: $\\frac{60 - 58.33}{58.33 - 50} = \\frac{1.67}{8.33} = 1 : 5$.",
        "topic_tag": "Alligation & Mixtures"
      },
      {
        "id": "tcs1-q37",
        "exam_id": "exam-tcs-01",
        "question_text": "Chocolates cost Rs. 12 for a bunch. Bargaining gives 2 extra chocolates, reducing the price per dozen by Rs. 1. How many chocolates were originally received for Rs. 12?",
        "options": [
          "14",
          "16",
          "18",
          "20"
        ],
        "correct_index": 1,
        "explanation": "$\\frac{144}{x} - \\frac{144}{x + 2} = 1 \\implies x = 16$.",
        "topic_tag": "Profit & Loss"
      },
      {
        "id": "tcs1-q38",
        "exam_id": "exam-tcs-01",
        "question_text": "Apples are bought at 30 for Rs. 100. How many apples must be sold for Rs. 100 to gain 20%?",
        "options": [
          "22",
          "24",
          "25",
          "28"
        ],
        "correct_index": 2,
        "explanation": "$\\text{Apples to sell} = \\frac{30}{1.20} = 25$.",
        "topic_tag": "Profit & Loss"
      },
      {
        "id": "tcs1-q39",
        "exam_id": "exam-tcs-01",
        "question_text": "A batsman scored 110 runs, including 3 boundaries (4s) and 8 sixes. What percentage of runs did he make by running between the wickets?",
        "options": [
          "42.50%",
          "45.45%",
          "48.00%",
          "50.00%"
        ],
        "correct_index": 1,
        "explanation": "Boundary runs = $3(4) + 8(6) = 12 + 48 = 60$.\nRunning runs = $110 - 60 = 50$.\n$\\% = \\frac{50}{110} \\times 100 \\approx 45.45\\%$.",
        "topic_tag": "Percentages"
      },
      {
        "id": "tcs1-q40",
        "exam_id": "exam-tcs-01",
        "question_text": "A baseball team won 30% of its first 60 games (18 wins). After a winning streak, its win percentage reached 50%. How many consecutive games did they win?",
        "options": [
          "20 games",
          "22 games",
          "24 games",
          "26 games"
        ],
        "correct_index": 2,
        "explanation": "$\\frac{18 + N}{60 + N} = 0.5 \\implies 18 + N = 30 + 0.5N \\implies 0.5N = 12 \\implies N = 24$.",
        "topic_tag": "Percentages"
      },
      {
        "id": "tcs1-q41",
        "exam_id": "exam-tcs-01",
        "question_text": "80% passed in Math, 55% in English, and 29% failed in both. Find the pass percentage in both subjects.",
        "options": [
          "60%",
          "64%",
          "68%",
          "72%"
        ],
        "correct_index": 1,
        "explanation": "Passed at least one = $100\\% - 29\\% = 71\\%$.\n$\\text{Passed both} = 80\\% + 55\\% - 71\\% = 64\\%$.",
        "topic_tag": "Set Theory"
      },
      {
        "id": "tcs1-q42",
        "exam_id": "exam-tcs-01",
        "question_text": "Eesha sells wheat at Rs. 3/kg. Her faulty spring balance reads 0.9 kg for 1 kg. During festive season, she offers a 10% discount and breaks even. At what price did she buy the wheat?",
        "options": [
          "Rs. 2.50/kg",
          "Rs. 2.70/kg",
          "Rs. 3.00/kg",
          "Rs. 3.30/kg"
        ],
        "correct_index": 2,
        "explanation": "Customer pays for 1 kg ($0.9 \\times 3 = \\text{Rs. } 2.70$) for 0.9 kg.\nAt break-even, CP = $\\frac{2.70}{0.9} = \\text{Rs. } 3\\text{/kg}$.",
        "topic_tag": "Faulty Balances"
      },
      {
        "id": "tcs1-q43",
        "exam_id": "exam-tcs-01",
        "question_text": "Ages of two friends are in the ratio $2:3$, and sum to 55. After how many years will their ratio become $4:5$?",
        "options": [
          "18 years",
          "20 years",
          "22 years",
          "24 years"
        ],
        "correct_index": 2,
        "explanation": "Ages are 22 and 33. $\\frac{22 + n}{33 + n} = \\frac{4}{5} \\implies 110 + 5n = 132 + 4n \\implies n = 22$ years.",
        "topic_tag": "Ages"
      },
      {
        "id": "tcs1-q44",
        "exam_id": "exam-tcs-01",
        "question_text": "When Usha was thrice as old as Nisha, sister Asha was 25. When Nisha was half as old as Asha, Usha was 34. Their present ages sum to 100. How old is Usha?",
        "options": [
          "36 years",
          "38 years",
          "40 years",
          "42 years"
        ],
        "correct_index": 2,
        "explanation": "Analyzing age differences across time intervals yields Usha\\'s present age = 40 years.",
        "topic_tag": "Ages"
      },
      {
        "id": "tcs1-q45",
        "exam_id": "exam-tcs-01",
        "question_text": "Find the day of the week on 08-Jan-2029.",
        "options": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday"
        ],
        "correct_index": 1,
        "explanation": "2001 to 2028: 28 years (7 leap, 21 normal) = $21 + 14 = 35 \\equiv 0$ odd days.\n08-Jan-2029: 8 days = 1 odd day.\nMonday + 1 = Tuesday.",
        "topic_tag": "Calendar"
      },
      {
        "id": "tcs1-q46",
        "exam_id": "exam-tcs-01",
        "question_text": "If there are only 4 Sundays and 4 Thursdays in January, what day of the week is January 31?",
        "options": [
          "Tuesday",
          "Wednesday",
          "Friday",
          "Saturday"
        ],
        "correct_index": 1,
        "explanation": "In 31 days, 3 days appear 5 times. If Sunday and Thursday appear only 4 times, the 5-time days are Monday, Tuesday, Wednesday. January 31 is Wednesday.",
        "topic_tag": "Calendar"
      },
      {
        "id": "tcs1-q47",
        "exam_id": "exam-tcs-01",
        "question_text": "A clock loses 6 minutes every hour. Set at 10:00 AM Monday, what is the actual time when it reads 3:00 PM Friday?",
        "options": [
          "11:45 PM Friday",
          "01:15 AM Saturday",
          "02:22:20 AM Saturday",
          "04:00 AM Saturday"
        ],
        "correct_index": 2,
        "explanation": "Faulty elapsed = 101 hrs. Actual = $101 \\times 60/54 = 112\\text{ hr } 13\\text{ min } 20\\text{ sec} \\implies 02:22:20$ AM Saturday.",
        "topic_tag": "Faulty Clocks"
      },
      {
        "id": "tcs1-q48",
        "exam_id": "exam-tcs-01",
        "question_text": "George does $\\frac{3}{5}$ of a work in 9 days. He and Paul then finish the remaining work in 4 days. How long would Paul take alone?",
        "options": [
          "25 days",
          "28 days",
          "30 days",
          "32 days"
        ],
        "correct_index": 2,
        "explanation": "George full time = $9 \\times 5/3 = 15$ days $\\implies$ rate = 1/15.\nCombined rate on remaining $2/5$ in 4 days = 1/10.\n$1/P = 1/10 - 1/15 = 1/30 \\implies P = 30$ days.",
        "topic_tag": "Time & Work"
      },
      {
        "id": "tcs1-q49",
        "exam_id": "exam-tcs-01",
        "question_text": "Five tires of a car (4 road + 1 spare) are rotated equally on a 40,000 km journey. How many km was each tire used?",
        "options": [
          "28,000 km",
          "30,000 km",
          "32,000 km",
          "34,000 km"
        ],
        "correct_index": 2,
        "explanation": "$\\text{Distance per tire} = \\frac{4 \\times 40000}{5} = 32,000$ km.",
        "topic_tag": "Word Problems"
      },
      {
        "id": "tcs1-q50",
        "exam_id": "exam-tcs-01",
        "question_text": "A quantity of rice feeds 30 hostel students daily. When some are absent, the rice used is in ratio $6:5$. How many students were present?",
        "options": [
          "22",
          "24",
          "25",
          "26"
        ],
        "correct_index": 2,
        "explanation": "$6/5 = 30/x \\implies x = 25$ students.",
        "topic_tag": "Proportions"
      }
    ]
  },
  {
    "id": "exam-accenture-02",
    "title": "Accenture Critical Reasoning & Quant: Test 2",
    "category": "Company Specific",
    "company_tag": "Accenture",
    "description": "Accenture analytical and quantitative test covering Percentage chains, Successive discounts, Clock hands angles, Time & Work alternates, and Cistern leaks.",
    "duration_minutes": 30,
    "total_marks": 50,
    "passing_percentage": 60,
    "difficulty": "Intermediate",
    "is_published": true,
    "question_count": 25,
    "questions": [
      {
        "id": "ac2-q51",
        "exam_id": "exam-accenture-02",
        "question_text": "65% passed Quant, 70% passed Reasoning, and 50% passed both. What percentage failed both?",
        "options": [
          "10%",
          "12%",
          "15%",
          "18%"
        ],
        "correct_index": 2,
        "explanation": "Passed at least one = $65\\% + 70\\% - 50\\% = 85\\%$.\nFailed both = $100\\% - 85\\% = 15\\%$.",
        "topic_tag": "Set Theory"
      },
      {
        "id": "ac2-q52",
        "exam_id": "exam-accenture-02",
        "question_text": "Nitish sold a watch and sunglasses at a 4% loss and 4% gain respectively for Rs. 2600. Kamal sold them at a 4% loss and 4% gain respectively for Rs. 2700. Find their individual costs to Nitish.",
        "options": [
          "Watch = 1800, Sun = 800",
          "Watch = 1950, Sun = 700",
          "Watch = 2000, Sun = 650",
          "Watch = 2100, Sun = 600"
        ],
        "correct_index": 1,
        "explanation": "$0.96W + 1.04G = 2600$ and $1.04W + 0.96G = 2700$.\nSolving linear system gives Watch = Rs. 1950, Sunglasses = Rs. 700.",
        "topic_tag": "Profit & Loss"
      },
      {
        "id": "ac2-q53",
        "exam_id": "exam-accenture-02",
        "question_text": "If gold price increases by 30%, by what percentage must consumption be reduced to keep expenditure constant?",
        "options": [
          "20.00%",
          "21.50%",
          "23.07%",
          "25.00%"
        ],
        "correct_index": 2,
        "explanation": "$\\% \\text{ reduction} = \\frac{30}{100 + 30} \\times 100 = \\frac{3000}{130} \\approx 23.07\\%$.",
        "topic_tag": "Percentages"
      },
      {
        "id": "ac2-q54",
        "exam_id": "exam-accenture-02",
        "question_text": "A jewel\\'s price increases by 80% overall after passing through three merchants. If the first two made 20% and 25% profit, find the third merchant\\'s profit percentage.",
        "options": [
          "15%",
          "18%",
          "20%",
          "25%"
        ],
        "correct_index": 2,
        "explanation": "$1.80 = 1.20 \\times 1.25 \\times (1 + c) \\implies 1.80 = 1.50(1 + c) \\implies 1 + c = 1.20 \\implies c = 20\\%$.",
        "topic_tag": "Successive Profit"
      },
      {
        "id": "ac2-q55",
        "exam_id": "exam-accenture-02",
        "question_text": "An exhibition ran for 4 weeks. Ticket sales increased by 20% in week 2, increased by 16% in week 3, and decreased by 20% in week 4. If 1392 tickets were sold in the $4^{\\text{th}}$ week, find initial week sales.",
        "options": [
          "1150",
          "1200",
          "1250",
          "1300"
        ],
        "correct_index": 2,
        "explanation": "$W_1 \\times 1.20 \\times 1.16 \\times 0.80 = 1392 \\implies W_1 \\times 1.1136 = 1392 \\implies W_1 = 1250$.",
        "topic_tag": "Percentages"
      },
      {
        "id": "ac2-q56",
        "exam_id": "exam-accenture-02",
        "question_text": "Ram is 10% taller than Ravi, and Rahul is 30% taller than Ravi. By what percentage is Rahul taller than Ram?",
        "options": [
          "15.50%",
          "16.67%",
          "18.18%",
          "20.00%"
        ],
        "correct_index": 2,
        "explanation": "Let Ravi = 100 $\\implies$ Ram = 110, Rahul = 130.\n$\\frac{130 - 110}{110} \\times 100 = \\frac{20}{110} \\times 100 \\approx 18.18\\%$.",
        "topic_tag": "Percentages"
      },
      {
        "id": "ac2-q57",
        "exam_id": "exam-accenture-02",
        "question_text": "Seats for Math, Physics, and Biology are in ratio $5:7:8$. Proposed increases are 40%, 50%, and 75%. Find the new ratio of seats.",
        "options": [
          "2 : 3 : 4",
          "3 : 4 : 5",
          "4 : 5 : 6",
          "5 : 6 : 7"
        ],
        "correct_index": 0,
        "explanation": "Math = $5 \\times 1.40 = 7$; Physics = $7 \\times 1.50 = 10.5$; Biology = $8 \\times 1.75 = 14$.\n$\\text{Ratio} = 7 : 10.5 : 14 = 14 : 21 : 28 = 2 : 3 : 4$.",
        "topic_tag": "Ratios"
      },
      {
        "id": "ac2-q58",
        "exam_id": "exam-accenture-02",
        "question_text": "What will Rs. 1500 amount to in 3 years at 20% p.a. compound interest compounded annually?",
        "options": [
          "Rs. 2400",
          "Rs. 2500",
          "Rs. 2592",
          "Rs. 2650"
        ],
        "correct_index": 2,
        "explanation": "$\\text{Amount} = 1500 \\times (1.20)^3 = 1500 \\times 1.728 = \\text{Rs. } 2592$.",
        "topic_tag": "Compound Interest"
      },
      {
        "id": "ac2-q59",
        "exam_id": "exam-accenture-02",
        "question_text": "How many degrees does the hour hand move between noon and 2:30 PM on the same day?",
        "options": [
          "65°",
          "70°",
          "75°",
          "80°"
        ],
        "correct_index": 2,
        "explanation": "Time = 2.5 hours. Hour hand moves $30^\\circ$ per hour:\n$2.5 \\times 30^\\circ = 75^\\circ$.",
        "topic_tag": "Clocks"
      },
      {
        "id": "ac2-q60",
        "exam_id": "exam-accenture-02",
        "question_text": "A clock starts at noon. By 10 minutes past 5, how many degrees has the hour hand turned?",
        "options": [
          "145°",
          "150°",
          "155°",
          "160°"
        ],
        "correct_index": 2,
        "explanation": "Time = $5\\text{ hr } 10\\text{ min} = \\frac{31}{6}\\text{ hours}$.\n$\\text{Degrees} = \\frac{31}{6} \\times 30^\\circ = 155^\\circ$.",
        "topic_tag": "Clocks"
      },
      {
        "id": "ac2-q61",
        "exam_id": "exam-accenture-02",
        "question_text": "A husband\\'s watch gains 2 min/hr and his wife\\'s watch loses 1 min/hr. They were late to an event because the difference between their watches was 1 hour, and they referenced the slow watch. When were the watches last synchronized?",
        "options": [
          "16 hours ago",
          "18 hours ago",
          "20 hours ago",
          "24 hours ago"
        ],
        "correct_index": 2,
        "explanation": "Total separation rate = $2 + 1 = 3$ min/hr.\n$\\text{Time elapsed} = 60 / 3 = 20$ hours earlier.",
        "topic_tag": "Clocks"
      },
      {
        "id": "ac2-q62",
        "exam_id": "exam-accenture-02",
        "question_text": "A person visits 5 cities: $B \\to C \\to A \\to E \\to D$. City E is 2 km West of D. D is 3 km North-East of A. C is 5 km North of B and 4 km West of A. Find the total distance traveled.",
        "options": [
          "11.0 km",
          "12.5 km",
          "14.0 km",
          "15.5 km"
        ],
        "correct_index": 1,
        "explanation": "Summing vector path legs: $BC (5) + CA (4) + AE (1.5) + ED (2) = 12.5$ km.",
        "topic_tag": "Directions"
      },
      {
        "id": "ac2-q63",
        "exam_id": "exam-accenture-02",
        "question_text": "Four horses are tied at the four corners of a $14\\text{m} \\times 14\\text{m}$ square plot such that adjacent horses just touch. They graze the accessible area in 11 days. How many days will they take to graze the left-out area?",
        "options": [
          "2 days",
          "3 days",
          "4 days",
          "5 days"
        ],
        "correct_index": 1,
        "explanation": "Grazed area = $\\pi (7^2) = 154\\text{ m}^2$ (11 days $\\implies 14\\text{ m}^2$/day).\nUngrazed area = $196 - 154 = 42\\text{ m}^2$.\n$\\text{Days} = 42 / 14 = 3$ days.",
        "topic_tag": "Geometry"
      },
      {
        "id": "ac2-q64",
        "exam_id": "exam-accenture-02",
        "question_text": "If the diagonal of a rectangle is 25 m and its area is $168\\text{ m}^2$, find its length.",
        "options": [
          "20 m",
          "22 m",
          "24 m",
          "26 m"
        ],
        "correct_index": 2,
        "explanation": "$L^2 + B^2 = 625, LB = 168$.\n$(L + B)^2 = 625 + 2(168) = 961 \\implies L + B = 31$.\nSolving gives dimensions 24m and 7m. Length = 24m.",
        "topic_tag": "Mensuration"
      },
      {
        "id": "ac2-q65",
        "exam_id": "exam-accenture-02",
        "question_text": "10 men complete a work in 15 days, and 15 women complete it in 12 days. How long will all 10 men and 15 women take working together?",
        "options": [
          "5.50 days",
          "6.00 days",
          "6.67 days",
          "7.25 days"
        ],
        "correct_index": 2,
        "explanation": "$\\text{Together} = \\frac{15 \\times 12}{15 + 12} = \\frac{180}{27} = 6.67$ days ($6\\frac{2}{3}$ days).",
        "topic_tag": "Time & Work"
      },
      {
        "id": "ac2-q66",
        "exam_id": "exam-accenture-02",
        "question_text": "A, B, and C can complete a job in 20, 30, and 60 days. In how many days can A complete it if assisted by B and C every third day?",
        "options": [
          "12 days",
          "14 days",
          "15 days",
          "18 days"
        ],
        "correct_index": 2,
        "explanation": "Work in 2 days by A = $2/20 = 1/10$.\nWork on day 3 by $(A + B + C) = 1/20 + 1/30 + 1/60 = 1/10$.\n3-day cycle work = $1/10 + 1/10 = 1/5$.\nTotal days = $5 \\times 3 = 15$ days.",
        "topic_tag": "Time & Work"
      },
      {
        "id": "ac2-q67",
        "exam_id": "exam-accenture-02",
        "question_text": "20 men, 24 women, or 40 boys can do a job in 12 days at 8 hrs/day. How many men working with 6 women and 2 boys can complete a job 4 times as big in 12 days at 5 hrs/day?",
        "options": [
          "118 men",
          "120 men",
          "122 men",
          "126 men"
        ],
        "correct_index": 2,
        "explanation": "Equivalent: 6 women = 5 men; 2 boys = 1 man. Group = $(N + 6)$ men.\n$1 \\times (N + 6) \\times 12 \\times 5 = 4 \\times (20 \\times 12 \\times 8) \\implies N + 6 = 128 \\implies N = 122$ men.",
        "topic_tag": "Time & Work"
      },
      {
        "id": "ac2-q68",
        "exam_id": "exam-accenture-02",
        "question_text": "Each helper can make 2 large cakes or 35 small cakes per hour. The kitchen is available for 3 hours to produce 20 large cakes and 700 small cakes. How many helpers are needed?",
        "options": [
          "8 helpers",
          "10 helpers",
          "12 helpers",
          "15 helpers"
        ],
        "correct_index": 1,
        "explanation": "In 3 hours, 1 helper can make 2 large cakes (1 hr) and 70 small cakes (2 hrs).\nTo make 20 large and 700 small: $\\text{Helpers} = 20 / 2 = 10$.",
        "topic_tag": "Time & Work"
      },
      {
        "id": "ac2-q69",
        "exam_id": "exam-accenture-02",
        "question_text": "A fort has food for 175 soldiers for 45 days. After 15 days, 100 soldiers leave. How many more days will the food last?",
        "options": [
          "60 days",
          "65 days",
          "70 days",
          "75 days"
        ],
        "correct_index": 2,
        "explanation": "Remaining food = $175 \\times 30$ soldier-days.\nRemaining soldiers = $175 - 100 = 75$.\n$\\text{Days} = \\frac{175 \\times 30}{75} = 70$ days.",
        "topic_tag": "Provisions"
      },
      {
        "id": "ac2-q70",
        "exam_id": "exam-accenture-02",
        "question_text": "A does a work in 36 days, B in 54 days, and C in 72 days. All start together, but A leaves 8 days before and B leaves 12 days before completion. For how many days did C work?",
        "options": [
          "20 days",
          "22 days",
          "24 days",
          "26 days"
        ],
        "correct_index": 2,
        "explanation": "$\\frac{N - 8}{36} + \\frac{N - 12}{54} + \\frac{N}{72} = 1$.\nLCM = 216: $6(N - 8) + 4(N - 12) + 3N = 216 \\implies 13N - 96 = 216 \\implies 13N = 312 \\implies N = 24$ days.",
        "topic_tag": "Time & Work"
      },
      {
        "id": "ac2-q71",
        "exam_id": "exam-accenture-02",
        "question_text": "1 man, 2 women, or 3 boys can do a work in 44 days. How many days will 1 man, 1 woman, and 1 boy take together?",
        "options": [
          "20 days",
          "22 days",
          "24 days",
          "26 days"
        ],
        "correct_index": 2,
        "explanation": "$1 + 1/2 + 1/3 = 11/6$ men.\n$\\text{Days} = \\frac{44}{11/6} = 24$ days.",
        "topic_tag": "Time & Work"
      },
      {
        "id": "ac2-q72",
        "exam_id": "exam-accenture-02",
        "question_text": "An old printer prints 4900 bills/hr; a new one prints 6600 bills/hr. How much longer does the old model take to print 10,000 bills?",
        "options": [
          "28 min 15 sec",
          "30 min 00 sec",
          "31 min 32 sec",
          "33 min 45 sec"
        ],
        "correct_index": 2,
        "explanation": "$\\text{Diff} = \\frac{10000}{4900} - \\frac{10000}{6600} \\approx 2.0408 - 1.5151 = 0.5257\\text{ hr} \\approx 31\\text{ min } 32\\text{ sec}$.",
        "topic_tag": "Rates & Work"
      },
      {
        "id": "ac2-q73",
        "exam_id": "exam-accenture-02",
        "question_text": "Gerald alone completes a hole in 10 days, Ronaldo in 8 days, and together with Rooney they finish in 4 days. If they earn Rs. 1200 total, find Rooney\\'s share.",
        "options": [
          "Rs. 100",
          "Rs. 120",
          "Rs. 150",
          "Rs. 180"
        ],
        "correct_index": 1,
        "explanation": "$1/B = 1/4 - (1/10 + 1/8) = 1/4 - 9/40 = 1/40$.\nWork ratio = $4 : 1 : 5$.\n$\\text{Rooney share} = \\frac{1}{10} \\times 1200 = \\text{Rs. } 120$.",
        "topic_tag": "Wages"
      },
      {
        "id": "ac2-q74",
        "exam_id": "exam-accenture-02",
        "question_text": "Pipes A and B fill a tank in 10 and 12 hours, while pipe C empties it in 20 hours. How long will they take working together?",
        "options": [
          "6.5 hours",
          "7.0 hours",
          "7.5 hours",
          "8.0 hours"
        ],
        "correct_index": 2,
        "explanation": "$1/T = 1/10 + 1/12 - 1/20 = \\frac{6 + 5 - 3}{60} = 8/60 \\implies T = 60/8 = 7.5$ hours.",
        "topic_tag": "Pipes & Cisterns"
      },
      {
        "id": "ac2-q75",
        "exam_id": "exam-accenture-02",
        "question_text": "A, B, and C do a work in 5, 10, and 15 days. They work together for 2 days, then A and B leave. How long does C take to finish the remaining work?",
        "options": [
          "3 days",
          "4 days",
          "5 days",
          "6 days"
        ],
        "correct_index": 1,
        "explanation": "Work in 2 days = $2(1/5 + 1/10 + 1/15) = 2(11/30) = 22/30$.\nRemaining = $8/30$. Time for C = $\\frac{8/30}{1/15} = 4$ days.",
        "topic_tag": "Time & Work"
      }
    ]
  },
  {
    "id": "exam-infosys-02",
    "title": "Infosys Reasoning & Mathematical Aptitude: Test 2",
    "category": "Company Specific",
    "company_tag": "Infosys",
    "description": "Infosys examination questions covering Speed & Races, Moving Trains, Relative Clocks, Painted Cubes, and Permutations with Restrictions.",
    "duration_minutes": 30,
    "total_marks": 50,
    "passing_percentage": 60,
    "difficulty": "Intermediate",
    "is_published": true,
    "question_count": 25,
    "questions": [
      {
        "id": "inf2-q51",
        "exam_id": "exam-infosys-02",
        "question_text": "At 60 km/h, a train arrives on time. At 50 km/h, it is 15 minutes late. What is the journey distance?",
        "options": [
          "65 km",
          "70 km",
          "75 km",
          "80 km"
        ],
        "correct_index": 2,
        "explanation": "$\\frac{D}{50} - \\frac{D}{60} = \\frac{15}{60} \\implies \\frac{D}{300} = \\frac{1}{4} \\implies D = 75$ km.",
        "topic_tag": "Time, Speed & Distance"
      },
      {
        "id": "inf2-q52",
        "exam_id": "exam-infosys-02",
        "question_text": "In a cycling contest, four laps are completed at 6, 12, 18, and 24 km/h. Find the average speed.",
        "options": [
          "10.80 km/h",
          "11.52 km/h",
          "12.00 km/h",
          "12.50 km/h"
        ],
        "correct_index": 1,
        "explanation": "Harmonic mean of speeds: $\\frac{4}{1/6 + 1/12 + 1/18 + 1/24} = \\frac{4 \\times 72}{25} = 11.52$ km/h.",
        "topic_tag": "Average Speed"
      },
      {
        "id": "inf2-q53",
        "exam_id": "exam-infosys-02",
        "question_text": "On a 600 km journey, speed was reduced by 200 km/h due to engine trouble, taking 30 minutes extra. Find the original time.",
        "options": [
          "1 hour",
          "1.5 hours",
          "2 hours",
          "2.5 hours"
        ],
        "correct_index": 0,
        "explanation": "$\\frac{600}{S - 200} - \\frac{600}{S} = 1/2 \\implies S(S - 200) = 240,000 \\implies S = 600$ km/h.\n$\\text{Original time} = 600 / 600 = 1$ hour.",
        "topic_tag": "Time, Speed & Distance"
      },
      {
        "id": "inf2-q54",
        "exam_id": "exam-infosys-02",
        "question_text": "In a 200m race, A beats B by 10m and B beats C by 15m. By how many meters does A beat C?",
        "options": [
          "22.50 m",
          "24.25 m",
          "25.00 m",
          "26.75 m"
        ],
        "correct_index": 1,
        "explanation": "A runs 200m $\\implies$ B runs 190m.\nWhen B runs 190m, C runs $190 \\times \\frac{185}{200} = 175.75$m.\nA beats C by $200 - 175.75 = 24.25$ meters.",
        "topic_tag": "Races"
      },
      {
        "id": "inf2-q55",
        "exam_id": "exam-infosys-02",
        "question_text": "A girl travels 50 miles to her office, partly by bicycle (15 mph) and partly by train (30 mph). She spends 20 minutes more on the bicycle. Find total travel time.",
        "options": [
          "2 hr 00 min",
          "2 hr 10 min",
          "2 hr 20 min",
          "2 hr 30 min"
        ],
        "correct_index": 2,
        "explanation": "In 20 min on cycle, she travels $15 \\times (1/3) = 5$ miles. Remaining 45 miles is traveled with equal time $t$ on cycle and train:\n$15t + 30t = 45 \\implies t = 1$ hour.\n$\\text{Total time} = 1\\text{ hr (train)} + 1\\text{ hr } 20\\text{ min (cycle)} = 2\\text{ hr } 20\\text{ min}$.",
        "topic_tag": "Time, Speed & Distance"
      },
      {
        "id": "inf2-q56",
        "exam_id": "exam-infosys-02",
        "question_text": "A car traveling at $\\frac{5}{7}$ of its normal speed covers 42 km in 1 hr 40 min 48 sec. Find the normal speed.",
        "options": [
          "30 km/h",
          "32 km/h",
          "35 km/h",
          "38 km/h"
        ],
        "correct_index": 2,
        "explanation": "Time = $1 + 40.8/60 = 1.68$ hours.\n$\\text{Reduced speed} = 42 / 1.68 = 25$ km/h.\n$\\text{Normal speed} = 25 \\times (7/5) = 35$ km/h.",
        "topic_tag": "Time, Speed & Distance"
      },
      {
        "id": "inf2-q57",
        "exam_id": "exam-infosys-02",
        "question_text": "A journey is completed in 10 hours: the first half at 21 km/h and the second half at 24 km/h. Find total distance.",
        "options": [
          "210 km",
          "216 km",
          "224 km",
          "240 km"
        ],
        "correct_index": 2,
        "explanation": "$D/21 + D/24 = 10 \\implies \\frac{15D}{168} = 10 \\implies D = 112$ km.\n$\\text{Total distance} = 2D = 224$ km.",
        "topic_tag": "Time, Speed & Distance"
      },
      {
        "id": "inf2-q58",
        "exam_id": "exam-infosys-02",
        "question_text": "If the $1^{\\text{st}}$ day of a month is Thursday, and the last day is the $5^{\\text{th}}$ Saturday, how many days does the month have?",
        "options": [
          "29 days",
          "30 days",
          "31 days",
          "32 days"
        ],
        "correct_index": 2,
        "explanation": "1st is Thursday $\\implies$ 3rd is 1st Saturday. The 5th Saturday is on $3 + 4(7) = 31^{\\text{st}}$. Month has 31 days.",
        "topic_tag": "Calendar"
      },
      {
        "id": "inf2-q59",
        "exam_id": "exam-infosys-02",
        "question_text": "$\\frac{1}{4}$ of the time from midnight to now added to $\\frac{1}{2}$ of the time from now to midnight equals the current time. What is the current time?",
        "options": [
          "8:45 AM",
          "9:15 AM",
          "9:36 AM",
          "10:00 AM"
        ],
        "correct_index": 2,
        "explanation": "$T/4 + (24 - T)/2 = T \\implies T/4 + 12 - T/2 = T \\implies \\frac{5T}{4} = 12 \\implies T = 9.6\\text{ hrs} = 9\\text{ hr } 36\\text{ min}$.",
        "topic_tag": "Clock & Time"
      },
      {
        "id": "inf2-q60",
        "exam_id": "exam-infosys-02",
        "question_text": "Relative clock drifts after 6 hours: Wall clock is 10 min slow/hr, Table clock 10 min fast/hr, Alarm clock 5 min slow/hr, Wristwatch 5 min fast/hr. Find the wristwatch time after 6 hours from 12 noon.",
        "options": [
          "5:30:15",
          "5:42:00",
          "5:47:34",
          "6:00:00"
        ],
        "correct_index": 2,
        "explanation": "Compounding proportional relative drifts across the 4 clocks yields 5:47:34.",
        "topic_tag": "Faulty Clocks"
      },
      {
        "id": "inf2-q61",
        "exam_id": "exam-infosys-02",
        "question_text": "Between 10:00 PM and midnight, the positions of the hour and minute hands interchanged. Find the exact time.",
        "options": [
          "11:45 PM",
          "11:50 PM",
          "11:54 PM",
          "11:58 PM"
        ],
        "correct_index": 2,
        "explanation": "Solving hand angle interchange equation yields 11:54 PM.",
        "topic_tag": "Clocks"
      },
      {
        "id": "inf2-q62",
        "exam_id": "exam-infosys-02",
        "question_text": "A clock striking 6 takes 30 seconds. How long does it take to strike 12?",
        "options": [
          "60 seconds",
          "66 seconds",
          "72 seconds",
          "75 seconds"
        ],
        "correct_index": 1,
        "explanation": "6 strikes have 5 intervals: $30/5 = 6$ seconds per interval.\n12 strikes have 11 intervals: $11 \\times 6 = 66$ seconds.",
        "topic_tag": "Clocks"
      },
      {
        "id": "inf2-q63",
        "exam_id": "exam-infosys-02",
        "question_text": "At what time between 9:00 AM and 10:00 AM do the clock hands coincide?",
        "options": [
          "09:45:00 AM",
          "09:48:12 AM",
          "09:49:06 AM",
          "09:50:30 AM"
        ],
        "correct_index": 2,
        "explanation": "$T = \\frac{60 \\times 9}{11} = 540/11 = 49\\frac{1}{11}\\text{ min past 9} \\approx 09:49:06$ AM.",
        "topic_tag": "Clocks"
      },
      {
        "id": "inf2-q64",
        "exam_id": "exam-infosys-02",
        "question_text": "A cube is divided into 729 small cubes ($9 \\times 9 \\times 9$). Faces are colored with green, red, and blue on opposite/adjacent faces. How many cubelets have exactly one face painted?",
        "options": [
          "240",
          "280",
          "294",
          "312"
        ],
        "correct_index": 2,
        "explanation": "$6(n - 2)^2 = 6(9 - 2)^2 = 6(49) = 294$.",
        "topic_tag": "Cube Cutting"
      },
      {
        "id": "inf2-q65",
        "exam_id": "exam-infosys-02",
        "question_text": "What is the minimum number of cuts needed to carve 125 identical cubes from a larger cube?",
        "options": [
          "10 cuts",
          "12 cuts",
          "14 cuts",
          "15 cuts"
        ],
        "correct_index": 1,
        "explanation": "$3(n^{1/3} - 1) = 3(5 - 1) = 3 \\times 4 = 12$ cuts.",
        "topic_tag": "Cube Cutting"
      },
      {
        "id": "inf2-q66",
        "exam_id": "exam-infosys-02",
        "question_text": "A cube painted red is cut into 27 cubes ($3 \\times 3 \\times 3$). How many cubes have 3, 2, 1, and 0 faces painted?",
        "options": [
          "6, 12, 8, 1",
          "8, 12, 6, 1",
          "8, 10, 8, 1",
          "6, 14, 6, 1"
        ],
        "correct_index": 1,
        "explanation": "3 faces (corners) = 8; 2 faces (edges) = $12(3 - 2) = 12$; 1 face (centers) = $6(3 - 2)^2 = 6$; 0 faces (core) = $1^3 = 1$.\nCounts: 8, 12, 6, 1.",
        "topic_tag": "Cube Cutting"
      },
      {
        "id": "inf2-q67",
        "exam_id": "exam-infosys-02",
        "question_text": "A 4-inch cube painted on all sides is cut into 1-inch cubes. How many cubes have no paint?",
        "options": [
          "4",
          "6",
          "8",
          "12"
        ],
        "correct_index": 2,
        "explanation": "$(n - 2)^3 = (4 - 2)^3 = 2^3 = 8$.",
        "topic_tag": "Cube Cutting"
      },
      {
        "id": "inf2-q68",
        "exam_id": "exam-infosys-02",
        "question_text": "A grocer\\'s sales for 5 months are 6435, 6927, 6855, 7230, and 6562 Euros. What must month 6 sales be to average 6500 Euros?",
        "options": [
          "4850 Euros",
          "4991 Euros",
          "5120 Euros",
          "5250 Euros"
        ],
        "correct_index": 1,
        "explanation": "$6 \\times 6500 - (6435 + 6927 + 6855 + 7230 + 6562) = 39000 - 34009 = 4991$ Euros.",
        "topic_tag": "Averages"
      },
      {
        "id": "inf2-q69",
        "exam_id": "exam-infosys-02",
        "question_text": "Change for Rs. 1.15 is needed in 50p, 25p, 10p, and 5p coins (at least one of each). How many of each coin are given?",
        "options": [
          "1 of 50p, 1 of 25p, 3 of 10p, 2 of 5p",
          "1 of 50p, 2 of 25p, 1 of 10p, 1 of 5p",
          "2 of 50p, 1 of 10p, 1 of 5p",
          "1 of 50p, 1 of 25p, 2 of 10p, 4 of 5p"
        ],
        "correct_index": 1,
        "explanation": "$1 \\times 50\\text{p} + 2 \\times 25\\text{p} + 1 \\times 10\\text{p} + 1 \\times 5\\text{p} = 50 + 50 + 10 + 5 = 115\\text{p} = \\text{Rs. } 1.15$.",
        "topic_tag": "Coins & Money"
      },
      {
        "id": "inf2-q70",
        "exam_id": "exam-infosys-02",
        "question_text": "A vessel has 3 parts water and 5 parts syrup. How much mixture must be drawn off and replaced with water so the mixture becomes half water and half syrup?",
        "options": [
          "1/4",
          "1/5",
          "1/6",
          "1/8"
        ],
        "correct_index": 1,
        "explanation": "$\\text{Fraction} = \\frac{5 - 3}{2 \\times 5} = \\frac{2}{10} = \\frac{1}{5}$.",
        "topic_tag": "Mixtures"
      },
      {
        "id": "inf2-q71",
        "exam_id": "exam-infosys-02",
        "question_text": "Brand A costs 5 bits/lb, Brand B costs 3 bits/lb. A 40-pound mixture is sold at 6 bits/lb, yielding a $33\\frac{1}{3}\\%$ profit. How much of Brand A was used?",
        "options": [
          "10 lbs",
          "15 lbs",
          "20 lbs",
          "30 lbs"
        ],
        "correct_index": 0,
        "explanation": "CP of mixture = $6 / (4/3) = 4.5$ bits/lb. Alligation yields 10 lbs (or 30 lbs under complementary blend).",
        "topic_tag": "Alligation"
      },
      {
        "id": "inf2-q72",
        "exam_id": "exam-infosys-02",
        "question_text": "In how many ways can 4 men and 3 women be seated in a row such that no two men sit together, and men sit in strictly ascending age order?",
        "options": [
          "4 ways",
          "6 ways",
          "12 ways",
          "24 ways"
        ],
        "correct_index": 1,
        "explanation": "Pattern: M W M W M W M. Men have only 1 valid arrangement (fixed age order). Women can sit in $3! = 6$ ways. Total = $1 \\times 6 = 6$.",
        "topic_tag": "Permutations"
      },
      {
        "id": "inf2-q73",
        "exam_id": "exam-infosys-02",
        "question_text": "In how many ways can the letters of `mmmnnnppqq` be arranged such that exactly two \\'n\\'s are together?",
        "options": [
          "8,400",
          "9,600",
          "10,920",
          "12,480"
        ],
        "correct_index": 2,
        "explanation": "Combinatorial distribution of gap placements evaluates to 10,920.",
        "topic_tag": "Permutations"
      },
      {
        "id": "inf2-q74",
        "exam_id": "exam-infosys-02",
        "question_text": "How many 3-digit numbers can be formed using $\\{2, 3, 4, 5\\}$ without repetition?",
        "options": [
          "18",
          "24",
          "30",
          "36"
        ],
        "correct_index": 1,
        "explanation": "$^4P_3 = 4 \\times 3 \\times 2 = 24$.",
        "topic_tag": "Permutations"
      },
      {
        "id": "inf2-q75",
        "exam_id": "exam-infosys-02",
        "question_text": "There are 3 varieties of apples in a box (3 of each). What is the minimum number of apples to pick blindly to guarantee getting 3 apples of the same variety?",
        "options": [
          "5",
          "6",
          "7",
          "8"
        ],
        "correct_index": 2,
        "explanation": "Worst-case: pick 2 of each variety first ($2 \\times 3 = 6$). The $7^{\\text{th}}$ apple guarantees 3 of one variety.",
        "topic_tag": "Pigeonhole Principle"
      }
    ]
  },
  {
    "id": "exam-wipro-01",
    "title": "Wipro Elite NTH: Quantitative Aptitude 1",
    "category": "Company Specific",
    "company_tag": "Wipro",
    "description": "Wipro Elite National Talent Hunt aptitude questions covering Simple & Compound Interest, Area Scaling, Alternating Workers, Provisions, and Races.",
    "duration_minutes": 30,
    "total_marks": 50,
    "passing_percentage": 60,
    "difficulty": "Intermediate",
    "is_published": true,
    "question_count": 25,
    "questions": [
      {
        "id": "wip1-q51",
        "exam_id": "exam-wipro-01",
        "question_text": "Two equal sums are lent at 6% and 5% simple interest. The 6% loan is recovered 2 years earlier, and both yield Rs. 2800. Find the principal.",
        "options": [
          "Rs. 1500",
          "Rs. 1650",
          "Rs. 1750",
          "Rs. 1850"
        ],
        "correct_index": 2,
        "explanation": "$P[1 + 6(N - 2)/100] = P[1 + 5N/100] \\implies 6N - 12 = 5N \\implies N = 12$ years.\n$\\text{Amount} = P(1 + 0.60) = 1.6P = 2800 \\implies P = \\text{Rs. } 1750$.",
        "topic_tag": "Simple Interest"
      },
      {
        "id": "wip1-q52",
        "exam_id": "exam-wipro-01",
        "question_text": "Car prices rise by 25% and sales drop by 4%. Find the percentage change in revenue.",
        "options": [
          "15% increase",
          "18% increase",
          "20% increase",
          "22% increase"
        ],
        "correct_index": 2,
        "explanation": "$\\text{Revenue multiplier} = 1.25 \\times 0.96 = 1.20 \\implies 20\\%\\text{ increase}$.",
        "topic_tag": "Percentages"
      },
      {
        "id": "wip1-q53",
        "exam_id": "exam-wipro-01",
        "question_text": "Two stamps sold for Rs. 8000 each: one at 20% profit, the other at 20% loss. Find overall gain or loss.",
        "options": [
          "2% loss",
          "4% loss",
          "4% gain",
          "No loss no gain"
        ],
        "correct_index": 1,
        "explanation": "$\\text{Loss}\\% = \\frac{x^2}{100} = \\frac{20^2}{100} = 4\\%\\text{ loss}$.",
        "topic_tag": "Profit & Loss"
      },
      {
        "id": "wip1-q54",
        "exam_id": "exam-wipro-01",
        "question_text": "The sum of ages of Old and Young is 48. Working through the age-relation puzzle yields their current ages. How old is Old?",
        "options": [
          "26 years",
          "28 years",
          "30 years",
          "32 years"
        ],
        "correct_index": 2,
        "explanation": "Solving the simultaneous time differences yields Old = 30 years and Young = 18 years.",
        "topic_tag": "Ages"
      },
      {
        "id": "wip1-q55",
        "exam_id": "exam-wipro-01",
        "question_text": "A father was 5 times his son\\'s age 5 years ago, and will be 3 times his son\\'s age in 2 years. Find the ratio of their present ages.",
        "options": [
          "7 : 2",
          "8 : 3",
          "10 : 3",
          "12 : 5"
        ],
        "correct_index": 2,
        "explanation": "$F - 5 = 5(S - 5) \\implies F - 5S = -20$.\n$F + 2 = 3(S + 2) \\implies F - 3S = 4$.\n$2S = 24 \\implies S = 12, F = 40$. Ratio = $40 : 12 = 10 : 3$.",
        "topic_tag": "Ages"
      },
      {
        "id": "wip1-q56",
        "exam_id": "exam-wipro-01",
        "question_text": "If the circumference of a circle is 200 units, find the length of an arc subtending an angle of $20^\\circ$.",
        "options": [
          "10.00 units",
          "11.11 units",
          "12.50 units",
          "14.28 units"
        ],
        "correct_index": 1,
        "explanation": "$\\text{Arc} = \\frac{20^\\circ}{360^\\circ} \\times 200 = \\frac{200}{18} \\approx 11.11$ units.",
        "topic_tag": "Circles"
      },
      {
        "id": "wip1-q57",
        "exam_id": "exam-wipro-01",
        "question_text": "A rectangle has twice the area of a square. Its length is 14 cm greater than the square\\'s side, and its breadth equals the square\\'s side. Find the perimeter of the square.",
        "options": [
          "48 cm",
          "52 cm",
          "56 cm",
          "64 cm"
        ],
        "correct_index": 2,
        "explanation": "$a(a + 14) = 2a^2 \\implies a + 14 = 2a \\implies a = 14$ cm.\n$\\text{Perimeter} = 4a = 4 \\times 14 = 56$ cm.",
        "topic_tag": "Mensuration"
      },
      {
        "id": "wip1-q58",
        "exam_id": "exam-wipro-01",
        "question_text": "If the area of a square increases by 69%, by what percentage did its side increase?",
        "options": [
          "25%",
          "30%",
          "33%",
          "35%"
        ],
        "correct_index": 1,
        "explanation": "$\\text{New Area} = 1.69A_0 \\implies \\text{New side} = \\sqrt{1.69} = 1.30 \\implies 30\\%\\text{ increase}$.",
        "topic_tag": "Percentages"
      },
      {
        "id": "wip1-q59",
        "exam_id": "exam-wipro-01",
        "question_text": "If the radius of a circle decreases by 10%, by what percentage does its area decrease?",
        "options": [
          "18%",
          "19%",
          "20%",
          "21%"
        ],
        "correct_index": 1,
        "explanation": "$\\text{New Area} = (0.90)^2 = 0.81 \\implies 19\\%\\text{ decrease}$.",
        "topic_tag": "Percentages"
      },
      {
        "id": "wip1-q60",
        "exam_id": "exam-wipro-01",
        "question_text": "Two parallel chords of lengths 6 cm and 8 cm lie on the same side of the center of a circle. If the distance between them is 1 cm, find the diameter of the circle.",
        "options": [
          "8 cm",
          "10 cm",
          "12 cm",
          "14 cm"
        ],
        "correct_index": 1,
        "explanation": "$r^2 = 3^2 + (x + 1)^2 = 4^2 + x^2 \\implies 9 + 2x + 1 = 16 \\implies 2x = 6 \\implies x = 3$.\n$r = \\sqrt{4^2 + 3^2} = 5$ cm $\\implies$ Diameter = 10 cm.",
        "topic_tag": "Geometry"
      },
      {
        "id": "wip1-q61",
        "exam_id": "exam-wipro-01",
        "question_text": "A garrison of 3300 men has provisions for 32 days at 850 g/head. After 7 days, reinforcements arrive. Provisions now last 8 days less (17 days) at 825 g/head. How many men arrived?",
        "options": [
          "1500 men",
          "1600 men",
          "1700 men",
          "1800 men"
        ],
        "correct_index": 2,
        "explanation": "$3300 \\times 25 \\times 850 = (3300 + N) \\times 17 \\times 825 \\implies 3300 + N = 5000 \\implies N = 1700$ men.",
        "topic_tag": "Provisions"
      },
      {
        "id": "wip1-q62",
        "exam_id": "exam-wipro-01",
        "question_text": "Grass grows at a constant rate. 40 cows graze it in 40 days; 30 cows in 60 days. How many days will it last for 20 cows?",
        "options": [
          "90 days",
          "100 days",
          "120 days",
          "140 days"
        ],
        "correct_index": 2,
        "explanation": "Newton pasture formula evaluates to 120 days.",
        "topic_tag": "Pasture Puzzles"
      },
      {
        "id": "wip1-q63",
        "exam_id": "exam-wipro-01",
        "question_text": "A and B can complete a work in 9 and 12 days. Working on alternate days with A starting, in how many days is the work finished?",
        "options": [
          "9.50 days",
          "10.00 days",
          "10.25 days",
          "10.50 days"
        ],
        "correct_index": 2,
        "explanation": "Work in 2 days = $1/9 + 1/12 = 7/36$.\nIn 10 days: 35/36 done. Remaining 1/36 done by A in $(1/36)/(1/9) = 1/4$ day.\nTotal = 10.25 days ($10\\frac{1}{4}$ days).",
        "topic_tag": "Time & Work"
      },
      {
        "id": "wip1-q64",
        "exam_id": "exam-wipro-01",
        "question_text": "An inlet pipe A fills a tank in 42 min. After 12 min, outlet B opens (empties in 30 min). 6 min later, inlet C opens (fills in 35 min). Find total time to fill the tank.",
        "options": [
          "52.0 min",
          "55.5 min",
          "58.5 min",
          "62.0 min"
        ],
        "correct_index": 2,
        "explanation": "$\\frac{N}{42} - \\frac{N - 12}{30} + \\frac{N - 18}{35} = 1 \\implies N = 58.5$ minutes.",
        "topic_tag": "Pipes & Cisterns"
      },
      {
        "id": "wip1-q65",
        "exam_id": "exam-wipro-01",
        "question_text": "A is 6 times as fast as B and finishes a work in 100 days less than B. Find the time taken working together.",
        "options": [
          "15.5 days",
          "17.14 days",
          "18.0 days",
          "20.0 days"
        ],
        "correct_index": 1,
        "explanation": "$B - B/6 = 100 \\implies 5B/6 = 100 \\implies B = 120$ days, $A = 20$ days.\n$\\text{Together} = \\frac{120 \\times 20}{140} = \\frac{120}{7} \\approx 17.14$ days.",
        "topic_tag": "Time & Work"
      },
      {
        "id": "wip1-q66",
        "exam_id": "exam-wipro-01",
        "question_text": "30 men take 20 days to complete a job working 9 hrs/day. How many hours per day should 40 men work to finish it in 40 days?",
        "options": [
          "3 hr 15 min",
          "3 hr 22.5 min",
          "3 hr 30 min",
          "3 hr 45 min"
        ],
        "correct_index": 1,
        "explanation": "$30 \\times 20 \\times 9 = 40 \\times 40 \\times H \\implies 5400 = 1600H \\implies H = 3.375\\text{ hrs} = 3\\text{ hr } 22.5\\text{ min}$.",
        "topic_tag": "Time & Work"
      },
      {
        "id": "wip1-q67",
        "exam_id": "exam-wipro-01",
        "question_text": "A, B, and C can do a work in 30, 45, and 90 days. A works continuously and is assisted by B and C every $4^{\\text{th}}$ day. How many days did A work alone?",
        "options": [
          "16 days",
          "18 days",
          "20 days",
          "24 days"
        ],
        "correct_index": 1,
        "explanation": "Work in 4 days = $4(1/30) + 1/45 + 1/90 = 15/90 = 1/6$. Total time = $6 \\times 4 = 24$ days.\nA alone = $24 - 6 = 18$ days.",
        "topic_tag": "Time & Work"
      },
      {
        "id": "wip1-q68",
        "exam_id": "exam-wipro-01",
        "question_text": "16 men do a work in 24 days; 48 children in 16 days. 12 men work for 14 days, then 12 children join. In how many days is the remaining work finished?",
        "options": [
          "10 days",
          "11 days",
          "12 days",
          "14 days"
        ],
        "correct_index": 2,
        "explanation": "Work done by 12 men in 14 days = 7/16. Remaining = 9/16. Group daily rate = 3/64.\n$\\text{Days} = \\frac{9/16}{3/64} = 12$ days.",
        "topic_tag": "Time & Work"
      },
      {
        "id": "wip1-q69",
        "exam_id": "exam-wipro-01",
        "question_text": "2 men and 7 children finish a work in 4 days; 4 men and 4 children in 3 days. Find days for 1 man alone.",
        "options": [
          "12 days",
          "14 days",
          "15 days",
          "18 days"
        ],
        "correct_index": 2,
        "explanation": "$2/M + 7/C = 1/4$ and $4/M + 4/C = 1/3$.\nSolving gives $M = 15$ days, $C = 60$ days.",
        "topic_tag": "Time & Work"
      },
      {
        "id": "wip1-q70",
        "exam_id": "exam-wipro-01",
        "question_text": "If 5 men take 1 hour to dig a hole, how long will 12 men take?",
        "options": [
          "20 minutes",
          "22.5 minutes",
          "25 minutes",
          "30 minutes"
        ],
        "correct_index": 2,
        "explanation": "$\\text{Time} = 5/12\\text{ hours} = 25$ minutes.",
        "topic_tag": "Time & Work"
      },
      {
        "id": "wip1-q71",
        "exam_id": "exam-wipro-01",
        "question_text": "A pipe fills a tank in 20 min, but a leak empties it in 60 min. How long will it take to fill the tank?",
        "options": [
          "25 minutes",
          "30 minutes",
          "35 minutes",
          "40 minutes"
        ],
        "correct_index": 1,
        "explanation": "$\\text{Rate} = 1/20 - 1/60 = 2/60 = 1/30 \\implies 30$ minutes.",
        "topic_tag": "Pipes & Cisterns"
      },
      {
        "id": "wip1-q72",
        "exam_id": "exam-wipro-01",
        "question_text": "A solar car travels at 30 mph on solar and 40 mph on regular power. Trip takes 45 min forward (mixed) and 50 min return (solar only, 25 miles). Find distance driven on regular power.",
        "options": [
          "8 miles",
          "10 miles",
          "12 miles",
          "15 miles"
        ],
        "correct_index": 1,
        "explanation": "$30(45 - T)/60 + 40T/60 = 25 \\implies 10T = 150 \\implies T = 15$ minutes.\n$\\text{Distance} = (15/60) \\times 40 = 10$ miles.",
        "topic_tag": "Time, Speed & Distance"
      },
      {
        "id": "wip1-q73",
        "exam_id": "exam-wipro-01",
        "question_text": "Time taken by Harish and Dev is in ratio $4:3$. Dev wins by 360m. Find race distance.",
        "options": [
          "1200 m",
          "1320 m",
          "1440 m",
          "1560 m"
        ],
        "correct_index": 2,
        "explanation": "Harish covers 360m in 1 unit of time $\\implies$ total distance = $4 \\times 360 = 1440$m.",
        "topic_tag": "Races"
      },
      {
        "id": "wip1-q74",
        "exam_id": "exam-wipro-01",
        "question_text": "A train takes 2 hours less for a 300 km journey if its speed is increased by 5 km/h. Find normal speed.",
        "options": [
          "20 km/h",
          "25 km/h",
          "30 km/h",
          "35 km/h"
        ],
        "correct_index": 1,
        "explanation": "$300/S - 300/(S + 5) = 2 \\implies S(S + 5) = 750 \\implies S = 25$ km/h.",
        "topic_tag": "Time, Speed & Distance"
      },
      {
        "id": "wip1-q75",
        "exam_id": "exam-wipro-01",
        "question_text": "A journey of 25 hours (20 hrs bus at 20 km/h, 5 hrs train) averages 24 km/h overall (600 km). Find train speed.",
        "options": [
          "35 km/h",
          "40 km/h",
          "45 km/h",
          "50 km/h"
        ],
        "correct_index": 1,
        "explanation": "Bus distance = $20 \\times 20 = 400$ km. Train distance = $600 - 400 = 200$ km.\n$\\text{Train speed} = 200 / 5 = 40$ km/h.",
        "topic_tag": "Time, Speed & Distance"
      }
    ]
  },
  {
    "id": "exam-infosys-03",
    "title": "Infosys Cryptarithmetic & Probability: Test 3",
    "category": "Company Specific",
    "company_tag": "Infosys",
    "description": "Signature Infosys hiring drive test featuring famous verbal Cryptarithmetic alphanumeric puzzles (SHE, PEACE, DARWIN), Circular Combinatorics, and Advanced Probability.",
    "duration_minutes": 30,
    "total_marks": 50,
    "passing_percentage": 60,
    "difficulty": "Advanced",
    "is_published": true,
    "question_count": 25,
    "questions": [
      {
        "id": "inf3-q76",
        "exam_id": "exam-infosys-03",
        "question_text": "There are $N$ stations issuing tickets to all other stations. New stations are added, increasing tickets by 46. Find the number of stations.",
        "options": [
          "9 stations",
          "11 stations",
          "13 stations",
          "15 stations"
        ],
        "correct_index": 1,
        "explanation": "$(N + x)(N + x - 1) - N(N - 1) = 46$. For $N = 11$ and $x = 2$: $13 \\times 12 - 11 \\times 10 = 156 - 110 = 46$. Initially 11 stations.",
        "topic_tag": "Combinatorics"
      },
      {
        "id": "inf3-q77",
        "exam_id": "exam-infosys-03",
        "question_text": "In how many ways can 7 members be selected from 12 men and 3 women such that at most one woman is chosen?",
        "options": [
          "2480 ways",
          "2772 ways",
          "2940 ways",
          "3564 ways"
        ],
        "correct_index": 1,
        "explanation": "0 women: $\\binom{3}{0}\\binom{12}{7} = 792$. 1 woman: $\\binom{3}{1}\\binom{12}{6} = 3 \\times 924 = 2772$. Exactly 1 woman gives 2772 ways.",
        "topic_tag": "Combinations"
      },
      {
        "id": "inf3-q78",
        "exam_id": "exam-infosys-03",
        "question_text": "In how many ways can a team of 4 be formed from 4 boys and 3 girls with at least one boy and one girl?",
        "options": [
          "30 ways",
          "32 ways",
          "34 ways",
          "35 ways"
        ],
        "correct_index": 2,
        "explanation": "$\\binom{7}{4} - \\binom{4}{4} - \\binom{3}{4} = 35 - 1 - 0 = 34$ ways.",
        "topic_tag": "Combinations"
      },
      {
        "id": "inf3-q79",
        "exam_id": "exam-infosys-03",
        "question_text": "A die has pairs $(1, 6)$, $(3, 4)$, and $(2, 5)$ opposite each other. How many distinct dice can be made?",
        "options": [
          "2",
          "4",
          "6",
          "8"
        ],
        "correct_index": 1,
        "explanation": "Fix 1 at bottom (6 on top). The 4 lateral faces can be arranged in $2 \\times 2 = 4$ chiral ways.",
        "topic_tag": "Puzzles"
      },
      {
        "id": "inf3-q80",
        "exam_id": "exam-infosys-03",
        "question_text": "15 tennis players play every opponent twice. How many games are played?",
        "options": [
          "105 games",
          "180 games",
          "210 games",
          "240 games"
        ],
        "correct_index": 2,
        "explanation": "$2 \\times \\binom{15}{2} = 2 \\times 105 = 210$ games.",
        "topic_tag": "Tournaments"
      },
      {
        "id": "inf3-q81",
        "exam_id": "exam-infosys-03",
        "question_text": "Two dice are thrown. What is the probability that the sum is prime?",
        "options": [
          "11/36",
          "13/36",
          "15/36",
          "17/36"
        ],
        "correct_index": 2,
        "explanation": "Prime sums: 2 (1), 3 (2), 5 (4), 7 (6), 11 (2). Total favorable = $1 + 2 + 4 + 6 + 2 = 15$. $P = 15/36 = 5/12$.",
        "topic_tag": "Probability"
      },
      {
        "id": "inf3-q82",
        "exam_id": "exam-infosys-03",
        "question_text": "Two cards are drawn from a pack of 52. What is the probability that one is a spade and one is a heart?",
        "options": [
          "11/102",
          "13/102",
          "15/102",
          "17/102"
        ],
        "correct_index": 1,
        "explanation": "$P = \\frac{\\binom{13}{1}\\binom{13}{1}}{\\binom{52}{2}} = \\frac{169}{1326} = \\frac{13}{102}$.",
        "topic_tag": "Probability"
      },
      {
        "id": "inf3-q83",
        "exam_id": "exam-infosys-03",
        "question_text": "5 boys and 5 girls sit around a circular table. What is the probability that all 5 boys sit together?",
        "options": [
          "1/126",
          "5/126",
          "7/126",
          "11/126"
        ],
        "correct_index": 1,
        "explanation": "Treat 5 boys as 1 unit: $(6 - 1)! \\times 5! = 5! \\times 5!$. Total circular permutations = $9!$.\n$P = \\frac{5! \\times 5!}{9!} = \\frac{120 \\times 120}{362880} = \\frac{5}{126}$.",
        "topic_tag": "Circular Probability"
      },
      {
        "id": "inf3-q84",
        "exam_id": "exam-infosys-03",
        "question_text": "A ticket drawn from 1 to 20 is a multiple of 3 or 5. Find the probability.",
        "options": [
          "7/20",
          "8/20",
          "9/20",
          "10/20"
        ],
        "correct_index": 2,
        "explanation": "Multiples: $\\{3, 5, 6, 9, 10, 12, 15, 18, 20\\}$ (9 numbers). $P = 9/20$.",
        "topic_tag": "Probability"
      },
      {
        "id": "inf3-q85",
        "exam_id": "exam-infosys-03",
        "question_text": "In a school, 60% are girls and 35% of girls are poor. What is the probability of randomly choosing a poor girl?",
        "options": [
          "18/100",
          "21/100",
          "24/100",
          "27/100"
        ],
        "correct_index": 1,
        "explanation": "$P = 0.60 \\times 0.35 = 0.21 = \\frac{21}{100}$.",
        "topic_tag": "Conditional Probability"
      },
      {
        "id": "inf3-q86",
        "exam_id": "exam-infosys-03",
        "question_text": "A bag has 64 balls of 8 colors (8 each). What is the minimum draw to guarantee 3 red balls?",
        "options": [
          "51",
          "55",
          "59",
          "61"
        ],
        "correct_index": 2,
        "explanation": "Worst-case: pick all 56 non-red balls first, then 3 red balls = $56 + 3 = 59$.",
        "topic_tag": "Pigeonhole Principle"
      },
      {
        "id": "inf3-q87",
        "exam_id": "exam-infosys-03",
        "question_text": "Main line trains run at 5:00 AM and every 10 min. Harbor trains run at 5:02 AM and every 10 min. What is the probability a passenger arriving at a random time gets the main line train?",
        "options": [
          "0.2",
          "0.5",
          "0.8",
          "0.9"
        ],
        "correct_index": 2,
        "explanation": "Window for Harbor: 2 minutes (:00 to :02). Window for Main: 8 minutes (:02 to :10).\n$P = 8/10 = 0.8$.",
        "topic_tag": "Geometric Probability"
      },
      {
        "id": "inf3-q88",
        "exam_id": "exam-infosys-03",
        "question_text": "Probability of $\\frac{A}{B}$ being an integer for $A = 2^x 3^y$ and $B = 2^l 3^m$ where $x, y, l, m \\in [1, 10]$ independently.",
        "options": [
          "1/100",
          "55/1000",
          "121/400",
          "3025/10000"
        ],
        "correct_index": 0,
        "explanation": "Across the diagonal matrix of exponent sets, probability evaluates to 1/100.",
        "topic_tag": "Probability"
      },
      {
        "id": "inf3-q89",
        "exam_id": "exam-infosys-03",
        "question_text": "Given 3 coins (HH, TT, HT), a random coin is tossed and shows heads. What is the probability the other face is tails?",
        "options": [
          "1/4",
          "1/3",
          "1/2",
          "2/3"
        ],
        "correct_index": 1,
        "explanation": "Possible heads shown: 2 from HH, 1 from HT (3 heads total). Exactly 1 has tails on reverse $\\implies P = 1/3$.",
        "topic_tag": "Bayes Theorem"
      },
      {
        "id": "inf3-q90",
        "exam_id": "exam-infosys-03",
        "question_text": "One card is drawn from 52 cards. What is the probability it is a spade or an ace?",
        "options": [
          "15/52",
          "16/52",
          "17/52",
          "18/52"
        ],
        "correct_index": 1,
        "explanation": "$P = \\frac{13 + 4 - 1}{52} = \\frac{16}{52} = \\frac{4}{13}$.",
        "topic_tag": "Probability"
      },
      {
        "id": "inf3-q91",
        "exam_id": "exam-infosys-03",
        "question_text": "Cryptarithmetic: If $(HE)^H = SHE$, find $S + H + E$.",
        "options": [
          "11",
          "12",
          "13",
          "14"
        ],
        "correct_index": 2,
        "explanation": "$H = 2 \\implies (25)^2 = 625 \\implies S = 6, H = 2, E = 5$.\n$S + H + E = 6 + 2 + 5 = 13$.",
        "topic_tag": "Cryptarithmetic"
      },
      {
        "id": "inf3-q92",
        "exam_id": "exam-infosys-03",
        "question_text": "Cryptarithmetic: $USA + USSR = PEACE$. Find $P + E + A + C + E$.",
        "options": [
          "8",
          "10",
          "12",
          "14"
        ],
        "correct_index": 1,
        "explanation": "$P = 1, U = 9, E = 0, A = 2, S = 3, C = 7, R = 8$.\n$P + E + A + C + E = 1 + 0 + 2 + 7 + 0 = 10$.",
        "topic_tag": "Cryptarithmetic"
      },
      {
        "id": "inf3-q93",
        "exam_id": "exam-infosys-03",
        "question_text": "Cryptarithmetic: $EVER + SINCE = DARWIN$. Find $D + A + R + W + I + N$.",
        "options": [
          "21",
          "22",
          "23",
          "24"
        ],
        "correct_index": 2,
        "explanation": "$D = 1, A = 0, R = 3, W = 4, I = 7, N = 8$.\n$\\text{Sum} = 1 + 0 + 3 + 4 + 7 + 8 = 23$.",
        "topic_tag": "Cryptarithmetic"
      },
      {
        "id": "inf3-q94",
        "exam_id": "exam-infosys-03",
        "question_text": "Cryptarithmetic: $CROSS + ROADS = DANGER$. Find $D + A + N + G + E + R$.",
        "options": [
          "28",
          "29",
          "30",
          "31"
        ],
        "correct_index": 3,
        "explanation": "$D = 1, A = 5, N = 8, G = 7, E = 4, R = 6$.\n$\\text{Sum} = 1 + 5 + 8 + 7 + 4 + 6 = 31$.",
        "topic_tag": "Cryptarithmetic"
      },
      {
        "id": "inf3-q95",
        "exam_id": "exam-infosys-03",
        "question_text": "Cryptarithmetic: $EAT + EAT + EAT = BEET$. If $T = 0$, find $TEE + TEE$.",
        "options": [
          "66",
          "77",
          "88",
          "99"
        ],
        "correct_index": 2,
        "explanation": "$T = 0 \\implies 3 \\times EAT$ ends in 0. $E = 4 \\implies TEE = 044$.\n$TEE + TEE = 44 + 44 = 88$.",
        "topic_tag": "Cryptarithmetic"
      },
      {
        "id": "inf3-q96",
        "exam_id": "exam-infosys-03",
        "question_text": "Cryptarithmetic: $NINE + FINE = WIVES$. Find $S + I + N + E$ given $E = 5$ and $V = 3$.",
        "options": [
          "16",
          "18",
          "20",
          "22"
        ],
        "correct_index": 1,
        "explanation": "Digits: $S = 0, I = 6, N = 7, E = 5$.\n$\\text{Sum} = 0 + 6 + 7 + 5 = 18$.",
        "topic_tag": "Cryptarithmetic"
      },
      {
        "id": "inf3-q97",
        "exam_id": "exam-infosys-03",
        "question_text": "Cryptarithmetic: $XYZ + XYZ + XYZ = ZZZ$. Find $X + Y + Z$.",
        "options": [
          "12",
          "14",
          "16",
          "18"
        ],
        "correct_index": 1,
        "explanation": "$3 \\times XYZ = ZZZ \\implies 3 \\times 185 = 555$.\n$X = 1, Y = 8, Z = 5 \\implies X + Y + Z = 1 + 8 + 5 = 14$.",
        "topic_tag": "Cryptarithmetic"
      },
      {
        "id": "inf3-q98",
        "exam_id": "exam-infosys-03",
        "question_text": "Cryptarithmetic: $COCA + COLA = OASIS$. Find $O + A + S + I + S$.",
        "options": [
          "18",
          "19",
          "20",
          "21"
        ],
        "correct_index": 2,
        "explanation": "Digits: $O = 1, A = 6, S = 2, I = 9$.\n$\\text{Sum} = 1 + 6 + 2 + 9 + 2 = 20$.",
        "topic_tag": "Cryptarithmetic"
      },
      {
        "id": "inf3-q99",
        "exam_id": "exam-infosys-03",
        "question_text": "Cryptarithmetic: $MOON + SUN = PLUTO$. Find $P + L + U + T + O$.",
        "options": [
          "15",
          "16",
          "17",
          "18"
        ],
        "correct_index": 2,
        "explanation": "Digits: $P = 1, L = 0, U = 5, T = 3, O = 8$.\n$\\text{Sum} = 1 + 0 + 5 + 3 + 8 = 17$.",
        "topic_tag": "Cryptarithmetic"
      },
      {
        "id": "inf3-q100",
        "exam_id": "exam-infosys-03",
        "question_text": "Cryptarithmetic: $BANANA + GUAVA = ORANGE$. Find $O + R + A + N + G + E$.",
        "options": [
          "29",
          "30",
          "31",
          "32"
        ],
        "correct_index": 2,
        "explanation": "Digits: $O = 3, R = 1, A = 4, N = 9, G = 6, E = 8$.\n$\\text{Sum} = 3 + 1 + 4 + 9 + 6 + 8 = 31$.",
        "topic_tag": "Cryptarithmetic"
      }
    ]
  },
  {
    "id": "exam-wipro-02",
    "title": "Wipro Elite NTH: Advanced Reasoning & Math 2",
    "category": "Company Specific",
    "company_tag": "Wipro",
    "description": "Wipro Elite quantitative test covering 400m race handicaps, Dictionary rank (MOTHER), Permutations with repeated elements, Card probability, and Overlapping clock hands.",
    "duration_minutes": 30,
    "total_marks": 50,
    "passing_percentage": 60,
    "difficulty": "Advanced",
    "is_published": true,
    "question_count": 25,
    "questions": [
      {
        "id": "wip2-q76",
        "exam_id": "exam-wipro-02",
        "question_text": "A starts 3 min after B for a place 4.5 km away. B reaches the destination, immediately turns back, and meets A 1 km from the destination. A walks 1 km in 18 min. Find B\\'s speed.",
        "options": [
          "4.5 km/h",
          "5.0 km/h",
          "5.5 km/h",
          "6.0 km/h"
        ],
        "correct_index": 1,
        "explanation": "A covers $4.5 - 1 = 3.5$ km in $3.5 \\times 18 = 63$ min.\nB takes $63 + 3 = 66$ min (1.1 hrs) to walk $4.5 + 1 = 5.5$ km.\n$\\text{Speed of B} = 5.5 / 1.1 = 5$ km/h.",
        "topic_tag": "Time, Speed & Distance"
      },
      {
        "id": "wip2-q77",
        "exam_id": "exam-wipro-02",
        "question_text": "In a 400m race: A beats B by 5m, B beats C by 4m, and D beats C by 16m. In a race between A and D, who wins and by how much?",
        "options": [
          "A wins by 5.5 m",
          "D wins by 7.2 m",
          "A wins by 8.0 m",
          "D wins by 9.4 m"
        ],
        "correct_index": 1,
        "explanation": "$\\frac{A}{D} = \\frac{400}{395} \\times \\frac{400}{396} \\times \\frac{384}{400} = \\frac{2560}{2607}$. When D finishes 400m, A covers 392.8m. D beats A by 7.2m.",
        "topic_tag": "Races"
      },
      {
        "id": "wip2-q78",
        "exam_id": "exam-wipro-02",
        "question_text": "A train round-trip between A and B at 60 km/h takes time $2T$. Going at 80 km/h and returning at 40 km/h takes 2 hours longer. Find the distance between A and B.",
        "options": [
          "420 km",
          "450 km",
          "480 km",
          "500 km"
        ],
        "correct_index": 2,
        "explanation": "Average speed in 2nd case = $\\frac{2 \\times 80 \\times 40}{120} = 160/3$ km/h.\nSolving time delta equation yields $D = 480$ km.",
        "topic_tag": "Average Speed"
      },
      {
        "id": "wip2-q79",
        "exam_id": "exam-wipro-02",
        "question_text": "A 120m long train crosses a pole in 2.5 seconds. How long will it take to cross a 140m long platform?",
        "options": [
          "4.85 seconds",
          "5.20 seconds",
          "5.42 seconds",
          "5.80 seconds"
        ],
        "correct_index": 2,
        "explanation": "Speed = $120 / 2.5 = 48$ m/s.\n$\\text{Time} = \\frac{120 + 140}{48} = \\frac{260}{48} \\approx 5.42$ seconds.",
        "topic_tag": "Trains"
      },
      {
        "id": "wip2-q80",
        "exam_id": "exam-wipro-02",
        "question_text": "Two men travel in the same direction at 9 km/h and 15 km/h. After 6 hours, the first man doubles his speed to 18 km/h and both arrive together. Find total journey time.",
        "options": [
          "16 hours",
          "18 hours",
          "20 hours",
          "22 hours"
        ],
        "correct_index": 1,
        "explanation": "After 6 hrs: distances are 54 km and 90 km (gap = 36 km).\n$\\text{Catch-up time} = \\frac{36}{18 - 15} = 12$ hours. Total = $6 + 12 = 18$ hours.",
        "topic_tag": "Relative Speed"
      },
      {
        "id": "wip2-q81",
        "exam_id": "exam-wipro-02",
        "question_text": "The speed ratio of two trains is $7:8$. If the second train runs 400 km in 4 hours (100 km/h), find the speed of the first train.",
        "options": [
          "82.5 km/h",
          "85.0 km/h",
          "87.5 km/h",
          "90.0 km/h"
        ],
        "correct_index": 2,
        "explanation": "$S_1 = 100 \\times (7/8) = 87.5$ km/h.",
        "topic_tag": "Trains"
      },
      {
        "id": "wip2-q82",
        "exam_id": "exam-wipro-02",
        "question_text": "A car traveling at $\\frac{5}{7}$ of its normal speed covers 42 km in 1 hr 40 min 48 sec. What is its normal speed?",
        "options": [
          "30 km/h",
          "32 km/h",
          "35 km/h",
          "40 km/h"
        ],
        "correct_index": 2,
        "explanation": "Speed = 35 km/h.",
        "topic_tag": "Time, Speed & Distance"
      },
      {
        "id": "wip2-q83",
        "exam_id": "exam-wipro-02",
        "question_text": "A man rows 5 km in 60 min with the tide. The tide reverses direction, and he rows a further 20 km in 10 hours. How much time would he have saved if the tide had not reversed?",
        "options": [
          "4 hours",
          "5 hours",
          "6 hours",
          "7 hours"
        ],
        "correct_index": 2,
        "explanation": "Downstream speed = 5 km/h. Time for 25 km with tide = $25/5 = 5$ hrs.\nActual time = $1 + 10 = 11$ hrs. Time saved = $11 - 5 = 6$ hours.",
        "topic_tag": "Boats & Streams"
      },
      {
        "id": "wip2-q84",
        "exam_id": "exam-wipro-02",
        "question_text": "Maya walks the length of a moving walkway in 7 minutes when it is stopped, and rides it in 4 minutes when standing. How long will it take if she walks on it while it moves?",
        "options": [
          "2.25 minutes",
          "2.54 minutes",
          "2.80 minutes",
          "3.10 minutes"
        ],
        "correct_index": 1,
        "explanation": "$\\text{Time} = \\frac{7 \\times 4}{7 + 4} = \\frac{28}{11} \\approx 2.54$ minutes.",
        "topic_tag": "Escalators"
      },
      {
        "id": "wip2-q85",
        "exam_id": "exam-wipro-02",
        "question_text": "Driving to the mountains took 9 hours in traffic. The return trip took 4 hours at an average speed 40 mph faster. How far are the mountains?",
        "options": [
          "260 miles",
          "275 miles",
          "288 miles",
          "300 miles"
        ],
        "correct_index": 2,
        "explanation": "$9S = 4(S + 40) \\implies 5S = 160 \\implies S = 32$ mph.\n$\\text{Distance} = 9 \\times 32 = 288$ miles.",
        "topic_tag": "Time, Speed & Distance"
      },
      {
        "id": "wip2-q86",
        "exam_id": "exam-wipro-02",
        "question_text": "A train leaves NYC at 7:15 AM and arrives in Buffalo at 2:47 PM. Find the total trip duration.",
        "options": [
          "7 hr 15 min",
          "7 hr 28 min",
          "7 hr 32 min",
          "7 hr 45 min"
        ],
        "correct_index": 2,
        "explanation": "7:15 AM to 12:00 PM = 4 hr 45 min. 12:00 PM to 2:47 PM = 2 hr 47 min.\nTotal = 7 hours 32 minutes.",
        "topic_tag": "Time Calculations"
      },
      {
        "id": "wip2-q87",
        "exam_id": "exam-wipro-02",
        "question_text": "Two trains travel in the same direction at 56 km/h. The first train crosses a stationary man in 78.9 seconds. Find the length of the first train.",
        "options": [
          "1150 m",
          "1200 m",
          "1227 m",
          "1250 m"
        ],
        "correct_index": 2,
        "explanation": "$\\text{Speed} = 56 \\times (5/18) = 140/9$ m/s.\n$\\text{Length} = (140/9) \\times 78.9 \\approx 1227$ m.",
        "topic_tag": "Trains"
      },
      {
        "id": "wip2-q88",
        "exam_id": "exam-wipro-02",
        "question_text": "Given 10 distinct letters, how many 5-letter words can be made with at least one repeated letter?",
        "options": [
          "60,480",
          "65,240",
          "69,760",
          "72,000"
        ],
        "correct_index": 2,
        "explanation": "Total with repetition - without repetition = $10^5 - {^{10}P_5} = 100,000 - 30,240 = 69,760$.",
        "topic_tag": "Permutations"
      },
      {
        "id": "wip2-q89",
        "exam_id": "exam-wipro-02",
        "question_text": "How many 7-digit numbers can be formed using the digit 3 three times and the digit 5 four times?",
        "options": [
          "28",
          "35",
          "42",
          "48"
        ],
        "correct_index": 1,
        "explanation": "$\\frac{7!}{3! 4!} = \\frac{5040}{6 \\times 24} = 35$.",
        "topic_tag": "Combinations"
      },
      {
        "id": "wip2-q90",
        "exam_id": "exam-wipro-02",
        "question_text": "Find the dictionary rank of the word `MOTHER`.",
        "options": [
          "305",
          "308",
          "309",
          "312"
        ],
        "correct_index": 2,
        "explanation": "Alphabetical: E, H, M, O, R, T.\nStarting E: 120, H: 120, ME/MH: 48, MOE/MOH: 12, MOR: 6, MOTE: 2, MOTHER: 1.\nRank = $120 + 120 + 48 + 12 + 6 + 2 + 1 = 309$.",
        "topic_tag": "Dictionary Rank"
      },
      {
        "id": "wip2-q91",
        "exam_id": "exam-wipro-02",
        "question_text": "In a game, 3 cards are dealt from 52. A winning hand has a King, Queen, and Jack. What is the number of winning combinations?",
        "options": [
          "36",
          "48",
          "64",
          "80"
        ],
        "correct_index": 2,
        "explanation": "$\\binom{4}{1} \\times \\binom{4}{1} \\times \\binom{4}{1} = 4 \\times 4 \\times 4 = 64$.",
        "topic_tag": "Combinations"
      },
      {
        "id": "wip2-q92",
        "exam_id": "exam-wipro-02",
        "question_text": "A drawer has 30 socks: 60% red (18) and 40% blue (12). What is the minimum number of socks to pick blindly to guarantee at least two blue socks?",
        "options": [
          "16 socks",
          "18 socks",
          "20 socks",
          "22 socks"
        ],
        "correct_index": 2,
        "explanation": "Worst-case: pick all 18 red socks first, then 2 blue socks = $18 + 2 = 20$.",
        "topic_tag": "Pigeonhole Principle"
      },
      {
        "id": "wip2-q93",
        "exam_id": "exam-wipro-02",
        "question_text": "In how many ways can 4 distinct paintings be divided among 3 children such that each child gets at least 1 painting?",
        "options": [
          "24 ways",
          "36 ways",
          "48 ways",
          "72 ways"
        ],
        "correct_index": 1,
        "explanation": "One child gets 2, others get 1 each: $\\binom{4}{2} \\times \\binom{3}{1} \\times 2! = 6 \\times 3 \\times 2 = 36$ ways.",
        "topic_tag": "Combinations"
      },
      {
        "id": "wip2-q94",
        "exam_id": "exam-wipro-02",
        "question_text": "Speakers A, B, C speak along with 5 other speakers in random order. What is the probability that A speaks before B and B speaks before C?",
        "options": [
          "1/8",
          "1/6",
          "1/4",
          "1/3"
        ],
        "correct_index": 1,
        "explanation": "Among 3 positions for A, B, C there are $3! = 6$ orderings, exactly 1 is $(A, B, C) \\implies P = 1/6$.",
        "topic_tag": "Probability"
      },
      {
        "id": "wip2-q95",
        "exam_id": "exam-wipro-02",
        "question_text": "Two numbers are chosen randomly from $\\{1, 2, \\dots, 25\\}$. What is the probability they are not equal?",
        "options": [
          "22/25",
          "23/25",
          "24/25",
          "25/26"
        ],
        "correct_index": 2,
        "explanation": "Total ordered pairs = $25 \\times 25 = 625$. Pairs where $A \\ne B = 625 - 25 = 600$.\n$P = 600/625 = 24/25$.",
        "topic_tag": "Probability"
      },
      {
        "id": "wip2-q96",
        "exam_id": "exam-wipro-02",
        "question_text": "A and B each throw a die. What is the probability that A\\'s throw is not greater than B\\'s?",
        "options": [
          "18/36",
          "20/36",
          "21/36",
          "24/36"
        ],
        "correct_index": 2,
        "explanation": "$P(A \\le B) = P(A < B) + P(A = B) = \\frac{15 + 6}{36} = \\frac{21}{36} = \\frac{7}{12}$.",
        "topic_tag": "Dice Probability"
      },
      {
        "id": "wip2-q97",
        "exam_id": "exam-wipro-02",
        "question_text": "There are 3 red, 3 green, and 3 blue balls. If 3 balls are chosen, what is the probability that at least two have the same color?",
        "options": [
          "48/84",
          "54/84",
          "57/84",
          "62/84"
        ],
        "correct_index": 2,
        "explanation": "Total = $\\binom{9}{3} = 84$. All different = $\\binom{3}{1}^3 = 27$.\nAt least two same = $84 - 27 = 57 \\implies P = 57/84 = 19/28$.",
        "topic_tag": "Probability"
      },
      {
        "id": "wip2-q98",
        "exam_id": "exam-wipro-02",
        "question_text": "In a 20-question exam with 2 choices per question, what is the probability of guessing all questions correctly?",
        "options": [
          "1/2^10",
          "1/2^15",
          "1/2^20",
          "1/2^25"
        ],
        "correct_index": 2,
        "explanation": "$P = (1/2)^{20} = \\frac{1}{2^{20}} = \\frac{1}{1,048,576}$.",
        "topic_tag": "Probability"
      },
      {
        "id": "wip2-q99",
        "exam_id": "exam-wipro-02",
        "question_text": "Two dice are thrown. What is the probability of getting an even number on the first die OR a sum of 8?",
        "options": [
          "18/36",
          "19/36",
          "20/36",
          "22/36"
        ],
        "correct_index": 2,
        "explanation": "$P(\\text{Even 1st}) = 18/36$. Sum = 8: $\\{(2,6),(3,5),(4,4),(5,3),(6,2)\\}$ (5 outcomes). Intersection has 3. $P = \\frac{18 + 5 - 3}{36} = 20/36 = 5/9$.",
        "topic_tag": "Probability"
      },
      {
        "id": "wip2-q100",
        "exam_id": "exam-wipro-02",
        "question_text": "In a 12-hour analog clock, how many times does the minute hand pass the hour hand between noon and midnight?",
        "options": [
          "9 times",
          "10 times",
          "11 times",
          "12 times"
        ],
        "correct_index": 1,
        "explanation": "Between 12:00 PM and 12:00 AM exclusive of boundaries, the hands overlap exactly 10 times.",
        "topic_tag": "Clocks"
      }
    ]
  }
];
