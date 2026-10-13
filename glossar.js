/* Glossar-Markierung - erzeugt von tools/glossary/build_glossary.py, nicht von Hand ändern. */
(function () {
  "use strict";
  var T = [{"id":"1rm","de":{"t":"1RM (Einer-Wiederholungsmaximum)","a":["1RM"],"s":"Das höchste Gewicht, das du genau einmal sauber bewältigst."},"en":{"t":"1RM (one-rep max)","a":["1RM"],"s":"The heaviest weight you can lift exactly once with good form."}},{"id":"e1rm","de":{"t":"e1RM (geschätztes 1RM)","a":["e1RM"],"s":"Aus Gewicht, Wiederholungen und RPE eines Satzes geschätztes 1RM."},"en":{"t":"e1RM (estimated 1RM)","a":["e1RM"],"s":"1RM estimated from weight, reps and RPE of a set."}},{"id":"prozent-1rm","de":{"t":"% 1RM","a":["% 1RM"],"s":"Last als Prozent deines 1RM, z. B. 70–75 %."},"en":{"t":"% 1RM","a":["% 1RM"],"s":"Load as a percentage of your 1RM, e.g. 70–75 %."}},{"id":"rpe","de":{"t":"RPE (Anstrengung)","a":["RPE"],"s":"Wie schwer der Satz war, 1–10; 10 = keine Wiederholung mehr möglich."},"en":{"t":"RPE (rate of perceived exertion)","a":["RPE"],"s":"How hard the set was, 1–10; 10 = no further rep possible."}},{"id":"rir","de":{"t":"RIR (Wiederholungen in Reserve)","a":["RIR"],"s":"Wie viele Wiederholungen noch gegangen wären."},"en":{"t":"RIR (reps in reserve)","a":["RIR"],"s":"How many more reps you could have done."}},{"id":"volumen","de":{"t":"Volumen","a":["Volumen"],"s":"Trainingsumfang: Gewicht × Wiederholungen bzw. Zahl der Arbeitssätze."},"en":{"t":"Volume","a":["volume","Volume"],"s":"Training amount: weight × reps, or number of working sets."}},{"id":"tagesform","de":{"t":"Tagesform","a":["Tagesform"],"s":"Wie stark du heute über oder unter deinem Trend lagst."},"en":{"t":"Daily form","a":["daily form","Daily form"],"s":"How far above or below your trend you were today."}},{"id":"bereitschaft","de":{"t":"Bereitschaft (Readiness)","a":["Bereitschaft"],"s":"Tageswert von Oura (0–100), wie erholt du bist."},"en":{"t":"Readiness","a":["readiness","Readiness"],"s":"Daily score from Oura (0–100) for how recovered you are."}},{"id":"bestwert","de":{"t":"Bestwert (PR)","a":["Bestwerte","Bestwert"],"s":"Persönlicher Rekord, z. B. höchstes e1RM oder schwerster Satz."},"en":{"t":"Personal record (PR)","a":["personal records","personal record"],"s":"Your best so far, e.g. highest e1RM or heaviest set."}},{"id":"satz","de":{"t":"Satz","a":["Sätze","Satz"],"s":"Eine Folge von Wiederholungen ohne Pause."},"en":{"t":"Set","a":["sets","set"],"s":"A run of reps without rest."}},{"id":"wiederholung","de":{"t":"Wiederholung (Wdh)","a":["Wiederholungen","Wiederholung","Wdh"],"s":"Eine vollständige Ausführung der Bewegung."},"en":{"t":"Rep (repetition)","a":["reps","rep"],"s":"One complete execution of the movement."}},{"id":"arbeitssatz","de":{"t":"Arbeitssatz","a":["Arbeitssätze","Arbeitssatz"],"s":"Ein Satz, der zählt - nicht Aufwärmen."},"en":{"t":"Working set","a":["working sets","working set"],"s":"A set that counts - not a warm-up."}},{"id":"aufwaermsatz","de":{"t":"Aufwärmsatz","a":["Aufwärmsätze","Aufwärmsatz"],"s":"Leichter Satz zur Vorbereitung, zählt nicht."},"en":{"t":"Warm-up set","a":["Warm-up set","warm-up sets","warm-up set"],"s":"Light preparatory set that doesn’t count."}},{"id":"einstellsatz","de":{"t":"Einstellsatz","a":["Einstellsätze","Einstellsatz"],"s":"Hochtasten zum Arbeitsgewicht, wenn es noch unbekannt ist."},"en":{"t":"Test set","a":["Test set","test sets","test set"],"s":"Working up to your working weight when it’s unknown."}},{"id":"versagen","de":{"t":"Bis zum Versagen","a":["Bis zum Versagen","bis zum Versagen","Versagen"],"s":"Satz, bis keine Wiederholung mehr geht (RPE 10)."},"en":{"t":"To failure","a":["To failure","to failure","failure"],"s":"A set until no further rep is possible (RPE 10)."}},{"id":"amrap","de":{"t":"AMRAP","a":["AMRAP"],"s":"„So viele Wiederholungen wie möglich“ - Mindestzahl, mehr erwünscht."},"en":{"t":"AMRAP","a":["AMRAP"],"s":"“As many reps as possible” - a minimum, more is welcome."}},{"id":"je-seite","de":{"t":"Je Seite (einseitig)","a":["Je Seite","je Seite"],"s":"Jeder Satz wird für links und rechts gemacht."},"en":{"t":"Per side (unilateral)","a":["Per side","per side"],"s":"Each set is done for left and right."}},{"id":"pause","de":{"t":"Pause (Satzpause)","a":["Satzpause","Pausen","Pause"],"s":"Erholung zwischen zwei Sätzen."},"en":{"t":"Rest","a":["Rest","rest"],"s":"Recovery between two sets."}},{"id":"halten","de":{"t":"Halteübung (Isometrie)","a":["Isometrie","Halteübungen","Halteübung"],"s":"Position halten statt bewegen, Ziel in Sekunden."},"en":{"t":"Hold (isometric)","a":["Holds","holds","isometric"],"s":"Hold a position instead of moving, target in seconds."}},{"id":"uebungstimer","de":{"t":"Übungstimer","a":["Übungstimer"],"s":"Zählt die Arbeitszeit bei Sekunden-Zielen."},"en":{"t":"Exercise timer","a":["exercise timer"],"s":"Counts work time for time targets."}},{"id":"intensitaet","de":{"t":"Intensität","a":["Intensität"],"s":"Wie schwer: % 1RM, RPE, kg, Körpergewicht oder ohne."},"en":{"t":"Intensity","a":["Intensity","intensity"],"s":"How hard: % 1RM, RPE, kg, bodyweight or none."}},{"id":"intensitaetstechnik","de":{"t":"Intensitätstechnik","a":["Intensitätstechniken","Intensitätstechnik"],"s":"Methode, einen Satz über das normale Ende hinaus zu verlängern."},"en":{"t":"Intensity technique","a":["intensity techniques","intensity technique"],"s":"A method to extend a set beyond its normal end."}},{"id":"drop","de":{"t":"Drop-Satz","a":["Drop-Sätze","Drop-Satz","Drop Set","Drop"],"s":"Bis nahe ans Versagen, dann ohne Pause leichter weiter."},"en":{"t":"Drop set","a":["Drop sets","Drop set","drop sets","drop set"],"s":"Close to failure, then continue lighter without rest."}},{"id":"strip-set","de":{"t":"Strip-Set","a":["Strip-Set"],"s":"Drop-Satz durch Abnehmen von Hantelscheiben."},"en":{"t":"Strip set","a":["Strip set","strip set"],"s":"Drop set by stripping plates."}},{"id":"mechanischer-drop","de":{"t":"Mechanischer Drop","a":["Mechanischer Drop","mechanischer Drop"],"s":"Weitermachen mit einer leichteren Übungsvariante statt weniger Gewicht."},"en":{"t":"Mechanical drop set","a":["Mechanical drop","mechanical drop"],"s":"Continue with an easier exercise variant instead of less weight."}},{"id":"rest-pause","de":{"t":"Rest-Pause","a":["Rest-Pause"],"s":"Kurze Pause, dann weitere Mini-Sätze mit gleichem Gewicht."},"en":{"t":"Rest-pause","a":["Rest-pause","rest-pause"],"s":"Short pause, then more mini-sets with the same weight."}},{"id":"dc-training","de":{"t":"DC-Training","a":["DC-Training"],"s":"AMRAP-Satz plus zwei Rest-Pause-Mini-Sätze."},"en":{"t":"DC training","a":["DC training"],"s":"AMRAP set plus two rest-pause mini-sets."}},{"id":"myo","de":{"t":"Myo-Reps","a":["Myo-Reps","Myo"],"s":"Aktivierungssatz, dann kurze Mini-Sätze mit festem Ziel."},"en":{"t":"Myo-reps","a":["Myo-reps","myo-reps"],"s":"Activation set, then short mini-sets with a fixed target."}},{"id":"cluster","de":{"t":"Cluster-Satz","a":["Cluster-Sätze","Cluster-Satz","Cluster"],"s":"Schwerer Satz in kleinen Blöcken mit kurzer Pause."},"en":{"t":"Cluster set","a":["Cluster sets","Cluster set","cluster sets","Cluster"],"s":"Heavy set split into small blocks with short rests."}},{"id":"teilsatz","de":{"t":"Teilsatz (Mini-Satz)","a":["Teilsätze","Teilsatz","Mini-Sätze","Mini-Satz"],"s":"Anschluss-Satz einer Technik nach dem Hauptsatz."},"en":{"t":"Sub-set (mini-set)","a":["Sub-sets","sub-sets","mini-sets","mini-set"],"s":"Follow-up set of a technique after the main set."}},{"id":"kurzpause","de":{"t":"Kurzpause","a":["Kurzpause"],"s":"Wenige Sekunden zwischen Teilsätzen einer Technik."},"en":{"t":"Short pause","a":["Short pause","short pause"],"s":"A few seconds between sub-sets of a technique."}},{"id":"supersatz","de":{"t":"Supersatz","a":["Supersätze","Supersatz"],"s":"Zwei oder mehr Übungen im Wechsel, Pause erst nach der Runde."},"en":{"t":"Superset","a":["Supersets","Superset","supersets","superset"],"s":"Two or more exercises in turn, rest only after the round."}},{"id":"tri-satz","de":{"t":"Tri-Satz, Riesensatz","a":["Riesensatz","Tri-Satz"],"s":"Supersatz aus drei bzw. vier und mehr Übungen."},"en":{"t":"Tri-set, giant set","a":["giant sets","giant set","Tri-sets","tri-sets"],"s":"Superset of three, or four and more exercises."}},{"id":"zirkel","de":{"t":"Zirkel","a":["Zirkel"],"s":"Mehrere Übungen nacheinander, Runde um Runde."},"en":{"t":"Circuit","a":["circuits","circuit"],"s":"Several exercises in sequence, round after round."}},{"id":"vorermuedung","de":{"t":"Vorermüdung","a":["Vorermüdung"],"s":"Isolationsübung direkt vor der Grundübung für denselben Muskel."},"en":{"t":"Pre-exhaust","a":["pre-exhaust","Pre-exhaust"],"s":"Isolation exercise right before the compound lift for the same muscle."}},{"id":"kontrast","de":{"t":"Kontrasttraining","a":["Kontrasttraining"],"s":"Schwere Übung, direkt danach eine explosive."},"en":{"t":"Contrast training","a":["contrast training","Contrast training"],"s":"Heavy exercise, then an explosive one right after."}},{"id":"antagonist","de":{"t":"Antagonist","a":["Antagonisten","Antagonist"],"s":"Gegenspieler-Muskel, z. B. Bizeps und Trizeps."},"en":{"t":"Antagonist","a":["antagonists","antagonist"],"s":"Opposing muscle, e.g. biceps and triceps."}},{"id":"grunduebung","de":{"t":"Grundübung","a":["Grundübungen","Grundübung"],"s":"Mehrgelenkübung wie Kniebeuge, Kreuzheben, Bankdrücken."},"en":{"t":"Compound exercise","a":["compound lifts","compound lift","compound exercises","compound exercise","compound"],"s":"Multi-joint lift like squat, deadlift, bench press."}},{"id":"isolationsuebung","de":{"t":"Isolationsübung","a":["Isolationsübungen","Isolationsübung"],"s":"Eingelenkübung für einen Muskel, z. B. Bizepscurl."},"en":{"t":"Isolation exercise","a":["isolation exercises","isolation exercise","isolation"],"s":"Single-joint exercise for one muscle, e.g. biceps curl."}},{"id":"muskelgruppe","de":{"t":"Muskelgruppe","a":["Muskelgruppen","Muskelgruppe"],"s":"Zuordnung einer Übung zu Brust, Rücken, Beinen usw."},"en":{"t":"Muscle group","a":["muscle groups","muscle group"],"s":"Assignment of an exercise to chest, back, legs etc."}},{"id":"heatmap","de":{"t":"Heatmap (Körperkarte)","a":["Heatmap"],"s":"Figur, eingefärbt nach Sätzen je Muskelgruppe."},"en":{"t":"Heatmap (body map)","a":["heatmap","Heatmap"],"s":"Figure coloured by sets per muscle group."}},{"id":"leergewicht","de":{"t":"Leergewicht","a":["Leergewicht"],"s":"Eigengewicht einer Maschine ohne Steckgewicht."},"en":{"t":"Empty weight","a":["empty weight","Empty weight"],"s":"Weight of a machine without added load."}},{"id":"koerpergewicht","de":{"t":"Körpergewicht","a":["Körpergewicht"],"s":"Übung ohne Zusatzgewicht, z. B. Liegestütz."},"en":{"t":"Bodyweight","a":["Bodyweight","bodyweight"],"s":"Exercise without added weight, e.g. push-up."}},{"id":"dryland","de":{"t":"Dryland","a":["Dryland"],"s":"Landtraining für Wassersportler, v. a. Schwimmer."},"en":{"t":"Dryland","a":["Dryland"],"s":"Land training for swimmers and water athletes."}},{"id":"einheit","de":{"t":"Einheit","a":["Einheiten","Einheit"],"s":"Ein Trainingstag des Plans, z. B. A oder B."},"en":{"t":"Session","a":["Sessions","Session","sessions","session"],"s":"One training day of the plan, e.g. A or B."}},{"id":"block","de":{"t":"Block (Bereich)","a":["Blöcke","Block"],"s":"Abschnitt einer Einheit, z. B. Aufwärmen oder Hauptteil."},"en":{"t":"Block (part)","a":["blocks","block"],"s":"Section of a session, e.g. warm-up or main part."}},{"id":"progression","de":{"t":"Progression","a":["Progression"],"s":"Planmäßige Steigerung von Woche zu Woche."},"en":{"t":"Progression","a":["Progression","progression"],"s":"Planned increase from week to week."}},{"id":"periodisierung","de":{"t":"Periodisierung","a":["Periodisierung"],"s":"Gliederung des Trainings in Phasen mit eigenem Ziel."},"en":{"t":"Periodization","a":["Periodization","periodization"],"s":"Structuring training into phases with their own goal."}},{"id":"phase","de":{"t":"Phase","a":["Phasen","Phase"],"s":"Abschnitt des Plans über eine oder mehrere Wochen."},"en":{"t":"Phase","a":["phases","phase"],"s":"Section of the plan over one or more weeks."}},{"id":"entlastung","de":{"t":"Entlastung (Deload)","a":["Entlastungswochen","Entlastungswoche","Entlastung"],"s":"Leichtere Woche zur Erholung."},"en":{"t":"Deload","a":["Deload weeks","deload weeks","Deload","deload"],"s":"Lighter week for recovery."}},{"id":"soll","de":{"t":"Soll","a":["Soll"],"s":"Trainings pro Woche laut Plan."},"en":{"t":"Target (weekly)","a":["weekly target"],"s":"Trainings per week according to the plan."}},{"id":"dup","de":{"t":"DUP","a":["DUP"],"s":"Wechselnde Schwerpunkte von Training zu Training."},"en":{"t":"DUP","a":["DUP"],"s":"Changing focus from workout to workout."}},{"id":"power","de":{"t":"Power (Schnellkraft)","a":["Power"],"s":"Kraft schnell entfalten - Sprünge, Würfe, explosive Hebungen."},"en":{"t":"Power","a":["Power"],"s":"Producing force quickly - jumps, throws, explosive lifts."}},{"id":"maximalkraft","de":{"t":"Maximalkraft","a":["Maximalkraft"],"s":"Die höchste Kraft, die du willentlich aufbringen kannst."},"en":{"t":"Maximal strength","a":["maximal strength","Max strength"],"s":"The highest force you can voluntarily produce."}},{"id":"gerade-saetze","de":{"t":"Gerade Sätze","a":["Gerade Sätze"],"s":"Alle Sätze mit gleicher Vorgabe."},"en":{"t":"Straight sets","a":["Straight sets","straight sets"],"s":"All sets with the same prescription."}},{"id":"ramping","de":{"t":"Ramping","a":["Ramping"],"s":"Gewicht von Satz zu Satz bis zum Arbeitsgewicht steigern."},"en":{"t":"Ramping","a":["Ramping","ramping"],"s":"Increase weight set by set up to the working weight."}},{"id":"pyramide","de":{"t":"Pyramide","a":["Pyramiden","Pyramide"],"s":"Gewicht steigt (oder fällt) je Satz, Wiederholungen umgekehrt."},"en":{"t":"Pyramid","a":["Pyramids","Pyramid","pyramid"],"s":"Weight rises (or falls) per set, reps the other way."}},{"id":"top-set","de":{"t":"Top-Set","a":["Top-Sets","Top-Set"],"s":"Der schwerste Satz des Tages."},"en":{"t":"Top set","a":["Top sets","Top set","top sets","top set"],"s":"The heaviest set of the day."}},{"id":"back-off","de":{"t":"Back-off-Sätze","a":["Back-off-Sätze","Back-off"],"s":"Leichtere Sätze nach dem Top-Set."},"en":{"t":"Back-off sets","a":["Back-off sets","back-off sets","Back-off","back-off"],"s":"Lighter sets after the top set."}},{"id":"fsl","de":{"t":"FSL (First Set Last)","a":["FSL"],"s":"Back-off-Sätze mit dem Gewicht des ersten Satzes."},"en":{"t":"FSL (first set last)","a":["FSL"],"s":"Back-off sets at the first set’s weight."}},{"id":"joker","de":{"t":"Joker-Satz","a":["Joker-Sätze","Joker"],"s":"Zusätzlicher schwerer Satz an einem guten Tag."},"en":{"t":"Joker set","a":["Joker sets","joker sets","Joker"],"s":"Extra heavy set on a good day."}},{"id":"531","de":{"t":"5/3/1","a":["5/3/1"],"s":"Kraftprogramm von Jim Wendler mit „+“-Satz am Ende."},"en":{"t":"5/3/1","a":["5/3/1"],"s":"Strength programme by Jim Wendler with a “+” set at the end."}},{"id":"wellen","de":{"t":"Wellenbelastung","a":["Wellenbelastung","Wellen"],"s":"Wiederholungen und Last wechseln in Wellen."},"en":{"t":"Wave loading","a":["Wave loading","wave loading","waves"],"s":"Reps and load change in waves."}},{"id":"ladder","de":{"t":"Ladder","a":["Ladder"],"s":"Steigende Wiederholungen je Runde (1, 2, 3, …)."},"en":{"t":"Ladder","a":["Ladder","ladder"],"s":"Rising reps per round (1, 2, 3, …)."}},{"id":"emom","de":{"t":"EMOM","a":["EMOM"],"s":"Zu jeder vollen Minute eine Aufgabe, Rest der Minute Pause."},"en":{"t":"EMOM","a":["EMOM"],"s":"A task at the top of every minute, rest for the remainder."}},{"id":"tabata","de":{"t":"Tabata","a":["Tabata"],"s":"8 × 20 s Belastung, 10 s Pause."},"en":{"t":"Tabata","a":["Tabata"],"s":"8 × 20 s work, 10 s rest."}},{"id":"density","de":{"t":"Density/EDT","a":["Density/EDT","Density","EDT"],"s":"Möglichst viel Arbeit in einem festen Zeitblock."},"en":{"t":"Density / EDT","a":["Density/EDT","EDT"],"s":"As much work as possible in a fixed time block."}},{"id":"tempo","de":{"t":"Tempo","a":["Tempo-Vorgabe","Tempo"],"s":"Vorgabe für die Dauer der Bewegungsphasen, z. B. 3-0-1-0."},"en":{"t":"Tempo","a":["Tempo","tempo"],"s":"Prescribed duration of movement phases, e.g. 3-0-1-0."}},{"id":"exzentrisch","de":{"t":"Exzentrische Überlast","a":["exzentrische Überlast","Exzentrische Überlast","Negativwiederholungen","negative"],"s":"Betonte oder schwerere Absenkphase."},"en":{"t":"Eccentric overload","a":["eccentric overload","Eccentric overload","negatives"],"s":"Emphasised or heavier lowering phase."}},{"id":"erzwungen","de":{"t":"Über das Versagen hinaus","a":["erzwungene Wiederholungen","Teilwiederholungen","21s"],"s":"Erzwungene, negative oder Teilwiederholungen nach dem Versagen."},"en":{"t":"Beyond failure","a":["forced reps","partials","21s"],"s":"Forced, negative or partial reps after failure."}},{"id":"vbt","de":{"t":"VBT (geschwindigkeitsbasiert)","a":["VBT"],"s":"Last nach gemessener Hantelgeschwindigkeit steuern."},"en":{"t":"VBT (velocity-based)","a":["VBT"],"s":"Steer load by measured bar speed."}}];

  var cfg = window.HELPANION_GLOSSARY || {};
  var base = cfg.base || "begriffe.html";
  var skip = "a, code, pre, script, style, svg, button, textarea, input, select, nav, h1, title, .gl, .gl-pop, .no-gl, .mermaid, .diagram";
  function lang(el) {
    var n = el.closest ? el.closest("[lang]") : null;
    var l = (n || document.documentElement).getAttribute("lang") || "de";
    return l.slice(0, 2) === "en" ? "en" : "de";
  }
  function esc(s) { return s.replace(/[.*+?^${}()|[\]\\\/]/g, "\\$&"); }
  var rx = {}, lookup = {};
  ["de", "en"].forEach(function (lg) {
    var list = [];
    T.forEach(function (t) { (t[lg].a || []).forEach(function (a) { list.push([a, t.id]); }); });
    list.sort(function (x, y) { return y[0].length - x[0].length; });
    lookup[lg] = {};
    list.forEach(function (p) { if (!(p[0] in lookup[lg])) lookup[lg][p[0]] = p[1]; });
    rx[lg] = new RegExp("(?<![\\p{L}\\p{N}])(" + list.map(function (p) { return esc(p[0]); }).join("|") + ")(?![\\p{L}\\p{N}])", "gu");
  });
  var byId = {};
  T.forEach(function (t) { byId[t.id] = t; });
  var seen = new Map();
  function mark(root) {
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        if (!n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        var p = n.parentElement;
        if (!p || p.closest(skip)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(function (node) {
      var el = node.parentElement, lg = lang(el), text = node.nodeValue;
      var box = el.closest("section, .lang, footer, header") || document.body;
      if (!seen.has(box)) seen.set(box, new Set());
      var done = seen.get(box), frag = null, last = 0, m;
      rx[lg].lastIndex = 0;
      while ((m = rx[lg].exec(text))) {
        var id = lookup[lg][m[1]];
        if (!id || done.has(id)) continue;
        done.add(id);
        frag = frag || document.createDocumentFragment();
        frag.appendChild(document.createTextNode(text.slice(last, m.index)));
        var s = document.createElement("span");
        s.className = "gl";
        s.textContent = m[1];
        s.setAttribute("data-gl", id);
        s.setAttribute("data-lang", lg);
        s.setAttribute("tabindex", "0");
        s.setAttribute("role", "button");
        s.setAttribute("aria-label", m[1] + ": " + byId[id][lg].s);
        frag.appendChild(s);
        last = m.index + m[1].length;
      }
      if (frag) {
        frag.appendChild(document.createTextNode(text.slice(last)));
        node.parentNode.replaceChild(frag, node);
      }
    });
  }
  var style = document.createElement("style");
  style.textContent =
    ".gl{text-decoration:underline dotted;text-underline-offset:3px;text-decoration-thickness:1px;cursor:help}" +
    ".gl:focus-visible{outline:2px solid #9184d9;outline-offset:2px;border-radius:2px}" +
    ".gl-pop{position:absolute;z-index:50;max-width:min(320px,calc(100vw - 24px));background:#232532;color:#e8e6f5;border:1px solid #9184d9;" +
    "border-radius:8px;padding:10px 12px;font:14px/1.45 system-ui,sans-serif;box-shadow:0 6px 24px rgba(0,0,0,.35)}" +
    ".gl-pop b{display:block;margin-bottom:4px}.gl-pop a{color:#b5abfc}.gl-pop .gl-x{float:right;margin:-4px -4px 0 8px;background:none;" +
    "border:0;color:#e8e6f5;font-size:18px;line-height:1;cursor:pointer}";
  document.head.appendChild(style);
  var pop = null, pinned = false;
  function close() { if (pop) { pop.remove(); pop = null; pinned = false; } }
  function show(el, pin) {
    var t = byId[el.getAttribute("data-gl")], lg = el.getAttribute("data-lang");
    if (!t) return;
    close();
    pop = document.createElement("div");
    pop.className = "gl-pop";
    pop.setAttribute("role", "dialog");
    var b = document.createElement("b"); b.textContent = t[lg].t;
    var p = document.createElement("div"); p.textContent = t[lg].s;
    if (pin) {
      var x = document.createElement("button"); x.className = "gl-x"; x.textContent = "×";
      x.setAttribute("aria-label", lg === "en" ? "Close" : "Schließen");
      x.addEventListener("click", close);
      pop.appendChild(x);
    }
    pop.appendChild(b); pop.appendChild(p);
    if (pin) {
      var a = document.createElement("a");
      a.href = base + "#" + (lg === "en" ? "en-" : "") + t.id;
      a.textContent = lg === "en" ? "More in the glossary" : "Mehr im Glossar";
      var d = document.createElement("div"); d.style.marginTop = "6px"; d.appendChild(a);
      pop.appendChild(d);
    }
    document.body.appendChild(pop);
    var r = el.getBoundingClientRect(), w = pop.offsetWidth;
    var left = Math.max(12, Math.min(window.scrollX + r.left, window.scrollX + document.documentElement.clientWidth - w - 12));
    pop.style.left = left + "px";
    pop.style.top = (window.scrollY + r.bottom + 6) + "px";
    pinned = pin;
  }
  document.addEventListener("mouseover", function (e) {
    var el = e.target.closest && e.target.closest(".gl");
    if (el && !pinned) show(el, false);
  });
  document.addEventListener("mouseout", function (e) {
    var el = e.target.closest && e.target.closest(".gl");
    if (el && !pinned) close();
  });
  document.addEventListener("click", function (e) {
    var el = e.target.closest && e.target.closest(".gl");
    if (el) { e.preventDefault(); e.stopPropagation(); show(el, true); return; }
    if (pop && !(e.target.closest && e.target.closest(".gl-pop"))) close();
  }, true);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") close();
    var el = document.activeElement;
    if ((e.key === "Enter" || e.key === " ") && el && el.classList && el.classList.contains("gl")) { e.preventDefault(); show(el, true); }
  });
  function run() { mark(document.body); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", run); else run();
})();
