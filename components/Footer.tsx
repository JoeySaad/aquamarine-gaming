import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <span>(c) 2026 Aquamarine Gaming</span>
      <nav aria-label="Footer navigation">
        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">Terms</Link>
      </nav>
    </footer>
  );
}
