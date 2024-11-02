import "./globals.css";

export const metadata = {
  title: "Hack TX 2024",
  description: "Hack TX 2024 Submission",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
