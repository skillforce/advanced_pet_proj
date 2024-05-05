import React, { memo, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export enum AppLinksTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    ACTIVE = 'active',

}

interface AppLinkProps extends LinkProps {
    className?: string,
    theme?: AppLinksTheme
    children?:ReactNode
}

// PropsWithChildren(type for react 18+)
export const AppLink = memo((props:AppLinkProps) => {
    const {
        className,
        children,
        to,
        theme = AppLinksTheme.PRIMARY,
        ...restPops
    } = props;

    return (
        <Link
            to={to}
            {...restPops}
            className={classNames(cls.appLinkContainer, {}, [className, cls[theme]])}
        >
            {children}
        </Link>
    );
});
