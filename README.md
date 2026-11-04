# 🎓 CampusPrep Portal // Enterprise Placement & Career Preparation Platform

An enterprise-grade, high-performance web platform designed for engineering universities and institutions to streamline campus placement training, elimination round preparation, and recruitment drive management.

Designed with a high-end, clean enterprise aesthetic inspired by **Linear** and **Vercel** — slate/zinc background (`#0B0F19`), subtle card surfaces (`#111827`), accessible typography, glassmorphism overlays, and vibrant electric indigo/blue accents (`#6366F1` / `#3B82F6`).

---

## 🌟 Key Architecture & Highlights

- **Framework:** Next.js (App Router), React 19, TypeScript, Tailwind CSS v4, Lucide React icons, Canvas Confetti.
- **Backend & Database:** Supabase (PostgreSQL) with comprehensive Row-Level Security (RLS) policies and automatic profile provisioning triggers.
- **Dual-Storage Engine:** Seamless hybrid architecture that works natively with live Supabase credentials OR runs fully interactive offline with persistent browser storage and pre-seeded realistic datasets.
- **Authentication & RBAC:** Role-Based Access Control supporting **Student** (`aditya.verma26@campus.edu`), **Faculty/Admin** (`rajesh.rao@campus.edu`), and **Public Visitors**.
- **AI Placement Assistant ("PlacementBot"):** Floating conversational drawer powered by Google Gemini API (with an offline intelligent keyword-intent NLP fallback engine).
- **20 Complete MCQ Mock Exams:** Authentic aptitude exams covering Quantitative Ability, Logical Reasoning, Verbal Ability, and Company-Specific Patterns (TCS NQT, Infosys, Wipro, Capgemini, Accenture).

---

## 🚀 Core Modules & Features

### 1. Distraction-Free Exam Engine (`/exams` & `/exams/[id]`)
- **20 Structured Aptitude & Company Exams**:
  - **Quantitative Ability (7 Exams):** Ratios & Variations, Time & Distance, Work & Pipes, Percentages & Profit/Loss, Permutations & Probability, Number Systems & Divisibility, Mixtures & Averages.
  - **Logical Reasoning (6 Exams):** Syllogisms & Venn Logic, Blood Relations & Family Trees, Linear & Circular Seating, Coding-Decoding & Pattern Series, Direction Sense, Critical Thinking & Data Sufficiency.
  - **Verbal Ability (4 Exams):** Spotting Errors & Sentence Correction, Idioms & Vocabulary in Context, Para Jumbles & Coherent Sequencing, Reading Comprehension & Inferences.
  - **Company Mocks (3 Exams):** TCS NQT Cognitive Assessment, Infosys Pseudocode & Critical Reasoning, Accenture & Wipro Placement Drive Special.
- **Distraction-Free Test Player**: Full-screen mode, live countdown timer with auto-submit, question palette navigation (Answered, Unanswered, Marked for Review), and instant confirmation modal.
- **Scorecard Report (`/exams/[id]/result`)**: Instant evaluation, percentile estimation, time taken, and step-by-step mathematical/logical solutions for every question.

### 2. Student Dashboard & Performance Analytics (`/dashboard/student`)
- **KPI Metrics:** Overall accuracy percentage, mock tests completed, aptitude readiness index, and 7-day study streak.
- **Aptitude Readiness Index:** Calibrated mastery breakdown across Quantitative, Logical Reasoning, and Verbal Ability.
- **Targeted Weak-Area Recommendations:** Automated analysis suggesting specific mock tests based on historical incorrect questions.
- **Exam Progress Tracker:** Complete logs of scores, accuracy %, time taken, and quick links to review solutions.

### 3. Verified Jobs & Career Opportunities Board (`/jobs`)
- Curated listings for on-campus and off-campus recruitment drives (Microsoft, Google, Atlassian, Cisco, Goldman Sachs, TCS Digital).
- Key Fields: Role title, CTC/stipend, location, batch year, deadline countdown, and direct application links.
- Filter and search: Filter by role, batch, job type (Full-time vs. Internship), and dynamic CGPA cutoff eligibility check against the logged-in student's profile.

