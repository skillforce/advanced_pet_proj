import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import { VStack } from 'shared/ui/Stack';
import { EditableProfileCard } from 'features/editableProfileCard';
import { useParams } from 'react-router-dom';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import {
    EditableProfileCardHeader,
} from 'features/editableProfileCard/ui/EditableProfileCardHeader/EditableProfileCardHeader';

interface ProfilePageProps {
    className?: string
}

function ProfilePage({ className }:ProfilePageProps) {
    const queryParams = useParams<{id:string}>();
    const { t } = useTranslation('profile');

    const { id } = queryParams;

    if (!id) {
        return <Text title={t('Profile doesn\'t founded')} theme={TextTheme.ERROR} />;
    }
    return (
        <Page className={classNames('', {}, [className])}>
            <VStack
                max
                gap="16"
            >
                <EditableProfileCardHeader />
                <EditableProfileCard id={id} />
            </VStack>
        </Page>
    );
}

export default memo(ProfilePage);
