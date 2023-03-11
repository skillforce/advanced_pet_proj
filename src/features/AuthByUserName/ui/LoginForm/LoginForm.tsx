import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { getError } from '../../model/selectors/getError/getError';
import { getLoginValue } from '../../model/selectors/getLogin/getLogin';
import { getPassword } from '../../model/selectors/getPassword/getPassword';
import { getIsLoading } from '../../model/selectors/getIsLoading/getIsLoading';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import cls from './LoginForm.module.scss';
import { loginActions } from '../../model/slice/LoginSlice';

interface LoginFormProps {
    className?: string
}

export const LoginForm = memo(({ className } : LoginFormProps) => {
    const { t } = useTranslation();
    const username = useSelector(getLoginValue);
    const password = useSelector(getPassword);
    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);
    const dispatch = useDispatch();

    const onChangeLogin = useCallback((newValue:string) => {
        dispatch(loginActions.setLogin(newValue));
    }, [dispatch]);

    const onChangePassword = useCallback((newValue:string) => {
        dispatch(loginActions.setPassword(newValue));
    }, [dispatch]);

    const onClickLogin = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
        <div className={classNames(cls.loginFormContainer, {}, [className])}>
            {error && <Text bodyText={t('Incorrect username or password')} theme={TextTheme.ERROR} />}
            <Text title={t('Authorization form')} />
            <Input
                autofocus
                placeholder={t('Enter your login')}
                value={username}
                onChange={onChangeLogin}
                className={cls.input}
            />
            <Input
                placeholder={t('Enter your password')}
                type="password"
                value={password}
                onChange={onChangePassword}
                className={cls.input}
            />
            <Button
                disabled={isLoading}
                onClick={onClickLogin}
                className={cls.formBtn}
                theme={ButtonTheme.OUTLINE}
            >
                {t('Log In')}
            </Button>
        </div>
    );
});
