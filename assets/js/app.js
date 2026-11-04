/**
 * NexusLab Dashboard Application Controller
 * Single Page Application router, Exam Engine, Newsletter Search & Chatbot Controller
 */

// Application Global State
const AppState = {
  activeRoute: 'overview',
  
  // Exam Engine State
  activeExamId: null,
  activeExam: null,
  currentQuestionIndex: 0,
  userAnswers: {},         // { [questionId]: optionIndex }
  flaggedQuestions: new Set(),
  examTimerInterval: null,
  timerSecondsRemaining: 0,
  examIsSubmitted: false,
  activeExamFilter: 'all',
  
  // Newsletter State
  newsSearchQuery: '',
  newsCategoryFilter: 'all',
  newsSortOrder: 'desc',   // 'desc' (newest first) or 'asc'

  // Chatbot State
  chatHistory: []
};

// Safe icon refresher
function refreshIcons() {
  if (typeof window.lucide !== 'undefined' && window.lucide.createIcons) {
    window.lucide.createIcons();
  }
}

// Toast notification system
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  const typeStyles = {
    info: 'bg-indigo-950/90 border-indigo-500/30 text-indigo-200',
    success: 'bg-emerald-950/90 border-emerald-500/30 text-emerald-200',
    warning: 'bg-amber-950/90 border-amber-500/30 text-amber-200',
    error: 'bg-rose-950/90 border-rose-500/30 text-rose-200'
  };

  const icons = {
    info: 'info',
    success: 'check-circle-2',
    warning: 'alert-triangle',
    error: 'x-circle'
  };

  toast.className = `toast-item flex items-center gap-2.5 px-4 py-3 rounded-xl border shadow-xl text-xs font-medium max-w-sm ${typeStyles[type] || typeStyles.info}`;
  toast.innerHTML = `
    <i data-lucide="${icons[type] || 'info'}" class="w-4 h-4 shrink-0"></i>
    <span class="flex-1">${message}</span>
  `;

  container.appendChild(toast);
  refreshIcons();

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.25s ease-out';
    setTimeout(() => toast.remove(), 250);
  }, 3200);
}

/* ==========================================================================
   ROUTING & VIEW MANAGEMENT
   ========================================================================== */

function handleRouting() {
  const hash = window.location.hash.replace('#', '') || 'overview';
  const validRoutes = ['overview', 'exams', 'news', 'chatbot', 'specs'];
  const targetRoute = validRoutes.includes(hash) ? hash : 'overview';

  AppState.activeRoute = targetRoute;

  // Toggle visible view section
  validRoutes.forEach(route => {
    const viewEl = document.getElementById(`view-${route}`);
    if (viewEl) {
      if (route === targetRoute) {
        viewEl.classList.remove('hidden');
      } else {
        viewEl.classList.add('hidden');
      }
    }
  });

  // Update nav link active states
  validRoutes.forEach(route => {
    const navItem = document.getElementById(`nav-${route}`);
    if (navItem) {
      if (route === targetRoute) {
        navItem.className = 'nav-item flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all text-white bg-indigo-500/15 border border-indigo-500/30';
      } else {
        navItem.className = 'nav-item flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all text-slate-300 hover:text-white hover:bg-white/5 border border-transparent';
      }
    }
  });

  // Update top bar breadcrumb
  const breadcrumbMap = {
    overview: 'Repository Overview',
    exams: 'Exam Hub & Evaluation',
    news: 'AI Intelligence Digest',
    chatbot: 'Sahyadri Campus Assistant',
    specs: 'Technical Architecture & Specs'
  };
  const breadcrumbEl = document.getElementById('topbar-breadcrumb');
  if (breadcrumbEl) {
    breadcrumbEl.textContent = breadcrumbMap[targetRoute] || 'Dashboard';
  }

  // Close mobile sidebar if open
  closeMobileSidebar();

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Refresh icons
  refreshIcons();
}

function openMobileSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  if (sidebar && overlay) {
    sidebar.classList.remove('-translate-x-full');
    overlay.classList.remove('hidden');
  }
}

function closeMobileSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  if (sidebar && overlay) {
    sidebar.classList.add('-translate-x-full');
    overlay.classList.add('hidden');
  }
}

/* ==========================================================================
   MODULE 1: EXAM HUB & ASSESSMENT ENGINE
   ========================================================================== */

function initExamHub() {
  updateDashboardKPIs();
  renderExamFilterTabs();
  renderExamCards();
  setupExamEventListeners();
}

function updateDashboardKPIs() {
  const examsCountEl = document.getElementById('kpi-exams-count');
  const questionsCountEl = document.getElementById('kpi-questions-count');
  const examsSubtitleEl = document.getElementById('kpi-exams-subtitle');
  const navExamsBadge = document.getElementById('nav-exams-badge');

  if (typeof EXAMS_DATA !== 'undefined' && EXAMS_DATA.length > 0) {
    const totalQ = EXAMS_DATA.reduce((acc, e) => acc + (e.questions ? e.questions.length : 0), 0);
    if (examsCountEl) examsCountEl.textContent = `${EXAMS_DATA.length} Exams`;
    if (questionsCountEl) questionsCountEl.textContent = `${totalQ} Questions`;
    if (examsSubtitleEl) examsSubtitleEl.textContent = `• TCS, Infosys, CTS, Wipro & JLPT`;
    if (navExamsBadge) navExamsBadge.textContent = `${EXAMS_DATA.length} Exams`;
  }
}

