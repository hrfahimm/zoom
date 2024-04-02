import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "WOOM ",
    description: " Zoom Clone",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider appearance={{
            layout: {
                logoImageUrl: '/woom-logo.png',
                socialButtonsVariant: "iconButton"
            },
            variables: {
                colorText: '#fff',

                colorPrimary: "#fff",
                colorBackground: "#1c1f2e",

                colorInputBackground: '#252a41',
                colorInputText: '#fff',



            }
        }}>
            <html lang="en">
                <body className={`${inter.className} bg-dark-2`} >
                    {children}
                </body>

            </html >
        </ClerkProvider>
    );
}
