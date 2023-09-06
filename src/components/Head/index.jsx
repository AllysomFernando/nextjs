import Head from "next/head";

export default function Heads({children}){
    return(
        <Head>
            <title>{children}</title>
        </Head>
    )
}