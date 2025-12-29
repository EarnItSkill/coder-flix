import Card from "./Card";

export default async function VideoGrid() {
  const res = await fetch("http://localhost:3000/api/videos", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch videos");
  }

  const videos = await res.json();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
      {videos.map((video, index) => (
        <Card key={index} video={video} />
      ))}
    </div>
  );
}
