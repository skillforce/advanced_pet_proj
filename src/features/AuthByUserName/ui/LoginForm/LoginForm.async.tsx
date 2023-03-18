import { FC, lazy } from 'react';
import { LoginFormProps } from 'features/AuthByUserName/ui/LoginForm/LoginForm';

// ТАК В РЕАЛЬНОСТИ ДЕЛАТЬ НЕ СТОИТ ЭТО ДЛЯ ТЕСТА(ПРОМИСИФИКАЦИЯ)
export const LoginFormAsync = lazy<FC<LoginFormProps>>(() => new Promise((resolve, reject) => {
    setTimeout(() => {
        // @ts-ignore
        resolve(import('./LoginForm'));
    }, 1500);
}));
