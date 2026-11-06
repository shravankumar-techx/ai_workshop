import { Resource } from '@/types';

export const mockResources: Resource[] = [
  // 1. Aptitude Mastery
  {
    id: 'res-apt-01',
    title: 'Ultimate Speed-Math & Quantitative Formula Handbook',
    category: 'aptitude',
    file_url: '#download-speedmath-formula-book',
    description: 'A comprehensive 45-page compilation of speed-calculation shortcuts, Vedic math techniques, percentage tables, and algebra formulae for all campus placement drives.',
    tags: ['Quantitative', 'Formula Sheet', 'Speed Math', 'Vedic Math'],
    file_type: 'PDF',
    download_count: 2480,
    page_count: 45,
    file_size: '4.2 MB',
    verified: true,
    content_preview: `
### Key Formula Quick-Reference:
1. **Compound Interest Annually:** A = P * (1 + R/100)^t
2. **Difference between CI and SI for 2 years:** D = P * (R/100)^2
3. **Pipes and Cisterns:** Net filling rate = 1/T_in - 1/T_leak
4. **Time and Distance Relative Speed:**
   - Same direction: S_rel = |S1 - S2|
   - Opposite direction: S_rel = S1 + S2
5. **Divisibility Rule for 11:** Difference between sum of odd placed digits and sum of even placed digits must be 0 or a multiple of 11.
    `
  },
  {
    id: 'res-apt-02',
    title: 'Logical Reasoning & Deductive Puzzles Master Sheet',
    category: 'aptitude',
    file_url: '#download-logical-reasoning-sheet',
    description: 'Visual breakdowns of circular seating arrangements, 2-parameter matrix matching, coded blood relations, and Venn syllogisms.',
    tags: ['Logical Reasoning', 'Puzzles', 'Syllogism', 'Arrangements'],
    file_type: 'PDF',
    download_count: 1890,
    page_count: 32,
    file_size: '3.1 MB',
    verified: true,
    content_preview: `
### Seating Arrangement Strategy:
- **Circular Facing Center:** Clockwise is to the LEFT, Counter-clockwise is to the RIGHT.
- **Circular Facing Away:** Clockwise is to the RIGHT, Counter-clockwise is to the LEFT.
- Always begin by placing the entity that has fixed definitive links to two or more other members.
    `
  },
  {
    id: 'res-apt-03',
    title: 'Verbal Ability & Reading Comprehension Cheat Sheet',
    category: 'aptitude',
    file_url: '#download-verbal-ability-cheatsheet',
    description: 'Grammar rules checklist (Subject-Verb agreement, parallel structure, conditional tenses) and 200 high-frequency placement idioms and collocations.',
    tags: ['Verbal Ability', 'Grammar', 'Idioms', 'Reading Comprehension'],
    file_type: 'PDF',
    download_count: 1420,
    page_count: 24,
    file_size: '2.4 MB',
    verified: true,
    content_preview: `
### Golden Grammar Checkpoints:
1. **Either / Neither with Or / Nor:** The verb agrees with the NOUN CLOSER to the verb.
2. **As well as, Along with, Together with:** The verb agrees with the FIRST subject.
3. **One of the [Plural Noun] who [Plural Verb]:** Notice the relative pronoun binds to the plural antecedent!
    `
  },

  // 2. Technical Skills
  {
    id: 'res-tech-01',
    title: 'Core CS Interview Cheat Sheet: DBMS, OS, Computer Networks & OOPs',
    category: 'technical',
    file_url: '#download-core-cs-master-sheet',
    description: 'The definitive 4-in-1 revision guide covering ACID transactions, Normalization (1NF to BCNF), Virtual Memory, Paging, Deadlock prevention, TCP 3-way handshakes, and Polymorphism.',
    tags: ['DBMS', 'Operating Systems', 'Computer Networks', 'OOPs', 'CS Core'],
    file_type: 'PDF',
    download_count: 3840,
    page_count: 58,
    file_size: '5.6 MB',
    verified: true,
    content_preview: `
### Essential Core CS Concepts:
- **DBMS:** ACID properties (Atomicity, Consistency, Isolation, Durability). Isolation levels: Read Uncommitted, Read Committed, Repeatable Read, Serializable.
- **OS:** Deadlock Coffman conditions: Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait. Banker's Algorithm for avoidance.
- **Networks:** TCP 3-Way Handshake: SYN -> SYN-ACK -> ACK. TCP vs UDP headers and transport guarantees.
- **OOPs:** Abstraction vs Encapsulation. Runtime Polymorphism (Method Overriding) vs Compile-Time Polymorphism (Method Overloading).
    `
  },
  {
    id: 'res-tech-02',
    title: 'Top 75 SQL Interview Queries & Schema Design Patterns',
    category: 'technical',
    file_url: '#download-sql-top-75-queries',
    description: 'Production-ready SQL questions featuring Window Functions (ROW_NUMBER, RANK, DENSE_RANK), self-joins, CTEs, and query indexing optimizations.',
    tags: ['SQL', 'Database', 'Window Functions', 'Queries'],
    file_type: 'PDF',
    download_count: 3120,
    page_count: 36,
    file_size: '3.4 MB',
    verified: true,
    content_preview: `
### High-Frequency SQL Query Patterns:
\`\`\`sql
-- Find 2nd highest salary using DENSE_RANK()
WITH RankedSalaries AS (
  SELECT employee_id, salary,
         DENSE_RANK() OVER (ORDER BY salary DESC) as rank_num
  FROM employees
)
SELECT salary FROM RankedSalaries WHERE rank_num = 2;
\`\`\`
    `
  },
  {
    id: 'res-tech-03',
    title: 'Data Structures & Algorithms 60-Day Placement Roadmap',
    category: 'technical',
    file_url: '#download-dsa-roadmap-sheet',
    description: 'Curated list of 150 must-solve LeetCode and GeeksForGeeks problems categorized by pattern: Two Pointers, Sliding Window, Monotonic Stack, Backtracking, and Dynamic Programming.',
    tags: ['DSA', 'LeetCode', 'Algorithms', 'Interview Prep'],
    file_type: 'PDF',
    download_count: 4210,
    page_count: 42,
    file_size: '4.8 MB',
    verified: true,
    content_preview: `
### Phase 1: Linear Patterns (Days 1 - 15)
1. Two Pointers: Trapping Rain Water, Container with Most Water.
2. Sliding Window: Longest Substring Without Repeating Characters, Minimum Size Subarray Sum.
3. Fast & Slow Pointers: Linked List Cycle II, Middle of the Linked List.
    `
  },

  // 3. Interview Preparation
  {
    id: 'res-int-01',
    title: 'HR Behavioral Interview Master Guide: 50 Questions & STAR Responses',
    category: 'interview',
    file_url: '#download-hr-star-guide',
    description: 'Proven response frameworks for questions like "Tell me about yourself", "Greatest weakness", "Handling conflict with team members", and "Why this company?".',
    tags: ['HR Interview', 'STAR Method', 'Behavioral', 'Soft Skills'],
    file_type: 'PDF',
    download_count: 2750,
    page_count: 38,
    file_size: '3.7 MB',
    verified: true,
    content_preview: `
### How to Answer "What is your greatest weakness?":
- **Structure:** State a genuine weakness -> Explain the system or habit you adopted to overcome it -> Share positive current progress.
- **Example:** *"In my second year, I struggled to delegate tasks during group hackathons, which led to bottlenecking code reviews. I realized this was inefficient, so I took a course on agile team management and began using GitHub Project boards to assign explicit modular ownership to each peer. Now our delivery cycle is 40% faster."*
    `
  },
  {
    id: 'res-int-02',
    title: 'ATS-Friendly Overleaf LaTeX Resume Template & DOCX Vetted Pack',
    category: 'interview',
    file_url: '#download-ats-resume-template',
    description: 'Clean, single-column, ATS-parsed LaTeX template hosted on Overleaf with zero formatting errors. Includes matching MS Word DOCX template.',
    tags: ['Resume Template', 'LaTeX', 'Overleaf', 'ATS Friendly'],
    file_type: 'ZIP',
    download_count: 5120,
    page_count: 4,
    file_size: '1.8 MB',
    verified: true,
    content_preview: `
### Resume Checklist:
- [x] Single-column layout.
- [x] Standard section titles: Education, Skills, Experience, Projects.
- [x] Quantified metrics in project bullets (e.g., reduced latency by 35%, 1,200 active users).
- [x] Clean hyperlinks to GitHub repos and live demo deployments.
    `
  },
  {
    id: 'res-int-03',
    title: 'Campus Group Discussion (GD) Topics & Speaking Frameworks',
    category: 'interview',
    file_url: '#download-gd-topics-framework',
    description: 'Top 30 contemporary GD topics in Technology, Economy, and Social Ethics with introductory arguments, counterpoints, and consensus summarization techniques.',
    tags: ['Group Discussion', 'Speaking Skills', 'Campus Selection', 'GD Framework'],
    file_type: 'PDF',
    download_count: 1680,
    page_count: 28,
    file_size: '2.9 MB',
    verified: true,
    content_preview: `
### The 3 Pillars of GD Leadership:
1. **Initiator / Framing:** If initiating, define key terms neutrally without taking an extreme stance immediately.
2. **Moderator:** When discussions become chaotic, intervene politely: *"Let us hear from our peer who hasn't spoken yet."*
3. **Consensus Summarizer:** Synthesize multiple arguments into balanced takeaways.
    `
  }
];
