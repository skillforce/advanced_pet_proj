import React, { memo, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Page.module.scss';

interface PageProps {
    className?: string;
    children:ReactNode
}

export const Page = memo(({ className, children }: PageProps) => {
    const { t } = useTranslation();
    return (
        <section className={classNames(cls.PageContainer, {}, [className])}>
            {children}
        </section>
    );
});
