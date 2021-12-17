import React from 'react';
import './SubHeader.css';

function  SubHeader ({url, title, description, subscribers, image, alt}) {
    return (
        <div>
            <h1 className="title-container">{title}</h1>
            <a className="url-container" href={url}>Klik voor de link</a>
            <h2 className="description-container">{description}</h2>
            <h3 className="subscribers-container">subscribers: {subscribers}</h3>
            <img className="image-container" src={image} alt={alt}/>
        </div>
    );
}

export default SubHeader;