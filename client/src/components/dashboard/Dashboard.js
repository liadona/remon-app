import React, {Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import DashboardAction from './DashboardAction';
import Experience from './Experience';
import Education from './Education';


//import PropTypes from 'prop-types';
const Dashboard = ({ getCurrentProfile, deleteAccount,
    auth: {user}, 
    profile: { profile, loading } 
}) => {
    useEffect(() => {
        getCurrentProfile();
        }, []);
       
 return loading && profile === null ? <Spinner/> : <Fragment> 
     <br />
     <br />
     <br />
 <h1 className="large text-primary">Dashboard</h1>
 <p className="lead">
 <i className="fas fa-user"></i>
 Welcome { user && user.name } 
 </p>
{ profile !== null ? (
    <Fragment>
        <DashboardAction />
        <Experience experience={profile.experience} />
        <Education education={profile.education} />   

        <div className="my-2">
            <button className="btn btn-danger" onClick={() => deleteAccount()}>
                <i className='fas fa-user-minus'/>
                Delete My Account
            </button>
        </div>
        
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
    deleteAccount: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired, // snippet ptor
    profile: PropTypes.object.isRequired // ptor
   };

   const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
   });
   export default connect(mapStateToProps, {getCurrentProfile, deleteAccount})(Dashboard);