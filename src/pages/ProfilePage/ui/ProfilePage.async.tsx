import { lazy } from 'react';

// ТАК В РЕАЛЬНОСТИ ДЕЛАТЬ НЕ СТОИТ ЭТО ДЛЯ ТЕСТА(ПРОМИСИФИКАЦИЯ)
export const ProfilePageAsync = lazy(() => new Promise((resolve, reject) => {
    setTimeout(() => {
        // @ts-ignore
        resolve(import('./ProfilePage'));
    }, 1000);
}));
