import React, {
    MutableRefObject,
    ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { Portal } from '../Portal/Portal';
import cls from './Modal.module.scss';

export interface ModalProps {
    className?: string
    children: ReactNode,
    isOpen?: boolean,
    onClose: () => void
    isLazy?:boolean
}

export const Modal = ({
    className,
    children,
    isOpen,
    onClose,
    isLazy,
}: ModalProps) => {
    const ANIMATION_DELAY = 200;
    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;
    const { theme } = useTheme();
    const onClickModalContent = (e: React.MouseEvent) => {
        e.stopPropagation();
    };
    const onCloseHandler = useCallback(() => {
        setIsClosing(true);
        timerRef.current = setTimeout(() => {
            onClose();
            setIsClosing(false);
        }, ANIMATION_DELAY);
    }, [onClose]);

    const onKeyDown = useCallback((e:KeyboardEvent) => {
        if (e.key === 'Escape') {
            onCloseHandler();
        }
    }, [onCloseHandler]);

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

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.closing]: isClosing,
    };

    if (isLazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.modalContainer, mods, [className, theme])}>
                <div className={cls.overlay} onClick={onCloseHandler}>
                    <div className={cls.content} onClick={onClickModalContent}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
