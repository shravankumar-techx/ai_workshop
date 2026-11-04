/**
 * NexusLab Sahyadri College AI Assistant
 * Client-side Offline NLP & Keyword-Intent Matching Engine
 * Knowledge base covering Sahyadri College of Engineering & Management (SCEM)
 */

class SahyadriChatbot {
  constructor() {
    this.knowledgeBase = [
      {
        id: 'cet_admission_codes',
        intent: 'Admission & CET Codes',
        keywords: [
          'cet', 'kcet', 'code', 'admission code', 'pgcet', 'comedk', 'counseling code',
          'college code', 'seat code', 'e160', 'b268', 'c652', 't867', 'e107', 'entrance',
          'kea', 'option entry', 'kcet code', 'counseling', 'pgcet codes', 'mba pgcet',
          'mca pgcet', 'mtech pgcet', 'comedk code'
        ],
        response: `
**Sahyadri College Official Admission & Counseling Codes:**

Here are the official government and national counseling verification codes for SCEM:
- **KCET Code (Engineering / B.E.):** <span class="badge-code">E160</span>
- **COMEDK Code (UG Engineering):** <span class="badge-code">E107</span>
- **MBA PGCET Code:** <span class="badge-code">B268</span>
- **MCA PGCET Code:** <span class="badge-code">C652</span>
- **M.Tech PGCET Code:** <span class="badge-code">T867</span>

*Tip: During KEA option entry, enter KCET Code **E160** to select Sahyadri College of Engineering & Management, Mangaluru.*
        `,
        followUps: [
          'List undergraduate B.E. programs',
          'Placement records & recruiters',
          'Campus location & status'
        ]
      },
      {
        id: 'academic_branches',
        intent: 'Undergraduate & Postgraduate Programs',
        keywords: [
          'branch', 'branches', 'courses', 'programs', 'degrees', 'b.e', 'be', 'btech', 'engineering',
          'cse', 'aiml', 'cs aiml', 'ise', 'ece', 'mech', 'mechanical', 'civil', 'robotics',
          'undergraduate', 'ug programs', 'departments', 'mca', 'mba', 'mtech', 'phd'
        ],
        response: `
**Academic Programs at Sahyadri College (Autonomous, VTU Affiliated):**

**Undergraduate Programs (B.E. - 4 Years):**
- **CSE:** Computer Science & Engineering
- **CS (AIML):** Computer Science & Engineering (Artificial Intelligence & Machine Learning)
- **ISE:** Information Science & Engineering
- **ECE:** Electronics & Communication Engineering
- **Mechanical:** Mechanical Engineering
- **Civil:** Civil Engineering
- **Robotics:** Robotics & Automation

**Postgraduate Programs:**
- **MBA:** Master of Business Administration (Dual Specialization: Finance, Marketing, HR)
- **MCA:** Master of Computer Applications (2 Years)
- **M.Tech:** Computer Science & Engineering

**Research & Doctoral:**
- Recognized Ph.D. Research Centers across Computer Science, Electronics, Mechanical, Physics, Chemistry, and Business Administration.
        `,
        followUps: [
          'What are the CET codes?',
          'Placement records & recruiters',
          'Tell me about incubation centers'
        ]
      },
      {
        id: 'accreditation_autonomous',
        intent: 'Autonomous Status & Accreditations',
        keywords: [
          'accreditation', 'autonomous', 'vtu', 'naac', 'naac a', 'nba', 'ranking', 'nirf', 'aicte', 'grade',
          'affiliation', 'affiliated', 'is sahyadri autonomous', 'visvesvaraya', 'status', 'accredited'
        ],
        response: `
**Campus Status, Autonomy & Accreditations:**

- **Autonomous Institution:** Conferred autonomous status affiliated with **Visvesvaraya Technological University (VTU)**, Belagavi.
- **NAAC Accreditation:** Accredited with prestigious **'A' Grade** by the National Assessment and Accreditation Council.
- **NBA Accreditation:** Flagship engineering departments are accredited by the **National Board of Accreditation (NBA)**.
- **Statutory Approvals:** Approved by AICTE, New Delhi, and recognized by the Government of Karnataka.
- **NIRF Innovation:** Consistently ranked in the **Top 101–150 Band** for Innovation across India by the Ministry of Education.
- **Scenic Setting:** Located on a sprawling 30-acre green campus along the banks of the **Netravati River** in Adyar, Mangaluru.
        `,
        followUps: [
          'What are the CET codes?',
          'Undergraduate B.E. programs',
          'Placement records & recruiters'
        ]
      },
      {
        id: 'placements_recruiters',
        intent: 'Placements & Marquee Recruiters',
        keywords: [
          'placement', 'placements', 'salary', 'package', 'highest package', 'average package',
          'recruiters', 'companies', 'jobs', 'microsoft', 'adobe', 'unicourt', 'jems', 'belc',
          'belc co', 'infosys', 'lpa', 'internships', 'top recruiters', 'hiring'
        ],
        response: `
**Placement Records & Marquee Recruiters:**

Sahyadri maintains industry-leading placement statistics with 250+ top companies visiting annually:

- **Highest International / National CTC:** <span class="badge-code">₹50+ LPA</span>
- **Average Package:** <span class="badge-code">₹6.0 – ₹7.5 LPA</span>
- **Overall Placement Rate:** Over 90% of eligible students placed annually.

**Top Recruiters & Strategic Global Partners:**
- **Microsoft** (Cloud & Software Engineering)
- **Belc Co.** (Premier Japan hiring partner offering overseas placements)
- **JEMS** (Advanced engineering solutions)
- **UniCourt** (Legal data intelligence & AI infrastructure)
- **Infosys** (Tier-1 IT systems & global consulting)
- **Additional Partners:** Adobe, Amazon, Google Cloud, SAP, Salesforce, SLK Software, TCS, Cognizant, Wipro, Capgemini, Bosch, Texas Instruments.

*The Department of Placement & Training (DTPL) conducts continuous technical, algorithmic coding, and soft-skill bootcamps from semester 3.*
        `,
        followUps: [
          'Undergraduate B.E. programs',
          'What are the CET codes?',
          'Tell me about incubation centers'
        ]
      },
      {
        id: 'campus_location',
        intent: 'Campus Location & Netravati Riverside Setting',
        keywords: [
          'location', 'where', 'address', 'campus', 'adyar', 'mangaluru', 'mangalore', 'river',
          'netravati', 'netravathi', 'how to reach', 'distance', 'airport', 'railway station', 'infrastructure'
        ],
        response: `
**Campus Location & Riverside Setting:**

**Institution:** Sahyadri College of Engineering & Management (SCEM)
- **Address:** Sahyadri Campus, Adyar, Mangaluru, Karnataka - 575007, India.
- **Riverside Setting:** Situated along the scenic, tranquil banks of **River Netravati**, right off National Highway 75 (NH-75).
- **Campus Environment:** 30-acre lush green autonomous campus with modern academic blocks, advanced maker spaces, and riverfront student walkways.

**Transit & Connectivity:**
- Mangaluru Central Railway Station: ~9 km
- Mangaluru Junction: ~6 km
- Mangaluru International Airport (IXE): ~18 km
- Excellent bus connectivity via college transit fleet and city lines.
        `,
        followUps: [
          'Autonomous status & accreditations',
          'Campus amenities & facilities',
          'What are the CET codes?'
        ]
      },
      {
        id: 'incubation_startups',
        intent: 'Incubation, NAIN & MSME TBI',
        keywords: [
          'incubation', 'startup', 'startups', 'entrepreneurship', 'nain', 'k-tech', 'ktech', 'msme',
          'msme tbi', 'tbi', 'd-labs', 'dreamers', 'challengers', 'innovation', 'funding', 'patents', 'maker space', 'grants'
        ],
        response: `
**Innovation, Startups & Incubation Ecosystem:**

Sahyadri is nationally celebrated for fostering experiential student entrepreneurship and prototype funding:

- **NAIN (New Age Innovation Network):** Supported by KITS (Govt. of Karnataka), providing seed prototype grants up to **₹3 Lakhs** per student venture.
- **K-Tech Technology Business Incubator (TBI):** Multi-crore incubation ecosystem backing deep-tech, IoT, and AI ventures.
- **MSME TBI (Technology Business Incubator):** Recognized by the Ministry of MSME, Govt. of India, extending prototype grants up to **₹15 Lakhs**.
- **In-House Innovation Labs & Clubs:**
  - *D-Labs Technology Business Incubator*
  - *Challengers Robotics Club* (national champions in SAE & NASA competitions)
  - *Dreamers Club* and *Aero Club*
  - Sahyadri Edu Cloud & multiple student-founded registered startups.
        `,
        followUps: [
          'Placement records & recruiters',
          'Undergraduate B.E. programs',
          'What are the CET codes?'
        ]
      },
      {
        id: 'campus_amenities',
        intent: 'Campus Facilities & Hostels',
        keywords: [
          'hostel', 'facilities', 'amenities', 'food', 'canteen', 'library', 'sports', 'gym',
          'wifi', 'transport', 'labs', 'accommodation', 'hostels'
        ],
        response: `
**Campus Amenities & Student Life:**

- **Central Library:** High-tech digital learning center over 30,000 sq.ft., with IEEE, Springer, and ScienceDirect e-journals.
- **Hostels:** Modern, hygienic on-campus hostels for boys and girls with 24/7 security, Wi-Fi, solar hot water, and recreation lounges.
- **Dining:** Multi-cuisine food court, riverfront cafeteria, and coffee kiosks.
- **Sports & Fitness:** Synthetic basketball court, football ground, indoor badminton courts, gymnasium, and riverfront rowing / sports activities.
- **Connectivity:** 1 Gbps high-speed campus-wide Wi-Fi network.
        `,
        followUps: [
          'Campus location & Netravati Riverside',
          'Placement records & recruiters',
          'What are the CET codes?'
        ]
      },
      {
        id: 'admissions_eligibility',
        intent: 'Admissions & Eligibility Criteria',
        keywords: [
          'eligibility', 'admission', 'apply', 'process', 'criteria', 'fees', 'management quota',
          'documents', 'percentage', '12th', 'puc'
        ],
        response: `
**Eligibility & Admission Pathways for B.E.:**

- **Academic Criteria:** Passed 10+2 / 2nd PUC with Physics & Mathematics as compulsory subjects, along with Chemistry / Biology / Computer Science / Electronics, securing at least **45% marks** (40% for reserved category candidates).
- **Admission Quotas:**
  - **Government Quota (KEA/KCET):** Through Karnataka CET counseling (Code: **E160**).
  - **COMEDK Quota:** For non-Karnataka / pan-India merit applicants (Code: **E107**).
  - **Management Quota:** Direct institutional merit admission.

*For MBA/MCA:* Bachelor's degree with minimum 50% aggregate and valid PGCET (MBA: **B268**, MCA: **C652**) or KMAT score.
        `,
        followUps: [
          'What are the CET codes?',
          'Undergraduate B.E. programs',
          'Placement records & recruiters'
        ]
      },
      {
        id: 'leadership_principal',
        intent: 'Leadership & Administration',
        keywords: [
          'principal', 'chairman', 'director', 'management', 'leadership', 'manjunath', 'bhandary', 'trust'
        ],
        response: `
**Visionary Leadership at SCEM:**

- **Chairman:** **Dr. Manjunath Bhandary**, visionary educationist, social entrepreneur, and former Member of Legislative Council (MLC), heading the Bhandary Foundation.
- **Vision:** To become a premier technological institution promoting intellectual discovery, entrepreneurship, and value-based education.
- **Philosophy:** Fostering innovation through project-based learning and hands-on maker spaces from the very first semester.
        `,
        followUps: [
          'Autonomous status & accreditations',
          'Incubation, NAIN & MSME TBI',
          'Campus location & setting'
        ]
      },
      {
        id: 'contributor_guide_help',
        intent: 'Contributor Guide & How to Expand Chatbot',
        keywords: [
          'contribute', 'contributor', 'guide', 'expand chatbot', 'add question', 'add intent',
          'how to add', 'add faq', 'github', 'pull request', 'pr', 'first year', 'beginner'
        ],
        response: `
**How to Expand This Chatbot Knowledge Base (for Teammates & 1st-Year Peers):**

1. Open \`assets/js/chatbot.js\` in your code editor.
2. In the \`this.knowledgeBase\` array, add a new intent object:
\`\`\`javascript
{
  id: 'unique_intent_id',
  intent: 'Short Descriptive Name',
  keywords: ['keyword1', 'synonym2', 'phrase3'],
  response: '**Your formatted Markdown answer here**',
  followUps: ['Follow-up question 1', 'Follow-up question 2']
}
\`\`\`
3. Save the file, commit your changes, and submit a Pull Request on GitHub. No backend or database compilation required!
        `,
        followUps: [
          'What are the CET codes?',
          'Undergraduate B.E. programs',
          'Placement records & recruiters'
        ]
      },
      {
        id: 'greetings',
        intent: 'Greetings & Introduction',
        keywords: [
          'hi', 'hello', 'hey', 'greetings', 'namaste', 'good morning', 'good afternoon', 'good evening', 'who are you', 'help'
        ],
        response: `
**Hello! Welcome to the Sahyadri College AI Assistant.**

I am an offline NLP assistant with instant factual intelligence for **Sahyadri College of Engineering & Management (SCEM), Mangaluru** (Autonomous VTU, NAAC 'A', NBA).

You can ask me about:
- **KCET / COMEDK / PGCET counseling codes** (e.g. KCET Code <span class="badge-code">E160</span>)
- **Undergraduate B.E. programs** (CSE, CS-AIML, ISE, ECE, Mechanical, Civil)
- **Campus setting along River Netravati in Adyar**
- **Placements & recruiters** (Microsoft, Belc Co., JEMS, UniCourt, Infosys)
- **Incubation & grants** (NAIN, K-Tech Innovation Hub, MSME TBI)

What would you like to know?
        `,
        followUps: [
          'What are the CET codes?',
          'Undergraduate B.E. programs',
          'Placement records & recruiters',
          'Campus location & status'
        ]
      },
      {
        id: 'speed_time_distance',
        intent: 'Speed, Time, Distance & Relative Motion',
        keywords: [
          'speed', 'distance', 'time', 'relative speed', 'train', 'trains', 'boat', 'boats',
          'stream', 'streams', 'upstream', 'downstream', 'overtaking', 'km/h', 'm/s', 'velocity', 'motion'
        ],
        response: `
### 🚄 Speed, Time & Relative Motion Essentials

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
- **Speed of Stream:** $\\frac{D - U}{2}$
        `,
        followUps: [
          'Equations of 2D motion',
          'Time & Work shortcut',
          'Percentages shortcut'
        ]
      },
      {
        id: 'motion_kinematics_2d',
        intent: 'Equations of 1D & 2D Motion (Kinematics)',
        keywords: [
          'motion', '2d motion', '1d motion', 'kinematics', 'equations of motion', 'projectile',
          'trajectory', 'projectile motion', 'acceleration', 'displacement', 'gravity', 'v=u+at'
        ],
        response: `
### 🚀 Equations of 1D & 2D Motion (Kinematics)

#### 1. Classical 1D Motion Equations (Uniform Acceleration $a$):
- **Velocity-Time Relation:** $v = u + at$
- **Displacement-Time Relation:** $s = ut + \\frac{1}{2}at^2$
- **Velocity-Displacement Relation:** $v^2 = u^2 + 2as$
- **Displacement in the $n^{\\text{th}}$ second:** $s_n = u + \\frac{a}{2}(2n - 1)$

#### 2. 2D Projectile Motion (Launch angle $\\theta$, initial velocity $u$):
- **Time of Flight ($T$):**
$$T = \\frac{2u \\sin\\theta}{g}$$

- **Maximum Height ($H_{\\max}$):**
$$H_{\\max} = \\frac{u^2 \\sin^2\\theta}{2g}$$

- **Horizontal Range ($R$):**
$$R = \\frac{u^2 \\sin(2\\theta)}{g}$$
*(Note: Maximum range occurs at launch angle $\\theta = 45^\\circ$)*

- **Equation of Trajectory (Parabola):**
$$y = x \\tan\\theta - \\frac{g x^2}{2 u^2 \\cos^2\\theta}$$
        `,
        followUps: [
          'Speed, time & relative speed',
          'Time & Work shortcut',
          'Permutations & combinations'
        ]
      },
      {
        id: 'time_work_lcm',
        intent: 'Time & Work (LCM Method)',
        keywords: [
          'time and work', 'time & work', 'work', 'pipes', 'cisterns', 'efficiency', 'lcm method',
          'days to complete', 'men and work', 'w1/w2'
        ],
        response: `
### ⏱️ Time & Work: High-Speed LCM Method

#### 1. The Universal LCM Shortcut:
Instead of cumbersome fractions $\\left(\\frac{1}{a} + \\frac{1}{b}\\right)$, assume **Total Work Units = LCM of individual times**.

$$\\text{Daily Efficiency (Units/Day)} = \\frac{\\text{Total Work Units}}{\\text{Days Taken}}$$

#### 2. Classic 2-Person Formula:
$$T_{\\text{together}} = \\frac{A \\times B}{A + B}$$

#### 3. Man-Day Equivalence:
$$\\frac{M_1 \\times D_1 \\times H_1}{W_1} = \\frac{M_2 \\times D_2 \\times H_2}{W_2}$$

#### 4. Pipes & Cisterns:
- Inlet pipe rate: positive efficiency ($+E$)
- Leakage/outlet pipe rate: negative efficiency ($-E$)
        `,
        followUps: [
          'Speed, time & relative speed',
          'Percentages shortcut',
          'Permutations & combinations'
        ]
      },
      {
        id: 'percentages_profit_loss',
        intent: 'Percentages, Profit & Loss Shortcuts',
        keywords: [
          'percentage', 'percentages', 'profit', 'loss', 'discount', 'cost price', 'selling price',
          'marked price', 'successive percentage'
        ],
        response: `
### 💰 Percentages, Profit & Loss Quick-Reference

1. **Successive Percentage Changes ($a\\%$ and $b\\%$):**
$$\\text{Net Change}\\% = a + b + \\frac{a \\cdot b}{100}$$

2. **Successive Discounts ($d_1\\%$ and $d_2\\%$):**
$$\\text{Net Discount}\\% = d_1 + d_2 - \\frac{d_1 \\cdot d_2}{100}$$

3. **Expenditure Balance:** If price rises by $r\\%$, consumption must drop by:
$$\\text{Reduction}\\% = \\left(\\frac{r}{100 + r}\\right) \\times 100$$

4. **Selling Price ($SP$) Formula:**
$$SP = CP \\times \\left(1 \\pm \\frac{P/L\\%}{100}\\right)$$
        `,
        followUps: [
          'Speed, time & relative speed',
          'Equations of 2D motion',
          'Permutations & combinations'
        ]
      },
      {
        id: 'permutations_combinations_probability',
        intent: 'Permutations, Combinations & Probability',
        keywords: [
          'permutation', 'combination', 'probability', 'pnc', 'cards', 'dice', 'factorial', 'ncr', 'npr'
        ],
        response: `
### 🎲 Permutations, Combinations & Probability

- **Permutations (Order Matters):**
$$^nP_r = \\frac{n!}{(n - r)!}$$

- **Combinations (Selection Only):**
$$^nC_r = \\frac{n!}{r!(n - r)!}$$

- **Probability of Event $E$:**
$$P(E) = \\frac{\\text{Number of Favorable Outcomes}}{\\text{Total Sample Space Size}}$$
        `,
        followUps: [
          'Time & Work shortcut',
          'Speed, time & relative speed',
          'HR STAR method'
        ]
      },
      {
        id: 'hr_star_method',
        intent: 'HR Behavioral Interview (STAR Method)',
        keywords: [
          'hr', 'star', 'star method', 'interview', 'behavioral', 'weakness', 'strength', 'tell me about yourself'
        ],
        response: `
### 🎯 The STAR Interview Framework

Structure every behavioral, situational, or leadership question with **STAR**:

- **S - Situation:** Set the context in 1-2 crisp sentences.
- **T - Task:** Clarify your exact responsibility and the hurdle faced.
- **A - Action:** Highlight the specific technical skills and decisions **you** made (use "I", not just "we").
- **R - Result:** Quantify the measurable impact (e.g., *"reduced latency by 35%"*, *"delivered 2 days ahead of sprint deadline"*).
        `,
        followUps: [
          'Speed, time & relative speed',
          'Time & Work shortcut',
          'Placement records & recruiters'
        ]
      }
    ];

    this.stopWords = new Set([
      'a', 'an', 'the', 'is', 'are', 'was', 'were', 'in', 'on', 'at', 'to', 'for', 'of', 'with',
      'and', 'or', 'about', 'can', 'you', 'tell', 'me', 'what', 'which', 'how', 'give', 'show', 'please'
    ]);
  }

