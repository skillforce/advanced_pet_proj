import React, {
    memo, MutableRefObject, ReactNode, useRef,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll';
import cls from './Page.module.scss';

interface PageProps {
    className?: string;
    children:ReactNode;
    onScrollEnd?:()=>void

}

export const Page = memo(({ className, children, onScrollEnd }: PageProps) => {
    const { t } = useTranslation();
    const wrapperRef = useRef() as MutableRefObject<HTMLElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: () => onScrollEnd?.(),
    });
    return (
        <section
            ref={wrapperRef}
            className={classNames(cls.PageContainer, {}, [className])}
        >
            {children}
            <div ref={triggerRef} />
        </section>
    );
});
