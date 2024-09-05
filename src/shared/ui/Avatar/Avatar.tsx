import React, { CSSProperties, memo, useMemo } from 'react';
import { Skeleton } from '../Skeleton/Skeleton';
import { AppImage } from '../AppImage/AppImage';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import ProfileEmptyIcon from '../../assets/icons/profileEmptyIcon.svg';
import { Icon } from '../Icon/Icon';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
    fallbackInverted?: boolean;
}

export const Avatar = memo(
    ({ className, src, size = 100, alt, fallbackInverted }: AvatarProps) => {
        const mods: Mods = {};
        const styles = useMemo<CSSProperties>(
            () => ({
                width: size,
                height: size,
            }),
            [size],
        );

        const errorFallback = (
            <Icon
                width={size}
                height={size}
                inverted={fallbackInverted}
                Svg={ProfileEmptyIcon}
            />
        );
        const fallback = (
            <Skeleton width={size} height={size} borderRadius="50%" />
        );

        return (
            <AppImage
                fallback={fallback}
                errorFallback={errorFallback}
                src={src}
                style={styles}
                className={classNames(cls.Avatar, mods, [className])}
                alt={alt}
            />
        );
    },
);
