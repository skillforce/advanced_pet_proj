import React, { ReactNode } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { useModal } from 'shared/lib/hooks/useModal';
import { Overlay } from '../Overlay/Overlay';
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
    const { theme } = useTheme();
    const {
        isMounted,
        isClosing,
        close,
    } = useModal({
        isOpen,
        onClose,
        animationDelay: 500,
    });

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
                <Overlay onClick={close} />
                <div className={cls.content}>
                    {children}
                </div>
            </div>
        </Portal>
    );
};
