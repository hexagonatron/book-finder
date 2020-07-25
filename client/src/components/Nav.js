import React,{useState} from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {

    const [menuState, toggleMenuState] = useState({visible: false})

    return (
        <nav className="navbar has-text-black" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                    <h1 className="is-size-5 has-text-weight-medium navbar-item has-text-black">Google Book Search</h1>

                <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navDropdown" onClick={() => toggleMenuState({visible: !menuState.visible})}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navDropdown" className={`navbar-menu ${menuState.visible?"is-active":""}`}>
                <div className="navbar-start">
                    <Link to="/search" className="navbar-item has-text-black">Search</Link>
                    <Link to="saved" className="navbar-item has-text-black">Saved</Link>
                </div>
            </div>
        </nav>
    );
};

export default Nav;