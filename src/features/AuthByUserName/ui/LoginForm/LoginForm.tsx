import React, { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string
}

export const LoginForm = ({ className } : LoginFormProps) => {
    const { t } = useTranslation();
    const [loginValue, setLoginValue] = useState('');
    const [passValue, setPassValue] = useState('');

    return (
        <div className={classNames(cls.loginFormContainer, {}, [className])}>
            <Input
                autofocus
                placeholder={t('Enter your login')}
                value={loginValue}
                onChange={setLoginValue}
                className={cls.input}
            />
            <Input
                placeholder={t('Enter your password')}
                type="password"
                value={passValue}
                onChange={setPassValue}
                className={cls.input}
            />
            <Button className={cls.formBtn} theme={ButtonTheme.OUTLINE}>
                {t('Log In')}
            </Button>
        </div>
    );
};
