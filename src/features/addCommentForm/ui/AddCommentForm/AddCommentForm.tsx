import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { DynamicModuleLoader, ReducersListSchema } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { getCommentText } from '../../model/selectors/GetCommentText';
import { getCommentError } from '../../model/selectors/GetCommentError';
import cls from './AddCommentForm.module.scss';
import {
    addCommentFormActions,
    addCommentFormReducer,
} from '../../model/slices/addCommentFormSlice';

export interface AddCommentFormProps {
    className?: string
    onSendComment:(text:string)=>void
}
const addCommentFormReducers:ReducersListSchema = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo(({ className, onSendComment }: AddCommentFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const text = useSelector(getCommentText);
    const error = useSelector(getCommentError);

    const onChangeAddCommentFormValue = useCallback((newValue: string) => {
        dispatch(addCommentFormActions.setText(newValue));
    }, [dispatch]);

    const onClickOnSendComment = useCallback(() => {
        onSendComment(text || '');
        onChangeAddCommentFormValue('');
    }, [onChangeAddCommentFormValue, onSendComment, text]);

    return (
        <DynamicModuleLoader reducers={addCommentFormReducers}>
            <div className={classNames(cls.AddCommentFormContainer, {}, [className])}>
                <Input
                    className={cls.input}
                    onChange={onChangeAddCommentFormValue}
                    value={text}
                    placeholder={t('Enter new comment text')}
                />
                <Button theme={ButtonTheme.OUTLINE} onClick={onClickOnSendComment}>{t('Send')}</Button>
            </div>
        </DynamicModuleLoader>
    );
});
export default AddCommentForm;
