import type { Metadata } from 'next'
import './globals.css'
import Scripts from './script'
import Navbar from './components/navbar'
import Background from './components/background'
import '/public/assets/css/bootstrap.min.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const metadata: Metadata = {
    title: 'Milfolio - Personal Portfolio Kamil',
    description: 'MilFolio - Personal Portfolio Kamil',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                {children}
                <Background />
                <Scripts />
            </body>
        </html>
    )
}
