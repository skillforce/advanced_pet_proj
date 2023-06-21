import React, { FC, memo, SVGProps } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps {
    className?: string
    Svg: FC<SVGProps<SVGSVGElement>>
}

export const Icon = memo(({ Svg, className }: IconProps) => (
    <Svg className={classNames(cls.IconContainer, {}, [className])} />
));
