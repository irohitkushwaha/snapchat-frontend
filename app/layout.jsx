import "./globals.css";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta 
          httpEquiv="Content-Security-Policy" 
          content="default-src 'self'; connect-src 'self' https://api.snapvideodownloader.com; media-src 'self' https://cf-st.sc-cdn.net; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:;" 
        />
      </head>
      <body>
        <header>
          <Header />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
