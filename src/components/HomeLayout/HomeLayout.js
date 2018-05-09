import Link from 'next/link';
import Header from '../Header/Header';

const HomeLayout = (props) => (
    <div>
        <Header></Header>
        
        {props.children}
        
        <style jsx>{`

        `}</style>
    </div>
)

export default HomeLayout;