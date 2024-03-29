import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';
import cls from './Counter.module.scss';

export const Counter = memo(() => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const { t } = useTranslation();
    const increment = () => {
        dispatch(counterActions.increment());
    };
    const decrement = () => {
        dispatch(counterActions.decrement());
    };
    return (
        <div className={cls.counterContainer}>
            <div data-testid="counter_value_title">{counterValue}</div>
            <div className={cls.btnBlock}>
                <Button
                    data-testid="counter_increment_button"
                    square
                    onClick={increment}
                    size={ButtonSize.L}
                    theme={ButtonTheme.BACKGROUND_INVERTED}
                >
                    {t('+')}
                </Button>
                <Button
                    data-testid="counter_decrement_button"
                    square
                    onClick={decrement}
                    size={ButtonSize.L}
                    theme={ButtonTheme.BACKGROUND_INVERTED}
                >
                    {t('-')}
                </Button>
            </div>
        </div>
    );
});
