import { MutableRefObject, useEffect } from 'react';

export interface UseInfiniteScrollParams {
    callback?: () => void;
    triggerRef: MutableRefObject<HTMLElement>;
    wrapperRef: MutableRefObject<HTMLElement>;
}

export function useInfiniteScroll({ triggerRef, wrapperRef, callback }: UseInfiniteScrollParams) {
    useEffect(() => {
        let observer: IntersectionObserver | null = null;
        const triggerEllement = triggerRef;
        const wrapperEllement = wrapperRef;
        if (callback) {
            const options = {
                root: wrapperEllement.current,
                rootMargin: '1px',
                threshold: 1.0,
            };
            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);

            observer.observe(triggerEllement.current);
        }
        return () => {
            if (observer) {
                observer.unobserve(triggerEllement.current);
            }
        };
    }, [callback, triggerRef, wrapperRef]);
}
