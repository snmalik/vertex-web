import { 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged 
} from "firebase/auth";
import { auth } from "../../firebase";

export const loginAdmin = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        throw error;
    }
};

export const logoutAdmin = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        throw error;
    }
};

export const observeAuth = (callback) => {
    return onAuthStateChanged(auth, callback);
};
