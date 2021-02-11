import Head from 'next/head'

const SITE_NAME = "Awesome BLOG"

const Meta = ({title=''}) => {
    const _title = title ? `${title} - ${SITE_NAME}` :SITE_NAME
    return(
        <Head>
            <meta name='og:title' content={_title}/>
            <title>{_title}</title>
        </Head>
    )
}

export default Meta