export type Tournament = {
  id: string;
  name: string;
  participants: string[];
};

export function createTournament(name: string): Tournament {
  return {
    id: crypto.randomUUID(),
    name: name.trim(),
    participants: [],
  };
}
