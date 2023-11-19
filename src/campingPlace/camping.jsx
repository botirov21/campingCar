import React from 'react'
import { CampingLocation, CampingWrapper } from './campingStyle'
import img from '../assets/location1.png'
import img2 from '../assets/location2.png'
import img3 from '../assets/location3.png'
import Fotter from '../footer/fotter'
import { Link } from 'react-router-dom'
const Camping = () => {
    return (
        <CampingWrapper >
            <div className='campingTitleDiv'>
                <div className='campingTitle'>
                    <p className='titlep'>Home / Motors</p>
                    <h1 className='camping'>Camping places</h1>
                </div>
            </div>
            <CampingLocation>
                <Link to={`/Camping-details/`} >
                    <div>
                        <img src={img} alt="" />
                        <h3>Camping place name</h3>
                        <p>Location</p>
                    </div>
                </Link>
                <Link to={`/Camping-details/`}>
                    <div>
                        <img src={img2} alt="" />
                        <h3>Camping place name</h3>
                        <p>Location</p>
                    </div>
                </Link>
                <Link to={`/Camping-details/`}>
                    <div>
                        <img src={img3} alt="" />
                        <h3>Camping place name</h3>
                        <p>Location</p>
                    </div>
                </Link>
                <Link to={`/Camping-details/`}>
                    <div>
                        <img src={img} alt="" />
                        <h3>Camping place name</h3>
                        <p>Location</p>
                    </div>
                </Link>
                <Link to={`/Camping-details/`}>
                    <div>
                        <img src={img2} alt="" />
                        <h3>Camping place name</h3>
                        <p>Location</p>
                    </div>
                </Link>
                <Link to={`/Camping-details/`}>
                    <div>
                        <img src={img3} alt="" />
                        <h3>Camping place name</h3>
                        <p>Location</p>
                    </div>
                </Link>
                <Link to={`/Camping-details/`} >
                    <div>
                        <img src={img} alt="" />
                        <h3>Camping place name</h3>
                        <p>Location</p>
                    </div>
                </Link>
                <Link to={`/Camping-details/`}>
                    <div>
                        <img src={img2} alt="" />
                        <h3>Camping place name</h3>
                        <p>Location</p>
                    </div>
                </Link>
                <Link to={`/Camping-details/`}>
                    <div>
                        <img src={img3} alt="" />
                        <h3>Camping place name</h3>
                        <p>Location</p>
                    </div>
                </Link>
                <Link to={`/Camping-details/`}>
                    <div>

                        <img src={img} alt="" />
                        <h3>Camping place name</h3>
                        <p>Location</p>
                    </div>
                </Link>
                <Link to={`/Camping-details/`}>
                    <div>
                        <img src={img2} alt="" />
                        <h3>Camping place name</h3>
                        <p>Location</p>
                    </div>
                </Link>
                <Link to={`/Camping-details/`}>
                    <div>
                        <img src={img3} alt="" />
                        <h3>Camping place name</h3>
                        <p>Location</p>
                    </div>
                </Link>
            </CampingLocation>
            <Fotter />
        </CampingWrapper>
    )
}

export default Camping
