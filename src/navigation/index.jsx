import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from '../context/AuthContext';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import useAuthContext from '../hooks/useAuhtContext';

const Navigation = () => {
const { isLoggedIn } = useAuthContext();

  return isLoggedIn ? <AppNavigator /> : <AuthNavigator />

  
};

export default Navigation;