function renderExamFilterTabs() {
  const container = document.getElementById('exam-tabs-container');
  if (!container) return;

  const categories = [
    { id: 'all', label: 'All Exams (15)' },
    { id: 'TCS', label: 'TCS NQT' },
    { id: 'Infosys', label: 'Infosys' },
    { id: 'Accenture', label: 'Accenture' },
    { id: 'Cognizant', label: 'Cognizant' },
    { id: 'Wipro', label: 'Wipro' },
    { id: 'Quantitative', label: 'Quantitative' },
    { id: 'Reasoning', label: 'Logical' },
    { id: 'Verbal & DI', label: 'Verbal & DI' },
    { id: 'Japanese N5', label: 'Japanese N5' }
  ];

  container.innerHTML = categories.map(cat => {
    const isActive = AppState.activeExamFilter === cat.id;
    const activeClasses = isActive 
      ? 'bg-indigo-600 text-white font-semibold shadow' 
      : 'text-slate-400 hover:text-slate-200 hover:bg-white/5';

    return `
      <button class="exam-cat-tab whitespace-nowrap px-3 py-1.5 rounded-lg text-xs transition-all ${activeClasses}" data-category="${cat.id}">
        ${cat.label}
      </button>
    `;
  }).join('');

  container.querySelectorAll('.exam-cat-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      AppState.activeExamFilter = btn.dataset.category;
      renderExamFilterTabs();
      renderExamCards();
    });
  });
}

function renderExamCards() {
  const container = document.getElementById('exam-selection-container');
  if (!container || typeof EXAMS_DATA === 'undefined') return;

  const filteredExams = EXAMS_DATA.filter(exam => {
    if (AppState.activeExamFilter === 'all') return true;
    if (exam.company_tag === AppState.activeExamFilter || exam.company === AppState.activeExamFilter) return true;
    if (AppState.activeExamFilter === 'Cognizant' && (exam.company_tag === 'Cognizant (CTS)' || exam.company === 'Cognizant (CTS)')) return true;
    return exam.category === AppState.activeExamFilter;
  });

  container.innerHTML = filteredExams.map(exam => {
    const companyBadge = exam.company_tag ? `
      <span class="text-[10px] font-mono px-2 py-0.5 rounded-full border bg-white/5 text-slate-300 border-white/10">
        ${exam.company_tag}
      </span>
    ` : '';

    return `
      <div class="glass-panel p-6 rounded-2xl glass-panel-hover flex flex-col justify-between group">
        <div>
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center gap-2">
              <span class="text-xs font-mono px-2 py-0.5 rounded-full border ${exam.badgeClass}">
                ${exam.category}
              </span>
              ${companyBadge}
            </div>
            <div class="flex items-center gap-1.5 text-xs text-slate-400">
              <i data-lucide="clock" class="w-3.5 h-3.5 text-indigo-400"></i>
              <span>${exam.durationMinutes} mins</span>
            </div>
          </div>

          <h3 class="text-base font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
            ${exam.title}
          </h3>

          <p class="text-xs text-slate-400 leading-relaxed mb-4">
            ${exam.description}
          </p>

          <div class="flex items-center gap-3 text-xs text-slate-300 mb-6 p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
            <div>
              <span class="text-slate-400">Questions:</span>
              <span class="font-bold text-white ml-1">${exam.questions.length}</span>
            </div>
            <span>•</span>
            <div>
              <span class="text-slate-400">Passing:</span>
              <span class="font-bold text-emerald-400 ml-1">${exam.passingScore}%</span>
            </div>
          </div>
        </div>

        <button class="start-exam-btn w-full py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all shadow-lg shadow-indigo-600/25 group-hover:shadow-indigo-600/40" data-exam-id="${exam.id}">
          <i data-lucide="play" class="w-3.5 h-3.5"></i>
          <span>Start Assessment</span>
        </button>
      </div>
    `;
  }).join('');

  container.querySelectorAll('.start-exam-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      startExam(btn.dataset.examId);
    });
  });

  refreshIcons();
}

