import "./globals.css";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; 
          connect-src 'self' https://api.snapvideodownloader.com https:; 
          media-src 'self' https://cf-st.sc-cdn.net https://*.sc-cdn.net https://*.snapchat.com; 
          script-src 'self' 'unsafe-eval' 'unsafe-inline'; 
          style-src 'self' 'unsafe-inline'; 
          img-src 'self' data: https:;"
        />
      </head>
      <body>
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
