import { createSelector } from '@reduxjs/toolkit';
import { getLoginState } from '../../selectors/getLoginState/getLoginState';
import { LoginSchema } from '../../types/loginSchema';

export const getError = createSelector(getLoginState, (loginState:LoginSchema) => loginState.error);
