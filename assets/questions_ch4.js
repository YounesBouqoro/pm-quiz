/* ======================================================
   Projektmanagement – Kapitel 4 (Repetitorium)
   Themen:
   - Projektinitialisierung
   - Projektziele (Ergebnis- vs. Vorgehensziele)
   - SMART
   - Anforderungen (funktional / nicht-funktional)
   - MoSCoW
   Strategie: basic / compare / transfer (Exam: transfer-heavy)
   ====================================================== */

window.QUESTIONS_CH4 = [
  // =====================================================
  // A) PROJEKTINITIALISIERUNG (basic/transfer)
  // =====================================================
  {
    id: "ch4-001",
    type: "basic",
    q: "Was ist ein primäres Ziel der Projektinitialisierung?",
    options: [
      "Die komplette Umsetzung des Produkts",
      "Ziele, Nutzen, Rahmen und Verantwortlichkeiten klären, damit das Projekt steuerbar startet",
      "Nur den Endtermin festlegen",
      "Nur Tools auswählen"
    ],
    answer: 1,
    explanation: "Initialisierung schafft Ziel- und Rahmenklarheit (Warum/Wofür/Wie grob/Wer entscheidet)."
  },
  {
    id: "ch4-002",
    type: "basic",
    q: "Welche Aussage beschreibt einen Projektauftrag (Projektsteckbrief) am treffendsten?",
    options: [
      "Ein detaillierter Netzplan mit allen Vorgängen",
      "Eine Kurzbeschreibung mit Ziel, Rahmen, Verantwortlichkeiten und grobem Vorgehen als Startfreigabe",
      "Ein reines Protokoll des Kick-offs",
      "Eine Liste aller Teammitglieder ohne Zweck"
    ],
    answer: 1,
    explanation: "Projektauftrag = Startdokument mit Ziel/Rahmen/Verantwortung als Referenz und Freigabebasis."
  },
  {
    id: "ch4-003",
    type: "transfer",
    q: "Transfer: Ein Projekt startet ohne klaren Auftrag. Was ist das wahrscheinlichste Risiko?",
    options: [
      "Höhere Motivation im Team",
      "Scope Creep, widersprüchliche Erwartungen und Entscheidungsstau",
      "Automatisch bessere Qualität",
      "Keine Auswirkungen"
    ],
    answer: 1,
    explanation: "Ohne Auftrag fehlt Referenz für Scope/Ziele → Erwartungskonflikte und ungeplante Erweiterungen."
  },
  {
    id: "ch4-004",
    type: "transfer",
    q: "Transfer: Wer sollte die Projektinitialisierung final freigeben, damit Ziele/Budget verbindlich sind?",
    options: [
      "Beliebiges Teammitglied",
      "Auftraggeber/Sponsor (ggf. Steering, je nach Governance)",
      "Nur das PMO",
      "Nur externe Lieferanten"
    ],
    answer: 1,
    explanation: "Verbindliche Ziele/Budget/Rahmen gehören auf Sponsor-/Management-Ebene."
  },

  // =====================================================
  // B) PROJEKTZIELE: ERGEBNIS- vs. VORGEHENSZIELE (basic/compare/transfer)
  // =====================================================
  {
    id: "ch4-005",
    type: "basic",
    q: "Was ist ein Ergebnisziel (Outcome/Deliverable-Ziel) im Projekt?",
    options: [
      "Ein Ziel, das beschreibt, wie Meetings durchgeführt werden",
      "Ein Ziel, das beschreibt, welches Ergebnis/Deliverable am Ende vorliegen soll",
      "Ein Ziel, das nur die Teamstimmung misst",
      "Ein Ziel, das ausschließlich den Urlaubsplan betrifft"
    ],
    answer: 1,
    explanation: "Ergebnisziel beschreibt das zu liefernde Ergebnis (z.B. System, Prozess, Produkt, Funktion)."
  },
  {
    id: "ch4-006",
    type: "basic",
    q: "Was ist ein Vorgehensziel (Prozess-/Projektmanagement-Ziel)?",
    options: [
      "Ein Ziel, das die Eigenschaften des Endprodukts beschreibt",
      "Ein Ziel, das beschreibt, wie das Projekt durchgeführt werden soll (z.B. Termine, Qualitätssicherung, Kommunikation)",
      "Ein Ziel, das nur den Umsatz misst",
      "Ein Ziel, das nur externe Stakeholder betrifft"
    ],
    answer: 1,
    explanation: "Vorgehensziel beschreibt Anforderungen an das Projektvorgehen (Steuerung/Prozess/Qualität)."
  },
  {
    id: "ch4-007",
    type: "compare",
    q: "Welche Zuordnung ist korrekt?",
    options: [
      "„Lastenheft abgestimmt bis 15.03.“ = Ergebnisziel",
      "„Go-Live am 30.06. mit 99,9% Verfügbarkeit“ = Vorgehensziel",
      "„Abnahmeprotokoll unterschrieben“ = Ergebnisziel",
      "„Wöchentlicher Statusreport“ = Ergebnisziel"
    ],
    answer: 2,
    explanation: "Abnahmeprotokoll/Deliverable = Ergebnisziel. Statusreport/Prozess = Vorgehensziel."
  },
  {
    id: "ch4-008",
    type: "transfer",
    q: "Transfer: Du bekommst ein Ziel: „Wir verbessern die Zusammenarbeit.“ Was fehlt für Steuerbarkeit am ehesten?",
    options: [
      "Nichts, das ist perfekt",
      "Messbarkeit/Beobachtbarkeit (konkret: woran erkennst du Verbesserung?)",
      "Mehr Adjektive",
      "Ein Logo"
    ],
    answer: 1,
    explanation: "Unklare Ziele sind nicht steuerbar: du brauchst Kriterien/Messpunkte (SMART)."
  },

  // =====================================================
  // C) SMART (basic/compare/transfer)
  // =====================================================
  {
    id: "ch4-009",
    type: "basic",
    q: "Wofür steht SMART im Zielkontext?",
    options: [
      "Schnell, modern, attraktiv, realistisch, terminiert",
      "Spezifisch, Messbar, Attraktiv/Akzeptiert, Realistisch, Terminiert",
      "Strategisch, methodisch, agil, robust, taktisch",
      "Systematisch, motivierend, analytisch, regelbasiert, transparent"
    ],
    answer: 1,
    explanation: "SMART = spezifisch, messbar, attraktiv/akzeptiert, realistisch, terminiert."
  },
  {
    id: "ch4-010",
    type: "compare",
    q: "Welches Ziel ist am ehesten SMART formuliert?",
    options: [
      "„Wir machen das System besser.“",
      "„Bis 30.06. wird Feature X produktiv geschaltet; Abnahme durch Fachbereich Y anhand definierter Kriterien.“",
      "„Wir versuchen so gut wie möglich zu liefern.“",
      "„Der Kunde ist zufrieden.“"
    ],
    answer: 1,
    explanation: "SMART: konkret, prüfbar, realistisch, terminbezogen, akzeptiert."
  },
  {
    id: "ch4-011",
    type: "transfer",
    q: "Transfer: Ein Ziel ist spezifisch und terminiert, aber nicht messbar. Was ist die Folge?",
    options: [
      "Abnahme/Steuerung wird schwieriger, weil Erfolg nicht eindeutig überprüfbar ist",
      "Das Ziel wird automatisch messbar",
      "Es ist immer ausreichend",
      "Es betrifft nur Marketing"
    ],
    answer: 0,
    explanation: "Ohne Messbarkeit fehlen klare Kriterien für Erfolg/Abnahme und Steuerung."
  },
  {
    id: "ch4-012",
    type: "transfer",
    q: "Transfer: Ein Ziel ist messbar und terminiert, aber nicht realistisch. Was ist das größte Risiko?",
    options: [
      "Motivation steigt dauerhaft",
      "Frust, Rework, Qualitätseinbruch und Vertrauensverlust (Ziel wird gerissen)",
      "Stakeholder werden automatisch ruhiger",
      "Keine Auswirkungen"
    ],
    answer: 1,
    explanation: "Unrealistische Ziele erzeugen Druck, der zu Qualität/Vertrauen/Leistungseinbruch führt."
  },

  // =====================================================
  // D) ANFORDERUNGEN: FUNKTIONAL / NICHT-FUNKTIONAL (basic/compare/transfer)
  // =====================================================
  {
    id: "ch4-013",
    type: "basic",
    q: "Was ist eine funktionale Anforderung?",
    options: [
      "Eine Anforderung an Look & Feel ausschließlich",
      "Eine Anforderung, was das System/Produkt tun soll (Funktionen/Use-Cases)",
      "Eine Anforderung an Budget und Termin",
      "Eine Anforderung an Teamgröße"
    ],
    answer: 1,
    explanation: "Funktional = Verhalten/Funktionen, die bereitgestellt werden sollen."
  },
  {
    id: "ch4-014",
    type: "basic",
    q: "Was ist eine nicht-funktionale Anforderung?",
    options: [
      "Eine konkrete Funktion (z.B. Button X)",
      "Eine Qualitäts-/Rahmenanforderung (z.B. Performance, Sicherheit, Verfügbarkeit, Usability)",
      "Eine Liste von User Stories",
      "Ein Meilenstein"
    ],
    answer: 1,
    explanation: "Nicht-funktional = Qualitätsmerkmale/Constraints (wie gut/unter welchen Bedingungen)."
  },
  {
    id: "ch4-015",
    type: "compare",
    q: "Welche Zuordnung ist korrekt?",
    options: [
      "„Login mit MFA“ = nicht-funktional",
      "„Antwortzeit < 2 Sekunden“ = funktional",
      "„System muss Bestellungen exportieren“ = funktional",
      "„TLS-Verschlüsselung“ = funktional"
    ],
    answer: 2,
    explanation: "Export = Funktion. Performance/Security sind typischerweise nicht-funktional."
  },
  {
    id: "ch4-016",
    type: "transfer",
    q: "Transfer: Ein Team sammelt nur funktionale Anforderungen. Was ist die typische Folge?",
    options: [
      "Alles läuft automatisch stabil",
      "Qualitätsprobleme (Performance/Sicherheit/Usability) tauchen spät und teuer auf",
      "Keine Tests mehr nötig",
      "Keine Stakeholder-Abnahmen nötig"
    ],
    answer: 1,
    explanation: "Nicht-funktionale Anforderungen sind oft spät sichtbar – ohne sie drohen spätes Rework/Qualitätsdefizite."
  },

  // =====================================================
  // E) MOSCOW (basic/compare/transfer)
  // =====================================================
  {
    id: "ch4-017",
    type: "basic",
    q: "Wofür steht MoSCoW im Requirements-Kontext?",
    options: [
      "Model, Scope, Cost, Work",
      "Must, Should, Could, Won’t (this time)",
      "Measure, Solve, Create, Operate",
      "Manage, Scope, Control, Win"
    ],
    answer: 1,
    explanation: "MoSCoW priorisiert Anforderungen nach Must/Should/Could/Won’t."
  },
  {
    id: "ch4-018",
    type: "compare",
    q: "Welche Aussage beschreibt „Must“ am treffendsten?",
    options: [
      "Nice-to-have, wenn Zeit übrig",
      "Ohne diese Anforderung ist das Projektziel/Release nicht sinnvoll lieferbar",
      "Kann man jederzeit weglassen",
      "Ist nur für Doku"
    ],
    answer: 1,
    explanation: "Must = zwingend erforderlich, sonst kein sinnvoller Lieferumfang."
  },
  {
    id: "ch4-019",
    type: "compare",
    q: "Welche Aussage beschreibt „Won’t (this time)“ korrekt?",
    options: [
      "Wird garantiert sofort umgesetzt",
      "Ist bewusst nicht im aktuellen Scope/Release, kann später betrachtet werden",
      "Ist gleichbedeutend mit Must",
      "Ist automatisch ein Bug"
    ],
    answer: 1,
    explanation: "Won’t = bewusst nicht jetzt (Scope-Entscheidung), um Fokus zu halten."
  },
  {
    id: "ch4-020",
    type: "transfer",
    q: "Transfer: Alle Anforderungen werden als „Must“ klassifiziert. Was ist die richtige Reaktion?",
    options: [
      "Akzeptieren, so ist es immer",
      "Priorisierung schärfen: Must-Kriterien definieren, Scope splitten und Release-Planung erzwingen",
      "Alles streichen",
      "Keine Auswirkungen"
    ],
    answer: 1,
    explanation: "Wenn alles Must ist, ist nichts priorisiert. Du brauchst klare Must-Kriterien und Release-Schnitte."
  },

  // =====================================================
  // F) INTEGRATION: SMART + Zielarten + Anforderungen + MoSCoW (transfer heavy)
  // =====================================================
  {
    id: "ch4-021",
    type: "transfer",
    q: "Transfer: „Bis 30.06. wird ein Reporting-Dashboard live geschaltet, das täglich Umsatz und Retouren pro Land anzeigt.“ Was ist das?",
    options: [
      "Vorgehensziel",
      "Ergebnisziel",
      "Nicht-funktionale Anforderung",
      "MoSCoW-Klasse"
    ],
    answer: 1,
    explanation: "Das beschreibt ein Ergebnis/Deliverable → Ergebnisziel."
  },
  {
    id: "ch4-022",
    type: "transfer",
    q: "Transfer: „Wöchentlicher Statusreport jeden Freitag 14:00 an Sponsor und Steering.“ Was ist das?",
    options: [
      "Ergebnisziel",
      "Vorgehensziel",
      "Funktionale Anforderung",
      "Could"
    ],
    answer: 1,
    explanation: "Das beschreibt Projektvorgehen/Kommunikation → Vorgehensziel."
  },
  {
    id: "ch4-023",
    type: "transfer",
    q: "Transfer: „System muss innerhalb von 2 Sekunden laden.“ Was ist das am ehesten?",
    options: [
      "Funktionale Anforderung",
      "Nicht-funktionale Anforderung",
      "Ergebnisziel",
      "Won’t"
    ],
    answer: 1,
    explanation: "Performance ist nicht-funktional (Qualitätsmerkmal)."
  },
  {
    id: "ch4-024",
    type: "transfer",
    q: "Transfer: „Nutzer können Bestellungen als CSV exportieren.“ Was ist das?",
    options: [
      "Nicht-funktionale Anforderung",
      "Funktionale Anforderung",
      "Vorgehensziel",
      "Won’t"
    ],
    answer: 1,
    explanation: "CSV-Export = Funktion (funktionale Anforderung)."
  },
  {
    id: "ch4-025",
    type: "transfer",
    q: "Transfer: Du musst einen MVP definieren. Welche MoSCoW-Logik ist korrekt?",
    options: [
      "MVP besteht aus Could + Won’t",
      "MVP besteht primär aus Must; Should/Could sind Erweiterungen",
      "MVP besteht nur aus Should",
      "MoSCoW ist für MVP ungeeignet"
    ],
    answer: 1,
    explanation: "MVP = Must-Umfang. Should/Could können in spätere Releases."
  },
  {
    id: "ch4-026",
    type: "transfer",
    q: "Transfer: Ein Ziel ist SMART, aber Stakeholder akzeptieren es nicht (A fehlt). Was ist die Folge?",
    options: [
      "Keine Auswirkung",
      "Widerstand/Blockaden, weil Ziel nicht getragen wird → Risiko für Umsetzung/Abnahme",
      "Automatisch mehr Budget",
      "Projekt wird schneller"
    ],
    answer: 1,
    explanation: "Akzeptanz/Attraktivität ist entscheidend für Commitment und Umsetzung."
  },
  {
    id: "ch4-027",
    type: "transfer",
    q: "Transfer: Eine Anforderung ist technisch machbar, aber verletzt Datenschutz/Security. Wie klassifizierst du das typischerweise?",
    options: [
      "Als rein funktional und damit unkritisch",
      "Als nicht-funktionale Constraint-Anforderung (Sicherheit/Compliance) – oft Must",
      "Als Could",
      "Als Won’t"
    ],
    answer: 1,
    explanation: "Security/Compliance sind nicht-funktionale Constraints; meist Must, weil sonst nicht zulässig."
  },
  {
    id: "ch4-028",
    type: "transfer",
    q: "Transfer: Ein Projektziel lautet „Qualität ist uns wichtig“. Was ist der beste nächste Schritt?",
    options: [
      "So lassen – jeder versteht das",
      "Ziel operationalisieren: messbare Qualitätskriterien (z.B. Fehlerrate, Performance, Abnahme-Kriterien) definieren",
      "Nur mehr Meetings",
      "Scope reduzieren ohne Messkriterium"
    ],
    answer: 1,
    explanation: "Qualität muss über Kriterien messbar gemacht werden, sonst nicht steuer- und abnahmefähig."
  },
  {
    id: "ch4-029",
    type: "transfer",
    q: "Transfer: „Implementiere MFA-Login“ – ist das eher funktional oder nicht-funktional?",
    options: [
      "Funktional (Feature/Verhalten)",
      "Nicht-funktional (Qualität)",
      "Vorgehensziel",
      "Should"
    ],
    answer: 0,
    explanation: "MFA-Login ist eine konkrete Funktion (auch wenn Security-Motivation dahintersteckt)."
  },
  {
    id: "ch4-030",
    type: "transfer",
    q: "Transfer: Du priorisierst Anforderungen. Welche Regel ist am klausursichersten?",
    options: [
      "Alles Must",
      "Must-Kriterien definieren (ohne Must kein sinnvoller Nutzen/Release); Should/Could für Optimierung; Won’t bewusst parken",
      "Won’t sofort streichen und vergessen",
      "Nur nach Lautstärke entscheiden"
    ],
    answer: 1,
    explanation: "MoSCoW lebt von klaren Must-Kriterien, sonst wird Priorisierung wertlos."
  },

  // =====================================================
  // G) DRILL-FRAGEN ZUR 1,0 (mehr SMART/MoSCoW-Klassifikation)
  // =====================================================
  {
    id: "ch4-031",
    type: "compare",
    q: "Welche Aussage passt am besten zu „Spezifisch“ (S) in SMART?",
    options: [
      "Ziel ist emotional motivierend",
      "Ziel ist eindeutig und konkret beschrieben (keine Interpretationslücken)",
      "Ziel ist teuer",
      "Ziel ist automatisch erreichbar"
    ],
    answer: 1,
    explanation: "Spezifisch = klar und eindeutig, ohne Interpretationsspielraum."
  },
  {
    id: "ch4-032",
    type: "compare",
    q: "Welche Aussage passt am besten zu „Messbar“ (M) in SMART?",
    options: [
      "Ziel ist schön formuliert",
      "Erfolg kann anhand von Kriterien/Zahlen/Abnahmekriterien überprüft werden",
      "Ziel ist geheim",
      "Ziel ist nur subjektiv"
    ],
    answer: 1,
    explanation: "Messbar = objektiv prüfbar (Metrik/Kriterium)."
  },
  {
    id: "ch4-033",
    type: "compare",
    q: "Welche Aussage passt am besten zu „Terminiert“ (T) in SMART?",
    options: [
      "Ziel ist irgendwann",
      "Ziel hat eine klare Deadline oder Zeitspanne",
      "Ziel hat nur einen Besitzer",
      "Ziel ist automatisch realistisch"
    ],
    answer: 1,
    explanation: "Terminiert = Zeitbezug/Deadline."
  },
  {
    id: "ch4-034",
    type: "transfer",
    q: "Transfer: „Bis 15.05. liegt ein abgestimmtes Anforderungsdokument vor und ist vom Sponsor freigegeben.“ Was ist das?",
    options: [
      "Ergebnisziel (Deliverable: Anforderungsdokument + Freigabe)",
      "Nicht-funktionale Anforderung",
      "MoSCoW-Klasse",
      "Could"
    ],
    answer: 0,
    explanation: "Deliverable + Freigabe = Ergebnisziel (auch wenn es im Vorgehen hilft)."
  },
  {
    id: "ch4-035",
    type: "transfer",
    q: "Transfer: „Das System muss 99,9% Verfügbarkeit erreichen.“ Welche Kategorie passt am besten?",
    options: [
      "Funktional",
      "Nicht-funktional (Qualitätsmerkmal/Constraint)",
      "Vorgehensziel",
      "Won’t"
    ],
    answer: 1,
    explanation: "Verfügbarkeit ist ein nicht-funktionales Qualitätsmerkmal."
  },
  {
    id: "ch4-036",
    type: "transfer",
    q: "Transfer: Du musst eine Anforderung als Should statt Must klassifizieren. Was ist ein plausibles Kriterium?",
    options: [
      "Ohne diese Anforderung ist das Produkt wertlos",
      "Die Anforderung erhöht Nutzen/Komfort deutlich, aber ohne sie bleibt der Kernnutzen lieferbar",
      "Sie ist verboten",
      "Sie betrifft nur die Farbe"
    ],
    answer: 1,
    explanation: "Should = wichtig, aber nicht zwingend für den Kernnutzen/Release."
  }
];