### 4. Weekly Placement Newsletter (`/newsletters`)
- Curated publication archive delivering weekly job-market intelligence and preparation roadmaps.
- Includes industry hiring trends, technical cheat sheets, STAR behavioral interview frameworks, and alumni spotlights.
- Reader view modal with export/print capability.

### 5. Study Materials & Placement Repository (`/resources`)
- Categorized library spanning:
  - **Aptitude Mastery:** Speed-math formula books and puzzle sheets.
  - **Technical Skills:** Core CS revision (DBMS, OS, CN, OOPs), Top 75 SQL queries, and 60-day DSA roadmaps.
  - **Interview Preparation:** 50 HR interview questions with STAR answers, ATS-friendly Overleaf LaTeX resume templates, and Group Discussion guides.
- Embedded markdown reader sheet and direct download simulation.

### 6. Placement AI Assistant ("PlacementBot")
- Floating conversational drawer accessible from any page.
- Resolves math shortcut tricks (LCM method for Time & Work, relative speed), HR questions ("Tell me about yourself", weaknesses), and CS concepts.
- Suggestion chips for rapid query exploration.

### 7. Faculty & Administrator Portal (`/dashboard/admin`)
- **Student Analytics:** Searchable student directory with scores, CGPA, and readiness indicators (Drive Ready, High Potential, Needs Improvement).
- **Exam Manager:** Form to create, edit, or delete exams, plus JSON batch upload support.
- **Job Board Manager:** Post new drives, toggle active/expired status, and manage deadlines.
- **Newsletter CMS:** Markdown editor to write and publish weekly newsletters.
- **Resource Manager:** Upload or link study materials and cheat sheets.

---

## 🗄️ Database Schema & Migration

The complete PostgreSQL migration script with full Row-Level Security (RLS) policies and auth triggers is located at:
`supabase/migrations/20261103000000_init_schema.sql`

Tables included:
1. `profiles` (User identity, role ['student', 'admin'], branch, batch year, CGPA)
2. `exams` (Title, category, duration, marks, difficulty, publish status)
3. `questions` (Exam foreign key, question text, options JSONB, correct index, explanation)
4. `exam_attempts` (User ID, score, total questions, accuracy, percentile, answers JSONB, time taken)
5. `jobs` (Company, role, CTC, location, eligibility, deadline, apply URL)
6. `newsletters` (Edition no, title, summary, markdown content, publish date)
7. `resources` (Title, category ['aptitude', 'technical', 'interview'], file URL, tags)

---

## 🛠️ How to Run Locally

### 1. Install Dependencies
\`\`\`bash
pnpm install
\`\`\`

### 2. Start the Development Server
\`\`\`bash
pnpm dev
\`\`\`
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
\`\`\`bash
pnpm build
pnpm start
\`\`\`

### 4. Optional Environment Variables (`.env.local`)
\`\`\`env
# Optional: Google Gemini API Key for live AI responses
NEXT_PUBLIC_GEMINI_API_KEY="your-gemini-api-key"

# Optional: Supabase credentials (platform runs out-of-the-box with fallback layer if omitted)
NEXT_PUBLIC_SUPABASE_URL="https://your-project.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-anon-key"
\`\`\`

---

## 👥 Evaluator Role Switcher

You can test and evaluate the entire platform across all permission levels immediately using the **Role Switcher** in the top navigation bar:
- **Student:** `Aditya Verma` (CSE 2026, 8.85 CGPA) — Access to student performance analytics, mock exams, and job listings.
- **Faculty / Admin:** `Dr. Rajesh Rao` (Head of Placements) — Full access to admin student roster, exam creator, job manager, and newsletter CMS.
- **Visitor:** Public landing page and teaser views.
