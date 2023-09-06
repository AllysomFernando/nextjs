import Head from "next/head";

export default function Heads({children}){
    return(
        <Head>
            <title>Find By</title>
            <title>{children}</title>
        </Head>
    )
}