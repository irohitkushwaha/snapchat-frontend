import SnapchatDownloader from "./SnapVideoDownloader";
export async function generateMetadata() {
  return {
    title: "Snapchat Video Downloader : Download any Snapchat Video",
    description:
      "Download any Snapchat Video by entering the snapchat video url. Quick, easy, and completely free!",
    robots: "index, follow",
    openGraph: {
      type: "website",
      url: "https://snapchatdownloader.com",
      title: "Snapchat Video Downloader : Download any Snapchat Video",
      description:
        "Download any Snapchat Video by entering the snapchat video url. Quick, easy, and completely free!",
      images: ["/snap-video-downloader-logo.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: "Snapchat Video Downloader : Download any Snapchat Video",
      description:
        "Download any Snapchat Video by entering the snapchat video url. Quick, easy, and completely free!",
      image: "/snap-video-downloader-logo.png",
    },
  };
}

function Homepage() {
  return <SnapchatDownloader />;
}

export default Homepage;
