/* ======================================================
   Projektmanagement – Kapitel 6 (Repetitorium)
   Lernplan:
   - Projektabschluss
   - Abschlussbericht
   - Abnahmeprotokoll
   - Lessons Learned
   Ziel: Klausur 1,0 (Definitionen + Abgrenzungen + Transferfälle)
   Fragetypen: basic | compare | transfer | calculation (hier kaum calculation)
   ====================================================== */

window.QUESTIONS_CH6 = [
  // =====================================================
  // A) PROJEKTABSCHLUSS – GRUNDLAGEN (basic/compare)
  // =====================================================
  {
    id: "ch6-001",
    type: "basic",
    q: "Was ist das zentrale Ziel des Projektabschlusses?",
    options: [
      "Neue Anforderungen sammeln und sofort starten",
      "Ergebnisse formal übergeben, Abnahme sichern, Verantwortung in Betrieb/Linie überführen und Projekt sauber schließen",
      "Nur eine Abschlussfeier organisieren",
      "Projektteam auflösen ohne Dokumentation"
    ],
    answer: 1,
    explanation: "Projektabschluss = formale/organisatorische Schließung inkl. Übergabe, Abnahme, Doku, Learnings."
  },
  {
    id: "ch6-002",
    type: "compare",
    q: "Welche Abgrenzung ist korrekt: fachlich fertig vs. formal abgeschlossen?",
    options: [
      "Fachlich fertig bedeutet automatisch formal abgeschlossen",
      "Formal abgeschlossen heißt: Abnahme/Übergabe/Dokumentation/Entlastung sind erledigt – unabhängig von 'fast fertig'",
      "Formal abgeschlossen ist nur ein internes Gefühl",
      "Fachlich fertig ist unwichtig"
    ],
    answer: 1,
    explanation: "Formalabschluss erfordert Abnahme/Übergabe und Abschlussdokumente, nicht nur 'fertige Arbeit'."
  },
  {
    id: "ch6-003",
    type: "basic",
    q: "Welche drei Kernelemente stehen im Kapitel 6 im Fokus?",
    options: [
      "Kickoff, Budget, Risiko",
      "Abschlussbericht, Abnahmeprotokoll, Lessons Learned",
      "Lastenheft, PSP, Netzplan",
      "Scrum, Kanban, Sprint Review"
    ],
    answer: 1,
    explanation: "Kapitel 6: Abschlussbericht + Abnahmeprotokoll + Lessons Learned."
  },
  {
    id: "ch6-004",
    type: "compare",
    q: "Warum ist ein sauberer Abschluss aus Management-Sicht wichtig?",
    options: [
      "Damit man weniger Transparenz hat",
      "Weil sonst Nutzen/Verantwortung unklar bleiben und Risiken (Betrieb, Haftung, Nachforderungen) steigen",
      "Weil Abschluss nur Formalität ohne Wirkung ist",
      "Weil dadurch automatisch Budget sinkt"
    ],
    answer: 1,
    explanation: "Ohne Abschluss: Unklare Zuständigkeit, fehlende Abnahme, kein Nutzen-Tracking, Regress-/Nachforderungsrisiken."
  },

  // =====================================================
  // B) ABNAHMEPROTOKOLL (basic/compare/transfer)
  // =====================================================
  {
    id: "ch6-005",
    type: "basic",
    q: "Wofür dient ein Abnahmeprotokoll im Projektabschluss?",
    options: [
      "Als Marketingunterlage",
      "Als formaler Nachweis, dass Liefergegenstände geprüft und akzeptiert (oder mit Mängeln) übernommen wurden",
      "Als Ersatz für den Projektplan",
      "Nur als Notizzettel fürs Team"
    ],
    answer: 1,
    explanation: "Abnahmeprotokoll dokumentiert Abnahmeentscheidung, Mängel, Auflagen, Verantwortliche und Termine."
  },
  {
    id: "ch6-006",
    type: "compare",
    q: "Welche Aussage ist korrekt?",
    options: [
      "Abnahme ist nur bei Bauprojekten relevant",
      "Abnahme ist ein formaler Akt, der die Lieferung bestätigt und Gewährleistungs-/Verantwortungsübergänge auslösen kann",
      "Abnahme erfolgt automatisch mit Go-Live",
      "Abnahme ist identisch mit Lessons Learned"
    ],
    answer: 1,
    explanation: "Abnahme = formale Bestätigung/Übergang, häufig mit rechtlicher/organisatorischer Wirkung."
  },
  {
    id: "ch6-007",
    type: "basic",
    q: "Welche Inhalte gehören typischerweise in ein Abnahmeprotokoll?",
    options: [
      "Nur Teamfotos",
      "Liefergegenstände, Abnahmekriterien, Ergebnis (angenommen/unter Vorbehalt/abgelehnt), Mängelliste, Fristen, Unterschriften",
      "Nur Budgetzahlen",
      "Nur Stakeholderliste"
    ],
    answer: 1,
    explanation: "Abnahmeprotokoll = klare Kriterien + Entscheidung + Mängel + Verantwortlichkeiten/Fristen."
  },
  {
    id: "ch6-008",
    type: "compare",
    q: "Was ist eine typische Gefahr, wenn ohne klar definierte Abnahmekriterien abgenommen werden soll?",
    options: [
      "Schnellere Abnahme ohne Probleme",
      "Diskussionen/Interpretationsspielräume, Streit über 'fertig' und spätere Nachforderungen",
      "Automatisch bessere Qualität",
      "Keine Auswirkungen"
    ],
    answer: 1,
    explanation: "Ohne Kriterien keine objektive Entscheidung → Konflikte und Rework."
  },
  {
    id: "ch6-009",
    type: "transfer",
    q: "Transfer: Der Kunde will 'unter Vorbehalt' abnehmen, weil es kleinere Mängel gibt. Was ist sauber?",
    options: [
      "Abnahme verweigern und Projekt einfrieren",
      "Abnahme mit Mängelliste, Priorität, Verantwortlichen und fixen Fristen dokumentieren (inkl. Nachabnahme falls nötig)",
      "Mängel ignorieren",
      "Nur mündlich zusagen"
    ],
    answer: 1,
    explanation: "Unter Vorbehalt geht nur mit dokumentierten Restpunkten und Verbindlichkeit (Fristen/Owner)."
  },
  {
    id: "ch6-010",
    type: "transfer",
    q: "Transfer: Fachlich ist alles 'ok', aber Sponsor unterschreibt nicht. Welches Risiko entsteht?",
    options: [
      "Keines",
      "Formal kein Abschluss: Verantwortung/Haftung/Abrechnung/Übergabe bleiben unscharf; Projekt hängt im Schwebezustand",
      "Budget sinkt automatisch",
      "Team wird schneller"
    ],
    answer: 1,
    explanation: "Ohne formale Abnahme hängt das Projekt – Risiken in Betrieb/Vertrag/Verantwortung."
  },
  {
    id: "ch6-011",
    type: "transfer",
    q: "Transfer: Abnahme wird abgelehnt. Was ist der nächste professionelle Schritt?",
    options: [
      "Projekt sofort schließen",
      "Ursachen/Mängel dokumentieren, Nachbesserungsplan (Scope/Fristen/Owner) und erneute Abnahme organisieren",
      "Nur eskalieren ohne Fakten",
      "Alles auf 'Wetter' schieben"
    ],
    answer: 1,
    explanation: "Ablehnung → dokumentierte Mängel + Plan zur Nachbesserung + erneute Prüfung."
  },
  {
    id: "ch6-012",
    type: "compare",
    q: "Abnahmeprotokoll vs. Abschlussbericht – was ist korrekt?",
    options: [
      "Beides ist identisch",
      "Abnahmeprotokoll = formale Übernahme/Qualitätsentscheidung; Abschlussbericht = Gesamtresümee und Projektdokumentation",
      "Abschlussbericht ersetzt Abnahme",
      "Abnahmeprotokoll ist nur intern, Abschlussbericht nur extern"
    ],
    answer: 1,
    explanation: "Abnahme = Entscheidungsdokument; Abschlussbericht = Gesamtzusammenfassung + Faktenlage."
  },

  // =====================================================
  // C) ABSCHLUSSBERICHT (basic/compare/transfer)
  // =====================================================
  {
    id: "ch6-013",
    type: "basic",
    q: "Was ist der Zweck eines Abschlussberichts?",
    options: [
      "Nur eine schöne Story schreiben",
      "Dokumentation von Zielerreichung, Ergebnissen, Aufwand/Kosten, Abweichungen, Risiken, Entscheidungen und Übergabe",
      "Den Projektplan löschen",
      "Nur das Team loben"
    ],
    answer: 1,
    explanation: "Abschlussbericht = Management- und Nachweis-Dokument: Was wurde erreicht, wie, mit welchen Abweichungen."
  },
  {
    id: "ch6-014",
    type: "compare",
    q: "Welche Inhalte sind im Abschlussbericht klausurtypisch 'pflichtig'?",
    options: [
      "Nur Lessons Learned",
      "Ziele/Scope, Ergebnisse/Deliverables, Zeit-/Kosten-/Aufwandsstatus, Abweichungen/Ursachen, Risiken, offene Punkte, Übergabe/Abnahme",
      "Nur Organigramm",
      "Nur Marketing-Text"
    ],
    answer: 1,
    explanation: "Klausurlogik: vollständige, überprüfbare Projektdoku inkl. Soll/Ist und Übergabe."
  },
  {
    id: "ch6-015",
    type: "transfer",
    q: "Transfer: Ein Projekt erreicht das Ergebnisziel, aber sprengt Zeit/Kosten deutlich. Wie muss das im Abschlussbericht dargestellt werden?",
    options: [
      "Gar nicht – Hauptsache Ergebnis da",
      "Transparent: Zielerreichung ja, aber Abweichungen inkl. Ursachenanalyse, Entscheidungen, Nebenwirkungen und Empfehlung",
      "Nur Schuldige benennen",
      "Nur 'war schwierig' schreiben"
    ],
    answer: 1,
    explanation: "1,0-Antwort: Ergebnis + Abweichungen + Ursachen + Managemententscheidungen + Empfehlungen."
  },
  {
    id: "ch6-016",
    type: "compare",
    q: "Warum ist ein Abschlussbericht auch für Folgeprojekte wichtig?",
    options: [
      "Weil er eine Pflichtübung ohne Nutzen ist",
      "Weil er Wissen/Entscheidungen/Abweichungen dokumentiert und als Basis für Standards, Schätzungen und Risikoreferenzen dient",
      "Weil er nur die IT interessiert",
      "Weil er das Projekt verlängert"
    ],
    answer: 1,
    explanation: "Wissensbasis/Referenz → bessere Planung/Schätzung/Steuerung in Zukunft."
  },
  {
    id: "ch6-017",
    type: "transfer",
    q: "Transfer: Was ist ein typischer Fehler im Abschlussbericht, der in Klausuren Punkte kostet?",
    options: [
      "Zu konkret zu sein",
      "Keine Abweichungen/Ursachen und keine offenen Punkte zu dokumentieren (nur 'fertig')",
      "Ziele zu nennen",
      "Abnahme zu erwähnen"
    ],
    answer: 1,
    explanation: "Unvollständigkeit: fehlende Soll/Ist-Logik, Ursachen, offene Punkte, Übergabe."
  },

  // =====================================================
  // D) LESSONS LEARNED (basic/compare/transfer)
  // =====================================================
  {
    id: "ch6-018",
    type: "basic",
    q: "Was ist das Ziel eines Lessons-Learned-Prozesses?",
    options: [
      "Schuldige finden",
      "Erfahrungen systematisch sichern und in zukünftige Projekte/Standards überführen",
      "Abnahme ersetzen",
      "Budget erhöhen"
    ],
    answer: 1,
    explanation: "LL = organisationales Lernen: was wiederholen, was vermeiden, welche Standards anpassen."
  },
  {
    id: "ch6-019",
    type: "compare",
    q: "Welche Aussage ist korrekt: Lessons Learned vs. Abschlussbericht?",
    options: [
      "LL = Zahlen, Abschlussbericht = Gefühle",
      "Abschlussbericht dokumentiert Fakten/Ergebnisse; LL fokussiert Verbesserungen/Erkenntnisse (Prozess & Zusammenarbeit)",
      "LL ersetzt Abnahmeprotokoll",
      "LL ist nur für agile Projekte"
    ],
    answer: 1,
    explanation: "LL = Verbesserungswissen; Abschlussbericht = Nachweis/Faktenlage."
  },
  {
    id: "ch6-020",
    type: "transfer",
    q: "Transfer: Ein Lessons-Learned-Workshop endet mit 'war alles gut'. Warum ist das riskant?",
    options: [
      "Weil Optimismus verboten ist",
      "Weil konkrete Verbesserungspunkte fehlen und dieselben Fehler wieder auftreten; Lernchance wird verschenkt",
      "Weil der Abschlussbericht dadurch kürzer wird",
      "Weil man dann mehr Budget bekommt"
    ],
    answer: 1,
    explanation: "LL muss konkret sein (Do/Don't, Ursachen, Maßnahmen, Owner), sonst kein organisationales Lernen."
  },
  {
    id: "ch6-021",
    type: "basic",
    q: "Welche Struktur macht Lessons Learned klausursicher verwertbar?",
    options: [
      "Nur Stichworte ohne Kontext",
      "Beobachtung → Ursache → Wirkung → Empfehlung/Maßnahme → Owner/Standard-Update",
      "Nur Lob fürs Team",
      "Nur neue Tools kaufen"
    ],
    answer: 1,
    explanation: "Klausur: strukturiert und umsetzbar (Owner/Prozess-Update)."
  },
