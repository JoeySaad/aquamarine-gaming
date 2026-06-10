import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Aquamarine Gaming"
};

export default function PrivacyPage() {
  return (
    <article className="legal-page">
      <p className="section-label purple">Policy</p>
      <h1>Privacy Policy</h1>
      <p>
        Aquamarine Gaming is currently a simple browser game portal. This starter
        site does not include authentication, payments, databases, or analytics.
      </p>
      <h2>Information collection</h2>
      <p>
        Embedded games may have their own behavior once you connect real game
        builds. Review any game provider requirements before publishing.
      </p>
      <h2>Future updates</h2>
      <p>
        If data collection features are added later, update this policy before
        launch so players understand what is collected and why.
      </p>
    </article>
  );
}
