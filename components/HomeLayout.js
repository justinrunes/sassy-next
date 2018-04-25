import Head from 'next/head';
import Header from './Header/Header';
import Link from 'next/link';

const HomeLayout = (props) => (
    <div>
        <Head>
            <title>Sassy Next</title>
        </Head>
        <Header></Header>
        
        {props.children}
        
        <style jsx>{`

        `}</style>
    </div>
)

export default HomeLayout;