function startExam(examId) {
  const exam = EXAMS_DATA.find(e => e.id === examId);
  if (!exam) return;

  AppState.activeExamId = examId;
  AppState.activeExam = exam;
  AppState.currentQuestionIndex = 0;
  AppState.userAnswers = {};
  AppState.flaggedQuestions.clear();
  AppState.examIsSubmitted = false;
  AppState.timerSecondsRemaining = exam.durationMinutes * 60;

  // UI state transition
  document.getElementById('exam-selection-container').classList.add('hidden');
  document.getElementById('exam-results-container').classList.add('hidden');
  document.getElementById('exam-runner-container').classList.remove('hidden');

  // Set titles
  document.getElementById('runner-exam-title').textContent = exam.title;

  // Start countdown timer
  startExamTimer();

  // Render question
  renderCurrentQuestion();
  renderQuestionPalette();

  showToast(`Exam Started: ${exam.title}`, 'info');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function startExamTimer() {
  clearInterval(AppState.examTimerInterval);

  const display = document.getElementById('exam-timer-display');
  const badge = document.getElementById('exam-timer-badge');

  function updateDisplay() {
    const minutes = Math.floor(AppState.timerSecondsRemaining / 60);
    const seconds = AppState.timerSecondsRemaining % 60;
    const formatted = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    
    if (display) display.textContent = formatted;

    // Visual warning when under 2 minutes
    if (AppState.timerSecondsRemaining <= 120 && badge) {
      badge.className = 'flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-rose-500/20 border border-rose-500/40 font-mono text-sm text-rose-300 animate-pulse';
    } else if (badge) {
      badge.className = 'flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 font-mono text-sm text-slate-200';
    }

    if (AppState.timerSecondsRemaining <= 0) {
      clearInterval(AppState.examTimerInterval);
      showToast('Time expired! Submitting your exam automatically...', 'warning');
      finalizeExamSubmission();
    } else {
      AppState.timerSecondsRemaining--;
    }
  }

  updateDisplay();
  AppState.examTimerInterval = setInterval(updateDisplay, 1000);
}

function renderCurrentQuestion() {
  const exam = AppState.activeExam;
  if (!exam) return;

  const totalQuestions = exam.questions.length;
  const currentIndex = AppState.currentQuestionIndex;
  const question = exam.questions[currentIndex];

  // Indicator
  document.getElementById('runner-question-indicator').textContent = `Question ${currentIndex + 1} of ${totalQuestions}`;
  
  // Answered count
  const answeredCount = Object.keys(AppState.userAnswers).length;
  document.getElementById('runner-answered-count').textContent = `${answeredCount} / ${totalQuestions} Answered`;

  // Progress Bar
  const percentProgress = ((currentIndex + 1) / totalQuestions) * 100;
  document.getElementById('runner-progress-bar').style.width = `${percentProgress}%`;

  // Question Category Tag
  document.getElementById('runner-q-category-tag').textContent = `${exam.category} • Question #${currentIndex + 1}`;

  // Flag button state
  const isFlagged = AppState.flaggedQuestions.has(question.id);
  const flagBtn = document.getElementById('runner-flag-btn');
  const flagText = document.getElementById('runner-flag-text');
  if (isFlagged) {
    flagBtn.className = 'flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-amber-300 bg-amber-500/20 border border-amber-500/40 transition-colors';
    flagText.textContent = 'Flagged';
  } else {
    flagBtn.className = 'flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-amber-400 hover:bg-amber-500/10 transition-colors border border-transparent';
    flagText.textContent = 'Flag for Review';
  }

  // Question Text
  document.getElementById('runner-question-text').textContent = question.question;

  // Options List
  const optionsList = document.getElementById('runner-options-list');
  optionsList.innerHTML = '';

  const selectedOption = AppState.userAnswers[question.id];
  const optionLetters = ['A', 'B', 'C', 'D'];

  question.options.forEach((optionText, index) => {
    const isSelected = selectedOption === index;
    const optionCard = document.createElement('div');
    optionCard.className = `quiz-option-card p-4 rounded-xl flex items-center justify-between text-xs md:text-sm font-medium ${isSelected ? 'selected' : ''}`;
    
    optionCard.innerHTML = `
      <div class="flex items-center gap-3">
        <span class="w-7 h-7 rounded-lg ${isSelected ? 'bg-indigo-600 text-white font-bold' : 'bg-white/5 text-slate-300 border border-white/10'} flex items-center justify-center text-xs font-mono shrink-0 transition-colors">
          ${optionLetters[index]}
        </span>
        <span class="${isSelected ? 'text-white font-semibold' : 'text-slate-300'}">${optionText}</span>
      </div>
      <div class="w-5 h-5 rounded-full ${isSelected ? 'bg-indigo-600 text-white' : 'border border-white/20'} flex items-center justify-center transition-all">
        ${isSelected ? '<i data-lucide="check" class="w-3 h-3"></i>' : ''}
      </div>
    `;

    optionCard.addEventListener('click', () => {
      selectOption(question.id, index);
    });

    optionsList.appendChild(optionCard);
  });

  // Previous button disable check
  const prevBtn = document.getElementById('runner-prev-btn');
  prevBtn.disabled = currentIndex === 0;

  // Next / Finish button label
  const nextBtn = document.getElementById('runner-next-btn');
  if (currentIndex === totalQuestions - 1) {
    nextBtn.innerHTML = '<span>Finish & Review</span> <i data-lucide="check-circle" class="w-4 h-4"></i>';
  } else {
    nextBtn.innerHTML = '<span>Next</span> <i data-lucide="chevron-right" class="w-4 h-4"></i>';
  }

  renderQuestionPalette();
  refreshIcons();
}

function selectOption(questionId, optionIndex) {
  AppState.userAnswers[questionId] = optionIndex;
  renderCurrentQuestion();
  renderQuestionPalette();
}

function toggleFlagCurrentQuestion() {
  const question = AppState.activeExam.questions[AppState.currentQuestionIndex];
  if (!question) return;

  if (AppState.flaggedQuestions.has(question.id)) {
    AppState.flaggedQuestions.delete(question.id);
    showToast('Question unflagged', 'info');
  } else {
    AppState.flaggedQuestions.add(question.id);
    showToast('Question flagged for review', 'warning');
  }

  renderCurrentQuestion();
  renderQuestionPalette();
}

function renderQuestionPalette() {
  const container = document.getElementById('runner-palette-grid');
  if (!container || !AppState.activeExam) return;

  const questions = AppState.activeExam.questions;
  container.innerHTML = questions.map((q, idx) => {
    const isCurrent = idx === AppState.currentQuestionIndex;
    const isAnswered = AppState.userAnswers[q.id] !== undefined;
    const isFlagged = AppState.flaggedQuestions.has(q.id);

    let classes = 'palette-btn h-8 rounded-lg text-xs font-mono font-medium flex items-center justify-center border ';
    
    if (isCurrent) {
      classes += 'active ring-2 ring-indigo-500 border-indigo-500 bg-indigo-500/30 text-white font-bold ';
    } else if (isFlagged) {
      classes += 'flagged border-amber-500/50 bg-amber-500/20 text-amber-300 ';
    } else if (isAnswered) {
      classes += 'answered border-indigo-500/40 bg-indigo-500/15 text-indigo-200 ';
    } else {
      classes += 'border-white/10 bg-white/5 text-slate-400 hover:bg-white/10 ';
    }

    return `
      <button class="${classes}" data-index="${idx}">
        ${idx + 1}
      </button>
    `;
  }).join('');

  container.querySelectorAll('.palette-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      AppState.currentQuestionIndex = parseInt(btn.dataset.index, 10);
      renderCurrentQuestion();
    });
  });
}

