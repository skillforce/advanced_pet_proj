import React, { HTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement>{
    className?: string
    children:ReactNode
}

export const Card = ({ className, children, ...otherProps }: CardProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.CardContainer, {}, [className])} {...otherProps}>
            {children}
        </div>
    );
};
