export const cacheVideo = async (videoUrl: string): Promise<void> => {
  if (!("caches" in window)) return;

  try {
    const cache = await caches.open("video-cache");
    const response = await cache.match(videoUrl);

    if (!response) {
      const videoResponse = await fetch(videoUrl);
      await cache.put(videoUrl, videoResponse.clone());
    }
  } catch (error) {
    console.error("Video caching failed:", error);
  }
};

export const getVideoFromCache = async (videoUrl: string): Promise<string> => {
  if (!("caches" in window)) return videoUrl;

  try {
    const cache = await caches.open("video-cache");
    const response = await cache.match(videoUrl);

    if (response) {
      const blob = await response.blob();
      return URL.createObjectURL(blob);
    }
  } catch (error) {
    console.error("Video cache retrieval failed:", error);
  }

  return videoUrl;
};
