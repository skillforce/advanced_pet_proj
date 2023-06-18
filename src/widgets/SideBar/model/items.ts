import { FunctionComponent, SVGProps } from 'react';
import { RoutePaths } from 'shared/config/routeConfig/routeConfig';
import MainPageIcon from 'shared/assets/icons/mainPageIcon.svg';
import AboutPageIcon from 'shared/assets/icons/aboutPageIcon.svg';
import ProfilePageIcon from 'shared/assets/icons/profilePageIcon.svg';
import ArticlePageIcon from 'shared/assets/icons/articlePageIcon.svg';

export interface SideBarItemType {
    path: string
    Icon: FunctionComponent<SVGProps<SVGSVGElement>>
    authOnly?:boolean
    text: string
}

export const sideBarItems: SideBarItemType[] = [
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
    {
        path: RoutePaths.profile,
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
];
