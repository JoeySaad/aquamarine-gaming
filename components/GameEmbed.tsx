"use client";

import { useEffect, useRef, useState } from "react";
import type { Game } from "../data/games";

type GameEmbedProps = {
  game: Game;
};

export function GameEmbed({ game }: GameEmbedProps) {
  const isPlaceholder = game.embedUrl === "about:blank";
  const panelRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    function handleFullscreenChange() {
      setIsFullscreen(document.fullscreenElement === panelRef.current);
    }

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  async function toggleFullscreen() {
    if (!panelRef.current) {
      return;
    }

    if (document.fullscreenElement === panelRef.current) {
      await document.exitFullscreen();
      return;
    }

    await panelRef.current.requestFullscreen();
  }

  return (
    <div className="embed-panel" ref={panelRef}>
      <div className="embed-toolbar">
        <span>{game.title}</span>
        <button onClick={toggleFullscreen} type="button">
          {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
        </button>
      </div>
      <div className="embed-shell">
        {isPlaceholder ? (
          <div className="embed-placeholder">
            <span>Game player</span>
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
    </div>
  );
}
