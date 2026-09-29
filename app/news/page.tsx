import type { Metadata } from "next";
import Link from "next/link";
import { NewsList } from "@/components/news-list";
export const metadata: Metadata = { title: "News" };
export default function NewsPage() {
  return <div className="wrap news-page"><Link className="text-link" href="/#news">← Home</Link><header><h1>News</h1></header><NewsList all /></div>;
}
