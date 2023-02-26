// eslint-disable-next-line object-curly-newline
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body className="bg-dark text-light relative w-full mx-auto">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
