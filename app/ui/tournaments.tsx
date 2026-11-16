"use client";

import { useRef, useState, type FormEvent } from "react";
import { createTournament, type Tournament } from "@/lib/tournament";

export default function Tournaments() {
  const [tournaments, setTournaments] = useState<Tournament[]>([]);
  const [name, setName] = useState("");
  const nameInput = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTournaments([createTournament(name), ...tournaments]);
    setName("");
  }

  return (
    <>
      <section className="bg-neutral-50 px-4 py-16 dark:bg-neutral-900">
        <div className="mx-auto flex max-w-3xl flex-col gap-10">
          <div className="flex flex-col gap-3 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
              Turniere erstellen und verwalten
            </h1>
            <p className="text-gray-700 dark:text-gray-300">
              Teilnehmer eintragen, Spielpaarungen generieren, Sieger ermitteln.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <label
              htmlFor="tournament-name"
              className="text-sm text-gray-500 dark:text-gray-400"
            >
              Turniername
            </label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                id="tournament-name"
                ref={nameInput}
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="z. B. Sommer-Cup 2026"
                className="flex-1 rounded-md border border-gray-300 bg-gray-100 px-4 py-3 text-gray-900 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-50"
              />
              <button
                type="submit"
                className="rounded-md bg-gray-700 px-12 py-3 font-bold text-white hover:bg-gray-900 dark:bg-gray-200 dark:text-gray-900 dark:hover:bg-white"
              >
                Erstellen
              </button>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Nach dem Erstellen werden die Teilnehmer hinzugefügt.
            </p>
          </form>
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-4 py-12">
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-50">
          Meine Turniere
        </h2>
        {tournaments.length === 0 ? (
          <div className="flex flex-col items-center gap-4 rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 px-4 py-8 dark:border-gray-600 dark:bg-gray-900">
            <p className="text-gray-700 dark:text-gray-300">
              Noch keine Turniere vorhanden.
            </p>
            <button
              type="button"
              onClick={() => nameInput.current?.focus()}
              className="rounded-md bg-gray-700 px-6 py-2 font-bold text-white hover:bg-gray-900 dark:bg-gray-200 dark:text-gray-900 dark:hover:bg-white"
            >
              Turnier erstellen
            </button>
          </div>
        ) : (
          <ul className="flex flex-col gap-3">
            {tournaments.map((tournament) => (
              <li
                key={tournament.id}
                className="rounded-lg border border-gray-300 bg-white px-8 py-4 dark:border-gray-600 dark:bg-gray-900"
              >
                <p className="font-bold text-gray-900 dark:text-gray-50">
                  {tournament.name}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {tournament.participants.length} Teilnehmer
                </p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
