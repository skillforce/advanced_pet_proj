import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal, ModalProps } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';
import cls from './LoginModal.module.scss';

interface LoginModalProps {
    className?: string;
    isOpen:boolean;
    onClose: () => void
}

export const LoginModal = ({ className, isOpen, onClose } : LoginModalProps) => (
    <Modal
        isLazy
        isOpen={isOpen}
        onClose={onClose}
        className={classNames(cls.loginModalContainer, {}, [className])}
    >
        <LoginForm />
    </Modal>
);
