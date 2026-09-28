/** Public assets need the same prefix as Next.js routes on project sites. */
export function assetPath(path: string) {
  if (/^(https?:|mailto:)/.test(path)) return path;
  const base = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");
  return `${base}/${path.replace(/^\//, "")}`;
}
