import React from 'react';
import {Link} from "react-router-dom";

function Header ({link, title, prefixed, comments, ups}) {

    return (
        <>
            <h2><Link to={link}>{title}</Link></h2>
            <p>{prefixed} |
                {comments} comments -
                {ups} ups</p>
        </>
    );

}
export default Header;