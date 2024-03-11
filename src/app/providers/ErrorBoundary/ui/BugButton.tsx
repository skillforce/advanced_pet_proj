import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button/Button';

// Кнопка для тестирования ErrorBoundary
const BugButton = () => {
    const { t } = useTranslation();
    const [error, setError] = useState(false);
    const onClickBugButton = () => {
        setError((prev) => !prev);
    };

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button onClick={onClickBugButton}>
            {t('Click to throw error')}
        </Button>
    );
};
export default BugButton;
