import Image from "next/image";

export default function DetailsPrimary({ video }) {
  const {
    videoURL,
    videoTitle,
    views,
    publishedDate,
    likes,
    dislikes,
    channelAvatar,
    categories,
    channelName,
  } = video;
  return (
    <section class="lg:col-span-8">
      <div class="relative aspect-video rounded-xl overflow-hidden bg-black ring-1 ring-white/10">
        <iframe
          id="videoPlayer"
          class="w-full h-full"
          title="Video player"
          src={videoURL.replace("watch?v=", "embed/")}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen=""
        ></iframe>
      </div>

      <div class="mt-4">
        <h1 id="videoTitle" class="text-lg sm:text-xl font-medium leading-snug">
          {videoTitle}
        </h1>

        <div class="mt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div id="videoMeta" class="text-sm text-gray-400">
            <span id="viewCount">{views}</span>
            <span class="mx-1">•</span>
            <span id="publishTime">{publishedDate}</span>
          </div>

          <div class="flex items-center gap-2">
            <div class="inline-flex items-center rounded-full border border-[#303030] overflow-hidden bg-[#1f1f1f]">
              <button
                class="px-4 py-2 flex items-center gap-2 hover:bg-[#262626] transition-colors"
                type="button"
                aria-label="Like"
              >
                <svg
                  class="w-5 h-5 text-gray-200"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9A2 2 0 0 0 19.68 9H14z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
                  ></path>
                </svg>
                <span id="likeCount" class="text-sm font-medium text-[#e5e5e5]">
                  {likes}
                </span>
              </button>
              <div class="w-px h-8 bg-[#303030]"></div>
              <button
                class="px-4 py-2 flex items-center gap-2 hover:bg-[#262626] transition-colors"
                type="button"
                aria-label="Dislike"
              >
                <svg
                  class="w-5 h-5 text-gray-200"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7L2.34 12a2 2 0 0 0 1.98 3H10z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 2h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-3"
                  ></path>
                </svg>
                <span
                  id="dislikeCount"
                  class="text-sm font-medium text-[#e5e5e5]"
                >
                  {dislikes}
                </span>
              </button>
            </div>
          </div>
        </div>

        <div class="mt-4 flex items-center justify-between gap-3">
          <div class="flex items-center gap-3 min-w-0">
            <Image
              id="channelAvatar"
              src={channelAvatar}
              alt="GreatStack avatar"
              class="w-10 h-10 rounded-full object-cover bg-[#262626] ring-1 ring-white/10 flex-shrink-0"
              loading="lazy"
              width={40}
              height={40}
            />
            <div class="min-w-0">
              <p id="channelTitle" class="font-medium leading-tight truncate">
                {channelName}
              </p>
              <p class="text-xs text-gray-400">Publisher</p>
            </div>
          </div>
        </div>

        <div class="mt-4">
          <div class="bg-[#1f1f1f] border border-[#262626] rounded-xl p-4">
            <p
              id="videoDescription"
              class="text-sm text-gray-200 whitespace-pre-line line-clamp-3 flex gap-5"
            >
              <span>Categories:</span>{" "}
              {categories.map((list, i) => (
                <li key={i}>{list}</li>
              ))}
            </p>
            <button
              id="toggleDescription"
              class="mt-3 text-sm font-medium text-gray-300 hover:text-white"
              type="button"
            >
              Show more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
