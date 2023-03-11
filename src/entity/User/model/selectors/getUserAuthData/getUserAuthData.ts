import { createSelector } from '@reduxjs/toolkit';
import { getUser } from '../getUser/getUserData';
import { UserStateScheme } from '../../types/UserStateScheme';

export const getUserAuthData = createSelector(getUser, (userState:UserStateScheme) => userState.authData);
