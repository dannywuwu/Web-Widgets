import firebase, { firestore } from 'firebase';
import 'firebase/firestore'
import 'firebase/auth'

export const signIn = (credentials) => {
    return (dispatch, getState) => {
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS' })
        }).catch((err) => {
            dispatch({ type: 'LOGIN_ERROR', err })
        });
    }
}

export const signOut = () => {
    return (dispatch, getState) => {
        firebase.auth().signOut().then(() => {
            dispatch({ type: 'SIGNOUT_SUCCESS' });
        });
    }
}

export const signUp = (newUser) => {
    return (dispatch, getState) => {
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email, 
            newUser.password,
            ).then((resp) => {
                let userInfo = {
                    firstName: newUser.firstName,
                    lastName: newUser.lastName,
                    initials: newUser.firstName[0] + newUser.lastName[0]
                }
                console.log(userInfo);
                
                // resp.user has info about the user that just signed up
                return firestore.collection('users').doc(resp.user.uid).set(userInfo);
            }).then(() => {
                dispatch({ type: 'SIGNUP_SUCCESS' })
            }).catch(err => {
                dispatch({ type: 'SIGNUP_ERROR', err})
            });
    }
}