import { StateSchema } from 'app/providers/StoreProvider';
import { AsyncThunkAction, Dispatch } from '@reduxjs/toolkit';

type ActionCreatorType<Returned, ThunkArg, RejectedValue>
    = (arg:ThunkArg) => AsyncThunkAction<Returned, ThunkArg, {rejectValue: RejectedValue}>
export class TestAsyncThunk<Returned, ThunkArg, RejectedValue> {
    dispatch:Dispatch;

    getState:()=>StateSchema;

    actionCreator:ActionCreatorType<Returned, ThunkArg, RejectedValue>;

    constructor(actionCreator:ActionCreatorType<Returned, ThunkArg, RejectedValue>) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn();
    }

    async callThunk(arg:ThunkArg) {
        const action = this.actionCreator(arg);
        const result = await action(this.dispatch, this.getState, undefined);
        return result;
    }
}
