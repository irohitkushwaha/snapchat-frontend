export async function generateMetadata() {
  return {
    title: "Privacy Policy - Snapchat Video Story Downloader",
    description:
      "Learn how we protect your privacy when using our Snapchat video and story downloader tool. Understand our data handling, storage policies, and user privacy protection measures.",
    robots: "index, follow",
  };
}
import React from "react";
import {
  Shield,
  Eye,
  Database,
  Lock,
  Users,
  Mail,
  AlertCircle,
  FileText,
  Download,
  Trash2,
} from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Privacy Policy for Snapchat Video Downloader
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            How we protect your privacy when using our Snapchat downloader
            service
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </header>

        {/* Important Notice */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
          <div className="flex items-start">
            <Shield className="w-6 h-6 text-yellow-400 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h2 className="text-lg font-semibold text-yellow-800 mb-2">
                Your Privacy Matters
              </h2>
              <p className="text-yellow-700">
                We don't store your downloads or ask for your Snapchat login.
                This policy explains how we handle your data.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* What We DON'T Collect */}
          <section className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
            <div className="flex items-center mb-4">
              <Trash2 className="w-6 h-6 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">
                What We DON'T Collect
              </h2>
            </div>
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-800 mb-3">
                ✅ We Never Ask For:
              </h3>
              <ul className="space-y-2 text-green-700">
                <li>• Your Snapchat username or password</li>
                <li>• Personal information or account details</li>
                <li>• Access to your Snapchat account</li>
                <li>• Your contact information</li>
                <li>• We don't store your downloaded videos or images</li>
                <li>• We don't keep logs of what you download</li>
              </ul>
            </div>
          </section>

          {/* What We DO Collect */}
          <section className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
            <div className="flex items-center mb-4">
              <Database className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">
                What We DO Collect
              </h2>
            </div>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-3">
                  Basic Technical Information:
                </h3>
                <ul className="space-y-1 text-blue-700 text-sm">
                  <li>• Your IP address (for security)</li>
                  <li>• Browser type and device info</li>
                  <li>• Time and date of visits</li>
                  <li>• General location (country/region only)</li>
                  <li>• How you use our website</li>
                </ul>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-semibold text-yellow-800 mb-3">
                  Snapchat Links:
                </h3>
                <ul className="space-y-1 text-yellow-700 text-sm">
                  <li>• URLs you submit for processing</li>
                  <li>• Processed temporarily and deleted immediately</li>
                  <li>• Never stored permanently</li>
                  <li>• Used only to fetch the video or image for you</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Information */}
          <section className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
            <div className="flex items-center mb-4">
              <Eye className="w-6 h-6 text-purple-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">
                How We Use Your Information
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-800 mb-2">
                  Service Functions:
                </h3>
                <ul className="space-y-1 text-purple-700 text-sm">
                  <li>• Process your download requests</li>
                  <li>• Ensure service works properly</li>
                  <li>• Prevent abuse and spam</li>
                  <li>• Fix technical issues</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">
                  Website Improvements:
                </h3>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Understand usage patterns</li>
                  <li>• Improve download speeds</li>
                  <li>• Make the site more user-friendly</li>
                  <li>• Monitor for security threats</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Data Processing */}
          <section className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
            <div className="flex items-center mb-4">
              <Download className="w-6 h-6 text-orange-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">
                How Downloads Work
              </h2>
            </div>
            <div className="space-y-4">
              <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                <h3 className="font-semibold text-orange-800 mb-3">
                  Step-by-Step Process:
                </h3>
                <ol className="space-y-2 text-orange-700 text-sm">
                  <li>1. You paste a Snapchat link on our website</li>
                  <li>2. We process the link temporarily in our servers</li>
                  <li>
                    3. We fetch the video or image from Snapchat's servers
                  </li>
                  <li>4. We provide you with a download link</li>
                  <li>5. All temporary data is deleted immediately</li>
                  <li>6. We don't keep copies of your videos or images</li>
                </ol>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <p className="text-red-800 font-medium text-sm">
                  <strong>Important:</strong> Videos or Images are processed in
                  real-time and never stored on our servers. Once you download,
                  all traces are removed.
                </p>
              </div>
            </div>
          </section>

          {/* Third Parties */}
          <section className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
            <div className="flex items-center mb-4">
              <Users className="w-6 h-6 text-indigo-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">
                Third-Party Services
              </h2>
            </div>
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h3 className="font-semibold text-green-800 mb-2">
                  ✅ We Work With:
                </h3>
                <ul className="space-y-1 text-green-700 text-sm">
                  <li>• Cloud hosting providers (to run our service)</li>
                  <li>• Analytics services (to improve performance)</li>
                  <li>• Security services (to protect against attacks)</li>
                </ul>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <h3 className="font-semibold text-red-800 mb-2">
                  ❌ We DON'T Share With:
                </h3>
                <ul className="space-y-1 text-red-700 text-sm">
                  <li>• Snapchat or other social media platforms</li>
                  <li>• Advertisers or marketing companies</li>
                  <li>• Data brokers or anyone who sells data</li>
                  <li>• Government agencies (unless legally required)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Security */}
          <section className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
            <div className="flex items-center mb-4">
              <Lock className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">
                Security Measures
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">
                  Technical Security:
                </h3>
                <ul className="space-y-1 text-blue-700 text-sm">
                  <li>• HTTPS encryption for all data</li>
                  <li>• Secure servers and databases</li>
                  <li>• Regular security updates</li>
                  <li>• DDoS protection</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-800 mb-2">
                  Data Protection:
                </h3>
                <ul className="space-y-1 text-purple-700 text-sm">
                  <li>• Immediate deletion of processed data</li>
                  <li>• No permanent storage of Images or videos</li>
                  <li>• Limited data retention</li>
                  <li>• Access controls for our systems</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Cookies */}
          <section className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
            <div className="flex items-center mb-4">
              <FileText className="w-6 h-6 text-yellow-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Cookies</h2>
            </div>
            <div className="space-y-4">
              <p className="text-gray-700">
                We use minimal cookies to make our service work:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-yellow-800 mb-2">
                    Essential Cookies
                  </h3>
                  <p className="text-yellow-700 text-sm">
                    Required for the website to function properly
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">
                    Analytics Cookies
                  </h3>
                  <p className="text-blue-700 text-sm">
                    Help us understand how to improve our service
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                You can disable cookies in your browser, but some features may
                not work properly.
              </p>
            </div>
          </section>

          {/* Your Rights */}
          <section className="bg-green-50 rounded-lg p-8 border border-green-200">
            <h2 className="text-2xl font-bold text-green-900 mb-4">
              Your Rights
            </h2>
            <div className="space-y-4 text-green-800">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">What You Can Do:</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• Use our service without registering</li>
                    <li>• Download videos or images anonymously</li>
                    <li>• Clear your browser data anytime</li>
                    <li>• Contact us with privacy questions</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Data Requests:</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• Ask what data we have (very minimal)</li>
                    <li>• Request deletion of any stored data</li>
                    <li>• Report privacy concerns</li>
                    <li>• Get clarification on this policy</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Legal Compliance */}
          <section className="bg-red-50 rounded-lg p-8 border border-red-200">
            <div className="flex items-start">
              <AlertCircle className="w-6 h-6 text-red-500 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-red-900 mb-4">
                  Important Legal Notes
                </h2>
                <div className="space-y-3 text-red-800">
                  <div className="bg-red-100 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">
                      Content Responsibility:
                    </h3>
                    <p className="text-sm">
                      You're responsible for having permission to download
                      content. Respect others' privacy and Snapchat's terms.
                    </p>
                  </div>
                  <div className="bg-red-100 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">No Liability:</h3>
                    <p className="text-sm">
                      We're not responsible for how you use downloaded content.
                      Use our service legally and ethically.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Data Retention */}
          <section className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Data Retention
            </h2>
            <div className="space-y-4 text-gray-700">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Temporary Data:
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Video or Image links and processing data are deleted
                    immediately after download (within seconds).
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Analytics Data:
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Basic usage statistics are kept for 90 days to help improve
                    our service.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Policy Changes */}
          <section className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Policy Updates
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>We may update this policy occasionally. When we do:</p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <ul className="space-y-1 text-blue-700 text-sm">
                  <li>• We'll update the date at the top</li>
                  <li>• We'll post a notice on our website</li>
                  <li>• Major changes will be clearly highlighted</li>
                  <li>• You can always find the current version here</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="bg-blue-50 rounded-lg p-8 border border-blue-200 text-center">
            <div className="flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-blue-900">
                Privacy Questions?
              </h2>
            </div>
            <p className="text-blue-700 mb-6">
              If you have questions about your privacy or this policy, contact
              us anytime.
            </p>
            <div className="space-y-4">
              <p className="text-blue-800 font-medium">
                Email:{" "}
                <span className="font-normal">
                  privacy@snapchatdownloader.com
                </span>
              </p>
              <a href="/contact" className="inline-block">
                <button className="bg-blue-600 text-white font-medium px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">
                  Contact Us
                </button>
              </a>
            </div>
          </section>
        </div>

        {/* Footer Disclaimer */}
        <div className="mt-12 p-6 bg-gray-100 rounded-lg">
          <p className="text-sm text-gray-600 text-center">
            <strong>Clear & Simple:</strong> We've written this policy in plain
            language because privacy should be easy to understand. We believe in
            transparency and minimal data collection.
          </p>
        </div>
      </div>
    </div>
  );
}
