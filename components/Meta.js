import Head from 'next/head'

export default function Meta(props) {
    return (
        <Head>
            <title>{props.title}</title>
            <meta name="description" content={props.desc}/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="og:title" content="pradyungn" />
            <meta name="og:description" content={props.desc}/>
            <meta
                name="og:image"
                content="https://pradyun.tech/pfp.jpg"
            />
        </Head>
    )
}
