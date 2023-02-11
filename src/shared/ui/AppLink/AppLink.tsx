import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import cls from './AppLink.module.scss';

export enum AppLinksTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    className?: string,
    theme?: AppLinksTheme
}

// PropsWithChildren(type for react 18+)
export const AppLink: FC<AppLinkProps> = (props) => {
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
};
