import React from 'react'
import '../navbar/NavBar.css'
import CartWidget from '../cartwidget/CartWidget'
import Icon from '../logo/Icon'
import Icon1 from '../../assets/logo.png'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
            <Icon src={Icon1}/>
            <ul>
                <li>
                    <Link className="link" to={"/"}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link className="link" to={"/category/remeras"}>
                        Remeras
                    </Link>
                </li>
                <li>
                    <Link className="link" to={"/category/buzos"}>
                        Buzos
                    </Link>
                </li>
            </ul>
            <CartWidget/>
        </nav>
        )
}

export default NavBar