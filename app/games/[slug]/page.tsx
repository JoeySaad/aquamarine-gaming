import Link from "next/link";
import { notFound } from "next/navigation";
import { GameEmbed } from "../../../components/GameEmbed";
import { games, getGame } from "../../../data/games";

type GamePageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return games.map((game) => ({ slug: game.slug }));
}

export function generateMetadata({ params }: GamePageProps) {
  const game = getGame(params.slug);

  return {
    title: game ? `${game.title} | Aquamarine Gaming` : "Game | Aquamarine Gaming"
  };
}

export default function GamePage({ params }: GamePageProps) {
  const game = getGame(params.slug);

  if (!game) {
    notFound();
  }

  return (
    <div className="game-detail">
      <Link className="back-link" href="/games">
        &lt; Back to library
      </Link>
      <section className="detail-hero">
        <div>
          <span className="category-pill static">
            <span className="tag-icon" aria-hidden="true" />
            {game.category}
          </span>
          <h1>{game.title}</h1>
          <p>{game.description}</p>
        </div>
        <img src={game.image} alt="" />
      </section>

      <GameEmbed game={game} />

      <section className="detail-grid">
        <div>
          <p className="section-label purple">Controls</p>
          <ul>
            {game.controls.map((control) => (
              <li key={control}>{control}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
