import { lazy } from 'react';

// ТАК В РЕАЛЬНОСТИ ДЕЛАТЬ НЕ СТОИТ ЭТО ДЛЯ ТЕСТА(ПРОМИСИФИКАЦИЯ)
export const ArticleDetailsPageAsync = lazy(() => new Promise((resolve, reject) => {
    setTimeout(() => {
        // @ts-ignore
        resolve(import('./ArticleDetailsPage'));
    }, 1000);
}));
