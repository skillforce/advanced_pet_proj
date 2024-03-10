import {
    MutableRefObject, useCallback, useEffect, useRef, useState,
} from 'react';

interface UseModalProps {
    onClose?:()=>void;
    isOpen?:boolean;
    animationDelay?:number
}
export function useModal({
    isOpen, onClose, animationDelay,
}:UseModalProps) {
    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

    const close = useCallback(() => {
        setIsClosing(true);
        timerRef.current = setTimeout(() => {
            onClose?.();
            setIsClosing(false);
        }, animationDelay);
    }, [animationDelay, onClose]);

    const onKeyDown = useCallback((e:KeyboardEvent) => {
        if (e.key === 'Escape') {
            close();
        }
    }, [close]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        } else {
            setIsMounted(false);
        }
    }, [isOpen]);
    return {
        isClosing,
        isMounted,
        close,
    };
}
