"use client";

import { useMemo, useState } from "react";
import { categories, games } from "../data/games";
import { GameCard } from "./GameCard";

export function GameGrid() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof categories)[number]>("All");

  const filteredGames = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return games.filter((game) => {
      const matchesCategory = category === "All" || game.category === category;
      const matchesQuery =
        normalizedQuery.length === 0 ||
        game.title.toLowerCase().includes(normalizedQuery) ||
        game.shortDescription.toLowerCase().includes(normalizedQuery) ||
        game.category.toLowerCase().includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  const featuredGames = filteredGames.filter((game) => game.featured);
  const standardGames = filteredGames.filter((game) => !game.featured);

  return (
    <>
      <section className="library-tools" aria-label="Game filters">
        <label className="search-box">
          <span aria-hidden="true">/</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search games..."
            type="search"
          />
        </label>
        <div className="filter-row">
          <span className="filter-icon" aria-hidden="true" />
          {categories.map((item) => (
            <button
              key={item}
              className={item === category ? "active" : ""}
              onClick={() => setCategory(item)}
              type="button"
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      {featuredGames.length > 0 ? (
        <section className="game-section">
          <p className="section-label purple">Featured</p>
          <div className="cards-grid">
            {featuredGames.map((game) => (
              <GameCard game={game} key={game.slug} />
            ))}
          </div>
        </section>
      ) : null}

      <section className="game-section">
        <p className="section-label">All Games</p>
        {standardGames.length > 0 ? (
          <div className="cards-grid">
            {standardGames.map((game) => (
              <GameCard game={game} key={game.slug} />
            ))}
          </div>
        ) : (
          <div className="empty-state">No games match that search yet.</div>
        )}
      </section>
    </>
  );
}
