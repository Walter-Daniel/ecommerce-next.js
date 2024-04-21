'use client'
import { FC, useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { signInWithPopup, signOut, onAuthStateChanged,  GoogleAuthProvider, User, createUserWithEmailAndPassword, updateCurrentUser, updateProfile} from 'firebase/auth';
import { auth } from '../firebase';


interface AuthProviderProps {
    children: JSX.Element | JSX.Element[]
}

export const AuthContextProvider: FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
  

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
        setLoading(true)
    }

    const emailAndPasswordSignIn = async(email:string, password:string, displayName: string) => {
      try {
        const resp = await createUserWithEmailAndPassword(auth, email, password);
        const { user } = resp;
        await updateProfile(auth.currentUser, {displayName})
        setUser(user)
      } catch (error) {
        console.log(error)
      }
    }

  
    const logout = () => {
      // Lógica de cierre de sesión
      signOut(auth)
      setLoading(false)
    };

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })

        return () => unsubscribe()
     
    }, [user])
    
  
    return (
      <AuthContext.Provider value={{ logout, loading, user, googleSignIn, emailAndPasswordSignIn }}>
        {children}
      </AuthContext.Provider>
    );
  };
  
  export const UserAuth = () => {
    return useContext(AuthContext)
  }