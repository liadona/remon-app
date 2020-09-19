import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading}, logout }) => {

//membuat link auth dan guest non auth
const authLinks = (
        <ul>
            <li><a href="#!">Members</a></li>
            <li><Link to="/dashboard">
                <i className='fas fa-user' />{' '}
                <span className='hide-sm'>Dashboard</span>
                </Link>
            </li>            
            <li><a onClick={logout} href='#!'>
                <i className='fas fa-sign-out-alt' />{' '}
                <span className='hide-sm'>Logout</span>
                </a>
            </li>            
        </ul>
    );

    const guestLinks = (
        <ul>
            
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
        </ul>
    );
   

 return (
    <nav className="navbar bg-dark">
        <h1>
            <a href="/"><i className="fab fa-battle-net"></i> Remonds App</a>
        </h1>
        { !loading && (<Fragment>{ isAuthenticated ? authLinks : guestLinks }
        </Fragment>) }

    </nav>
 )
};

// membuat proptypes
Navbar.propTypes = {
    logout: PropTypes.func.isRequired, // ptfr
    auth: PropTypes.object.isRequired //ptor
   }
// membuat mapStateToProps
const mapStateToProps = state => ({
    auth: state.auth
   });

export default connect(mapStateToProps, { logout })(Navbar);