import Link from "next/link";
export default function NotFound() {
  return (
    <div className="wrap not-found">
      <p className="eyebrow">404</p>
      <h1>Page not found.</h1>
      <p>This page may have moved or does not exist.</p>
      <Link className="text-link" href="/">
        Return home ↗
      </Link>
    </div>
  );
}
