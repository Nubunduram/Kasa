import React from 'react';
import { Link } from 'react-router-dom';
import hostingList from "../../assets/hosting-list.json";


const HostingGallery = () => {
    return (
        <section id="hosting-gallery">
            <ul>
                <li>
                    <Link to={`/fiche-logement/0`}>
                        <img src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-4-1.jpg" alt="test" />
                        <div className='img-filter-light'></div>
                        <h2>Titre de la location 1</h2>
                    </Link>
                </li>
                <li>
                    <Link to={`/fiche-logement/1`}>
                        <img src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-4-1.jpg" alt="test" />
                        <div className='img-filter-light'></div>
                        <h2>Titre de la location 2</h2>
                    </Link>
                </li>
                <li>
                    <Link to={`/fiche-logement/2`}>
                        <img src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-4-1.jpg" alt="test" />
                        <div className='img-filter-light'></div>
                        <h2>Titre de la location 3</h2>
                    </Link>
                </li>
                <li>
                    <Link to={`/fiche-logement/3`}>
                        <img src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-4-1.jpg" alt="test" />
                        <div className='img-filter-light'></div>
                        <h2>Titre de la location 4</h2>
                    </Link>
                </li>
            </ul>
        </section>
    )
}

export default HostingGallery
