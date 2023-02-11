import { lazy } from 'react';

// ТАК В РЕАЛЬНОСТИ ДЕЛАТЬ НЕ СТОИТ ЭТО ДЛЯ ТЕСТА(ПРОМИСИФИКАЦИЯ)
export const AboutPageAsync = lazy(() => new Promise((resolve, reject) => {
    setTimeout(() => {
    // @ts-ignore
        resolve(import('./AboutPage'));
    }, 1000);
}));
