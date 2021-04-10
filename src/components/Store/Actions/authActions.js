import { getQueriesForElement } from "@testing-library/dom";

export const emailAuth = (credentials) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS' })
        }).catch((err) => {
            dispatch({ type: 'LOGIN_ERR', err})
        });
    }
}

export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch({ type: 'SIGNOUT_SUCCESS'})
        });
    }
}

export const signUp = (newUser) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirestore();
        const firestore = getQueriesForElement();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email, newUser.password
        ).then((res) => {
            return firestore.collection('users').doc(res.user.uid).set({
                name: newUser.name,
                initials: newUser.name[0] = newUser.name[1],
                acountType: null
            })
        }).then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS'})
        }).catch((err) => {
            dispatch({ type: 'SIGNUP_ERROR' })
        })
    }
}