import Document, { Head, Main, NextScript, Html} from 'next/document'

class Mydocument extends Document {
    render(){
        return (
            <Html>
                <Head>
                    <link rel='icon' href='/my-favicon.ico' />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default Mydocument