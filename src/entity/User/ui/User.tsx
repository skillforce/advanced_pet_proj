import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './User.module.scss';

interface UserProps {
    className?: string
}

export const User = memo(({ className } : UserProps) => (
    <div className={classNames(cls.userContainer, {}, [className])} />
));
