import { async } from '@firebase/util';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, signInWithEmailAndPassword } from 'firebase/auth';
import { FirebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async () => {

    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        // const credentials = GoogleAuthProvider.credentialFromResult(result); // Para obtener credenciales como el token
        const { displayName, email, photoURL, uid } = result.user;

        return {
            ok: true,
            displayName, email, photoURL, uid
        }

    } catch (error) {

        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode)

        return {
            ok: false,
            errorMessage

        }

    }
}

export const registerUserWithEmailPassword = async ({ email, password, displayName }) => {

    try {

        const result = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL } = result.user;
        // TODO: actualizar el displayName en firebase

        await updateProfile(FirebaseAuth.currentUser, { displayName });

        return {
            ok: true,
            uid, photoURL, email, displayName
        }

    } catch (error) {
        console.log(error)
        return { ok: false, errorMessage: error.message }

    }

}

export const loginWithEmailPassword = async ({ email, password }) => {

    try {

        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL, displayName } = resp.user;

        return {
            ok: true,
            uid, photoURL, displayName
        }

    } catch (error) {

        const errorCode = error.code;
        const errorMessage = error.message;

        return { ok: false, errorMessage }

    }



}

export const logoutFirebase = async () => {

    return await FirebaseAuth.signOut();

}