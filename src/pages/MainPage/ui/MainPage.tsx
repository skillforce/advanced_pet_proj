import React, { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import { Input } from 'shared/ui/Input/Input';
import cls from 'features/AuthByUserName/ui/LoginForm/LoginForm.module.scss';

function MainPage() {
    const { t } = useTranslation('mainPage');
    const [loginValue, setLoginValue] = useState('');

    return (
        <div>
            {t('Main page')}
            <BugButton />
            <div>
                <Input placeholder="Enter value" value={loginValue} onChange={setLoginValue} className={cls.input} />
            </div>
        </div>
    );
}

export default memo(MainPage);
