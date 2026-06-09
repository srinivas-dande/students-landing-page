import './globals.css';

export const metadata = {
  title: 'Dandes Academy - Students Landing',
  description: 'Join our next cohort starting June 25th, 2025',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
