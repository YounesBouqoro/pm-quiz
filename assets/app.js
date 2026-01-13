/* ======================================================
   Projektmanagement – Quiz Hub (index) – app.js
   - Rendert KPI-Stats für Kapitel 1–7
   - Reset pro Kapitel + ResetAll
   - Robust gegen fehlende Elemente (wenn Kapitel mal aus index entfernt wird)
   ====================================================== */

(function () {
  const RUN_SIZE = 12;

  const CHAPTERS = {
    ch1: { statsKey: "pmquiz_stats_ch1", statsId: "statsCh1", resetId: "resetCh1", label: "Kapitel 1" },
    ch2: { statsKey: "pmquiz_stats_ch2", statsId: "statsCh2", resetId: "resetCh2", label: "Kapitel 2" },
    ch3: { statsKey: "pmquiz_stats_ch3", statsId: "statsCh3", resetId: "resetCh3", label: "Kapitel 3" },
    ch4: { statsKey: "pmquiz_stats_ch4", statsId: "statsCh4", resetId: "resetCh4", label: "Kapitel 4" },
    ch5: { statsKey: "pmquiz_stats_ch5", statsId: "statsCh5", resetId: "resetCh5", label: "Kapitel 5" },
    ch6: { statsKey: "pmquiz_stats_ch6", statsId: "statsCh6", resetId: "resetCh6", label: "Kapitel 6" },
    ch7: { statsKey: "pmquiz_stats_ch7", statsId: "statsCh7", resetId: "resetCh7", label: "Kapitel 7" }
  };

  function defaultStats() {
    return { runs: 0, bestScore: 0, lastScore: 0, totalCorrect: 0, totalQuestions: 0 };
  }

  function loadStats(key) {
    try {
      return JSON.parse(localStorage.getItem(key)) || defaultStats();
    } catch {
      return defaultStats();
    }
  }

  function saveStats(key, s) {
    localStorage.setItem(key, JSON.stringify(s));
  }

  function ensureKey(key) {
    if (!localStorage.getItem(key)) saveStats(key, defaultStats());
  }

  function renderStats(statsKey, targetId) {
    const box = document.getElementById(targetId);
    if (!box) return;

    const s = loadStats(statsKey);
    const acc = s.totalQuestions > 0 ? Math.round((s.totalCorrect / s.totalQuestions) * 100) : 0;

    // Index hat id="statsChX" direkt als Container mit class="stats"
    // Wir rendern darin die einzelnen "stat"-Kacheln
    box.innerHTML = `
      <div class="stat"><div class="muted">Runs</div><strong>${s.runs}</strong></div>
      <div class="stat"><div class="muted">Letzter Score</div><strong>${s.lastScore}/${RUN_SIZE}</strong></div>
      <div class="stat"><div class="muted">Bester Score</div><strong>${s.bestScore}/${RUN_SIZE}</strong></div>
      <div class="stat"><div class="muted">Gesamt korrekt</div><strong>${s.totalCorrect}</strong></div>
      <div class="stat"><div class="muted">Gesamt Fragen</div><strong>${s.totalQuestions}</strong></div>
      <div class="stat"><div class="muted">Accuracy</div><strong>${acc}%</strong></div>
    `;
  }

  function renderAll() {
    Object.values(CHAPTERS).forEach(cfg => renderStats(cfg.statsKey, cfg.statsId));
  }

  function resetChapter(cfg) {
    localStorage.removeItem(cfg.statsKey);
    saveStats(cfg.statsKey, defaultStats());
    renderStats(cfg.statsKey, cfg.statsId);
  }

  // --- Ensure all keys exist
  Object.values(CHAPTERS).forEach(cfg => ensureKey(cfg.statsKey));

  // --- Initial render
  renderAll();

  // --- ResetAll
  document.getElementById("resetAll")?.addEventListener("click", () => {
    Object.values(CHAPTERS).forEach(cfg => {
      localStorage.removeItem(cfg.statsKey);
      saveStats(cfg.statsKey, defaultStats());
    });
    renderAll();
    alert("Stats (Kapitel 1–7) zurückgesetzt.");
  });

  // --- Per chapter reset buttons
  Object.values(CHAPTERS).forEach(cfg => {
    document.getElementById(cfg.resetId)?.addEventListener("click", () => {
      resetChapter(cfg);
      alert(`Stats ${cfg.label} zurückgesetzt.`);
    });
  });
})();
