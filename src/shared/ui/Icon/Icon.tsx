import React, { FC, memo, SVGProps } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps extends SVGProps<SVGSVGElement>{
    className?: string
    Svg: FC<SVGProps<SVGSVGElement>>
    inverted?:boolean
}

export const Icon = memo(({
    Svg, className, inverted, ...rest
}: IconProps) => (
    <Svg className={classNames(inverted ? cls.inverted : cls.IconContainer, {}, [className])} {...rest} />
));
