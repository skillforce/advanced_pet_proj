import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import copyIcon from '../../assets/icons/contractIcon.svg';
import cls from './Code.module.scss';

interface CodeProps {
    className?: string
    text: string
}

export const Code = memo(({ className, text }: CodeProps) => {
    const onCopy = useCallback(async () => {
        await navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(cls.CodeContainer, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR}
                className={cls.codeButton}
                onClick={onCopy}
            >
                <Icon
                    Svg={copyIcon}
                    className={cls.copyIcon}
                />
            </Button>
            <code>
                {text}
            </code>
        </pre>
    );
});
