import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import Navbar from './components/navbar';
import Footer from './components/common/footer';

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    variable: '--font-sans',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Mon empreinte numérique',
    description: 'Un site pour évaluer votre empreinte numérique',
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
                {children}
                <Footer />
            </body>
        </html>
    );
}
