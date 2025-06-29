import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import Navbar from './components/navbar';
import Footer from './components/common/footer';
import { Analytics } from '@vercel/analytics/react';

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    variable: '--font-sans',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Mon empreinte numérique',
    description: 'Un site pour évaluer votre empreinte numérique',
    icons: {
        icon: [
            { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
            { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
            {
                url: '/android-chrome-192x192.png',
                type: 'image/png',
                sizes: '192x192',
            },
            {
                url: '/android-chrome-512x512.png',
                type: 'image/png',
                sizes: '512x512',
            },
            { url: '/favicon.ico', type: 'image/x-icon' },
        ],
        apple: '/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
};
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${spaceGrotesk.variable}`}>
                <Navbar />
                <div className="container">{children}</div>
                <Footer />
                <Analytics />
            </body>
        </html>
    );
}