function openSubmitModal() {
  const modal = document.getElementById('modal-exam-submit');
  if (!modal || !AppState.activeExam) return;

  const total = AppState.activeExam.questions.length;
  const answered = Object.keys(AppState.userAnswers).length;
  const flagged = AppState.flaggedQuestions.size;
  const unanswered = total - answered;

  document.getElementById('modal-submit-total').textContent = total;
  document.getElementById('modal-submit-answered').textContent = answered;
  document.getElementById('modal-submit-flagged').textContent = flagged;
  document.getElementById('modal-submit-unanswered').textContent = unanswered;

  modal.classList.remove('hidden');
}

function closeSubmitModal() {
  const modal = document.getElementById('modal-exam-submit');
  if (modal) modal.classList.add('hidden');
}

function finalizeExamSubmission() {
  closeSubmitModal();
  clearInterval(AppState.examTimerInterval);
  AppState.examIsSubmitted = true;

  const exam = AppState.activeExam;
  let correctCount = 0;

  exam.questions.forEach(q => {
    if (AppState.userAnswers[q.id] === q.correctAnswer) {
      correctCount++;
    }
  });

  const total = exam.questions.length;
  const percentage = Math.round((correctCount / total) * 100);
  const isPassed = percentage >= exam.passingScore;
  const timeTakenSeconds = (exam.durationMinutes * 60) - AppState.timerSecondsRemaining;
  const timeTakenMin = Math.floor(timeTakenSeconds / 60);
  const timeTakenSec = timeTakenSeconds % 60;

  // Render Result View
  renderExamResults({
    exam,
    total,
    correctCount,
    percentage,
    isPassed,
    timeTakenFormatted: `${timeTakenMin}m ${timeTakenSec}s`
  });

  // Switch UI view
  document.getElementById('exam-runner-container').classList.add('hidden');
  document.getElementById('exam-results-container').classList.remove('hidden');

  showToast(`Exam Finished! Score: ${correctCount}/${total} (${percentage}%)`, isPassed ? 'success' : 'warning');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderExamResults({ exam, total, correctCount, percentage, isPassed, timeTakenFormatted }) {
  const container = document.getElementById('exam-results-container');
  if (!container) return;

  // Circumference for SVG ring: 2 * Math.PI * 45 ≈ 283
  const strokeDashoffset = 283 - (283 * percentage) / 100;
  const ringColor = isPassed ? '#10B981' : '#F43F5E';

  const questionsHtml = exam.questions.map((q, idx) => {
    const userAnswerIndex = AppState.userAnswers[q.id];
    const isAnswered = userAnswerIndex !== undefined;
    const isCorrect = userAnswerIndex === q.correctAnswer;
    const optionLetters = ['A', 'B', 'C', 'D'];

    return `
      <div class="glass-panel p-5 rounded-2xl border ${isCorrect ? 'border-emerald-500/20' : 'border-rose-500/20'} space-y-3">
        <div class="flex items-start justify-between gap-3">
          <div class="flex items-center gap-2">
            <span class="text-xs font-mono font-bold px-2 py-0.5 rounded ${isCorrect ? 'bg-emerald-500/20 text-emerald-300' : 'bg-rose-500/20 text-rose-300'}">
              Q${idx + 1}
            </span>
            <span class="text-xs font-semibold ${isCorrect ? 'text-emerald-400' : 'text-rose-400'} flex items-center gap-1">
              <i data-lucide="${isCorrect ? 'check-circle' : 'x-circle'}" class="w-3.5 h-3.5"></i>
              ${isCorrect ? 'Correct (+1)' : (isAnswered ? 'Incorrect (0)' : 'Unanswered (0)')}
            </span>
          </div>

          <span class="text-[11px] font-mono text-slate-400">${exam.category}</span>
        </div>

        <p class="text-sm font-medium text-white whitespace-pre-line leading-relaxed">${q.question}</p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
          <div class="p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
            <span class="text-slate-400 block mb-0.5">Your Choice:</span>
            <span class="font-semibold ${isCorrect ? 'text-emerald-300' : 'text-rose-300'}">
              ${isAnswered ? `${optionLetters[userAnswerIndex]}: ${q.options[userAnswerIndex]}` : 'None Selected'}
            </span>
          </div>
          <div class="p-2.5 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
            <span class="text-slate-400 block mb-0.5">Correct Answer:</span>
            <span class="font-semibold text-emerald-300">
              ${optionLetters[q.correctAnswer]}: ${q.options[q.correctAnswer]}
            </span>
          </div>
        </div>

        <!-- In-depth Explanation Accordion -->
        <details class="text-xs group">
          <summary class="cursor-pointer font-medium text-indigo-400 hover:text-indigo-300 flex items-center gap-1.5 py-1">
            <i data-lucide="help-circle" class="w-3.5 h-3.5"></i>
            <span>View Step-by-Step Explanation</span>
          </summary>
          <div class="mt-2.5 p-3.5 rounded-xl bg-white/[0.03] border border-white/5 text-slate-300 leading-relaxed whitespace-pre-line">
            ${q.explanation}
          </div>
        </details>
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <!-- Top Result Banner -->
    <div class="glass-panel p-6 md:p-8 rounded-2xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
      
      <div class="flex items-center gap-6">
        <!-- Animated SVG Ring -->
        <div class="relative w-28 h-28 shrink-0 flex items-center justify-center">
          <svg class="w-full h-full" viewBox="0 0 100 100">
            <circle class="text-white/5" stroke-width="8" stroke="currentColor" fill="transparent" r="45" cx="50" cy="50" />
            <circle class="progress-ring__circle" stroke-width="8" stroke-dasharray="283" stroke-dashoffset="${strokeDashoffset}" stroke-linecap="round" stroke="${ringColor}" fill="transparent" r="45" cx="50" cy="50" />
          </svg>
          <div class="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span class="text-xl font-extrabold text-white">${percentage}%</span>
            <span class="text-[10px] font-mono text-slate-400">Score</span>
          </div>
        </div>

        <div>
          <div class="flex items-center gap-2 mb-2">
            <span class="text-xs font-mono px-2 py-0.5 rounded-full ${isPassed ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-rose-500/20 text-rose-300 border border-rose-500/40'}">
              ${isPassed ? 'PASSED CRITERIA' : 'NEEDS PRACTICE'}
            </span>
            <span class="text-xs text-slate-400">• Passing Requirement: ${exam.passingScore}%</span>
          </div>
          <h2 class="text-2xl font-extrabold text-white mb-1">${exam.title}</h2>
          <p class="text-xs text-slate-300">
            You accurately solved <strong>${correctCount} of ${total}</strong> questions in <strong>${timeTakenFormatted}</strong>.
          </p>
        </div>
      </div>

      <div class="flex items-center gap-3 w-full md:w-auto">
        <button id="exam-retake-btn" class="flex-1 md:flex-none px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-all shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2">
          <i data-lucide="rotate-ccw" class="w-3.5 h-3.5"></i>
          <span>Retake Exam</span>
        </button>
        <button id="exam-return-hub-btn" class="flex-1 md:flex-none px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 font-semibold text-xs transition-colors flex items-center justify-center gap-2">
          <i data-lucide="layout-grid" class="w-3.5 h-3.5"></i>
          <span>All Exams</span>
        </button>
      </div>

    </div>

    <!-- Review Section Header -->
    <div class="flex items-center justify-between pt-2">
      <h3 class="text-base font-bold text-white flex items-center gap-2">
        <i data-lucide="list-checks" class="w-4 h-4 text-indigo-400"></i>
        Comprehensive Answer Breakdown & Explanations
      </h3>
      <span class="text-xs text-slate-400">${total} Questions Total</span>
    </div>

    <!-- Questions Explanations List -->
    <div class="space-y-4">
      ${questionsHtml}
    </div>
  `;

  document.getElementById('exam-retake-btn')?.addEventListener('click', () => {
    startExam(exam.id);
  });

  document.getElementById('exam-return-hub-btn')?.addEventListener('click', () => {
    document.getElementById('exam-results-container').classList.add('hidden');
    document.getElementById('exam-selection-container').classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  refreshIcons();
}

function setupExamEventListeners() {
  // Back to Hub from active runner
  document.getElementById('exam-back-to-hub-btn')?.addEventListener('click', () => {
    if (confirm('Are you sure you want to exit? Your progress in this attempt will be lost.')) {
      clearInterval(AppState.examTimerInterval);
      document.getElementById('exam-runner-container').classList.add('hidden');
      document.getElementById('exam-selection-container').classList.remove('hidden');
    }
  });

  // Flag toggle
  document.getElementById('runner-flag-btn')?.addEventListener('click', toggleFlagCurrentQuestion);

  // Prev / Next buttons
  document.getElementById('runner-prev-btn')?.addEventListener('click', () => {
    if (AppState.currentQuestionIndex > 0) {
      AppState.currentQuestionIndex--;
      renderCurrentQuestion();
    }
  });

  document.getElementById('runner-next-btn')?.addEventListener('click', () => {
    const total = AppState.activeExam.questions.length;
    if (AppState.currentQuestionIndex < total - 1) {
      AppState.currentQuestionIndex++;
      renderCurrentQuestion();
    } else {
      openSubmitModal();
    }
  });

  // Submit triggers
  document.getElementById('exam-submit-trigger-btn')?.addEventListener('click', openSubmitModal);
  document.getElementById('runner-submit-from-palette')?.addEventListener('click', openSubmitModal);

  // Modal actions
  document.getElementById('modal-submit-cancel-btn')?.addEventListener('click', closeSubmitModal);
  document.getElementById('modal-submit-confirm-btn')?.addEventListener('click', finalizeExamSubmission);

  // Keyboard shortcut listener (keys 1-4 to select options)
  window.addEventListener('keydown', (e) => {
    if (AppState.activeRoute === 'exams' && AppState.activeExam && !AppState.examIsSubmitted) {
      if (['1', '2', '3', '4'].includes(e.key)) {
        const optionIdx = parseInt(e.key, 10) - 1;
        const currentQ = AppState.activeExam.questions[AppState.currentQuestionIndex];
        if (currentQ && optionIdx < currentQ.options.length) {
          selectOption(currentQ.id, optionIdx);
        }
      }
    }
  });
}

/* ==========================================================================
   MODULE 2: AI NEWSLETTER DIGEST (10 EDITIONS)
   ========================================================================== */

function initNewsletters() {
  renderNewsCategoryPills();
  renderNewsCards();
  setupNewsEventListeners();
}

function renderNewsCategoryPills() {
  const container = document.getElementById('news-category-pills');
  if (!container || typeof NEWS_DATA === 'undefined') return;

  const categories = [
    'all',
    'Reasoning Models',
    'Autonomous Agents',
    'Multimodality',
    'Frontier LLMs',
    'Coding Benchmarks',
    'Open Source',
    'Robotics',
    'Edge AI',
    'AI Infrastructure',
    'Safety & Governance'
  ];

  container.innerHTML = categories.map(cat => {
    const isActive = AppState.newsCategoryFilter === cat;
    const label = cat === 'all' ? 'All Editions (10)' : cat;
    const classes = isActive 
      ? 'bg-cyan-600 text-white font-semibold shadow' 
      : 'text-slate-400 hover:text-slate-200 hover:bg-white/5 bg-white/[0.02] border border-white/5';

    return `
      <button class="news-cat-pill whitespace-nowrap px-3 py-1.5 rounded-full text-xs transition-all ${classes}" data-category="${cat}">
        ${label}
      </button>
    `;
  }).join('');

  container.querySelectorAll('.news-cat-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      AppState.newsCategoryFilter = btn.dataset.category;
      renderNewsCategoryPills();
      renderNewsCards();
    });
  });
}

function renderNewsCards() {
  const gridContainer = document.getElementById('news-grid-container');
  const emptyState = document.getElementById('news-empty-state');
  if (!gridContainer || typeof NEWS_DATA === 'undefined') return;

  const query = AppState.newsSearchQuery.toLowerCase().trim();

  let filtered = NEWS_DATA.filter(item => {
    const matchesCategory = AppState.newsCategoryFilter === 'all' || item.category === AppState.newsCategoryFilter;
    if (!matchesCategory) return false;

    if (!query) return true;

    const inTitle = item.title.toLowerCase().includes(query);
    const inSummary = item.summary.toLowerCase().includes(query);
    const inCategory = item.category.toLowerCase().includes(query);
    const inTakeaways = item.takeaways.some(t => t.toLowerCase().includes(query));
    const inContent = item.fullContent.toLowerCase().includes(query);

    return inTitle || inSummary || inCategory || inTakeaways || inContent;
  });

  // Sort by date/issue
  filtered.sort((a, b) => {
    return AppState.newsSortOrder === 'desc' 
      ? b.issueNumber - a.issueNumber 
      : a.issueNumber - b.issueNumber;
  });

  if (filtered.length === 0) {
    gridContainer.innerHTML = '';
    if (emptyState) emptyState.classList.remove('hidden');
    return;
  }

  if (emptyState) emptyState.classList.add('hidden');

  gridContainer.innerHTML = filtered.map(item => {
    const takeawaysHtml = item.takeaways.map(t => `
      <li class="flex items-start gap-2 text-xs text-slate-300">
        <i data-lucide="chevron-right" class="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5"></i>
        <span>${t}</span>
      </li>
    `).join('');

    return `
      <div class="glass-panel p-6 rounded-2xl glass-panel-hover flex flex-col justify-between group">
        <div>
          <!-- Header: Tag, Badge, Read Time -->
          <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
            <div class="flex items-center gap-2">
              <span class="text-xs font-mono px-2 py-0.5 rounded-full border ${item.badgeClass}">
                ${item.category}
              </span>
              <span class="text-xs font-mono text-slate-400">Issue #${item.issueNumber}</span>
            </div>

            <div class="flex items-center gap-1.5 text-xs text-slate-400">
              <i data-lucide="clock" class="w-3.5 h-3.5 text-cyan-400"></i>
              <span>${item.readTime}</span>
            </div>
          </div>

          <!-- Date & Author -->
          <div class="text-[11px] text-slate-400 mb-2">${item.date} • by ${item.author}</div>

          <!-- Title -->
          <h3 class="text-base font-bold text-white mb-2.5 group-hover:text-cyan-300 transition-colors leading-snug">
            ${item.title}
          </h3>

          <!-- Summary -->
          <p class="text-xs text-slate-300 leading-relaxed mb-4">
            ${item.summary}
          </p>

          <!-- Key Takeaways Highlight Box -->
          <div class="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 mb-5 space-y-2">
            <div class="text-[11px] font-bold text-cyan-300 uppercase tracking-wider">Key Takeaways:</div>
            <ul class="space-y-1.5">
              ${takeawaysHtml}
            </ul>
          </div>
        </div>

        <!-- Read Full Edition Button -->
        <button class="open-newsletter-btn w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-cyan-600/20 text-slate-200 hover:text-white border border-white/10 hover:border-cyan-500/30 font-semibold text-xs flex items-center justify-center gap-2 transition-all" data-id="${item.id}">
          <span>Read Full Analysis</span>
          <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
        </button>
      </div>
    `;
  }).join('');

  gridContainer.querySelectorAll('.open-newsletter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      openNewsletterModal(btn.dataset.id);
    });
  });

  refreshIcons();
}

