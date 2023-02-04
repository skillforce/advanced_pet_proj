import {lazy} from 'react';

// ТАК В РЕАЛЬНОСТИ ДЕЛАТЬ НЕ СТОИТ ЭТО ДЛЯ ТЕСТА(ПРОМИСИФИКАЦИЯ)
export const MainPageAsync = lazy(() => new Promise((resolve, reject) => {
    setTimeout(()=>{
        // @ts-ignore
        resolve(import('./MainPage'))
    },1000)
}) )
