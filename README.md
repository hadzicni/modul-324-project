# Tournament Maker

## Projektbeschreibung

Tournament Maker ist eine Web-Applikation zur Erstellung und Verwaltung eigener Turniere.

Benutzer können Turniere erstellen, Teilnehmer hinzufügen und automatisch Spielpaarungen generieren. Die Ergebnisse können nach jedem Match eingetragen werden, sodass die Gewinner in die nächste Runde aufsteigen.

Das Ziel ist eine einfache und übersichtliche Plattform, auf der Turniere für verschiedene Games und Sportarten organisiert werden können.

## Geplante Funktionen

- Turniere erstellen und verwalten
- Teilnehmer hinzufügen und entfernen
- Turnierbaum automatisch generieren
- Match-Ergebnisse eintragen
- Gewinner und Turniersieger anzeigen

## Erweiterungsmöglichkeiten

- Benutzeraccounts
- Unterschiedliche Turniermodi
- Ranglisten und Statistiken
- Turniere über Links teilen
- Live-Ergebnisse anzeigen

## Lokale Entwicklung

### Voraussetzungen

- [Node.js](https://nodejs.org/) 20.9 oder neuer
- [pnpm](https://pnpm.io/) 12 (die genaue Version ist in `package.json` festgelegt)

### Installation

```bash
pnpm install
```

### Befehle

| Befehl       | Beschreibung                                                  |
| ------------ | ------------------------------------------------------------- |
| `pnpm dev`   | Startet den Entwicklungsserver auf <http://localhost:3000>    |
| `pnpm build` | Erstellt den Production-Build                                 |
| `pnpm start` | Startet den Production-Build (vorher `pnpm build` ausführen)  |
| `pnpm lint`  | Prüft den Code mit ESLint                                     |

# BBZBL Modul 324: Web-Applikation Template

Dieses Template dient als Vorlage zum Starten eures Projekts.

Ziel ist es ein Repository zu erstellen, welches, [wie das Muster](https://github.com/herrhodel/modul-324-muster) eine
Web-Applikation enthält, welche automatisch getestet, gebaut, released und deployed wird.

> [!NOTE]
> Die Web-Applikation muss in einem Ordner `/app` erstellt werden. Ansonsten müssen Folgescripts angepasst werden.

Je nach Thema, können vom Muster die Grundlagen kopiert und abgeändert werden.
Natürlich soll dieses Repo nicht nur ein Nginx sondern eine eigene Applikation beinhalten.

**Wieso nicht direkt das Muster als Grundlage?**

Dies war tatsächlich mal so. Die Erfahrung hat gezeigt, dass die Komplexität
das Verständnis erschwert. Die Idee ist, dass die einzelnen Schritte bewusster
umgesetzt werden und man nicht am Anfang vor lauter Bäume den Wald nicht mehr sieht.

In der ersten Woche wird bewusst das Muster bei allen zum Laufen gebracht. Dies
soll ermöglichen, dass ein Gesamtüberblick von Anfang an existiert.

> [!NOTE]
> Vorgegebene Ordnerstruktur
> Die Ordnerstruktur soll analog zum Muster aufgesetzt werden.
>
> Der Ordner `docs` wird von Anfang an benötigt und ist direkt im starter
> vorgegeben.
