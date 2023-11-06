import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import img from '../assets/image1.png'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { BlogDiv, BlogVidioLink, BlogVidioLink2, BlogVidioLink3, HomeDiv, VidioDiv, VidioLink, VidioLink2, VidioLink3, VidioLink4 } from './homeStyle'
import Slider from 'react-slick'
import img2 from '../assets/image3.png'
import img3 from '../assets/vidio1.png'
import img4 from '../assets/vidio2.png'
import img5 from '../assets/vidio3.png'
import img6 from '../assets/vidio4.png'
import PlayBtn from '../assets/playBtn.png'
import Popup from 'reactjs-popup'
import '../'
import Fotter from '../footer/fotter'
function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

const Home = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,

  };
  return (
    <HomeDiv>
      <Carousel autoPlay={true} showThumbs={false} infiniteLoop={true}>
        <div>
          <img className='carusel-img' src={img} alt='img' />
        </div>
        <div>
          <img className='carusel-img' src={img} alt='img' />
        </div>
        <div>
          <img className='carusel-img' src={img} alt='img' />
        </div>
      </Carousel>
      <div className="container">
        <div className='multi-caruselTitle' >
          <h2>Recommend</h2>
        </div>
        <Slider {...settings}>
          <div className='card'>
            <div className='cardImageDiv'>
              <img className='cardImage' src={img2} alt="" />
            </div>
            <div className="card-body">
              <h3>
                Knaus
              </h3>
              <button>
                Discover the range
              </button>
            </div>
            <div className='cardP'>Choose a model
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                <path d="M11.25 6.125L7.5 9.875L3.75 6.125" stroke="#373737" stroke-width="2" />
              </svg>
            </div>
          </div>
          <div className='card'>
            <div className='cardImageDiv'>
              <img className='cardImage' src={img2} alt="" />
            </div>
            <div className="card-body">
              <h3>
                Knaus
              </h3>
              <button>
                Discover the range
              </button>
              <div className='cardP'>Choose a model
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                  <path d="M11.25 6.125L7.5 9.875L3.75 6.125" stroke="#373737" stroke-width="2" />
                </svg>
              </div>
            </div>
          </div>
          <div className='card'>
            <div className='cardImageDiv'>
              <img className='cardImage' src={img2} alt="" />
            </div>
            <div className="card-body">
              <h3>
                Knaus
              </h3>
              <button>
                Discover the range
              </button>
              <div className='cardP'>Choose a model
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                  <path d="M11.25 6.125L7.5 9.875L3.75 6.125" stroke="#373737" stroke-width="2" />
                </svg>
              </div>
            </div>
          </div>
          <div className='card'>
            <div className='cardImageDiv'>
              <img className='cardImage' src={img2} alt="" />
            </div>
            <div className="card-body">
              <h3>
                Knaus
              </h3>
              <button>
                Discover the range
              </button>
              <div className='cardP'>Choose a model
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                  <path d="M11.25 6.125L7.5 9.875L3.75 6.125" stroke="#373737" stroke-width="2" />
                </svg>
              </div>
            </div>
          </div>
          <div className='card'>
            <div className='cardImageDiv'>
              <img className='cardImage' src={img2} alt="" />
            </div>
            <div className="card-body">
              <h3>
                Knaus
              </h3>
              <button>
                Discover the range
              </button>
              <div className='cardP'>Choose a model
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                  <path d="M11.25 6.125L7.5 9.875L3.75 6.125" stroke="#373737" stroke-width="2" />
                </svg>
              </div>
            </div>
          </div>
          <div className='card'>
            <div className='cardImageDiv'>
              <img className='cardImage' src={img2} alt="" />
            </div>
            <div className="card-body">
              <h3>
                Knaus
              </h3>
              <button>
                Discover the range
              </button>
              <div className='cardP'>Choose a model
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                  <path d="M11.25 6.125L7.5 9.875L3.75 6.125" stroke="#373737" stroke-width="2" />
                </svg>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <VidioDiv>
        <div className='vidioTitle'>
          <h1>Videos</h1>
        </div>
        <div className='vidioGrid'>
          <div>
            <Popup
              trigger=
              {<button className="popButton">
                <VidioLink>
                  <button className='PlayButton'>
                    <img className='playImg' src={PlayBtn} alt="" />
                  </button>
                </VidioLink>
              </button>
              }
              modal
              nested
            >
              {close => (
                <div className="modal">
                  <button className="close" onClick={close}>
                    &times;
                  </button>
                  <div className="popContent">
                    {' '}
                    <iframe background="none" width="750" height="450" src="https://www.youtube.com/embed/gc5xyn6e_pE?si=JdpQkwyHyQa9JuGu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  </div>
                </div>
              )}
            </Popup>
          </div>
          <div>
            <div>
              <Popup
                trigger=
                {<button className="popButton">
                  <VidioLink2>
                    <button className='PlayButton'>
                      <img className='playImg' src={PlayBtn} alt="" />
                    </button>
                  </VidioLink2>
                </button>
                }
                modal
                nested
              >
                {close => (
                  <div className="modal">
                    <button className="close" onClick={close}>
                      &times;
                    </button>
                    <div className="popContent">
                      {' '}
                      <iframe background="none" width="750" height="450" src="https://www.youtube.com/embed/gc5xyn6e_pE?si=JdpQkwyHyQa9JuGu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                  </div>
                )}
              </Popup>
            </div>
          </div>
          <div>
            <div>
              <Popup
                trigger=
                {<button className="popButton">
                  <VidioLink3>
                    <button className='PlayButton'>
                      <img className='playImg' src={PlayBtn} alt="" />
                    </button>
                  </VidioLink3>
                </button>
                }
                modal
                nested
              >
                {close => (
                  <div className="modal">
                    <button className="close" onClick={close}>
                      &times;
                    </button>
                    <div className="popContent">
                      {' '}
                      <iframe background="none" width="750" height="450" src="https://www.youtube.com/embed/gc5xyn6e_pE?si=JdpQkwyHyQa9JuGu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                  </div>
                )}
              </Popup>
            </div>
          </div>
          <div>
            <div>
              <Popup
                trigger=
                {<button className="popButton">
                  <VidioLink4>
                    <button className='PlayButton'>
                      <img className='playImg' src={PlayBtn} alt="" />
                    </button>
                  </VidioLink4>
                </button>
                }
                modal
                nested
              >
                {close => (
                  <div className="modal">
                    <button className="close" onClick={close}>
                      &times;
                    </button>
                    <div className="popContent">
                      {' '}
                      <iframe background="none" width="750" height="450" src="https://www.youtube.com/embed/gc5xyn6e_pE?si=JdpQkwyHyQa9JuGu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                  </div>
                )}
              </Popup>
            </div>
          </div>
          <div>
            <Popup
              trigger=
              {<button className="popButton">
                <VidioLink>
                  <button className='PlayButton'>
                    <img className='playImg' src={PlayBtn} alt="" />
                  </button>
                </VidioLink>
              </button>
              }
              modal
              nested
            >
              {close => (
                <div className="modal">
                  <button className="close" onClick={close}>
                    &times;
                  </button>
                  <div className="popContent">
                    {' '}
                    <iframe background="none" width="750" height="450" src="https://www.youtube.com/embed/gc5xyn6e_pE?si=JdpQkwyHyQa9JuGu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  </div>
                </div>
              )}
            </Popup>
          </div>
          <div>
            <div>
              <Popup
                trigger=
                {<button className="popButton">
                  <VidioLink2>
                    <button className='PlayButton'>
                      <img className='playImg' src={PlayBtn} alt="" />
                    </button>
                  </VidioLink2>
                </button>
                }
                modal
                nested
              >
                {close => (
                  <div className="modal">
                    <button className="close" onClick={close}>
                      &times;
                    </button>
                    <div className="popContent">
                      {' '}
                      <iframe background="none" width="750" height="450" src="https://www.youtube.com/embed/gc5xyn6e_pE?si=JdpQkwyHyQa9JuGu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                  </div>
                )}
              </Popup>
            </div>
          </div>
          <div>
            <div>
              <Popup
                trigger=
                {<button className="popButton">
                  <VidioLink3>
                    <button className='PlayButton'>
                      <img className='playImg' src={PlayBtn} alt="" />
                    </button>
                  </VidioLink3>
                </button>
                }
                modal
                nested
              >
                {close => (
                  <div className="modal">
                    <button className="close" onClick={close}>
                      &times;
                    </button>
                    <div className="popContent">
                      {' '}
                      <iframe background="none" width="750" height="450" src="https://www.youtube.com/embed/gc5xyn6e_pE?si=JdpQkwyHyQa9JuGu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                  </div>
                )}
              </Popup>
            </div>
          </div>
          <div>
            <div>
              <Popup
                trigger=
                {<button className="popButton">
                  <VidioLink4>
                    <button className='PlayButton'>
                      <img className='playImg' src={PlayBtn} alt="" />
                    </button>
                  </VidioLink4>
                </button>
                }
                modal
                nested
              >
                {close => (
                  <div className="modal">
                    <button className="close" onClick={close}>
                      &times;
                    </button>
                    <div className="popContent">
                      {' '}
                      <iframe background="none" width="750" height="450" src="https://www.youtube.com/embed/gc5xyn6e_pE?si=JdpQkwyHyQa9JuGu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                  </div>
                )}
              </Popup>
            </div>
          </div>
        </div>
      </VidioDiv>
      <BlogDiv>
        <div className='vidioTitle'>
          <h2>Blogs</h2>
        </div>
        <div className='blogWrapper'>
          <div className='blogText'>
            <div>
              <h1>Lorem ipsum</h1>
            </div>
            <h5>@Lorem ipsum</h5>
            <div className='blogP'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat platea mauris at turpis. Volutpat, morbi sit vitae id. Aliquam eleifend aenean neque in in a quam vivamus
              </p>
            </div>
          </div>
          <div className='blogVido'>
          <div>
              <div>
                <Popup
                  trigger=
                  {<button className="popButton">
                   <img style={{width: '258px', height: '258px'}} src={img3} alt="" />
                  </button>
                  }
                  modal
                  nested
                >
                  {close => (
                    <div className="modal">
                      <button className="close" onClick={close}>
                        &times;
                      </button>
                      <div className="popContent">
                        {' '}
                        <iframe background="none" width="750" height="450" src="https://www.youtube.com/embed/gc5xyn6e_pE?si=JdpQkwyHyQa9JuGu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                      </div>
                    </div>
                  )}
                </Popup>
              </div>
            </div>
            <div>
              <div>
                <Popup
                  trigger=
                  {<button className="popButton">
                    <img style={{width: '258px', height: '258px'}} src={img5} alt="" />
                  </button>
                  }
                  modal
                  nested
                >
                  {close => (
                    <div className="modal">
                      <button className="close" onClick={close}>
                        &times;
                      </button>
                      <div className="popContent">
                        {' '}
                        <iframe background="none" width="750" height="450" src="https://www.youtube.com/embed/gc5xyn6e_pE?si=JdpQkwyHyQa9JuGu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                      </div>
                    </div>
                  )}
                </Popup>
              </div>
            </div>
            <div>
              <div>
                <Popup
                  trigger=
                  {<button className="popButton">
                    <img style={{width: '258px', height: '258px'}} src={img6} alt="" />
                  </button>
                  }
                  modal
                  nested
                >
                  {close => (
                    <div className="modal">
                      <button className="close" onClick={close}>
                        &times;
                      </button>
                      <div className="popContent">
                        {' '}
                        <iframe background="none" width="750" height="450" src="https://www.youtube.com/embed/gc5xyn6e_pE?si=JdpQkwyHyQa9JuGu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                      </div>
                    </div>
                  )}
                </Popup>
              </div>
            </div>
            <div>
              <div>
                <Popup
                  trigger=
                  {<button className="popButton">
                   <img style={{width: '258px', height: '258px'}} src={img3} alt="" />
                  </button>
                  }
                  modal
                  nested
                >
                  {close => (
                    <div className="modal">
                      <button className="close" onClick={close}>
                        &times;
                      </button>
                      <div className="popContent">
                        {' '}
                        <iframe background="none" width="750" height="450" src="https://www.youtube.com/embed/gc5xyn6e_pE?si=JdpQkwyHyQa9JuGu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                      </div>
                    </div>
                  )}
                </Popup>
              </div>
            </div>
            <div>
              <div>
                <Popup
                  trigger=
                  {<button className="popButton">
                    <img style={{width: '258px', height: '258px'}} src={img5} alt="" />
                  </button>
                  }
                  modal
                  nested
                >
                  {close => (
                    <div className="modal">
                      <button className="close" onClick={close}>
                        &times;
                      </button>
                      <div className="popContent">
                        {' '}
                        <iframe background="none" width="750" height="450" src="https://www.youtube.com/embed/gc5xyn6e_pE?si=JdpQkwyHyQa9JuGu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                      </div>
                    </div>
                  )}
                </Popup>
              </div>
            </div>
            <div>
              <div>
                <Popup
                  trigger=
                  {<button className="popButton">
                    <img style={{width: '258px', height: '258px'}} src={img6} alt="" />
                  </button>
                  }
                  modal
                  nested
                >
                  {close => (
                    <div className="modal">
                      <button className="close" onClick={close}>
                        &times;
                      </button>
                      <div className="popContent">
                        {' '}
                        <iframe background="none" width="750" height="450" src="https://www.youtube.com/embed/gc5xyn6e_pE?si=JdpQkwyHyQa9JuGu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                      </div>
                    </div>
                  )}
                </Popup>
              </div>
            </div>
          </div>
        </div>
      </BlogDiv>
      <Fotter/>
    </HomeDiv>
  )
}

export default Home
