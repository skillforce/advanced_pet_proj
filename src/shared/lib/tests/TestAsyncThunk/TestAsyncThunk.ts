import { AsyncThunkAction, Dispatch } from '@reduxjs/toolkit';
import axios, { AxiosStatic } from 'axios';
import { StateSchema } from '@/app/providers/StoreProvider';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

type ActionCreatorType<Returned, ThunkArg, RejectedValue> = (
    arg: ThunkArg,
) => AsyncThunkAction<Returned, ThunkArg, { rejectValue: RejectedValue }>;
export class TestAsyncThunk<Returned, ThunkArg, RejectedValue> {
    dispatch: Dispatch;

    getState: () => StateSchema;

    actionCreator: ActionCreatorType<Returned, ThunkArg, RejectedValue>;

    api: jest.MockedFunctionDeep<AxiosStatic>;

    navigate: jest.MockedFn<any>;

    constructor(
        actionCreator: ActionCreatorType<Returned, ThunkArg, RejectedValue>,
        state?: DeepPartial<StateSchema>,
    ) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn(() => state as StateSchema);

        this.navigate = jest.fn();
        this.api = mockedAxios;
    }

    async callThunk(arg: ThunkArg) {
        const action = this.actionCreator(arg);
        const result = await action(this.dispatch, this.getState, {
            api: this.api,
            navigate: this.navigate,
        });
        return result;
    }
}
