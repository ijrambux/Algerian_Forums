import "../styles/globals.css";

export const metadata = {
  title: "Algerian_Forums",
  description: "Modern Algerian community forum",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        <header className="py-6 text-center">
          <h1 className="text-5xl font-bold animate-glow">Algerian_Forums</h1>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
