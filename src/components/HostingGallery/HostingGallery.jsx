import React from 'react';
import { Link } from 'react-router-dom';
import hostingList from "../../assets/hosting-list.json";

const HostingGallery = () => {
    return (
        <section id="hosting-gallery">
            <ul>
                {hostingList.map((item) => (
                    <li key={item.id}>
                        <Link to={`/Kasa/fiche-logement/${item.id}`}>
                            <img src={item.cover} alt={item.title} />
                            <div className='img-filter-light'></div>
                            <h2>{item.title}</h2>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default HostingGallery;
