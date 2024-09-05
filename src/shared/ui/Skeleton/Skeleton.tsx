import React, { CSSProperties, useMemo } from 'react';
import { classNames } from '../../lib/classNames/classNames';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
    className?: string;
    height?: string | number;
    width?: string | number;
    borderRadius?: string | number;
}

export const Skeleton = ({
    className,
    height,
    width,
    borderRadius,
}: SkeletonProps) => {
    const styles: CSSProperties = useMemo(
        () => ({
            width,
            height,
            borderRadius,
        }),
        [borderRadius, height, width],
    );

    return (
        <div
            style={styles}
            className={classNames(cls.SkeletonContainer, {}, [className])}
        />
    );
};
