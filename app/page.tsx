import Link from "next/link";
import { GameCard } from "../components/GameCard";
import { games } from "../data/games";

export default function Home() {
  const featuredGames = games.filter((game) => game.featured);

  return (
    <>
      <section className="hero grid-bg">
        <div className="availability-pill">
          <span aria-hidden="true">*</span> {games.length} Games Available
        </div>
        <h1>
          Play <span>Instantly</span>
        </h1>
        <p>
          Jump into Aquamarine Gaming right in your browser. No downloads, no
          installs, just clean arcade energy.
        </p>
        <Link className="primary-button" href="/games">
          <span aria-hidden="true">&gt;</span> Browse Games
        </Link>
      </section>

      <section className="home-band">
        <div>
          <p className="section-label purple">Featured</p>
          <h2>Arcade picks ready for your library</h2>
        </div>
        <Link className="text-link" href="/games">
          View full library
        </Link>
      </section>

      <section className="cards-grid home-grid">
        {featuredGames.map((game) => (
          <GameCard game={game} key={game.slug} />
        ))}
      </section>
    </>
  );
}
