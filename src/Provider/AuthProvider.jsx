import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app);
export const AuthContext = createContext(null);


const AuthProvider = ({children}) => {

    const [user , setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    
    // create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in
    const logIn = (email , password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // log out
    const logOut = () => {
        return signOut(auth);
    }
    
    
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth , currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return ()=> {
            unSubscribe();
        }
    },[])
    
    const AuthInfo = {
        user, 
        loading,
        createUser,
        logIn,
        logOut
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.object.isRequired,
}


export default AuthProvider;