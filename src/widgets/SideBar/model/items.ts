import { FunctionComponent, SVGProps } from 'react';
import { RoutePaths } from 'shared/config/routeConfig/routeConfig';
import MainPageIcon from 'shared/assets/icons/mainPageIcon.svg';
import AboutPageIcon from 'shared/assets/icons/aboutPageIcon.svg';
import ProfilePageIcon from 'shared/assets/icons/profilePageIcon.svg';

export interface SideBarItemType {
    path: string
    Icon: FunctionComponent<SVGProps<SVGSVGElement>>
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
    },
];
