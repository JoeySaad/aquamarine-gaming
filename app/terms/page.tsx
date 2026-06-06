import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms | Aquamarine Gaming"
};

export default function TermsPage() {
  return (
    <article className="legal-page">
      <p className="section-label purple">Terms</p>
      <h1>Terms of Use</h1>
      <p>
        Aquamarine Gaming is provided as a lightweight game portal template for
        browser-playable games.
      </p>
      <h2>Use of games</h2>
      <p>
        Game listings and embeds are placeholders until replaced with your own
        approved builds or iframe URLs. Make sure you have permission to publish
        any game assets or third-party embeds you add.
      </p>
      <h2>No accounts or payments</h2>
      <p>
        This starter version does not provide accounts, purchases, subscriptions,
        leaderboards, or analytics.
      </p>
    </article>
  );
}
