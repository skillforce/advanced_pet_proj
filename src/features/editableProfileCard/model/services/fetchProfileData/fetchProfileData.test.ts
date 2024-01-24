import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Currency } from 'entity/Currency';
import { Country } from 'entity/Country';
import { Profile } from 'entity/Profile';
import { fetchProfileData } from './fetchProfileData';

const profileDataMock:Profile = {
    currency: Currency.USD,
    country: Country.Ukraine,
    firstName: 'Denis',
    lastName: 'Tatarinov',
    city: 'Mogilev',
    age: 26,
    userName: 'sarcasm1613',
    avatar: '',
};
describe('fetchProfileData.test', () => {
    test('test fetchProfileData thunk success', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);

        thunk.api.get.mockReturnValue(Promise.resolve({ data: profileDataMock }));
        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(profileDataMock);
    });
    test('test fetchProfileData thunk error', async () => {
        const errorResponse = { status: 403 };

        const thunk = new TestAsyncThunk(fetchProfileData);

        thunk.api.get.mockReturnValue(Promise.resolve(errorResponse));

        const result = await thunk.callThunk('1');

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
