import React, { memo } from 'react';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page/Page';
import { VStack } from '@/shared/ui/Stack';
import { EditableProfileCard } from '@/features/editableProfileCard';

interface ProfilePageProps {
    className?: string
}

function ProfilePage({ className }:ProfilePageProps) {
    const queryParams = useParams<{id:string}>();
    const { id } = queryParams;

    return (
        <Page className={classNames('', {}, [className])}>
            <VStack
                max
                gap="16"
            >
                <EditableProfileCard id={id} />
            </VStack>
        </Page>
    );
}

export default memo(ProfilePage);