  /**
   * Cleans and normalizes query text into tokens
   */
  tokenize(text) {
    if (!text) return [];
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, ' ')
      .split(/\s+/)
      .filter(token => token.length > 1 && !this.stopWords.has(token));
  }

  /**
   * Matches query against knowledge base intents using weighted keyword scoring
   */
  findBestMatch(queryText) {
    const rawLower = queryText.toLowerCase().trim();
    const tokens = this.tokenize(rawLower);

    let bestMatch = null;
    let highestScore = 0;

    for (const item of this.knowledgeBase) {
      let score = 0;

      for (const keyword of item.keywords) {
        const kwLower = keyword.toLowerCase();

        // Exact match or contains full keyword phrase
        if (rawLower === kwLower) {
          score += 15;
        } else if (rawLower.includes(kwLower)) {
          score += 8;
        }

        // Token-level match
        const kwTokens = this.tokenize(kwLower);
        for (const token of tokens) {
          if (kwTokens.includes(token)) {
            score += 3;
          } else if (kwLower.includes(token) && token.length > 3) {
            score += 1.5;
          }
        }
      }

      if (score > highestScore) {
        highestScore = score;
        bestMatch = item;
      }
    }

    // Fallback threshold
    if (highestScore < 3 || !bestMatch) {
      return {
        matched: false,
        intent: 'Fallback',
        response: `
I couldn't find a direct match for your query about Sahyadri College. 

Try asking one of our popular topics:
- **"What are the CET codes?"** (KCET, COMEDK, PGCET)
- **"List engineering branches"** (CSE, AIML, ISE, ECE, etc.)
- **"Placement records & recruiters"** (Packages, top companies)
- **"Campus location"** (Adyar, Mangaluru, River Netravati)
- **"Incubation & startups"** (NAIN, K-Tech, student labs)
        `,
        followUps: [
          'What are the CET codes?',
          'List engineering branches',
          'Placement records',
          'Campus location'
        ]
      };
    }

    return {
      matched: true,
      intent: bestMatch.intent,
      response: bestMatch.response,
      followUps: bestMatch.followUps
    };
  }

  /**
   * Formats LaTeX strings using KaTeX if present or high-fidelity HTML typography fallback
   */
  renderLatex(latex, isDisplay = false) {
    if (typeof window !== 'undefined' && window.katex && typeof window.katex.renderToString === 'function') {
      try {
        return window.katex.renderToString(latex, {
          displayMode: isDisplay,
          throwOnError: false
        });
      } catch (err) {
        console.warn('KaTeX render fallback:', err);
      }
    }

    // High-fidelity HTML typography fallback for mathematical expressions
    let clean = latex
      .replace(/\\frac\{([^{}]+)\}\{([^{}]+)\}/g, '($1 / $2)')
      .replace(/\\mathbf\{([^{}]+)\}/g, '<strong>$1</strong>')
      .replace(/\\mathbf/g, '')
      .replace(/\\text\{([^{}]+)\}/g, '$1')
      .replace(/\\frac\{([^{}]+)\}\{([^{}]+)\}/g, '($1 / $2)')
      .replace(/\\to/g, ' → ')
      .replace(/\\pm/g, ' ± ')
      .replace(/\\times/g, ' × ')
      .replace(/\\cdot/g, ' · ')
      .replace(/\\leq/g, ' ≤ ')
      .replace(/\\geq/g, ' ≥ ')
      .replace(/\\neq/g, ' ≠ ')
      .replace(/\\theta/g, 'θ')
      .replace(/\\sin/g, 'sin')
      .replace(/\\cos/g, 'cos')
      .replace(/\\tan/g, 'tan')
      .replace(/\\%/g, '%')
      .replace(/_\{([^{}]+)\}/g, '<sub>$1</sub>')
      .replace(/\^\{([^{}]+)\}/g, '<sup>$1</sup>')
      .replace(/_([a-zA-Z0-9])/g, '<sub>$1</sub>')
      .replace(/\^([a-zA-Z0-9])/g, '<sup>$1</sup>');

    if (isDisplay) {
      return `<div class="my-3 py-2 px-3 rounded-xl bg-slate-900/90 border border-indigo-500/30 text-indigo-300 font-mono text-center overflow-x-auto text-sm shadow-inner">${clean}</div>`;
    }
    return `<span class="font-mono text-indigo-300 font-medium px-1">${clean}</span>`;
  }

  /**
   * Formats markdown and mathematical response text into clean styled HTML
   */
  formatMarkdown(markdownText) {
    if (!markdownText) return '';

    let formatted = markdownText.trim();

    // 1. Process Display Math: $$ ... $$
    formatted = formatted.replace(/\$\$([\s\S]*?)\$\$/g, (_, latex) => {
      return this.renderLatex(latex.trim(), true);
    });

    // 2. Process Inline Math: $ ... $ (excluding escaped \$)
    formatted = formatted.replace(/(?<!\\)\$([^\$\n]+)\$/g, (_, latex) => {
      return this.renderLatex(latex.trim(), false);
    });

    // 3. Bold text: **bold**
    formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-white">$1</strong>');

    // 4. Italic text: *italic*
    formatted = formatted.replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, '<em class="text-slate-300 italic">$1</em>');

    // 5. Code tags: `code`
    formatted = formatted.replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-indigo-300 font-mono text-xs">$1</code>');

    // 6. Split into lines and structure block hierarchy
    const lines = formatted.split('\n');
    let htmlOutput = '';
    let inList = false;
    let listType = 'ul';

    for (const rawLine of lines) {
      const line = rawLine.trim();

      if (!line) {
        if (inList) {
          htmlOutput += `</${listType}>`;
          inList = false;
        }
        continue;
      }

      // Headings
      if (line.startsWith('#### ')) {
        if (inList) { htmlOutput += `</${listType}>`; inList = false; }
        htmlOutput += `<h4 class="text-xs sm:text-sm font-semibold text-slate-200 pt-2 pb-1">${line.substring(5)}</h4>`;
        continue;
      }
      if (line.startsWith('### ')) {
        if (inList) { htmlOutput += `</${listType}>`; inList = false; }
        htmlOutput += `<h3 class="text-sm sm:text-base font-bold text-indigo-300 pt-2.5 pb-1 border-b border-slate-700/60">${line.substring(4)}</h3>`;
        continue;
      }
      if (line.startsWith('## ') || line.startsWith('# ')) {
        if (inList) { htmlOutput += `</${listType}>`; inList = false; }
        const text = line.replace(/^#{1,2}\s+/, '');
        htmlOutput += `<h2 class="text-base sm:text-lg font-extrabold text-white pt-3 pb-1 border-b border-indigo-500/30">${text}</h2>`;
        continue;
      }

      // Bullet List (- or *)
      if (line.startsWith('- ') || line.startsWith('* ')) {
        if (!inList || listType !== 'ul') {
          if (inList) htmlOutput += `</${listType}>`;
          htmlOutput += '<ul class="space-y-1.5 my-2 list-disc pl-5 text-slate-300">';
          inList = true;
          listType = 'ul';
        }
        htmlOutput += `<li class="leading-relaxed text-sm">${line.substring(2)}</li>`;
        continue;
      }

      // Numbered List (1. 2.)
      if (/^\d+\.\s+/.test(line)) {
        if (!inList || listType !== 'ol') {
          if (inList) htmlOutput += `</${listType}>`;
          htmlOutput += '<ol class="space-y-1.5 my-2 list-decimal pl-5 text-slate-300">';
          inList = true;
          listType = 'ol';
        }
        htmlOutput += `<li class="leading-relaxed text-sm">${line.replace(/^\d+\.\s+/, '')}</li>`;
        continue;
      }

      // Display math container emitted earlier
      if (line.startsWith('<div class="my-3 py-2 px-3 rounded-xl bg-slate-900/90')) {
        if (inList) { htmlOutput += `</${listType}>`; inList = false; }
        htmlOutput += line;
        continue;
      }

      // Regular paragraph
      if (inList) {
        htmlOutput += `</${listType}>`;
        inList = false;
      }
      htmlOutput += `<p class="text-slate-300 text-sm leading-relaxed mb-2">${line}</p>`;
    }

    if (inList) {
      htmlOutput += `</${listType}>`;
    }

    return htmlOutput;
  }
}

// Attach globally
if (typeof window !== 'undefined') {
  window.sahyadriChatbot = new SahyadriChatbot();
}
