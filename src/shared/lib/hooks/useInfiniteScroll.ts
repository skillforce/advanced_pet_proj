import { MutableRefObject, useEffect } from 'react';

export interface UseInfiniteScrollParams {
    callback?: () => void;
    triggerRef: MutableRefObject<HTMLElement>;
    wrapperRef: MutableRefObject<HTMLElement>;
}

export function useInfiniteScroll({ triggerRef, wrapperRef, callback }: UseInfiniteScrollParams) {
    useEffect(() => {
        let observer: IntersectionObserver | null = null;
        const triggerEllement = triggerRef.current;
        const wrapperEllement = wrapperRef.current;
        if (callback) {
            const options = {
                root: wrapperEllement,
                rootMargin: '1px',
                threshold: 1.0,
            };
            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);

            observer.observe(triggerEllement);
        }
        return () => {
            if (observer && triggerEllement) {
                observer.unobserve(triggerEllement);
            }
        };
    }, [callback, triggerRef, wrapperRef]);
}
