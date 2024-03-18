import React from 'react';
import { Link } from 'react-router-dom';


const HostingGallery = () => {
    return (
        <section id="hosting-gallery">
                <ul>
                    <li>
                        <Link to={`/fiche-logement/1`}>Titre de la location 1</Link>
                    </li>
                    <li>
                        <Link to={`/fiche-logement/2`}>Titre de la location 2</Link>
                    </li>
                </ul>
        </section>
    )
}

export default HostingGallery
