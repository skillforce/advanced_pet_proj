import { createSelector } from '@reduxjs/toolkit';
import { getLoginState } from '../../selectors/getLoginState/getLoginState';
import { LoginSchema } from '../../types/loginSchema';

export const getLoginValue = createSelector(
    getLoginState,
    (loginState: LoginSchema|undefined) => loginState?.login,
);
