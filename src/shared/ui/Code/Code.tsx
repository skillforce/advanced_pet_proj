import React, { memo, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import copyIcon from '../../assets/icons/contractIcon.svg';
import cls from './Code.module.scss';

interface CodeProps {
    className?: string
    children:ReactNode
}

export const Code = memo(({ className, children }: CodeProps) => (
    <pre className={classNames(cls.CodeContainer, {}, [className])}>
        <Button
            theme={ButtonTheme.CLEAR}
            className={cls.codeButton}
        >
            <Icon
                Svg={copyIcon}
                className={cls.copyIcon}
            />
        </Button>
        <code>
            {children}
        </code>
    </pre>
));
