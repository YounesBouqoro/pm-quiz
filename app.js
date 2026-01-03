(function () {
    const KEY = "pmquiz_stats_ch1";

    function loadStats() {
        try { return JSON.parse(localStorage.getItem(KEY)) || null; } catch { return null; }
    }
    function saveStats(s) {
        localStorage.setItem(KEY, JSON.stringify(s));
    }
    function defaultStats() {
        return { runs: 0, bestScore: 0, lastScore: 0, totalCorrect: 0, totalQuestions: 0 };
    }
    function renderStats() {
        const box = document.getElementById("statsCh1");
        if (!box) return;

        const s = loadStats() || defaultStats();
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

    document.getElementById("resetAll")?.addEventListener("click", () => {
        localStorage.removeItem(KEY);
        renderStats();
        alert("Stats zurückgesetzt.");
    });

    // Ensure stats key exists for clean UX
    if (!loadStats()) saveStats(defaultStats());
    renderStats();
})();
