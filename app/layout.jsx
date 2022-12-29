import "../styles/globals.css";
import AnalyticsWrapper from "./analytics.jsx";
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth hover:scroll-auto">
      <head />
      <body className="bg-black font-montserrat">{children}</body>
      <AnalyticsWrapper />
    </html>
  );
}
