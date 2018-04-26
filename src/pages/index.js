import css from '../styles/main.scss';
import HomeLayout from '../components/HomeLayout/HomeLayout';
import ThreeBlockHero from '../components/ThreeBlockHero/ThreeBlockHero';

const Index = () => (
    <HomeLayout>
      <Head>
        <title>Sassy Next</title>
        <link rel="stylesheet" href="/_next/static/style.css" />
      </Head>

      <ThreeBlockHero></ThreeBlockHero>
    </HomeLayout>
  )
  
  export default Index