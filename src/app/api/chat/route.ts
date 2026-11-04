import { NextRequest, NextResponse } from 'next/server';
import { companyExams } from '@/data/companyExams';

interface ChatRequestBody {
  message: string;
  history?: Array<{ role: 'user' | 'model'; parts: string }>;
}

function generateQuizResponse() {
  const allQs = companyExams.flatMap((e) =>
    (e.questions || []).map((q) => ({
      ...q,
      examTitle: e.title,
      company: e.company_tag || 'Company Qualifier',
    }))
  );
  const randomQ = allQs[Math.floor(Math.random() * allQs.length)];
  const correctLetter = String.fromCharCode(65 + randomQ.correct_index);

  return {
    reply: `### ⚡ Instant Aptitude Challenge (${randomQ.company})
*Source Assessment: ${randomQ.examTitle}*

---

#### ❓ Question:
${randomQ.question_text}

#### 🎯 Options:
- **A)** ${randomQ.options[0]}
- **B)** ${randomQ.options[1]}
- **C)** ${randomQ.options[2]}
- **D)** ${randomQ.options[3]}

---

> 💡 **Answer & Step-by-Step Reasoning:**  
> **Correct Answer: Option ${correctLetter}) ${randomQ.options[randomQ.correct_index]}**  
>  
> ${randomQ.explanation}`,
    quick_replies: [
      '⚡ Quiz Me Again',
      'Time & Work Shortcut',
      'Speed & Relative Motion',
      'Equations of 2D Motion',
      'HR STAR Method',
    ],
    engine: 'AptiBot Instant Solver',
  };
}

