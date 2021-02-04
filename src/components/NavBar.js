import React, {useState} from 'react'

function NavBar() {
    return (
    <> 
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    RBR
                </Link>
            </div>
        </nav>
    </>
        )
}

export default NavBar
