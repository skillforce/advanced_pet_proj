import { createSelector } from '@reduxjs/toolkit';
import { getUser } from '../getUser/getUserData';
import { UserStateScheme } from '../../types/UserStateScheme';

export const getIsInited = createSelector(
    getUser,
    (userState: UserStateScheme) => userState._inited,
);
