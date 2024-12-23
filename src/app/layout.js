import "./globals.css";
// css import for react bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

export const metadata = {
  title: "B00K plus MEANING",
  description: "Generated by adil dyer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
         {/* link for the react-bootstrap */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
