import React, { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND_TRANSPARENT = 'background_transparent',
    BACKGROUND_INVERTED = 'background_inverted',

}

export enum ButtonSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl'
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme,
    square?: boolean,
    size?: ButtonSize
}

// PropsWithChildren(type for react 18+)
export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        square,
        size = ButtonSize.M,
        ...restBtnProps
    } = props;

    const mods: Record<string, boolean> = {
        [cls.square]: square,

    };
    return (
        <button
            type="button"
            className={classNames(cls.buttonContainer, mods, [className, cls[theme], cls[size]])}
            {...restBtnProps}
        >
            {children}
        </button>
    );
};
