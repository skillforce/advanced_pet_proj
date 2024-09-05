import { StateSchema } from '@/app/providers/StoreProvider';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileIsLoading.test', () => {
    test('should return profile loading', () => {
        const isLoadingDataMock = true;
        const state: DeepPartial<StateSchema> = {
            profile: { isLoading: isLoadingDataMock },
        };
        expect(getProfileIsLoading(state as StateSchema)).toEqual(
            isLoadingDataMock,
        );
    });
    test('should return undefined', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileIsLoading(state as StateSchema)).toEqual(undefined);
    });
});
