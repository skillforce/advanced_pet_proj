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
    S = 'size_s',
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
    'data-testid'? : string;
}
type HeaderTagType = 'h1'|'h2'|'h3'

const mapSizeToHeaderTag:Record<TextSize, HeaderTagType> = {
    [TextSize.L]: 'h1',
    [TextSize.M]: 'h2',
    [TextSize.S]: 'h3',
};

export const Text = memo(({
    className,
    bodyText,
    title,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
    size = TextSize.M,
    'data-testid': dataTestId = 'Text',
} : TextProps) => {
    const mods = {};
    const HeaderTag:HeaderTagType = mapSizeToHeaderTag[size];
    const additional = [className, cls[theme], cls[align], cls[size]];
    return (
        <div className={classNames(cls.textContainer, mods, additional)}>
            {title && (
                <HeaderTag
                    data-testid={`${dataTestId}.Header`}
                    className={cls.title}
                >
                    {title}
                </HeaderTag>
            )}
            {bodyText && (
                <p
                    data-testid={`${dataTestId}.Paragraph`}
                    className={cls.bodyText}
                >
                    {bodyText}
                </p>
            )}
        </div>
    );
});
