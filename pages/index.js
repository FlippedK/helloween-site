import Image from "next/image"
import home1 from "../images/home1-img.png"
import icon from "../images/favicon.png"

export default function Index() {
  return (
    <div className="site">
      <div className="site__wrapper">
        <div className="site__menu">
          <div className="helloween__menu">
            <Image src={icon}
            width="15px"
            height="15px"/>
            HELLOWEEN
            <a className="buttom__menu">Home</a>
            <a className="buttom__menu">About</a>
            <a className="buttom__menu">Candy</a>
            <a className="buttom__menu">New</a>
            <a className="buttom__menu">Support</a>


            </div>
        </div>
        <div className="site__content">
          <div className="site__slider">
            <div className="slider__list">
              <div className="slider__block">


                <div className="block__image">
                  <Image
                    src={home1}
                    width="460px"
                    height="500px"
                  />
                </div>
                <div className="block__info">

                  <div className="info__title">
                    DWADAWD
                    <br />
                    DWGTJGYJY
                    <br />
                    GFDHJYUT
                  </div>
                  <p className="info__description"> dijwaudjwaudjogkj hijfhijgygyughyuugygugyuygugyufik</p>
                </div>
              </div>
            </div>
          </div>
          <div className="slider__menu">
            <div className="menu__mark"></div>
            <div className="menu__mark"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
