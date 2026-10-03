import './globals.css';
import { Inter, Space_Grotesk } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const space = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' });

export const metadata = {
  title: 'Chahak Goswami | AI Engineer & Agentic AI Builder',
  description: 'Penn State AI student building agentic AI systems, research agents, autonomous engineering workflows, and secure cloud solutions.',
  metadataBase: new URL('https://chahakgoswami.vercel.app'),
  openGraph: {
    title: 'Chahak Goswami | AI Engineer & Agentic AI Builder',
    description: 'Agentic AI, Generative AI, Cloud, and Cybersecurity — built through working systems.',
    type: 'website'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${space.variable}`}>
      <body>
        <div className="noise" aria-hidden="true" />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
