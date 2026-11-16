import Tournaments from "@/app/ui/tournaments";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-2xl flex-col gap-10 px-4 py-12">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Tournament Maker</h1>
        <p className="text-neutral-500">
          Turniere erstellen und verwalten. Teilnehmer eintragen, Spielpaarungen
          generieren, Sieger ermitteln.
        </p>
      </header>
      <Tournaments />
    </main>
  );
}
