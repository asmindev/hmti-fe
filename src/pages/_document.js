// eslint-disable-next-line object-curly-newline
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;800&family=Roboto+Condensed&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body className="bg-dark text-light relative w-full mx-auto font-jakarta">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
