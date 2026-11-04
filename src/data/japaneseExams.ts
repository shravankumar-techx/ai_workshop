import { Exam } from '@/types';

export const japaneseExams: Exam[] = [
  {
    id: 'exam-jlpt-01',
    title: 'Japanese Proficiency: JLPT N5 Kanji & Vocabulary Mastery',
    category: 'Japanese (JLPT N5)',
    company_tag: 'Global Tech & Japan Placement',
    description: 'Essential Kanji readings, core vocabulary, counters, and situational workplace greetings tailored for Japanese corporate recruitment (Rakuten, Mercari, Sony).',
    duration_minutes: 15,
    total_marks: 10,
    passing_percentage: 60,
    difficulty: 'Beginner',
    is_published: true,
    question_count: 5,
    questions: [
      {
        id: 'q-jlpt-1',
        exam_id: 'exam-jlpt-01',
        question_text: 'Choose the correct reading (Hiragana) for the underlined Kanji in the sentence: 「毎朝、**新聞**を読みます。」',
        options: ['しんぶん (shinbun)', 'きんぶん (kinbun)', 'しんもん (shinmon)', 'ぶんしん (bunshin)'],
        correct_index: 0,
        explanation: '「新聞」 combines 新 (new / しん) and 聞 (hear / ぶん), meaning "Newspaper". The correct reading is しんぶん (shinbun).',
        topic_tag: 'Kanji Reading'
      },
      {
        id: 'q-jlpt-2',
        exam_id: 'exam-jlpt-01',
        question_text: 'What is the appropriate counter for thin, flat objects like sheets of paper, resumes, or tickets in Japanese?',
        options: ['冊 (さつ / satsu)', '本 (ほん / hon)', '枚 (まい / mai)', '匹 (ひき / hiki)'],
        correct_index: 2,
        explanation: '「枚」(まい / mai) is used for flat and thin objects (paper, shirts, plates). 「冊」 is for bound books, 「本」 is for cylindrical objects, and 「匹」 is for small animals.',
        topic_tag: 'Counters (助数詞)'
      },
      {
        id: 'q-jlpt-3',
        exam_id: 'exam-jlpt-01',
        question_text: 'Select the Kanji that represents the underlined word: 「来週の**げつようび**に面接があります。」(There is an interview next Monday).',
        options: ['水曜日', '火曜日', '月曜日', '金曜日'],
        correct_index: 2,
        explanation: '「げつようび」(Monday) is written as 「月曜日」(Moon day / Monday). 「火曜日」 is Tuesday, 「水曜日」 is Wednesday, and 「金曜日」 is Friday.',
        topic_tag: 'Days of the Week'
      },
      {
        id: 'q-jlpt-4',
        exam_id: 'exam-jlpt-01',
        question_text: 'When entering an interview room or leaving a corporate meeting, what is the polite standard Japanese phrase meaning "Excuse me for disturbing you"?',
        options: ['いただきます (Itadakimasu)', 'しつれいします (Shitsurei shimasu)', 'おねがいします (Onegaishimasu)', 'ごちそうさまでした (Gochisousama deshita)'],
        correct_index: 1,
        explanation: '「失礼します (しつれいします / Shitsurei shimasu)」 is the required formal greeting when entering an interview room or office. It means "Excuse me / Pardon my intrusion".',
        topic_tag: 'Business Etiquette'
      },
      {
        id: 'q-jlpt-5',
        exam_id: 'exam-jlpt-01',
        question_text: 'Choose the antonym (opposite word) of 「高い」(たかい / Expensive or High).',
        options: ['安い (やすい / Cheap)', '低い (ひくい / Low)', '短い (みじかい / Short)', '狭い (せまい / Narrow)'],
        correct_index: 0,
        explanation: 'In commercial and purchasing contexts, the direct antonym of 「高い」(expensive) is 「安い」(やすい / inexpensive/cheap).',
        topic_tag: 'Antonyms'
      }
    ]
  },
  {
    id: 'exam-jlpt-02',
    title: 'Japanese Proficiency: JLPT N5 Grammar Particles & Reading',
    category: 'Japanese (JLPT N5)',
    company_tag: 'Global Tech & Japan Placement',
    description: 'Fundamental sentence structure, particles (は, を, に, で, へ), and short reading comprehension passages tested in bilingual engineering assessments.',
    duration_minutes: 15,
    total_marks: 10,
    passing_percentage: 60,
    difficulty: 'Intermediate',
    is_published: true,
    question_count: 5,
    questions: [
      {
        id: 'q-jlpt-6',
        exam_id: 'exam-jlpt-02',
        question_text: 'Fill in the blank with the appropriate particle: 「私は地下鉄（ちかてつ）_____ 大学へ行きます。」(I go to university by subway).',
        options: ['に (ni)', 'で (de)', 'を (o)', 'と (to)'],
        correct_index: 1,
        explanation: 'Particle 「で」(de) denotes the tool, instrument, or means of transportation (by subway = 地下鉄で).',
        topic_tag: 'Particles (助詞)'
      },
      {
        id: 'q-jlpt-7',
        exam_id: 'exam-jlpt-02',
        question_text: 'Fill in the blank: 「机の上にペン_____ 本があります。」(There is a pen and a book on the desk).',
        options: ['や (ya)', 'と (to)', 'も (mo)', 'から (kara)'],
        correct_index: 1,
        explanation: 'Particle 「と」(to) creates an exhaustive list ("A and B") between nouns. Pen and book = ペンと本.',
        topic_tag: 'Particles (助詞)'
      },
      {
        id: 'q-jlpt-8',
        exam_id: 'exam-jlpt-02',
        question_text: 'Choose the correct polite past negative form of the verb 「食べます」(to eat):',
        options: ['食べませんでした (Tabemasen deshita)', '食べました (Tabemashita)', '食べないでした (Tabenai deshita)', '食べません (Tabemasen)'],
        correct_index: 0,
        explanation: 'The polite past negative inflection of -masu verbs is formed by adding -masen deshita (食べませんでした = did not eat).',
        topic_tag: 'Verb Inflection'
      },
      {
        id: 'q-jlpt-9',
        exam_id: 'exam-jlpt-02',
        question_text: 'Read the sentence: 「田中さんは来月、日本_____ 行きます。」 Which particle indicates the destination/direction of motion?',
        options: ['へ (e)', 'で (de)', 'を (o)', 'が (ga)'],
        correct_index: 0,
        explanation: 'Particle 「へ」(pronounced "e") marks the direction of movement toward a destination (to Japan = 日本へ行きます).',
        topic_tag: 'Particles (助詞)'
      },
      {
        id: 'q-jlpt-10',
        exam_id: 'exam-jlpt-02',
        question_text: 'Short Reading: 「スミスさんはエンジニアです。毎朝8時に会社に来て、パソコンでプログラミングをします。12時から1時まで昼ご飯を食べます。」 Question: スミスさんは何時に昼ご飯を食べますか？',
        options: ['8時 (8:00)', '12時〜1時 (12:00 - 1:00)', '1時 (1:00)', '朝 (Morning)'],
        correct_index: 1,
        explanation: 'The text states 「12時から1時まで昼ご飯を食べます」(Eats lunch from 12:00 to 1:00). Hence, option 2 is correct.',
        topic_tag: 'Reading Comprehension'
      }
    ]
  }
];

