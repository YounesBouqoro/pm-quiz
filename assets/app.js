(function () {
  const KEYS = {
    ch1: "pmquiz_stats_ch1",
    ch2: "pmquiz_stats_ch2"
  };

  function defaultStats() {
    return { runs: 0, bestScore: 0, lastScore: 0, totalCorrect: 0, totalQuestions: 0 };
  }
  function loadStats(key) {
    try { return JSON.parse(localStorage.getItem(key)) || defaultStats(); }
    catch { return defaultStats(); }
  }
  function saveStats(key, s) {
    localStorage.setItem(key, JSON.stringify(s));
  }

  function renderStats(key, targetId) {
    const box = document.getElementById(targetId);
    if (!box) return;

    const s = loadStats(key);
    const acc = s.totalQuestions > 0 ? Math.round((s.totalCorrect / s.totalQuestions) * 100) : 0;

    box.innerHTML = `
      <div class="stat"><div class="muted">Runs</div><strong>${s.runs}</strong></div>
      <div class="stat"><div class="muted">Letzter Score</div><strong>${s.lastScore}/12</strong></div>
      <div class="stat"><div class="muted">Bester Score</div><strong>${s.bestScore}/12</strong></div>
      <div class="stat"><div class="muted">Gesamt korrekt</div><strong>${s.totalCorrect}</strong></div>
      <div class="stat"><div class="muted">Gesamt Fragen</div><strong>${s.totalQuestions}</strong></div>
      <div class="stat"><div class="muted">Accuracy</div><strong>${acc}%</strong></div>
    `;
  }

  // ensure keys exist
  for (const k of Object.values(KEYS)) {
    if (!localStorage.getItem(k)) saveStats(k, defaultStats());
  }

  // render
  renderStats(KEYS.ch1, "statsCh1");
  renderStats(KEYS.ch2, "statsCh2");

  // global reset (falls vorhanden)
  document.getElementById("resetAll")?.addEventListener("click", () => {
    localStorage.removeItem(KEYS.ch1);
    localStorage.removeItem(KEYS.ch2);
    saveStats(KEYS.ch1, defaultStats());
    saveStats(KEYS.ch2, defaultStats());
    renderStats(KEYS.ch1, "statsCh1");
    renderStats(KEYS.ch2, "statsCh2");
    alert("Stats (Kapitel 1 + 2) zurückgesetzt.");
  });

  // chapter resets (optional)
  document.getElementById("resetCh2")?.addEventListener("click", () => {
    localStorage.removeItem(KEYS.ch2);
    saveStats(KEYS.ch2, defaultStats());
    renderStats(KEYS.ch2, "statsCh2");
    alert("Stats Kapitel 2 zurückgesetzt.");
  });
})();
