import ContactUs from "./contact";


export async function generateMetadata() {
    return {
      title: "Contact Us - Snapchat Video/Story Downloader",
      description: "Get in touch with our Snapchat downloader support team. We're here to help with any questions about downloading Snapchat videos and stories.",
      robots: "index, follow"
    };
  }

  export default function ContactUsPage() {
    return <ContactUs />;
  }