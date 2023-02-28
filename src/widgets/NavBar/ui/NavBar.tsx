import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './NavBar.module.scss';

interface NavBarProps {
    className?: string
}

export function NavBar({ className }:NavBarProps) {
    const { t } = useTranslation();

    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

    const onToggleModal = useCallback(
        () => setIsAuthModalOpen((prev) => !prev),
        [setIsAuthModalOpen],
    );
    return (
        <div className={classNames(cls.navBarContainer, {}, [className])}>
            <Button theme={ButtonTheme.CLEAR_HOVER} onClick={onToggleModal}>{t('Log In')}</Button>
            <Modal isOpen={isAuthModalOpen} onClose={onToggleModal}>
                {t('Lorem ipsum dolor sit amet')}
            </Modal>
        </div>
    );
}
