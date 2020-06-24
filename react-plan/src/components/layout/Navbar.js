import React from 'react'
import { Link } from 'react-router-dom'
import SignInLinks from './SignInLinks'
import SignOutLinks from './SignOutLinks'
import { connect } from 'react-redux'

function Navbar(props) {
    const { auth } = props;
    
    const links = auth.uid ? <SignInLinks></SignInLinks> : <SignOutLinks></SignOutLinks>

    return (
        <nav>
            <div className="nav-wrapper z-depth-0 amber lighten-3">
                <div className="container">
                    <Link to='/' className="brand-logo">Logo</Link>
                    { auth.isLoaded && links }
                </div>
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar)