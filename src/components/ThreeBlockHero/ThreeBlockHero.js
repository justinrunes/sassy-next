import css from './ThreeBlockHero.scss';

const ThreeBlockHero = () => (

    <div className="section section--grey">
        <div className="container">
            <div className="three-block-hero three-block-hero--custom">
                <div className="left">
                    <div className="top">
                        <h1>Lorem ipsum dolor sit.</h1>
                        <p className="body">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos accusantium assumenda quas eum quia alias, asperiores iste officiis nesciunt cupiditate beatae reprehenderit possimus. Nostrum ipsum eaque officia tempore, distinctio corporis?</p>
                        <a className="button button--primary" href="#">Lorem, ipsum dolor</a>
                    </div>
                    <div className="bottom">
                        <div className="subtitle">Lorem ipsum dolor sit amet.</div>
                    </div>
                </div>
                <div className="rt" title="A child with XLH">
                    <div className="top">
                        <h1 className="block__title">Lorem ipsum dolor sit.</h1>
                        <a className="button button--primary" href="#">Lorem, ipsum dolor</a>
                    </div>
                    <div className="bottom">
                        <div className="subtitle">Lorem ipsum dolor sit amet.</div>
                    </div>
                </div>
                <div className="rb" title="An adult female with XLH">
                    <div className="top">
                        <h1 className="block__title">Lorem ipsum dolor sit.</h1>
                        <a className="button button--primary" href="#">Lorem, ipsum dolor</a>
                    </div>
                    <div className="bottom">
                        <div className="subtitle">Lorem ipsum dolor sit amet.</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
  )
  
  export default ThreeBlockHero