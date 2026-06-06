import type { Game } from "../data/games";

type GameEmbedProps = {
  game: Game;
};

export function GameEmbed({ game }: GameEmbedProps) {
  const isPlaceholder = game.embedUrl === "about:blank";

  return (
    <div className="embed-shell">
      {isPlaceholder ? (
        <div className="embed-placeholder">
          <span>{game.embedType === "unity" ? "Unity WebGL" : "Iframe"} slot</span>
          <h2>{game.title}</h2>
          <p>
            Replace this placeholder URL in <code>data/games.ts</code> with your
            hosted game build.
          </p>
        </div>
      ) : (
        <iframe
          allow="autoplay; fullscreen; gamepad; clipboard-read; clipboard-write"
          allowFullScreen
          src={game.embedUrl}
          title={`${game.title} game embed`}
        />
      )}
    </div>
  );
}