function openNewsletterModal(issueId) {
  const item = NEWS_DATA.find(n => n.id === issueId);
  if (!item) return;

  const modal = document.getElementById('modal-news-reader');
  if (!modal) return;

  document.getElementById('news-modal-badge').textContent = item.category;
  document.getElementById('news-modal-date').textContent = `${item.date} • Issue #${item.issueNumber}`;
  document.getElementById('news-modal-readtime').textContent = item.readTime;
  document.getElementById('news-modal-title').textContent = item.title;

  // Takeaways
  const takeawaysList = document.getElementById('news-modal-takeaways');
  takeawaysList.innerHTML = item.takeaways.map(t => `
    <li class="flex items-start gap-2">
      <i data-lucide="check" class="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5"></i>
      <span>${t}</span>
    </li>
  `).join('');

  // Format content markdown
  const contentEl = document.getElementById('news-modal-content');
  if (window.sahyadriChatbot && window.sahyadriChatbot.formatMarkdown) {
    contentEl.innerHTML = window.sahyadriChatbot.formatMarkdown(item.fullContent);
  } else {
    contentEl.textContent = item.fullContent;
  }

  modal.classList.remove('hidden');
  refreshIcons();
}

function closeNewsletterModal() {
  const modal = document.getElementById('modal-news-reader');
  if (modal) modal.classList.add('hidden');
}

