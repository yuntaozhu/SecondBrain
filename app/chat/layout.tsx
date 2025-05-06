import type { Metadata } from "next";
import { noto_sans, noto_sans_arabic } from "@/app/fonts";
import "../globals.css";
import { ContentSecurityPolicy } from "../common/layoutHelper";
import { ThemeProvider } from "../components/providers/themeProvider";

export const metadata: Metadata = {
    title: "YCK AI - Chat",
    description:
        "Ask anything. Research answers from across the internet and your documents, draft messages, summarize documents, generate paintings and chat with personal agents.",
    icons: {
        icon: "/static/assets/icons/khoj_lantern.ico",
        apple: "/static/assets/icons/khoj_lantern_256x256.png",
    },
    openGraph: {
        siteName: "Khoj AI",
        title: "YCK AI - Chat",
        description:
            "Ask anything. Research answers from across the internet and your documents, draft messages, summarize documents, generate paintings and chat with personal agents.",
        url: "https://app.khoj.dev/chat",
        type: "website",
        images: [
            {
                url: "https://assets.khoj.dev/khoj_hero.png",
                width: 940,
                height: 525,
            },
            {
                url: "https://assets.khoj.dev/khoj_lantern_256x256.png",
                width: 256,
                height: 256,
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${noto_sans.variable} ${noto_sans_arabic.variable}`}>
            <head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            try {
                                if (localStorage.getItem('theme') === 'dark' ||
                                    (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                                    document.documentElement.classList.add('dark');
                                }
                            } catch (e) {}
                        `,
                    }}
                />
            </head>
            <ContentSecurityPolicy />
            <body>
                <ThemeProvider>
                    {children}
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `window.EXCALIDRAW_ASSET_PATH = 'https://assets.khoj.dev/@excalidraw/excalidraw/dist/';`,
                        }}
                    />
                </ThemeProvider>
            </body>
        </html>
    );
}
