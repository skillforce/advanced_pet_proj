import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RatingCard } from '@/entity/Rating';
import { getUserAuthData } from '@/entity/User';
import { Skeleton } from '@/shared/ui/Skeleton';
import {
    useGetProfileRatingQuery,
    useRateProfileMutation,
} from '../../api/profileRatingApi';

export interface ProfileRatingProps {
    className?: string;
    profileId: string;
}

const ProfileRating = memo(({ className, profileId }: ProfileRatingProps) => {
    const { t } = useTranslation('profile');
    const userData = useSelector(getUserAuthData);

    const { data, isLoading } = useGetProfileRatingQuery({
        userId: userData?.id ?? '',
        profileId,
    });
    const [rateProfile] = useRateProfileMutation();

    const handleRateProfile = useCallback(
        (starsCount: number, feedback?: string) => {
            try {
                rateProfile({
                    rate: starsCount,
                    userId: userData?.id ?? '',
                    feedback,
                    profileId,
                });
            } catch (e) {
                // error handling
                console.log(e);
            }
        },
        [profileId, rateProfile, userData?.id],
    );

    const onCancel = useCallback(
        (starsCount: number) => {
            handleRateProfile(starsCount);
        },
        [handleRateProfile],
    );

    const onAccept = useCallback(
        (starsCount: number, feedback?: string) => {
            handleRateProfile(starsCount, feedback);
        },
        [handleRateProfile],
    );

    if (isLoading) {
        return <Skeleton width="100%" height={120} />;
    }

    const rating = data?.[0];

    return (
        <RatingCard
            onCancel={onCancel}
            onAccept={onAccept}
            rate={rating?.rate}
            className={className}
            hasFeedback
            title={t('Rate this profile please')}
            feedbackTitle={t(
                "Leave your comment it'll help us to improve quality of service",
            )}
        />
    );
});

export default ProfileRating;
