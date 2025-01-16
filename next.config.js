module.exports = {
  async headers() {
    return [
      {
        source: "/wavescom-mobile.mp4",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};
