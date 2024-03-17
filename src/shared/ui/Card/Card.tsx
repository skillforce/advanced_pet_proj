import React, { HTMLAttributes, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINED = 'outlined'
}
interface CardProps extends HTMLAttributes<HTMLDivElement>{
    className?: string
    children:ReactNode
    theme?:CardTheme
    max?:boolean
}

export const Card = ({
    className, children, theme = CardTheme.NORMAL, max, ...otherProps
}: CardProps) => (
    <div className={classNames(cls.CardContainer, { [cls.max]: max }, [className, cls[theme]])} {...otherProps}>
        {children}
    </div>
);
