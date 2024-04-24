'use client'

import { FC, useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { signInWithPopup, signOut, onAuthStateChanged,  GoogleAuthProvider, User, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, setPersistence, browserLocalPersistence} from 'firebase/auth';
import { auth } from '../firebase';
import { FirebaseError } from 'firebase/app';
import { toast } from 'react-toastify';

interface AuthProviderProps {
    children: JSX.Element | JSX.Element[]
}

export const AuthContextProvider: FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
      });
      
      const persistence = browserLocalPersistence;
      setPersistence(auth, persistence)
    
      return () => unsubscribe();
    }, []);

    //Sign Up with email and password
    const signUp = async(email:string, password:string, displayName: string) => {
      try {
        setLoading(true)
        const resp = await createUserWithEmailAndPassword(auth, email, password);
        const { user: firebaseUser } = resp;
        //Update User displayName 
        await updateProfile(auth.currentUser!, {displayName})
        setUser(firebaseUser);
        setError(null);
      } catch (error) {
        if (error instanceof FirebaseError) {
          switch (error.code) {
            case 'auth/email-already-in-use':
              setError('Email already in use.');
              break;
            case 'auth/invalid-email':
              setError('Invalid email format.');
              break;
            default:
              console.error('Error creating user:', error);
              setError('Error creating user');
          }
        } else {
          console.error('Unexpected error:', error);
          setError('Unexpected error')
        }
      }finally{
        setLoading(false)
      }
    }

    //Login with google
    const googleSignIn = async() => {
      try {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider);
        setError(null)
      } catch (error) {
        if (error instanceof FirebaseError) {
          switch (error.code) {
            case 'auth/popup-closed-by-user':
              setError('Signing canceled');
              break;
            default:
              setError('Error signing in.');
          }
        } else {
          setError('Unexpected error.');
        }
      }
    }

    //Login with email and password
    const signIn = async(email:string, password:string) => {
      try {
        setLoading(true)
        const resp = await signInWithEmailAndPassword(auth, email, password);
        const { user: firebaseUser } = resp;
        setUser(firebaseUser);
        setError(null);
      } catch (error) {
        if (error instanceof FirebaseError) {
          switch (error.code) {
            case 'auth/invalid-credential':
              setError('Invalid credentials.');
              break;
            case 'auth/wrong-password':
              setError('Incorrect credentials.');
              break;
            default:
              setError('Error signing in.');
          }
        } else {
          setError('Unexpected error.');
        }
      }finally {
        setLoading(false)
      }
    }

    //Logout
    const logout = () => {
      signOut(auth)
      setLoading(false)
    };

    useEffect(() => {
      if (error) {
        toast.error(error, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      setError(null)
    }, [error]);
  
    return (
      <AuthContext.Provider value={{ logout, loading, user, googleSignIn, signUp, signIn, error }}>
        {children}
      </AuthContext.Provider>
    );
  };
  
  export const UserAuth = () => {
    return useContext(AuthContext)
  }