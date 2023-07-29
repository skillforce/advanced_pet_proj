import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { getCommentText } from '../../model/selectors/GetCommentText';
import { getCommentError } from '../../model/selectors/GetCommentError';
import cls from './AddCommentForm.module.scss';
import {
    addCommentFormActions,
    addCommentFormReducer,
} from '../../model/slices/addCommentFormSlice';

interface AddCommentFormProps {
    className?: string
}

export const AddCommentForm = memo(({ className }: AddCommentFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const text = useSelector(getCommentText);
    const error = useSelector(getCommentError);
    const onChangeAddCommentFormValue = useCallback((newValue: string) => {
        dispatch(addCommentFormActions.setText(newValue));
    }, [dispatch]);

    return (
        // <DynamicModuleLoader reducers={addCommentFormReducer}>
        <div className={classNames(cls.AddCommentFormContainer, {}, [className])}>
            <Input onChange={onChangeAddCommentFormValue} value={text} placeholder={t('Enter new comment text')} />
            <Button theme={ButtonTheme.OUTLINE}>{t('Send')}</Button>
        </div>
        // </DynamicModuleLoader>
    );
});
