import React, {Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import DashboardAction from './DashboardAction';


//import PropTypes from 'prop-types';
const Dashboard = ({ getCurrentProfile, 
    auth: {user}, 
    profile: { profile, loading } 
}) => {
    useEffect(() => {
        getCurrentProfile();
        }, []);
       
 return loading && profile === null ? <Spinner/> : <Fragment>
 <h1 className="large text-primary">Dashboard</h1>
 <p className="lead">
 <i className="fas fa-user"></i>
 Welcome { user && user.name } 
 </p>
{ profile !== null ? (
    <Fragment>
        <DashboardAction />
    </Fragment>
) : (
    <Fragment>
        <p>anda belum memiliki profile, isi profile anda disini</p>
        <Link to="/create-profile" className="btn btn-primary my-1">
            Create Profile
        </Link>
    </Fragment>
) };

</Fragment>
}
Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired, // snippet ptfr
    auth: PropTypes.object.isRequired, // snippet ptor
    profile: PropTypes.object.isRequired // ptor
   };

   const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
   });
   export default connect(mapStateToProps, {getCurrentProfile})(Dashboard);