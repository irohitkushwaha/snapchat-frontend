export async function generateMetadata() {
    return {
      title: "About Us - Snapchat Video/Story Downloader",
      description: "Learn about our free Snapchat Spotlight and Story downloader. Fast, secure, and easy to use - no login required. Save your favorite Snapchat videos instantly.",
      robots: "index, follow"
    };
  }
export default function AboutUs() {
  return (
    <div className="relative w-full mx-auto px-6 py-12 bg-white">
      <h1 className="text-4xl mx-auto max-w-4xl font-bold text-gray-900 border-b-4 border-yellow-500 pb-4 mb-12">
        About Us - Snapchat Video/Story Downloader
      </h1>
      <div className="space-y-10 mx-auto max-w-4xl">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-8">
          <p className="text-gray-800 leading-relaxed text-[18px]">
            We provide a simple, fast, and secure way to download Snapchat Spotlight videos and Stories. 
            Save your favorite content with just a few clicks.
          </p>
        </section>

        {/* What We Do */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            What We Do
          </h2>
          <p className="text-gray-700 mb-4">
            Our platform makes it easy to download Snapchat content:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded mr-3 mt-1">
                FAST
              </span>
              <div>
                <strong className="text-gray-800">
                  Spotlight Videos
                </strong>{" "}
                - Download public Spotlight videos in high quality
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded mr-3 mt-1">
                EASY
              </span>
              <div>
                <strong className="text-gray-800">Story Downloads</strong> -
                Save Stories quickly and safely
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded mr-3 mt-1">
                SAFE
              </span>
              <div>
                <strong className="text-gray-800">No Login Required</strong> -
                Download without sharing your account details
              </div>
            </li>
          </ul>
        </section>

        {/* Why Choose Our Service */}
        <section className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Why Choose Our Downloader
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">
                Key Features:
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                  100% Free to use
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                  High quality downloads
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                  No registration needed
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                  Works on all devices
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                  Fast processing
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">
                Perfect for:
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Saving favorite videos
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Backing up memories
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Sharing with friends
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Content creation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Offline viewing
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-yellow-50 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-yellow-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                1
              </div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">
                Copy Link
              </h3>
              <p className="text-gray-700">
                Copy the Snapchat video or story URL from your app
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                2
              </div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">
                Paste & Process
              </h3>
              <p className="text-gray-700">
                Paste the link in our downloader and click process
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                3
              </div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">
                Download
              </h3>
              <p className="text-gray-700">
                Click download and save the video to your device
              </p>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            We believe everyone should be able to save and enjoy their favorite Snapchat content. 
            Our goal is to provide a simple, secure, and reliable way to download Snapchat videos and stories.
          </p>
        </section>

        {/* Privacy & Security */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Privacy & Security
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Your privacy is important to us. We don't store your downloads or personal information. 
            All processing happens securely, and we never ask for your Snapchat login details.
          </p>
          <div className="bg-red-50 border-l-4 border-red-500 p-4">
            <p className="text-red-800 font-medium">
              Important: Only download content you have permission to save. Respect others' privacy and follow Snapchat's terms of service.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-gray-900 text-white rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-4">
            Ready to start downloading?
          </h2>
          <p className="text-gray-300 mb-6">
            Try our free Snapchat downloader now - no registration required.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a href="/">
              <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-medium px-6 py-3 rounded-lg transition-colors">
                Start Downloading
              </button>
            </a>
            
          </div>
        </section>
      </div>
    </div>
  );
}