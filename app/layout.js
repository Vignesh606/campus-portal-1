import "./globals.css";

export const metadata = {
  title: "Campus Portal",
  description: "Student Campus Portal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
