import { lazy } from 'react';

// ТАК В РЕАЛЬНОСТИ ДЕЛАТЬ НЕ СТОИТ ЭТО ДЛЯ ТЕСТА(ПРОМИСИФИКАЦИЯ)
export const ArticlesPageAsync = lazy(() => new Promise((resolve, reject) => {
    setTimeout(() => {
        // @ts-ignore
        resolve(import('./ArticlesPage'));
    }, 1000);
}));
