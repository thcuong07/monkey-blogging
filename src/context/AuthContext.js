import React, {createContext, useContext, useEffect, useState} from 'react';
import {doc, getDoc} from "firebase/firestore"
import {auth, db} from "../firebase/firebaseConfig";
import {useNavigate} from "react-router-dom";
import {pathRouter} from "../routers/pathRouter";
import {onAuthStateChanged} from "firebase/auth";


const AuthContext = createContext();
const AuthProvider = (props) => {
    const [userInfo, setUserInfo] = useState({});
    const value = {userInfo, setUserInfo};
    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const docSnapshot = await getDoc(doc(db, "user", user.uid));
                const userData = await docSnapshot.data();
                await setUserInfo(userData);
            } else {
                setUserInfo(null)
            }
        })
    }, []);
    return (
        <AuthContext.Provider value={value} {...props}>

        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const value = useContext(AuthContext);
    if (value === undefined) {
        throw new Error("useAuth is undefined")
    }
    return value
}

export default AuthProvider;