function setupNewsEventListeners() {
  const searchInput = document.getElementById('news-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      AppState.newsSearchQuery = e.target.value;
      renderNewsCards();
    });
  }

  const sortBtn = document.getElementById('news-sort-btn');
  const sortLabel = document.getElementById('news-sort-label');
  if (sortBtn) {
    sortBtn.addEventListener('click', () => {
      AppState.newsSortOrder = AppState.newsSortOrder === 'desc' ? 'asc' : 'desc';
      if (sortLabel) {
        sortLabel.textContent = AppState.newsSortOrder === 'desc' ? 'Newest' : 'Oldest';
      }
      renderNewsCards();
    });
  }

  document.getElementById('news-reset-search-btn')?.addEventListener('click', () => {
    if (searchInput) searchInput.value = '';
    AppState.newsSearchQuery = '';
    AppState.newsCategoryFilter = 'all';
    renderNewsCategoryPills();
    renderNewsCards();
  });

  // Modal close handlers
  document.getElementById('news-modal-close-btn')?.addEventListener('click', closeNewsletterModal);
  document.getElementById('news-modal-dismiss-btn')?.addEventListener('click', closeNewsletterModal);

  // Close on backdrop click
  document.getElementById('modal-news-reader')?.addEventListener('click', (e) => {
    if (e.target.id === 'modal-news-reader') {
      closeNewsletterModal();
    }
  });

  // Close on Escape key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeNewsletterModal();
      closeSubmitModal();
    }
  });
}

