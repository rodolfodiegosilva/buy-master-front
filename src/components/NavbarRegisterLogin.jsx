import React from 'react'
import {NavLink} from 'react-router-dom'
import './navbarRegisterLogin.css'

const NavbarRegisterLogin = () => {
    return (<>
            <div className='test3'>
                <div>
                    <span> <NavLink to="/">logo</NavLink></span>
                </div>
                <div>
                    <span> <NavLink to="/help"> Ajuda</NavLink></span>
                </div>
            </div>
        </>
    )
}

export default NavbarRegisterLogin
