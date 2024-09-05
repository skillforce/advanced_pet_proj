import { rtkApi } from '@/shared/api/rtkApi';
import { Rating } from '@/entity/Rating';

interface GetProfileRatingArg {
    userId: string;
    profileId: string;
}
interface RateProfileRatingArg extends GetProfileRatingArg {
    rate: number;
    feedback?: string;
}

const articleRatingApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getProfileRating: build.query<Rating[], GetProfileRatingArg>({
            query: ({ profileId, userId }) => ({
                url: '/profile-ratings',
                params: {
                    profileId,
                    userId,
                },
            }),
        }),
        rateProfile: build.mutation<void, RateProfileRatingArg>({
            query: (arg) => ({
                url: '/profile-ratings',
                method: 'POST',
                body: arg,
            }),
        }),
    }),
});

export const { useGetProfileRatingQuery } = articleRatingApi;
export const { useRateProfileMutation } = articleRatingApi;
