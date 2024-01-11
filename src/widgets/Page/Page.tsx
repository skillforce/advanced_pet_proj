import React, {
    memo, MutableRefObject, ReactNode, UIEvent, useRef,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { getUIScrollByPath, uiActions } from 'features/UI';
import { useLocation } from 'react-router-dom';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider';
import { useThrottle } from 'shared/lib/hooks/useThrottle';
import cls from './Page.module.scss';

interface PageProps {
    className?: string;
    children:ReactNode;
    onScrollEnd?:()=>void

}
export const PAGE_ID = 'PAGE_ID';
export const Page = memo(({ className, children, onScrollEnd }: PageProps) => {
    const wrapperRef = useRef() as MutableRefObject<HTMLElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const scrollPosition = useSelector((state:StateSchema) => getUIScrollByPath(state, pathname));

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: () => onScrollEnd?.(),
    });

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    const onScroll = useThrottle((e:UIEvent<HTMLDivElement>) => {
        dispatch(uiActions.setScrollPosition({ position: e.currentTarget.scrollTop, path: pathname }));
    }, 1000);

    return (
        <main
            ref={wrapperRef}
            className={classNames(cls.PageContainer, {}, [className])}
            onScroll={onScroll}
            id={PAGE_ID}
        >
            {children}
            {onScrollEnd && <div ref={triggerRef} />}
        </main>
    );
});
