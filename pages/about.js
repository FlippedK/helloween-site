import Image from 'next/image'
import Menu from '../components/menu'
import Wtf from '../images/about-img.png'



export default function About() {
    return (
        <div className="site">
          <div className="site__wrapper">
            <div className="site__menu">
              <Menu />
            </div>

            <div className="site__about">
            <div className="site__about__text">
              <div className="site__about__main">
                <div>
                  <div className="site__about__text_top">
                      <a>About Helloween Night</a>
                  </div>
                  <div className="site__about__text_bot">
                      <a>Night at all the saints, or call the dead, is <br/>celebrated on October 31 and it is a very fun <br/> internation of celebration, this celebration comes <br/> from ancient origins, and is already celebrated <br/> by everyone </a>
                  </div>
                  <div className="site__about__buttom">
                    <a href="#">Know more</a>
                  </div>
                </div>

                <div className="site__about__image" >
                <Image
                src={Wtf}
                width="500px"
                height="650px"
                />
                </div>
              </div>                
            </div>
            
          </div>


          </div>
          
        </div>
      )
}