import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";
import 'easymde/dist/easymde.min.css'

const workSans = localFont({
    src: [
        {
            path: './fonts/WorKSans-Black.ttf',
            weight: '900',
            style: 'normal'
        }, {
            path: './fonts/WorKSans-ExtraBold.ttf',
            weight: '800',
            style: 'normal'
        }, {
            path: './fonts/WorKSans-Bold.ttf',
            weight: '700',
            style: 'normal'
        }, {
            path: './fonts/WorKSans-SemiBold.ttf',
            weight: '600',
            style: 'normal'
        }, {
            path: './fonts/WorKSans-Medium.ttf',
            weight: '500',
            style: 'normal'
        }, {
            path: './fonts/WorKSans-Regular.ttf',
            weight: '400',
            style: 'normal'
        }, {
            path: './fonts/WorKSans-Black.ttf',
            weight: '300',
            style: 'normal'
        }, {
            path: './fonts/WorKSans-Thin.ttf',
            weight: '200',
            style: 'normal'
        }, {
            path: './fonts/WorKSans-ExtraLight.ttf',
            weight: '100',
            style: 'normal'
        },
    ],
    variable:'--font-work-sans'
})


export const metadata: Metadata = {
    title: "NS-Directory",
    description: "Think, Create, Share",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${workSans.variable}`}
        >
        {children}
        </body>
        </html>
    );
}
