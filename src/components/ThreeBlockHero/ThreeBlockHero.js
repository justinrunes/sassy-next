import styles from './ThreeBlockHero.scss';

const ThreeBlockHero = () => (

    <div className="section section--grey">
        <div className="container">
            <div className={styles.threeBlockHeroCustom}>
                <div className={styles.left}>
                    <div className={styles.top}>
                        <h1>Lorem ipsum dolor sit.</h1>
                        <p className={styles.body}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos accusantium assumenda quas eum quia alias, asperiores iste officiis nesciunt cupiditate beatae reprehenderit possimus. Nostrum ipsum eaque officia tempore, distinctio corporis?</p>
                        <a className="button button--primary" href="#">Lorem, ipsum dolor</a>
                    </div>
                    <div className={styles.bottom}>
                        <div className="subtitle">Lorem ipsum dolor sit amet.</div>
                    </div>
                </div>
                <div className={styles.rt} title="A child with XLH">
                    <div className={styles.top}>
                        <h1 className={styles.blockTitle}>Lorem ipsum dolor sit.</h1>
                        <a className="button button--primary" href="#">Lorem, ipsum dolor</a>
                    </div>
                    <div className={styles.bottom}>
                        <div className="subtitle">Lorem ipsum dolor sit amet.</div>
                    </div>
                </div>
                <div className={styles.rb} title="An adult female with XLH">
                    <div className={styles.top}>
                        <h1 className={styles.blockTitle}>Lorem ipsum dolor sit.</h1>
                        <a className="button button--primary" href="#">Lorem, ipsum dolor</a>
                    </div>
                    <div className={styles.bottom}>
                        <div className="subtitle">Lorem ipsum dolor sit amet.</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
  )
  
  export default ThreeBlockHero