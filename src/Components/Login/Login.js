import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../images/logos/logo.png'
import googleIcon from '../images/google.png'

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
      const { displayName, email, photoURL } = result.user;
      const signedInUser = { name: displayName, email, img: photoURL }
      setLoggedInUser(signedInUser);
      storeAuthToken();
    }).catch(function (error) {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
  }

  const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem('token', idToken);
        history.replace(from);
      }).catch(function (error) {
        // Handle error
      });
  }


  const mainDivStyle = {
    textAlign: 'center',
    height: '620px',
    paddingTop: '3%',
}
const loginStyle = {
    width: '40%',
    height: '350px',
    backgroundColor: '#fff',
    margin: '0 auto',
    marginTop: '5%',
    paddingTop: '100px',
    border: '3px solid #DDD2D2'
}
const LoginBtnStyle = {
    width: '60%',
    borderRadius: '20px',
    fontWeight: 'bold',
    border: '2px solid #67A7FD',
    marginTop: '10px',
    marginBottom: '10px',
    paddingRight: '45px'

}
  return (
    <div style={mainDivStyle}>
            <div>
            <Link to="/Home"><img style={{ width: '20%' }} src={logo} alt="logo" /></Link>
            </div>
            <div className="col md-12" style={loginStyle}>
                <h5>Login With</h5>
                <button style={LoginBtnStyle} onClick={handleGoogleSignIn}><img style={{ width: '40px', marginRight: '30px' }} src={googleIcon} alt="googleIcon" /> Continue with Google</button>
                <p>Don't have an account? <span style={{ color: '#67A7FD' }}>Create an account</span></p>
            </div>
        </div>
  );
};

export default Login;