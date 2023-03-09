import { createSelector } from '@reduxjs/toolkit';
import { getLoginState } from '../../selectors/getLoginState/getLoginState';
import { LoginSchema } from '../../types/loginSchema';

export const getIsLoading = createSelector(getLoginState, (loginState:LoginSchema) => loginState.isLoading);