/* ==========================================================================
   MODULE 3: SAHYADRI CAMPUS NLP CHATBOT
   ========================================================================== */

function initChatbot() {
  setupChatbotEventListeners();
}

function setupChatbotEventListeners() {
  const form = document.getElementById('chat-form');
  const input = document.getElementById('chat-input');
  const clearBtn = document.getElementById('chat-clear-btn');

  if (form && input) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const message = input.value.trim();
      if (!message) return;

      sendUserMessage(message);
      input.value = '';
    });
  }

  // Pre-suggested quick prompt chips
  document.querySelectorAll('.chat-prompt-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      sendUserMessage(chip.textContent.trim());
    });
  });

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      const container = document.getElementById('chat-messages-container');
      if (!container) return;

      container.innerHTML = `
        <div class="flex items-start gap-3 max-w-2xl animate-fade-in">
          <div class="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
            <i data-lucide="bot" class="w-4 h-4"></i>
          </div>
          <div class="space-y-2">
            <div class="p-4 rounded-2xl bg-[#172033]/90 border border-white/10 chat-prose">
              <p class="text-white text-sm font-semibold mb-1">Chat history cleared.</p>
              <p class="text-slate-300 text-xs leading-relaxed">
                Ask any question regarding Sahyadri College (CET code <span class="badge-code">E160</span>, COMEDK, MBA, branches, placements, or incubation).
              </p>
            </div>
          </div>
        </div>
        <div id="chat-typing-indicator" class="hidden items-center gap-3 animate-fade-in">
          <div class="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
            <i data-lucide="bot" class="w-4 h-4"></i>
          </div>
          <div class="px-4 py-3 rounded-2xl bg-[#172033]/90 border border-white/10 flex items-center gap-1.5">
            <span class="typing-dot"></span>
            <span class="typing-dot"></span>
            <span class="typing-dot"></span>
          </div>
        </div>
      `;
      refreshIcons();
      showToast('Chat history reset', 'info');
    });
  }
}

function sendUserMessage(text) {
  const container = document.getElementById('chat-messages-container');
  const typingIndicator = document.getElementById('chat-typing-indicator');
  if (!container) return;

  // Append user bubble
  const userMsgEl = document.createElement('div');
  userMsgEl.className = 'flex items-start justify-end gap-3 animate-fade-in';
  userMsgEl.innerHTML = `
    <div class="p-3.5 rounded-2xl bg-indigo-600 text-white text-xs md:text-sm font-medium max-w-xl shadow-lg shadow-indigo-600/25">
      ${escapeHtml(text)}
    </div>
    <div class="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-300 flex items-center justify-center shrink-0 border border-indigo-500/30 font-bold text-xs">
      YOU
    </div>
  `;

  // Insert before typing indicator
  container.insertBefore(userMsgEl, typingIndicator);
  container.scrollTop = container.scrollHeight;

  // Show simulated typing indicator
  if (typingIndicator) {
    typingIndicator.classList.remove('hidden');
    container.scrollTop = container.scrollHeight;
  }

  // Simulated client-side delay for natural feel
  setTimeout(() => {
    if (typingIndicator) {
      typingIndicator.classList.add('hidden');
    }

    const lowerQuery = text.toLowerCase();
    const isQuizRequest = lowerQuery.includes('quiz') || lowerQuery.includes('challenge') || lowerQuery.includes('test me');

    let formattedHtml = '';
    let followUps = [];
    let isQuiz = false;
    let quizCardData = null;

    if (isQuizRequest) {
      quizCardData = generateInteractiveQuizCard();
      if (quizCardData) {
        formattedHtml = quizCardData.html;
        followUps = ['⚡ Quiz Me Again', 'Speed & Relative Motion', 'Equations of 2D Motion', 'Time & Work LCM Method'];
        isQuiz = true;
      }
    }

    if (!isQuiz) {
      // Process with AptiBot NLP Engine
      const result = window.sahyadriChatbot 
        ? window.sahyadriChatbot.findBestMatch(text)
        : { matched: false, response: text, followUps: [] };

      formattedHtml = window.sahyadriChatbot 
        ? window.sahyadriChatbot.formatMarkdown(result.response) 
        : result.response;
      followUps = result.followUps || [];
    }

    // Follow-ups chips
    let followUpsHtml = '';
    if (followUps && followUps.length > 0) {
      const chips = followUps.map(fu => `
        <button class="chat-prompt-chip text-[11px] px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 border border-white/5 transition-colors">
          ${fu}
        </button>
      `).join('');
      followUpsHtml = `<div class="flex flex-wrap gap-1.5 pt-1">${chips}</div>`;
    }

    // Append assistant bubble
    const botMsgEl = document.createElement('div');
    botMsgEl.className = 'flex items-start gap-3 max-w-2xl animate-fade-in';
    botMsgEl.innerHTML = `
      <div class="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
        <i data-lucide="bot" class="w-4 h-4"></i>
      </div>
      <div class="space-y-2 flex-1">
        <div class="p-4 rounded-2xl bg-[#172033]/90 border border-white/10 chat-prose">
          ${formattedHtml}
        </div>
        ${followUpsHtml}
      </div>
    `;

    container.insertBefore(botMsgEl, typingIndicator);

    if (isQuiz) {
      attachQuizOptionListeners(botMsgEl);
    }
    
    // Add event listeners to newly appended follow-up chips
    botMsgEl.querySelectorAll('.chat-prompt-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        sendUserMessage(chip.textContent.trim());
      });
    });

    container.scrollTop = container.scrollHeight;
    refreshIcons();
  }, 480);
}

