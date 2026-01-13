/* ======================================================
   Projektmanagement – Kapitel 3 (Repetitorium)
   Fokus:
   - Projektorganisation
   - Rollen (PL, Auftraggeber, Lenkungsausschuss, PMO, etc.)
   - Organisationsformen: Stab / Matrix / Reine Projektorganisation
   Strategie: basic / compare / transfer (Exam: transfer-heavy)
   ====================================================== */

window.QUESTIONS_CH3 = [
  // =====================================================
  // A) PROJEKTORGANISATION – GRUNDLAGEN (basic/compare)
  // =====================================================
  {
    id: "ch3-001",
    type: "basic",
    q: "Was ist das zentrale Ziel einer Projektorganisation?",
    options: [
      "Nur die Projektkosten zu senken",
      "Rollen, Verantwortlichkeiten und Entscheidungswege so zu strukturieren, dass Projektziele sicher erreicht werden",
      "Den Projektplan vollständig zu ersetzen",
      "Kommunikation zu minimieren"
    ],
    answer: 1,
    explanation: "Projektorganisation schafft Klarheit über Rollen/Verantwortung/Entscheidungen und erhöht Steuerbarkeit."
  },
  {
    id: "ch3-002",
    type: "compare",
    q: "Welche Abgrenzung ist korrekt: Aufbau- vs. Ablauforganisation?",
    options: [
      "Aufbau = wann/wie, Ablauf = wer/wer entscheidet",
      "Ablauf = wann/wie (Prozess), Aufbau = wer/Kompetenzen/Weisung (Struktur)",
      "Beide sind identisch",
      "Aufbau gilt nur im agilen PM"
    ],
    answer: 1,
    explanation: "Ablauf organisiert die Schritte, Aufbau die Rollen/Kompetenzen und Entscheidungswege."
  },
  {
    id: "ch3-003",
    type: "basic",
    q: "Was sind typische Elemente von Governance im Projekt?",
    options: [
      "Nur die Teamgröße",
      "Entscheidungskompetenzen, Eskalationspfade, Gremien (z.B. Steering) und Review-/Gate-Logik",
      "Nur Tools (Jira, MS Project)",
      "Nur die Meetingräume"
    ],
    answer: 1,
    explanation: "Governance klärt, wer was entscheidet und wie Entscheidungen und Eskalationen laufen."
  },
  {
    id: "ch3-004",
    type: "compare",
    q: "Welche Aussage ist klausurtypisch korrekt?",
    options: [
      "Projekte scheitern meist nur fachlich",
      "Projekte scheitern häufig organisatorisch (unklare Rollen/Entscheidungen), nicht primär fachlich",
      "Organisation spielt kaum eine Rolle",
      "Nur Budget entscheidet über Erfolg"
    ],
    answer: 1,
    explanation: "Organisations-/Governance-Schwächen sind ein häufiger Engpass."
  },

  // =====================================================
  // B) ROLLEN: AUFTRAGGEBER, PL, STEERING, PMO, TEAM (basic/compare)
  // =====================================================
  {
    id: "ch3-005",
    type: "basic",
    q: "Welche Rolle setzt Ziele, gibt den Auftrag und trifft Entscheidungen bei Eskalationen?",
    options: [
      "Projektassistenz",
      "Auftraggeber/Sponsor",
      "Projektteam",
      "Qualitätssicherung"
    ],
    answer: 1,
    explanation: "Der Auftraggeber/Sponsor setzt Rahmen (Ziele/Budget/Ressourcen) und entscheidet bei Eskalationen."
  },
  {
    id: "ch3-006",
    type: "basic",
    q: "Was ist die Kernaufgabe der Projektleitung (PL) im klassischen Verständnis?",
    options: [
      "Nur Protokolle schreiben",
      "Projektführung/-steuerung und Verantwortung für Auftragserfüllung und Zielerreichung",
      "Nur technische Umsetzung",
      "Nur Budget genehmigen"
    ],
    answer: 1,
    explanation: "Die PL steuert, koordiniert, führt und verantwortet Zielerreichung im Projekt."
  },
  {
    id: "ch3-007",
    type: "compare",
    q: "Welche Aufgaben sind typisch für die Projektleitung?",
    options: [
      "Koordination, Kommunikation, Steuerung, Reporting und Schnittstellenmanagement",
      "Nur Personalbeurteilungen und Gehaltsentscheidungen",
      "Nur Vertragsrecht",
      "Nur Marketing"
    ],
    answer: 0,
    explanation: "PL ist Integrator: Planung/Steuerung/Kommunikation/Schnittstellen."
  },
  {
    id: "ch3-008",
    type: "basic",
    q: "Wozu dient ein Lenkungsausschuss (Steering Committee) typischerweise?",
    options: [
      "Er ersetzt das Projektteam im Tagesgeschäft",
      "Übergeordnete Steuerung/Überwachung und Entscheidungen bei Ziel-/Scope-/Budgetfragen",
      "Er schreibt den Code",
      "Er führt das Team disziplinarisch"
    ],
    answer: 1,
    explanation: "Steering trifft Entscheidungen auf Managementebene, wenn Tragweite hoch ist."
  },
  {
    id: "ch3-009",
    type: "transfer",
    q: "Transfer: Ein Projekt hat Zielkonflikte zwischen zwei Abteilungen und Ressourcenstreit. Wohin eskalierst du sauber?",
    options: [
      "An das Projektteam",
      "An Sponsor/Steering (je nach Governance) zur Priorisierungsentscheidung",
      "An die Projektassistenz",
      "An niemanden (abwarten)"
    ],
    answer: 1,
    explanation: "Prioritäts-/Zielkonflikte mit Tragweite gehören in Sponsor/Steering (Governance)."
  },
  {
    id: "ch3-010",
    type: "basic",
    q: "Was ist ein PMO im Projektmanagement am ehesten?",
    options: [
      "Ein Entwicklerteam",
      "Eine Einheit zur Unterstützung/Standardisierung/Reporting (Methoden, Templates, Multiprojekt-Transparenz)",
      "Der Auftraggeber",
      "Ein reines Zeiterfassungstool"
    ],
    answer: 1,
    explanation: "PMO unterstützt Projekte übergreifend (Standards, Reporting, Coaching, Portfolio)."
  },
  {
    id: "ch3-011",
    type: "compare",
    q: "Welche Aussage ist korrekt: PMO vs. Projektleitung?",
    options: [
      "PMO führt das konkrete Projekt operativ",
      "Projektleitung steuert operativ; PMO unterstützt übergreifend mit Standards/Reporting",
      "PMO ersetzt Stakeholdermanagement",
      "Projektleitung ist nur Doku"
    ],
    answer: 1,
    explanation: "PL = Projektverantwortung im Alltag; PMO = übergreifende Unterstützung/Standardisierung."
  },
  {
    id: "ch3-012",
    type: "basic",
    q: "Was ist die Hauptaufgabe des Projektteams?",
    options: [
      "Budget genehmigen",
      "Arbeitspakete/Deliverables bearbeiten und Projektergebnisse liefern",
      "Eskalationen entscheiden",
      "Governance definieren"
    ],
    answer: 1,
    explanation: "Das Team liefert die operativen Ergebnisse/Deliverables."
  },
  {
    id: "ch3-013",
    type: "compare",
    q: "Was bedeutet disziplinarische vs. fachliche Führung im Projektkontext am treffendsten?",
    options: [
      "Beides ist identisch",
      "Disziplinarisch = Personalthemen; fachlich = inhaltliche Steuerung der Arbeit",
      "Disziplinarisch = Zeitplan; fachlich = Budget",
      "Disziplinarisch = Tools; fachlich = Meetings"
    ],
    answer: 1,
    explanation: "In Matrix-Strukturen: Linie oft disziplinarisch, PL häufig fachlich."
  },

  // =====================================================
  // C) ORGANISATIONSFORMEN (Stab / Matrix / Rein) – WISSEN (basic/compare)
  // =====================================================
  {
    id: "ch3-014",
    type: "basic",
    q: "Welche klassischen Formen der Projektorganisation werden typischerweise unterschieden?",
    options: [
      "Scrum, Kanban, XP",
      "Stabs-Projektorganisation, Matrix-Projektorganisation, Reine Projektorganisation",
      "Nur Linienorganisation",
      "Nur Prozessorganisation"
    ],
    answer: 1,
    explanation: "Klassisch: Stab, Matrix, Rein."
  },
  {
    id: "ch3-015",
    type: "compare",
    q: "Was ist das Kernmerkmal einer Matrix-Projektorganisation?",
    options: [
      "Projekt wird vollständig aus der Linie ausgegliedert",
      "Kompetenzen sind zwischen Linie und Projekt aufgeteilt (Doppelunterstellung/Prioritätskonflikte möglich)",
      "Projektleitung hat immer personelle Weisungsbefugnis",
      "Es gibt keine Abstimmung"
    ],
    answer: 1,
    explanation: "Matrix: Kompetenzteilung und Doppelunterstellung → Konfliktpotenzial."
  },
  {
    id: "ch3-016",
    type: "compare",
    q: "Was ist das Kernmerkmal einer reinen Projektorganisation?",
    options: [
      "Projekt bleibt komplett in der Linie",
      "Team ist dem Projekt zugeordnet; PL hat hohe Weisungsbefugnis und Fokussierung ist hoch",
      "Nur Teilzeitressourcen sind möglich",
      "Es gibt keine Projektleitung"
    ],
    answer: 1,
    explanation: "Reine Projektorga: dedizierte Ressourcen, starke PL, hoher Fokus."
  },
  {
    id: "ch3-017",
    type: "compare",
    q: "Welche typische Herausforderung hat die Matrix-Projektorganisation?",
    options: [
      "Keine Konflikte möglich",
      "Prioritätskonflikte und Entscheidungsstau durch Doppelunterstellung",
      "Keine Abstimmung nötig",
      "Reintegration ist immer schwierig"
    ],
    answer: 1,
    explanation: "Matrix braucht klare Governance gegen Konflikte/Entscheidungsstau."
  },
  {
    id: "ch3-018",
    type: "compare",
    q: "Welche typische Herausforderung hat die reine Projektorganisation?",
    options: [
      "Keine Motivation im Team",
      "Reintegration/Know-how-Transfer in die Linie kann schwierig sein",
      "Kein Fokus möglich",
      "Projektleitung hat keinen Durchgriff"
    ],
    answer: 1,
    explanation: "Reine Projektorga: Rückführung und Akzeptanz nach Projektende aktiv managen."
  },
  {
    id: "ch3-019",
    type: "compare",
    q: "Welche Aussage passt am besten zur Stabs-Projektorganisation?",
    options: [
      "Projekt ist vollständig ausgegliedert",
      "Projekt ist liniennah eingebettet; Projektstab unterstützt/koordiniert, Verantwortung kann diffundieren",
      "Doppelunterstellung ist zwingend",
      "Projektleitung hat automatisch volle Weisung"
    ],
    answer: 1,
    explanation: "Stab: Einbettung in Linie, Stab unterstützt – Risiko Verantwortungsdiffusion."
  },

  // =====================================================
  // D) TRANSFER: ORGAFORM WAHL + BEGRÜNDUNG (mind. 15)
  // =====================================================
  {
    id: "ch3-020",
    type: "transfer",
    q: "Transfer: Projekt ist zeitkritisch, klare Anforderungen, aber knappe Ressourcen. Welche Orgaform passt am ehesten?",
    options: [
      "Reine Projektorganisation",
      "Matrix-Projektorganisation",
      "Stabs-Projektorganisation",
      "Keine Projektorganisation"
    ],
    answer: 1,
    explanation: "Knappe Ressourcen → Matrix (Ressourcenteilung) ist oft realistisch; Governance muss Konflikte abfedern."
  },
  {
    id: "ch3-021",
    type: "transfer",
    q: "Transfer: Sehr komplex, neuartig, hohes Risiko, starker Zeitdruck. Welche Orgaform passt am besten?",
    options: [
      "Stab",
      "Matrix",
      "Reine Projektorganisation",
      "Linie ohne Projektleitung"
    ],
    answer: 2,
    explanation: "Komplex/Risiko/Zeitdruck → reine Projektorga wegen Fokus und klarer Weisung."
  },
  {
    id: "ch3-022",
    type: "transfer",
    q: "Transfer: Kleines Projekt, geringes Risiko, ohne starken Zeitdruck, Schwerpunkt in einer Abteilung. Beste Orgaform?",
    options: [
      "Rein",
      "Matrix",
      "Stab",
      "Nur Linie"
    ],
    answer: 2,
    explanation: "Stab ist für kleinere, risikoarme Projekte ohne hohen Zeitdruck oft passend."
  },
  {
    id: "ch3-023",
    type: "transfer",
    q: "Transfer: Viele parallele Projekte + stark abteilungsübergreifend + Spezialwissen aus mehreren Bereichen. Was passt am ehesten?",
    options: [
      "Stab",
      "Matrix",
      "Rein für jedes Projekt",
      "Keine"
    ],
    answer: 1,
    explanation: "Matrix ist typisch bei vielen Parallelprojekten und abteilungsübergreifenden Ressourcenschnittstellen."
  },
  {
    id: "ch3-024",
    type: "transfer",
    q: "Transfer: In Matrix-Projekten eskaliert ständig „Linie vs. Projekt“. Was ist der stärkste Hebel?",
    options: [
      "Mehr Meetings ohne Entscheidungen",
      "Klare Priorisierung/Entscheidungskompetenzen + Eskalationspfad (Sponsor/Steering)",
      "Projektziele nicht kommunizieren",
      "Team verkleinern"
    ],
    answer: 1,
    explanation: "Matrix braucht Governance: Priorisierung, Entscheidung, Eskalation."
  },
  {
    id: "ch3-025",
    type: "transfer",
    q: "Transfer: PL hat fachliche Verantwortung, aber keine disziplinarische Weisung. Welche Orgaform ist wahrscheinlich?",
    options: [
      "Reine Projektorganisation",
      "Matrix",
      "Stab",
      "Keine"
    ],
    answer: 1,
    explanation: "Matrix: PL häufig fachlich, Linie disziplinarisch."
  },
  {
    id: "ch3-026",
    type: "transfer",
    q: "Transfer: Du willst maximale Geschwindigkeit und klare Durchgriffsmacht. Welche Orgaform ist die konsequente Wahl?",
    options: [
      "Stab",
      "Matrix",
      "Reine Projektorganisation",
      "Nur Linie"
    ],
    answer: 2,
    explanation: "Rein: maximale Fokussierung und Weisung – aber Reintegration planen."
  },
  {
    id: "ch3-027",
    type: "transfer",
    q: "Transfer: Projekt wird abgeschlossen, aber Linie übernimmt Ergebnis nicht (Akzeptanzproblem). Wo ist dieses Risiko typischerweise höher?",
    options: [
      "Reine Projektorganisation",
      "Matrix",
      "Stab",
      "Keine"
    ],
    answer: 0,
    explanation: "Reine Projektorga kann Akzeptanz/Reintegration erschweren, wenn Linie wenig eingebunden war."
  },
  {
    id: "ch3-028",
    type: "transfer",
    q: "Transfer: Du wählst Matrix wegen knapper Ressourcen. Welche Nebenwirkung musst du aktiv managen?",
    options: [
      "Keine Nebenwirkung",
      "Doppelunterstellung → Konflikte/Prioritäten → Entscheidungsstau",
      "Fehlende Rollen",
      "Zu viele Tests"
    ],
    answer: 1,
    explanation: "Matrix braucht klare Governance/Entscheidungswege gegen Konflikte und Stau."
  },
  {
    id: "ch3-029",
    type: "transfer",
    q: "Transfer: Politisch sensibles Projekt (viele Interessen), Entscheidungen dauern. Welche Struktur hilft am meisten?",
    options: [
      "Kein Steering, nur Team entscheidet",
      "Sponsor/Steering mit klaren Entscheidungskompetenzen + Eskalationspfad",
      "Nur Projektoffice",
      "Nur E-Mail-Kommunikation"
    ],
    answer: 1,
    explanation: "Politische Konflikte gehören auf Sponsor/Steering-Ebene (Governance)."
  },
  {
    id: "ch3-030",
    type: "transfer",
    q: "Transfer: In Stabs-Projektorganisation entsteht „Verantwortungsdiffusion“. Was bedeutet das?",
    options: [
      "Verantwortung ist klar bei der PL gebündelt",
      "Niemand fühlt sich eindeutig verantwortlich, weil Stab unterstützt/koordiniert",
      "Stab übernimmt automatisch alles",
      "Linie ist immer schuld"
    ],
    answer: 1,
    explanation: "Stab kann zu unklarer Verantwortungsübernahme führen."
  },
  {
    id: "ch3-031",
    type: "transfer",
    q: "Transfer: Du musst Change Requests steuern. Wer entscheidet klassisch über große Scope-Änderungen?",
    options: [
      "Beliebiges Teammitglied",
      "Sponsor/Steering (je nach Governance), nicht die PL allein",
      "Nur PMO",
      "Nur Projektoffice"
    ],
    answer: 1,
    explanation: "Große Scope-/Budget-/Zieländerungen gehören zur Managemententscheidung."
  },
  {
    id: "ch3-032",
    type: "transfer",
    q: "Transfer: Projekt scheitert wegen „Entscheidungsstau“. Welche Ursache ist am wahrscheinlichsten?",
    options: [
      "Zu viele Meilensteine",
      "Unklare Entscheidungskompetenzen und fehlender Eskalationspfad (Governance-Lücke)",
      "Zu viel Motivation",
      "Zu viele Tools"
    ],
    answer: 1,
    explanation: "Entscheidungsstau ist meist Governance/Kompetenzproblem."
  },
  {
    id: "ch3-033",
    type: "transfer",
    q: "Transfer: Du brauchst Spezialwissen aus mehreren Bereichen, aber niemand kann 100% wechseln. Was passt?",
    options: [
      "Rein",
      "Matrix",
      "Stab",
      "Keine"
    ],
    answer: 1,
    explanation: "Matrix ermöglicht flexiblen Einsatz von Spezialisten ohne komplette Herauslösung."
  },
  {
    id: "ch3-034",
    type: "transfer",
    q: "Transfer: Welche Begründungsstruktur ist klausursicher bei Orgaform-Fragen?",
    options: [
      "Bauchgefühl",
      "Kontext (Zeitdruck/Risiko/Komplexität/Ressourcen) → Orgaform → Nebenwirkungen + Gegenmaßnahmen",
      "Nur Vorteile nennen",
      "Nur Definitionen wiederholen"
    ],
    answer: 1,
    explanation: "Klausurlogik: Kontextfaktoren → Wahl → Nebenwirkungen + Governance-Maßnahmen."
  },

  // =====================================================
  // E) DRILL-FRAGEN ZUR 1,0 (compare/transfer)
  // =====================================================
  {
    id: "ch3-035",
    type: "compare",
    q: "Welche Aussage ist korrekt: Projektoffice vs. PMO?",
    options: [
      "Beides ist identisch",
      "Projektoffice unterstützt ein Projekt administrativ; PMO wirkt übergreifend (Standards/Portfolio/Coaching)",
      "PMO ist immer operativ im Projekt",
      "Projektoffice entscheidet über Budget"
    ],
    answer: 1,
    explanation: "Projektoffice = projektbezogen; PMO = organisationsweit/portfolio-orientiert."
  },
  {
    id: "ch3-036",
    type: "transfer",
    q: "Transfer: Matrix-Projekt läuft, aber Prioritäten sind unklar. Welche Minimalmaßnahme stabilisiert sofort?",
    options: [
      "Mehr Meetings",
      "Priorisierungsentscheidung durch Sponsor/Steering + Transparenz via Reporting",
      "Projektziele nicht kommunizieren",
      "Nur Team austauschen"
    ],
    answer: 1,
    explanation: "Matrix stabilisiert über klare Priorisierung/Entscheidung + Reporting."
  },
  {
    id: "ch3-037",
    type: "compare",
    q: "Welche Aussage trifft zu: Reine Projektorganisation ist besonders sinnvoll, wenn…",
    options: [
      "Projekt klein und risikoarm ist",
      "Projekt sehr komplex/risikoreich/zeitkritisch/strategisch ist",
      "Ressourcen maximal knapp sind",
      "Projekt nur eine Abteilung betrifft"
    ],
    answer: 1,
    explanation: "Rein passt bei hoher Komplexität/Risiko/Zeitdruck/Strategie."
  },
  {
    id: "ch3-038",
    type: "compare",
    q: "Welche Aussage trifft zu: Stabs-Projektorganisation ist besonders sinnvoll, wenn…",
    options: [
      "Projekt sehr komplex und zeitkritisch ist",
      "Projekt eher klein/risikoarm ist und Schwerpunkt in einem Bereich liegt",
      "Projekt viele parallele Programme hat",
      "Projekt völlige Ausgliederung braucht"
    ],
    answer: 1,
    explanation: "Stab eher für kleinere/risikoarme Projekte ohne harten Zeitdruck."
  },
  {
    id: "ch3-039",
    type: "compare",
    q: "Welche Aussage trifft zu: Matrix-Projektorganisation ist besonders sinnvoll, wenn…",
    options: [
      "Projekt vollständig isoliert sein muss",
      "Viele abteilungsübergreifende Themen und parallele Projekte laufen und Ressourcen geteilt werden müssen",
      "Projekt nur eine Abteilung betrifft",
      "Ressourcen immer 100% verfügbar sind"
    ],
    answer: 1,
    explanation: "Matrix bei abteilungsübergreifenden Vorhaben und Ressourcenteilung/Parallelprojekten."
  },
  {
    id: "ch3-040",
    type: "transfer",
    q: "Transfer: Welche Konstellation ist ein typischer Grund, einen Lenkungsausschuss einzusetzen?",
    options: [
      "Mini-Projekt ohne Budget",
      "Großes Projekt mit hoher Tragweite und bereichsübergreifenden Konflikten",
      "Privates Hobbyprojekt",
      "Projekt ohne Stakeholder"
    ],
    answer: 1,
    explanation: "Steering lohnt bei hoher Tragweite/Komplexität/Konfliktpotenzial."
  }
];

