import Link from "next/link";
import { BrandLogo } from "./BrandLogo";

export function Header() {
  return (
    <header className="site-header">
      <BrandLogo />
      <nav className="nav-links" aria-label="Primary navigation">
        <Link href="/games">Library</Link>
        <Link href="/#feedback">Feedback</Link>
      </nav>
    </header>
  );
}
