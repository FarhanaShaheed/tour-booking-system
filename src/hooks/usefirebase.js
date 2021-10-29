import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from './../Login/Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [isLoading, setLoading] = useState(true);

    const auth = getAuth();

    const signInUsingGoogle = () =>{
        const googleProvider = new GoogleAuthProvider();
         return signInWithPopup(auth, googleProvider)
      /*  .then(result =>{
           console.log(result.user);
       }) */
        //.finally(()=> setLoading(false));
    }
    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth, user =>{
            if(user){
                setUser(user);
            }
            else{
                setUser({})
            }
            setLoading(false);
        });
        return() => unsubscribed;
    },[])
    
    const logOut = () =>{
        setLoading(true);
        signOut(auth)
        .then(()=>{})
        .finally(()=>setLoading(false));
    }

    return{
        user,
        isLoading,
        signInUsingGoogle,
        logOut
    }
}
export default useFirebase;