'use client'
import { FC, useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { signInWithPopup, signOut, onAuthStateChanged,  GoogleAuthProvider, User, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../firebase';


interface AuthProviderProps {
    children: JSX.Element | JSX.Element[]
}

export const AuthContextProvider: FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {

      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser)
      })
      return () => unsubscribe()
   
  }, [user])

    //Sign Up with email and password
    const signUp = async(email:string, password:string, displayName: string) => {
      try {
        setLoading(true)
        const resp = await createUserWithEmailAndPassword(auth, email, password);
        const { user: firebaseUser } = resp;
        //Update User displayName 
        await updateProfile(auth.currentUser!, {displayName})
        setUser(firebaseUser) // Update user state here
      } catch (error) {
        console.log(error)
      }finally{
        setLoading(false)
      }
    }
    

    //Login with google
    const googleSignIn = () => {
      const provider = new GoogleAuthProvider()
      signInWithPopup(auth, provider)
  }

    //Login with email and password
    const signIn = async(email:string, password:string) => {
      try {
        setLoading(true)
        const resp = await signInWithEmailAndPassword(auth, email, password);
        const { user: firebaseUser } = resp;
        setUser(firebaseUser)

      } catch (error) {
        console.log(error)
      }finally {
        setLoading(false)
      }
    }

    //Logout
    const logout = () => {
      signOut(auth)
      setLoading(false)
    };
  
    return (
      <AuthContext.Provider value={{ logout, loading, user, googleSignIn, signUp, signIn }}>
        {children}
      </AuthContext.Provider>
    );
  };
  
  export const UserAuth = () => {
    return useContext(AuthContext)
  }