export async function POST(req: NextRequest) {
  try {
    const body: ChatRequestBody = await req.json();
    const userMessage = body.message?.trim() || '';

    if (!userMessage) {
      return NextResponse.json({ error: 'Message cannot be empty' }, { status: 400 });
    }

    const qLower = userMessage.toLowerCase();

    // Instant Aptitude Challenge Handler (Sub-20ms latency)
    if (
      qLower === 'quiz' ||
      qLower.includes('quiz me') ||
      qLower.includes('challenge') ||
      qLower.includes('test me') ||
      qLower.includes('practice question') ||
      qLower.includes('give me a question')
    ) {
      return NextResponse.json(generateQuizResponse());
    }

    // Retrieve and sanitize API key from environment
    const rawApiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY || '';
    const cleanKey = rawApiKey.replace(/^["']|["']$/g, '').trim();

    // If a valid Gemini API Key is available, attempt live generation with automatic model fallback
    if (cleanKey.length > 10) {
      const qLower = userMessage.toLowerCase();
      const shouldAttemptWebSearch =
        qLower.includes('sahyadri') ||
        qLower.includes('latest') ||
        qLower.includes('today') ||
        qLower.includes('current') ||
        qLower.includes('news') ||
        qLower.includes('web') ||
        qLower.includes('website') ||
        qLower.includes('recent') ||
        qLower.includes('notice') ||
        qLower.includes('drive');

      const systemInstruction = `You are "PlacementBot", an elite Campus Placement & Career Preparation AI for engineering students, specifically specialized for students at Sahyadri College of Engineering & Management (SCEM), Mangalore (Autonomous under VTU, NAAC 'A' Grade).
Provide structured, crisp, and high-impact responses formatted in markdown with bolding, tables, KaTeX/LaTeX math equations, bullet points, and web links.
When writing formulas:
- Use $...$ for inline equations (e.g. $v = u + at$ or $S_{\\text{rel}} = S_1 + S_2$).
- Use $$...$$ on its own line for standalone display equations.
- Format fractions, powers, and vectors using standard LaTeX (e.g. $\\frac{a}{b}$, $x^2$, $\\vec{v}$).
Key Responsibilities:
1. Sahyadri College Intelligence: Answer queries on Sahyadri campus placements, eligibility criteria (typically 6.0-6.5+ CGPA, 60% in 10th/12th, no standing arrears), top hiring companies (Microsoft, Amazon, Adobe, SAP Labs, Bosch, TCS, Infosys, Cognizant, SLK Software, Capgemini), Centers of Excellence (Intel, NVIDIA, TI), and department training.
2. Fast aptitude shortcuts & speed-math tricks (Time & Work, Ratios, Speed & Relative Motion, Probability).
3. Physics and 2D/1D kinematic motion equations.
4. Behavioral HR questions using the STAR framework.
5. Technical CS interview concepts (DBMS ACID, OS Paging, Networks TCP, System Design, DSA roadmaps).
6. Resume optimization with ATS Google X-Y-Z formula.
Always maintain an encouraging, highly professional enterprise tone.`;

      const modelsToTry = ['gemini-3-flash-preview', 'gemini-3.8-flash', 'gemini-flash-latest'];

      for (const modelName of modelsToTry) {
        try {
          const { GoogleGenAI } = await import('@google/genai');
          const ai = new GoogleGenAI({ apiKey: cleanKey });

          // 1. Try with Google Search Grounding if web/Sahyadri info requested
          if (shouldAttemptWebSearch) {
            try {
              const searchRes = await ai.models.generateContent({
                model: modelName,
                contents: userMessage,
                config: {
                  systemInstruction,
                  tools: [{ googleSearch: {} }],
                },
              });

              if (searchRes.text) {
                let formattedReply = searchRes.text;
                // Append web sources if grounding metadata was returned
                const candidate = searchRes.candidates?.[0];
                const chunks = (candidate as any)?.groundingMetadata?.groundingChunks;
                if (chunks && Array.isArray(chunks) && chunks.length > 0) {
                  const sourcesList = chunks
                    .filter((c: any) => c.web?.uri && c.web?.title)
                    .slice(0, 4)
                    .map((c: any) => `- [${c.web.title}](${c.web.uri})`)
                    .join('\n');
                  if (sourcesList) {
                    formattedReply += `\n\n**🌐 Live Grounded Sources:**\n${sourcesList}`;
                  }
                }

                return NextResponse.json({
                  reply: formattedReply,
                  quick_replies: extractQuickReplies(userMessage),
                  engine: `Google Gemini Live Search (${modelName})`,
                });
              }
            } catch (searchErr) {
              console.warn(
                `Google Search Grounding unpermitted or quota-exhausted on ${modelName}, falling back to standard inference:`,
                (searchErr as Error)?.message || searchErr
              );
            }
          }

          // 2. Standard Gemini Inference (Direct high-speed intelligence)
          const response = await ai.models.generateContent({
            model: modelName,
            contents: userMessage,
            config: {
              systemInstruction,
            },
          });

          if (response.text) {
            return NextResponse.json({
              reply: response.text,
              quick_replies: extractQuickReplies(userMessage),
              engine: `Google Gemini (${modelName})`,
            });
          }
        } catch (geminiError: unknown) {
          console.warn(`Gemini API call to ${modelName} failed, trying next option:`, geminiError);
        }
      }
    }

    // Comprehensive Offline Intelligence & Knowledge Engine
    const fallbackResponse = generateOfflinePlacementResponse(userMessage);

    return NextResponse.json({
      reply: fallbackResponse.text,
      quick_replies: fallbackResponse.quickReplies,
      engine: 'CampusPrep Offline Intelligence Engine',
    });
  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error while processing prompt' },
      { status: 500 }
    );
  }
}

function extractQuickReplies(query: string): string[] {
  const q = query.toLowerCase();
  if (q.includes('sahyadri') || q.includes('scem') || q.includes('mangalore') || q.includes('college')) {
    return ['Sahyadri Placement Packages', 'Top Recruiters at Sahyadri', 'Eligible Cutoff Criteria', '30-Day DSA Roadmap'];
  }
  if (q.includes('motion') || q.includes('2d') || q.includes('physics') || q.includes('kinematics') || q.includes('projectile')) {
    return ['Projectile Motion Formulas', '1D Equations of Motion', 'Relative Velocity Shortcut'];
  }
  if (q.includes('work') || q.includes('time') || q.includes('speed')) {
    return ['Pipes & Cisterns Shortcut', 'Relative Speed Formula', 'Take Quant Mock Test'];
  }
  if (q.includes('hr') || q.includes('interview') || q.includes('weakness')) {
    return ['STAR Method Example', 'Salary Negotiation Tips', 'Resume ATS Checklist'];
  }
  if (q.includes('dbms') || q.includes('sql') || q.includes('os') || q.includes('dsa')) {
    return ['Top 10 DBMS Queries', 'Deadlock 4 Conditions', '30-Day DSA Roadmap'];
  }
  return ['Equations of 2D Motion', 'Time & Work Shortcut', 'DBMS Top 10 Questions', 'HR STAR Method'];
}

function generateOfflinePlacementResponse(query: string): { text: string; quickReplies: string[] } {
  const q = query.toLowerCase();

  // 0. Sahyadri College of Engineering & Management (SCEM) Intelligence
  if (
    q.includes('sahyadri') ||
    q.includes('scem') ||
    q.includes('mangalore college') ||
    q.includes('college placement')
  ) {
    return {
      text: `### 🏛️ Sahyadri College of Engineering & Management (SCEM), Mangalore
*Autonomous Institute under VTU Belagavi | Accredited with NAAC 'A' Grade & NBA*

---

#### 🌟 Campus Placement Overview
Sahyadri’s **Department of Placement & Training** hosts over 200+ top-tier product and service corporations every campus hiring season:

| Key Placement Metric | Official Campus Standing |
| :--- | :--- |
| **Highest Package** | **₹40.0 LPA – ₹50.0 LPA** (Adobe, Microsoft, Amazon) |
| **Average Package** | **₹4.50 LPA – ₹6.00 LPA** across engineering streams |
| **Overall Placement Rate** | **85% – 95%** of eligible candidates placed |
| **Annual Recruiting Partners** | **200+ Corporations** visiting on-campus & pool drives |

---

#### 💼 Key Recruiting Partners by Tier:
- **Product & High-Package Giants:** Microsoft, Amazon, Adobe, SAP Labs, Bosch, Goldman Sachs, Cohesity.
- **Top IT & Tech Services:** TCS (Ninja/Digital/Prime), Infosys, Wipro, Cognizant, Capgemini, SLK Software, Mindtree, DXC Technology.
- **Core Engineering:** Toyota, JSW, Schneider Electric, Caliper Engineering.

---

#### 📋 Campus Eligibility Cutoffs (General University Standard):
1. **Academic Cutoff:** Minimum **6.0 – 6.5 CGPA** (or 60% aggregate) across 1st to 8th semesters.
2. **Backlog Policy:** Most Tier-1 companies mandate **Zero Active/Standing Backlogs** at the time of registration.
3. **Schooling Aggregate:** Minimum 60% in Class 10th and 12th / Diploma.

---

#### 🚀 Campus Innovation & Research Hubs:
- **Sahas & Launchpad:** In-house startup incubation centers fostering student entrepreneurship.
- **Centers of Excellence:** High-tech labs supported by **Intel, NVIDIA, and Texas Instruments**.

*Use the mock exams in the **Exam Engine** to sharpen your aptitude for upcoming Sahyadri campus drives!*`,
      quickReplies: ['Sahyadri Top Recruiters', 'Eligible Cutoff Criteria', 'Take Mock Exam', '30-Day DSA Roadmap'],
    };
  }

  // 1. Equations of 2D Motion / Projectile Motion / Kinematics
  if (
    q.includes('2d motion') ||
    q.includes('two dimensional motion') ||
    q.includes('equations of motion') ||
    q.includes('kinematics') ||
    q.includes('projectile') ||
    q.includes('trajectory') ||
    q.includes('motion in 2d') ||
    q.includes('equations of 2d')
  ) {
    return {
      text: `### 🎯 Basic Equations of 2D Motion (Kinematics & Projectiles)

In two-dimensional motion, motion along the **horizontal ($X$-axis)** and **vertical ($Y$-axis)** are completely independent and linked only by time ($t$).

---

#### 1. General Vector Form of 2D Motion (Constant Acceleration)
- **Position Vector:** $\\vec{r}(t) = \\vec{r}_0 + \\vec{u}t + \\frac{1}{2}\\vec{a}t^2$
- **Velocity Vector:** $\\vec{v}(t) = \\vec{u} + \\vec{a}t$
- **Component Breakdowns:**
  $$\\begin{aligned}
  v_x &= u_x + a_x t & x &= x_0 + u_x t + \\frac{1}{2}a_x t^2 & v_x^2 &= u_x^2 + 2a_x \\Delta x \\\\
  v_y &= u_y + a_y t & y &= y_0 + u_y t + \\frac{1}{2}a_y t^2 & v_y^2 &= u_y^2 + 2a_y \\Delta y
  \\end{aligned}$$

---

#### 2. Projectile Motion (Under Uniform Gravity $g$)
When launched with initial velocity $u$ at an angle $\\theta$ to the horizontal:
- **Initial Components:** $u_x = u \\cos\\theta$, $u_y = u \\sin\\theta$
- **Accelerations:** $a_x = 0$ (constant horizontal speed), $a_y = -g$

| Parameter | Formula | Key Insight |
| :--- | :--- | :--- |
| **Time of Flight ($T$)** | $T = \\frac{2u \\sin\\theta}{g}$ | Total time spent in the air until returning to ground |
| **Maximum Height ($H_{\\max}$)** | $H_{\\max} = \\frac{u^2 \\sin^2\\theta}{2g}$ | Reached when vertical velocity $v_y = 0$ at $t = T/2$ |
| **Horizontal Range ($R$)** | $R = \\frac{u^2 \\sin(2\\theta)}{g}$ | Max range occurs at $\\theta = 45^\\circ$ where $R_{\\max} = \\frac{u^2}{g}$ |
| **Trajectory Equation** | $y = x \\tan\\theta - \\frac{g x^2}{2 u^2 \\cos^2\\theta}$ | Proves the path of a projectile is parabolic |

---

#### 3. High-Frequency Placement Aptitude Shortcuts:
1. **Complementary Angles:** The range is identical for launch angles $\\theta$ and $(90^\\circ - \\theta)$ for the same speed $u$.
2. **Speed at Any Instant:** $v = \\sqrt{v_x^2 + v_y^2} = \\sqrt{(u \\cos\\theta)^2 + (u \\sin\\theta - gt)^2}$.
3. **At Top of Trajectory:** Velocity is purely horizontal: $v_{\\text{top}} = u \\cos\\theta$ (never zero!).`,
      quickReplies: ['1D Kinematic Equations', 'Circular Motion Formulas', 'Relative Velocity Shortcut'],
    };
  }

  // 2. 1D Motion / Kinematics
  if (q.includes('1d motion') || q.includes('linear motion') || q.includes('kinematic equation') || q.includes('gravity')) {
    return {
      text: `### 🚀 1D Motion Equations (Uniform Acceleration)

For linear motion with initial velocity $u$, final velocity $v$, acceleration $a$, displacement $s$, and time $t$:

1. **Velocity-Time Relation:** $v = u + at$
2. **Displacement-Time Relation:** $s = ut + \\frac{1}{2}at^2$
3. **Velocity-Displacement Relation:** $v^2 = u^2 + 2as$
4. **Displacement in $n$-th Second:** $S_n = u + \\frac{a}{2}(2n - 1)$
5. **Average Velocity:** $v_{\\text{avg}} = \\frac{u + v}{2} = \\frac{\\text{Total Displacement}}{\\text{Total Time}}$

> **Free Fall (Dropped from rest, $u = 0, a = g$):**
> - Velocity after time $t$: $v = gt$
> - Distance fallen in time $t$: $h = \\frac{1}{2}gt^2$
> - Velocity after falling height $h$: $v = \\sqrt{2gh}$`,
      quickReplies: ['Equations of 2D Motion', 'Relative Speed Formula', 'Take Quant Mock Test'],
    };
  }

  // 3. Circular Motion / Angular Velocity
  if (q.includes('circular motion') || q.includes('angular velocity') || q.includes('centripetal')) {
    return {
      text: `### 🔄 Circular Motion Essentials

- **Angular Velocity:** $\\omega = \\frac{\\Delta \\theta}{\\Delta t} = \\frac{2\\pi}{T} = 2\\pi f$
- **Linear & Angular Relation:** $v = r \\cdot \\omega$
- **Centripetal Acceleration:** $a_c = \\frac{v^2}{r} = \\omega^2 r = v \\omega$
- **Centripetal Force:** $F_c = \\frac{m v^2}{r} = m \\omega^2 r$`,
      quickReplies: ['Equations of 2D Motion', '1D Kinematic Equations', 'Relative Speed Formula'],
    };
  }

  // 4. Time & Work / Pipes & Cisterns
  if (q.includes('time and work') || q.includes('work shortcut') || q.includes('pipes') || q.includes('cistern') || q.includes('efficiency')) {
    return {
      text: `### ⚡ High-Speed Trick: Time & Work (LCM Efficiency Method)

Instead of fractional algebra ($\\frac{1}{A} + \\frac{1}{B}$), always calculate **Total Work via LCM**:

#### Problem Scenario:
*A completes a project in 12 days, B in 15 days. How many days together?*

1. **Find Total Work:** $\\text{LCM}(12, 15) = \\mathbf{60 \\text{ units}}$.
2. **Calculate Daily Efficiency:**
   - A's rate = $\\frac{60}{12} = \\mathbf{5 \\text{ units/day}}$
   - B's rate = $\\frac{60}{15} = \\mathbf{4 \\text{ units/day}}$
3. **Combined Rate:** $5 + 4 = \\mathbf{9 \\text{ units/day}}$.
4. **Days to Complete:** $\\frac{60}{9} = \\mathbf{6.67 \\text{ days}}$ ($6 \\frac{2}{3}$ days).

> **Pipes & Cisterns Pro-Tip:** Inlet pipes are positive units ($+X$), leaks are negative units ($-Y$).

Practice this directly on **Mock Exam #3 (Time & Work)**!`,
      quickReplies: ['Relative Speed Formula', 'Percentages Shortcut', 'Take Exam #3'],
    };
  }

  // 5. Relative Speed, Distance, Trains & Boats
  if (q.includes('speed') || q.includes('distance') || q.includes('train') || q.includes('boat') || q.includes('stream')) {
    return {
      text: `### 🚄 Speed, Time & Relative Motion Essentials

#### 1. Unit Conversion (Always First):
- $\\text{km/h} \\to \\text{m/s}$: Multiply by $\\mathbf{\\frac{5}{18}}$.
- $\\text{m/s} \\to \\text{km/h}$: Multiply by $\\mathbf{\\frac{18}{5}}$.

#### 2. Relative Speed:
- **Opposite Directions (Moving Toward/Away):** $S_{\\text{rel}} = S_1 + S_2$
- **Same Direction (Overtaking):** $S_{\\text{rel}} = |S_1 - S_2|$

#### 3. Average Speed for Equal Distances:
$$S_{\\text{avg}} = \\frac{2 S_1 S_2}{S_1 + S_2}$$

#### 4. Boats and Streams:
- **Downstream Speed ($D$):** $S_{\\text{boat}} + S_{\\text{stream}}$
- **Upstream Speed ($U$):** $S_{\\text{boat}} - S_{\\text{stream}}$
- **Boat in Still Water:** $\\frac{D + U}{2}$
- **Speed of Stream:** $\\frac{D - U}{2}$`,
      quickReplies: ['Time & Work Shortcut', 'Take Exam #2 (Time & Speed)', 'Aptitude Formula PDF'],
    };
  }

  // 6. Percentages, Profit & Loss
  if (q.includes('percent') || q.includes('profit') || q.includes('loss') || q.includes('discount')) {
    return {
      text: `### 💰 Percentages, Profit & Loss Quick-Reference

1. **Successive Percentage Changes:**
   $$\\text{Net Change} = a + b + \\frac{a \\cdot b}{100}$$
2. **Successive Discounts:**
   $$\\text{Net Discount} = d_1 + d_2 - \\frac{d_1 \\cdot d_2}{100}$$
3. **Expenditure Balance:** If price increases by $r\\%$, consumption must decrease by:
   $$\\text{Decrease} \\% = \\left(\\frac{r}{100 + r}\\right) \\times 100$$
4. **Selling Price with Profit/Loss:**
   $$\\text{SP} = \\text{CP} \\times \\left(1 \\pm \\frac{\\text{Profit/Loss}\\%}{100}\\right)$$`,
      quickReplies: ['Ratios & Proportions', 'Simple & Compound Interest', 'Take Quant Exam'],
    };
  }

  // 7. Permutations, Combinations & Probability
  if (q.includes('permutation') || q.includes('combination') || q.includes('probability') || q.includes('dice') || q.includes('cards')) {
    return {
      text: `### 🎲 Permutations, Combinations & Probability

- **Permutations (Order Matters):** $^nP_r = \\frac{n!}{(n - r)!}$
- **Combinations (Selection Only):** $^nC_r = \\frac{n!}{r!(n - r)!}$
- **Arrangements with Repetitions:** $\\frac{N!}{p! \\cdot q! \\cdot r!}$
- **Circular Permutations:** $(n - 1)!$ (or $\\frac{(n-1)!}{2}$ for necklaces/keychains)
- **Probability:** $P(E) = \\frac{\\text{Favorable Outcomes}}{\\text{Total Sample Space}}$
  - Dice: Rolling 2 dice has $6^2 = 36$ outcomes.
  - Sum of 7 is most probable ($6/36 = 1/6$). Sum of 8 has 5 outcomes ($5/36$).`,
      quickReplies: ['Ratios & Variations', 'Equations of 2D Motion', 'Take Exam #5 (Probability)'],
    };
  }

  // 8. HR "Tell me about yourself"
  if (q.includes('tell me about yourself') || q.includes('introduce yourself') || q.includes('intro')) {
    return {
      text: `### 🎯 How to Ace: "Tell Me About Yourself" (The 90-Second Formula)

Do **not** re-read your resume. Use the **Present -> Past -> Future** framework:

1. **Present (30 sec):** Who you are, your current engineering major, and technical specialization.
   > *"I am a final-year Computer Science undergraduate specializing in full-stack cloud systems and distributed applications. Recently, I led development on our campus placement portal serving over 3,000 active students."*
2. **Past (30 sec):** Highlight 1-2 impactful projects or internships with quantified results.
   > *"During my summer internship, I optimized our PostgreSQL indexing pipeline, cutting read query latency by 45% and eliminating memory timeouts during batch jobs."*
3. **Future (30 sec):** Why this specific company and role is your natural next step.
   > *"I have closely tracked your team’s innovations in enterprise cloud infrastructure, and I am excited to contribute my systems foundations and full-stack rigor to your engineering team."*`,
      quickReplies: ['HR Weakness Question', 'STAR Method Example', 'Resume Review Tips'],
    };
  }

  // 9. HR Weakness Question
  if (q.includes('weakness') || q.includes('strengths and weaknesses') || q.includes('strength')) {
    return {
      text: `### 💡 How to Answer: "What is your greatest weakness?"

The interviewer is checking for **self-awareness**, **authenticity**, and an **active growth mindset**.

#### The 3-Step Structure:
1. **Real Weakness:** Pick a genuine, non-fatal professional habit (e.g. over-commitment, struggling to delegate, perfectionism in styling).
2. **System/Correction:** The active measure or tool you put in place to fix it.
3. **Evidence of Growth:** A tangible current result.

#### Model Answer:
> *"In earlier group projects, I found it difficult to delegate critical tasks, often taking on too much myself to guarantee code consistency. I realized this created review bottlenecks. In my third year, I adopted Jira and GitHub Project sprints, establishing clear acceptance criteria for team members. This reduced our sprint cycle time by 30% and empowered my peers."*`,
      quickReplies: ['Tell me about yourself', 'STAR Method Guide', 'Behavioral Interview Questions'],
    };
  }

  // 10. STAR Method
  if (q.includes('star') || q.includes('star method') || q.includes('behavioral')) {
    return {
      text: `### 🌟 The STAR Method for Behavioral Interviews

Use this template for questions like *"Tell me about a time you handled a difficult team conflict"* or *"Describe a project failure"*:

| Stage | What to Share | Time Allotment |
| :--- | :--- | :--- |
| **S**ituation | Context, project background, and constraints | 15% |
| **T**ask | The specific challenge or objective assigned to you | 15% |
| **A**ction | The deliberate steps, tools, and algorithms **you** executed | 50% |
| **R**esult | Quantified business or technical outcome & lessons learned | 20% |

> **Crucial Rule:** Use **"I"** instead of **"we"** when describing actions so the interviewer understands your individual contribution!`,
      quickReplies: ['HR Weakness Question', 'Top 10 HR Questions', 'Download HR Guide'],
    };
  }

  // 11. DBMS Top Questions
  if (q.includes('dbms') || q.includes('sql') || q.includes('database')) {
    return {
      text: `### 💾 Top 5 Core DBMS Questions in Campus Drives

1. **ACID Properties:**
   - **Atomicity:** All operations succeed or all roll back (Commit / Rollback).
   - **Consistency:** Database transitions between valid states preserving schema constraints.
   - **Isolation:** Concurrent transactions execute without dirty reads or phantom rows.
   - **Durability:** Committed transactions persist even in system power failure (WAL / Write-Ahead Logging).

2. **Indexing:**
   - **B-Tree Index:** Best for range queries ($O(\\log N)$ search, insertion, and deletion).
   - **Hash Index:** $O(1)$ point lookups, but does not support range scans.

3. **Normalization (1NF -> 3NF -> BCNF):**
   - **1NF:** Atomic attribute values (no repeating groups).
   - **2NF:** 1NF + No partial dependencies on composite candidate keys.
   - **3NF:** 2NF + No transitive functional dependencies ($X \\to Y \\to Z$).

4. **Tricky SQL Query:** Finding $N$-th Highest Salary using \`DENSE_RANK()\`:
\`\`\`sql
SELECT salary FROM (
  SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) as rnk
  FROM employees
) WHERE rnk = 2;
\`\`\``,
      quickReplies: ['Top OS Questions', 'Download SQL Sheet', 'Take Technical Test'],
    };
  }

  // 12. Operating Systems
  if (q.includes('os') || q.includes('operating system') || q.includes('deadlock') || q.includes('paging')) {
    return {
      text: `### ⚙️ Operating Systems Interview Cheatsheet

#### 1. Deadlock: The 4 Coffman Conditions
All 4 must hold simultaneously for deadlock to occur:
1. **Mutual Exclusion:** Resources cannot be shared simultaneously.
2. **Hold and Wait:** Process holds at least 1 resource while requesting others.
3. **No Preemption:** Resources can only be released voluntarily.
4. **Circular Wait:** Closed chain of processes waiting on the next.

#### 2. Process vs. Thread
- **Process:** Independent execution environment with its own address space, file descriptors, and heap. Heavyweight context switch.
- **Thread:** Lightweight entity within a process sharing the same address space and heap, with its own stack and registers.

#### 3. Virtual Memory & Paging:
- **Page Fault:** CPU tries to access a virtual page not currently mapped in physical RAM.
- **Thrashing:** Excessive paging where OS spends more time swapping pages than executing code.`,
      quickReplies: ['DBMS Top 10 Questions', '30-Day DSA Roadmap', 'Download Core CS PDF'],
    };
  }

  // 13. 30-Day DSA Roadmap
  if (q.includes('dsa') || q.includes('roadmap') || q.includes('plan') || q.includes('leetcode')) {
    return {
      text: `### 🚀 30-Day High-Impact DSA Placement Roadmap

Spend 2-3 hours daily following this curated high-frequency topic breakdown:

- **Days 1–5: Array Techniques & Two Pointers**
  - Two Sum, 3Sum, Container With Most Water, Trapping Rain Water.
- **Days 6–10: Sliding Window & Hash Maps**
  - Longest Substring Without Repeating Characters, Minimum Window Substring.
- **Days 11–15: Fast & Slow Pointers & Linked Lists**
  - Reverse Linked List, Detect Cycle II, Merge K Sorted Lists.
- **Days 16–20: Stacks, Queues & Monotonic Stack**
  - Valid Parentheses, Next Greater Element, Daily Temperatures.
- **Days 21–25: Trees & Binary Search Trees (BFS / DFS)**
  - Level Order Traversal, Lowest Common Ancestor (LCA), Validate BST.
- **Days 26–30: High-Yield Dynamic Programming & Graphs**
  - 0/1 Knapsack, Longest Common Subsequence (LCS), Number of Islands (BFS/DFS).`,
      quickReplies: ['Core CS Interview Sheet', 'Time & Work Shortcut', 'Take Mock Exam'],
    };
  }

  // Default Fallback
  return {
    text: `### 🎓 CampusPrep Placement Assistant

I can assist you across all stages of your campus placement journey:

- **⚡ Physics & Math Aptitude:** 2D motion & kinematics, projectile formulas, ratios, percentages, time & work.
- **💼 Interview Preparation:** HR behavioral answers (STAR Method, "Tell me about yourself", Weaknesses).
- **💻 Technical Core:** DBMS ACID & SQL Queries, Operating Systems, Computer Networks, OOPs.
- **📄 Resume Strategy:** ATS formatting, Overleaf LaTeX templates, and Google X-Y-Z bullet points.

*Feel free to select one of the suggested prompts below or ask any specific technical/aptitude doubt!*`,
    quickReplies: ['Equations of 2D Motion', 'Time & Work Shortcut', 'DBMS Top 10 Questions', 'HR STAR Method'],
  };
}
