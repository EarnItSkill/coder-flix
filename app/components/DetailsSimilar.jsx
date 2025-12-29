import Link from "next/link";
import { slugify } from "../utils/slugify";
import { getRelatedVideos } from "../utils/videoUtils";
import RelatedVedios from "./RelatedVedios";

export default async function DetailsSimilar({ video }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/videos`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch videos");
  }
  const videos = await res.json();

  const related = getRelatedVideos(video, videos, 10);

  return (
    <aside class="lg:col-span-4">
      <h2 class="text-base font-medium mb-4">Similar videos</h2>
      <div id="similarVideos" class="space-y-3" aria-live="polite">
        {related.map((video, i) => (
          <Link
            key={i}
            href={`/video/${slugify(video.videoTitle)}`}
            className="group flex gap-3 rounded-xl hover:bg-white/5 transition-colors p-2 -m-2"
          >
            <RelatedVedios video={video} />
          </Link>
        ))}
      </div>
    </aside>
  );
}
