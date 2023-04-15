import { createSelector } from '@reduxjs/toolkit';
import { getLoginState } from '../../selectors/getLoginState/getLoginState';
import { LoginSchema } from '../../types/loginSchema';

// eslint-disable-next-line max-len
export const getLoginPassword = createSelector(
    getLoginState,
    (loginState:LoginSchema|undefined) => loginState?.password,
);
