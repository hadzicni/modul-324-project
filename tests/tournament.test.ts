import { describe, expect, it } from "vitest";
import { createTournament } from "../lib/tournament";

describe("createTournament", () => {
  it("trims the tournament name and starts without participants", () => {
    const tournament = createTournament("  Sommer-Cup  ");

    expect(tournament.name).toBe("Sommer-Cup");
    expect(tournament.participants).toEqual([]);
    expect(tournament.id).toBeTruthy();
  });
});

describe("createTournament with a whitespace-only name", () => {
  it("uses an empty tournament name", () => {
    const tournament = createTournament("   ");

    expect(tournament.name).toBe("");
  });
});

describe("createTournament ids", () => {
  it("creates a different id for each tournament", () => {
    const firstTournament = createTournament("Sommer-Cup");
    const secondTournament = createTournament("Sommer-Cup");

    expect(firstTournament.id).not.toBe(secondTournament.id);
  });
});
