import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../model/slice/counterSlice';
import cls from './Counter.module.scss';

export const Counter = memo(() => {
    const counterValue = useCounterValue();
    const { add, increment, decrement } = useCounterActions();
    const { t } = useTranslation();
    const handleInc = () => {
        increment();
    };
    const handleDec = () => {
        decrement();
    };

    const handleAddFive = () => {
        add(5);
    };
    return (
        <div className={cls.counterContainer}>
            <div data-testid="counter_value_title">{counterValue}</div>
            <div className={cls.btnBlock}>
                <Button
                    data-testid="counter_increment_button"
                    square
                    onClick={handleInc}
                    size={ButtonSize.L}
                    theme={ButtonTheme.BACKGROUND_INVERTED}
                >
                    {t('+')}
                </Button>
                <Button
                    data-testid="counter_decrement_button"
                    square
                    onClick={handleDec}
                    size={ButtonSize.L}
                    theme={ButtonTheme.BACKGROUND_INVERTED}
                >
                    {t('-')}
                </Button>
                <Button
                    data-testid="counter_add_five_button"
                    square
                    onClick={handleAddFive}
                    size={ButtonSize.L}
                    theme={ButtonTheme.BACKGROUND_INVERTED}
                >
                    {t('+5')}
                </Button>
            </div>
        </div>
    );
});
