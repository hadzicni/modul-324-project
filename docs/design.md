# Designkonzept für Tournament Maker

Tournament Maker verwendet auf allen Seiten helle Flächen und dunkelblaue Schrift. Royalblau kennzeichnet die wichtigsten Aktionen, etwa wenn jemand ein Turnier erstellt, Teilnehmer hinzufügt oder ein Ergebnis speichert. Goldgelb ist für den Turniersieg reserviert.

## Farben

| Farbe        | Hex       | Verwendung                                                                              |
| ------------ | --------- | --------------------------------------------------------------------------------------- |
| Royalblau    | `#1D4ED8` | Hauptbuttons mit weisser Schrift, Links und Fokusrahmen                                 |
| Hellblau     | `#EFF6FF` | Hintergrund für hervorgehobene Bereiche wie das Turnierformular oder die aktuelle Runde |
| Goldgelb     | `#FACC15` | Markierung des Turniersiegs, etwa ein Badge mit dunkelblauer Schrift                    |
| Nachtblau    | `#0F172A` | Überschriften und Fliesstext                                                            |
| Kühles Weiss | `#F8FAFC` | Seitenhintergrund                                                                       |
| Weiss        | `#FFFFFF` | Karten, Tabellen und Eingabefelder                                                      |

## Schrift

Die Oberfläche verwendet Barlow. Der Seitentitel steht in Bold (700), Abschnittstitel und Buttons in SemiBold (600). Für Fliesstext und Angaben wie Teilnehmerzahl oder Runde verwenden wir Regular (400). Turniernamen und Statusangaben stehen in normaler Gross- und Kleinschreibung.

## Aufbau und Bedienelemente

Ähnliche Seiten sind gleich aufgebaut. Der Seitentitel steht über dem Inhalt, darunter folgen die Abschnitte mit eigenen Überschriften. Karten und Formulare haben einheitliche Innenabstände, dezente Rahmen und leicht gerundete Ecken. Eingabefelder haben eine sichtbare Beschriftung.

Die Hauptaktion eines Formulars ist ein blauer Button mit einer konkreten Beschriftung wie «Turnier erstellen» oder «Ergebnis speichern». Weitere Aktionen können als Links oder als Buttons mit Rahmen dargestellt werden. Wiederkehrende Aktionen wie «Öffnen» stehen in jeder Zeile oder Karte an derselben Stelle.

## Turnierstatus und Ergebnisse

Der Turnierstatus steht als Text beim Turniernamen, zum Beispiel «Runde 2 von 3» oder «Abgeschlossen». Im Turnierbaum hat jede Runde eine beschriftete Spalte. Die aktuelle Runde ist hellblau hinterlegt und mit «Aktuelle Runde» beschriftet. Dort stehen die Eingabefelder für die Resultate und der royalblaue Button «Ergebnis speichern».

Bei gespielten Paarungen stehen beide Resultate neben den Namen. Der Name des Gewinners steht in SemiBold. Noch offene Plätze haben Text wie «Sieger Halbfinal 1» oder «Noch offen». Sobald das Final entschieden ist, erscheint der Name des Turniersiegers mit einem goldgelben Badge «Sieger».

Die [Mockups](mockups/README.md) zeigen den Aufbau von Startseite und Turnierbaum.
