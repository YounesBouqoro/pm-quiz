(function () {
  const QUESTIONS = window.QUESTIONS_CH2 || [];
  const RUN_SIZE = 12;

  const STATS_KEY = "pmquiz_stats_ch2";
  const RUN_KEY   = "pmquiz_run_ch2";

  const quizRoot = document.getElementById("quizRoot");
  const progressText = document.getElementById("progressText");
  const scoreText = document.getElementById("scoreText");
  const statusText = document.getElementById("statusText");
  const resultBox = document.getElementById("resultBox");
  const reviewBox = document.getElementById("reviewBox");
  const reviewBtn = document.getElementById("reviewBtn");
  const statsBox = document.getElementById("statsBox");

  function defaultStats() {
    return { runs: 0, bestScore: 0, lastScore: 0, totalCorrect: 0, totalQuestions: 0 };
  }
  function loadStats() {
    try { return JSON.parse(localStorage.getItem(STATS_KEY)) || defaultStats(); } catch { return defaultStats(); }
  }
  function saveStats(s) {
    localStorage.setItem(STATS_KEY, JSON.stringify(s));
  }

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function newRun() {
    if (QUESTIONS.length < RUN_SIZE) {
      alert("Zu wenige Fragen im Katalog.");
      return;
    }
    const picked = shuffle(QUESTIONS).slice(0, RUN_SIZE).map(q => ({ id: q.id, picked: null }));
    const run = { createdAt: Date.now(), finished: false, answers: picked };
    localStorage.setItem(RUN_KEY, JSON.stringify(run));
    render();
  }

  function loadRun() {
    try { return JSON.parse(localStorage.getItem(RUN_KEY)) || null; } catch { return null; }
  }

  function resetRun() {
    localStorage.removeItem(RUN_KEY);
    resultBox.classList.add("hidden");
    reviewBox.classList.add("hidden");
    reviewBtn.disabled = true;
    statusText.textContent = "Laufend";
    scoreText.textContent = "0";
    progressText.textContent = `0 / ${RUN_SIZE}`;
    newRun();
  }

  function getQuestionById(id) {
    return QUESTIONS.find(q => q.id === id);
  }

  function computeProgress(run) {
    const answered = run.answers.filter(a => a.picked !== null).length;
    return { answered, total: run.answers.length };
  }

  function renderStats() {
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

  function render() {
    const run = loadRun();
    if (!run) { newRun(); return; }

    const { answered, total } = computeProgress(run);
    progressText.textContent = `${answered} / ${total}`;
    quizRoot.innerHTML = "";

    run.answers.forEach((a, idx) => {
      const q = getQuestionById(a.id);
      if (!q) return;

      const qEl = document.createElement("div");
      qEl.className = "question";
      qEl.innerHTML = `
        <p class="q-title">${idx + 1}. ${q.q}</p>
        <div class="options">
          ${q.options.map((opt, oi) => `
            <label class="opt">
              <input type="radio" name="q_${q.id}" value="${oi}" ${a.picked === oi ? "checked" : ""} ${run.finished ? "disabled" : ""}/>
              <span>${opt}</span>
            </label>
          `).join("")}
        </div>
      `;
      quizRoot.appendChild(qEl);

      qEl.querySelectorAll(\`input[name="q_${q.id}"]\`).forEach(inp => {
        inp.addEventListener("change", (e) => {
          const run2 = loadRun();
          if (!run2 || run2.finished) return;
          const picked = Number(e.target.value);
          const entry = run2.answers.find(x => x.id === q.id);
          entry.picked = picked;
          localStorage.setItem(RUN_KEY, JSON.stringify(run2));
          const p = computeProgress(run2);
          progressText.textContent = `${p.answered} / ${p.total}`;
        });
      });
    });

    statusText.textContent = run.finished ? "Abgeschlossen" : "Laufend";
    renderStats();
  }

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

  function escapeHtml(s) {
    return String(s)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function submit() {
    const run = loadRun();
    if (!run || run.finished) return;

    const { answered, total } = computeProgress(run);
    if (answered < total) {
      const missing = total - answered;
      const proceed = confirm(\`Du hast noch ${missing} unbeantwortete Frage(n). Trotzdem abgeben?\`);
      if (!proceed) return;
    }

    const graded = gradeRun(run);
    run.finished = true;
    run.graded = graded;
    localStorage.setItem(RUN_KEY, JSON.stringify(run));

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
    resultBox.classList.remove("hidden");
    resultBox.innerHTML = `
      <div class="row space">
        <div><strong>Ergebnis:</strong> ${graded.correct}/${graded.total} (${pct}%)</div>
        <div class="tag ${pct >= 75 ? "ok" : "bad"}">${pct >= 75 ? "Go" : "Nachschärfen"}</div>
      </div>
      <p class="muted" style="margin-top:8px">
        Review öffnen, falsche Fragen rausziehen, dann direkt neuer Run.
      </p>
    `;

    reviewBtn.disabled = false;
    render();
  }

  function showReview() {
    const run = loadRun();
    if (!run || !run.finished || !run.graded) return;

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

  document.getElementById("newRun")?.addEventListener("click", () => {
    newRun();
    resultBox.classList.add("hidden");
    reviewBox.classList.add("hidden");
    reviewBtn.disabled = true;
    scoreText.textContent = "0";
    statusText.textContent = "Laufend";
  });

  document.getElementById("submitBtn")?.addEventListener("click", submit);
  document.getElementById("reviewBtn")?.addEventListener("click", showReview);
  document.getElementById("resetRunBtn")?.addEventListener("click", resetRun);

  if (!localStorage.getItem(STATS_KEY)) saveStats(defaultStats());
  if (!loadRun()) newRun();
  render();

  const r = loadRun();
  if (r?.finished?.graded) scoreText.textContent = `${r.graded.correct}/12`;
})();
