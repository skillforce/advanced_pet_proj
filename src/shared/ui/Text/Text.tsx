import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY='primary',
    ERROR='error'
}

export enum TextAlign{
    CENTER = 'center',
    RIGHT = 'right',
    LEFT = 'left'
}

interface TextProps {
    className?: string;
    title?:string;
    bodyText?:string;
    theme?:TextTheme;
    align?:TextAlign
}

export const Text = memo(({
    className,
    bodyText,
    title,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
} : TextProps) => {
    const mods = {};
    const additional = [className, cls[theme], cls[align]];
    return (
        <div className={classNames(cls.textContainer, mods, additional)}>
            {title && <p className={cls.title}>{title}</p>}
            {bodyText && <p className={cls.bodyText}>{bodyText}</p>}
        </div>
    );
});
