import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    var provider = new firebase.auth.GoogleAuthProvider();
    var fbProvider = new firebase.auth.FacebookAuthProvider();

    const handleGoogleSignIn = () =>{
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email}
            setLoggedInUser(signedInUser);
            history.replace(from);
        }).catch((error) => {
        });
    }
    const handleFacebookSignIn = () => {
        firebase
        .auth()
        .signInWithPopup(fbProvider)
        .then((result) => {
            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email}
            setLoggedInUser(signedInUser);
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
            
        });
    }
    return (
        <div className="d-flex justify-content-center align-items-center p-5">
            <div className="text-center p-5 bg-primary">
            <div className="login-btn">
                <button className="btn btn-light rounded-pill form-control" onClick={handleGoogleSignIn}> 
                <FontAwesomeIcon className="mr-2" icon={faGoogle} /> Google Sign In</button>
                <br/>
                <button className="btn btn-light rounded-pill form-control mt-4" onClick={handleFacebookSignIn}>
                <FontAwesomeIcon className="mr-2" icon={faFacebookF} /> Login Facebook</button>
            </div>
        </div>
        </div>
    );
};

export default Login;