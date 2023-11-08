import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY='primary',
    INVERTED='inverted',
    ERROR='error'
}

export enum TextAlign{
    CENTER = 'center',
    RIGHT = 'right',
    LEFT = 'left'
}
export enum TextSize{
    M = 'size_m',
    L = 'size_l',
}

interface TextProps {
    className?: string;
    title?:string;
    bodyText?:string;
    theme?:TextTheme;
    align?:TextAlign;
    size?:TextSize;
}

export const Text = memo(({
    className,
    bodyText,
    title,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
    size = TextSize.M,
} : TextProps) => {
    const mods = {};
    const additional = [className, cls[theme], cls[align], cls[size]];
    return (
        <div className={classNames(cls.textContainer, mods, additional)}>
            {title && <p className={cls.title}>{title}</p>}
            {bodyText && <p className={cls.bodyText}>{bodyText}</p>}
        </div>
    );
});
