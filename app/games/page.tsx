import type { Metadata } from "next";
import { GameGrid } from "../../components/GameGrid";

export const metadata: Metadata = {
  title: "Games | Aquamarine Gaming"
};

export default function GamesPage() {
  return (
    <div className="page-shell">
      <GameGrid />
    </div>
  );
}
