export async function generateMetadata() {
    return {
      title: "Terms and Conditions - Snapchat Video Story Downloader",
      description:
        "Terms of use for our free Snapchat video and story downloader. Understand your rights, responsibilities, and service limitations when using our download tool.",
      robots: "index, follow",
    };
  }
  
  import React from "react";
  import {
    FileText,
    Shield,
    AlertTriangle,
    Users,
    Download,
    Lock,
    Eye,
    Mail,
    CheckCircle,
    XCircle,
  } from "lucide-react";
  
  export default function TermsAndConditions() {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Terms and Conditions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple rules for using our Snapchat video and story downloader
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </header>
  
          {/* Important Notice */}
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
            <div className="flex items-start">
              <FileText className="w-6 h-6 text-blue-400 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h2 className="text-lg font-semibold text-blue-800 mb-2">
                  Agreement to Terms
                </h2>
                <p className="text-blue-700">
                  By using our Snapchat downloader service, you agree to these terms. 
                  Please read them carefully before using our service.
                </p>
              </div>
            </div>
          </div>
  
          {/* Main Content */}
          <div className="space-y-8">
            {/* What You Can Do */}
            <section className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">
                  What You Can Do
                </h2>
              </div>
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="font-semibold text-green-800 mb-3">
                  ✅ Allowed Uses:
                </h3>
                <ul className="space-y-2 text-green-700">
                  <li>• Download Snapchat videos and stories for personal use</li>
                  <li>• Save content you have permission to download</li>
                  <li>• Use our service for free without registration</li>
                  <li>• Share our website with friends</li>
                  <li>• Access our service from any device</li>
                </ul>
              </div>
            </section>
  
            {/* What You Cannot Do */}
            <section className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <XCircle className="w-6 h-6 text-red-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">
                  What You Cannot Do
                </h2>
              </div>
              <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                <h3 className="font-semibold text-red-800 mb-3">
                  ❌ Prohibited Uses:
                </h3>
                <ul className="space-y-2 text-red-700">
                  <li>• Download content without permission from the creator</li>
                  <li>• Use our service for commercial purposes</li>
                  <li>• Attempt to hack, spam, or abuse our system</li>
                  <li>• Violate Snapchat's terms of service</li>
                  <li>• Distribute copyrighted content illegally</li>
                  <li>• Use automated tools or bots</li>
                  <li>• Resell or redistribute our service</li>
                </ul>
              </div>
            </section>
  
            {/* Service Description */}
            <section className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <Download className="w-6 h-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Our Service
                </h2>
              </div>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">
                    What We Provide:
                  </h3>
                  <ul className="space-y-1 text-blue-700 text-sm">
                    <li>• Free Snapchat video and story downloader</li>
                    <li>• High-quality downloads</li>
                    <li>• No registration required</li>
                    <li>• Fast processing</li>
                    <li>• Works on all devices</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-yellow-800 mb-2">
                    Service Limitations:
                  </h3>
                  <ul className="space-y-1 text-yellow-700 text-sm">
                    <li>• Only works with public Snapchat content</li>
                    <li>• Subject to Snapchat's availability</li>
                    <li>• Download speeds may vary</li>
                    <li>• Service may be temporarily unavailable</li>
                  </ul>
                </div>
              </div>
            </section>
  
            {/* User Responsibilities */}
            <section className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Your Responsibilities
                </h2>
              </div>
              <div className="space-y-4">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-800 mb-2">
                    Content Responsibility:
                  </h3>
                  <ul className="space-y-1 text-purple-700 text-sm">
                    <li>• Ensure you have permission to download content</li>
                    <li>• Respect creators' rights and privacy</li>
                    <li>• Follow copyright laws</li>
                    <li>• Use downloads ethically and legally</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Account Behavior:
                  </h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Use our service responsibly</li>
                    <li>• Don't overload our servers</li>
                    <li>• Report any issues to us</li>
                    <li>• Respect other users</li>
                  </ul>
                </div>
              </div>
            </section>
  
            {/* Legal Disclaimers */}
            <section className="bg-red-50 rounded-lg p-8 border border-red-200">
              <div className="flex items-start">
                <AlertTriangle className="w-6 h-6 text-red-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-red-900 mb-4">
                    Important Legal Information
                  </h2>
                  <div className="space-y-4">
                    <div className="bg-red-100 p-4 rounded-lg">
                      <h3 className="font-semibold text-red-800 mb-2">
                        No Liability:
                      </h3>
                      <p className="text-red-700 text-sm">
                        We provide this service "as is" without warranties. We're not responsible 
                        for how you use downloaded content or any legal issues that arise.
                      </p>
                    </div>
                    <div className="bg-red-100 p-4 rounded-lg">
                      <h3 className="font-semibold text-red-800 mb-2">
                        Third-Party Content:
                      </h3>
                      <p className="text-red-700 text-sm">
                        All downloaded content belongs to its original creators. We don't own, 
                        control, or take responsibility for any downloaded material.
                      </p>
                    </div>
                    <div className="bg-red-100 p-4 rounded-lg">
                      <h3 className="font-semibold text-red-800 mb-2">
                        Service Availability:
                      </h3>
                      <p className="text-red-700 text-sm">
                        Our service may be interrupted or discontinued at any time. We don't 
                        guarantee continuous availability.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
  
            {/* Privacy */}
            <section className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Privacy & Data
                </h2>
              </div>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">
                    Our Promise:
                  </h3>
                  <ul className="space-y-1 text-green-700 text-sm">
                    <li>• We don't store your downloads</li>
                    <li>• No registration or login required</li>
                    <li>• Minimal data collection</li>
                    <li>• All processing is temporary</li>
                  </ul>
                </div>
                <p className="text-gray-700 text-sm">
                  For complete privacy details, please read our{" "}
                  <a href="/privacy-policy" className="text-blue-600 hover:underline">
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
            </section>
  
            {/* Updates to Terms */}
            <section className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <Eye className="w-6 h-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Changes to Terms
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-gray-700">
                  We may update these terms occasionally. When we do:
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <ul className="space-y-1 text-blue-700 text-sm">
                    <li>• We'll update the date at the top</li>
                    <li>• We'll post a notice on our website</li>
                    <li>• Continued use means you accept the new terms</li>
                    <li>• You can always find the current version here</li>
                  </ul>
                </div>
              </div>
            </section>
  
            {/* Termination */}
            <section className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <Lock className="w-6 h-6 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Account Termination
                </h2>
              </div>
              <div className="space-y-4">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-orange-800 mb-2">
                    We May Block Access If:
                  </h3>
                  <ul className="space-y-1 text-orange-700 text-sm">
                    <li>• You violate these terms</li>
                    <li>• You abuse our service</li>
                    <li>• You use automated tools</li>
                    <li>• You engage in illegal activities</li>
                  </ul>
                </div>
                <p className="text-gray-700 text-sm">
                  You can stop using our service at any time. No data is stored, 
                  so there's nothing to delete.
                </p>
              </div>
            </section>
  
            {/* Contact Information */}
            <section className="bg-blue-50 rounded-lg p-8 border border-blue-200 text-center">
              <div className="flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-blue-900">
                  Questions About Terms?
                </h2>
              </div>
              <p className="text-blue-700 mb-6">
                If you have questions about these terms or need clarification, 
                contact us anytime.
              </p>
              <div className="space-y-4">
                <p className="text-blue-800 font-medium">
                  Email:{" "}
                  <span className="font-normal">
                    legal@snapchatdownloader.com
                  </span>
                </p>
                <a href="/contact-us" className="inline-block">
                  <button className="bg-blue-600 text-white font-medium px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">
                    Contact Support
                  </button>
                </a>
              </div>
            </section>
          </div>
  
          {/* Footer Disclaimer */}
          <div className="mt-12 p-6 bg-gray-100 rounded-lg">
            <p className="text-sm text-gray-600 text-center">
              <strong>Legal Clarity:</strong> These terms are written in simple language 
              to help you understand your rights and responsibilities. We believe in 
              transparency and fair use.
            </p>
          </div>
        </div>
      </div>
    );
  }