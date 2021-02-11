import { AppProps} from 'next/app'

import 'highlight.js/styles/ocean.css'
import 'katex/dist/katex.min.css'
import 'minireset.css'

export default function App({Component, pageProps }: AppProps){
    return <Component {...pageProps} />
}