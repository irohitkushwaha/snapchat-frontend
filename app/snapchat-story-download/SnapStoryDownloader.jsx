"use client";

import { useState } from "react";
import {
  fetchSnapchatData,
  downloadVideoFromUrl,
} from "@/api/snapchatdownloading";
import {
  Download,
  Play,
  Pause,
  Maximize,
  Sparkles,
  Video,
  Image,
} from "lucide-react";

// Custom styled play icon similar to your reference image
const StyledPlayIcon = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor">
    <path d="M20 85 L20 15 L80 50 Z" />
  </svg>
);

const SnapchatStoryDownloader = () => {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [storyData, setStoryData] = useState(null);
  const [error, setError] = useState("");

  const validateUrl = (inputUrl) => {
    // Check if it's a username, profile link, or story URL
    return (
      inputUrl.includes("snapchat.com/add/") ||
      inputUrl.includes("snapchat.com/t/") ||
      inputUrl.includes("snapchat.com") ||
      /^[a-zA-Z0-9._-]+$/.test(inputUrl.trim()) // Just username
    );
  };

  const handleDownload = async () => {
    if (!url.trim()) {
      setError(
        "Please enter a valid Snapchat username, profile link, or story URL"
      );
      return;
    }

    if (!validateUrl(url)) {
      setError(
        "Please enter a valid Snapchat username, profile link, or story URL"
      );
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const response = await fetchSnapchatData(url);
      console.log("response for story is", response);
      if (response && response.length > 0) {
        console.log("response length is", response.length);
        setStoryData(response);
      } else {
        console.log("execute no else");
        setError("No video found for the given URL.");
        setStoryData(null);
      }
    } catch (err) {
      console.log("error in story download", err);
      setError(
        "Failed to fetch video. Please check the URL and try again.",
        err
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleMediaDownload = async (media) => {
    if (!media?.downloadUrl) return;

    try {
     downloadVideoFromUrl(media.downloadUrl);
    } catch (err) {
      console.log("error in media download", err);
      setError("Failed to download media. Please try again.", err);
    }
  };

  const resetForm = () => {
    setUrl("");
    setStoryData(null);
    setError("");
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 mt-6">
          <div className="flex items-center justify-center mb-10">
            <StyledPlayIcon className="w-8 h-8 text-white md:mr-6 mr-3 mt-1" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Snapchat Story Downloader
            </h1>
          </div>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Download anyone's public Snapchat story (images & videos from last
            24 hours) by entering their username, profile link, or story URL.
            Quick, easy, and completely free!
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:mx-auto gap-8 mb-12 w-full">
          {/* Left Panel - Input */}
          <div className="space-y-6 w-full">
            {/* URL Input */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
              <label className="block text-sm font-medium text-slate-200 mb-4">
                Enter Snapchat Username, Profile Link, or Story URL
              </label>

              <div className="space-y-4">
                <textarea
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="username OR https://www.snapchat.com/add/username OR https://www.snapchat.com/t/story_url"
                  rows={3}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl text-slate-200 placeholder-slate-400 focus:ring-2 focus:ring-purple-400 focus:border-transparent resize-none"
                  disabled={isLoading}
                />

                {error && (
                  <div className="text-red-400 text-sm p-3 bg-red-900/20 border border-red-800 rounded-lg">
                    {error}
                  </div>
                )}
              </div>
            </div>

            {/* Download Button */}
            <button
              onClick={handleDownload}
              disabled={isLoading || !url.trim()}
              className="w-full bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 disabled:cursor-not-allowed cursor-pointer"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Fetching Story...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  <span>Get Story</span>
                </>
              )}
            </button>
          </div>

          {/* Right Panel - Story Media */}
          {storyData && (
            <div className="w-full bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-slate-200">
                  Story Media ({storyData.length} items)
                </h3>
                <button
                  onClick={resetForm}
                  className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
                >
                  Download New
                </button>
              </div>

              <div className="flex flex-wrap gap-10 justify-center w-full">
                {storyData.map((media, index) => (
                  <div key={media.snapId} className="w-full max-w-[300px]">
                    <div className="aspect-[9/16] bg-slate-900/50 rounded-xl flex items-center justify-center border border-slate-600/50 mb-3 overflow-hidden">
                      {media.mediaType === 1 ? (
                        <video
                          src={media.mediaUrl}
                          className="w-full h-full object-cover rounded-xl"
                          controls
                          muted
                        >
                          Your browser does not support the video tag.
                        </video>
                      ) : (
                        <img
                          src={media.mediaUrl}
                          alt={`Story ${index + 1}`}
                          className="w-full h-full object-cover rounded-xl"
                        />
                      )}
                    </div>

                    {/* Individual Download Button */}
                    <button
                      onClick={() => handleMediaDownload(media)}
                      className="w-full bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white font-semibold py-2 px-4 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 text-sm"
                    >
                      <Download className="w-4 h-4" />
                      <span>{media.mediaType === 1 ? "Video" : "Image"}</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* How to Guide */}
        <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 mb-12">
          <h2 className="text-2xl font-bold text-slate-200 mb-6 text-center">
            How to Download Stories from Snapchat
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center flex flex-col items-center justify-center">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-400 font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold text-slate-200 mb-2">
                Find the Username or Profile Link
              </h3>
              <p className="text-slate-400 text-sm mb-4">
                Get the Snapchat username, profile link, or story URL of the
                person whose story you want to download
              </p>
              <div className="bg-slate-900/50 rounded-xl w-[306] p-[3px] border border-slate-600/50">
                <img
                  src="/screenshot-find-username.avif"
                  alt="Screenshot for step 1 - find the username or profile link"
                  className="w-full object-cover rounded-lg border border-slate-600/50"
                />
              </div>
            </div>

            <div className="text-center flex flex-col items-center justify-center">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-400 font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold text-slate-200 mb-2">
                Paste Username/URL & Click Get Story
              </h3>
              <p className="text-slate-400 text-sm mb-4">
                Paste the username, profile link, or story URL into the input
                field above and click "Get Story"
              </p>
              <div className="bg-slate-900/50 rounded-xl w-[306] p-[3px] border border-slate-600/50">
                <img
                  src="/Screenshot-paste-username.avif"
                  alt="Screenshot for step 2 - paste username and get story"
                  className="w-full object-cover rounded-lg border border-slate-600/50"
                />
              </div>
            </div>

            <div className="text-center flex flex-col items-center justify-center">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-400 font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold text-slate-200 mb-2">
                Download Story Images & Videos
              </h3>
              <p className="text-slate-400 text-sm mb-4">
                Preview all story media and download individual images or videos
                from the last 24 hours
              </p>
              <div className="bg-slate-900/50 rounded-xl w-[306] p-[3px] border border-slate-600/50">
                <img
                  src="/Screenshot-download-story-snapchat.avif"
                  alt="Screenshot for step 3 - download story media"
                  className="w-full object-cover rounded-lg border border-slate-600/50"
                />
              </div>
            </div>
          </div>

          <div className="mt-16 p-4 bg-slate-900/50 rounded-xl border border-slate-600/50">
            <h4 className="font-semibold text-slate-200 mb-2">
              💡 Keep in mind:
            </h4>
            <ul className="text-slate-200 text-sm space-y-1">
              <li>
                • Only public stories from the last 24 hours can be downloaded
              </li>
              <li>
                • You can enter just the username (e.g., "john_doe") or full
                profile/story URL
              </li>
              <li>
                • Stories include both images and videos posted within 24 hours
              </li>
              <li>• Media is downloaded in original quality as posted</li>
              <li>• Private accounts or stories are not accessible</li>
            </ul>
          </div>
        </div>

        {/* FAQs */}
        <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
          <h2 className="text-2xl font-bold text-slate-200 mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-600/50">
              <h3 className="text-lg font-semibold text-slate-200 mb-3">
                Is it safe to download stories from Snapchat?
              </h3>
              <p className="text-slate-400">
                Yes, our tool is completely safe and secure for downloading the stories that includes images & videos from snapchat. 
              </p>
            </div>

            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-600/50">
              <h3 className="text-lg font-semibold text-slate-200 mb-3">
                In which format do images and videos get downloaded for snapchat story?
              </h3>
              <p className="text-slate-400">
                Images are downloaded in JPG format and videos in MP4 format,
                both in their original quality as posted on Snapchat stories.
              </p>
            </div>

            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-600/50">
              <h3 className="text-lg font-semibold text-slate-200 mb-3">
                Can I download stories from any Snapchat user?
              </h3>
              <p className="text-slate-400">
                You can only download publicly available stories from the last
                24 hours. Our tool doesn't allow downloading private content or
                stories from private accounts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SnapchatStoryDownloader;
