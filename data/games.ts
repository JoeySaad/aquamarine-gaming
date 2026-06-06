export type GameCategory = "Sports" | "Puzzle";
export type EmbedType = "unity" | "iframe";

export type Game = {
  slug: string;
  title: string;
  category: GameCategory;
  featured: boolean;
  shortDescription: string;
  description: string;
  image: string;
  accent: string;
  embedType: EmbedType;
  embedUrl: string;
  controls: string[];
};

export const games: Game[] = [
  {
    slug: "hyperball",
    title: "HyperBall",
    category: "Sports",
    featured: true,
    shortDescription:
      "A fast-paced modern take on classic Pong with neon arenas and quick rallies.",
    description:
      "HyperBall is a browser-ready arcade sports game with bright neon courts, quick reactions, and simple controls. Replace the placeholder iframe with your playable build when the game is ready.",
    image: "/games/hyperball.svg",
    accent: "#27e7ff",
    embedType: "iframe",
    embedUrl: "/play/hyperball.html",
    controls: ["Arrow keys to move", "Space to serve", "First to 7 wins"]
  },
  {
    slug: "merge-labs",
    title: "Merge Labs",
    category: "Puzzle",
    featured: false,
    shortDescription:
      "Drop and merge evolving objects to discover higher-tier lab creations.",
    description:
      "Merge Labs is a compact physics puzzle concept built for short sessions and satisfying combo chains. The card and game page are already wired for a future playable embed.",
    image: "/games/merge-labs.svg",
    accent: "#34f6c6",
    embedType: "iframe",
    embedUrl: "about:blank",
    controls: ["Tap or click to drop", "Merge matching items", "Chase high scores"]
  }
];

export function getGame(slug: string) {
  return games.find((game) => game.slug === slug);
}

export const categories: Array<"All" | GameCategory> = [
  "All",
  "Puzzle",
  "Sports"
];
