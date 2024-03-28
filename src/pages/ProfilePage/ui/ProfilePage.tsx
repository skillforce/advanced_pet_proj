import React, { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';

import { VStack } from '@/shared/ui/Stack';
import { EditableProfileCard } from '@/features/editableProfileCard';
import { getUserAuthData } from '@/entity/User';
import { ProfileRating } from '@/features/profileRating';
import { Page } from '@/widgets/Page';

interface ProfilePageProps {
    className?: string
}

function ProfilePage({ className }:ProfilePageProps) {
    const queryParams = useParams<{id:string}>();
    const { id } = queryParams;
    const authData = useSelector(getUserAuthData);

    if (!id) {
        return null;
    }

    const ratingCard = id !== authData?.id && <ProfileRating profileId={id} />;

    return (
        <Page className={classNames('', {}, [className])}>
            <VStack
                max
                gap="16"
            >
                <EditableProfileCard id={id} />
                {ratingCard}
            </VStack>
        </Page>
    );
}

export default memo(ProfilePage);
