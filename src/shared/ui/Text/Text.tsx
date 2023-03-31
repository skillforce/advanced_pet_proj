import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY='primary',
    ERROR='error'
}

interface TextProps {
    className?: string;
    title?:string;
    bodyText?:string;
    theme?:TextTheme;
}

export const Text = memo(({
    className,
    bodyText,
    title,
    theme = TextTheme.PRIMARY,
} : TextProps) => {
    const mods = {};
    return (
        <div className={classNames(cls.textContainer, mods, [className, cls[theme]])}>
            {title && <p className={cls.title}>{title}</p>}
            {bodyText && <p className={cls.bodyText}>{bodyText}</p>}
        </div>
    );
});
