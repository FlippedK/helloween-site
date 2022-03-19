import Image from 'next/image'
import Menu from '../components/menu'
import home1 from '../images/home1-img.png'
import ghost from '../images/category1-img.png'
import pumple from '../images/category2-img.png'
import shlyapa from '../images/category3-img.png'

export default function Category() {
  return (
    <div className="site">
      <div className="site__wrapper">
        <div className="site__menu">
          <Menu />
        </div>
        <div className="site__category">
          <div className="site__category__text">
            <a>Favorite Scare</a>
            <a>Category</a>
          </div>
          <div className="site__category__info">
            <div>
              <Image
                src={ghost}
                width="200px"
                height="200px"
              />
              <div className="category__text">
                <h1>Ghost</h1>
                <a>Choose the ghosts,</a>
                <a>the scarlest there are</a>
              </div>
            </div>
            <div>
              <Image
              src={pumple}
              width="200px"
              height="200px"
              />
              <div className="category__text">
                <h1>Pumpkins</h1>
                <a>You look at the sceriest pum</a>
              </div>
            </div>
            <div>
              <Image
              src={shlyapa}
              width="200px"
              height="200px"
              />
              <div className="category__text">
                <h1>Witch Hat</h1>
                <a>ghghghghgjhjhjhj</a>
              </div>
            </div>
          </div>
        </div>
        <div className="site__category">
          
        </div>
      </div>
    </div>
  )
}
