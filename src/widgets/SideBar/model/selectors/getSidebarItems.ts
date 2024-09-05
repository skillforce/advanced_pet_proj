import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entity/User';
import MainPageIcon from '@/shared/assets/icons/mainPageIcon.svg';
import AboutPageIcon from '@/shared/assets/icons/aboutPageIcon.svg';
import ProfilePageIcon from '@/shared/assets/icons/profilePageIcon.svg';
import ArticlePageIcon from '@/shared/assets/icons/articlePageIcon.svg';
import { SideBarItemType } from '../../model/types/sidebar';
import {
    getRouteAbout,
    getRouteArticles,
    getRouteMain,
    getRouteProfile,
} from '@/shared/consts/router';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userAuthData) => {
        const sideBarItemsList: SideBarItemType[] = [
            {
                path: getRouteMain(),
                Icon: MainPageIcon,
                text: 'Main page',
            },
            {
                path: getRouteAbout(),
                Icon: AboutPageIcon,
                text: 'About',
            },
        ];
        if (userAuthData) {
            sideBarItemsList.push(
                {
                    path: getRouteProfile(userAuthData.id),
                    Icon: ProfilePageIcon,
                    text: 'Profile Page',
                    authOnly: true,
                },
                {
                    path: getRouteArticles(),
                    Icon: ArticlePageIcon,
                    text: 'Articles',
                    authOnly: true,
                },
            );
        }
        return sideBarItemsList;
    },
);
