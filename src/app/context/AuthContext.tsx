'use client'
import React, { createContext, useState } from 'react';

export type AuthState = {
  login: () => void;
  logout: () => void;
  isAuthenticated: boolean;
  user: string
};

export const AuthContext = createContext<AuthState>({} as AuthState);