/**
 * Get related videos based on shared categories
 * @param {Object} currentVideo - currently viewed video
 * @param {Array} allVideos - all videos list
 * @param {number} limit - how many related videos to return
 * @returns {Array}
 */
export function getRelatedVideos(currentVideo, allVideos, limit = 5) {
  if (!currentVideo || !Array.isArray(allVideos)) return [];

  const currentCategories = new Set(currentVideo.categories || []);

  const scored = allVideos
    .filter((v) => v.videoTitle !== currentVideo.videoTitle) // exclude itself
    .map((video) => {
      const overlap =
        video.categories?.filter((cat) => currentCategories.has(cat)).length ||
        0;

      //   const overlap =
      //     video.categories.filter((cat) =>
      //       currentCategories.has(cat.toLowerCase())
      //     ).length || 0;

      return { ...video, _score: overlap };
    })
    .filter((v) => v._score > 0) // must share at least one category
    .sort((a, b) => b._score - a._score) // more overlap first
    .slice(0, limit);

  return scored;
}
