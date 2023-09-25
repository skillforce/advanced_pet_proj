import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData, UserStateScheme } from 'entity/User';
import { RoutePaths } from 'shared/config/routeConfig/routeConfig';
import MainPageIcon from 'shared/assets/icons/mainPageIcon.svg';
import AboutPageIcon from 'shared/assets/icons/aboutPageIcon.svg';
import ProfilePageIcon from 'shared/assets/icons/profilePageIcon.svg';
import ArticlePageIcon from 'shared/assets/icons/articlePageIcon.svg';
import { SideBarItemType } from '../../model/types/sidebar';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userAuthData) => {
        const sideBarItemsList: SideBarItemType[] = [
            {
                path: RoutePaths.main,
                Icon: MainPageIcon,
                text: 'Main page',
            },
            {
                path: RoutePaths.about,
                Icon: AboutPageIcon,
                text: 'About',
            },
        ];
        if (userAuthData) {
            sideBarItemsList.push(
                {
                    path: `${RoutePaths.profile}/${userAuthData.id}`,
                    Icon: ProfilePageIcon,
                    text: 'Profile Page',
                    authOnly: true,
                },
                {
                    path: RoutePaths.articles,
                    Icon: ArticlePageIcon,
                    text: 'Articles',
                    authOnly: true,
                },
            );
        }
        return sideBarItemsList;
    },

);
