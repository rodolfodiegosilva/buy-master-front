import './Menu.css'
import React from 'react'

import { Link } from 'react-router-dom'

const Menu = props => (
    <aside className="Menu">
        <nav>
            <ul>
                <li>
                    <Link to="/myAccount/test1">Dados pessoais</Link>
                </li>
                <li>
                    <Link to="/myAccount/test2">Dados corporativos</Link>
                </li>
            </ul>
        </nav>
    </aside>
)

export default Menu