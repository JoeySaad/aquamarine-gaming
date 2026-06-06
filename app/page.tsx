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

      <section className="info-grid">
        <div className="info-panel">
          <p className="section-label">Embeds</p>
          <h2>Unity WebGL and iframe friendly</h2>
          <p>
            Each game page has a responsive embed frame. Use local data to point
            entries at Unity builds, HTML5 games, or hosted iframe experiences.
          </p>
        </div>
        <form className="feedback-panel" id="feedback">
          <p className="section-label purple">Feedback</p>
          <h2>Contact placeholder</h2>
          <input aria-label="Name" placeholder="Name" type="text" />
          <input aria-label="Email" placeholder="Email" type="email" />
          <textarea aria-label="Message" placeholder="Message" rows={4} />
          <button type="button">Send later</button>
        </form>
      </section>
    </>
  );
}
