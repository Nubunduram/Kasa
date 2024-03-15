import React from 'react'
import { Link } from "react-router-dom";

const header = () => {
    return (
        <header>
            <nav>
                <div className='logo-container'>LOGO</div>
                <ul>
                    <li>
                        <Link to={`/`}>Accueil </Link>
                    </li>
                    <li>
                        <Link to={`/a-propos`}>A propos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default header
