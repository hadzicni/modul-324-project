# Coding Guidelines

Diese Regeln gelten für alle, die am Tournament Maker mitarbeiten. Sie basieren auf den Vorgaben von [Modul 324](https://herrhodel.github.io/modul-324/docs/).

## Formatierung und Linting

- Wir formatieren mit Prettier und verwenden dessen Standardeinstellungen.
- ESLint prüft den Code mit den Regeln von Next.js. Prettier-Konflikte sind über `eslint-config-prettier` deaktiviert.
- `.editorconfig` legt UTF-8, LF, zwei Leerzeichen und eine Leerzeile am Dateiende fest.
- In VS Code sind die Plugins Prettier, EditorConfig und Conventional Commits installiert und "Format On Save" ist aktiv.
- Formatiert wird lokal, nicht durch eine GitHub Action.

Vor jedem Push müssen diese Befehle ohne Fehler durchlaufen:

```bash
pnpm format:check
pnpm lint
```

## Code

- TypeScript läuft im `strict`-Modus. `any` vermeiden wir.
- Komponenten und Typen schreiben wir in `PascalCase`, Variablen und Funktionen in `camelCase`.
- Bezeichner im Code sind auf Englisch. Issues, Pull Requests und Dokumentation sind auf Deutsch.
- Für Imports über mehrere Ordner verwenden wir den Alias `@/`.
- Kommentare erklären, warum etwas so gelöst ist. Auskommentierter Code wird gelöscht.
- Passwörter, Tokens und AWS-Zugangsdaten gehören in die GitHub Secrets und nie ins Repository.

## Branches

Wir arbeiten nach dem GitHub Flow:

- `main` enthält immer eine lauffähige Version. Niemand pusht direkt auf `main`.
- Jeder Issue bekommt einen eigenen Branch. Wir erstellen ihn direkt aus dem Issue, zum Beispiel `30-coding-guidelines-hinzufügen`.
- Neue Änderungen von `main` holen wir mit `git merge main` in den eigenen Branch, nicht mit `rebase`.
- `--force-with-lease` ist nur auf dem eigenen Feature-Branch erlaubt, ein Force-Push auf `main` nie.
- Nach dem Merge wird der Branch gelöscht.

## Commits

Alle Commits folgen den [Conventional Commits](https://www.conventionalcommits.org/de/v1.0.0/). Am Ende der Nachricht steht die Issue-Nummer:

```text
<typ>[optionaler scope]: <beschreibung> (#<issue>)
```

```text
feat: Turnier erstellen (#17)
fix(bracket): Freilos korrekt setzen (#20)
docs: Coding Guidelines hinzufügen (#30)
```

| Typ                                                         | Verwendung                | Version |
| ----------------------------------------------------------- | ------------------------- | ------- |
| `feat`                                                      | Neues Feature             | Minor   |
| `fix`                                                       | Fehlerbehebung            | Patch   |
| `perf`                                                      | Bessere Performance       | Patch   |
| `feat!`, `fix!`                                             | Breaking Change           | Major\* |
| `build`, `chore`, `ci`, `docs`, `refactor`, `style`, `test` | Technik, Doku und Wartung | Keine   |

\* Solange die Version unter 1.0.0 liegt, erhöht ein Breaking Change nur die Minor-Version.

Wir machen lieber mehrere kleine Commits als einen grossen. Versionen und `CHANGELOG.md` erstellt Release Please, sie werden nicht von Hand geändert.

## Issues und Pull Requests

- Ein Issue beschreibt genau eine Aufgabe, lösungsneutral und auch ohne Vorwissen verständlich.
- Jeder Issue enthält Akzeptanzkriterien und verweist auf seinen Epic und auf Issues, von denen er abhängt.
- Ein Pull Request gehört zu genau einem Issue und ist mit ihm verknüpft (automatisch über den Branch aus dem Issue, sonst unter "Development").
- Der Titel des Pull Requests folgt ebenfalls den Conventional Commits.
- Gemergt wird erst, wenn das Team den Pull Request geprüft und freigegeben hat. Kommentare sind konkret und helfen weiter, auch direkt am Code.
- Vor dem Schliessen dokumentieren wir im Issue, dass die Akzeptanzkriterien erfüllt sind, zum Beispiel mit einem Screenshot. Videos checken wir nicht ein.

## Tests

Ab Sprint 2 wird jedes Feature automatisiert getestet: Unit-Tests mit Vitest und End-to-End-Tests mit Playwright im Ordner `e2e`. Was ein Test prüfen soll, legen wir selbst fest. Schlägt ein Test fehl, klären wir die Ursache, statt ihn einfach anzupassen.
