import Image from "next/image";

export default function RelatedVedios({ video }) {
  const {
    thumbnailURL,
    duration,
    videoTitle,
    channelName,
    views,
    publishedDate,
  } = video;
  return (
    <>
      <div class="relative w-40 sm:w-44 aspect-video flex-shrink-0 rounded-xl overflow-hidden bg-[#262626] ring-1 ring-white/5">
        <Image
          src={thumbnailURL}
          alt="How to Build an ENTIRE iPhone/Android App From Scratch (AI + No code) | Rork AI"
          loading="lazy"
          class="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
          height={100}
          width={100}
        />
        <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0"></div>
        <div class="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs font-medium px-1.5 py-0.5 rounded">
          {duration}
        </div>
      </div>
      <div class="flex-1 min-w-0">
        <p class="font-medium text-sm leading-tight line-clamp-2 group-hover:text-[#e50914] transition-colors">
          {videoTitle}
        </p>
        <p class="text-xs text-gray-400 mt-1 truncate">{channelName}</p>
        <div class="flex items-center gap-1 text-xs text-gray-400 mt-0.5">
          <span>{views}</span>
          <span>•</span>
          <span>{publishedDate}</span>
        </div>
      </div>
    </>
  );
}
