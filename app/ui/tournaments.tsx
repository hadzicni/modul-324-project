"use client";

import { useState, type FormEvent } from "react";
import { createTournament, type Tournament } from "@/lib/tournament";

export default function Tournaments() {
  const [tournaments, setTournaments] = useState<Tournament[]>([]);
  const [name, setName] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTournaments([createTournament(name), ...tournaments]);
    setName("");
  }

  return (
    <div className="flex flex-col gap-10">
      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Turnier erstellen</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <label htmlFor="tournament-name" className="text-sm font-medium">
            Turniername
          </label>
          <div className="flex gap-2">
            <input
              id="tournament-name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="z. B. Sommer-Cup 2026"
              className="flex-1 rounded border border-neutral-400 px-3 py-2"
            />
            <button
              type="submit"
              className="rounded bg-neutral-800 px-4 py-2 font-medium text-white dark:bg-neutral-200 dark:text-neutral-900"
            >
              Erstellen
            </button>
          </div>
        </form>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Meine Turniere</h2>
        {tournaments.length === 0 ? (
          <p className="text-neutral-500">Noch keine Turniere vorhanden.</p>
        ) : (
          <ul className="flex flex-col gap-2">
            {tournaments.map((tournament) => (
              <li
                key={tournament.id}
                className="rounded border border-neutral-300 px-4 py-3"
              >
                <p className="font-medium">{tournament.name}</p>
                <p className="text-sm text-neutral-500">
                  {tournament.participants.length} Teilnehmer
                </p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
