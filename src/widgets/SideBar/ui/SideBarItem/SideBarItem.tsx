import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinksTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePaths } from 'shared/config/routeConfig/routeConfig';
import MainPageIcon from 'shared/assets/icons/mainPageIcon.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entity/User';
import { SideBarItemType } from 'widgets/SideBar/model/types/sidebar';
import cls from './SideBarItem.module.scss';

interface SideBarItemProps {
    item:SideBarItemType
    collapsed:boolean
    isAuthOnly?:boolean
}

export const SideBarItem = memo(({ item, collapsed, isAuthOnly }:SideBarItemProps) => {
    const { t } = useTranslation();
    const isAuth = useSelector(getUserAuthData);

    if (!isAuth && isAuthOnly) {
        return null;
    }
    return (
        <AppLink
            className={classNames(cls.link, { [cls.collapsed]: collapsed }, [])}
            theme={AppLinksTheme.SECONDARY}
            to={item.path}
        >
            <item.Icon className={cls.linkIcon} />
            <span>
                {t(item.text)}
            </span>
        </AppLink>
    );
});
