import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../images/logos/logo.png'

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

  return (
    <div style={{ height: '520px', marginTop: '5%', border: 'none' }} className="card text-center d-flex justify-content-center align-items-center">
        <div className="col-md-4 text-center">
          <img style={{ height: '70px' }} src={logo} alt="" />
        </div>
        <div  style={{border:'1px solid black'}} className="col-md-3 card-body">
          <a href="#" className="btn btn-primary" onClick={handleGoogleSignIn}>Login</a>
        </div>
    </div>
  );
};

export default Login;