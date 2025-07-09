import SnapStoryDownloader from "./SnapStoryDownloader";
export async function generateMetadata() {
  return {
    title: "Snapchat Story Downloader : Download Story from Snapchat",
    description:
      "Download any Snapchat Story that includes images & videos by entering the snapchat story url or username or profile link.",
    robots: "index, follow",
    openGraph: {
      type: "website",
      url: "https://snapchatdownloader.com",
      title: "Snapchat Story Downloader : Download Story from Snapchat",
      description:
        "Download any Snapchat Story that includes images & videos by entering the snapchat story url or username or profile link.",
      images: ["/snap-video-downloader-logo.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: "Snapchat Story Downloader : Download Story from Snapchat",
      description:
        "Download any Snapchat Story that includes images & videos by entering the snapchat story url or username or profile link.",
      image: "/snap-video-downloader-logo.png",
    },
  };
}

function Homepage() {
  return <SnapStoryDownloader />;
}

export default Homepage;
