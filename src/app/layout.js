import './globals.css';

export const metadata = {
  title: 'AI & Machine Learning Career Program for Students | Dandes Academy',
  description:
    "Join India's most outcome-focused AI & ML course for students. Build 6 real-world projects, get placement support, and break into AI/ML engineering.",
  keywords: [
    'AI ML course for students',
    'ai courses online for students',
    'machine learning career program India',
    'AI engineering course',
    'AI ML program for engineering students',
    'learn machine learning online India',
    'Python ML course with placement',
    'AI projects for portfolio',
    'deep learning course India',
    'AI course for freshers',
    'MLOps training',
    'placement support AI course',
    'Dandes Academy',
    'AI course Tier-2 college students',
    'machine learning certification India',
    'AI career program 2026',
  ],
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