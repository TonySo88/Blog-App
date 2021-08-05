import React from 'react';
import { Link } from 'react-router-dom'

import "./nav.css"

const Nav = () => {
    return (
        <div className="top-container">
            <Link className="link logo" to="/">BLOG.APP</Link>
            <div className="nav-container">
                <Link className="link" to="/blog-entry">New Entry</Link>
                <Link className="link" to="/feed">Feed</Link>
                <Link className="link" to="/">Sign in/Sign up</Link>
                <Link className="link" >Profile</Link>
                {/* ^^ NEED TO BUILD OUT A PROFILE COMPONENT ^^ */}
            </div>
        </div>
    )
}

export default Nav