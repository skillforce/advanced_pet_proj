import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar';
import { Dropdown } from '@/shared/ui/Popups';
import {
    getUserAuthData, isUserAdmin, isUserManager, userActions,
} from '@/entity/User';
import { RoutePaths } from '@/shared/consts/router';

interface AvatarDropdownProps {
    className?: string
}

export const AvatarDropdown = memo(({ className }: AvatarDropdownProps) => {
    const userAuthData = useSelector(getUserAuthData);
    const dispatch = useDispatch();
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const isAdminPanelAvailable = isManager || isAdmin;

    const { t } = useTranslation();

    const onLogOut = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (!userAuthData) {
        return null;
    }

    return (
        <Dropdown
            className={classNames('', {}, [className])}
            direction="bottom left"
            items={[
                ...(isAdminPanelAvailable ? [
                    {
                        content: t('Admin panel'),
                        href: RoutePaths.admin_panel,
                    },
                ] : []),
                {
                    content: t('Profile'),
                    href: `${RoutePaths.profile}/${userAuthData.id}`,
                },
                {
                    content: t('Log out'),
                    onClick: onLogOut,
                },
            ]}
            trigger={<Avatar size={30} src={userAuthData.avatar} />}
        />
    );
});
