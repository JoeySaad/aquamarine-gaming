import Link from "next/link";
import type { Game } from "../data/games";

type GameCardProps = {
  game: Game;
};

export function GameCard({ game }: GameCardProps) {
  return (
    <article className="game-card">
      <Link href={`/games/${game.slug}`} className="card-media" aria-label={`Open ${game.title}`}>
        <img src={game.image} alt="" />
        <span className="category-pill">
          <span className="tag-icon" aria-hidden="true" />
          {game.category}
        </span>
        {game.featured ? <span className="featured-pill">Featured</span> : null}
      </Link>
      <div className="card-body">
        <h3>{game.title}</h3>
        <p>{game.shortDescription}</p>
        <Link className="read-more" href={`/games/${game.slug}`}>
          <span aria-hidden="true">v</span> Read more
        </Link>
      </div>
    </article>
  );
}
