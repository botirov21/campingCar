import React from 'react'
import { CampingLocation, CampingWrapper } from './campingStyle'
import img from '../assets/location1.png'
import img2 from '../assets/location2.png'
import img3 from '../assets/location3.png'
import Fotter from '../footer/fotter'
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
                <div>
                    <img src={img} alt="" />
                    <h3>Camping place name</h3>
                    <p>Location</p>
                </div>
                <div>
                    <img src={img2} alt="" />
                    <h3>Camping place name</h3>
                    <p>Location</p>
                </div>
                <div>
                    <img src={img3} alt="" />
                    <h3>Camping place name</h3>
                    <p>Location</p>
                </div>
                <div>
                    <img src={img} alt="" />
                    <h3>Camping place name</h3>
                    <p>Location</p>
                </div>
                <div>
                    <img src={img2} alt="" />
                    <h3>Camping place name</h3>
                    <p>Location</p>
                </div>
                <div>
                    <img src={img3} alt="" />
                    <h3>Camping place name</h3>
                    <p>Location</p>
                </div>
                <div>
                    <img src={img} alt="" />
                    <h3>Camping place name</h3>
                    <p>Location</p>
                </div>
                <div>
                    <img src={img2} alt="" />
                    <h3>Camping place name</h3>
                    <p>Location</p>
                </div>
                <div>
                    <img src={img3} alt="" />
                    <h3>Camping place name</h3>
                    <p>Location</p>
                </div>
                <div>
                    <img src={img} alt="" />
                    <h3>Camping place name</h3>
                    <p>Location</p>
                </div>
                <div>
                    <img src={img2} alt="" />
                    <h3>Camping place name</h3>
                    <p>Location</p>
                </div>
                <div>
                    <img src={img3} alt="" />
                    <h3>Camping place name</h3>
                    <p>Location</p>
                </div>
            </CampingLocation>
                <Fotter/>
        </CampingWrapper>
    )
}

export default Camping
