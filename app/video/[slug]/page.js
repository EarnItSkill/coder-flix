import DetailsPrimary from "@/app/components/DetailsPrimary";
import DetailsSimilar from "@/app/components/DetailsSimilar";
import { slugify } from "@/app/utils/slugify";
import { notFound } from "next/navigation";

export default async function VideoPage({ params }) {
  const { slug } = params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/videos`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch videos");
  }

  const videos = await res.json();

  const video = videos.find((v) => slugify(v.videoTitle) === slug);

  if (!video) return notFound();

  return (
    <main class="px-4 py-6 md:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          <DetailsPrimary video={video} />
          <DetailsSimilar video={video} />
          {/* <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">{video.videoTitle}</h1>

            <iframe
              className="w-full aspect-video rounded"
              src={video.videoURL.replace("watch?v=", "embed/")}
              allowFullScreen
            />

            <p className="mt-4 text-gray-600">
              {video.views} • {video.publishedDate}
            </p>

            <p className="mt-2">{video.description}</p>
          </div> */}
        </div>
      </div>
    </main>
  );
}
