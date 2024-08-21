import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
    addCommentFormActions,
    addCommentFormReducer,
} from '../../model/slices/addCommentFormSlice';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Input } from '@/shared/ui/Input';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { DynamicModuleLoader, ReducersListSchema } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { HStack } from '@/shared/ui/Stack';
import { getCommentText } from '../../model/selectors/GetCommentText';
import { getCommentError } from '../../model/selectors/GetCommentError';
import cls from './AddCommentForm.module.scss';

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
            <HStack
                data-testid="AddCommentForm"
                max
                justify="between"
                className={classNames(cls.AddCommentFormContainer, {}, [className])}
            >
                <Input
                    className={cls.input}
                    data-testid="AddCommentForm.Input"
                    onChange={onChangeAddCommentFormValue}
                    value={text}
                    placeholder={t('Enter new comment text')}
                />
                <Button
                    theme={ButtonTheme.OUTLINE}
                    data-testid="AddCommentForm.Button"
                    onClick={onClickOnSendComment}
                >
                    {t('Send')}
                </Button>
            </HStack>
        </DynamicModuleLoader>
    );
});
export default AddCommentForm;
