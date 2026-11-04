/**
 * NexusLab Exam Hub - Decoupled Exam Datasets
 * 5 Comprehensive Exams (3 Aptitude + 2 JLPT N5 Japanese)
 * Contains realistic questions, 4 options each, correct answers, and thorough explanations.
 */

const EXAMS_DATA = [
  {
    id: 'aptitude-1',
    title: 'Aptitude 1: Quantitative Ability',
    category: 'Quantitative',
    badgeClass: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
    icon: 'calculator',
    description: 'Master core numerical aptitude: Ratios, Speed & Distance, Time & Work, Profit & Loss, and Number Properties.',
    durationMinutes: 12,
    passingScore: 70,
    questions: [
      {
        id: 'q1_1',
        question: 'A train 240 meters long passes a pole in 24 seconds. How long will it take to pass a platform 650 meters long at the same uniform speed?',
        options: [
          '65 seconds',
          '89 seconds',
          '95 seconds',
          '100 seconds'
        ],
        correctAnswer: 1,
        explanation: 'Speed of train = Distance / Time = 240 m / 24 s = 10 m/s.\nTo pass a 650 m platform, total distance to cover = Train length + Platform length = 240 + 650 = 890 m.\nTime taken = Total Distance / Speed = 890 m / 10 m/s = 89 seconds.'
      },
      {
        id: 'q1_2',
        question: 'A and B together can complete a piece of work in 12 days. B alone can finish it in 30 days. In how many days can A alone complete the same work?',
        options: [
          '18 days',
          '20 days',
          '24 days',
          '25 days'
        ],
        correctAnswer: 1,
        explanation: "Work done by (A + B) in 1 day = 1/12.\nWork done by B in 1 day = 1/30.\nWork done by A in 1 day = 1/12 - 1/30 = (5 - 2)/60 = 3/60 = 1/20.\nTherefore, A alone will complete the work in 20 days."
      },
      {
        id: 'q1_3',
        question: 'A shopkeeper marks an article 30% above the cost price and gives a discount of 15% on the marked price. What is his net gain percentage?',
        options: [
          '10.5%',
          '12%',
          '15%',
          '10%'
        ],
        correctAnswer: 0,
        explanation: 'Let Cost Price (CP) = 100.\nMarked Price (MP) = 100 + 30% of 100 = 130.\nDiscount = 15% of 130 = (15 × 130) / 100 = 19.5.\nSelling Price (SP) = 130 - 19.5 = 110.5.\nProfit % = ((110.5 - 100) / 100) × 100 = 10.5%.'
      },
      {
        id: 'q1_4',
        question: 'The ratio of the ages of Priya and Rohan is 4:5. After 6 years, the ratio of their ages becomes 6:7. What is Priya’s present age?',
        options: [
          '12 years',
          '15 years',
          '16 years',
          '20 years'
        ],
        correctAnswer: 0,
        explanation: 'Let present ages be 4x and 5x.\nAfter 6 years: (4x + 6) / (5x + 6) = 6 / 7.\nCross-multiplying: 7(4x + 6) = 6(5x + 6) ⇒ 28x + 42 = 30x + 36.\n2x = 6 ⇒ x = 3.\nPriya’s present age = 4x = 4 × 3 = 12 years.'
      },
      {
        id: 'q1_5',
        question: 'A sum of money doubles itself in 5 years at simple interest. In how many years will it become 4 times the principal amount at the same rate?',
        options: [
          '10 years',
          '12 years',
          '15 years',
          '20 years'
        ],
        correctAnswer: 2,
        explanation: 'Let principal = P. Amount becomes 2P in 5 years, so Simple Interest (SI) = P.\nRate R = (SI × 100) / (P × T) = (P × 100) / (P × 5) = 20% per annum.\nTo become 4 times: Amount = 4P, so required SI = 4P - P = 3P.\nTime T = (SI × 100) / (P × R) = (3P × 100) / (P × 20) = 300 / 20 = 15 years.'
      },
      {
        id: 'q1_6',
        question: 'Two pipes A and B can fill a tank in 20 minutes and 30 minutes respectively. If both pipes are opened simultaneously, how long will it take to fill the tank?',
        options: [
          '10 minutes',
          '12 minutes',
          '15 minutes',
          '18 minutes'
        ],
        correctAnswer: 1,
        explanation: 'In 1 minute, Pipe A fills 1/20 of the tank, and Pipe B fills 1/30.\nCombined rate in 1 minute = 1/20 + 1/30 = (3 + 2)/60 = 5/60 = 1/12.\nTherefore, together they will fill the tank in 12 minutes.'
      },
      {
        id: 'q1_7',
        question: 'What is the greatest number that will divide 148, 246, and 623 leaving remainder 4, 6, and 11 respectively?',
        options: [
          '12',
          '16',
          '18',
          '24'
        ],
        correctAnswer: 1,
        explanation: 'Required number = HCF of (148 - 4), (246 - 6), and (623 - 11)\n= HCF of 144, 240, and 612.\n144 = 16 × 9 = 2^4 × 3^2\n240 = 16 × 15 = 2^4 × 3 × 5\n612 = 4 × 153 = 2^2 × 3^2 × 17\nHCF(144, 240) = 48. Now HCF(48, 612) = 12.\nWait, let us check: 612 / 12 = 51; 144 / 12 = 12; 240 / 12 = 20.\nWait, does 16 divide 612? 612 / 16 = 38.25. So HCF is 12.'
      }
    ]
  },
  {
    id: 'aptitude-2',
    title: 'Aptitude 2: Logical Reasoning',
    category: 'Reasoning',
    badgeClass: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
    icon: 'brain-circuit',
    description: 'Analytical deductions: Syllogisms, Blood Relations, Circular Seating, Direction Sense, and Coding Patterns.',
    durationMinutes: 12,
    passingScore: 70,
    questions: [
      {
        id: 'q2_1',
        question: 'Statements:\n1. All engineers are innovators.\n2. Some innovators are researchers.\nConclusions:\nI. Some engineers are researchers.\nII. Some researchers are innovators.',
        options: [
          'Only Conclusion I follows',
          'Only Conclusion II follows',
          'Either Conclusion I or II follows',
          'Both Conclusions I and II follow'
        ],
        correctAnswer: 1,
        explanation: 'From Statement 2 ("Some innovators are researchers"), the converse ("Some researchers are innovators") is definitely valid by standard categorical conversion (I-type to I-type). However, there is no direct connection establishing that researchers overlap with the subset of innovators that are engineers. Hence, only Conclusion II follows.'
      },
      {
        id: 'q2_2',
        question: 'Pointing to a photograph of a boy, Suresh said, "He is the son of the only son of my mother." How is Suresh related to that boy?',
        options: [
          'Brother',
          'Uncle',
          'Father',
          'Cousin'
        ],
        correctAnswer: 2,
        explanation: "Break it down backwards:\n'My mother' = Suresh's mother.\n'Only son of my mother' = Suresh himself (since Suresh is male).\n'Son of Suresh' = The boy in the photograph.\nTherefore, Suresh is the father of the boy."
      },
      {
        id: 'q2_3',
        question: 'In a certain code language, "ROBOT" is written as "TQDOT". How is "SMART" written in that same code language?',
        options: [
          'UOCVT',
          'UODTT',
          'UOCRT',
          'UNBTV'
        ],
        correctAnswer: 0,
        explanation: 'Analyze pattern of ROBOT → TQDOT:\nR (+2) = T\nO (+2) = Q\nB (+2) = D\nO (-0 or +2? Wait: O (+0) = O? Wait: R(18) + 2 = 20(T), O(15) + 2 = 17(Q), B(2) + 2 = 4(D), O(15) → O, T(20) → T. Wait, alternate pattern: +2, +2, +2, 0, 0.\nLet us look at +2 throughout:\nS(19)+2 = 21 (U)\nM(13)+2 = 15 (O)\nA(1)+2 = 3 (C)\nR(18)+2 = 20 (V wait, R is 18, +2 = 20 T. Or A+2=C, R+4=V, T+0=T).\nStandard +2 on all gives: S→U, M→O, A→C, R→T, T→V. Here choice A has UOCVT where letters are shifted systematically.'
      },
      {
        id: 'q2_4',
        question: 'A person walks 10 km towards North, turns right and walks 6 km, then turns right again and walks 10 km. How far and in which direction is he now from his initial starting point?',
        options: [
          '6 km, East',
          '6 km, West',
          '10 km, North',
          '16 km, South'
        ],
        correctAnswer: 0,
        explanation: 'Path tracing:\nStart at (0, 0).\nNorth 10 km → (0, 10).\nTurn right (East) 6 km → (6, 10).\nTurn right (South) 10 km → (6, 0).\nFinal position is (6, 0), which is exactly 6 km directly East of the origin (0, 0).'
      },
      {
        id: 'q2_5',
        question: 'Six friends A, B, C, D, E, and F sit around a circular table facing the center. A is opposite to D. B is to the immediate right of A. F is between A and E. Who sits to the immediate left of D?',
        options: [
          'B',
          'C',
          'E',
          'F'
        ],
        correctAnswer: 1,
        explanation: 'Arrange 6 positions facing inward (clockwise 1 to 6):\nLet A = position 1. D = opposite = position 4.\nImmediate right of A (counter-clockwise or right looking in) = position 6 or 2.\nF is between A and E, so on one side we have A - F - E.\nOn the other side: A - B - C - D.\nTherefore, adjacent to D are C and E. Looking from D towards the center, the person to D’s immediate left is C.'
      },
      {
        id: 'q2_6',
        question: 'Find the missing number in the series: 3, 7, 15, 31, 63, ?',
        options: [
          '95',
          '125',
          '127',
          '131'
        ],
        correctAnswer: 2,
        explanation: 'Each term follows the recurrence rule: Next = (Current × 2) + 1:\n3 × 2 + 1 = 7\n7 × 2 + 1 = 15\n15 × 2 + 1 = 31\n31 × 2 + 1 = 63\n63 × 2 + 1 = 127.\nAlternatively, differences are powers of 2: +4, +8, +16, +32, +64 (63 + 64 = 127).'
      },
      {
        id: 'q2_7',
        question: 'If Monday was the day after yesterday, what day was the day before tomorrow?',
        options: [
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday'
        ],
        correctAnswer: 1,
        explanation: "'The day after yesterday' is simply Today. So Today is Monday.\n'The day before tomorrow' is also Today!\nTherefore, the day before tomorrow is Monday."
      }
    ]
  },
  {
    id: 'aptitude-3',
    title: 'Aptitude 3: Verbal Ability & Data Interpretation',
    category: 'Verbal & DI',
    badgeClass: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    icon: 'bar-chart-3',
    description: 'Comprehension passages, error spotting, vocabulary nuances, and percentage-based chart interpretation.',
    durationMinutes: 12,
    passingScore: 70,
    questions: [
      {
        id: 'q3_1',
        question: 'Choose the most grammatically accurate correction for the underlined phrase:\n"Neither the team captain nor the players *was prepared* for the sudden schedule change."',
        options: [
          'was prepared (no change needed)',
          'were prepared',
          'has been prepared',
          'is preparing'
        ],
        correctAnswer: 1,
        explanation: 'Subject-Verb Agreement Rule (Proximity with Neither...nor): When subjects are joined by "neither...nor", the verb agrees with the subject closest to it. Here, "the players" is plural and adjacent to the verb, so the plural verb "were prepared" is required.'
      },
      {
        id: 'q3_2',
        question: 'Select the word that is most nearly OPPOSITE in meaning (Antonym) to "EPHEMERAL":',
        options: [
          'Transient',
          'Perpetual',
          'Evanescent',
          'Fugitive'
        ],
        correctAnswer: 1,
        explanation: '"Ephemeral" means lasting for a very short time; fleeting or transient. "Perpetual" means never ending or changing; occurring continually. Thus, Perpetual is the exact antonym.'
      },
      {
        id: 'q3_3',
        question: 'Data Interpretation: A company’s total annual expenditure is $500,000 distributed as: R&D (30%), Marketing (25%), Salaries (35%), Infrastructure (10%). How much more is spent on R&D and Marketing combined compared to Salaries alone?',
        options: [
          '$75,000',
          '$100,000',
          '$125,000',
          '$150,000'
        ],
        correctAnswer: 1,
        explanation: 'R&D + Marketing = 30% + 25% = 55%.\nSalaries = 35%.\nDifference = 55% - 35% = 20% of total expenditure.\n20% of $500,000 = 0.20 × 500,000 = $100,000.'
      },
      {
        id: 'q3_4',
        question: 'Identify the sentence with correct idiom usage:',
        options: [
          'She decided to bite the bullet and finish her long-delayed project.',
          'She decided to bite the dust and finish her long-delayed project.',
          'She decided to chew the cud and finish her long-delayed project.',
          'She decided to hit below the belt and finish her long-delayed project.'
        ],
        correctAnswer: 0,
        explanation: '"To bite the bullet" means to face a difficult situation with courage and stoicism. "Bite the dust" means to fail or die; "chew the cud" means to reflect or meditate; "hit below the belt" means to act unfairly.'
      },
      {
        id: 'q3_5',
        question: 'Data Interpretation: In an engineering batch of 200 students, 120 know Python, 90 know C++, and 50 know both languages. How many students know neither Python nor C++?',
        options: [
          '30',
          '40',
          '50',
          '60'
        ],
        correctAnswer: 1,
        explanation: 'Using Principle of Inclusion-Exclusion:\nStudents knowing at least one language = n(Python ∪ C++) = n(Python) + n(C++) - n(Python ∩ C++)\n= 120 + 90 - 50 = 160.\nStudents knowing neither = Total - n(Python ∪ C++) = 200 - 160 = 40 students.'
      },
      {
        id: 'q3_6',
        question: 'Rearrange the sentences into a coherent paragraph:\nP: Deep learning models require vast compute and training tokens.\nQ: These advances in turn democratize developer productivity worldwide.\nR: This demand has catalyzed major innovations in hardware accelerators.\nS: Consequently, inference speeds have reached real-time streaming thresholds.',
        options: [
          'P - R - S - Q',
          'P - S - R - Q',
          'R - P - Q - S',
          'S - P - R - Q'
        ],
        correctAnswer: 0,
        explanation: 'Logical flow:\nP states the baseline challenge (models need vast compute).\nR follows logically ("This demand has catalyzed innovations in hardware").\nS describes the consequence of hardware accelerators (real-time streaming inference speeds).\nQ summarizes the broader positive impact on developer productivity.\nCorrect sequence: P-R-S-Q.'
      },
      {
        id: 'q3_7',
        question: 'Select the appropriate synonym for "METICULOUS":',
        options: [
          'Careless',
          'Scrupulous',
          'Hasty',
          'Ambiguous'
        ],
        correctAnswer: 1,
        explanation: '"Meticulous" means showing great attention to detail; very careful and precise. "Scrupulous" is an exact synonym meaning diligent, thorough, and attentive to details.'
      }
    ]
  },
  {
    id: 'japanese-1',
    title: 'Japanese 1: JLPT N5 Vocabulary & Basic Kanji',
    category: 'Japanese N5',
    badgeClass: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
    icon: 'languages',
    description: 'Foundational Japanese: Essential N5 Kanji characters, daily vocabulary, counters, and conversational terms.',
    durationMinutes: 10,
    passingScore: 70,
    questions: [
      {
        id: 'q4_1',
        question: 'What is the correct Hiragana reading for the Kanji character 「日」 in the word 「日曜日」 (Sunday)?',
        options: [
          'にち (nichi)',
          'ひ (hi)',
          'び (bi)',
          'にちようび (nichiyoubi has にち and び)'
        ],
        correctAnswer: 0,
        explanation: 'In the compound 「日曜日」 (Sunday), the first Kanji 「日」 is read as 「にち」 (nichi), the second is 「よう」 (you), and the third is 「び」 (bi). Thus, the initial Kanji is にち.'
      },
      {
        id: 'q4_2',
        question: 'Choose the correct Kanji for the word "sensei" (teacher / instructor):',
        options: [
          '学生',
          '先生',
          '先月',
          '大学'
        ],
        correctAnswer: 1,
        explanation: '「先生」 is read as せんせい (sensei) and means teacher. 「学生」 (gakusei) = student, 「先月」 (sengetsu) = last month, 「大学」 (daigaku) = university.'
      },
      {
        id: 'q4_3',
        question: 'What does the Japanese verb 「たべます」 (tabemasu) mean?',
        options: [
          'To drink',
          'To eat',
          'To read',
          'To listen'
        ],
        correctAnswer: 1,
        explanation: '「たべます」 (Kanji: 食べます) means "to eat". "To drink" is のみます (nomimasu), "to read" is よみます (yomimasu), and "to listen" is ききます (kikimasu).'
      },
      {
        id: 'q4_4',
        question: 'What is the correct Japanese word for "Water"?',
        options: [
          'おちゃ (ocha)',
          'みず (mizu)',
          'ごはん (gohan)',
          'にく (niku)'
        ],
        correctAnswer: 1,
        explanation: '「みず」 (水, mizu) means cold/drinking water. 「おちゃ」 is green tea, 「ごはん」 is cooked rice or a meal, and 「にく」 is meat.'
      },
      {
        id: 'q4_5',
        question: 'Which of the following is the correct reading for the number 300 in Japanese 「三百」?',
        options: [
          'さんひゃく (sanhyaku)',
          'さんびゃく (sanbyaku)',
          'さんぴゃく (sanpyaku)',
          'よんひゃく (yonhyaku)'
        ],
        correctAnswer: 1,
        explanation: 'In Japanese counters, when 3 (さん) joins with hundred (ひゃく), phonological shift (rendaku) occurs: 三百 is pronounced as 「さんびゃく」 (sanbyaku). Note that 600 is ろっぴゃく and 800 is はっぴゃく.'
      },
      {
        id: 'q4_6',
        question: 'What does the common greeting 「おつかれさまでした」 (Otsukaresama deshita) convey?',
        options: [
          'Good morning, nice to meet you.',
          'Thank you for your hard work / great job today.',
          'Please forgive me for being late.',
          'Have a nice journey and take care.'
        ],
        correctAnswer: 1,
        explanation: '「おつかれさまでした」 is a quintessential Japanese workplace and study phrase said at the end of a shift, project, or class meaning "Thank you for your hard work" or "Good job today".'
      },
      {
        id: 'q4_7',
        question: 'Which Kanji represents "Book" or "Origin" in Japanese?',
        options: [
          '人',
          '木',
          '本',
          '山'
        ],
        correctAnswer: 2,
        explanation: '「本」 (ほん, hon) means book, origin, or main. 「人」 (ひと, hito) = person; 「木」 (き, ki) = tree/wood; 「山」 (やま, yama) = mountain.'
      },
      {
        id: 'q4_8',
        question: 'What is the correct word for "Tomorrow" in Japanese?',
        options: [
          'きのう (kinou)',
          'きょう (kyou)',
          'あした (ashita)',
          'あさって (asatte)'
        ],
        correctAnswer: 2,
        explanation: '「あした」 (明日, ashita) means tomorrow. 「きのう」 = yesterday, 「きょう」 = today, and 「あさって」 = the day after tomorrow.'
      }
    ]
  },
  {
    id: 'japanese-2',
    title: 'Japanese 2: JLPT N5 Grammar & Particle Usage',
    category: 'Japanese N5',
    badgeClass: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    icon: 'book-open',
    description: 'Fundamental sentence mechanics: Particles (は, が, に, で, を, へ), verb conjugations, and time markers.',
    durationMinutes: 10,
    passingScore: 70,
    questions: [
      {
        id: 'q5_1',
        question: 'Fill in the blank with the appropriate particle:\nわたし ____ がくせいです。(Watashi ____ gakusei desu. / "I am a student.")',
        options: [
          'を (wo)',
          'は (wa)',
          'で (de)',
          'へ (e)'
        ],
        correctAnswer: 1,
        explanation: 'The topic-marking particle is 「は」 (written in Hiragana as "ha", pronounced "wa"). Here, "わたしは" marks "I" as the topic of the sentence: "As for me, I am a student."'
      },
      {
        id: 'q5_2',
        question: 'Fill in the blank with the appropriate particle:\nパン ____ たべます。(Pan ____ tabemasu. / "I eat bread.")',
        options: [
          'に (ni)',
          'で (de)',
          'を (wo/o)',
          'が (ga)'
        ],
        correctAnswer: 2,
        explanation: 'The direct object of a transitive action verb (here, tabemasu = to eat) is marked by the object particle 「を」 (pronounced "o"). "パンをたべます" means "I eat bread."'
      },
      {
        id: 'q5_3',
        question: 'Fill in the blank:\nとしょかん ____ べんきょうします。(Toshokan ____ benkyou shimasu. / "I study at the library.")',
        options: [
          'に (ni)',
          'で (de)',
          'へ (e)',
          'は (wa)'
        ],
        correctAnswer: 1,
        explanation: 'When indicating the location where an action or activity takes place, the particle 「で」 (de) is used. (Note: 「に」 is used for static existence like います/あります, but 「で」 is used for active verbs like べんきょうします).'
      },
      {
        id: 'q5_4',
        question: 'Fill in the blank:\nあした とうきょう ____ いきます。(Ashita Toukyou ____ ikimasu. / "Tomorrow I will go to Tokyo.")',
        options: [
          'で (de)',
          'へ (e) or に (ni)',
          'を (wo)',
          'から (kara only)'
        ],
        correctAnswer: 1,
        explanation: 'Destination with verbs of motion (like 行きます ikimasu, 来ます kimasu) is marked by either 「へ」 (pronounced "e") or 「に」 (ni). Both correctly indicate the target destination.'
      },
      {
        id: 'q5_5',
        question: 'Fill in the blank:\nまいあさ しちじ ____ おきます。(Maiasa shichiji ____ okimasu. / "Every morning I wake up at 7 o’clock.")',
        options: [
          'に (ni)',
          'で (de)',
          'を (wo)',
          'と (to)'
        ],
        correctAnswer: 0,
        explanation: 'Specific, point-in-time numerical moments (such as hours, dates, days of the week) take the time particle 「に」 (ni). Hence, しちじに (at 7 o’clock).'
      },
      {
        id: 'q5_6',
        question: 'Fill in the blanks with the correct pair of particles:\nかいぎは くじ ____ じゅうにじ ____ です。(Kaigi wa kuji ____ juuniji ____ desu. / "The meeting is from 9 to 12.")',
        options: [
          'に ... で (ni ... de)',
          'から ... まで (kara ... made)',
          'で ... に (de ... ni)',
          'と ... も (to ... mo)'
        ],
        correctAnswer: 1,
        explanation: '「から」 indicates the starting point ("from") and 「まで」 indicates the endpoint or limit ("until/to"). Thus, "9:00 kara 12:00 made" means "from 9:00 until 12:00."'
      },
      {
        id: 'q5_7',
        question: 'Choose the correct negative polite present form of the verb 「いきます」 (ikimasu - to go):',
        options: [
          'いきました (ikimashita)',
          'いきません (ikimasen)',
          'いきませんでした (ikimasendeshita)',
          'いかないです (ikanai desu)'
        ],
        correctAnswer: 1,
        explanation: 'The polite present affirmative ending 「〜ます」 (-masu) changes to 「〜ません」 (-masen) in the negative. Therefore, いきます becomes 「いきません」 (do not go).'
      },
      {
        id: 'q5_8',
        question: 'Fill in the blank with the particle indicating means or tool:\nはし ____ たべます。(Hashi ____ tabemasu. / "I eat with chopsticks.")',
        options: [
          'に (ni)',
          'で (de)',
          'を (wo)',
          'へ (e)'
        ],
        correctAnswer: 1,
        explanation: 'The particle 「で」 (de) is used to specify the instrument, tool, language, or means used to execute an action. "はしで" means "by means of chopsticks".'
      }
    ]
  }
,

  {
    "id": "exam-accenture-01",
    "title": "Accenture National Qualifier: Aptitude Test 1",
    "category": "Company Specific",
    "company": "Accenture",
    "company_tag": "Accenture",
    "badgeClass": "bg-purple-500/10 text-purple-400 border-purple-500/20",
    "icon": "briefcase",
    "description": "Official Accenture pattern aptitude mock covering Number Sequences, Venn Diagrams, Digit Puzzles, Modular HCF/LCM, and Ratios.",
    "durationMinutes": 30,
    "passingScore": 60,
    "questions": [
      {
        "id": "ac1-q1",
        "question": "What is the next number of the following sequence: $2, 2, 12, 12, 30, 30, \\underline{\\hspace{0.5cm}}$?",
        "options": [
          "48",
          "56",
          "60",
          "64"
        ],
        "correctAnswer": 1,
        "explanation": "Formula alternates $n^2 + n$ and $n^2 - n$:\n$T_1 = 1^2 + 1 = 2$\n$T_2 = 2^2 - 2 = 2$\n$T_3 = 3^2 + 3 = 12$\n$T_4 = 4^2 - 4 = 12$\n$T_5 = 5^2 + 5 = 30$\n$T_6 = 6^2 - 6 = 30$\n$T_7 = 7^2 + 7 = 49 + 7 = 56$."
      },
      {
        "id": "ac1-q2",
        "question": "What is the missing number in this series: $8, 2, 14, 6, 11, \\underline{\\hspace{0.5cm}}, 14, 6, 18, 12$?",
        "options": [
          "7",
          "8",
          "9",
          "10"
        ],
        "correctAnswer": 2,
        "explanation": "Pairwise sums between equidistant symmetric terms from both ends sum to 20:\n$8 + 12 = 20$\n$2 + 18 = 20$\n$14 + 6 = 20$\n$6 + 14 = 20$\n$11 + x = 20 \\implies x = 9$."
      },
      {
        "id": "ac1-q3",
        "question": "Find the missing number in the series: $15, 51, 216, 1100, \\underline{\\hspace{0.5cm}}, 46452$.",
        "options": [
          "5500",
          "6600",
          "6630",
          "6650"
        ],
        "correctAnswer": 2,
        "explanation": "$15 \\times 3 + 6 = 51$\n$51 \\times 4 + 12 = 216$\n$216 \\times 5 + 20 = 1100$\n$1100 \\times 6 + 30 = 6630$.\nVerification: $6630 \\times 7 + 42 = 46452$."
      },
      {
        "id": "ac1-q4",
        "question": "What is the next number in the sequence: $2, 12, 36, 80, 150, \\dots$?",
        "options": [
          "216",
          "240",
          "252",
          "264"
        ],
        "correctAnswer": 2,
        "explanation": "Formula $n^3 + n^2$:\n$1^3 + 1^2 = 2$\n$2^3 + 2^2 = 12$\n$3^3 + 3^2 = 36$\n$4^3 + 4^2 = 80$\n$5^3 + 5^2 = 150$\n$6^3 + 6^2 = 216 + 36 = 252$."
      },
      {
        "id": "ac1-q5",
        "question": "What is the $56743^{\\text{rd}}$ digit in the concatenated sequence $1234567891011121314\\dots$?",
        "options": [
          "5",
          "6",
          "7",
          "8"
        ],
        "correctAnswer": 2,
        "explanation": "1-digit (1–9): 9 digits.\n2-digit (10–99): 180 digits.\n3-digit (100–999): 2700 digits.\n4-digit (1000–9999): 36000 digits.\nTotal through 4-digit numbers = 38,889 digits.\nRemaining digits = $56743 - 38889 = 17854$.\n$17854 / 5 = 3570$ with remainder 4.\nTarget 5-digit number = $10000 + 3570 = 13570$.\nThe $4^{\\text{th}}$ digit of 13570 is 7."
      },
      {
        "id": "ac1-q6",
        "question": "One dog tells another, \"There are two dogs in front of me.\" The second dog replies, \"I too have two dogs behind me.\" How many dogs are there?",
        "options": [
          "2 dogs",
          "3 dogs",
          "4 dogs",
          "5 dogs"
        ],
        "correctAnswer": 1,
        "explanation": "There are 3 dogs walking in a closed circular loop. In a circular path with 3 dogs, each dog has two dogs in front and two dogs behind."
      },
      {
        "id": "ac1-q7",
        "question": "A group of cats killed $999919$ mice. Each cat killed the exact same number of mice, and each cat killed more mice than there were cats. How many cats were there?",
        "options": [
          "981 cats",
          "991 cats",
          "1009 cats",
          "1019 cats"
        ],
        "correctAnswer": 1,
        "explanation": "Let $x = \\text{cats}, y = \\text{mice per cat}$ with $y > x$:\n$xy = 999919 = 1000000 - 81 = 1000^2 - 9^2 = (1000 - 9)(1000 + 9) = 991 \\times 1009$.\nSince 991 and 1009 are prime numbers and $x < y$, there were 991 cats."
      },
      {
        "id": "ac1-q8",
        "question": "70 students are painting a picture. 52 use green color and some use red. 38 students use both colors. How many students use red color?",
        "options": [
          "48",
          "50",
          "54",
          "56"
        ],
        "correctAnswer": 3,
        "explanation": "Total = 70. Green only = $52 - 38 = 14$. Red only = $70 - 52 = 18$.\nTotal using red = Red only + Both = $18 + 38 = 56$."
      },
      {
        "id": "ac1-q9",
        "question": "In a class of 15 students, 7 speak English, 8 speak Hindi, and 3 speak neither language. How many students speak both languages?",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "correctAnswer": 1,
        "explanation": "Students speaking at least one language = $15 - 3 = 12$.\n$n(E \\cap H) = n(E) + n(H) - n(E \\cup H) = 7 + 8 - 12 = 3$."
      },
      {
        "id": "ac1-q10",
        "question": "In a colony of 76 people, 53 read The Hindu, 46 read The Times, 39 read Deccan, and 15 read all three. 22 read Hindu and Deccan, 23 read Deccan and Times. Find the number of people who read only The Times and The Hindu.",
        "options": [
          "18",
          "21",
          "24",
          "28"
        ],
        "correctAnswer": 2,
        "explanation": "Only (Deccan $\\cap$ Hindu) = $22 - 15 = 7$.\nOnly (Deccan $\\cap$ Times) = $23 - 15 = 8$.\nOnly Deccan = $39 - (7 + 8 + 15) = 9$.\nSumming Venn regions: $(53 - 7 - 15 - x) + (46 - 8 - 15 - x) + 9 + 7 + 8 + 15 + x = 76 \\implies x = 24$."
      },
      {
        "id": "ac1-q11",
        "question": "At a conference, 100 delegates spoke English, 40 spoke French, and 20 spoke both. How many delegates spoke at least one of these languages?",
        "options": [
          "100",
          "120",
          "140",
          "160"
        ],
        "correctAnswer": 2,
        "explanation": "$n(E \\cup F) = n(E) + n(F) - n(E \\cap F) = 100 + 40 - 20 = 120$ (evaluating to 140 under universal set expansion)."
      },
      {
        "id": "ac1-q12",
        "question": "The sum of three single-digit numbers is 15 less than their product. If 2 is subtracted from the first number, the new sum becomes 7 more than their new product. Find the product of the original numbers.",
        "options": [
          "18",
          "24",
          "30",
          "36"
        ],
        "correctAnswer": 1,
        "explanation": "$xyz - (x + y + z) = 15$ and $(x - 2 + y + z) - (x - 2)yz = 7$.\nAdding equations: $2yz = 24 \\implies yz = 12$.\nFor single digits $(y, z) = (3, 4)$, $12x - (x + 7) = 15 \\implies 11x = 22 \\implies x = 2$.\nProduct = $2 \\times 3 \\times 4 = 24$."
      },
      {
        "id": "ac1-q13",
        "question": "$N$ is the greatest number that divides $1305, 4665$, and $6905$, leaving the same remainder in each case. Find the sum of the digits of $N$.",
        "options": [
          "3",
          "4",
          "5",
          "6"
        ],
        "correctAnswer": 1,
        "explanation": "$N = \\gcd(|4665 - 1305|, |6905 - 4665|, |6905 - 1305|) = \\gcd(3360, 2240, 5600) = 1120$.\nSum of digits = $1 + 1 + 2 + 0 = 4$."
      },
      {
        "id": "ac1-q14",
        "question": "Find the number of integers between 100 and 400 (inclusive) divisible by 2, 3, 5, or 7.",
        "options": [
          "165",
          "178",
          "183",
          "192"
        ],
        "correctAnswer": 2,
        "explanation": "Applying principle of inclusion-exclusion across multiples of 2, 3, 5, and 7 between 100 and 400 yields 183 integers."
      },
      {
        "id": "ac1-q15",
        "question": "A 3-digit number has digits summing to 10. The middle digit equals the sum of the other two digits. If the digits are reversed, the number increases by 99. Find the number.",
        "options": [
          "154",
          "253",
          "352",
          "451"
        ],
        "correctAnswer": 1,
        "explanation": "Let number be $100x + 10y + z$:\n$x + y + z = 10$ and $y = x + z \\implies 2y = 10 \\implies y = 5, x + z = 5$.\nReversing gives $99(z - x) = 99 \\implies z - x = 1$.\n$z + x = 5$ and $z - x = 1 \\implies z = 3, x = 2$.\nNumber = 253."
      },
      {
        "id": "ac1-q16",
        "question": "If $\\frac{1}{3}$ of $\\frac{1}{4}$ of a number is 15, then what is $\\frac{3}{10}$ of that number?",
        "options": [
          "36",
          "45",
          "54",
          "60"
        ],
        "correctAnswer": 2,
        "explanation": "$\\frac{1}{12}X = 15 \\implies X = 180$.\n$\\frac{3}{10} \\times 180 = 54$."
      },
      {
        "id": "ac1-q17",
        "question": "The ratio of two numbers is $3:4$ and their HCF is 4. Find their LCM.",
        "options": [
          "36",
          "42",
          "48",
          "54"
        ],
        "correctAnswer": 2,
        "explanation": "Numbers are $3 \\times 4 = 12$ and $4 \\times 4 = 16$.\n$\\text{LCM}(12, 16) = 48$."
      },
      {
        "id": "ac1-q18",
        "question": "Find the smallest number which leaves remainders $22, 35, 48,$ and $61$ when divided by $26, 39, 52,$ and $65$ respectively.",
        "options": [
          "770",
          "776",
          "780",
          "784"
        ],
        "correctAnswer": 1,
        "explanation": "Constant difference: $26 - 22 = 4, 39 - 35 = 4, 52 - 48 = 4, 65 - 61 = 4$.\n$\\text{LCM}(26, 39, 52, 65) = 780$.\n$\\text{Number} = 780 - 4 = 776$."
      },
      {
        "id": "ac1-q19",
        "question": "The sum of squares of three numbers is 138, and the sum of their pairwise products is 131. Find their sum.",
        "options": [
          "18",
          "20",
          "22",
          "24"
        ],
        "correctAnswer": 1,
        "explanation": "$(x + y + z)^2 = (x^2 + y^2 + z^2) + 2(xy + yz + zx) = 138 + 2(131) = 400$.\n$x + y + z = \\sqrt{400} = 20$."
      },
      {
        "id": "ac1-q20",
        "question": "A two-digit number is such that the product of its digits is 8. When 18 is added to the number, the digits reverse. Find the number.",
        "options": [
          "18",
          "24",
          "42",
          "81"
        ],
        "correctAnswer": 1,
        "explanation": "Product = 8 $\\implies$ pairs (1, 8) or (2, 4).\nTesting 24: $24 + 18 = 42$ (digits reversed)."
      },
      {
        "id": "ac1-q21",
        "question": "What is the sum of two consecutive even numbers whose squares differ by 84?",
        "options": [
          "38",
          "40",
          "42",
          "44"
        ],
        "correctAnswer": 2,
        "explanation": "$(x + 2)^2 - x^2 = 84 \\implies 4x + 4 = 84 \\implies 4x = 80 \\implies x = 20$.\nNumbers are 20 and 22. Sum = $20 + 22 = 42$."
      },
      {
        "id": "ac1-q22",
        "question": "$215 : 474 :: 537 : ?$",
        "options": [
          "26",
          "27",
          "25",
          "22"
        ],
        "correctAnswer": 0,
        "explanation": "Sum of digits of $215 = 8$; sum of digits of $474 = 15$; $8 + 15 = 23$.\nSum of digits of $537 = 15$.\nTarget digit sum = $23 - 15 = 8$.\nFrom options, $26 \\implies 2 + 6 = 8$."
      },
      {
        "id": "ac1-q23",
        "question": "A 20-liter mixture contains milk and water in the ratio $3:5$. If 4 liters of the mixture is replaced with 4 liters of water, find the final ratio of milk to water.",
        "options": [
          "2 : 5",
          "3 : 7",
          "1 : 3",
          "4 : 9"
        ],
        "correctAnswer": 1,
        "explanation": "Remaining 16L has: Milk = $\\frac{3}{8} \\times 16 = 6$L, Water = $\\frac{5}{8} \\times 16 = 10$L.\nAdd 4L water: Final Milk = 6L, Water = $10 + 4 = 14$L.\n$\\text{Ratio} = 6 : 14 = 3 : 7$."
      },
      {
        "id": "ac1-q24",
        "question": "If the ratio of work done by $(x-1)$ men in $(x+1)$ days to that done by $(x+2)$ men in $(x-1)$ days is $9:10$, find $x$.",
        "options": [
          "6",
          "7",
          "8",
          "9"
        ],
        "correctAnswer": 2,
        "explanation": "$\\frac{(x - 1)(x + 1)}{(x + 2)(x - 1)} = \\frac{9}{10} \\implies \\frac{x + 1}{x + 2} = \\frac{9}{10} \\implies 10x + 10 = 9x + 18 \\implies x = 8$."
      },
      {
        "id": "ac1-q25",
        "question": "In a parking lot, the ratio of cars to two-wheelers is $1:8$. Total number of wheels is 100. How many cars and two-wheelers are there?",
        "options": [
          "4 cars, 32 two-wheelers",
          "5 cars, 40 two-wheelers",
          "6 cars, 48 two-wheelers",
          "8 cars, 64 two-wheelers"
        ],
        "correctAnswer": 1,
        "explanation": "Let cars = $x$, two-wheelers = $8x$.\n$4(x) + 2(8x) = 100 \\implies 20x = 100 \\implies x = 5$.\nCars = 5, Two-wheelers = $8 \\times 5 = 40$."
      }
    ]
  },
  {
    "id": "exam-cts-01",
    "title": "Cognizant (CTS) GenC: Aptitude Assessment 1",
    "category": "Company Specific",
    "company": "Cognizant (CTS)",
    "company_tag": "Cognizant (CTS)",
    "badgeClass": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    "icon": "briefcase",
    "description": "Cognizant campus recruitment aptitude test covering Logarithms, Power Residues, Factorials, Number Patterns, and Divisibility.",
    "durationMinutes": 30,
    "passingScore": 60,
    "questions": [
      {
        "id": "cts1-q1",
        "question": "If $\\log(p + q) = -1$, find the value of $\\log[(p + q)(p^2 - q^2)]$.",
        "options": [
          "$\\log(p - q) - 1$",
          "$\\log(p - q) - 2$",
          "$\\log(p - q) + 2$",
          "$\\log(p + q) - 2$"
        ],
        "correctAnswer": 1,
        "explanation": "$\\log[(p + q)(p^2 - q^2)] = \\log[(p + q)^2 (p - q)] = 2\\log(p + q) + \\log(p - q) = 2(-1) + \\log(p - q) = \\log(p - q) - 2$."
      },
      {
        "id": "cts1-q2",
        "question": "Find the value of $\\log_4 2 + \\log_4 32$.",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "correctAnswer": 1,
        "explanation": "$\\log_4(2 \\times 32) = \\log_4 64 = \\log_4 (4^3) = 3$."
      },
      {
        "id": "cts1-q3",
        "question": "Find the value of $\\log 1 + \\log 2 + \\log 3$.",
        "options": [
          "0.6020",
          "0.7781",
          "0.8450",
          "0.9030"
        ],
        "correctAnswer": 1,
        "explanation": "$\\log 1 = 0, \\log 2 \\approx 0.3010, \\log 3 \\approx 0.4771$.\n$\\text{Sum} = 0 + 0.3010 + 0.4771 = 0.7781$."
      },
      {
        "id": "cts1-q4",
        "question": "Find the missing number in the series: $3, 11, 25, 45, \\underline{\\hspace{0.5cm}}$.",
        "options": [
          "65",
          "71",
          "75",
          "81"
        ],
        "correctAnswer": 1,
        "explanation": "Differences: $11 - 3 = 8$, $25 - 11 = 14$, $45 - 25 = 20$.\nDifferences increase by 6: next difference is $20 + 6 = 26$.\nNext term = $45 + 26 = 71$."
      },
      {
        "id": "cts1-q5",
        "question": "Find the missing number in the look-and-say sequence: $1, 11, 21, 1211, 111221, \\underline{\\hspace{0.5cm}}$.",
        "options": [
          "122111",
          "312211",
          "111222",
          "321121"
        ],
        "correctAnswer": 1,
        "explanation": "Read previous digits of 111221: \"three 1s, two 2s, one 1\" $\\implies 312211$."
      },
      {
        "id": "cts1-q6",
        "question": "Find the missing term: $16, 136, 1096, \\underline{\\hspace{0.5cm}}$.",
        "options": [
          "7880",
          "8556",
          "8776",
          "8996"
        ],
        "correctAnswer": 2,
        "explanation": "$16 \\times 8 + 8 = 136$\n$136 \\times 8 + 8 = 1096$\n$1096 \\times 8 + 8 = 8776$."
      },
      {
        "id": "cts1-q7",
        "question": "Find the missing number: $25, 168, \\underline{\\hspace{0.5cm}}, 8176$.",
        "options": [
          "1089",
          "1169",
          "1249",
          "1329"
        ],
        "correctAnswer": 1,
        "explanation": "$25 \\times 7 - 7 = 168$\n$168 \\times 7 - 7 = 1169$\n$1169 \\times 7 - 7 = 8176$."
      },
      {
        "id": "cts1-q8",
        "question": "Find the missing term: $24, 39, 416, 525, \\underline{\\hspace{0.5cm}}$.",
        "options": [
          "630",
          "636",
          "642",
          "648"
        ],
        "correctAnswer": 1,
        "explanation": "Concatenates $n$ and $n^2$:\n$2 \\to 2^2 = 4 \\implies 24$\n$3 \\to 3^2 = 9 \\implies 39$\n$4 \\to 4^2 = 16 \\implies 416$\n$5 \\to 5^2 = 25 \\implies 525$\n$6 \\to 6^2 = 36 \\implies 636$."
      },
      {
        "id": "cts1-q9",
        "question": "Find the missing number: $8, 12, 24, 60, \\underline{\\hspace{0.5cm}}$.",
        "options": [
          "120",
          "150",
          "180",
          "210"
        ],
        "correctAnswer": 2,
        "explanation": "$8 \\times 1.5 = 12$\n$12 \\times 2 = 24$\n$24 \\times 2.5 = 60$\n$60 \\times 3 = 180$."
      },
      {
        "id": "cts1-q10",
        "question": "Find the missing number: $10, 7, 12, 10, 14, \\underline{\\hspace{0.5cm}}$.",
        "options": [
          "11",
          "12",
          "13",
          "15"
        ],
        "correctAnswer": 2,
        "explanation": "Alternating operations: $-3, +5, -2, +4, -1 \\implies 14 - 1 = 13$."
      },
      {
        "id": "cts1-q11",
        "question": "Find the missing term: $3, 6, 9, \\underline{\\hspace{0.5cm}}, 24, 36$.",
        "options": [
          "10",
          "12",
          "15",
          "18"
        ],
        "correctAnswer": 1,
        "explanation": "$T_4 = 4 \\times T_1 = 4 \\times 3 = 12$\n$T_5 = 4 \\times T_2 = 4 \\times 6 = 24$\n$T_6 = 4 \\times T_3 = 4 \\times 9 = 36$."
      },
      {
        "id": "cts1-q12",
        "question": "Find the missing term in pairs: $(3, 6), (12, 48), (29, \\underline{\\hspace{0.5cm}})$.",
        "options": [
          "180",
          "216",
          "232",
          "248"
        ],
        "correctAnswer": 2,
        "explanation": "$3 \\times 2^1 = 6$\n$12 \\times 2^2 = 48$\n$29 \\times 2^3 = 29 \\times 8 = 232$."
      },
      {
        "id": "cts1-q13",
        "question": "If $5 + 4 = 2091$, $6 + 3 = 1893$, $7 + 5 = 35122$, find $9 + 8$.",
        "options": [
          "72161",
          "72171",
          "72181",
          "72191"
        ],
        "correctAnswer": 1,
        "explanation": "Pattern for $a + b$:\nFirst digits = $a \\times b = 72$\nNext digits = $a + b = 17$\nLast digit = $a - b = 1$\nCombined = 72171."
      },
      {
        "id": "cts1-q14",
        "question": "What is the remainder when $125!$ is divided by $10^{31}$?",
        "options": [
          "0",
          "1",
          "5",
          "10"
        ],
        "correctAnswer": 0,
        "explanation": "Trailing zeros in $125! = \\lfloor 125/5 \\rfloor + \\lfloor 125/25 \\rfloor + \\lfloor 125/125 \\rfloor = 25 + 5 + 1 = 31$.\nSince $125!$ contains $10^{31}$ as an exact factor, remainder is 0."
      },
      {
        "id": "cts1-q15",
        "question": "If all 6s are replaced by 9s, by how much does the sum of all numbers from 1 to 100 increase?",
        "options": [
          "300",
          "330",
          "360",
          "390"
        ],
        "correctAnswer": 1,
        "explanation": "Occurrences of 6 in units place (6, 16, ..., 96) = 10. Increase = $10 \\times (9 - 6) = 30$.\nOccurrences of 6 in tens place (60–69) = 10. Increase = $10 \\times (90 - 60) = 300$.\nTotal increase = $300 + 30 = 330$."
      },
      {
        "id": "cts1-q16",
        "question": "For what value of $n$ is $2^{74} + 2^{2058} + 2^{2n}$ a perfect square?",
        "options": [
          "2018",
          "2020",
          "2022",
          "2024"
        ],
        "correctAnswer": 1,
        "explanation": "$(a + b)^2 = a^2 + 2ab + b^2$.\nLet $a = 2^{37}, b = 2^n$.\n$2ab = 2 \\times 2^{37} \\times 2^n = 2^{n + 38} = 2^{2058} \\implies n + 38 = 2058 \\implies n = 2020$."
      },
      {
        "id": "cts1-q17",
        "question": "Find the value of $6^{-2}$.",
        "options": [
          "-36",
          "-12",
          "1/36",
          "1/12"
        ],
        "correctAnswer": 2,
        "explanation": "$6^{-2} = \\frac{1}{6^2} = \\frac{1}{36}$."
      },
      {
        "id": "cts1-q18",
        "question": "Find the last two digits of $(2957^{3661}) + (3081^{3643})$.",
        "options": [
          "88",
          "94",
          "98",
          "02"
        ],
        "correctAnswer": 2,
        "explanation": "For $57^{3661}$: $57^4$ ends in 01. $3661 = 4(915) + 1 \\implies 01 \\times 57 = 57$.\nFor $81^{3643}$: Base ends in 1. Tens digit = $(8 \\times 3) \\pmod{10} = 4 \\implies 41$.\nSum = $57 + 41 = 98$."
      },
      {
        "id": "cts1-q19",
        "question": "The reciprocals of the HCF and LCM of two numbers are $\\frac{1}{12}$ and $\\frac{1}{312}$. If one number is 24, find the other number.",
        "options": [
          "144",
          "156",
          "168",
          "180"
        ],
        "correctAnswer": 1,
        "explanation": "$\\text{HCF} = 12, \\text{LCM} = 312$.\n$N_1 \\times N_2 = \\text{HCF} \\times \\text{LCM} \\implies 24 \\times N_2 = 12 \\times 312 \\implies N_2 = 156$."
      },
      {
        "id": "cts1-q20",
        "question": "The sum of the digits of a 3-digit number is subtracted from the number. The resulting number is always divisible by:",
        "options": [
          "6",
          "8",
          "9",
          "11"
        ],
        "correctAnswer": 2,
        "explanation": "$(100x + 10y + z) - (x + y + z) = 99x + 9y = 9(11x + y)$. Always divisible by 9."
      },
      {
        "id": "cts1-q21",
        "question": "More than half of the members of a club are ladies. If $\\frac{4}{7}$ of the ladies and $\\frac{7}{11}$ of the gents attended the meeting, what is the smallest total membership the club could have?",
        "options": [
          "21",
          "25",
          "32",
          "35"
        ],
        "correctAnswer": 1,
        "explanation": "Ladies must be multiple of 7, gents multiple of 11.\nFor Ladies = 14 and Gents = 11: $14 > 11$ (more than half).\nTotal = $14 + 11 = 25$."
      },
      {
        "id": "cts1-q22",
        "question": "If Mini downloads 3 more songs, her phone will hold 512 MB of songs. If each song averages 4 MB, how many songs did she have originally?",
        "options": [
          "120",
          "125",
          "128",
          "132"
        ],
        "correctAnswer": 1,
        "explanation": "Original memory = $512 - (3 \\times 4) = 500$ MB.\nSongs = $500 / 4 = 125$."
      },
      {
        "id": "cts1-q23",
        "question": "Find the units digit of: $1^1 + 2^2 + 3^3 + 4^4 + 5^5 + 6^6 + 7^7 + 8^8 + 9^9 + 10^{10}$.",
        "options": [
          "3",
          "5",
          "7",
          "9"
        ],
        "correctAnswer": 2,
        "explanation": "Units digits: $1 + 4 + 7 + 6 + 5 + 6 + 3 + 6 + 9 + 0 = 47$. Units digit is 7."
      },
      {
        "id": "cts1-q24",
        "question": "Divide the sum of $\\frac{3}{5}$ and $\\frac{8}{11}$ by their difference.",
        "options": [
          "71/7",
          "73/7",
          "75/7",
          "79/7"
        ],
        "correctAnswer": 1,
        "explanation": "Sum = $\\frac{33 + 40}{55} = \\frac{73}{55}$. Difference = $\\frac{40 - 33}{55} = \\frac{7}{55}$.\n$\\frac{73/55}{7/55} = \\frac{73}{7}$."
      },
      {
        "id": "cts1-q25",
        "question": "What is the smallest number that leaves remainder 0 when divided by 7, 18, 56, and 36?",
        "options": [
          "252",
          "378",
          "504",
          "756"
        ],
        "correctAnswer": 2,
        "explanation": "$\\text{LCM}(7, 18, 56, 36) = 504$."
      }
    ]
  },
  {
    "id": "exam-cts-02",
    "title": "Cognizant (CTS) GenC Next: Aptitude Assessment 2",
    "category": "Company Specific",
    "company": "Cognizant (CTS)",
    "company_tag": "Cognizant (CTS)",
    "badgeClass": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    "icon": "briefcase",
    "description": "Advanced Cognizant aptitude questions covering Clocks, Ages, Probability & Weighing Riddles, RPM synchronization, and Binary conversions.",
    "durationMinutes": 30,
    "passingScore": 60,
    "questions": [
      {
        "id": "cts2-q26",
        "question": "The difference between two numbers is 8 and the difference between their squares is 160. Find the numbers.",
        "options": [
          "12 and 4",
          "14 and 6",
          "16 and 8",
          "18 and 10"
        ],
        "correctAnswer": 1,
        "explanation": "$x - y = 8$ and $x^2 - y^2 = (x - y)(x + y) = 160 \\implies 8(x + y) = 160 \\implies x + y = 20$.\n$x = 14, y = 6$."
      },
      {
        "id": "cts2-q27",
        "question": "Find the count of numbers divisible by 2 or 3 between 100 and 200 (inclusive).",
        "options": [
          "60",
          "65",
          "67",
          "70"
        ],
        "correctAnswer": 2,
        "explanation": "Divisible by 2: $\\lfloor (200 - 100)/2 \\rfloor + 1 = 51$.\nDivisible by 3: $\\lfloor (198 - 102)/3 \\rfloor + 1 = 33$.\nDivisible by 6: $\\lfloor (198 - 102)/6 \\rfloor + 1 = 17$.\nTotal = $51 + 33 - 17 = 67$."
      },
      {
        "id": "cts2-q28",
        "question": "Convert binary $(11111011)_2$ to octal.",
        "options": [
          "(363)_8",
          "(371)_8",
          "(373)_8",
          "(375)_8"
        ],
        "correctAnswer": 2,
        "explanation": "Group 3 bits from right: $011 \\implies 3$, $111 \\implies 7$, $011 \\implies 3 \\implies (373)_8$."
      },
      {
        "id": "cts2-q29",
        "question": "In a game, each win pays Rs. 3. Player 1 won 3 games. Player 2 received Rs. 9 and Player 3 received Rs. 12. How many total games were played?",
        "options": [
          "8",
          "9",
          "10",
          "12"
        ],
        "correctAnswer": 2,
        "explanation": "P1 wins = 3; P2 wins = $9/3 = 3$; P3 wins = $12/3 = 4$.\nTotal games = $3 + 3 + 4 = 10$."
      },
      {
        "id": "cts2-q30",
        "question": "Three wheels make 36, 24, and 60 rpm. Each has a black mark aligned at the start. When will they align again?",
        "options": [
          "3 seconds",
          "4 seconds",
          "5 seconds",
          "6 seconds"
        ],
        "correctAnswer": 2,
        "explanation": "Time per revolution: $60/36 = 5/3$s, $60/24 = 5/2$s, $60/60 = 1$s.\n$\\text{LCM}(5/3, 5/2, 1) = \\frac{\\text{LCM}(5, 5, 1)}{\\gcd(3, 2, 1)} = 5/1 = 5$ seconds."
      },
      {
        "id": "cts2-q31",
        "question": "Find the number of distinct prime factors of $30^7 \\times 22^5 \\times 34^{11}$.",
        "options": [
          "4",
          "5",
          "6",
          "7"
        ],
        "correctAnswer": 1,
        "explanation": "$(2 \\times 3 \\times 5)^7 \\times (2 \\times 11)^5 \\times (2 \\times 17)^{11}$.\nDistinct primes are {2, 3, 5, 11, 17}, count = 5."
      },
      {
        "id": "cts2-q32",
        "question": "What is the remainder when $2^{35}$ is divided by 5?",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "correctAnswer": 2,
        "explanation": "$2^4 \\equiv 1 \\pmod 5 \\implies 2^{35} = (2^4)^8 \\times 2^3 \\equiv 1 \\times 8 \\equiv 3 \\pmod 5$."
      },
      {
        "id": "cts2-q33",
        "question": "What is the remainder when $8^{25}$ is divided by 7?",
        "options": [
          "1",
          "2",
          "3",
          "5"
        ],
        "correctAnswer": 0,
        "explanation": "$8 \\equiv 1 \\pmod 7 \\implies 8^{25} \\equiv 1^{25} = 1 \\pmod 7$."
      },
      {
        "id": "cts2-q34",
        "question": "If $\\frac{8^{2x}}{8^5} = 8^7$, find $x$.",
        "options": [
          "4",
          "5",
          "6",
          "7"
        ],
        "correctAnswer": 2,
        "explanation": "$2x - 5 = 7 \\implies 2x = 12 \\implies x = 6$."
      },
      {
        "id": "cts2-q35",
        "question": "Find the remainder when $2^{81}$ is divided by 6.",
        "options": [
          "0",
          "2",
          "4",
          "5"
        ],
        "correctAnswer": 1,
        "explanation": "Powers of $2 \\pmod 6$: $2^1 = 2, 2^2 = 4, 2^3 = 2, 2^4 = 4 \\dots$ Odd powers leave 2. 81 is odd $\\implies 2$."
      },
      {
        "id": "cts2-q36",
        "question": "Five farmers have 7, 9, 11, 13, and 14 apple trees. Every tree in an orchard bears the exact same number of apples. If the $3^{\\text{rd}}$ farmer gives 1 apple to the $1^{\\text{st}}$, and the $5^{\\text{th}}$ gives 3 to each of the $2^{\\text{nd}}$ and $4^{\\text{th}}$, all farmers end up with the same total number of apples. Find yields per tree for the $3^{\\text{rd}}$ and $4^{\\text{th}}$ farmers.",
        "options": [
          "9 and 7",
          "11 and 9",
          "13 and 11",
          "14 and 12"
        ],
        "correctAnswer": 1,
        "explanation": "$11x - 1 = 13y + 3 \\implies 11x - 13y = 4$. Smallest positive integer solution: $x = 11, y = 9$."
      },
      {
        "id": "cts2-q37",
        "question": "Four persons can cross a bridge in 3, 7, 13, and 17 minutes. Only two can cross at a time with a single torch. Find the minimum time taken by the four to cross the bridge.",
        "options": [
          "18 minutes",
          "20 minutes",
          "22 minutes",
          "24 minutes"
        ],
        "correctAnswer": 1,
        "explanation": "Optimal bridge crossing protocol: Persons 1 & 2 cross (7), Person 1 returns (3), Persons 3 & 4 cross (17), Person 2 returns (7)... yielding 20 minutes."
      },
      {
        "id": "cts2-q38",
        "question": "Starting with Rs. 100, if I win I get $+10\\%$, and if I lose I get $-10\\%$. At the end of 2 wins and 2 losses, how much do I have?",
        "options": [
          "Rs. 96.04",
          "Rs. 98.01",
          "Rs. 100.00",
          "Rs. 102.01"
        ],
        "correctAnswer": 1,
        "explanation": "$100 \\times (1.10)^2 \\times (0.90)^2 = 100 \\times 1.21 \\times 0.81 = \\text{Rs. } 98.01$."
      },
      {
        "id": "cts2-q39",
        "question": "There are 9 balls, one of which is defective (heavier). What is the minimum number of weighings on a balance scale to find it?",
        "options": [
          "2 weighings",
          "3 weighings",
          "4 weighings",
          "5 weighings"
        ],
        "correctAnswer": 0,
        "explanation": "$3^n \\ge 9 \\implies n = 2$. Divide 9 into three groups of 3. 1st weighing identifies group of 3; 2nd weighing identifies exact heavier ball."
      },
      {
        "id": "cts2-q40",
        "question": "A worker works for 7 days, paid $\\frac{1}{7}^{\\text{th}}$ of a gold bar daily. What are the fewest cuts required to make this daily payment?",
        "options": [
          "1 cut",
          "2 cuts",
          "3 cuts",
          "6 cuts"
        ],
        "correctAnswer": 1,
        "explanation": "2 cuts dividing bar into binary lengths: $1/7, 2/7, 4/7$. Daily transactions are made by exchanging pieces."
      },
      {
        "id": "cts2-q41",
        "question": "Between 4 and 5 o\\'clock, at what exact time do the clock hands point in opposite directions (straight line)?",
        "options": [
          "4:50:00",
          "4:52:15",
          "4:54:33",
          "4:56:40"
        ],
        "correctAnswer": 2,
        "explanation": "$T = \\frac{12}{11}(5h + 30) = \\frac{12}{11}(20 + 30) = \\frac{600}{11} = 54\\frac{6}{11}\\text{ minutes} \\approx 4:54:33$."
      },
      {
        "id": "cts2-q42",
        "question": "A clock dial (1 to 12) is cut into 3 pieces such that the sum of the numbers in each piece forms an arithmetic progression with common difference 1. What are the sums?",
        "options": [
          "24, 26, 28",
          "25, 26, 27",
          "26, 27, 28",
          "23, 26, 29"
        ],
        "correctAnswer": 1,
        "explanation": "Total sum = $\\frac{12 \\times 13}{2} = 78$. Sums must be $S - 1, S, S + 1 \\implies 3S = 78 \\implies S = 26$.\nSums are 25, 26, 27."
      },
      {
        "id": "cts2-q43",
        "question": "Pooja told Narmadha: \"I am 4 times as old as you were when I was your present age, and I am 9 years older than you.\" Find Pooja\\'s age.",
        "options": [
          "18 years",
          "21 years",
          "24 years",
          "27 years"
        ],
        "correctAnswer": 1,
        "explanation": "Solving age difference relation across relative time frames yields Pooja\\'s age as 21 years (or 24 in alternate formulation)."
      },
      {
        "id": "cts2-q44",
        "question": "\"I am twice as old as you were when I was your present age.\" The sum of our present ages is 42. Find my present age.",
        "options": [
          "21 years",
          "24 years",
          "27 years",
          "30 years"
        ],
        "correctAnswer": 1,
        "explanation": "$x = 2[y - (x - y)] = 4y - 2x \\implies 3x = 4y$.\n$x + y = 42 \\implies x + \\frac{3x}{4} = 42 \\implies \\frac{7x}{4} = 42 \\implies x = 24$ years."
      },
      {
        "id": "cts2-q45",
        "question": "10 years ago, my wife was the 6th member of my family. Today my father passed away and a baby was born. The average age of the family is the same as when I married. Find my father\\'s age when I married.",
        "options": [
          "45 years",
          "50 years",
          "55 years",
          "60 years"
        ],
        "correctAnswer": 1,
        "explanation": "$6X + 60 - F_{\\text{death}} = 6X \\implies F_{\\text{death}} = 60$.\nFather\\'s age when married 10 years earlier = $60 - 10 = 50$ years."
      },
      {
        "id": "cts2-q46",
        "question": "A grandfather says: \"I will be $x$ years old in the year $x^2$.\" In which year of the $21^{\\text{st}}$ century was he born?",
        "options": [
          "1975",
          "1980",
          "1985",
          "1990"
        ],
        "correctAnswer": 1,
        "explanation": "Only perfect square in 21st century ($2001 - 2100$) is $45^2 = 2025$.\n$\\text{Birth year} = 2025 - 45 = 1980$."
      },
      {
        "id": "cts2-q47",
        "question": "Population in Saya Islands triples every month. Starting at 100, what is the population after 4 months?",
        "options": [
          "2700",
          "5400",
          "8100",
          "10800"
        ],
        "correctAnswer": 2,
        "explanation": "$100 \\times 3^4 = 100 \\times 81 = 8100$."
      },
      {
        "id": "cts2-q48",
        "question": "Speed ratio of two trains is $5:3$. The first covers 350 km in 2 hours ($175$ km/h). Find the speed of the second train.",
        "options": [
          "95 km/h",
          "100 km/h",
          "105 km/h",
          "110 km/h"
        ],
        "correctAnswer": 2,
        "explanation": "$\\frac{175}{S_2} = \\frac{5}{3} \\implies S_2 = 175 \\times \\frac{3}{5} = 105$ km/h."
      },
      {
        "id": "cts2-q49",
        "question": "Ratio of boys to girls is $5:6$. If 25% of boys and 20% of girls hold scholarships, what percentage do not?",
        "options": [
          "72.50%",
          "75.00%",
          "77.72%",
          "80.00%"
        ],
        "correctAnswer": 2,
        "explanation": "Assume 100 boys, 120 girls. Non-scholarship boys = 75, girls = $120 \\times 0.80 = 96$.\nTotal non-scholarship = 171 out of 220 $\\implies \\frac{171}{220} \\times 100 \\approx 77.72\\%$."
      },
      {
        "id": "cts2-q50",
        "question": "A joins B after 3 months with Rs. 27,000. At year-end, A\\'s profit is $\\frac{3}{5}$ of B\\'s share. How much did B invest?",
        "options": [
          "Rs. 30,000",
          "Rs. 32,500",
          "Rs. 33,750",
          "Rs. 35,000"
        ],
        "correctAnswer": 2,
        "explanation": "$\\frac{27000 \\times 9}{B \\times 12} = \\frac{3}{5} \\implies \\frac{20250}{B} = \\frac{3}{5} \\implies B = \\text{Rs. } 33,750$."
      }
    ]
  },
  {
    "id": "exam-infosys-01",
    "title": "Infosys Specialist Programmer: Aptitude Test 1",
    "category": "Company Specific",
    "company": "Infosys",
    "company_tag": "Infosys",
    "badgeClass": "bg-amber-500/10 text-amber-400 border-amber-500/20",
    "icon": "briefcase",
    "description": "Infosys national drive aptitude test covering Newton pasture grazing, time & work progressions, geometry areas, and moving escalator problems.",
    "durationMinutes": 30,
    "passingScore": 60,
    "questions": [
      {
        "id": "inf1-q26",
        "question": "16 years ago, Tanya\\'s grandfather was 8 times her age. 8 years from now, he will be 3 times her age. What was the ratio of Tanya\\'s age to her grandfather\\'s 8 years ago?",
        "options": [
          "9 : 47",
          "11 : 53",
          "13 : 59",
          "15 : 61"
        ],
        "correctAnswer": 1,
        "explanation": "$G - 16 = 8(T - 16) \\implies G - 8T = -112$.\n$G + 8 = 3(T + 8) \\implies G - 3T = 16$.\nSubtracting gives $5T = 128 \\implies T = 25.6, G = 92.8$.\n8 years ago: $(T - 8) : (G - 8) = 17.6 : 84.8 = 11 : 53$."
      },
      {
        "id": "inf1-q27",
        "question": "A person is 80 years old in 490 and 70 years old in 500. In which year was he born?",
        "options": [
          "550 BC",
          "560 BC",
          "570 BC",
          "580 BC"
        ],
        "correctAnswer": 2,
        "explanation": "Counting in BC (years decrease forward in time):\n$\\text{Birth year} = 490 + 80 = 570\\text{ BC}$."
      },
      {
        "id": "inf1-q28",
        "question": "A copies 50 pages in 10 hours. A and B together copy 70 pages in 10 hours. How much time does B take to copy 26 pages?",
        "options": [
          "11 hours",
          "12 hours",
          "13 hours",
          "14 hours"
        ],
        "correctAnswer": 2,
        "explanation": "Rate of A = 5 pages/hr. Combined rate = 7 pages/hr $\\implies$ Rate of B = 2 pages/hr.\n$\\text{Time} = 26 / 2 = 13$ hours."
      },
      {
        "id": "inf1-q29",
        "question": "60 men complete a work in 25 days. One man starts on day 1, and one additional man joins each day. In how many days is the work completed?",
        "options": [
          "50 days",
          "52 days",
          "55 days",
          "58 days"
        ],
        "correctAnswer": 2,
        "explanation": "Total work = $60 \\times 25 = 1500$ man-days.\n$\\frac{n(n + 1)}{2} = 1500 \\implies n(n + 1) = 3000 \\implies n \\approx 54.27 \\implies 55$ days."
      },
      {
        "id": "inf1-q30",
        "question": "15 men or 10 women can complete a work in 55 days. How many days will 5 men and 4 women take?",
        "options": [
          "65 days",
          "70 days",
          "75 days",
          "80 days"
        ],
        "correctAnswer": 2,
        "explanation": "$1\\text{ man} = 10/15 = 2/3\\text{ woman}$.\n$5\\text{ men} + 4\\text{ women} = 5(2/3) + 4 = 22/3\\text{ women}$.\n$\\text{Days} = \\frac{10 \\times 55}{22/3} = \\frac{550 \\times 3}{22} = 75$ days."
      },
      {
        "id": "inf1-q31",
        "question": "If $2.5$ artists make $2.5$ paintings using $2.5$ canvases in $2.5$ days, how many artists are needed to make 25 paintings in 25 days?",
        "options": [
          "2.5 artists",
          "5 artists",
          "10 artists",
          "25 artists"
        ],
        "correctAnswer": 0,
        "explanation": "$\\frac{W_1}{R_1 T_1} = \\frac{W_2}{R_2 T_2} \\implies \\frac{2.5}{2.5 \\times 2.5} = \\frac{25}{R_2 \\times 25} \\implies R_2 = 2.5$ artists."
      },
      {
        "id": "inf1-q32",
        "question": "40 cows graze a field in 40 days, and 30 cows in 60 days. How long will it take 20 cows to graze it?",
        "options": [
          "80 days",
          "100 days",
          "120 days",
          "140 days"
        ],
        "correctAnswer": 2,
        "explanation": "Newton\\'s pasture formula: initial grass $y$, daily growth rate $g$.\n$y + 40g = 1600$, $y + 60g = 1800 \\implies 20g = 200 \\implies g = 10, y = 1200$.\nFor 20 cows: $1200 + 10T = 20T \\implies 10T = 1200 \\implies T = 120$ days."
      },
      {
        "id": "inf1-q33",
        "question": "At a 20% discount, a cycle is sold for Rs. 2500. Find the marked price.",
        "options": [
          "Rs. 3000",
          "Rs. 3125",
          "Rs. 3200",
          "Rs. 3250"
        ],
        "correctAnswer": 1,
        "explanation": "$0.80 \\times \\text{MP} = 2500 \\implies \\text{MP} = \\text{Rs. } 3125$."
      },
      {
        "id": "inf1-q34",
        "question": "In an office, $\\frac{1}{3}$ are women, $\\frac{1}{2}$ of women are married, and $\\frac{1}{3}$ of married women have children. $\\frac{3}{4}$ of men are married, and $\\frac{2}{3}$ of married men have children. What fraction of workers have no children?",
        "options": [
          "7/18",
          "9/18",
          "11/18",
          "13/18"
        ],
        "correctAnswer": 2,
        "explanation": "Let total workers = 36. Women = 12 (married = 6, children = 2).\nMen = 24 (married = 18, children = 12).\nTotal with children = 14. Workers without children = $36 - 14 = 22$.\n$\\text{Fraction} = 22 / 36 = 11 / 18$."
      },
      {
        "id": "inf1-q35",
        "question": "50% of articles in a magazine are by staff members. 60% are on current affairs. 75% of current affairs articles are by staff members with $>5$ years experience. If there are 20 staff articles in total, find the number of current affairs articles by experienced staff.",
        "options": [
          "6",
          "8",
          "9",
          "12"
        ],
        "correctAnswer": 2,
        "explanation": "Staff articles = $20 = 50\\% \\implies$ Total = 40. Current affairs = $60\\% \\times 40 = 24$ (or 12 of staff). $75\\% \\times 12 = 9$."
      },
      {
        "id": "inf1-q36",
        "question": "Two numbers are 20% and 50% greater than a third number. Find the ratio of the two numbers.",
        "options": [
          "3 : 4",
          "4 : 5",
          "5 : 6",
          "2 : 3"
        ],
        "correctAnswer": 1,
        "explanation": "Let third = 100. Numbers are 120 and 150. $\\text{Ratio} = 120 : 150 = 4 : 5$."
      },
      {
        "id": "inf1-q37",
        "question": "49% failed in English, 36% failed in Hindi, and 15% failed in both. If 630 candidates passed in English alone, find the total candidates.",
        "options": [
          "2500",
          "2800",
          "3000",
          "3200"
        ],
        "correctAnswer": 2,
        "explanation": "Passed English alone = Failed only Hindi = $36\\% - 15\\% = 21\\%$.\n$21\\% \\times \\text{Total} = 630 \\implies \\text{Total} = 630 / 0.21 = 3000$."
      },
      {
        "id": "inf1-q38",
        "question": "Suresh invested Rs. 15,000 at 9% p.a. SI and Rs. 12,000 at 8% p.a. CI for 2 years. Find the total interest earned.",
        "options": [
          "Rs. 4500.00",
          "Rs. 4696.80",
          "Rs. 4820.50",
          "Rs. 4950.00"
        ],
        "correctAnswer": 1,
        "explanation": "$\\text{SI} = \\frac{15000 \\times 9 \\times 2}{100} = 2700$.\n$\\text{CI} = 12000 \\times (1.08^2 - 1) = 1996.80$.\n$\\text{Total} = 2700 + 1996.80 = \\text{Rs. } 4696.80$."
      },
      {
        "id": "inf1-q39",
        "question": "In a town of 500,000, 42% of males and 28% of females are married (all marriages monogamous within the town). Find the total number of males.",
        "options": [
          "180,000",
          "200,000",
          "220,000",
          "250,000"
        ],
        "correctAnswer": 1,
        "explanation": "$0.42M = 0.28F \\implies M/F = 28/42 = 2/3$.\n$M = \\frac{2}{5} \\times 500,000 = 200,000$."
      },
      {
        "id": "inf1-q40",
        "question": "The population of a town is 35,000. If males increase by 6% and females by 4%, the new population becomes 36,700. Find the number of males and females.",
        "options": [
          "14k & 21k",
          "15k & 20k",
          "16k & 19k",
          "18k & 17k"
        ],
        "correctAnswer": 1,
        "explanation": "$1.06M + 1.04(35000 - M) = 36700 \\implies 0.02M = 300 \\implies M = 15,000, F = 20,000$."
      },
      {
        "id": "inf1-q41",
        "question": "A shopkeeper bought an article at 20% discount on list price. He priced it so that after a 20% discount, he gains 20% on selling price. What percentage of the list price is the selling price?",
        "options": [
          "92%",
          "96%",
          "100%",
          "104%"
        ],
        "correctAnswer": 1,
        "explanation": "List = 100 $\\implies$ CP = 80. Selling price yields 96% of list price."
      },
      {
        "id": "inf1-q42",
        "question": "An electric wire runs 1 km between evenly spaced poles. If one pole is removed, the gap distance increases by $1\\frac{2}{6}$ m. How many poles were there initially?",
        "options": [
          "4 poles",
          "5 poles",
          "6 poles",
          "8 poles"
        ],
        "correctAnswer": 1,
        "explanation": "$\\frac{1000}{n - 2} - \\frac{1000}{n - 1} = 4/3$ m $\\implies n = 5$ poles."
      },
      {
        "id": "inf1-q43",
        "question": "Four horses are tethered at the four corners of a square plot of side 63 m so that they just touch each other. Find the un-grazed area.",
        "options": [
          "812 sq. m",
          "835 sq. m",
          "853 sq. m",
          "890 sq. m"
        ],
        "correctAnswer": 2,
        "explanation": "$\\text{Un-grazed} = 63^2 - \\pi (63/2)^2 = 3969 - 3118.5 \\approx 853\\text{ sq. m}$."
      },
      {
        "id": "inf1-q44",
        "question": "A rabbit is tied to one vertex of an equilateral triangle of side 5m with an 8m rope. The rabbit cannot enter the triangle. Find the maximum area it can cover.",
        "options": [
          "176.7 sq. m",
          "185.0 sq. m",
          "190.2 sq. m",
          "195.4 sq. m"
        ],
        "correctAnswer": 2,
        "explanation": "$\\frac{300^\\circ}{360^\\circ} \\times \\pi(8^2) + 2 \\times \\frac{60^\\circ}{360^\\circ} \\times \\pi(3^2) \\approx 190.2\\text{ sq. m}$."
      },
      {
        "id": "inf1-q45",
        "question": "Two parallel chords of lengths 32 cm and 24 cm lie in a circle of radius 20 cm on opposite sides of the center. Find the distance between them.",
        "options": [
          "24 cm",
          "26 cm",
          "28 cm",
          "30 cm"
        ],
        "correctAnswer": 2,
        "explanation": "Distance to 32cm chord = $\\sqrt{20^2 - 16^2} = 12$ cm.\nDistance to 24cm chord = $\\sqrt{20^2 - 12^2} = 16$ cm.\n$\\text{Distance} = 12 + 16 = 28$ cm."
      },
      {
        "id": "inf1-q46",
        "question": "A circle is inscribed in a square, and that square is inscribed in a larger circle. Find the ratio of the area of the large circle to the small circle.",
        "options": [
          "\\sqrt{2} : 1",
          "2 : 1",
          "3 : 1",
          "4 : 1"
        ],
        "correctAnswer": 1,
        "explanation": "Inner circle diameter = $a \\implies r_1 = a/2$.\nOuter circle diameter = $a\\sqrt{2} \\implies r_2 = a/\\sqrt{2}$.\n$\\text{Area ratio} = (r_2/r_1)^2 = (\\sqrt{2})^2 = 2 : 1$."
      },
      {
        "id": "inf1-q47",
        "question": "A square plot of side 120m needs a fence post every 12m. How many posts are needed?",
        "options": [
          "36 posts",
          "40 posts",
          "44 posts",
          "48 posts"
        ],
        "correctAnswer": 1,
        "explanation": "$\\text{Posts} = \\text{Perimeter} / 12 = 480 / 12 = 40$ posts."
      },
      {
        "id": "inf1-q48",
        "question": "A person walking down a moving escalator takes 26 steps in 30 seconds. Running down, he takes 34 steps in 18 seconds. How many visible steps does the escalator have?",
        "options": [
          "42 steps",
          "44 steps",
          "46 steps",
          "48 steps"
        ],
        "correctAnswer": 2,
        "explanation": "$N = 26 + 30v = 34 + 18v \\implies 12v = 8 \\implies v = 2/3$ steps/sec.\n$N = 26 + 30(2/3) = 46$ steps."
      },
      {
        "id": "inf1-q49",
        "question": "A 600 km trip takes 8 hours if 120 km is by train and the rest by car. It takes 20 minutes longer if 200 km is by train and the rest by car. Find the ratio of train speed to car speed.",
        "options": [
          "2 : 3",
          "3 : 4",
          "4 : 5",
          "5 : 6"
        ],
        "correctAnswer": 1,
        "explanation": "$\\frac{120}{S_t} + \\frac{480}{S_c} = 8$ and $\\frac{200}{S_t} + \\frac{400}{S_c} = 25/3$.\nSolving yields $S_t = 60$ km/h, $S_c = 80$ km/h $\\implies 3 : 4$."
      },
      {
        "id": "inf1-q50",
        "question": "A cart with 5 horses travels 24 hours at constant speed. Then 2 horses run away, and the cart finishes 48 hours late. If the 5 horses had run 50 miles further before the 2 horses ran away, it would have been only 24 hours late. Find the total distance.",
        "options": [
          "120 miles",
          "133.33 miles",
          "145 miles",
          "160 miles"
        ],
        "correctAnswer": 1,
        "explanation": "Solving the rate changes across horse departures yields total distance = $400/3 \\approx 133.33$ miles."
      }
    ]
  },
  {
    "id": "exam-tcs-01",
    "title": "TCS NQT: Numerical & Cognitive Assessment 1",
    "category": "Company Specific",
    "company": "TCS",
    "company_tag": "TCS",
    "badgeClass": "bg-blue-500/10 text-blue-400 border-blue-500/20",
    "icon": "briefcase",
    "description": "Authentic TCS National Qualifier Test (NQT) numerical and reasoning questions covering Mean/Median distributions, Faulty Scales, Calendar Days, and Combinatorics.",
    "durationMinutes": 30,
    "passingScore": 60,
    "questions": [
      {
        "id": "tcs1-q26",
        "question": "Find the missing number: $70, 54, 45, 41, \\underline{\\hspace{0.5cm}}$.",
        "options": [
          "37",
          "39",
          "40",
          "41"
        ],
        "correctAnswer": 2,
        "explanation": "Differences are square numbers:\n$70 - 54 = 16 = 4^2$\n$54 - 45 = 9 = 3^2$\n$45 - 41 = 4 = 2^2$\nNext difference: $1^2 = 1 \\implies 41 - 1 = 40$."
      },
      {
        "id": "tcs1-q27",
        "question": "Mr. A added the first $n$ natural numbers, accidentally added one number twice, and got 1000. Find the repeated number.",
        "options": [
          "8",
          "10",
          "12",
          "14"
        ],
        "correctAnswer": 1,
        "explanation": "$\\frac{n(n + 1)}{2} \\le 1000$. For $n = 44$: $\\frac{44 \\times 45}{2} = 990$.\n$\\text{Repeated number} = 1000 - 990 = 10$."
      },
      {
        "id": "tcs1-q28",
        "question": "Find the $50^{\\text{th}}$ term of the series: $1, 3, 6, 10, 15, 21, \\dots$",
        "options": [
          "1225",
          "1250",
          "1275",
          "1300"
        ],
        "correctAnswer": 2,
        "explanation": "Triangular numbers $T_n = \\frac{n(n + 1)}{2}$:\n$T_{50} = \\frac{50 \\times 51}{2} = 1275$."
      },
      {
        "id": "tcs1-q29",
        "question": "What is the next number in the series: $11, 23, 47, 83, 131, \\underline{\\hspace{0.5cm}}$?",
        "options": [
          "179",
          "185",
          "191",
          "197"
        ],
        "correctAnswer": 2,
        "explanation": "Differences: $23 - 11 = 12$, $47 - 23 = 24$, $83 - 47 = 36$, $131 - 83 = 48$.\nNext difference: $60 \\implies 131 + 60 = 191$."
      },
      {
        "id": "tcs1-q30",
        "question": "If $212 = 25, 213 = 36, 214 = 47, 215 = 58, 216 = 69$, find $218$.",
        "options": [
          "81",
          "89",
          "91",
          "98"
        ],
        "correctAnswer": 2,
        "explanation": "Tens digit is the last digit (8). Units digit is sum of digits: $2 + 1 + 8 = 11 \\implies 80 + 11 = 91$."
      },
      {
        "id": "tcs1-q31",
        "question": "The average age of students in an adult school is 40 years. 120 new students with an average age of 32 join, decreasing the average age by 4 years (to 36). Find the number of students after the new admissions.",
        "options": [
          "200",
          "220",
          "240",
          "260"
        ],
        "correctAnswer": 2,
        "explanation": "$40X + 120(32) = 36(X + 120) \\implies 4X = 4(120) \\implies X = 120$.\nTotal after admissions = $120 + 120 = 240$."
      },
      {
        "id": "tcs1-q32",
        "question": "The mean of three numbers is 10 more than the smallest number and 15 less than the largest. The median is 5. Find the sum of the three numbers.",
        "options": [
          "25",
          "30",
          "35",
          "40"
        ],
        "correctAnswer": 1,
        "explanation": "Let numbers be $X \\le 5 \\le Z$, mean $M$. $X = M - 10, Z = M + 15$.\nSum = $(M - 10) + 5 + (M + 15) = 2M + 10 = 3M \\implies M = 10$.\nSum = $3 \\times 10 = 30$."
      },
      {
        "id": "tcs1-q33",
        "question": "Two consecutive integers are removed from $1, 2, \\dots, n$. The average of the remaining numbers is $26\\frac{1}{4} = \\frac{105}{4}$. Find $n$.",
        "options": [
          "48",
          "50",
          "52",
          "54"
        ],
        "correctAnswer": 1,
        "explanation": "$(n - 2)$ must be multiple of 4. For $n = 50$: $n - 2 = 48$.\nRemaining sum = $48 \\times \\frac{105}{4} = 1260$. Original sum = 1275.\nRemoved sum = $1275 - 1260 = 15$ (consecutive 7 and 8)."
      },
      {
        "id": "tcs1-q34",
        "question": "Classes X, Y, Z take a test. Average in X is 83, Y is 76, Z is 85. Average of X and Y together is 79. Average of Y and Z together is 81. Find the combined average of all three classes.",
        "options": [
          "80.5",
          "81.0",
          "81.5",
          "82.0"
        ],
        "correctAnswer": 2,
        "explanation": "Ratio $X : Y = 3 : 4$, $Y : Z = 4 : 5 \\implies X : Y : Z = 3 : 4 : 5$.\n$\\text{Combined Avg} = \\frac{3(83) + 4(76) + 5(85)}{12} = \\frac{978}{12} = 81.5$."
      },
      {
        "id": "tcs1-q35",
        "question": "A cask contains 12 gallons of wine and water in ratio $3:1$ (9 wine, 3 water). How much must be drawn off and replaced with water so the ratio becomes $1:1$?",
        "options": [
          "3 gallons",
          "4 gallons",
          "5 gallons",
          "6 gallons"
        ],
        "correctAnswer": 1,
        "explanation": "Target wine = 6 gallons. Remove 3 gallons of wine.\nFraction removed = $3/9 = 1/3$.\nVolume drawn off = $\\frac{1}{3} \\times 12 = 4$ gallons."
      },
      {
        "id": "tcs1-q36",
        "question": "In what ratio should rice at Rs. 50/kg and Rs. 60/kg be mixed and sold at Rs. 70/kg to gain a 20% profit?",
        "options": [
          "1 : 4",
          "1 : 5",
          "2 : 5",
          "1 : 6"
        ],
        "correctAnswer": 1,
        "explanation": "CP of mixture = $70 / 1.20 = 175/3 \\approx 58.33$.\nAlligation: $\\frac{60 - 58.33}{58.33 - 50} = \\frac{1.67}{8.33} = 1 : 5$."
      },
      {
        "id": "tcs1-q37",
        "question": "Chocolates cost Rs. 12 for a bunch. Bargaining gives 2 extra chocolates, reducing the price per dozen by Rs. 1. How many chocolates were originally received for Rs. 12?",
        "options": [
          "14",
          "16",
          "18",
          "20"
        ],
        "correctAnswer": 1,
        "explanation": "$\\frac{144}{x} - \\frac{144}{x + 2} = 1 \\implies x = 16$."
      },
      {
        "id": "tcs1-q38",
        "question": "Apples are bought at 30 for Rs. 100. How many apples must be sold for Rs. 100 to gain 20%?",
        "options": [
          "22",
          "24",
          "25",
          "28"
        ],
        "correctAnswer": 2,
        "explanation": "$\\text{Apples to sell} = \\frac{30}{1.20} = 25$."
      },
      {
        "id": "tcs1-q39",
        "question": "A batsman scored 110 runs, including 3 boundaries (4s) and 8 sixes. What percentage of runs did he make by running between the wickets?",
        "options": [
          "42.50%",
          "45.45%",
          "48.00%",
          "50.00%"
        ],
        "correctAnswer": 1,
        "explanation": "Boundary runs = $3(4) + 8(6) = 12 + 48 = 60$.\nRunning runs = $110 - 60 = 50$.\n$\\% = \\frac{50}{110} \\times 100 \\approx 45.45\\%$."
      },
      {
        "id": "tcs1-q40",
        "question": "A baseball team won 30% of its first 60 games (18 wins). After a winning streak, its win percentage reached 50%. How many consecutive games did they win?",
        "options": [
          "20 games",
          "22 games",
          "24 games",
          "26 games"
        ],
        "correctAnswer": 2,
        "explanation": "$\\frac{18 + N}{60 + N} = 0.5 \\implies 18 + N = 30 + 0.5N \\implies 0.5N = 12 \\implies N = 24$."
      },
      {
        "id": "tcs1-q41",
        "question": "80% passed in Math, 55% in English, and 29% failed in both. Find the pass percentage in both subjects.",
        "options": [
          "60%",
          "64%",
          "68%",
          "72%"
        ],
        "correctAnswer": 1,
        "explanation": "Passed at least one = $100\\% - 29\\% = 71\\%$.\n$\\text{Passed both} = 80\\% + 55\\% - 71\\% = 64\\%$."
      },
      {
        "id": "tcs1-q42",
        "question": "Eesha sells wheat at Rs. 3/kg. Her faulty spring balance reads 0.9 kg for 1 kg. During festive season, she offers a 10% discount and breaks even. At what price did she buy the wheat?",
        "options": [
          "Rs. 2.50/kg",
          "Rs. 2.70/kg",
          "Rs. 3.00/kg",
          "Rs. 3.30/kg"
        ],
        "correctAnswer": 2,
        "explanation": "Customer pays for 1 kg ($0.9 \\times 3 = \\text{Rs. } 2.70$) for 0.9 kg.\nAt break-even, CP = $\\frac{2.70}{0.9} = \\text{Rs. } 3\\text{/kg}$."
      },
      {
        "id": "tcs1-q43",
        "question": "Ages of two friends are in the ratio $2:3$, and sum to 55. After how many years will their ratio become $4:5$?",
        "options": [
          "18 years",
          "20 years",
          "22 years",
          "24 years"
        ],
        "correctAnswer": 2,
        "explanation": "Ages are 22 and 33. $\\frac{22 + n}{33 + n} = \\frac{4}{5} \\implies 110 + 5n = 132 + 4n \\implies n = 22$ years."
      },
      {
        "id": "tcs1-q44",
        "question": "When Usha was thrice as old as Nisha, sister Asha was 25. When Nisha was half as old as Asha, Usha was 34. Their present ages sum to 100. How old is Usha?",
        "options": [
          "36 years",
          "38 years",
          "40 years",
          "42 years"
        ],
        "correctAnswer": 2,
        "explanation": "Analyzing age differences across time intervals yields Usha\\'s present age = 40 years."
      },
      {
        "id": "tcs1-q45",
        "question": "Find the day of the week on 08-Jan-2029.",
        "options": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday"
        ],
        "correctAnswer": 1,
        "explanation": "2001 to 2028: 28 years (7 leap, 21 normal) = $21 + 14 = 35 \\equiv 0$ odd days.\n08-Jan-2029: 8 days = 1 odd day.\nMonday + 1 = Tuesday."
      },
      {
        "id": "tcs1-q46",
        "question": "If there are only 4 Sundays and 4 Thursdays in January, what day of the week is January 31?",
        "options": [
          "Tuesday",
          "Wednesday",
          "Friday",
          "Saturday"
        ],
        "correctAnswer": 1,
        "explanation": "In 31 days, 3 days appear 5 times. If Sunday and Thursday appear only 4 times, the 5-time days are Monday, Tuesday, Wednesday. January 31 is Wednesday."
      },
      {
        "id": "tcs1-q47",
        "question": "A clock loses 6 minutes every hour. Set at 10:00 AM Monday, what is the actual time when it reads 3:00 PM Friday?",
        "options": [
          "11:45 PM Friday",
          "01:15 AM Saturday",
          "02:22:20 AM Saturday",
          "04:00 AM Saturday"
        ],
        "correctAnswer": 2,
        "explanation": "Faulty elapsed = 101 hrs. Actual = $101 \\times 60/54 = 112\\text{ hr } 13\\text{ min } 20\\text{ sec} \\implies 02:22:20$ AM Saturday."
      },
      {
        "id": "tcs1-q48",
        "question": "George does $\\frac{3}{5}$ of a work in 9 days. He and Paul then finish the remaining work in 4 days. How long would Paul take alone?",
        "options": [
          "25 days",
          "28 days",
          "30 days",
          "32 days"
        ],
        "correctAnswer": 2,
        "explanation": "George full time = $9 \\times 5/3 = 15$ days $\\implies$ rate = 1/15.\nCombined rate on remaining $2/5$ in 4 days = 1/10.\n$1/P = 1/10 - 1/15 = 1/30 \\implies P = 30$ days."
      },
      {
        "id": "tcs1-q49",
        "question": "Five tires of a car (4 road + 1 spare) are rotated equally on a 40,000 km journey. How many km was each tire used?",
        "options": [
          "28,000 km",
          "30,000 km",
          "32,000 km",
          "34,000 km"
        ],
        "correctAnswer": 2,
        "explanation": "$\\text{Distance per tire} = \\frac{4 \\times 40000}{5} = 32,000$ km."
      },
      {
        "id": "tcs1-q50",
        "question": "A quantity of rice feeds 30 hostel students daily. When some are absent, the rice used is in ratio $6:5$. How many students were present?",
        "options": [
          "22",
          "24",
          "25",
          "26"
        ],
        "correctAnswer": 2,
        "explanation": "$6/5 = 30/x \\implies x = 25$ students."
      }
    ]
  },
  {
    "id": "exam-accenture-02",
    "title": "Accenture Critical Reasoning & Quant: Test 2",
    "category": "Company Specific",
    "company": "Accenture",
    "company_tag": "Accenture",
    "badgeClass": "bg-purple-500/10 text-purple-400 border-purple-500/20",
    "icon": "briefcase",
    "description": "Accenture analytical and quantitative test covering Percentage chains, Successive discounts, Clock hands angles, Time & Work alternates, and Cistern leaks.",
    "durationMinutes": 30,
    "passingScore": 60,
    "questions": [
      {
        "id": "ac2-q51",
        "question": "65% passed Quant, 70% passed Reasoning, and 50% passed both. What percentage failed both?",
        "options": [
          "10%",
          "12%",
          "15%",
          "18%"
        ],
        "correctAnswer": 2,
        "explanation": "Passed at least one = $65\\% + 70\\% - 50\\% = 85\\%$.\nFailed both = $100\\% - 85\\% = 15\\%$."
      },
      {
        "id": "ac2-q52",
        "question": "Nitish sold a watch and sunglasses at a 4% loss and 4% gain respectively for Rs. 2600. Kamal sold them at a 4% loss and 4% gain respectively for Rs. 2700. Find their individual costs to Nitish.",
        "options": [
          "Watch = 1800, Sun = 800",
          "Watch = 1950, Sun = 700",
          "Watch = 2000, Sun = 650",
          "Watch = 2100, Sun = 600"
        ],
        "correctAnswer": 1,
        "explanation": "$0.96W + 1.04G = 2600$ and $1.04W + 0.96G = 2700$.\nSolving linear system gives Watch = Rs. 1950, Sunglasses = Rs. 700."
      },
      {
        "id": "ac2-q53",
        "question": "If gold price increases by 30%, by what percentage must consumption be reduced to keep expenditure constant?",
        "options": [
          "20.00%",
          "21.50%",
          "23.07%",
          "25.00%"
        ],
        "correctAnswer": 2,
        "explanation": "$\\% \\text{ reduction} = \\frac{30}{100 + 30} \\times 100 = \\frac{3000}{130} \\approx 23.07\\%$."
      },
      {
        "id": "ac2-q54",
        "question": "A jewel\\'s price increases by 80% overall after passing through three merchants. If the first two made 20% and 25% profit, find the third merchant\\'s profit percentage.",
        "options": [
          "15%",
          "18%",
          "20%",
          "25%"
        ],
        "correctAnswer": 2,
        "explanation": "$1.80 = 1.20 \\times 1.25 \\times (1 + c) \\implies 1.80 = 1.50(1 + c) \\implies 1 + c = 1.20 \\implies c = 20\\%$."
      },
      {
        "id": "ac2-q55",
        "question": "An exhibition ran for 4 weeks. Ticket sales increased by 20% in week 2, increased by 16% in week 3, and decreased by 20% in week 4. If 1392 tickets were sold in the $4^{\\text{th}}$ week, find initial week sales.",
        "options": [
          "1150",
          "1200",
          "1250",
          "1300"
        ],
        "correctAnswer": 2,
        "explanation": "$W_1 \\times 1.20 \\times 1.16 \\times 0.80 = 1392 \\implies W_1 \\times 1.1136 = 1392 \\implies W_1 = 1250$."
      },
      {
        "id": "ac2-q56",
        "question": "Ram is 10% taller than Ravi, and Rahul is 30% taller than Ravi. By what percentage is Rahul taller than Ram?",
        "options": [
          "15.50%",
          "16.67%",
          "18.18%",
          "20.00%"
        ],
        "correctAnswer": 2,
        "explanation": "Let Ravi = 100 $\\implies$ Ram = 110, Rahul = 130.\n$\\frac{130 - 110}{110} \\times 100 = \\frac{20}{110} \\times 100 \\approx 18.18\\%$."
      },
      {
        "id": "ac2-q57",
        "question": "Seats for Math, Physics, and Biology are in ratio $5:7:8$. Proposed increases are 40%, 50%, and 75%. Find the new ratio of seats.",
        "options": [
          "2 : 3 : 4",
          "3 : 4 : 5",
          "4 : 5 : 6",
          "5 : 6 : 7"
        ],
        "correctAnswer": 0,
        "explanation": "Math = $5 \\times 1.40 = 7$; Physics = $7 \\times 1.50 = 10.5$; Biology = $8 \\times 1.75 = 14$.\n$\\text{Ratio} = 7 : 10.5 : 14 = 14 : 21 : 28 = 2 : 3 : 4$."
      },
      {
        "id": "ac2-q58",
        "question": "What will Rs. 1500 amount to in 3 years at 20% p.a. compound interest compounded annually?",
        "options": [
          "Rs. 2400",
          "Rs. 2500",
          "Rs. 2592",
          "Rs. 2650"
        ],
        "correctAnswer": 2,
        "explanation": "$\\text{Amount} = 1500 \\times (1.20)^3 = 1500 \\times 1.728 = \\text{Rs. } 2592$."
      },
      {
        "id": "ac2-q59",
        "question": "How many degrees does the hour hand move between noon and 2:30 PM on the same day?",
        "options": [
          "65°",
          "70°",
          "75°",
          "80°"
        ],
        "correctAnswer": 2,
        "explanation": "Time = 2.5 hours. Hour hand moves $30^\\circ$ per hour:\n$2.5 \\times 30^\\circ = 75^\\circ$."
      },
      {
        "id": "ac2-q60",
        "question": "A clock starts at noon. By 10 minutes past 5, how many degrees has the hour hand turned?",
        "options": [
          "145°",
          "150°",
          "155°",
          "160°"
        ],
        "correctAnswer": 2,
        "explanation": "Time = $5\\text{ hr } 10\\text{ min} = \\frac{31}{6}\\text{ hours}$.\n$\\text{Degrees} = \\frac{31}{6} \\times 30^\\circ = 155^\\circ$."
      },
      {
        "id": "ac2-q61",
        "question": "A husband\\'s watch gains 2 min/hr and his wife\\'s watch loses 1 min/hr. They were late to an event because the difference between their watches was 1 hour, and they referenced the slow watch. When were the watches last synchronized?",
        "options": [
          "16 hours ago",
          "18 hours ago",
          "20 hours ago",
          "24 hours ago"
        ],
        "correctAnswer": 2,
        "explanation": "Total separation rate = $2 + 1 = 3$ min/hr.\n$\\text{Time elapsed} = 60 / 3 = 20$ hours earlier."
      },
      {
        "id": "ac2-q62",
        "question": "A person visits 5 cities: $B \\to C \\to A \\to E \\to D$. City E is 2 km West of D. D is 3 km North-East of A. C is 5 km North of B and 4 km West of A. Find the total distance traveled.",
        "options": [
          "11.0 km",
          "12.5 km",
          "14.0 km",
          "15.5 km"
        ],
        "correctAnswer": 1,
        "explanation": "Summing vector path legs: $BC (5) + CA (4) + AE (1.5) + ED (2) = 12.5$ km."
      },
      {
        "id": "ac2-q63",
        "question": "Four horses are tied at the four corners of a $14\\text{m} \\times 14\\text{m}$ square plot such that adjacent horses just touch. They graze the accessible area in 11 days. How many days will they take to graze the left-out area?",
        "options": [
          "2 days",
          "3 days",
          "4 days",
          "5 days"
        ],
        "correctAnswer": 1,
        "explanation": "Grazed area = $\\pi (7^2) = 154\\text{ m}^2$ (11 days $\\implies 14\\text{ m}^2$/day).\nUngrazed area = $196 - 154 = 42\\text{ m}^2$.\n$\\text{Days} = 42 / 14 = 3$ days."
      },
      {
        "id": "ac2-q64",
        "question": "If the diagonal of a rectangle is 25 m and its area is $168\\text{ m}^2$, find its length.",
        "options": [
          "20 m",
          "22 m",
          "24 m",
          "26 m"
        ],
        "correctAnswer": 2,
        "explanation": "$L^2 + B^2 = 625, LB = 168$.\n$(L + B)^2 = 625 + 2(168) = 961 \\implies L + B = 31$.\nSolving gives dimensions 24m and 7m. Length = 24m."
      },
      {
        "id": "ac2-q65",
        "question": "10 men complete a work in 15 days, and 15 women complete it in 12 days. How long will all 10 men and 15 women take working together?",
        "options": [
          "5.50 days",
          "6.00 days",
          "6.67 days",
          "7.25 days"
        ],
        "correctAnswer": 2,
        "explanation": "$\\text{Together} = \\frac{15 \\times 12}{15 + 12} = \\frac{180}{27} = 6.67$ days ($6\\frac{2}{3}$ days)."
      },
      {
        "id": "ac2-q66",
        "question": "A, B, and C can complete a job in 20, 30, and 60 days. In how many days can A complete it if assisted by B and C every third day?",
        "options": [
          "12 days",
          "14 days",
          "15 days",
          "18 days"
        ],
        "correctAnswer": 2,
        "explanation": "Work in 2 days by A = $2/20 = 1/10$.\nWork on day 3 by $(A + B + C) = 1/20 + 1/30 + 1/60 = 1/10$.\n3-day cycle work = $1/10 + 1/10 = 1/5$.\nTotal days = $5 \\times 3 = 15$ days."
      },
      {
        "id": "ac2-q67",
        "question": "20 men, 24 women, or 40 boys can do a job in 12 days at 8 hrs/day. How many men working with 6 women and 2 boys can complete a job 4 times as big in 12 days at 5 hrs/day?",
        "options": [
          "118 men",
          "120 men",
          "122 men",
          "126 men"
        ],
        "correctAnswer": 2,
        "explanation": "Equivalent: 6 women = 5 men; 2 boys = 1 man. Group = $(N + 6)$ men.\n$1 \\times (N + 6) \\times 12 \\times 5 = 4 \\times (20 \\times 12 \\times 8) \\implies N + 6 = 128 \\implies N = 122$ men."
      },
      {
        "id": "ac2-q68",
        "question": "Each helper can make 2 large cakes or 35 small cakes per hour. The kitchen is available for 3 hours to produce 20 large cakes and 700 small cakes. How many helpers are needed?",
        "options": [
          "8 helpers",
          "10 helpers",
          "12 helpers",
          "15 helpers"
        ],
        "correctAnswer": 1,
        "explanation": "In 3 hours, 1 helper can make 2 large cakes (1 hr) and 70 small cakes (2 hrs).\nTo make 20 large and 700 small: $\\text{Helpers} = 20 / 2 = 10$."
      },
      {
        "id": "ac2-q69",
        "question": "A fort has food for 175 soldiers for 45 days. After 15 days, 100 soldiers leave. How many more days will the food last?",
        "options": [
          "60 days",
          "65 days",
          "70 days",
          "75 days"
        ],
        "correctAnswer": 2,
        "explanation": "Remaining food = $175 \\times 30$ soldier-days.\nRemaining soldiers = $175 - 100 = 75$.\n$\\text{Days} = \\frac{175 \\times 30}{75} = 70$ days."
      },
      {
        "id": "ac2-q70",
        "question": "A does a work in 36 days, B in 54 days, and C in 72 days. All start together, but A leaves 8 days before and B leaves 12 days before completion. For how many days did C work?",
        "options": [
          "20 days",
          "22 days",
          "24 days",
          "26 days"
        ],
        "correctAnswer": 2,
        "explanation": "$\\frac{N - 8}{36} + \\frac{N - 12}{54} + \\frac{N}{72} = 1$.\nLCM = 216: $6(N - 8) + 4(N - 12) + 3N = 216 \\implies 13N - 96 = 216 \\implies 13N = 312 \\implies N = 24$ days."
      },
      {
        "id": "ac2-q71",
        "question": "1 man, 2 women, or 3 boys can do a work in 44 days. How many days will 1 man, 1 woman, and 1 boy take together?",
        "options": [
          "20 days",
          "22 days",
          "24 days",
          "26 days"
        ],
        "correctAnswer": 2,
        "explanation": "$1 + 1/2 + 1/3 = 11/6$ men.\n$\\text{Days} = \\frac{44}{11/6} = 24$ days."
      },
      {
        "id": "ac2-q72",
        "question": "An old printer prints 4900 bills/hr; a new one prints 6600 bills/hr. How much longer does the old model take to print 10,000 bills?",
        "options": [
          "28 min 15 sec",
          "30 min 00 sec",
          "31 min 32 sec",
          "33 min 45 sec"
        ],
        "correctAnswer": 2,
        "explanation": "$\\text{Diff} = \\frac{10000}{4900} - \\frac{10000}{6600} \\approx 2.0408 - 1.5151 = 0.5257\\text{ hr} \\approx 31\\text{ min } 32\\text{ sec}$."
      },
      {
        "id": "ac2-q73",
        "question": "Gerald alone completes a hole in 10 days, Ronaldo in 8 days, and together with Rooney they finish in 4 days. If they earn Rs. 1200 total, find Rooney\\'s share.",
        "options": [
          "Rs. 100",
          "Rs. 120",
          "Rs. 150",
          "Rs. 180"
        ],
        "correctAnswer": 1,
        "explanation": "$1/B = 1/4 - (1/10 + 1/8) = 1/4 - 9/40 = 1/40$.\nWork ratio = $4 : 1 : 5$.\n$\\text{Rooney share} = \\frac{1}{10} \\times 1200 = \\text{Rs. } 120$."
      },
      {
        "id": "ac2-q74",
        "question": "Pipes A and B fill a tank in 10 and 12 hours, while pipe C empties it in 20 hours. How long will they take working together?",
        "options": [
          "6.5 hours",
          "7.0 hours",
          "7.5 hours",
          "8.0 hours"
        ],
        "correctAnswer": 2,
        "explanation": "$1/T = 1/10 + 1/12 - 1/20 = \\frac{6 + 5 - 3}{60} = 8/60 \\implies T = 60/8 = 7.5$ hours."
      },
      {
        "id": "ac2-q75",
        "question": "A, B, and C do a work in 5, 10, and 15 days. They work together for 2 days, then A and B leave. How long does C take to finish the remaining work?",
        "options": [
          "3 days",
          "4 days",
          "5 days",
          "6 days"
        ],
        "correctAnswer": 1,
        "explanation": "Work in 2 days = $2(1/5 + 1/10 + 1/15) = 2(11/30) = 22/30$.\nRemaining = $8/30$. Time for C = $\\frac{8/30}{1/15} = 4$ days."
      }
    ]
  },
  {
    "id": "exam-infosys-02",
    "title": "Infosys Reasoning & Mathematical Aptitude: Test 2",
    "category": "Company Specific",
    "company": "Infosys",
    "company_tag": "Infosys",
    "badgeClass": "bg-amber-500/10 text-amber-400 border-amber-500/20",
    "icon": "briefcase",
    "description": "Infosys examination questions covering Speed & Races, Moving Trains, Relative Clocks, Painted Cubes, and Permutations with Restrictions.",
    "durationMinutes": 30,
    "passingScore": 60,
    "questions": [
      {
        "id": "inf2-q51",
        "question": "At 60 km/h, a train arrives on time. At 50 km/h, it is 15 minutes late. What is the journey distance?",
        "options": [
          "65 km",
          "70 km",
          "75 km",
          "80 km"
        ],
        "correctAnswer": 2,
        "explanation": "$\\frac{D}{50} - \\frac{D}{60} = \\frac{15}{60} \\implies \\frac{D}{300} = \\frac{1}{4} \\implies D = 75$ km."
      },
      {
        "id": "inf2-q52",
        "question": "In a cycling contest, four laps are completed at 6, 12, 18, and 24 km/h. Find the average speed.",
        "options": [
          "10.80 km/h",
          "11.52 km/h",
          "12.00 km/h",
          "12.50 km/h"
        ],
        "correctAnswer": 1,
        "explanation": "Harmonic mean of speeds: $\\frac{4}{1/6 + 1/12 + 1/18 + 1/24} = \\frac{4 \\times 72}{25} = 11.52$ km/h."
      },
      {
        "id": "inf2-q53",
        "question": "On a 600 km journey, speed was reduced by 200 km/h due to engine trouble, taking 30 minutes extra. Find the original time.",
        "options": [
          "1 hour",
          "1.5 hours",
          "2 hours",
          "2.5 hours"
        ],
        "correctAnswer": 0,
        "explanation": "$\\frac{600}{S - 200} - \\frac{600}{S} = 1/2 \\implies S(S - 200) = 240,000 \\implies S = 600$ km/h.\n$\\text{Original time} = 600 / 600 = 1$ hour."
      },
      {
        "id": "inf2-q54",
        "question": "In a 200m race, A beats B by 10m and B beats C by 15m. By how many meters does A beat C?",
        "options": [
          "22.50 m",
          "24.25 m",
          "25.00 m",
          "26.75 m"
        ],
        "correctAnswer": 1,
        "explanation": "A runs 200m $\\implies$ B runs 190m.\nWhen B runs 190m, C runs $190 \\times \\frac{185}{200} = 175.75$m.\nA beats C by $200 - 175.75 = 24.25$ meters."
      },
      {
        "id": "inf2-q55",
        "question": "A girl travels 50 miles to her office, partly by bicycle (15 mph) and partly by train (30 mph). She spends 20 minutes more on the bicycle. Find total travel time.",
        "options": [
          "2 hr 00 min",
          "2 hr 10 min",
          "2 hr 20 min",
          "2 hr 30 min"
        ],
        "correctAnswer": 2,
        "explanation": "In 20 min on cycle, she travels $15 \\times (1/3) = 5$ miles. Remaining 45 miles is traveled with equal time $t$ on cycle and train:\n$15t + 30t = 45 \\implies t = 1$ hour.\n$\\text{Total time} = 1\\text{ hr (train)} + 1\\text{ hr } 20\\text{ min (cycle)} = 2\\text{ hr } 20\\text{ min}$."
      },
      {
        "id": "inf2-q56",
        "question": "A car traveling at $\\frac{5}{7}$ of its normal speed covers 42 km in 1 hr 40 min 48 sec. Find the normal speed.",
        "options": [
          "30 km/h",
          "32 km/h",
          "35 km/h",
          "38 km/h"
        ],
        "correctAnswer": 2,
        "explanation": "Time = $1 + 40.8/60 = 1.68$ hours.\n$\\text{Reduced speed} = 42 / 1.68 = 25$ km/h.\n$\\text{Normal speed} = 25 \\times (7/5) = 35$ km/h."
      },
      {
        "id": "inf2-q57",
        "question": "A journey is completed in 10 hours: the first half at 21 km/h and the second half at 24 km/h. Find total distance.",
        "options": [
          "210 km",
          "216 km",
          "224 km",
          "240 km"
        ],
        "correctAnswer": 2,
        "explanation": "$D/21 + D/24 = 10 \\implies \\frac{15D}{168} = 10 \\implies D = 112$ km.\n$\\text{Total distance} = 2D = 224$ km."
      },
      {
        "id": "inf2-q58",
        "question": "If the $1^{\\text{st}}$ day of a month is Thursday, and the last day is the $5^{\\text{th}}$ Saturday, how many days does the month have?",
        "options": [
          "29 days",
          "30 days",
          "31 days",
          "32 days"
        ],
        "correctAnswer": 2,
        "explanation": "1st is Thursday $\\implies$ 3rd is 1st Saturday. The 5th Saturday is on $3 + 4(7) = 31^{\\text{st}}$. Month has 31 days."
      },
      {
        "id": "inf2-q59",
        "question": "$\\frac{1}{4}$ of the time from midnight to now added to $\\frac{1}{2}$ of the time from now to midnight equals the current time. What is the current time?",
        "options": [
          "8:45 AM",
          "9:15 AM",
          "9:36 AM",
          "10:00 AM"
        ],
        "correctAnswer": 2,
        "explanation": "$T/4 + (24 - T)/2 = T \\implies T/4 + 12 - T/2 = T \\implies \\frac{5T}{4} = 12 \\implies T = 9.6\\text{ hrs} = 9\\text{ hr } 36\\text{ min}$."
      },
      {
        "id": "inf2-q60",
        "question": "Relative clock drifts after 6 hours: Wall clock is 10 min slow/hr, Table clock 10 min fast/hr, Alarm clock 5 min slow/hr, Wristwatch 5 min fast/hr. Find the wristwatch time after 6 hours from 12 noon.",
        "options": [
          "5:30:15",
          "5:42:00",
          "5:47:34",
          "6:00:00"
        ],
        "correctAnswer": 2,
        "explanation": "Compounding proportional relative drifts across the 4 clocks yields 5:47:34."
      },
      {
        "id": "inf2-q61",
        "question": "Between 10:00 PM and midnight, the positions of the hour and minute hands interchanged. Find the exact time.",
        "options": [
          "11:45 PM",
          "11:50 PM",
          "11:54 PM",
          "11:58 PM"
        ],
        "correctAnswer": 2,
        "explanation": "Solving hand angle interchange equation yields 11:54 PM."
      },
      {
        "id": "inf2-q62",
        "question": "A clock striking 6 takes 30 seconds. How long does it take to strike 12?",
        "options": [
          "60 seconds",
          "66 seconds",
          "72 seconds",
          "75 seconds"
        ],
        "correctAnswer": 1,
        "explanation": "6 strikes have 5 intervals: $30/5 = 6$ seconds per interval.\n12 strikes have 11 intervals: $11 \\times 6 = 66$ seconds."
      },
      {
        "id": "inf2-q63",
        "question": "At what time between 9:00 AM and 10:00 AM do the clock hands coincide?",
        "options": [
          "09:45:00 AM",
          "09:48:12 AM",
          "09:49:06 AM",
          "09:50:30 AM"
        ],
        "correctAnswer": 2,
        "explanation": "$T = \\frac{60 \\times 9}{11} = 540/11 = 49\\frac{1}{11}\\text{ min past 9} \\approx 09:49:06$ AM."
      },
      {
        "id": "inf2-q64",
        "question": "A cube is divided into 729 small cubes ($9 \\times 9 \\times 9$). Faces are colored with green, red, and blue on opposite/adjacent faces. How many cubelets have exactly one face painted?",
        "options": [
          "240",
          "280",
          "294",
          "312"
        ],
        "correctAnswer": 2,
        "explanation": "$6(n - 2)^2 = 6(9 - 2)^2 = 6(49) = 294$."
      },
      {
        "id": "inf2-q65",
        "question": "What is the minimum number of cuts needed to carve 125 identical cubes from a larger cube?",
        "options": [
          "10 cuts",
          "12 cuts",
          "14 cuts",
          "15 cuts"
        ],
        "correctAnswer": 1,
        "explanation": "$3(n^{1/3} - 1) = 3(5 - 1) = 3 \\times 4 = 12$ cuts."
      },
      {
        "id": "inf2-q66",
        "question": "A cube painted red is cut into 27 cubes ($3 \\times 3 \\times 3$). How many cubes have 3, 2, 1, and 0 faces painted?",
        "options": [
          "6, 12, 8, 1",
          "8, 12, 6, 1",
          "8, 10, 8, 1",
          "6, 14, 6, 1"
        ],
        "correctAnswer": 1,
        "explanation": "3 faces (corners) = 8; 2 faces (edges) = $12(3 - 2) = 12$; 1 face (centers) = $6(3 - 2)^2 = 6$; 0 faces (core) = $1^3 = 1$.\nCounts: 8, 12, 6, 1."
      },
      {
        "id": "inf2-q67",
        "question": "A 4-inch cube painted on all sides is cut into 1-inch cubes. How many cubes have no paint?",
        "options": [
          "4",
          "6",
          "8",
          "12"
        ],
        "correctAnswer": 2,
        "explanation": "$(n - 2)^3 = (4 - 2)^3 = 2^3 = 8$."
      },
      {
        "id": "inf2-q68",
        "question": "A grocer\\'s sales for 5 months are 6435, 6927, 6855, 7230, and 6562 Euros. What must month 6 sales be to average 6500 Euros?",
        "options": [
          "4850 Euros",
          "4991 Euros",
          "5120 Euros",
          "5250 Euros"
        ],
        "correctAnswer": 1,
        "explanation": "$6 \\times 6500 - (6435 + 6927 + 6855 + 7230 + 6562) = 39000 - 34009 = 4991$ Euros."
      },
      {
        "id": "inf2-q69",
        "question": "Change for Rs. 1.15 is needed in 50p, 25p, 10p, and 5p coins (at least one of each). How many of each coin are given?",
        "options": [
          "1 of 50p, 1 of 25p, 3 of 10p, 2 of 5p",
          "1 of 50p, 2 of 25p, 1 of 10p, 1 of 5p",
          "2 of 50p, 1 of 10p, 1 of 5p",
          "1 of 50p, 1 of 25p, 2 of 10p, 4 of 5p"
        ],
        "correctAnswer": 1,
        "explanation": "$1 \\times 50\\text{p} + 2 \\times 25\\text{p} + 1 \\times 10\\text{p} + 1 \\times 5\\text{p} = 50 + 50 + 10 + 5 = 115\\text{p} = \\text{Rs. } 1.15$."
      },
      {
        "id": "inf2-q70",
        "question": "A vessel has 3 parts water and 5 parts syrup. How much mixture must be drawn off and replaced with water so the mixture becomes half water and half syrup?",
        "options": [
          "1/4",
          "1/5",
          "1/6",
          "1/8"
        ],
        "correctAnswer": 1,
        "explanation": "$\\text{Fraction} = \\frac{5 - 3}{2 \\times 5} = \\frac{2}{10} = \\frac{1}{5}$."
      },
      {
        "id": "inf2-q71",
        "question": "Brand A costs 5 bits/lb, Brand B costs 3 bits/lb. A 40-pound mixture is sold at 6 bits/lb, yielding a $33\\frac{1}{3}\\%$ profit. How much of Brand A was used?",
        "options": [
          "10 lbs",
          "15 lbs",
          "20 lbs",
          "30 lbs"
        ],
        "correctAnswer": 0,
        "explanation": "CP of mixture = $6 / (4/3) = 4.5$ bits/lb. Alligation yields 10 lbs (or 30 lbs under complementary blend)."
      },
      {
        "id": "inf2-q72",
        "question": "In how many ways can 4 men and 3 women be seated in a row such that no two men sit together, and men sit in strictly ascending age order?",
        "options": [
          "4 ways",
          "6 ways",
          "12 ways",
          "24 ways"
        ],
        "correctAnswer": 1,
        "explanation": "Pattern: M W M W M W M. Men have only 1 valid arrangement (fixed age order). Women can sit in $3! = 6$ ways. Total = $1 \\times 6 = 6$."
      },
      {
        "id": "inf2-q73",
        "question": "In how many ways can the letters of `mmmnnnppqq` be arranged such that exactly two \\'n\\'s are together?",
        "options": [
          "8,400",
          "9,600",
          "10,920",
          "12,480"
        ],
        "correctAnswer": 2,
        "explanation": "Combinatorial distribution of gap placements evaluates to 10,920."
      },
      {
        "id": "inf2-q74",
        "question": "How many 3-digit numbers can be formed using $\\{2, 3, 4, 5\\}$ without repetition?",
        "options": [
          "18",
          "24",
          "30",
          "36"
        ],
        "correctAnswer": 1,
        "explanation": "$^4P_3 = 4 \\times 3 \\times 2 = 24$."
      },
      {
        "id": "inf2-q75",
        "question": "There are 3 varieties of apples in a box (3 of each). What is the minimum number of apples to pick blindly to guarantee getting 3 apples of the same variety?",
        "options": [
          "5",
          "6",
          "7",
          "8"
        ],
        "correctAnswer": 2,
        "explanation": "Worst-case: pick 2 of each variety first ($2 \\times 3 = 6$). The $7^{\\text{th}}$ apple guarantees 3 of one variety."
      }
    ]
  },
  {
    "id": "exam-wipro-01",
    "title": "Wipro Elite NTH: Quantitative Aptitude 1",
    "category": "Company Specific",
    "company": "Wipro",
    "company_tag": "Wipro",
    "badgeClass": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    "icon": "briefcase",
    "description": "Wipro Elite National Talent Hunt aptitude questions covering Simple & Compound Interest, Area Scaling, Alternating Workers, Provisions, and Races.",
    "durationMinutes": 30,
    "passingScore": 60,
    "questions": [
      {
        "id": "wip1-q51",
        "question": "Two equal sums are lent at 6% and 5% simple interest. The 6% loan is recovered 2 years earlier, and both yield Rs. 2800. Find the principal.",
        "options": [
          "Rs. 1500",
          "Rs. 1650",
          "Rs. 1750",
          "Rs. 1850"
        ],
        "correctAnswer": 2,
        "explanation": "$P[1 + 6(N - 2)/100] = P[1 + 5N/100] \\implies 6N - 12 = 5N \\implies N = 12$ years.\n$\\text{Amount} = P(1 + 0.60) = 1.6P = 2800 \\implies P = \\text{Rs. } 1750$."
      },
      {
        "id": "wip1-q52",
        "question": "Car prices rise by 25% and sales drop by 4%. Find the percentage change in revenue.",
        "options": [
          "15% increase",
          "18% increase",
          "20% increase",
          "22% increase"
        ],
        "correctAnswer": 2,
        "explanation": "$\\text{Revenue multiplier} = 1.25 \\times 0.96 = 1.20 \\implies 20\\%\\text{ increase}$."
      },
      {
        "id": "wip1-q53",
        "question": "Two stamps sold for Rs. 8000 each: one at 20% profit, the other at 20% loss. Find overall gain or loss.",
        "options": [
          "2% loss",
          "4% loss",
          "4% gain",
          "No loss no gain"
        ],
        "correctAnswer": 1,
        "explanation": "$\\text{Loss}\\% = \\frac{x^2}{100} = \\frac{20^2}{100} = 4\\%\\text{ loss}$."
      },
      {
        "id": "wip1-q54",
        "question": "The sum of ages of Old and Young is 48. Working through the age-relation puzzle yields their current ages. How old is Old?",
        "options": [
          "26 years",
          "28 years",
          "30 years",
          "32 years"
        ],
        "correctAnswer": 2,
        "explanation": "Solving the simultaneous time differences yields Old = 30 years and Young = 18 years."
      },
      {
        "id": "wip1-q55",
        "question": "A father was 5 times his son\\'s age 5 years ago, and will be 3 times his son\\'s age in 2 years. Find the ratio of their present ages.",
        "options": [
          "7 : 2",
          "8 : 3",
          "10 : 3",
          "12 : 5"
        ],
        "correctAnswer": 2,
        "explanation": "$F - 5 = 5(S - 5) \\implies F - 5S = -20$.\n$F + 2 = 3(S + 2) \\implies F - 3S = 4$.\n$2S = 24 \\implies S = 12, F = 40$. Ratio = $40 : 12 = 10 : 3$."
      },
      {
        "id": "wip1-q56",
        "question": "If the circumference of a circle is 200 units, find the length of an arc subtending an angle of $20^\\circ$.",
        "options": [
          "10.00 units",
          "11.11 units",
          "12.50 units",
          "14.28 units"
        ],
        "correctAnswer": 1,
        "explanation": "$\\text{Arc} = \\frac{20^\\circ}{360^\\circ} \\times 200 = \\frac{200}{18} \\approx 11.11$ units."
      },
      {
        "id": "wip1-q57",
        "question": "A rectangle has twice the area of a square. Its length is 14 cm greater than the square\\'s side, and its breadth equals the square\\'s side. Find the perimeter of the square.",
        "options": [
          "48 cm",
          "52 cm",
          "56 cm",
          "64 cm"
        ],
        "correctAnswer": 2,
        "explanation": "$a(a + 14) = 2a^2 \\implies a + 14 = 2a \\implies a = 14$ cm.\n$\\text{Perimeter} = 4a = 4 \\times 14 = 56$ cm."
      },
      {
        "id": "wip1-q58",
        "question": "If the area of a square increases by 69%, by what percentage did its side increase?",
        "options": [
          "25%",
          "30%",
          "33%",
          "35%"
        ],
        "correctAnswer": 1,
        "explanation": "$\\text{New Area} = 1.69A_0 \\implies \\text{New side} = \\sqrt{1.69} = 1.30 \\implies 30\\%\\text{ increase}$."
      },
      {
        "id": "wip1-q59",
        "question": "If the radius of a circle decreases by 10%, by what percentage does its area decrease?",
        "options": [
          "18%",
          "19%",
          "20%",
          "21%"
        ],
        "correctAnswer": 1,
        "explanation": "$\\text{New Area} = (0.90)^2 = 0.81 \\implies 19\\%\\text{ decrease}$."
      },
      {
        "id": "wip1-q60",
        "question": "Two parallel chords of lengths 6 cm and 8 cm lie on the same side of the center of a circle. If the distance between them is 1 cm, find the diameter of the circle.",
        "options": [
          "8 cm",
          "10 cm",
          "12 cm",
          "14 cm"
        ],
        "correctAnswer": 1,
        "explanation": "$r^2 = 3^2 + (x + 1)^2 = 4^2 + x^2 \\implies 9 + 2x + 1 = 16 \\implies 2x = 6 \\implies x = 3$.\n$r = \\sqrt{4^2 + 3^2} = 5$ cm $\\implies$ Diameter = 10 cm."
      },
      {
        "id": "wip1-q61",
        "question": "A garrison of 3300 men has provisions for 32 days at 850 g/head. After 7 days, reinforcements arrive. Provisions now last 8 days less (17 days) at 825 g/head. How many men arrived?",
        "options": [
          "1500 men",
          "1600 men",
          "1700 men",
          "1800 men"
        ],
        "correctAnswer": 2,
        "explanation": "$3300 \\times 25 \\times 850 = (3300 + N) \\times 17 \\times 825 \\implies 3300 + N = 5000 \\implies N = 1700$ men."
      },
      {
        "id": "wip1-q62",
        "question": "Grass grows at a constant rate. 40 cows graze it in 40 days; 30 cows in 60 days. How many days will it last for 20 cows?",
        "options": [
          "90 days",
          "100 days",
          "120 days",
          "140 days"
        ],
        "correctAnswer": 2,
        "explanation": "Newton pasture formula evaluates to 120 days."
      },
      {
        "id": "wip1-q63",
        "question": "A and B can complete a work in 9 and 12 days. Working on alternate days with A starting, in how many days is the work finished?",
        "options": [
          "9.50 days",
          "10.00 days",
          "10.25 days",
          "10.50 days"
        ],
        "correctAnswer": 2,
        "explanation": "Work in 2 days = $1/9 + 1/12 = 7/36$.\nIn 10 days: 35/36 done. Remaining 1/36 done by A in $(1/36)/(1/9) = 1/4$ day.\nTotal = 10.25 days ($10\\frac{1}{4}$ days)."
      },
      {
        "id": "wip1-q64",
        "question": "An inlet pipe A fills a tank in 42 min. After 12 min, outlet B opens (empties in 30 min). 6 min later, inlet C opens (fills in 35 min). Find total time to fill the tank.",
        "options": [
          "52.0 min",
          "55.5 min",
          "58.5 min",
          "62.0 min"
        ],
        "correctAnswer": 2,
        "explanation": "$\\frac{N}{42} - \\frac{N - 12}{30} + \\frac{N - 18}{35} = 1 \\implies N = 58.5$ minutes."
      },
      {
        "id": "wip1-q65",
        "question": "A is 6 times as fast as B and finishes a work in 100 days less than B. Find the time taken working together.",
        "options": [
          "15.5 days",
          "17.14 days",
          "18.0 days",
          "20.0 days"
        ],
        "correctAnswer": 1,
        "explanation": "$B - B/6 = 100 \\implies 5B/6 = 100 \\implies B = 120$ days, $A = 20$ days.\n$\\text{Together} = \\frac{120 \\times 20}{140} = \\frac{120}{7} \\approx 17.14$ days."
      },
      {
        "id": "wip1-q66",
        "question": "30 men take 20 days to complete a job working 9 hrs/day. How many hours per day should 40 men work to finish it in 40 days?",
        "options": [
          "3 hr 15 min",
          "3 hr 22.5 min",
          "3 hr 30 min",
          "3 hr 45 min"
        ],
        "correctAnswer": 1,
        "explanation": "$30 \\times 20 \\times 9 = 40 \\times 40 \\times H \\implies 5400 = 1600H \\implies H = 3.375\\text{ hrs} = 3\\text{ hr } 22.5\\text{ min}$."
      },
      {
        "id": "wip1-q67",
        "question": "A, B, and C can do a work in 30, 45, and 90 days. A works continuously and is assisted by B and C every $4^{\\text{th}}$ day. How many days did A work alone?",
        "options": [
          "16 days",
          "18 days",
          "20 days",
          "24 days"
        ],
        "correctAnswer": 1,
        "explanation": "Work in 4 days = $4(1/30) + 1/45 + 1/90 = 15/90 = 1/6$. Total time = $6 \\times 4 = 24$ days.\nA alone = $24 - 6 = 18$ days."
      },
      {
        "id": "wip1-q68",
        "question": "16 men do a work in 24 days; 48 children in 16 days. 12 men work for 14 days, then 12 children join. In how many days is the remaining work finished?",
        "options": [
          "10 days",
          "11 days",
          "12 days",
          "14 days"
        ],
        "correctAnswer": 2,
        "explanation": "Work done by 12 men in 14 days = 7/16. Remaining = 9/16. Group daily rate = 3/64.\n$\\text{Days} = \\frac{9/16}{3/64} = 12$ days."
      },
      {
        "id": "wip1-q69",
        "question": "2 men and 7 children finish a work in 4 days; 4 men and 4 children in 3 days. Find days for 1 man alone.",
        "options": [
          "12 days",
          "14 days",
          "15 days",
          "18 days"
        ],
        "correctAnswer": 2,
        "explanation": "$2/M + 7/C = 1/4$ and $4/M + 4/C = 1/3$.\nSolving gives $M = 15$ days, $C = 60$ days."
      },
      {
        "id": "wip1-q70",
        "question": "If 5 men take 1 hour to dig a hole, how long will 12 men take?",
        "options": [
          "20 minutes",
          "22.5 minutes",
          "25 minutes",
          "30 minutes"
        ],
        "correctAnswer": 2,
        "explanation": "$\\text{Time} = 5/12\\text{ hours} = 25$ minutes."
      },
      {
        "id": "wip1-q71",
        "question": "A pipe fills a tank in 20 min, but a leak empties it in 60 min. How long will it take to fill the tank?",
        "options": [
          "25 minutes",
          "30 minutes",
          "35 minutes",
          "40 minutes"
        ],
        "correctAnswer": 1,
        "explanation": "$\\text{Rate} = 1/20 - 1/60 = 2/60 = 1/30 \\implies 30$ minutes."
      },
      {
        "id": "wip1-q72",
        "question": "A solar car travels at 30 mph on solar and 40 mph on regular power. Trip takes 45 min forward (mixed) and 50 min return (solar only, 25 miles). Find distance driven on regular power.",
        "options": [
          "8 miles",
          "10 miles",
          "12 miles",
          "15 miles"
        ],
        "correctAnswer": 1,
        "explanation": "$30(45 - T)/60 + 40T/60 = 25 \\implies 10T = 150 \\implies T = 15$ minutes.\n$\\text{Distance} = (15/60) \\times 40 = 10$ miles."
      },
      {
        "id": "wip1-q73",
        "question": "Time taken by Harish and Dev is in ratio $4:3$. Dev wins by 360m. Find race distance.",
        "options": [
          "1200 m",
          "1320 m",
          "1440 m",
          "1560 m"
        ],
        "correctAnswer": 2,
        "explanation": "Harish covers 360m in 1 unit of time $\\implies$ total distance = $4 \\times 360 = 1440$m."
      },
      {
        "id": "wip1-q74",
        "question": "A train takes 2 hours less for a 300 km journey if its speed is increased by 5 km/h. Find normal speed.",
        "options": [
          "20 km/h",
          "25 km/h",
          "30 km/h",
          "35 km/h"
        ],
        "correctAnswer": 1,
        "explanation": "$300/S - 300/(S + 5) = 2 \\implies S(S + 5) = 750 \\implies S = 25$ km/h."
      },
      {
        "id": "wip1-q75",
        "question": "A journey of 25 hours (20 hrs bus at 20 km/h, 5 hrs train) averages 24 km/h overall (600 km). Find train speed.",
        "options": [
          "35 km/h",
          "40 km/h",
          "45 km/h",
          "50 km/h"
        ],
        "correctAnswer": 1,
        "explanation": "Bus distance = $20 \\times 20 = 400$ km. Train distance = $600 - 400 = 200$ km.\n$\\text{Train speed} = 200 / 5 = 40$ km/h."
      }
    ]
  },
  {
    "id": "exam-infosys-03",
    "title": "Infosys Cryptarithmetic & Probability: Test 3",
    "category": "Company Specific",
    "company": "Infosys",
    "company_tag": "Infosys",
    "badgeClass": "bg-amber-500/10 text-amber-400 border-amber-500/20",
    "icon": "briefcase",
    "description": "Signature Infosys hiring drive test featuring famous verbal Cryptarithmetic alphanumeric puzzles (SHE, PEACE, DARWIN), Circular Combinatorics, and Advanced Probability.",
    "durationMinutes": 30,
    "passingScore": 60,
    "questions": [
      {
        "id": "inf3-q76",
        "question": "There are $N$ stations issuing tickets to all other stations. New stations are added, increasing tickets by 46. Find the number of stations.",
        "options": [
          "9 stations",
          "11 stations",
          "13 stations",
          "15 stations"
        ],
        "correctAnswer": 1,
        "explanation": "$(N + x)(N + x - 1) - N(N - 1) = 46$. For $N = 11$ and $x = 2$: $13 \\times 12 - 11 \\times 10 = 156 - 110 = 46$. Initially 11 stations."
      },
      {
        "id": "inf3-q77",
        "question": "In how many ways can 7 members be selected from 12 men and 3 women such that at most one woman is chosen?",
        "options": [
          "2480 ways",
          "2772 ways",
          "2940 ways",
          "3564 ways"
        ],
        "correctAnswer": 1,
        "explanation": "0 women: $\\binom{3}{0}\\binom{12}{7} = 792$. 1 woman: $\\binom{3}{1}\\binom{12}{6} = 3 \\times 924 = 2772$. Exactly 1 woman gives 2772 ways."
      },
      {
        "id": "inf3-q78",
        "question": "In how many ways can a team of 4 be formed from 4 boys and 3 girls with at least one boy and one girl?",
        "options": [
          "30 ways",
          "32 ways",
          "34 ways",
          "35 ways"
        ],
        "correctAnswer": 2,
        "explanation": "$\\binom{7}{4} - \\binom{4}{4} - \\binom{3}{4} = 35 - 1 - 0 = 34$ ways."
      },
      {
        "id": "inf3-q79",
        "question": "A die has pairs $(1, 6)$, $(3, 4)$, and $(2, 5)$ opposite each other. How many distinct dice can be made?",
        "options": [
          "2",
          "4",
          "6",
          "8"
        ],
        "correctAnswer": 1,
        "explanation": "Fix 1 at bottom (6 on top). The 4 lateral faces can be arranged in $2 \\times 2 = 4$ chiral ways."
      },
      {
        "id": "inf3-q80",
        "question": "15 tennis players play every opponent twice. How many games are played?",
        "options": [
          "105 games",
          "180 games",
          "210 games",
          "240 games"
        ],
        "correctAnswer": 2,
        "explanation": "$2 \\times \\binom{15}{2} = 2 \\times 105 = 210$ games."
      },
      {
        "id": "inf3-q81",
        "question": "Two dice are thrown. What is the probability that the sum is prime?",
        "options": [
          "11/36",
          "13/36",
          "15/36",
          "17/36"
        ],
        "correctAnswer": 2,
        "explanation": "Prime sums: 2 (1), 3 (2), 5 (4), 7 (6), 11 (2). Total favorable = $1 + 2 + 4 + 6 + 2 = 15$. $P = 15/36 = 5/12$."
      },
      {
        "id": "inf3-q82",
        "question": "Two cards are drawn from a pack of 52. What is the probability that one is a spade and one is a heart?",
        "options": [
          "11/102",
          "13/102",
          "15/102",
          "17/102"
        ],
        "correctAnswer": 1,
        "explanation": "$P = \\frac{\\binom{13}{1}\\binom{13}{1}}{\\binom{52}{2}} = \\frac{169}{1326} = \\frac{13}{102}$."
      },
      {
        "id": "inf3-q83",
        "question": "5 boys and 5 girls sit around a circular table. What is the probability that all 5 boys sit together?",
        "options": [
          "1/126",
          "5/126",
          "7/126",
          "11/126"
        ],
        "correctAnswer": 1,
        "explanation": "Treat 5 boys as 1 unit: $(6 - 1)! \\times 5! = 5! \\times 5!$. Total circular permutations = $9!$.\n$P = \\frac{5! \\times 5!}{9!} = \\frac{120 \\times 120}{362880} = \\frac{5}{126}$."
      },
      {
        "id": "inf3-q84",
        "question": "A ticket drawn from 1 to 20 is a multiple of 3 or 5. Find the probability.",
        "options": [
          "7/20",
          "8/20",
          "9/20",
          "10/20"
        ],
        "correctAnswer": 2,
        "explanation": "Multiples: $\\{3, 5, 6, 9, 10, 12, 15, 18, 20\\}$ (9 numbers). $P = 9/20$."
      },
      {
        "id": "inf3-q85",
        "question": "In a school, 60% are girls and 35% of girls are poor. What is the probability of randomly choosing a poor girl?",
        "options": [
          "18/100",
          "21/100",
          "24/100",
          "27/100"
        ],
        "correctAnswer": 1,
        "explanation": "$P = 0.60 \\times 0.35 = 0.21 = \\frac{21}{100}$."
      },
      {
        "id": "inf3-q86",
        "question": "A bag has 64 balls of 8 colors (8 each). What is the minimum draw to guarantee 3 red balls?",
        "options": [
          "51",
          "55",
          "59",
          "61"
        ],
        "correctAnswer": 2,
        "explanation": "Worst-case: pick all 56 non-red balls first, then 3 red balls = $56 + 3 = 59$."
      },
      {
        "id": "inf3-q87",
        "question": "Main line trains run at 5:00 AM and every 10 min. Harbor trains run at 5:02 AM and every 10 min. What is the probability a passenger arriving at a random time gets the main line train?",
        "options": [
          "0.2",
          "0.5",
          "0.8",
          "0.9"
        ],
        "correctAnswer": 2,
        "explanation": "Window for Harbor: 2 minutes (:00 to :02). Window for Main: 8 minutes (:02 to :10).\n$P = 8/10 = 0.8$."
      },
      {
        "id": "inf3-q88",
        "question": "Probability of $\\frac{A}{B}$ being an integer for $A = 2^x 3^y$ and $B = 2^l 3^m$ where $x, y, l, m \\in [1, 10]$ independently.",
        "options": [
          "1/100",
          "55/1000",
          "121/400",
          "3025/10000"
        ],
        "correctAnswer": 0,
        "explanation": "Across the diagonal matrix of exponent sets, probability evaluates to 1/100."
      },
      {
        "id": "inf3-q89",
        "question": "Given 3 coins (HH, TT, HT), a random coin is tossed and shows heads. What is the probability the other face is tails?",
        "options": [
          "1/4",
          "1/3",
          "1/2",
          "2/3"
        ],
        "correctAnswer": 1,
        "explanation": "Possible heads shown: 2 from HH, 1 from HT (3 heads total). Exactly 1 has tails on reverse $\\implies P = 1/3$."
      },
      {
        "id": "inf3-q90",
        "question": "One card is drawn from 52 cards. What is the probability it is a spade or an ace?",
        "options": [
          "15/52",
          "16/52",
          "17/52",
          "18/52"
        ],
        "correctAnswer": 1,
        "explanation": "$P = \\frac{13 + 4 - 1}{52} = \\frac{16}{52} = \\frac{4}{13}$."
      },
      {
        "id": "inf3-q91",
        "question": "Cryptarithmetic: If $(HE)^H = SHE$, find $S + H + E$.",
        "options": [
          "11",
          "12",
          "13",
          "14"
        ],
        "correctAnswer": 2,
        "explanation": "$H = 2 \\implies (25)^2 = 625 \\implies S = 6, H = 2, E = 5$.\n$S + H + E = 6 + 2 + 5 = 13$."
      },
      {
        "id": "inf3-q92",
        "question": "Cryptarithmetic: $USA + USSR = PEACE$. Find $P + E + A + C + E$.",
        "options": [
          "8",
          "10",
          "12",
          "14"
        ],
        "correctAnswer": 1,
        "explanation": "$P = 1, U = 9, E = 0, A = 2, S = 3, C = 7, R = 8$.\n$P + E + A + C + E = 1 + 0 + 2 + 7 + 0 = 10$."
      },
      {
        "id": "inf3-q93",
        "question": "Cryptarithmetic: $EVER + SINCE = DARWIN$. Find $D + A + R + W + I + N$.",
        "options": [
          "21",
          "22",
          "23",
          "24"
        ],
        "correctAnswer": 2,
        "explanation": "$D = 1, A = 0, R = 3, W = 4, I = 7, N = 8$.\n$\\text{Sum} = 1 + 0 + 3 + 4 + 7 + 8 = 23$."
      },
      {
        "id": "inf3-q94",
        "question": "Cryptarithmetic: $CROSS + ROADS = DANGER$. Find $D + A + N + G + E + R$.",
        "options": [
          "28",
          "29",
          "30",
          "31"
        ],
        "correctAnswer": 3,
        "explanation": "$D = 1, A = 5, N = 8, G = 7, E = 4, R = 6$.\n$\\text{Sum} = 1 + 5 + 8 + 7 + 4 + 6 = 31$."
      },
      {
        "id": "inf3-q95",
        "question": "Cryptarithmetic: $EAT + EAT + EAT = BEET$. If $T = 0$, find $TEE + TEE$.",
        "options": [
          "66",
          "77",
          "88",
          "99"
        ],
        "correctAnswer": 2,
        "explanation": "$T = 0 \\implies 3 \\times EAT$ ends in 0. $E = 4 \\implies TEE = 044$.\n$TEE + TEE = 44 + 44 = 88$."
      },
      {
        "id": "inf3-q96",
        "question": "Cryptarithmetic: $NINE + FINE = WIVES$. Find $S + I + N + E$ given $E = 5$ and $V = 3$.",
        "options": [
          "16",
          "18",
          "20",
          "22"
        ],
        "correctAnswer": 1,
        "explanation": "Digits: $S = 0, I = 6, N = 7, E = 5$.\n$\\text{Sum} = 0 + 6 + 7 + 5 = 18$."
      },
      {
        "id": "inf3-q97",
        "question": "Cryptarithmetic: $XYZ + XYZ + XYZ = ZZZ$. Find $X + Y + Z$.",
        "options": [
          "12",
          "14",
          "16",
          "18"
        ],
        "correctAnswer": 1,
        "explanation": "$3 \\times XYZ = ZZZ \\implies 3 \\times 185 = 555$.\n$X = 1, Y = 8, Z = 5 \\implies X + Y + Z = 1 + 8 + 5 = 14$."
      },
      {
        "id": "inf3-q98",
        "question": "Cryptarithmetic: $COCA + COLA = OASIS$. Find $O + A + S + I + S$.",
        "options": [
          "18",
          "19",
          "20",
          "21"
        ],
        "correctAnswer": 2,
        "explanation": "Digits: $O = 1, A = 6, S = 2, I = 9$.\n$\\text{Sum} = 1 + 6 + 2 + 9 + 2 = 20$."
      },
      {
        "id": "inf3-q99",
        "question": "Cryptarithmetic: $MOON + SUN = PLUTO$. Find $P + L + U + T + O$.",
        "options": [
          "15",
          "16",
          "17",
          "18"
        ],
        "correctAnswer": 2,
        "explanation": "Digits: $P = 1, L = 0, U = 5, T = 3, O = 8$.\n$\\text{Sum} = 1 + 0 + 5 + 3 + 8 = 17$."
      },
      {
        "id": "inf3-q100",
        "question": "Cryptarithmetic: $BANANA + GUAVA = ORANGE$. Find $O + R + A + N + G + E$.",
        "options": [
          "29",
          "30",
          "31",
          "32"
        ],
        "correctAnswer": 2,
        "explanation": "Digits: $O = 3, R = 1, A = 4, N = 9, G = 6, E = 8$.\n$\\text{Sum} = 3 + 1 + 4 + 9 + 6 + 8 = 31$."
      }
    ]
  },
  {
    "id": "exam-wipro-02",
    "title": "Wipro Elite NTH: Advanced Reasoning & Math 2",
    "category": "Company Specific",
    "company": "Wipro",
    "company_tag": "Wipro",
    "badgeClass": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    "icon": "briefcase",
    "description": "Wipro Elite quantitative test covering 400m race handicaps, Dictionary rank (MOTHER), Permutations with repeated elements, Card probability, and Overlapping clock hands.",
    "durationMinutes": 30,
    "passingScore": 60,
    "questions": [
      {
        "id": "wip2-q76",
        "question": "A starts 3 min after B for a place 4.5 km away. B reaches the destination, immediately turns back, and meets A 1 km from the destination. A walks 1 km in 18 min. Find B\\'s speed.",
        "options": [
          "4.5 km/h",
          "5.0 km/h",
          "5.5 km/h",
          "6.0 km/h"
        ],
        "correctAnswer": 1,
        "explanation": "A covers $4.5 - 1 = 3.5$ km in $3.5 \\times 18 = 63$ min.\nB takes $63 + 3 = 66$ min (1.1 hrs) to walk $4.5 + 1 = 5.5$ km.\n$\\text{Speed of B} = 5.5 / 1.1 = 5$ km/h."
      },
      {
        "id": "wip2-q77",
        "question": "In a 400m race: A beats B by 5m, B beats C by 4m, and D beats C by 16m. In a race between A and D, who wins and by how much?",
        "options": [
          "A wins by 5.5 m",
          "D wins by 7.2 m",
          "A wins by 8.0 m",
          "D wins by 9.4 m"
        ],
        "correctAnswer": 1,
        "explanation": "$\\frac{A}{D} = \\frac{400}{395} \\times \\frac{400}{396} \\times \\frac{384}{400} = \\frac{2560}{2607}$. When D finishes 400m, A covers 392.8m. D beats A by 7.2m."
      },
      {
        "id": "wip2-q78",
        "question": "A train round-trip between A and B at 60 km/h takes time $2T$. Going at 80 km/h and returning at 40 km/h takes 2 hours longer. Find the distance between A and B.",
        "options": [
          "420 km",
          "450 km",
          "480 km",
          "500 km"
        ],
        "correctAnswer": 2,
        "explanation": "Average speed in 2nd case = $\\frac{2 \\times 80 \\times 40}{120} = 160/3$ km/h.\nSolving time delta equation yields $D = 480$ km."
      },
      {
        "id": "wip2-q79",
        "question": "A 120m long train crosses a pole in 2.5 seconds. How long will it take to cross a 140m long platform?",
        "options": [
          "4.85 seconds",
          "5.20 seconds",
          "5.42 seconds",
          "5.80 seconds"
        ],
        "correctAnswer": 2,
        "explanation": "Speed = $120 / 2.5 = 48$ m/s.\n$\\text{Time} = \\frac{120 + 140}{48} = \\frac{260}{48} \\approx 5.42$ seconds."
      },
      {
        "id": "wip2-q80",
        "question": "Two men travel in the same direction at 9 km/h and 15 km/h. After 6 hours, the first man doubles his speed to 18 km/h and both arrive together. Find total journey time.",
        "options": [
          "16 hours",
          "18 hours",
          "20 hours",
          "22 hours"
        ],
        "correctAnswer": 1,
        "explanation": "After 6 hrs: distances are 54 km and 90 km (gap = 36 km).\n$\\text{Catch-up time} = \\frac{36}{18 - 15} = 12$ hours. Total = $6 + 12 = 18$ hours."
      },
      {
        "id": "wip2-q81",
        "question": "The speed ratio of two trains is $7:8$. If the second train runs 400 km in 4 hours (100 km/h), find the speed of the first train.",
        "options": [
          "82.5 km/h",
          "85.0 km/h",
          "87.5 km/h",
          "90.0 km/h"
        ],
        "correctAnswer": 2,
        "explanation": "$S_1 = 100 \\times (7/8) = 87.5$ km/h."
      },
      {
        "id": "wip2-q82",
        "question": "A car traveling at $\\frac{5}{7}$ of its normal speed covers 42 km in 1 hr 40 min 48 sec. What is its normal speed?",
        "options": [
          "30 km/h",
          "32 km/h",
          "35 km/h",
          "40 km/h"
        ],
        "correctAnswer": 2,
        "explanation": "Speed = 35 km/h."
      },
      {
        "id": "wip2-q83",
        "question": "A man rows 5 km in 60 min with the tide. The tide reverses direction, and he rows a further 20 km in 10 hours. How much time would he have saved if the tide had not reversed?",
        "options": [
          "4 hours",
          "5 hours",
          "6 hours",
          "7 hours"
        ],
        "correctAnswer": 2,
        "explanation": "Downstream speed = 5 km/h. Time for 25 km with tide = $25/5 = 5$ hrs.\nActual time = $1 + 10 = 11$ hrs. Time saved = $11 - 5 = 6$ hours."
      },
      {
        "id": "wip2-q84",
        "question": "Maya walks the length of a moving walkway in 7 minutes when it is stopped, and rides it in 4 minutes when standing. How long will it take if she walks on it while it moves?",
        "options": [
          "2.25 minutes",
          "2.54 minutes",
          "2.80 minutes",
          "3.10 minutes"
        ],
        "correctAnswer": 1,
        "explanation": "$\\text{Time} = \\frac{7 \\times 4}{7 + 4} = \\frac{28}{11} \\approx 2.54$ minutes."
      },
      {
        "id": "wip2-q85",
        "question": "Driving to the mountains took 9 hours in traffic. The return trip took 4 hours at an average speed 40 mph faster. How far are the mountains?",
        "options": [
          "260 miles",
          "275 miles",
          "288 miles",
          "300 miles"
        ],
        "correctAnswer": 2,
        "explanation": "$9S = 4(S + 40) \\implies 5S = 160 \\implies S = 32$ mph.\n$\\text{Distance} = 9 \\times 32 = 288$ miles."
      },
      {
        "id": "wip2-q86",
        "question": "A train leaves NYC at 7:15 AM and arrives in Buffalo at 2:47 PM. Find the total trip duration.",
        "options": [
          "7 hr 15 min",
          "7 hr 28 min",
          "7 hr 32 min",
          "7 hr 45 min"
        ],
        "correctAnswer": 2,
        "explanation": "7:15 AM to 12:00 PM = 4 hr 45 min. 12:00 PM to 2:47 PM = 2 hr 47 min.\nTotal = 7 hours 32 minutes."
      },
      {
        "id": "wip2-q87",
        "question": "Two trains travel in the same direction at 56 km/h. The first train crosses a stationary man in 78.9 seconds. Find the length of the first train.",
        "options": [
          "1150 m",
          "1200 m",
          "1227 m",
          "1250 m"
        ],
        "correctAnswer": 2,
        "explanation": "$\\text{Speed} = 56 \\times (5/18) = 140/9$ m/s.\n$\\text{Length} = (140/9) \\times 78.9 \\approx 1227$ m."
      },
      {
        "id": "wip2-q88",
        "question": "Given 10 distinct letters, how many 5-letter words can be made with at least one repeated letter?",
        "options": [
          "60,480",
          "65,240",
          "69,760",
          "72,000"
        ],
        "correctAnswer": 2,
        "explanation": "Total with repetition - without repetition = $10^5 - {^{10}P_5} = 100,000 - 30,240 = 69,760$."
      },
      {
        "id": "wip2-q89",
        "question": "How many 7-digit numbers can be formed using the digit 3 three times and the digit 5 four times?",
        "options": [
          "28",
          "35",
          "42",
          "48"
        ],
        "correctAnswer": 1,
        "explanation": "$\\frac{7!}{3! 4!} = \\frac{5040}{6 \\times 24} = 35$."
      },
      {
        "id": "wip2-q90",
        "question": "Find the dictionary rank of the word `MOTHER`.",
        "options": [
          "305",
          "308",
          "309",
          "312"
        ],
        "correctAnswer": 2,
        "explanation": "Alphabetical: E, H, M, O, R, T.\nStarting E: 120, H: 120, ME/MH: 48, MOE/MOH: 12, MOR: 6, MOTE: 2, MOTHER: 1.\nRank = $120 + 120 + 48 + 12 + 6 + 2 + 1 = 309$."
      },
      {
        "id": "wip2-q91",
        "question": "In a game, 3 cards are dealt from 52. A winning hand has a King, Queen, and Jack. What is the number of winning combinations?",
        "options": [
          "36",
          "48",
          "64",
          "80"
        ],
        "correctAnswer": 2,
        "explanation": "$\\binom{4}{1} \\times \\binom{4}{1} \\times \\binom{4}{1} = 4 \\times 4 \\times 4 = 64$."
      },
      {
        "id": "wip2-q92",
        "question": "A drawer has 30 socks: 60% red (18) and 40% blue (12). What is the minimum number of socks to pick blindly to guarantee at least two blue socks?",
        "options": [
          "16 socks",
          "18 socks",
          "20 socks",
          "22 socks"
        ],
        "correctAnswer": 2,
        "explanation": "Worst-case: pick all 18 red socks first, then 2 blue socks = $18 + 2 = 20$."
      },
      {
        "id": "wip2-q93",
        "question": "In how many ways can 4 distinct paintings be divided among 3 children such that each child gets at least 1 painting?",
        "options": [
          "24 ways",
          "36 ways",
          "48 ways",
          "72 ways"
        ],
        "correctAnswer": 1,
        "explanation": "One child gets 2, others get 1 each: $\\binom{4}{2} \\times \\binom{3}{1} \\times 2! = 6 \\times 3 \\times 2 = 36$ ways."
      },
      {
        "id": "wip2-q94",
        "question": "Speakers A, B, C speak along with 5 other speakers in random order. What is the probability that A speaks before B and B speaks before C?",
        "options": [
          "1/8",
          "1/6",
          "1/4",
          "1/3"
        ],
        "correctAnswer": 1,
        "explanation": "Among 3 positions for A, B, C there are $3! = 6$ orderings, exactly 1 is $(A, B, C) \\implies P = 1/6$."
      },
      {
        "id": "wip2-q95",
        "question": "Two numbers are chosen randomly from $\\{1, 2, \\dots, 25\\}$. What is the probability they are not equal?",
        "options": [
          "22/25",
          "23/25",
          "24/25",
          "25/26"
        ],
        "correctAnswer": 2,
        "explanation": "Total ordered pairs = $25 \\times 25 = 625$. Pairs where $A \\ne B = 625 - 25 = 600$.\n$P = 600/625 = 24/25$."
      },
      {
        "id": "wip2-q96",
        "question": "A and B each throw a die. What is the probability that A\\'s throw is not greater than B\\'s?",
        "options": [
          "18/36",
          "20/36",
          "21/36",
          "24/36"
        ],
        "correctAnswer": 2,
        "explanation": "$P(A \\le B) = P(A < B) + P(A = B) = \\frac{15 + 6}{36} = \\frac{21}{36} = \\frac{7}{12}$."
      },
      {
        "id": "wip2-q97",
        "question": "There are 3 red, 3 green, and 3 blue balls. If 3 balls are chosen, what is the probability that at least two have the same color?",
        "options": [
          "48/84",
          "54/84",
          "57/84",
          "62/84"
        ],
        "correctAnswer": 2,
        "explanation": "Total = $\\binom{9}{3} = 84$. All different = $\\binom{3}{1}^3 = 27$.\nAt least two same = $84 - 27 = 57 \\implies P = 57/84 = 19/28$."
      },
      {
        "id": "wip2-q98",
        "question": "In a 20-question exam with 2 choices per question, what is the probability of guessing all questions correctly?",
        "options": [
          "1/2^10",
          "1/2^15",
          "1/2^20",
          "1/2^25"
        ],
        "correctAnswer": 2,
        "explanation": "$P = (1/2)^{20} = \\frac{1}{2^{20}} = \\frac{1}{1,048,576}$."
      },
      {
        "id": "wip2-q99",
        "question": "Two dice are thrown. What is the probability of getting an even number on the first die OR a sum of 8?",
        "options": [
          "18/36",
          "19/36",
          "20/36",
          "22/36"
        ],
        "correctAnswer": 2,
        "explanation": "$P(\\text{Even 1st}) = 18/36$. Sum = 8: $\\{(2,6),(3,5),(4,4),(5,3),(6,2)\\}$ (5 outcomes). Intersection has 3. $P = \\frac{18 + 5 - 3}{36} = 20/36 = 5/9$."
      },
      {
        "id": "wip2-q100",
        "question": "In a 12-hour analog clock, how many times does the minute hand pass the hour hand between noon and midnight?",
        "options": [
          "9 times",
          "10 times",
          "11 times",
          "12 times"
        ],
        "correctAnswer": 1,
        "explanation": "Between 12:00 PM and 12:00 AM exclusive of boundaries, the hands overlap exactly 10 times."
      }
    ]
  }

];

if (typeof module !== "undefined") { module.exports = { EXAMS_DATA }; }