function generateInteractiveQuizCard() {
  if (typeof EXAMS_DATA === 'undefined' || EXAMS_DATA.length === 0) return null;
  const randomExam = EXAMS_DATA[Math.floor(Math.random() * EXAMS_DATA.length)];
  const q = randomExam.questions[Math.floor(Math.random() * randomExam.questions.length)];
  const qId = 'quiz-' + Date.now() + '-' + Math.floor(Math.random() * 1000);

  const optionsHtml = q.options.map((opt, idx) => `
    <button class="quiz-option-btn w-full text-left p-3 rounded-xl bg-white/[0.03] hover:bg-indigo-600/20 border border-white/10 hover:border-indigo-500/30 text-xs text-slate-300 transition-all flex items-center justify-between group" data-qid="${qId}" data-idx="${idx}" data-correct="${q.correctAnswer}">
      <span class="flex items-center gap-2.5">
        <span class="w-5 h-5 rounded-md bg-white/5 border border-white/10 flex items-center justify-center font-mono text-[10px] text-slate-400 group-hover:text-indigo-300 font-bold">${String.fromCharCode(65 + idx)}</span>
        <span>${escapeHtml(opt)}</span>
      </span>
      <span class="quiz-status-pill hidden text-[10px] font-bold px-2 py-0.5 rounded-full"></span>
    </button>
  `).join('');

  return {
    qId,
    correctAnswer: q.correctAnswer,
    explanation: q.explanation,
    html: `
      <div class="space-y-3" id="${qId}">
        <div class="flex items-center justify-between text-[11px] text-indigo-400 border-b border-white/10 pb-2">
          <span class="font-bold flex items-center gap-1.5 text-amber-300">
            <i data-lucide="zap" class="w-3.5 h-3.5 text-amber-400"></i>
            <span>Interactive Speed Challenge</span>
          </span>
          <span class="font-mono text-slate-400 px-2 py-0.5 rounded bg-white/5 border border-white/10">${randomExam.title.split(':')[0]}</span>
        </div>
        <p class="text-xs sm:text-sm text-white font-medium leading-relaxed">${escapeHtml(q.question)}</p>
        <div class="space-y-1.5 pt-1">${optionsHtml}</div>
        <div class="quiz-solution-box hidden p-3.5 rounded-xl bg-slate-900/90 border border-emerald-500/30 text-xs text-slate-200 animate-fade-in space-y-1.5 mt-2">
          <div class="font-bold text-emerald-400 flex items-center gap-1.5">
            <i data-lucide="check-circle-2" class="w-4 h-4"></i>
            <span>Correct Answer: Option ${String.fromCharCode(65 + q.correctAnswer)}</span>
          </div>
          <p class="text-slate-300 text-[11px] leading-relaxed whitespace-pre-line">${escapeHtml(q.explanation)}</p>
        </div>
      </div>
    `
  };
}

function attachQuizOptionListeners(cardEl) {
  cardEl.querySelectorAll('.quiz-option-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const qId = btn.dataset.qid;
      const clickedIdx = parseInt(btn.dataset.idx, 10);
      const correctIdx = parseInt(btn.dataset.correct, 10);

      const allBtns = cardEl.querySelectorAll(`.quiz-option-btn[data-qid="${qId}"]`);
      allBtns.forEach(b => {
        b.disabled = true;
        b.classList.add('cursor-default');
      });

      const solutionBox = cardEl.querySelector('.quiz-solution-box');
      if (solutionBox) solutionBox.classList.remove('hidden');

      if (clickedIdx === correctIdx) {
        btn.classList.remove('bg-white/[0.03]', 'border-white/10');
        btn.classList.add('bg-emerald-500/20', 'border-emerald-500', 'text-emerald-300');
        const pill = btn.querySelector('.quiz-status-pill');
        if (pill) {
          pill.textContent = '✓ Correct';
          pill.className = 'quiz-status-pill text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30';
        }
      } else {
        btn.classList.remove('bg-white/[0.03]', 'border-white/10');
        btn.classList.add('bg-rose-500/20', 'border-rose-500', 'text-rose-300');
        const pill = btn.querySelector('.quiz-status-pill');
        if (pill) {
          pill.textContent = '✗ Incorrect';
          pill.className = 'quiz-status-pill text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-400 border border-rose-500/30';
        }
        allBtns.forEach(b => {
          if (parseInt(b.dataset.idx, 10) === correctIdx) {
            b.classList.remove('bg-white/[0.03]', 'border-white/10');
            b.classList.add('bg-emerald-500/10', 'border-emerald-500/50', 'text-emerald-300');
          }
        });
      }

      refreshIcons();
    });
  });
}

function escapeHtml(string) {
  const div = document.createElement('div');
  div.textContent = string;
  return div.innerHTML;
}

/* ==========================================================================
   INITIALIZATION LIFECYCLE
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Setup sidebar mobile toggles
  document.getElementById('sidebar-open-btn')?.addEventListener('click', openMobileSidebar);
  document.getElementById('sidebar-close-btn')?.addEventListener('click', closeMobileSidebar);
  document.getElementById('sidebar-overlay')?.addEventListener('click', closeMobileSidebar);

  // Initialize hash routing
  window.addEventListener('hashchange', handleRouting);
  handleRouting();

  // Initialize all three core modules
  initExamHub();
  initNewsletters();
  initChatbot();

  // Initial icon pass
  refreshIcons();
});
