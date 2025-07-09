"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

// Mock function for preview
const submitContactForm = async (data) => {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log("Form submitted:", data);
};

export default function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
    clearErrors,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const [submitStatus, setSubmitStatus] = useState(null);

  const onSubmit = async (data) => {
    setSubmitStatus(null);
    clearErrors();

    try {
      await submitContactForm(data);
      setSubmitStatus("success");
      reset();
    } catch (error) {
      setSubmitStatus("error");
      console.error("Contact form submission error:", error);
    }
  };

  return (
    <div className="relative w-full mx-auto px-6 py-12 bg-white">
      <h1 className="text-4xl mx-auto max-w-4xl font-bold text-gray-900 border-b-4 border-yellow-500 pb-4 mb-12">
        Contact Us - Snapchat Video/Story Downloader
      </h1>

      <div className="space-y-10 mx-auto max-w-4xl">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-8">
          <p className="text-gray-800 leading-relaxed text-[18px]">
            Have questions about our Snapchat downloader? Need help with
            downloading videos or stories? We're here to help! Send us a message
            and we'll get back to you as soon as possible.
          </p>
        </section>

        {/* Contact Form */}
        <section className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Send us a Message
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name", {
                    required: "Full name is required",
                    minLength: {
                      value: 2,
                      message: "Name must be at least 2 characters",
                    },
                  })}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email", {
                    required: "Email address is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Please enter a valid email address",
                    },
                  })}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Subject *
              </label>
              <select
                id="subject"
                {...register("subject", {
                  required: "Please select a subject",
                })}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors ${
                  errors.subject ? "border-red-500" : "border-gray-300"
                }`}
              >
                <option value="">Select a subject</option>
                <option value="technical-support">Technical Support</option>
                <option value="download-issues">Download Issues</option>
                <option value="feature-request">Feature Request</option>
                <option value="bug-report">Bug Report</option>
                <option value="general-inquiry">General Inquiry</option>
                <option value="privacy-concern">Privacy Concern</option>
                <option value="other">Other</option>
              </select>
              {errors.subject && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.subject.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message *
              </label>
              <textarea
                id="message"
                {...register("message", {
                  required: "Message is required",
                  minLength: {
                    value: 10,
                    message: "Message must be at least 10 characters",
                  },
                })}
                rows={6}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors resize-vertical ${
                  errors.message ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Tell us how we can help you..."
              ></textarea>
              {errors.message && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            {submitStatus === "success" && (
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                <p className="text-green-800 font-medium">
                  Thank you for your message! We'll get back to you within 24
                  hours.
                </p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                <p className="text-red-800 font-medium">
                  Sorry, there was an error sending your message. Please try
                  again or contact us directly.
                </p>
              </div>
            )}

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-yellow-600 hover:bg-yellow-700 disabled:bg-gray-400 text-white font-medium px-8 py-3 rounded-lg transition-colors flex items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
          </form>
        </section>

        {/* Contact Information */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Other Ways to Reach Us
          </h2>

          <div className=" gap-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center">
                <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3">
                  📧
                </span>
                Email Support
              </h3>
              <p className="text-gray-700 mb-3">
                For direct support and inquiries, email us at:
              </p>
              <a
                href="mailto:contact@snapvideodownloader.com"
                className="text-blue-600 hover:text-blue-800 font-medium text-lg"
              >
                contact@snapvideodownloader.com
              </a>
              <p className="text-gray-600 text-sm mt-2">
                We typically respond within 24 hours
              </p>
            </div>
          </div>
        </section>


        {/* CTA */}
        <section className="text-center bg-gray-900 text-white rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold mb-4">
            Ready to start downloading?
          </h2>
          <p className="text-gray-300 mb-6">
            Try our free Snapchat downloader while you wait for our response.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a href="/">
              <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-medium px-6 py-3 rounded-lg transition-colors">
                Start Downloading
              </button>
            </a>
            <a href="/about-us">
              <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-medium px-6 py-3 rounded-lg transition-colors">
                Learn More
              </button>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
