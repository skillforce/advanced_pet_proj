import { FC, lazy } from 'react';
import { AddCommentFormProps } from 'features/addCommentForm/ui/AddCommentForm/AddCommentForm';

// ТАК В РЕАЛЬНОСТИ ДЕЛАТЬ НЕ СТОИТ ЭТО ДЛЯ ТЕСТА(ПРОМИСИФИКАЦИЯ)
export const AddCommentFormAsync = lazy<FC<AddCommentFormProps>>(() => new Promise((resolve) => {
    setTimeout(() => {
        // @ts-ignore
        resolve(import('./AddCommentForm'));
    }, 1500);
}));
