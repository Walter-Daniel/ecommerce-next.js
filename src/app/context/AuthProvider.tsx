'use client'
import { FC, useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { signInWithPopup, signOut, onAuthStateChanged,  GoogleAuthProvider, User} from 'firebase/auth';
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
      <AuthContext.Provider value={{ logout, loading, user, googleSignIn }}>
        {children}
      </AuthContext.Provider>
    );
  };
  
  export const UserAuth = () => {
    return useContext(AuthContext)
  }