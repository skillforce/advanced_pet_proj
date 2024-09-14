import { useTranslation } from 'react-i18next';
import { memo, useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { Modal } from '@/shared/ui/Modal';
import { Text } from '@/shared/ui/Text';
import { saveJsonSettings, useJsonSettings } from '@/entity/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Drawer } from '@/shared/ui/Drawer';

interface ArticlePageGreetingProps {
    className?: string;
}

export const ArticlePageGreeting = memo((props: ArticlePageGreetingProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { isArticlePageWasOpened } = useJsonSettings();
    const dispatch = useAppDispatch();
    const [isOpen, setIsOpen] = useState(false);

    const onCloseModal = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        if (!isArticlePageWasOpened) {
            setIsOpen(true);
            dispatch(saveJsonSettings({ isArticlePageWasOpened: true }));
        }
    }, [dispatch, isArticlePageWasOpened]);

    const text = <Text title={t("Welcome to my pet project's article page")} />;

    if (isMobile) {
        return (
            <Drawer isLazy isOpen={isOpen} onClose={onCloseModal}>
                {text}
            </Drawer>
        );
    }

    return (
        <Modal
            isLazy
            className={className}
            isOpen={isOpen}
            onClose={onCloseModal}
        >
            {text}
        </Modal>
    );
});
