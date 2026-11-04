import { Newsletter } from '@/types';

export const mockNewsletters: Newsletter[] = [
  {
    id: 'news-vol-24',
    edition_no: 24,
    title: 'The AI Shift in 2026 Campus Drives: How Big Tech is Overhauling Technical Rounds',
    summary: 'An inside look at how Microsoft, Google, and Tier-1 GCCs are transitioning from pure LeetCode trivia to system design, concurrency, and AI agent evaluations.',
    tags: ['Tech Trends', 'System Design', 'Interview Strategy'],
    read_time: '6 min read',
    publish_date: '2026-11-02',
    author_name: 'Dr. Rajesh Rao, Head of Placements',
    content_markdown: `
# The AI Shift in 2026 Campus Drives: How Big Tech is Overhauling Technical Rounds

As the 2026 campus placement season shifts into high gear across top engineering colleges, hiring panels are signaling one unmistakable change: **the era of rote LeetCode memorization is officially over.**

Over the past four quarters, Tier-1 tech conglomerates and Global Capability Centers (GCCs) have rewritten their interview playbooks. With generative AI tools readily synthesizing boilerplate algorithmic code, recruiters are prioritizing engineering pragmatism, distributed architecture thinking, and code refactoring agility.

---

## 1. Key Shifts in the 2026 Hiring Radar

### A. The Decline of Algorithmic Obscurity
In previous seasons, candidates were frequently grilled on obscure segment trees or esoteric bitwise manipulation. Today, companies like **Atlassian**, **Goldman Sachs**, and **Microsoft** emphasize:
- **Clean Architecture & Maintainability:** Writing modular, testable, and documented code.
- **Concurrency & Race Conditions:** Handling thread contention, mutex locks, and optimistic locking in database transactions.
- **Real-World API Design:** Structuring idempotent REST and gRPC endpoints with rate-limiting and pagination.

### B. The Arrival of the "System Thinking" Round for Freshers
Historically reserved for engineers with 3+ years of experience, foundational High-Level Design (HLD) and Low-Level Design (LLD) questions are now standard for final-round undergraduates:
- *Designing a Distributed URL Shortener (Rate-limiting, Base62 encoding, Redis caching).*
- *Designing an In-Memory Key-Value Store with TTL expiration and LRU cache eviction.*
- *Object-Oriented Design for an Elevator System using the Strategy and State design patterns.*

---

## 2. Placement Strategy of the Week: The 15-Minute STAR Method Matrix

Behavioral and leadership rounds now carry equal weight to technical screenings. When answering behavioral questions like *"Describe a time your deployment caused a critical failure"*, utilize the **STAR Framework**:

| Step | Objective | Example Candidate Phrasing |
| :--- | :--- | :--- |
| **Situation** | Set the context concisely | "During our university capstone launch, our PostgreSQL database reached 100% CPU utilization under 5,000 concurrent requests." |
| **Task** | Define your direct responsibility | "As the backend lead, I was tasked with restoring sub-200ms latency without dropping in-flight user orders." |
| **Action** | Detail specific decisions and technologies | "I implemented connection pooling via PgBouncer, added composite B-Tree indexes on active foreign keys, and routed read-heavy queries to an in-memory Redis replica." |
| **Result** | Quantify the positive business outcome | "Query latency plummeted by 78%, server memory stabilized at 42%, and zero transactions were corrupted." |

---

## 3. Alumni Spotlight: Sneha Kulkarni (Software Engineer at Microsoft IDC)

> *"The biggest mistake I made in my third year was practicing DSA in total silence. In actual Microsoft interviews, the panel isn't looking for a silent genius who prints a 100% optimal answer in 2 minutes. They want an empathetic collaborator who asks clarifying boundary questions: 'What is the maximum payload size?', 'Can inputs be negative?', 'Are we prioritizing latency or memory footprint?' Always think aloud!"*

---

## 4. Recommended Weekly Checklist
- [ ] Practice 2 Low-Level Design problems (Parking Lot System, Notification Service).
- [ ] Revise Operating System deadlocks, semaphore signaling, and virtual memory paging.
- [ ] Take Mock Exam #18 (TCS NQT Cognitive Drive) in the CampusPrep Exam Engine.
    `
  },
  {
    id: 'news-vol-23',
    edition_no: 23,
    title: 'Cracking the Quantitative Cutoff: 7 High-Speed Math Shortcuts Every Engineer Must Know',
    summary: 'A definitive cheat sheet on speed-math, modulo arithmetic, and unit digit analysis to clear the first elimination round with 95th percentile confidence.',
    tags: ['Aptitude Mastery', 'Speed Math', 'Shortcuts'],
    read_time: '5 min read',
    publish_date: '2026-10-26',
    author_name: 'Prof. Ananya Sen, Quantitative Lead',
    content_markdown: `
# Cracking the Quantitative Cutoff: 7 High-Speed Math Shortcuts Every Engineer Must Know

In campus placement elimination rounds (such as **TCS NQT**, **Infosys Specialist**, and **Accenture Cognitive**), candidates have an average of **60 to 75 seconds per question**. Traditional pen-and-paper algebra is guaranteed to run out the clock.

Here are the 7 high-speed mathematical principles deployed by top percentiles:

---

### 1. The Rule of Alligation for Instant Weighted Averages
Whenever two ingredients of costs $C_1$ and $C_2$ are blended to produce a mean price $M$:

$$\\frac{Q_1}{Q_2} = \\frac{C_2 - M}{M - C_1}$$

*Application:* Never set up simultaneous equations $x + y = T$ and $c_1 x + c_2 y = Total$. Use the cross-difference method to determine ratios in under 12 seconds.

---

### 2. Relative Speed for Opposite Directions
When two objects with lengths $L_1$ and $L_2$ travel toward each other at speeds $S_1$ and $S_2$:

$$T = \\frac{L_1 + L_2}{(S_1 + S_2) \\times \\frac{5}{18}}$$

*Reminder:* Always convert km/h to m/s by multiplying by $\\frac{5}{18}$ before combining with meter units.

---

### 3. Successive Percentage Discount Formula
When an item is subject to successive discounts of $a\\%$ and $b\\%$, the single equivalent net discount is:

$$\\text{Net Discount} = a + b - \\frac{ab}{100}$$

*Example:* A $20\\%$ discount followed by a $10\\%$ discount yields $20 + 10 - 2 = 28\\%$, never $30\\%$.

---

### 4. Cyclicity Table of Single Digits
Numbers repeat their unit digits in periods of 4:
- $2^1=2, 2^2=4, 2^3=8, 2^4=6$ (Cycle: 2, 4, 8, 6)
- $3^1=3, 3^2=9, 3^3=7, 3^4=1$ (Cycle: 3, 9, 7, 1)
- $7^1=7, 7^2=9, 7^3=3, 7^4=1$ (Cycle: 7, 9, 3, 1)
- $8^1=8, 8^2=4, 8^3=2, 8^4=6$ (Cycle: 8, 4, 2, 6)

To find the unit digit of $7^{95}$: divide 95 by 4 (remainder 3). The 3rd member of cycle 7 is **3**.

---

## Weekly Actionable:
Dedicate 30 minutes today to attempt **Exam #6: Quantitative Number Systems** on the portal to calibrate your accuracy under time pressure!
    `
  },
  {
    id: 'news-vol-22',
    edition_no: 22,
    title: 'The ATS-Proof Resume Guide: How to Get Shortlisted for Off-Campus Opportunities',
    summary: 'A step-by-step breakdown of Applicant Tracking System (ATS) parsers, Overleaf LaTeX templates, and bullet-point impact metrics that pass automated recruiter filters.',
    tags: ['Resume Building', 'Career Strategy', 'ATS'],
    read_time: '7 min read',
    publish_date: '2026-10-19',
    author_name: 'Campus Career Guidance Cell',
    content_markdown: `
# The ATS-Proof Resume Guide: How to Get Shortlisted for Off-Campus Opportunities

Over **75% of off-campus applications** are rejected by automated Applicant Tracking Systems (ATS) before human recruiters even lay eyes on the PDF. 

If your resume uses multi-column tables, fancy icons, or Canva graphics, ATS engines like Workday and Greenhouse are likely parsing your experience as garbled text.

---

## 1. The Anatomy of an ATS-Compliant Layout

1. **Single-Column Hierarchy:** Always use a single-column layout. Multi-column resumes confuse OCR parsers and merge dates with job descriptions.
2. **Standard Section Headers:** Stick to standard headings: *Education*, *Technical Skills*, *Work Experience*, *Projects*, and *Certifications*. Avoid creative titles like *"What I Love Doing"*.
3. **Typography & File Format:** Use clean fonts (Inter, Arial, Helvetica, or Computer Modern). Export directly as a standard vector PDF from LaTeX or clean Google Docs.

---

## 2. The Google "X-Y-Z" Formula for Bullet Points

Never write passive responsibility statements like *"Worked on the frontend of an e-commerce website"*. Instead, use Laszlo Bock's classic formula:

$$\\text{"Accomplished [X] as measured by [Y], by doing [Z]"}$$

### Bad vs. Good Examples:
- ❌ **Weak:** *"Created a chatbot for student queries using React and Node.js."*
- ✅ **Strong:** *"Engineered an AI campus placement assistant serving 3,500+ active students, reducing helpdesk query latency by 65% through optimized vector caching and Gemini API fallback pipelines."*

---

## 3. Recommended Overleaf / LaTeX Resume Template
We have placed our vetted single-page ATS-optimized LaTeX template in the **Study Resources** section of the portal. It compiles with zero warnings and guarantees a 95+ score on popular resume scorers.
    `
  },
  {
    id: 'news-vol-21',
    edition_no: 21,
    title: 'Autonomous Coding Agents & The 2026 Junior Engineer Role: What Hiring Managers Look For',
    summary: 'With generative AI writing boilerplate syntax, engineering leads now evaluate how graduates architect prompt-driven workflows, verify hallucinations, and audit code quality.',
    tags: ['AI Breakthroughs', 'Hiring Trends', 'Agentic Coding'],
    read_time: '6 min read',
    publish_date: '2026-10-12',
    author_name: 'Dr. Rajesh Rao, Head of Placements',
    content_markdown: `
# Autonomous Coding Agents & The 2026 Junior Engineer Role

The definition of an entry-level software engineer has fundamentally changed in 2026. Syntax memorization is table stakes; hiring panels are evaluating how effectively candidates steer **AI coding agents** while guaranteeing safety, test coverage, and security.

---

## 1. The New Three-Tier Candidate Assessment
1. **Context Boundary Specification:** Can you provide precise type definitions and system boundaries before invoking agentic tools?
2. **Deterministic Verification:** Can you author property-based unit tests and regression suites that catch edge-case hallucinations?
3. **Security & Data Sanitization:** Do you understand OWASP Top 10 vulnerabilities and why AI-generated ORM queries must never concatenate raw string fragments?

## 2. Practical Advice for Final-Round Interviews
In live technical pair-programming screens, explain your high-level algorithm first, outline time/space complexity invariants ($O(N \\log N)$), and write clean modular helper functions.
    `
  },
  {
    id: 'news-vol-20',
    edition_no: 20,
    title: 'System Design Fundamentals for Freshers: Caching, Sharding, and Load Balancing Decoded',
    summary: 'Why foundational Distributed Systems concepts are now standard in Tier-1 undergraduate rounds, with real-world case studies on Redis and PostgreSQL partitioning.',
    tags: ['System Design', 'Distributed Systems', 'Backend'],
    read_time: '8 min read',
    publish_date: '2026-10-05',
    author_name: 'Placement Technical Panel',
    content_markdown: `
# System Design Fundamentals for Freshers

In 2026 campus drives, companies like Cisco, Amazon, and Atlassian frequently include a 30-minute foundational High-Level Architecture round for undergrads.

---

## Core Building Blocks Every Student Must Know:

### 1. Caching Strategies (Cache-Aside vs. Write-Through)
- **Cache-Aside (Lazy Loading):** The application queries the cache first. On miss, it reads from PostgreSQL and populates Redis. Best for read-heavy workloads.
- **Write-Through:** Every mutation updates both the cache and underlying database in a single atomic transaction.

### 2. Database Scaling: Vertical vs Horizontal
- **Horizontal Sharding:** Partitioning records across nodes using a consistent hashing algorithm:
$$\\text{Node} = \\text{Hash}(\\text{PartitionKey}) \\pmod N$$
- Minimizes hotspotting and allows linear throughput scaling.

### 3. Load Balancing Algorithms
Round-Robin, Weighted Response Time, and IP Hash algorithms for stateful session persistence.
    `
  },
  {
    id: 'news-vol-19',
    edition_no: 19,
    title: 'Mastering Behavioral Rounds: The Quantified STAR Storytelling Playbook',
    summary: 'A deep-dive into behavioral interview psychology, emotional intelligence, and turning college setbacks into compelling leadership wins for HR panels.',
    tags: ['HR Rounds', 'STAR Method', 'Soft Skills'],
    read_time: '5 min read',
    publish_date: '2026-09-28',
    author_name: 'Campus Career Guidance Cell',
    content_markdown: `
# Mastering Behavioral Rounds: The Quantified STAR Storytelling Playbook

Over 30% of technical candidates fail not at the coding test, but in the final managerial/HR round due to vague, unverified answers.

---

## The 4 Golden Rules of Modern HR Screenings:
1. **Never Blame Teammates:** When asked about project conflict, focus on technical trade-offs (e.g., *"We debated between MongoDB for speed versus PostgreSQL for ACID consistency"*).
2. **Quantify the Outcome:** Always conclude with metrics: latency reduced by 40%, score improved by 15%, or 500 active beta users onboarded.
3. **Show Empathy & Growth:** Highlight what you learned after your initial prototype failed in production.
    `
  },
  {
    id: 'news-vol-18',
    edition_no: 18,
    title: 'Quant Mastery: Probability, Combinatorics & Relative Speeds Shortcuts',
    summary: 'Mathematical derivations and mental arithmetic shortcuts to solve high-frequency quantitative aptitude questions in under 45 seconds per MCQ.',
    tags: ['Aptitude', 'Quant Tricks', 'Speed Math'],
    read_time: '7 min read',
    publish_date: '2026-09-21',
    author_name: 'Aptitude Research Wing',
    content_markdown: `
# Quant Mastery: Probability, Combinatorics & Relative Speeds Shortcuts

Speed is the primary elimination filter in TCS NQT and Infosys cognitive screenings. Master these three mental equations:

---

## 1. Two Objects Moving Towards Each Other:
$$\\text{Relative Speed} = v_1 + v_2, \\quad \\text{Time to Meet} = \\frac{D}{v_1 + v_2}$$

## 2. Average Speed for Round Trip (Equal Distance):
$$v_{\\text{avg}} = \\frac{2 v_1 v_2}{v_1 + v_2} \\quad \\text{(Harmonic Mean)}$$

## 3. Work Efficiency Shortcut:
If Worker A takes $a$ days and Worker B takes $b$ days, together they take:
$$T = \\frac{a \\cdot b}{a + b} \\text{ days}$$
    `
  },
  {
    id: 'news-vol-17',
    edition_no: 17,
    title: 'Cracking Company-Specific Tests: TCS NQT vs Infosys vs Accenture Drive Analysis',
    summary: 'A comparative blueprint breaking down sectional time limits, negative marking policies, and high-yield topics across the big four mass recruitment drives.',
    tags: ['Company Specific', 'TCS NQT', 'Infosys', 'Accenture'],
    read_time: '9 min read',
    publish_date: '2026-09-14',
    author_name: 'Dr. Rajesh Rao, Head of Placements',
    content_markdown: `
# Cracking Company-Specific Tests: TCS NQT vs Infosys vs Accenture

Every mass hiring drive has a distinctive evaluation signature. Understanding the test pattern prevents costly pacing errors:

---

| Feature | TCS NQT | Infosys SP/SE | Accenture Cognitive |
| :--- | :--- | :--- | :--- |
| **Negative Marking** | Yes (0.33 for standard) | No negative marking | No negative marking |
| **Sectional Time Limits** | Strictly locked per section | Shared sectional pools | Shared sectional pools |
| **Primary Elimination Filter** | Advanced Quant & Coding | Mathematical Reasoning & Puzzles | Critical Reasoning & Cloud Basics |
| **Key Target Accuracy** | 75%+ across all sections | 65%+ with speed pacing | 70%+ aggregate |
    `
  },
  {
    id: 'news-vol-16',
    edition_no: 16,
    title: 'Concurrency & Multithreading Pitfalls in Technical Screening Rounds',
    summary: 'Common concurrency traps in Java, C++, and Go: race conditions, deadlock prevention, volatile memory semantics, and producer-consumer implementations.',
    tags: ['Operating Systems', 'Concurrency', 'Core CS'],
    read_time: '7 min read',
    publish_date: '2026-09-07',
    author_name: 'Placement Technical Panel',
    content_markdown: `
# Concurrency & Multithreading Pitfalls in Technical Screening Rounds

Questions on thread safety and shared memory state are increasingly common in Goldman Sachs, Cisco, and Microsoft technical screenings.

---

## Key Concepts to Ace:
1. **Deadlock Conditions (Coffman Conditions):** Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait. Break any one to eliminate deadlock.
2. **Volatile vs Synchronized:**
   - \`volatile\` ensures CPU cache coherency and visibility across threads, but does **not** guarantee atomicity (e.g. \`count++\` is still not atomic).
   - \`synchronized\` locks the monitor, providing both mutual exclusion and memory barriers.
    `
  },
  {
    id: 'news-vol-15',
    edition_no: 15,
    title: 'Corporate Japanese & Global GCC Opportunities: The JLPT N5 Advantage',
    summary: 'Why global technology centers in Bengaluru, Tokyo, and Pune offer up to 40% salary premiums to engineering candidates proficient in basic conversational Japanese.',
    tags: ['Japanese JLPT', 'Global Drives', 'Career Growth'],
    read_time: '6 min read',
    publish_date: '2026-08-31',
    author_name: 'Campus Career Guidance Cell',
    content_markdown: `
# Corporate Japanese & Global GCC Opportunities: The JLPT N5 Advantage

With Japanese conglomerates and automotive technology centers expanding engineering hubs across India, Japanese Language Proficiency Test (**JLPT N5/N4**) certified developers are in unprecedented demand.

---

## 1. Why Japanese Tech Giants Offer Premium Packages
- Direct integration with Tokyo engineering headquarters without language translation layers.
- Onsite deployment opportunities within 12 months of graduation.
- Base packages averaging **₹12 to ₹24 LPA** compared to standard domestic starting CTCs.

## 2. Practice JLPT N5 Exams on CampusPrep
Take our **Japanese (JLPT N5) Practice Exams** on the portal, featuring authentic Kanji, Vocabulary, and Corporate Keigo business phrases.
    `
  }
];
