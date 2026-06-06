import Link from "next/link";

export function BrandLogo() {
  return (
    <Link className="brand" href="/" aria-label="Aquamarine Gaming home">
      <span className="brand-mark" aria-hidden="true">
        <span className="pad-line" />
        <span className="pad-dot left" />
        <span className="pad-dot right" />
      </span>
      <span>Aquamarine Gaming</span>
    </Link>
  );
}
