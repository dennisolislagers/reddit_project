import React from 'react';

function  SubHeader ({url, title, description, subscribers, image, alt}) {
    return (
        <div>
            <h1><a href={url}>{title}</a></h1>
            <h2>{description}</h2>
            <h3>{subscribers}</h3>
            <img src={image} alt={alt}/>
        </div>
    );
}

export default SubHeader;