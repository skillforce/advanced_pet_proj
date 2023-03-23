import axios from 'axios';
import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { userActions } from 'entity/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { loginByUsername } from './loginByUsername';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

describe('loginByUsername.test', () => {
    // let dispatch: Dispatch;
    // let getState: () => StateSchema;
    // beforeEach(() => {
    //     dispatch = jest.fn();
    //     getState = jest.fn();
    // });
    // test('test loginByUserName thunk success', async () => {
    //     const finallyUserData = { username: 'Denis', id: '1' };
    //     mockedAxios.post.mockReturnValue(Promise.resolve({ data: finallyUserData }));
    //     const action = loginByUsername();
    //     const result = await action(dispatch, getState, undefined);
    //
    //     expect(result.payload).toEqual(finallyUserData);
    //     expect(mockedAxios.post).toHaveBeenCalled();
    //     expect(result.meta.requestStatus).toBe('fulfilled');
    //     expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(finallyUserData));
    // });
    //
    // test('test loginByUserName thunk error', async () => {
    //     mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
    //     const action = loginByUsername({ username: 'Denis', password: '1233' });
    //     const result = await action(dispatch, getState, undefined);
    //
    //     expect(dispatch).toHaveBeenCalledTimes(2);
    //     expect(mockedAxios.post).toHaveBeenCalled();
    //     expect(result.meta.requestStatus).toBe('rejected');
    //     expect(result.payload).toBe('error');
    // });
    test('test loginByUserName thunk success', async () => {
        const finallyUserData = { username: 'Denis', id: '1' };
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: finallyUserData }));
        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk({ username: 'Denis', password: '12345' });

        expect(result.payload).toEqual(finallyUserData);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(finallyUserData));
    });
    test('test loginByUserName thunk error', async () => {
        const errorResponse = { status: 403 };
        mockedAxios.post.mockReturnValue(Promise.resolve(errorResponse));
        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk({ username: 'Denis', password: '12233' });

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('error');
    });
});
