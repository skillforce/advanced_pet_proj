import React, { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_HOVER = 'clearHover',
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
    disabled?: boolean
}

// PropsWithChildren(type for react 18+)
export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        square,
        size = ButtonSize.M,
        disabled,
        ...restBtnProps
    } = props;

    const mods: Record<string, boolean> = {
        [cls.square]: square,
        [cls.disabled]: disabled,

    };
    return (
        <button
            type="button"
            disabled={disabled}
            className={classNames(cls.buttonContainer, mods, [className, cls[theme], cls[size]])}
            {...restBtnProps}
        >
            {children}
        </button>
    );
};
