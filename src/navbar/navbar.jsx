import React from 'react'
import { NavbarDiv } from './navbarStyle'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <NavbarDiv>
            <NavLink to="/">
                <h1>Camper</h1>
            </NavLink>
            <div className='navbarElements'>
                <NavLink to="/motor">
                    <div className='navbarElement'>Motor
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                            <path d="M11.25 6.125L7.5 9.875L3.75 6.125" stroke="#373737" stroke-width="2" />
                        </svg>
                    </div>
                </NavLink>
                <NavLink to='/caravan'>
                    <div className='navbarElement'>Caravan
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                            <path d="M11.25 6.125L7.5 9.875L3.75 6.125" stroke="#373737" stroke-width="2" />
                        </svg>
                    </div>
                </NavLink>
                <NavLink to='/tuning'>
                    <div className='navbarElement'>Tuning
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                            <path d="M11.25 6.125L7.5 9.875L3.75 6.125" stroke="#373737" stroke-width="2" />
                        </svg>
                    </div>
                </NavLink >
                <NavLink to='/usedCar'>
                    <div className='navbarElement'>Used Car
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                            <path d="M11.25 6.125L7.5 9.875L3.75 6.125" stroke="#373737" stroke-width="2" />
                        </svg>
                    </div>
                </NavLink>
                <NavLink to='/camping'>
                  <div>Camping Place </div>
                </NavLink>
            </div>
            <div className='navbarRightEl'>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                        <path d="M10.125 24C11.1605 24 12 23.1605 12 22.125C12 21.0895 11.1605 20.25 10.125 20.25C9.08947 20.25 8.25 21.0895 8.25 22.125C8.25 23.1605 9.08947 24 10.125 24Z" fill="#006DAB" />
                        <path d="M19.875 24C20.9105 24 21.75 23.1605 21.75 22.125C21.75 21.0895 20.9105 20.25 19.875 20.25C18.8395 20.25 18 21.0895 18 22.125C18 23.1605 18.8395 24 19.875 24Z" fill="#006DAB" />
                        <path d="M24.825 4.79249C24.7551 4.70173 24.6654 4.62818 24.5627 4.57747C24.46 4.52677 24.347 4.50026 24.2325 4.49999H6.90749L6.56999 3.42749C6.53292 3.31233 6.46854 3.20785 6.38234 3.12297C6.29615 3.03808 6.1907 2.9753 6.07499 2.93999L2.99999 1.99499C2.90544 1.96593 2.80609 1.95579 2.70762 1.96513C2.60914 1.97447 2.51347 2.00311 2.42607 2.04942C2.24955 2.14296 2.11742 2.30278 2.05874 2.49374C2.00006 2.68469 2.01964 2.89114 2.11318 3.06766C2.20671 3.24418 2.36654 3.37631 2.55749 3.43499L5.24999 4.25999L8.68499 15.1125L7.46249 16.1175L7.36499 16.215C7.06266 16.5651 6.89138 17.0093 6.88043 17.4717C6.86949 17.9342 7.01957 18.386 7.30499 18.75C7.50941 18.9986 7.76917 19.1959 8.06349 19.3261C8.35782 19.4564 8.67853 19.5159 8.99999 19.5H21.5175C21.7164 19.5 21.9072 19.421 22.0478 19.2803C22.1885 19.1397 22.2675 18.9489 22.2675 18.75C22.2675 18.5511 22.1885 18.3603 22.0478 18.2197C21.9072 18.079 21.7164 18 21.5175 18H8.87999C8.79362 17.997 8.70948 17.9719 8.63568 17.9269C8.56189 17.8819 8.50093 17.8187 8.45871 17.7433C8.41649 17.6679 8.39442 17.5829 8.39465 17.4965C8.39487 17.4101 8.41738 17.3252 8.45999 17.25L10.2675 15.75H21.84C22.0113 15.755 22.1792 15.7011 22.3156 15.5974C22.4521 15.4937 22.5489 15.3464 22.59 15.18L24.99 5.42999C25.0128 5.31818 25.0098 5.20264 24.9812 5.09216C24.9526 4.98169 24.8992 4.8792 24.825 4.79249Z" fill="#006DAB" />
                    </svg>
                </div>
                <div><svg xmlns="http://www.w3.org/2000/svg" width="28" height="27" viewBox="0 0 28 27" fill="none">
                    <path d="M9.20422 7.3125C9.20422 10.1036 11.4756 12.375 14.2667 12.375C17.0578 12.375 19.3292 10.1036 19.3292 7.3125C19.3292 4.52137 17.0578 2.25 14.2667 2.25C11.4756 2.25 9.20422 4.52137 9.20422 7.3125ZM23.2667 23.625H24.3917V22.5C24.3917 18.1586 20.8581 14.625 16.5167 14.625H12.0167C7.67422 14.625 4.14172 18.1586 4.14172 22.5V23.625H23.2667Z" fill="#006DAB" />
                </svg></div>
                <button className='languangeBtn'>
                    En
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                        <path d="M9.75 4.5L6.5 7.5L3.25 4.5" stroke="#373737" stroke-width="2" />
                    </svg>
                </button>
            </div>
        </NavbarDiv>
    )
}

export default Navbar
