'use client'
import { User } from 'firebase/auth';
import React, { createContext, useState } from 'react';

export type AuthState = {
  logout: () => void;
  user: User | null;
  googleSignIn: () => void;
  loading: boolean;
};

export const AuthContext = createContext<AuthState>({} as AuthState);