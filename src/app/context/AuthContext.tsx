'use client'
import { User } from 'firebase/auth';
import React, { createContext, useState } from 'react';

export type AuthState = {
  logout: () => void;
  user: User | null;
  googleSignIn: () => void;
  signUp: (email: string, password: string, displayName:string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  loading: boolean;
  error: string | null;
};

export const AuthContext = createContext<AuthState>({} as AuthState);