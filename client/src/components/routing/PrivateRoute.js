import React from 'react';
import PropTypes from 'prop-types';
// tambahkan import
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({ component: Component, auth: {isAuthenticated,
    loading}, ...rest }) => (
     <Route {...rest} render={props => !isAuthenticated && !loading ? (<Redirect
    to='/login' />) : (<Component {...props} />)} />
    );

PrivateRoute.propTypes = {
 auth: PropTypes.object.isRequired // snippets ptor
}
const mapStateToProps = state => ({
 auth: state.auth
})
// Dan update export default
export default connect(mapStateToProps)(PrivateRoute);