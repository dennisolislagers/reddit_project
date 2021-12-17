import React from 'react';
import {Link} from "react-router-dom";
import './Header.css';

function Header ({link, title, prefixed, comments, ups}) {

    return (
        <>
            <Link className="link-container" to={link}>{title}</Link>
            <p>{prefixed} |
                {comments} comments -
                {ups} ups</p>
        </>
    );

}
export default Header;