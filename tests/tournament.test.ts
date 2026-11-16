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
