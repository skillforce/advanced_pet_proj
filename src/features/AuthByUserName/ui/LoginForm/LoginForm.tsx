import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { DynamicModuleLoader, ReducersListSchema } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useNavigate } from 'react-router-dom';
import { getLoginError } from '../../model/selectors/getError/getLoginError';
import { getLoginValue } from '../../model/selectors/getLogin/getLogin';
import { getLoginPassword } from '../../model/selectors/getPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getIsLoading/getLoginIsLoading';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import cls from './LoginForm.module.scss';
import { loginActions, loginReducer } from '../../model/slice/LoginSlice';

export interface LoginFormProps {
    className?: string
    onClose:()=>void
}

const initialReducers:ReducersListSchema = {
    'loginForm': loginReducer,
};

const LoginForm = memo(({ className, onClose } : LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginValue) ?? '';
    const password = useSelector(getLoginPassword) ?? '';
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);
    const navigate = useNavigate();

    const onChangeLogin = useCallback((newValue:string) => {
        dispatch(loginActions.setLogin(newValue));
    }, [dispatch]);

    const onChangePassword = useCallback((newValue:string) => {
        dispatch(loginActions.setPassword(newValue));
    }, [dispatch]);

    const onClickLogin = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            navigate('/profile');
            onClose();
        }
    }, [dispatch, navigate, onClose, password, username]);

    return (
        <DynamicModuleLoader
            reducers={initialReducers}
            removeAfterUnmount
        >
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
        </DynamicModuleLoader>
    );
});

export default LoginForm;
