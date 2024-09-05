import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Currency } from '@/entity/Currency';
import { Country } from '@/entity/Country';
import { Profile } from '@/entity/Profile';
import { ValidateProfileError } from '../../consts/consts';
import { updateProfileData } from './updateProfileData';

const profileDataMock: Profile = {
    currency: Currency.USD,
    country: Country.Ukraine,
    firstName: 'Deniska',
    lastName: 'Tatarinovec',
    city: 'Mogilev',
    age: 26,
    userName: 'sarcasm1613',
    avatar: '',
    id: '2',
};
describe('updateProfileData.test', () => {
    test('test updateProfileData thunk success', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: profileDataMock,
            },
        });

        thunk.api.put.mockReturnValue(
            Promise.resolve({ data: profileDataMock }),
        );
        const result = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(profileDataMock);
    });
    test('test updateProfileData thunk server error', async () => {
        const errorResponse = { status: 403 };

        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: profileDataMock,
            },
        });

        thunk.api.put.mockReturnValue(Promise.resolve(errorResponse));

        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
    });
    test('test updateProfileData thunk validate error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: {
                    ...profileDataMock,
                    firstName: '',
                    lastName: '',
                    age: NaN,
                },
            },
        });

        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
        ]);
    });
});
