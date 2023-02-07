import React, {FC} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss'
import {Link, LinkProps} from 'react-router-dom';


export enum AppLinksTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    className?: string,
    theme?: AppLinksTheme
}

//PropsWithChildren(type for react 18+)
export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        className,
        children,
        to,
        theme = AppLinksTheme.PRIMARY,
        ...restPops
    } = props;

    return (
        <Link to={to}
              {...restPops}
              className={classNames(cls.appLinkContainer, {}, [className, cls[theme]])}>
            {children}
        </Link>
    );
};