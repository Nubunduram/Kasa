import React from 'react'
import HostingTitle from "../HostingTitle/HostingTitle";
import TagsContainer from "../TagsContainer/TagsContainer";
import RatingAndHosting from "../RatingAndHosting/RatingAndHosting";

const Detail = ({ title, location, tags, host, rating }) => {
    return (
        <section id='detail'>
            <div id='tags-and-title'>
                <HostingTitle title={title} location={location} />
                <TagsContainer tags={tags} />
            </div>
            <RatingAndHosting host={host} rating={rating} />
        </section>
    )
}

export default Detail
