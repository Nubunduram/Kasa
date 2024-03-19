import React from 'react'
import HostingTitle from "../HostingTitle/HostingTitle";
import TagsContainer from "../TagsContainer/TagsContainer";
import RatingAndHosting from "../RatingAndHosting/RatingAndHosting";

const Detail = ({ title, location, tags, host, rating }) => {
    return (
        <div id='detail'>
            <div>
                <HostingTitle title={title} location={location} />
                <TagsContainer tags={tags} />
            </div>
            <RatingAndHosting host={host} rating={rating} />
        </div>
    )
}

export default Detail
