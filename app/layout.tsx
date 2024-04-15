// Import necessary modules and components
import "./global.css";
import type { Metadata } from "next";

// Define metadata for the page
export const metadata: Metadata = {
  title: "bien-aimé",
  description: "defining Luxury Est. 2024",
};

// Define the RootLayout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
      </head>
      <body>
        <main className="grow">
          {/* Render the child components */}

          {children}
        </main>
      </body>
    </html>
  );
}
