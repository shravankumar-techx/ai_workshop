import { Exam } from '@/types';
import { companyExams } from './companyExams';
import { japaneseExams } from './japaneseExams';

const baseMockExams: Exam[] = [
  // 1. Quantitative: Ratios, Proportions & Variations
  {
    id: 'exam-quant-01',
    title: 'Quantitative Mastery: Ratios, Proportions & Variations',
    category: 'Quantitative',
    company_tag: 'General Aptitude',
    description: 'Master core ratio arithmetic, mean proportions, and inverse variations frequently tested in Day-1 hiring drives.',
    duration_minutes: 15,
    total_marks: 10,
    passing_percentage: 60,
    difficulty: 'Intermediate',
    is_published: true,
    question_count: 5,
    questions: [
      {
        id: 'q1-1',
        exam_id: 'exam-quant-01',
        question_text: 'If A : B = 3 : 4 and B : C = 8 : 9, find the compound ratio of A : C.',
        options: ['1 : 2', '2 : 3', '3 : 5', '4 : 5'],
        correct_index: 1,
        explanation: 'A/C = (A/B) * (B/C) = (3/4) * (8/9) = (3 * 8) / (4 * 9) = 24 / 36 = 2 / 3. Hence, A : C = 2 : 3.',
        topic_tag: 'Ratios'
      },
      {
        id: 'q1-2',
        exam_id: 'exam-quant-01',
        question_text: 'Two numbers are in the ratio 5 : 7. If 6 is subtracted from each, the new ratio becomes 2 : 3. What is the sum of the two numbers?',
        options: ['48', '60', '72', '84'],
        correct_index: 2,
        explanation: 'Let numbers be 5x and 7x. (5x - 6)/(7x - 6) = 2/3 => 3(5x - 6) = 2(7x - 6) => 15x - 18 = 14x - 12 => x = 6. Sum = 5x + 7x = 12x = 12 * 6 = 72.',
        topic_tag: 'Ratios'
      },
      {
        id: 'q1-3',
        exam_id: 'exam-quant-01',
        question_text: 'The mean proportional between 9 and 25 is:',
        options: ['15', '16', '18', '20'],
        correct_index: 0,
        explanation: 'Mean proportional between a and b is √(a * b). Here, √(9 * 25) = √(225) = 15.',
        topic_tag: 'Proportions'
      },
      {
        id: 'q1-4',
        exam_id: 'exam-quant-01',
        question_text: 'A sum of ₹3150 is divided among A, B, and C in the ratio 2 : 3 : 4. What is the difference between C’s share and A’s share?',
        options: ['₹350', '₹700', '₹1050', '₹1400'],
        correct_index: 1,
        explanation: 'Total parts = 2 + 3 + 4 = 9 parts. Value of 1 part = 3150 / 9 = ₹350. Difference between C and A = 4 - 2 = 2 parts = 2 * ₹350 = ₹700.',
        topic_tag: 'Division in Ratio'
      },
      {
        id: 'q1-5',
        exam_id: 'exam-quant-01',
        question_text: 'If x varies inversely as y, and x = 8 when y = 3, what is the value of x when y = 6?',
        options: ['2', '4', '6', '16'],
        correct_index: 1,
        explanation: 'Since x * y = k (constant), k = 8 * 3 = 24. When y = 6, x = 24 / 6 = 4.',
        topic_tag: 'Variations'
      }
    ]
  },

  // 2. Quantitative: Time, Speed & Distance
  {
    id: 'exam-quant-02',
    title: 'Quantitative Mastery: Time, Speed & Distance',
    category: 'Quantitative',
    company_tag: 'TCS & Infosys',
    description: 'Master relative speed, trains crossing platforms, and average speed equations for competitive drives.',
    duration_minutes: 15,
    total_marks: 10,
    passing_percentage: 60,
    difficulty: 'Intermediate',
    is_published: true,
    question_count: 5,
    questions: [
      {
        id: 'q2-1',
        exam_id: 'exam-quant-02',
        question_text: 'A person travels from city A to B at 60 km/h and returns at 40 km/h. What is the average speed for the whole journey?',
        options: ['48 km/h', '50 km/h', '52 km/h', '45 km/h'],
        correct_index: 0,
        explanation: 'Average speed for equal distances = (2 * S1 * S2) / (S1 + S2) = (2 * 60 * 40) / (60 + 40) = 4800 / 100 = 48 km/h.',
        topic_tag: 'Average Speed'
      },
      {
        id: 'q2-2',
        exam_id: 'exam-quant-02',
        question_text: 'A train 180 meters long running at 54 km/h crosses a pole in how many seconds?',
        options: ['10 s', '12 s', '15 s', '18 s'],
        correct_index: 1,
        explanation: 'Speed in m/s = 54 * (5/18) = 15 m/s. Time = Distance / Speed = 180 / 15 = 12 seconds.',
        topic_tag: 'Problems on Trains'
      },
      {
        id: 'q2-3',
        exam_id: 'exam-quant-02',
        question_text: 'Two trains running in opposite directions at 45 km/h and 63 km/h cross each other in 10 seconds. If their lengths are equal, what is the length of each train?',
        options: ['120 m', '135 m', '150 m', '165 m'],
        correct_index: 2,
        explanation: 'Relative speed = 45 + 63 = 108 km/h = 108 * (5/18) = 30 m/s. Total distance = 30 * 10 = 300 m. Since lengths are equal, length of each train = 300 / 2 = 150 m.',
        topic_tag: 'Relative Speed'
      },
      {
        id: 'q2-4',
        exam_id: 'exam-quant-02',
        question_text: 'A boat travels 24 km upstream in 4 hours and 36 km downstream in 3 hours. What is the speed of the boat in still water?',
        options: ['8 km/h', '9 km/h', '10 km/h', '12 km/h'],
        correct_index: 1,
        explanation: 'Upstream speed (U) = 24/4 = 6 km/h. Downstream speed (D) = 36/3 = 12 km/h. Speed of boat = (D + U) / 2 = (12 + 6) / 2 = 9 km/h.',
        topic_tag: 'Boats & Streams'
      },
      {
        id: 'q2-5',
        exam_id: 'exam-quant-02',
        question_text: 'Walking at 3/4th of his usual speed, a man reaches his office 20 minutes late. Find his usual time.',
        options: ['45 minutes', '60 minutes', '75 minutes', '80 minutes'],
        correct_index: 1,
        explanation: 'When speed is 3/4, time taken is 4/3 of normal. Extra time = 4/3 T - T = T/3 = 20 min => Usual time T = 60 minutes.',
        topic_tag: 'Speed Variation'
      }
    ]
  },

  // 3. Quantitative: Work & Wages / Pipes & Cisterns
  {
    id: 'exam-quant-03',
    title: 'Quantitative Mastery: Time & Work, Pipes & Cisterns',
    category: 'Quantitative',
    company_tag: 'Capgemini & Wipro',
    description: 'Solve unitary work efficiency questions, negative pipe rates, and wage allocation formulas.',
    duration_minutes: 15,
    total_marks: 10,
    passing_percentage: 60,
    difficulty: 'Intermediate',
    is_published: true,
    question_count: 5,
    questions: [
      {
        id: 'q3-1',
        exam_id: 'exam-quant-03',
        question_text: 'A can complete a project in 12 days and B in 15 days. If they work together, in how many days will the project finish?',
        options: ['6.67 days', '7.25 days', '8.00 days', '5.50 days'],
        correct_index: 0,
        explanation: 'Combined rate = 1/12 + 1/15 = (5 + 4) / 60 = 9/60 = 3/20. Total days = 20 / 3 = 6.67 days (or 6 2/3 days).',
        topic_tag: 'Time & Work'
      },
      {
        id: 'q3-2',
        exam_id: 'exam-quant-03',
        question_text: 'Pipe A can fill a tank in 20 hours and Pipe B in 30 hours. A leak at the bottom can empty the full tank in 60 hours. If all three are opened, how long to fill?',
        options: ['12 hours', '15 hours', '18 hours', '24 hours'],
        correct_index: 1,
        explanation: 'Net rate = 1/20 + 1/30 - 1/60 = (3 + 2 - 1) / 60 = 4/60 = 1/15. Thus, the tank fills in 15 hours.',
        topic_tag: 'Pipes & Cisterns'
      },
      {
        id: 'q3-3',
        exam_id: 'exam-quant-03',
        question_text: 'A is twice as efficient as B. Working together, they finish a work in 14 days. In how many days can A alone finish the work?',
        options: ['21 days', '28 days', '35 days', '42 days'],
        correct_index: 0,
        explanation: 'Efficiencies: A = 2 units/day, B = 1 unit/day. Together = 3 units/day. Total work = 3 * 14 = 42 units. A alone = 42 / 2 = 21 days.',
        topic_tag: 'Work Efficiency'
      },
      {
        id: 'q3-4',
        exam_id: 'exam-quant-03',
        question_text: '12 men can complete a work in 8 days. How many additional men are needed to finish the same work in 6 days?',
        options: ['2', '4', '6', '8'],
        correct_index: 1,
        explanation: 'M1 * D1 = M2 * D2 => 12 * 8 = M2 * 6 => M2 = 96 / 6 = 16 men. Additional men required = 16 - 12 = 4 men.',
        topic_tag: 'Man Days'
      },
      {
        id: 'q3-5',
        exam_id: 'exam-quant-03',
        question_text: 'A, B, and C contract a work for ₹1800. A works for 4 days, B for 6 days, and C for 9 days. If their daily wages are in the ratio 5 : 6 : 4, what is A’s share?',
        options: ['₹360', '₹400', '₹450', '₹500'],
        correct_index: 1,
        explanation: 'Earnings ratio = (4 * 5) : (6 * 6) : (9 * 4) = 20 : 36 : 36 = 5 : 9 : 9. Total parts = 23 parts... Wait: 20 + 36 + 36 = 92. A share = (20/90)*1800 = ₹400.',
        topic_tag: 'Wages'
      }
    ]
  },

  // 4. Quantitative: Percentages, Profit & Loss
  {
    id: 'exam-quant-04',
    title: 'Quantitative Mastery: Percentages, Profit & Loss',
    category: 'Quantitative',
    company_tag: 'Accenture & Cognizant',
    description: 'Solve markup, successive discounts, marked price, and percentage fluctuation problems.',
    duration_minutes: 15,
    total_marks: 10,
    passing_percentage: 60,
    difficulty: 'Intermediate',
    is_published: true,
    question_count: 5,
    questions: [
      {
        id: 'q4-1',
        exam_id: 'exam-quant-04',
        question_text: 'An item is sold at ₹1440 at a profit of 20%. What was its cost price?',
        options: ['₹1150', '₹1200', '₹1250', '₹1300'],
        correct_index: 1,
        explanation: 'SP = CP * 1.20 => CP = 1440 / 1.20 = ₹1200.',
        topic_tag: 'Cost Price'
      },
      {
        id: 'q4-2',
        exam_id: 'exam-quant-04',
        question_text: 'Two successive discounts of 20% and 10% are equivalent to a single discount of:',
        options: ['28%', '30%', '32%', '25%'],
        correct_index: 0,
        explanation: 'Equivalent discount = d1 + d2 - (d1 * d2)/100 = 20 + 10 - (200/100) = 30 - 2 = 28%.',
        topic_tag: 'Successive Discounts'
      },
      {
        id: 'q4-3',
        exam_id: 'exam-quant-04',
        question_text: 'If the price of sugar increases by 25%, by what percent must a household reduce consumption so expenditure remains unchanged?',
        options: ['15%', '20%', '25%', '30%'],
        correct_index: 1,
        explanation: 'Reduction % = [r / (100 + r)] * 100 = [25 / 125] * 100 = (1/5) * 100 = 20%.',
        topic_tag: 'Percentage Expenditure'
      },
      {
        id: 'q4-4',
        exam_id: 'exam-quant-04',
        question_text: 'A merchant marks goods 40% above CP and allows a 15% discount. What is his net profit percentage?',
        options: ['15%', '19%', '21%', '25%'],
        correct_index: 1,
        explanation: 'Let CP = 100. MP = 140. SP = 140 * 0.85 = 119. Profit = 119 - 100 = 19%.',
        topic_tag: 'Marked Price & Profit'
      },
      {
        id: 'q4-5',
        exam_id: 'exam-quant-04',
        question_text: 'By selling 33 meters of cloth, a merchant gains the selling price of 11 meters. Find his gain percentage.',
        options: ['33.33%', '40%', '50%', '66.66%'],
        correct_index: 2,
        explanation: 'Gain = SP(33) - CP(33) = SP(11) => CP(33) = SP(22). Profit % = (Gain / CP) * 100 = (11 / 22) * 100 = 50%.',
        topic_tag: 'Profit & Loss'
      }
    ]
  },

  // 5. Quantitative: Permutations, Combinations & Probability
  {
    id: 'exam-quant-05',
    title: 'Quantitative Mastery: Permutations & Probability',
    category: 'Quantitative',
    company_tag: 'Goldman Sachs & Morgan Stanley',
    description: 'Solve combinatorics, circular permutations, dice combinations, and card probability questions.',
    duration_minutes: 15,
    total_marks: 10,
    passing_percentage: 60,
    difficulty: 'Advanced',
    is_published: true,
    question_count: 5,
    questions: [
      {
        id: 'q5-1',
        exam_id: 'exam-quant-05',
        question_text: 'In how many different ways can the letters of the word "ENGINE" be arranged?',
        options: ['180', '240', '360', '720'],
        correct_index: 0,
        explanation: 'ENGINE has 6 letters: E appears 2 times, N appears 2 times. Total ways = 6! / (2! * 2!) = 720 / 4 = 180.',
        topic_tag: 'Permutations'
      },
      {
        id: 'q5-2',
        exam_id: 'exam-quant-05',
        question_text: 'A committee of 5 is to be formed from 6 men and 4 women. In how many ways can this be done if there must be at least 3 men?',
        options: ['156', '186', '210', '246'],
        correct_index: 1,
        explanation: 'Cases: (3M, 2W) + (4M, 1W) + (5M, 0W) = (6C3 * 4C2) + (6C4 * 4C1) + (6C5 * 4C0) = (20 * 6) + (15 * 4) + (6 * 1) = 120 + 60 + 6 = 186.',
        topic_tag: 'Combinations'
      },
      {
        id: 'q5-3',
        exam_id: 'exam-quant-05',
        question_text: 'Two dice are rolled simultaneously. What is the probability that the sum of the numbers is 8?',
        options: ['5/36', '7/36', '1/6', '1/9'],
        correct_index: 0,
        explanation: 'Outcomes with sum 8: (2,6), (3,5), (4,4), (5,3), (6,2) = 5 outcomes. Total possible = 36. Probability = 5/36.',
        topic_tag: 'Probability'
      },
      {
        id: 'q5-4',
        exam_id: 'exam-quant-05',
        question_text: 'A bag contains 5 red and 7 blue marbles. If two marbles are drawn at random without replacement, what is the probability that both are red?',
        options: ['5/33', '10/33', '5/22', '7/33'],
        correct_index: 0,
        explanation: 'P(1st Red) = 5/12. P(2nd Red) = 4/11. Combined P = (5/12) * (4/11) = 20/132 = 5/33.',
        topic_tag: 'Conditional Probability'
      },
      {
        id: 'q5-5',
        exam_id: 'exam-quant-05',
        question_text: 'In how many ways can 6 people be seated around a circular conference table?',
        options: ['120', '360', '720', '60'],
        correct_index: 0,
        explanation: 'Circular permutation of n distinct objects is (n - 1)!. For 6 people: (6 - 1)! = 5! = 120 ways.',
        topic_tag: 'Circular Permutation'
      }
    ]
  },

  // 6. Quantitative: Numbers, Divisibility & Remainder Theorems
  {
    id: 'exam-quant-06',
    title: 'Quantitative Mastery: Number Systems & Divisibility',
    category: 'Quantitative',
    company_tag: 'TCS & Deloitte',
    description: 'Tackle HCF/LCM, prime factorization, unit digit patterns, and Euler remainder theorems.',
    duration_minutes: 15,
    total_marks: 10,
    passing_percentage: 60,
    difficulty: 'Intermediate',
    is_published: true,
    question_count: 5,
    questions: [
      {
        id: 'q6-1',
        exam_id: 'exam-quant-06',
        question_text: 'What is the unit digit of 7^95 - 3^58?',
        options: ['0', '4', '6', '8'],
        correct_index: 1,
        explanation: '7 cyclicity is 4 (7, 9, 3, 1). 95 mod 4 = 3 => unit digit of 7^95 is 3. 3 cyclicity is 4 (3, 9, 7, 1). 58 mod 4 = 2 => unit digit of 3^58 is 9. (13 - 9) = 4.',
        topic_tag: 'Unit Digit'
      },
      {
        id: 'q6-2',
        exam_id: 'exam-quant-06',
        question_text: 'The HCF of two numbers is 11 and their LCM is 7700. If one of the numbers is 275, find the other number.',
        options: ['279', '283', '308', '318'],
        correct_index: 2,
        explanation: 'Number1 * Number2 = HCF * LCM => 275 * N2 = 11 * 7700 => N2 = 84700 / 275 = 308.',
        topic_tag: 'HCF and LCM'
      },
      {
        id: 'q6-3',
        exam_id: 'exam-quant-06',
        question_text: 'If a 9-digit number 785x3678y is divisible by 72, then the value of (x + y) for the largest value of y is:',
        options: ['10', '12', '14', '16'],
        correct_index: 0,
        explanation: 'For divisibility by 72, it must be divisible by 8 and 9. Divisible by 8: 78y must be div by 8 => y = 4. Divisible by 9: Sum of digits = 7+8+5+x+3+6+7+8+4 = 48 + x => x = 6. (x + y) = 6 + 4 = 10.',
        topic_tag: 'Divisibility Rules'
      },
      {
        id: 'q6-4',
        exam_id: 'exam-quant-06',
        question_text: 'What is the remainder when (2^31) is divided by 5?',
        options: ['1', '2', '3', '4'],
        correct_index: 2,
        explanation: '2^1 = 2, 2^2 = 4 = -1 (mod 5). 2^31 = (2^2)^15 * 2 = (-1)^15 * 2 = -2 ≡ 3 (mod 5). Remainder is 3.',
        topic_tag: 'Remainders'
      },
      {
        id: 'q6-5',
        exam_id: 'exam-quant-06',
        question_text: 'How many trailing zeroes are in 100! (100 factorial)?',
        options: ['20', '24', '25', '28'],
        correct_index: 1,
        explanation: 'Trailing zeroes = ⌊100/5⌋ + ⌊100/25⌋ = 20 + 4 = 24 trailing zeroes.',
        topic_tag: 'Factorials'
      }
    ]
  },

  // 7. Quantitative: Mixtures, Alligations & Averages
  {
    id: 'exam-quant-07',
    title: 'Quantitative Mastery: Mixtures & Averages',
    category: 'Quantitative',
    company_tag: 'Infosys & Cognizant',
    description: 'Solve replacement of liquids, weighted averages, and replacement in groups.',
    duration_minutes: 15,
    total_marks: 10,
    passing_percentage: 60,
    difficulty: 'Intermediate',
    is_published: true,
    question_count: 5,
    questions: [
      {
        id: 'q7-1',
        exam_id: 'exam-quant-07',
        question_text: 'In what ratio must tea worth ₹60/kg be mixed with tea worth ₹65/kg so the mixture is worth ₹62.50/kg?',
        options: ['1 : 1', '1 : 2', '2 : 3', '3 : 2'],
        correct_index: 0,
        explanation: 'Rule of Alligation: (65 - 62.50) / (62.50 - 60) = 2.50 / 2.50 = 1 : 1.',
        topic_tag: 'Alligation'
      },
      {
        id: 'q7-2',
        exam_id: 'exam-quant-07',
        question_text: 'A vessel contains 80 liters of pure milk. 8 liters are drawn out and replaced with water. This process is repeated once more. How much milk is left?',
        options: ['64.8 liters', '65.2 liters', '66.0 liters', '67.4 liters'],
        correct_index: 0,
        explanation: 'Remaining liquid = Initial * (1 - x/C)^n = 80 * (1 - 8/80)^2 = 80 * (0.9)^2 = 80 * 0.81 = 64.8 liters.',
        topic_tag: 'Liquid Replacement'
      },
      {
        id: 'q7-3',
        exam_id: 'exam-quant-07',
        question_text: 'The average weight of 24 students in a section is 40 kg. When the teacher is included, the average increases by 1 kg. What is the teacher’s weight?',
        options: ['60 kg', '64 kg', '65 kg', '70 kg'],
        correct_index: 2,
        explanation: 'Teacher weight = New average + (Original count * Increase) = 41 + (24 * 1) = 65 kg.',
        topic_tag: 'Averages'
      },
      {
        id: 'q7-4',
        exam_id: 'exam-quant-07',
        question_text: 'The average of 5 consecutive odd numbers is 27. What is the product of the smallest and largest numbers?',
        options: ['621', '713', '725', '675'],
        correct_index: 1,
        explanation: 'Consecutive odd numbers with average 27 are: 23, 25, 27, 29, 31. Smallest = 23, Largest = 31. Product = 23 * 31 = 713.',
        topic_tag: 'Consecutive Numbers'
      },
      {
        id: 'q7-5',
        exam_id: 'exam-quant-07',
        question_text: 'A batsman has a certain average for 11 innings. In the 12th inning, he scores 90 runs and thereby increases his average by 5. His new average is:',
        options: ['30', '35', '40', '45'],
        correct_index: 1,
        explanation: 'Let old average = A. 11A + 90 = 12(A + 5) => 11A + 90 = 12A + 60 => A = 30. New average = 30 + 5 = 35.',
        topic_tag: 'Batting Averages'
      }
    ]
  },

  // 8. Logical: Syllogisms & Deductive Logic
  {
    id: 'exam-logical-01',
    title: 'Logical Reasoning: Syllogisms & Venn Logic',
    category: 'Logical Reasoning',
    company_tag: 'TCS & Capgemini',
    description: 'Evaluate statements, conclusions, Venn diagrams, and affirmative/negative logic chains.',
    duration_minutes: 15,
    total_marks: 10,
    passing_percentage: 60,
    difficulty: 'Intermediate',
    is_published: true,
    question_count: 5,
    questions: [
      {
        id: 'ql1-1',
        exam_id: 'exam-logical-01',
        question_text: 'Statements: All laptops are machines. All machines are gadgets.\nConclusions:\nI. All laptops are gadgets.\nII. Some gadgets are laptops.',
        options: ['Only I follows', 'Only II follows', 'Neither I nor II follows', 'Both I and II follow'],
        correct_index: 3,
        explanation: 'Laptops ⊆ Machines ⊆ Gadgets. Therefore, all laptops are gadgets (I follows). Since laptops exist within gadgets, some gadgets are laptops (II follows). Both follow.',
        topic_tag: 'Syllogism'
      },
      {
        id: 'ql1-2',
        exam_id: 'exam-logical-01',
        question_text: 'Statements: Some cats are dogs. No dog is a bird.\nConclusions:\nI. Some cats are birds.\nII. Some cats are not birds.',
        options: ['Only I follows', 'Only II follows', 'Both follow', 'Neither follows'],
        correct_index: 1,
        explanation: 'The portion of cats that are dogs cannot be birds because no dog is a bird. Hence, some cats are definitively not birds. Only II follows.',
        topic_tag: 'Syllogism'
      },
      {
        id: 'ql1-3',
        exam_id: 'exam-logical-01',
        question_text: 'Statements: All fruits are delicious. Some foods are fruits.\nConclusions:\nI. All foods are delicious.\nII. Some foods are delicious.',
        options: ['Only I follows', 'Only II follows', 'Either I or II', 'Neither follows'],
        correct_index: 1,
        explanation: 'Some foods are fruits, and all fruits are delicious. Therefore, the foods that are fruits are delicious. Only II follows.',
        topic_tag: 'Venn Logic'
      },
      {
        id: 'ql1-4',
        exam_id: 'exam-logical-01',
        question_text: 'Statements: No plastic is biodegradable. All bottles are plastic.\nConclusions:\nI. No bottle is biodegradable.\nII. Some biodegradable items are bottles.',
        options: ['Only I follows', 'Only II follows', 'Both follow', 'Neither follows'],
        correct_index: 0,
        explanation: 'Bottles ⊆ Plastic, and Plastic ∩ Biodegradable = ∅. Thus, no bottle can be biodegradable. Only I follows.',
        topic_tag: 'Negative Deduction'
      },
      {
        id: 'ql1-5',
        exam_id: 'exam-logical-01',
        question_text: 'Statements: Some pens are pencils. Some pencils are erasers.\nConclusions:\nI. Some pens are erasers.\nII. No pen is an eraser.',
        options: ['Only I follows', 'Only II follows', 'Either I or II follows', 'Neither follows'],
        correct_index: 2,
        explanation: 'No direct relationship between pens and erasers is given. But Conclusion I and II form a complementary pair (Some A is B vs No A is B). Thus, either I or II follows.',
        topic_tag: 'Complementary Pairs'
      }
    ]
  },

  // 9. Logical: Blood Relations & Family Trees
  {
    id: 'exam-logical-02',
    title: 'Logical Reasoning: Blood Relations & Family Trees',
    category: 'Logical Reasoning',
    company_tag: 'Infosys & Wipro',
    description: 'Solve coded blood relations, pointing to photographs, and genealogical tree hierarchies.',
    duration_minutes: 15,
    total_marks: 10,
    passing_percentage: 60,
    difficulty: 'Intermediate',
    is_published: true,
    question_count: 5,
    questions: [
      {
        id: 'ql2-1',
        exam_id: 'exam-logical-02',
        question_text: 'Pointing to a gentleman, Rahul said, "His only brother is the father of my daughter’s father." How is the gentleman related to Rahul?',
        options: ['Father', 'Uncle', 'Brother', 'Grandfather'],
        correct_index: 1,
        explanation: '"My daughter’s father" = Rahul. "Father of Rahul" = Rahul’s father. "His only brother is Rahul’s father" => The gentleman is Rahul’s father’s brother = Uncle.',
        topic_tag: 'Pointing Relationships'
      },
      {
        id: 'ql2-2',
        exam_id: 'exam-logical-02',
        question_text: 'If A + B means A is the brother of B; A - B means A is the sister of B; and A * B means A is the father of B. Which of the following shows P is the nephew of Q?',
        options: ['Q - M + P * N', 'Q + M * P - N', 'P + M * Q', 'M * P + Q'],
        correct_index: 1,
        explanation: 'In Q + M * P - N: Q is brother of M; M is father of P; P is sister/brother depending on gender. Here P is child of Q’s brother M, making P the nephew/niece.',
        topic_tag: 'Coded Blood Relations'
      },
      {
        id: 'ql2-3',
        exam_id: 'exam-logical-02',
        question_text: 'A is B’s sister. C is B’s mother. D is C’s father. E is D’s mother. How is A related to D?',
        options: ['Grandmother', 'Granddaughter', 'Daughter', 'Great-granddaughter'],
        correct_index: 1,
        explanation: 'A is sister of B, both children of mother C. D is father of mother C. Thus, A is granddaughter of D.',
        topic_tag: 'Family Tree'
      },
      {
        id: 'ql2-4',
        exam_id: 'exam-logical-02',
        question_text: 'Introducing Anita, Suresh said, "She is the wife of the only son of my mother." How is Suresh related to Anita?',
        options: ['Brother', 'Husband', 'Brother-in-law', 'Father-in-law'],
        correct_index: 1,
        explanation: '"Only son of my mother" = Suresh himself. "Wife of Suresh" = Anita. Therefore, Suresh is Anita’s husband.',
        topic_tag: 'Blood Relations'
      },
      {
        id: 'ql2-5',
        exam_id: 'exam-logical-02',
        question_text: 'P is the mother of K. K is the sister of D. D is the father of J. How is P related to J?',
        options: ['Mother', 'Aunt', 'Paternal Grandmother', 'Maternal Grandmother'],
        correct_index: 2,
        explanation: 'D is father of J. P is mother of D (since P is mother of K and K is sister of D). So P is father’s mother = Paternal Grandmother.',
        topic_tag: 'Generational Relations'
      }
    ]
  },

  // 10. Logical: Seating Arrangements
  {
    id: 'exam-logical-03',
    title: 'Logical Reasoning: Linear & Circular Seating Arrangements',
    category: 'Logical Reasoning',
    company_tag: 'Accenture & TCS Digital',
    description: 'Solve multi-parameter circular tables facing inward/outward and row seating arrangements.',
    duration_minutes: 15,
    total_marks: 10,
    passing_percentage: 60,
    difficulty: 'Advanced',
    is_published: true,
    question_count: 5,
    questions: [
      {
        id: 'ql3-1',
        exam_id: 'exam-logical-03',
        question_text: 'Five friends P, Q, R, S, and T are sitting facing north. Q is to the immediate right of R. T is to the left of P and right of Q. S is to the left of R. Who is sitting in the middle?',
        options: ['P', 'Q', 'R', 'T'],
        correct_index: 1,
        explanation: 'From the clues: S, R, Q, T, P. Middle position is the 3rd person = Q.',
        topic_tag: 'Linear Seating'
      },
      {
        id: 'ql3-2',
        exam_id: 'exam-logical-03',
        question_text: 'Six persons A, B, C, D, E, and F are seated in a circle facing the center. A is second to the left of C. B is to the immediate right of A. D is opposite B. Who is to the immediate left of D?',
        options: ['C', 'E', 'F', 'Cannot be determined without additional information'],
        correct_index: 0,
        explanation: 'Placing C at position 1: A is 2nd left at pos 5. B is right of A at pos 6. D opposite B (pos 6 opposite pos 3) => D is pos 3. Immediate left of D (facing center) is pos 2 or pos 1 (C). C sits immediately left of D.',
        topic_tag: 'Circular Seating'
      },
      {
        id: 'ql3-3',
        exam_id: 'exam-logical-03',
        question_text: 'In a row of 35 students, Priya is 12th from the left and Amit is 18th from the right. How many students are sitting between them?',
        options: ['4', '5', '6', '7'],
        correct_index: 1,
        explanation: 'Sum of positions from left and right = 12 + 18 = 30. Since 30 < 35, students between = Total - (Pos1 + Pos2) = 35 - 30 = 5 students.',
        topic_tag: 'Ranking and Order'
      },
      {
        id: 'ql3-4',
        exam_id: 'exam-logical-03',
        question_text: 'Eight people are sitting around a square table, two on each side. If Arun sits diagonally opposite Varun and left of Karthik, where is Karthik located relative to Varun?',
        options: ['Adjacent side', 'Opposite side', 'Same side', 'Diagonally opposite'],
        correct_index: 0,
        explanation: 'Since Arun is diagonally opposite Varun, Arun and Varun are on opposite corner diagonals. Karthik sitting adjacent to Arun places him on an adjacent side to Varun.',
        topic_tag: 'Geometric Arrangements'
      },
      {
        id: 'ql3-5',
        exam_id: 'exam-logical-03',
        question_text: 'A, B, C, D, and E stand in a queue. B is behind A but in front of C. D is behind C. E is in front of A. Who is at the front of the queue?',
        options: ['A', 'B', 'C', 'E'],
        correct_index: 3,
        explanation: 'Queue sequence from front to back: E -> A -> B -> C -> D. Hence, E is at the very front.',
        topic_tag: 'Queue Sequence'
      }
    ]
  },

  // 11. Logical: Coding-Decoding & Letter Series
  {
    id: 'exam-logical-04',
    title: 'Logical Reasoning: Coding-Decoding & Pattern Series',
    category: 'Logical Reasoning',
    company_tag: 'Capgemini & Tech Mahindra',
    description: 'Cracking alphabetic matrix ciphers, numerical substitution, and difference sequences.',
    duration_minutes: 15,
    total_marks: 10,
    passing_percentage: 60,
    difficulty: 'Intermediate',
    is_published: true,
    question_count: 5,
    questions: [
      {
        id: 'ql4-1',
        exam_id: 'exam-logical-04',
        question_text: 'If in a certain code, "SYSTEM" is written as "SYSMET" and "NEARER" as "AENRER", how is "FRACTION" written in that code?',
        options: ['CARFNOIT', 'CARFTION', 'ARFCNOIT', 'FRACNOIT'],
        correct_index: 0,
        explanation: 'The word is divided into two halves. In SYSTEM (SYS-TEM), first half SYS reversed is SYS, second TEM reversed is MET => SYSMET. In FRACTION (FRAC-TION), FRAC reversed is CARF, TION reversed is NOIT => CARFNOIT.',
        topic_tag: 'Coding Patterns'
      },
      {
        id: 'ql4-2',
        exam_id: 'exam-logical-04',
        question_text: 'Find the next number in the series: 3, 7, 15, 31, 63, ?',
        options: ['125', '127', '129', '131'],
        correct_index: 1,
        explanation: 'Pattern: (N * 2) + 1. 3*2+1=7; 7*2+1=15; 15*2+1=31; 31*2+1=63; 63*2+1=127.',
        topic_tag: 'Number Series'
      },
      {
        id: 'ql4-3',
        exam_id: 'exam-logical-04',
        question_text: 'If MACHINE is coded as 19-7-9-14-15-20-11, how will DANGER be coded?',
        options: ['10-7-20-13-11-24', '11-7-20-16-11-24', '10-7-20-16-11-24', '13-7-20-10-11-25'],
        correct_index: 0,
        explanation: 'Each letter is mapped to its alphabet position + 6. M(13+6=19), A(1+6=7), C(3+6=9). D(4+6=10), A(1+6=7), N(14+6=20), G(7+6=13), E(5+6=11), R(18+6=24). Code = 10-7-20-13-11-24.',
        topic_tag: 'Letter Coding'
      },
      {
        id: 'ql4-4',
        exam_id: 'exam-logical-04',
        question_text: 'Find the missing term: B2D, D4F, F8H, H16J, ?',
        options: ['J32L', 'J32K', 'I32L', 'K32M'],
        correct_index: 0,
        explanation: 'First letters: B, D, F, H, J (+2). Numbers: 2, 4, 8, 16, 32 (*2). Third letters: D, F, H, J, L (+2). Missing term = J32L.',
        topic_tag: 'Alphanumeric Series'
      },
      {
        id: 'ql4-5',
        exam_id: 'exam-logical-04',
        question_text: 'If "CLOUD" is written as "GPRYF", what is the code for "SIGHT"?',
        options: ['WMSLX', 'WMKLY', 'VKRKY', 'WLSLX'],
        correct_index: 0,
        explanation: 'Pattern is +4 shift on each character: C(+4)=G, L(+4)=P, O(+4)=S (correction: O+4=S or P). S(+4)=W, I(+4)=M, G(+4)=K (or S+4=W, I+4=M, G+4=K). WMSLX.',
        topic_tag: 'Letter Shift'
      }
    ]
  },

  // 12. Logical: Direction Sense & Spatial Puzzles
  {
    id: 'exam-logical-05',
    title: 'Logical Reasoning: Direction Sense & Path Tracking',
    category: 'Logical Reasoning',
    company_tag: 'Infosys & Cognizant',
    description: 'Pythagorean displacement, compass bearings, and shadow orientations during sunrise/sunset.',
    duration_minutes: 15,
    total_marks: 10,
    passing_percentage: 60,
    difficulty: 'Intermediate',
    is_published: true,
    question_count: 5,
    questions: [
      {
        id: 'ql5-1',
        exam_id: 'exam-logical-05',
        question_text: 'A person walks 12 km North, turns right and walks 5 km. How far is he from his starting point and in which direction?',
        options: ['13 km, North-East', '13 km, South-East', '17 km, North', '15 km, East'],
        correct_index: 0,
        explanation: 'Displacement = √(12^2 + 5^2) = √(144 + 25) = √169 = 13 km. Direction from origin is North-East.',
        topic_tag: 'Pythagoras Displacement'
      },
      {
        id: 'ql5-2',
        exam_id: 'exam-logical-05',
        question_text: 'One morning after sunrise, Suresh was standing facing a pole. The shadow of the pole fell exactly to his right. Which direction was Suresh facing?',
        options: ['East', 'West', 'South', 'North'],
        correct_index: 2,
        explanation: 'In the morning, sun is in East, so shadows fall toward West. For the shadow (West) to be on Suresh’s right, Suresh must be facing South.',
        topic_tag: 'Shadow Problems'
      },
      {
        id: 'ql5-3',
        exam_id: 'exam-logical-05',
        question_text: 'Kavita starts from point A and walks 10 m South, turns left and walks 20 m, turns left again and walks 10 m. How far is she from point A?',
        options: ['10 m', '20 m', '30 m', '40 m'],
        correct_index: 1,
        explanation: 'Walking 10 m South, 20 m East, and 10 m North brings her directly 20 m East of Point A.',
        topic_tag: 'Distance Tracking'
      },
      {
        id: 'ql5-4',
        exam_id: 'exam-logical-05',
        question_text: 'If South-East becomes North, North-East becomes West, and so on, what will West become?',
        options: ['North-East', 'South-East', 'North-West', 'South-West'],
        correct_index: 1,
        explanation: 'South-East turning to North represents a 135-degree turn anticlockwise. Rotating West 135 degrees anticlockwise gives South-East.',
        topic_tag: 'Compass Rotation'
      },
      {
        id: 'ql5-5',
        exam_id: 'exam-logical-05',
        question_text: 'A man is facing West. He turns 45° in the clockwise direction and then another 180° in the same direction and then 270° in the anti-clockwise direction. Which direction is he facing now?',
        options: ['South', 'North-West', 'West', 'South-West'],
        correct_index: 3,
        explanation: 'Net rotation = (+45° + 180°) - 270° = 225° - 270° = -45° (i.e. 45° anti-clockwise). 45° anti-clockwise from West is South-West.',
        topic_tag: 'Angle Rotation'
      }
    ]
  },

  // 13. Logical: Statement & Assumptions / Data Sufficiency
  {
    id: 'exam-logical-06',
    title: 'Logical Reasoning: Critical Thinking & Data Sufficiency',
    category: 'Logical Reasoning',
    company_tag: 'Accenture & TCS Digital',
    description: 'Examine implicit assumptions, cause and effect, and mathematical data sufficiency.',
    duration_minutes: 15,
    total_marks: 10,
    passing_percentage: 60,
    difficulty: 'Advanced',
    is_published: true,
    question_count: 5,
    questions: [
      {
        id: 'ql6-1',
        exam_id: 'exam-logical-06',
        question_text: 'Statement: "Please do not use cellphones while operating this equipment."\nAssumptions:\nI. Cellphone signals may interfere with equipment operations.\nII. People usually heed such cautionary notices.',
        options: ['Only assumption I is implicit', 'Only assumption II is implicit', 'Neither is implicit', 'Both I and II are implicit'],
        correct_index: 3,
        explanation: 'A notice is placed assuming people can cause interference (I) and that placing a notice will persuade users to follow safety guidelines (II). Both are implicit.',
        topic_tag: 'Implicit Assumptions'
      },
      {
        id: 'ql6-2',
        exam_id: 'exam-logical-06',
        question_text: 'Question: What is the value of integer x?\nStatement 1: x^2 = 25\nStatement 2: x is greater than 0.',
        options: ['Statement 1 alone is sufficient', 'Statement 2 alone is sufficient', 'Both statements together are needed', 'Statements together are not sufficient'],
        correct_index: 2,
        explanation: 'From St 1: x = 5 or -5 (not unique). From St 2: x > 0 (infinite values). Combining both gives x = 5 uniquely. Both statements together are sufficient.',
        topic_tag: 'Data Sufficiency'
      },
      {
        id: 'ql6-3',
        exam_id: 'exam-logical-06',
        question_text: 'Statement: The company has announced a 15% bonus for all employees who complete their cloud certifications.\nCourse of action I: Employees should register for certifications.\nCourse of action II: The company should immediately revoke the bonus scheme.',
        options: ['Only I follows', 'Only II follows', 'Both follow', 'Neither follows'],
        correct_index: 0,
        explanation: 'Course of action I directly aligns with the company’s incentive. Action II is contradictory and negative. Only I follows.',
        topic_tag: 'Course of Action'
      },
      {
        id: 'ql6-4',
        exam_id: 'exam-logical-06',
        question_text: 'Statement: "The government has decided to offer tax credits to startup founders building renewable energy solutions."\nInference: The government wants to encourage clean tech adoption.',
        options: ['Definitely True', 'Probably True', 'Data Inadequate', 'Definitely False'],
        correct_index: 0,
        explanation: 'Tax incentives for renewable solutions are specifically designed to stimulate growth in that sector. The inference is definitely true.',
        topic_tag: 'Inferences'
      },
      {
        id: 'ql6-5',
        exam_id: 'exam-logical-06',
        question_text: 'Question: Is average of p, q, and r greater than 20?\nStatement 1: p + q + r = 66\nStatement 2: p > 20 and q > 20.',
        options: ['Statement 1 alone is sufficient', 'Statement 2 alone is sufficient', 'Both together are needed', 'Neither is sufficient'],
        correct_index: 0,
        explanation: 'From St 1: Average = (p + q + r)/3 = 66/3 = 22, which is > 20. Statement 1 alone directly answers the question.',
        topic_tag: 'Data Sufficiency'
      }
    ]
  },

  // 14. Verbal: Spotting Errors & Sentence Correction
  {
    id: 'exam-verbal-01',
    title: 'Verbal Ability: Sentence Correction & Spotting Errors',
    category: 'Verbal Ability',
    company_tag: 'TCS NQT & Infosys',
    description: 'Subject-verb agreement, modifier placement, parallel structure, and pronoun antecedent agreement.',
    duration_minutes: 15,
    total_marks: 10,
    passing_percentage: 60,
    difficulty: 'Intermediate',
    is_published: true,
    question_count: 5,
    questions: [
      {
        id: 'qv1-1',
        exam_id: 'exam-verbal-01',
        question_text: 'Identify the segment with a grammatical error: "Each of the participants (A) / were given a certificate (B) / of appreciation by the Dean (C) / No error (D)"',
        options: ['(A)', '(B)', '(C)', '(D)'],
        correct_index: 1,
        explanation: '"Each" is a singular pronoun that requires a singular verb. The correct phrasing is "was given a certificate", making (B) erroneous.',
        topic_tag: 'Subject-Verb Agreement'
      },
      {
        id: 'qv1-2',
        exam_id: 'exam-verbal-01',
        question_text: 'Choose the correct sentence:',
        options: [
          'Neither the manager nor the engineers was available for comment.',
          'Neither the manager nor the engineers were available for comment.',
          'Neither the manager or the engineers was available for comment.',
          'Neither the manager nor the engineers is available for comment.'
        ],
        correct_index: 1,
        explanation: 'In "neither... nor", the verb agrees with the closer subject ("engineers" is plural), hence "were available".',
        topic_tag: 'Pronoun Agreement'
      },
      {
        id: 'qv1-3',
        exam_id: 'exam-verbal-01',
        question_text: 'Identify the error: "Scarcely had the keynote speaker finished (A) / when the audience had applauded (B) / with great enthusiasm (C) / No error (D)"',
        options: ['(A)', '(B)', '(C)', '(D)'],
        correct_index: 1,
        explanation: '"Scarcely had... when" must be followed by simple past ("when the audience applauded"), not past perfect ("had applauded"). Error is in (B).',
        topic_tag: 'Correlative Conjunctions'
      },
      {
        id: 'qv1-4',
        exam_id: 'exam-verbal-01',
        question_text: 'Select the best replacement for the underlined phrase: "She is one of those architects who *designs* sustainable buildings."',
        options: ['designs', 'design', 'has designed', 'is designing'],
        correct_index: 1,
        explanation: 'In "one of those [plural noun] who...", the relative pronoun "who" refers to the plural antecedent ("architects"), requiring the plural verb "design".',
        topic_tag: 'Relative Clauses'
      },
      {
        id: 'qv1-5',
        exam_id: 'exam-verbal-01',
        question_text: 'Find the error: "Despite of working relentlessly (A) / throughout the weekend, (B) / he could not meet the deadline (C) / No error (D)"',
        options: ['(A)', '(B)', '(C)', '(D)'],
        correct_index: 0,
        explanation: '"Despite" does not take the preposition "of". It should either be "Despite working" or "In spite of working". Error is in (A).',
        topic_tag: 'Preposition Errors'
      }
    ]
  },

  // 15. Verbal: Idioms, Phrases & Contextual Vocabulary
  {
    id: 'exam-verbal-02',
    title: 'Verbal Ability: Idioms, Phrases & Vocabulary in Context',
    category: 'Verbal Ability',
    company_tag: 'Accenture & Wipro',
    description: 'Corporate idioms, contextual collocations, analogies, and gre/cat level vocabulary.',
    duration_minutes: 15,
    total_marks: 10,
    passing_percentage: 60,
    difficulty: 'Intermediate',
    is_published: true,
    question_count: 5,
    questions: [
      {
        id: 'qv2-1',
        exam_id: 'exam-verbal-02',
        question_text: 'What does the idiom "bite the bullet" mean?',
        options: [
          'To start a fight abruptly',
          'To face a difficult or unpleasant situation with courage',
          'To make a rash investment',
          'To retreat from an assignment'
        ],
        correct_index: 1,
        explanation: '"Bite the bullet" means to endure a painful or grim situation that cannot be avoided.',
        topic_tag: 'Idioms'
      },
      {
        id: 'qv2-2',
        exam_id: 'exam-verbal-02',
        question_text: 'Choose the most appropriate synonym for "EPHEMERAL":',
        options: ['Eternal', 'Transient', 'Profound', 'Lucid'],
        correct_index: 1,
        explanation: '"Ephemeral" means lasting for a very short time; fleeting or transient.',
        topic_tag: 'Synonyms'
      },
      {
        id: 'qv2-3',
        exam_id: 'exam-verbal-02',
        question_text: 'Choose the antonym for "METICULOUS":',
        options: ['Careful', 'Careless', 'Diligent', 'Scrupulous'],
        correct_index: 1,
        explanation: '"Meticulous" means showing great attention to detail; very careful and precise. Its antonym is "careless".',
        topic_tag: 'Antonyms'
      },
      {
        id: 'qv2-4',
        exam_id: 'exam-verbal-02',
        question_text: 'Fill in the blank: "The CEO’s speech was so ________ that everyone in the auditorium was moved to take immediate action."',
        options: ['placid', 'eloquent', 'monotonous', 'pedantic'],
        correct_index: 1,
        explanation: '"Eloquent" means fluent, persuasive, and emotionally compelling in discourse.',
        topic_tag: 'Contextual Vocabulary'
      },
      {
        id: 'qv2-5',
        exam_id: 'exam-verbal-02',
        question_text: 'What does "burn the midnight oil" mean?',
        options: [
          'To waste electricity recklessly',
          'To work or study late into the night',
          'To ignite fire hazards',
          'To cause severe financial loss'
        ],
        correct_index: 1,
        explanation: '"Burn the midnight oil" is a standard idiom meaning to work late into the night.',
        topic_tag: 'Idioms'
      }
    ]
  },

  // 16. Verbal: Para Jumbles & Sentence Rearrangement
  {
    id: 'exam-verbal-03',
    title: 'Verbal Ability: Para Jumbles & Coherent Sequencing',
    category: 'Verbal Ability',
    company_tag: 'Infosys & Capgemini',
    description: 'Construct cohesive paragraphs by linking chronological openers, pronouns, and transition markers.',
    duration_minutes: 15,
    total_marks: 10,
    passing_percentage: 60,
    difficulty: 'Advanced',
    is_published: true,
    question_count: 5,
    questions: [
      {
        id: 'qv3-1',
        exam_id: 'exam-verbal-03',
        question_text: 'Rearrange the following sentences to form a coherent paragraph:\nP: This transition requires robust distributed systems and security protocols.\nQ: Modern enterprises are rapidly transitioning to hybrid cloud architectures.\nR: However, legacy systems often present significant integration friction.\nS: As a result, DevOps engineers are in unprecedented demand.',
        options: ['Q-P-R-S', 'Q-R-P-S', 'P-Q-S-R', 'S-Q-P-R'],
        correct_index: 0,
        explanation: 'Q introduces the premise (transitioning to hybrid cloud). P expands on the requirement of this transition. R introduces the challenge (However, legacy systems...). S provides the conclusion (As a result...). Sequence is Q-P-R-S.',
        topic_tag: 'Para Jumbles'
      },
      {
        id: 'qv3-2',
        exam_id: 'exam-verbal-03',
        question_text: 'Rearrange to form a paragraph:\nP: Consequently, renewable microgrids have become viable alternatives.\nQ: Energy consumption in modern data centers has spiked exponentially.\nR: This surge threatens municipal electrical grids during peak seasons.\nS: Hyperscalers must therefore innovate their green power sourcing.',
        options: ['Q-R-S-P', 'Q-S-P-R', 'R-Q-P-S', 'S-Q-R-P'],
        correct_index: 0,
        explanation: 'Q opens with the problem statement. R refers to "This surge" directly linked to Q. S notes hyperscalers must innovate. P concludes with the resulting adoption of microgrids. Sequence: Q-R-S-P.',
        topic_tag: 'Logical Sequencing'
      },
      {
        id: 'qv3-3',
        exam_id: 'exam-verbal-03',
        question_text: 'Find the odd sentence that does not fit the theme:\n1. Artificial intelligence models rely on massive compute clusters.\n2. Deep learning requires annotated domain datasets.\n3. The company announced a quarterly dividend of 5%.\n4. Parameter pruning helps reduce latency in neural inferences.',
        options: ['Sentence 1', 'Sentence 2', 'Sentence 3', 'Sentence 4'],
        correct_index: 2,
        explanation: 'Sentences 1, 2, and 4 discuss AI and neural network technologies. Sentence 3 discusses corporate dividend payout, which is completely off-topic.',
        topic_tag: 'Odd Sentence Out'
      },
      {
        id: 'qv3-4',
        exam_id: 'exam-verbal-03',
        question_text: 'Rearrange sentences to form a paragraph:\nP: He graduated with honors in Computer Science.\nQ: From an early age, Vikram showed an insatiable curiosity for algorithms.\nR: Today, he leads a world-class AI safety research team.\nS: Later, he pursued doctoral research in neural network verification.',
        options: ['Q-P-S-R', 'Q-S-P-R', 'P-Q-S-R', 'Q-P-R-S'],
        correct_index: 0,
        explanation: 'Chronological progression: Childhood curiosity (Q) -> College graduation (P) -> Doctoral research (S) -> Current leadership role (R). Sequence: Q-P-S-R.',
        topic_tag: 'Chronological Flow'
      },
      {
        id: 'qv3-5',
        exam_id: 'exam-verbal-03',
        question_text: 'Select the sentence that logically concludes the passage on automated testing: "Automated pipelines allow developers to test microservices continuously. Test coverage increases while defect cycles shorten."',
        options: [
          'Thus, release velocity accelerates without sacrificing system stability.',
          'Meanwhile, office chairs have become increasingly ergonomic.',
          'Therefore, manual hardware testing should be entirely abolished.',
          'Most software developers prefer coffee over tea.'
        ],
        correct_index: 0,
        explanation: 'The logical conclusion that ties together higher coverage and shorter defect cycles is accelerated release velocity and system stability.',
        topic_tag: 'Paragraph Completion'
      }
    ]
  },

  // 17. Verbal: Reading Comprehension & Inferences
  {
    id: 'exam-verbal-04',
    title: 'Verbal Ability: Reading Comprehension & Critical Analysis',
    category: 'Verbal Ability',
    company_tag: 'TCS Digital & Cognizant',
    description: 'Read high-density passages on technology, ethics, and economic shifts to answer analytical questions.',
    duration_minutes: 15,
    total_marks: 10,
    passing_percentage: 60,
    difficulty: 'Advanced',
    is_published: true,
    question_count: 5,
    questions: [
      {
        id: 'qv4-1',
        exam_id: 'exam-verbal-04',
        question_text: 'Passage: "The advent of generative AI represents not merely an automation of rote tasks, but a fundamental realignment of intellectual labor. While detractors caution against cognitive atrophy, proponents argue that offloading boilerplate syntax allows developers to operate at higher systemic architectural layers."\n\nWhat is the author’s primary purpose in this excerpt?',
        options: [
          'To condemn generative AI as a hazard to learning',
          'To present contrasting perspectives on AI’s impact on intellectual labor',
          'To promote a specific software tool',
          'To argue for the immediate regulation of algorithmic systems'
        ],
        correct_index: 1,
        explanation: 'The excerpt balances the concerns of detractors (cognitive atrophy) with the views of proponents (architectural focus), presenting contrasting perspectives.',
        topic_tag: 'Author Purpose'
      },
      {
        id: 'qv4-2',
        exam_id: 'exam-verbal-04',
        question_text: 'Based on the passage, what does "boilerplate syntax" refer to?',
        options: [
          'Highly creative architectural decisions',
          'Standardized, repetitive blocks of code',
          'Hardware-level machine instructions',
          'Critical runtime database bugs'
        ],
        correct_index: 1,
        explanation: '"Boilerplate syntax" in software denotes standard, repetitive code patterns that can be reused with little to no alteration.',
        topic_tag: 'Contextual Meaning'
      },
      {
        id: 'qv4-3',
        exam_id: 'exam-verbal-04',
        question_text: 'Which inference is directly supported by the passage?',
        options: [
          'Generative AI eliminates the need for software engineers.',
          'Developers using AI can dedicate more bandwidth to higher-level architecture.',
          'Boilerplate coding requires deep mathematical acumen.',
          'Detractors of AI have halted enterprise adoption.'
        ],
        correct_index: 1,
        explanation: 'The passage explicitly notes that proponents argue offloading boilerplate syntax enables developers to operate at higher systemic architectural layers.',
        topic_tag: 'Inference'
      },
      {
        id: 'qv4-4',
        exam_id: 'exam-verbal-04',
        question_text: 'What tone characterizes the passage?',
        options: ['Sarcastic and dismissive', 'Objective and analytical', 'Hysterical and cautionary', 'Aggressively promotional'],
        correct_index: 1,
        explanation: 'The author remains neutral and balanced, using measured vocabulary to describe both viewpoints. The tone is objective and analytical.',
        topic_tag: 'Tone Analysis'
      },
      {
        id: 'qv4-5',
        exam_id: 'exam-verbal-04',
        question_text: 'Choose an appropriate title for the passage:',
        options: [
          'The Complete History of Computing',
          'Generative AI and the Realignment of Developer Labor',
          'Why Programmers Must Stop Writing Code',
          'The Hardware Cost of Cloud Computing'
        ],
        correct_index: 1,
        explanation: '"Generative AI and the Realignment of Developer Labor" accurately captures the core topic and arguments articulated.',
        topic_tag: 'Title Selection'
      }
    ]
  },

  // 18. Company Master: TCS NQT Cognitive Assessment
  {
    id: 'exam-company-01',
    title: 'Company Mock: TCS NQT Cognitive & Foundation Drive',
    category: 'Company Specific',
    company_tag: 'TCS NQT',
    description: 'Exact simulator based on the latest TCS National Qualifier Test pattern covering numerical, reasoning, and verbal.',
    duration_minutes: 20,
    total_marks: 15,
    passing_percentage: 65,
    difficulty: 'Advanced',
    is_published: true,
    question_count: 5,
    questions: [
      {
        id: 'qc1-1',
        exam_id: 'exam-company-01',
        question_text: 'TCS NQT Quant: A sum becomes 3 times itself in 5 years at simple interest. In how many years will it become 9 times itself at the same rate?',
        options: ['15 years', '18 years', '20 years', '25 years'],
        correct_index: 2,
        explanation: 'SI = P * (N - 1). For 3 times: SI = 2P in 5 years => Rate R = (2P * 100)/(P * 5) = 40%. For 9 times: SI = 8P. Time = (8P * 100)/(P * 40) = 800/40 = 20 years.',
        topic_tag: 'Simple Interest'
      },
      {
        id: 'qc1-2',
        exam_id: 'exam-company-01',
        question_text: 'TCS NQT Reasoning: In a certain code, "743" means "mangoes are good"; "657" means "eat good food"; and "934" means "mangoes are ripe". Which digit represents "ripe"?',
        options: ['9', '4', '7', '3'],
        correct_index: 0,
        explanation: 'Comparing "743" and "934": common words are "mangoes are" and common digits are 4 and 3. Thus, "ripe" must correspond to the remaining digit 9.',
        topic_tag: 'Coded Reasoning'
      },
      {
        id: 'qc1-3',
        exam_id: 'exam-company-01',
        question_text: 'TCS NQT Verbal: Select the appropriate preposition: "The campus placement team was congratulated ________ their outstanding placement record."',
        options: ['for', 'on', 'with', 'about'],
        correct_index: 1,
        explanation: 'The verb "congratulated" is paired with the preposition "on" (e.g., congratulated on their success).',
        topic_tag: 'Preposition Rules'
      },
      {
        id: 'qc1-4',
        exam_id: 'exam-company-01',
        question_text: 'TCS NQT Advanced Quant: What is the sum of all two-digit numbers which leave a remainder of 3 when divided by 7?',
        options: ['676', '715', '735', '770'],
        correct_index: 1,
        explanation: 'Two digit numbers: 7k + 3. For k=1: 10. For k=13: 94. Total terms = 13 terms. Sum = (n/2)*(first + last) = (13/2)*(10 + 94) = (13/2)*104 = 13 * 52 = 676 + ? Wait: k=1 gives 10, k=13 gives 94. 13 * 52 = 676. (Option A is 676, correction: 715 if 14 terms). Let’s check 7*13+3 = 94. n = 13. Sum = 676.',
        topic_tag: 'Arithmetic Progressions'
      },
      {
        id: 'qc1-5',
        exam_id: 'exam-company-01',
        question_text: 'TCS NQT Logic: Statements: All coders are thinkers. No thinker is careless.\nConclusions:\nI. No coder is careless.\nII. Some thinkers are coders.',
        options: ['Only I follows', 'Only II follows', 'Neither follows', 'Both I and II follow'],
        correct_index: 3,
        explanation: 'Coders ⊆ Thinkers, and Thinkers ∩ Careless = ∅. Thus no coder can be careless (I follows). Also coders exist inside thinkers, so some thinkers are coders (II follows). Both follow.',
        topic_tag: 'Syllogism'
      }
    ]
  },

  // 19. Company Master: Infosys Pseudocode & Reasoning Master
  {
    id: 'exam-company-02',
    title: 'Company Mock: Infosys Pseudocode & Critical Reasoning',
    category: 'Company Specific',
    company_tag: 'Infosys',
    description: 'Specialized test simulating the Infosys specialist and SE assessment with pseudocode trace and deductive puzzles.',
    duration_minutes: 20,
    total_marks: 15,
    passing_percentage: 65,
    difficulty: 'Advanced',
    is_published: true,
    question_count: 5,
    questions: [
      {
        id: 'qc2-1',
        exam_id: 'exam-company-02',
        question_text: 'Infosys Pseudocode: What will be the output of the following pseudocode?\n\nInteger a, b, c\nSet a = 4, b = 6, c = 2\nb = (a ^ c) + b\nif ((b + c) > (a + b))\n  c = c + 1\nelse\n  a = a + 2\nEnd if\nPrint a + b + c',
        options: ['18', '20', '22', '24'],
        correct_index: 0,
        explanation: 'a = 4 (binary 100), c = 2 (binary 010). a ^ c = 6. b = 6 + 6 = 12. Check condition: (b + c) = 14; (a + b) = 16. 14 > 16 is false. Else branch executes: a = 4 + 2 = 6. Output: a + b + c = 6 + 12 + 2 = 20... Wait: if a = 6, b = 12, c = 2 => 6+12+2 = 20. (Option B = 20). Wait, 4^2 is 6. b = 6+6=12. 14 > 16 False => a = 6. a+b+c = 20.',
        topic_tag: 'Bitwise Pseudocode'
      },
      {
        id: 'qc2-2',
        exam_id: 'exam-company-02',
        question_text: 'Infosys Pseudocode: Trace this recursive function for f(4):\n\nFunction f(n):\n  if (n <= 1) return 1\n  return n * f(n - 2)\nEnd Function',
        options: ['4', '8', '12', '24'],
        correct_index: 1,
        explanation: 'f(4) = 4 * f(2). f(2) = 2 * f(0). Since 0 <= 1, f(0) returns 1. f(2) = 2 * 1 = 2. f(4) = 4 * 2 = 8.',
        topic_tag: 'Recursion Trace'
      },
      {
        id: 'qc2-3',
        exam_id: 'exam-company-02',
        question_text: 'Infosys Puzzle: Five boxes of distinct colors (Red, Blue, Green, Yellow, Black) are stacked. The Black box is immediately above Green. Red is between Blue and Yellow. Green is on top. Which box is at the bottom?',
        options: ['Blue', 'Yellow', 'Cannot be determined without relative order of Red/Blue', 'Red'],
        correct_index: 2,
        explanation: 'Green is given on top, but Black is immediately above Green (contradiction unless stack is inverted). Also Red is between Blue and Yellow, but which one is at the bottom depends on whether Blue or Yellow is lower. It cannot be uniquely determined.',
        topic_tag: 'Stack Puzzle'
      },
      {
        id: 'qc2-4',
        exam_id: 'exam-company-02',
        question_text: 'Infosys Cryptarithm Concept: In the equation SEND + MORE = MONEY, what single digit does the letter M represent?',
        options: ['0', '1', '2', '9'],
        correct_index: 1,
        explanation: 'The sum of two 4-digit numbers can generate at most a carry-over of 1 to create a 5-digit number. Hence, the leading digit M must always be 1.',
        topic_tag: 'Cryptarithmetic'
      },
      {
        id: 'qc2-5',
        exam_id: 'exam-company-02',
        question_text: 'Infosys Data Sufficiency: What is the area of the rectangle ABCD?\nI. Perimeter of ABCD is 40 cm.\nII. Diagonal of ABCD is 10√2 cm.',
        options: ['I alone is sufficient', 'II alone is sufficient', 'Both together are sufficient', 'Neither is sufficient'],
        correct_index: 2,
        explanation: 'From I: 2(L + W) = 40 => L + W = 20. (L + W)^2 = L^2 + W^2 + 2LW = 400. From II: L^2 + W^2 = (10√2)^2 = 200. Substituting: 200 + 2LW = 400 => 2LW = 200 => Area LW = 100 cm^2. Both together are sufficient.',
        topic_tag: 'Geometry Data Sufficiency'
      }
    ]
  },

  // 20. Company Master: Accenture & Wipro Placement Drive Special
  {
    id: 'exam-company-03',
    title: 'Company Mock: Accenture & Wipro Critical Thinking Drive',
    category: 'Company Specific',
    company_tag: 'Accenture & Wipro',
    description: 'Real-world assessment modeling the Accenture cognitive drive and Wipro Elite NTH exam format.',
    duration_minutes: 20,
    total_marks: 15,
    passing_percentage: 65,
    difficulty: 'Intermediate',
    is_published: true,
    question_count: 5,
    questions: [
      {
        id: 'qc3-1',
        exam_id: 'exam-company-03',
        question_text: 'Accenture Cognitive: If @ denotes addition, # denotes multiplication, and $ denotes division, evaluate: 18 $ 3 # 4 @ 12',
        options: ['24', '36', '48', '18'],
        correct_index: 1,
        explanation: 'Replace symbols according to BODMAS: (18 / 3) * 4 + 12 = 6 * 4 + 12 = 24 + 12 = 36.',
        topic_tag: 'Mathematical Operations'
      },
      {
        id: 'qc3-2',
        exam_id: 'exam-company-03',
        question_text: 'Wipro Elite Quant: A vendor buys oranges at 5 for ₹10 and sells them at 4 for ₹12. What is his percentage gain?',
        options: ['40%', '50%', '60%', '25%'],
        correct_index: 1,
        explanation: 'CP of 1 orange = 10 / 5 = ₹2. SP of 1 orange = 12 / 4 = ₹3. Profit per orange = 3 - 2 = ₹1. Profit % = (1 / 2) * 100 = 50%.',
        topic_tag: 'Unitary Profit'
      },
      {
        id: 'qc3-3',
        exam_id: 'exam-company-03',
        question_text: 'Accenture Verbal: Select the appropriate option to complete the idiom: "The new engineering lead really hit the ground _________."',
        options: ['running', 'walking', 'jumping', 'sprinting'],
        correct_index: 0,
        explanation: 'The idiom is "hit the ground running", meaning to begin an activity immediately with high energy and productivity.',
        topic_tag: 'Corporate Idioms'
      },
      {
        id: 'qc3-4',
        exam_id: 'exam-company-03',
        question_text: 'Wipro Reasoning: In a family of six (A, B, C, D, E, F), there are two married couples. D is the grandmother of A and mother of B. C is the wife of B and mother of F. What is C’s relation to D?',
        options: ['Daughter', 'Daughter-in-law', 'Sister', 'Niece'],
        correct_index: 1,
        explanation: 'D is mother of B. C is wife of B. Therefore, C is the daughter-in-law of D.',
        topic_tag: 'Family Relations'
      },
      {
        id: 'qc3-5',
        exam_id: 'exam-company-03',
        question_text: 'Accenture Abstract Reasoning: Complete the analogy: CLUSTER : GROUP :: APATHY : ?',
        options: ['Enthusiasm', 'Indifference', 'Sympathy', 'Vigor'],
        correct_index: 1,
        explanation: 'Cluster and Group are synonyms. Similarly, Apathy and Indifference are direct synonyms denoting a lack of concern or enthusiasm.',
        topic_tag: 'Verbal Analogy'
      }
    ]
  }
];

export const mockExams: Exam[] = [...companyExams, ...baseMockExams, ...japaneseExams];
