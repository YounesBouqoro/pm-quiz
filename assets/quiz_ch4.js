/* ======================================================
   Projektmanagement – Kapitel 4 Quiz Engine
   Themen:
   - Projektinitialisierung
   - Projektziele (Ergebnis- vs. Vorgehensziele)
   - SMART
   - Anforderungen (funktional / nicht-funktional, MoSCoW)
   Strategie:
   - Normalmodus: 12 zufällig
   - Klausurmodus (?mode=exam): Transfer + Klassifikation priorisiert
     (basic | compare | transfer | calculation)
   - Review + localStorage Stats
   ====================================================== */

(function () {
  const RUN_SIZE = 12;

  const STATS_KEY = "pmquiz_stats_ch4";
  const RUN_KEY   = "pmquiz_run_ch4";

  // --- DOM refs
  const quizRoot = document.getElementById("quizRoot");
  const progressText = document.getElementById("progressText");
  const scoreText = document.getElementById("scoreText");
  const statusText = document.getElementById("statusText");
  const resultBox = document.getElementById("resultBox");
  const reviewBox = document.getElementById("reviewBox");
  const reviewBtn = document.getElementById("reviewBtn");
  const statsBox = document.getElementById("statsBox");

  function mustExist(el, id) {
    if (!el) {
      console.error(`Quiz CH4: Missing element #${id}. Check chapter4.html.`);
      return false;
    }
    return true;
  }

  const coreOk =
    mustExist(quizRoot, "quizRoot") &&
    mustExist(progressText, "progressText") &&
    mustExist(scoreText, "scoreText") &&
    mustExist(statusText, "statusText");

  if (!coreOk) return;

  // --- mode
  function getMode() {
    const p = new URLSearchParams(window.location.search);
    return (p.get("mode") || "").toLowerCase() === "exam" ? "exam" : "normal";
  }

  // --- Questions: dynamic access (no freezing)
  function getQuestions() {
    const q = window.QUESTIONS_CH4;
    return Array.isArray(q) ? q : [];
  }

  // --- Stats
  function defaultStats() {
    return { runs: 0, bestScore: 0, lastScore: 0, totalCorrect: 0, totalQuestions: 0 };
  }
  function loadStats() {
    try { return JSON.parse(localStorage.getItem(STATS_KEY)) || defaultStats(); } catch { return defaultStats(); }
  }
  function saveStats(s) {
    localStorage.setItem(STATS_KEY, JSON.stringify(s));
  }

  // --- Utils
  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function escapeHtml(s) {
    return String(s)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function showFatal(msg) {
    quizRoot.innerHTML = `
      <div class="question">
        <p class="q-title">⚠️ Quiz kann nicht starten</p>
        <p class="muted">${escapeHtml(msg)}</p>
        <p class="muted">Check: <code>window.QUESTIONS_CH4?.length</code></p>
      </div>
    `;
  }

  // --- Run storage
  function loadRun() {
    try { return JSON.parse(localStorage.getItem(RUN_KEY)) || null; } catch { return null; }
  }
  function saveRun(run) {
    localStorage.setItem(RUN_KEY, JSON.stringify(run));
  }
  function clearRun() {
    localStorage.removeItem(RUN_KEY);
  }

  // --- Finder
  function getQuestionById(id) {
    return getQuestions().find(q => q.id === id);
  }

  function computeProgress(run) {
    const answered = run.answers.filter(a => a.picked !== null).length;
    return { answered, total: run.answers.length };
  }

  // --- Exam selection strategy
  function hasTypes(questions) {
    return questions.some(q => typeof q.type === "string" && q.type.trim().length > 0);
  }

  function pickWithQuota(questions, quota) {
    const byType = {};
    for (const q of questions) {
      const t = (q.type || "").toLowerCase();
      if (!byType[t]) byType[t] = [];
      byType[t].push(q);
    }

    const picked = [];
    for (const [type, count] of Object.entries(quota)) {
      const pool = shuffle(byType[type] || []);
      picked.push(...pool.slice(0, count));
    }

    const need = RUN_SIZE - picked.length;
    if (need > 0) {
      const pickedIds = new Set(picked.map(x => x.id));
      const rest = shuffle(questions.filter(q => !pickedIds.has(q.id)));
      picked.push(...rest.slice(0, need));
    }

    return picked.slice(0, RUN_SIZE);
  }

  function createRun() {
    const questions = getQuestions();
    if (questions.length < RUN_SIZE) {
      showFatal(`Zu wenige Fragen im Katalog. Gefunden: ${questions.length}, benötigt: ${RUN_SIZE}.`);
      return null;
    }

    const mode = getMode();
    let selected;

    if (mode === "exam" && hasTypes(questions)) {
      // Kapitel 4: Klassifikation + Transfer heavy (SMART + Zielarten + Anforderungen/MoSCoW)
      const QUOTA = { basic: 3, compare: 3, transfer: 6, calculation: 0 };
      selected = pickWithQuota(questions, QUOTA);
    } else {
      selected = shuffle(questions).slice(0, RUN_SIZE);
    }

    const run = {
      createdAt: Date.now(),
      finished: false,
      mode,
      answers: selected.map(q => ({ id: q.id, picked: null }))
    };

    saveRun(run);
    return run;
  }

  function resetRunUI() {
    if (resultBox) resultBox.classList.add("hidden");
    if (reviewBox) reviewBox.classList.add("hidden");
    if (reviewBtn) reviewBtn.disabled = true;

    statusText.textContent = "Laufend";
    scoreText.textContent = "0";
    progressText.textContent = `0 / ${RUN_SIZE}`;
  }

  function resetRun() {
    clearRun();
    resetRunUI();
    createRun();
    render();
  }

  // --- Stats render
  function renderStats() {
    if (!statsBox) return;

    const s = loadStats();
    const acc = s.totalQuestions > 0 ? Math.round((s.totalCorrect / s.totalQuestions) * 100) : 0;

    statsBox.innerHTML = `
      <div class="stats">
        <div class="stat"><div class="muted">Runs</div><strong>${s.runs}</strong></div>
        <div class="stat"><div class="muted">Letzter Score</div><strong>${s.lastScore}/12</strong></div>
        <div class="stat"><div class="muted">Bester Score</div><strong>${s.bestScore}/12</strong></div>
        <div class="stat"><div class="muted">Gesamt korrekt</div><strong>${s.totalCorrect}</strong></div>
        <div class="stat"><div class="muted">Gesamt Fragen</div><strong>${s.totalQuestions}</strong></div>
        <div class="stat"><div class="muted">Accuracy</div><strong>${acc}%</strong></div>
      </div>
    `;
  }

  // --- Render quiz
  function render() {
    let run = loadRun();

    if (!run) {
      run = createRun();
      if (!run) return;
    }

    // If mode changed, recreate run to match mode
    if (run.mode && run.mode !== getMode()) {
      clearRun();
      resetRunUI();
      run = createRun();
      if (!run) return;
    }

    // If catalog changed or invalid ids, recreate run
    const missing = run.answers.filter(a => !getQuestionById(a.id)).length;
    if (missing > 0) {
      console.warn("Quiz CH4: Run contains unknown question IDs. Recreating run.");
      clearRun();
      resetRunUI();
      run = createRun();
      if (!run) return;
    }

    const { answered, total } = computeProgress(run);
    progressText.textContent = `${answered} / ${total}`;

    quizRoot.innerHTML = "";

    run.answers.forEach((a, idx) => {
      const q = getQuestionById(a.id);
      if (!q) return;

      const qEl = document.createElement("div");
      qEl.className = "question";
      qEl.innerHTML = `
        <p class="q-title">${idx + 1}. ${escapeHtml(q.q)}</p>
        <div class="options">
          ${q.options.map((opt, oi) => `
            <label class="opt">
              <input type="radio" name="q_${q.id}" value="${oi}"
                ${a.picked === oi ? "checked" : ""}
                ${run.finished ? "disabled" : ""}/>
              <span>${escapeHtml(opt)}</span>
            </label>
          `).join("")}
        </div>
      `;
      quizRoot.appendChild(qEl);

      qEl.querySelectorAll(`input[name="q_${q.id}"]`).forEach(inp => {
        inp.addEventListener("change", (e) => {
          const run2 = loadRun();
          if (!run2 || run2.finished) return;

          const picked = Number(e.target.value);
          const entry = run2.answers.find(x => x.id === q.id);
          if (!entry) return;

          entry.picked = picked;
          saveRun(run2);

          const p = computeProgress(run2);
          progressText.textContent = `${p.answered} / ${p.total}`;
        });
      });
    });

    statusText.textContent = run.finished ? "Abgeschlossen" : "Laufend";
    renderStats();
  }

  // --- Grade
  function gradeRun(run) {
    let correct = 0;

    const details = run.answers.map(a => {
      const q = getQuestionById(a.id);
      const ok = a.picked === q.answer;
      if (ok) correct++;

      return {
        id: q.id,
        q: q.q,
        picked: a.picked,
        answer: q.answer,
        pickedText: a.picked !== null ? q.options[a.picked] : "(keine Antwort)",
        answerText: q.options[q.answer],
        explanation: q.explanation || "",
        ok
      };
    });

    return { correct, total: run.answers.length, details };
  }

  function submit() {
    const run = loadRun();
    if (!run || run.finished) return;

    const { answered, total } = computeProgress(run);
    if (answered < total) {
      const missing = total - answered;
      const proceed = confirm(`Du hast noch ${missing} unbeantwortete Frage(n). Trotzdem abgeben?`);
      if (!proceed) return;
    }

    const graded = gradeRun(run);
    run.finished = true;
    run.graded = graded;
    saveRun(run);

    const s = loadStats();
    s.runs += 1;
    s.lastScore = graded.correct;
    s.bestScore = Math.max(s.bestScore, graded.correct);
    s.totalCorrect += graded.correct;
    s.totalQuestions += graded.total;
    saveStats(s);

    scoreText.textContent = `${graded.correct}/12`;
    statusText.textContent = "Abgeschlossen";

    const pct = Math.round((graded.correct / graded.total) * 100);
    if (resultBox) {
      resultBox.classList.remove("hidden");
      resultBox.innerHTML = `
        <div class="row space">
          <div><strong>Ergebnis:</strong> ${graded.correct}/${graded.total} (${pct}%)</div>
          <div class="tag ${pct >= 75 ? "ok" : "bad"}">${pct >= 75 ? "Go" : "Nachschärfen"}</div>
        </div>
        <p class="muted" style="margin-top:8px">
          Review öffnen, falsche Fragen markieren, danach direkt neuer Run.
        </p>
      `;
    }

    if (reviewBtn) reviewBtn.disabled = false;
    render();
  }

  function showReview() {
    const run = loadRun();
    if (!run || !run.finished || !run.graded || !reviewBox) return;

    reviewBox.classList.remove("hidden");

    const rows = run.graded.details.map((d, i) => `
      <div class="question">
        <div class="row space">
          <p class="q-title" style="margin:0">${i + 1}. ${escapeHtml(d.q)}</p>
          <span class="tag ${d.ok ? "ok" : "bad"}">${d.ok ? "Richtig" : "Falsch"}</span>
        </div>
        <div class="divider"></div>
        <p><span class="muted">Deine Antwort:</span> ${escapeHtml(d.pickedText)}</p>
        <p><span class="muted">Richtige Antwort:</span> ${escapeHtml(d.answerText)}</p>
        ${d.explanation ? `<p class="muted" style="margin-top:8px">${escapeHtml(d.explanation)}</p>` : ""}
      </div>
    `).join("");

    reviewBox.innerHTML = `<h3 style="margin:0 0 10px 0">Review</h3>${rows}`;
  }

  // --- UI wiring
  document.getElementById("newRun")?.addEventListener("click", () => resetRun());
  document.getElementById("submitBtn")?.addEventListener("click", submit);
  document.getElementById("reviewBtn")?.addEventListener("click", showReview);
  document.getElementById("resetRunBtn")?.addEventListener("click", resetRun);

  // --- init stats storage
  if (!localStorage.getItem(STATS_KEY)) saveStats(defaultStats());

  // --- init run (mode-aware)
  if (!loadRun()) {
    createRun();
  } else {
    const r = loadRun();
    if (r && r.mode && r.mode !== getMode()) {
      clearRun();
      resetRunUI();
      createRun();
    }
  }

  render();

  // Restore score if already finished
  const r2 = loadRun();
  if (r2?.finished && r2?.graded) scoreText.textContent = `${r2.graded.correct}/12`;
})();
