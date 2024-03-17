import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './RatingCard.module.scss';
import { Card } from '@/shared/ui/Card/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { Text } from '@/shared/ui/Text/Text';
import { Modal } from '@/shared/ui/Modal/Modal';
import { Button, ButtonSize } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';
import { Drawer } from '@/shared/ui/Drawer/Drawer';

interface RatingCardProps {
    className?: string
    title?:string,
    feedbackTitle?:string,
    hasFeedback?:boolean
    onCancel?:(starsCount:number)=>void
    onAccept?:(starsCount:number, feedback?:string)=>void
}

export const RatingCard = memo(({
    className,
    title,
    feedbackTitle,
    hasFeedback,
    onCancel,
    onAccept,
}: RatingCardProps) => {
    const { t } = useTranslation('rating');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(0);
    const [feedback, setFeedback] = useState('');

    const onCloseModal = useCallback(() => {
        setIsModalOpen(false);
    }, []);

    const onSelectStars = useCallback((selectedStarsCount:number) => {
        setStarsCount(selectedStarsCount);
        if (hasFeedback) {
            setIsModalOpen(true);
        } else {
            onAccept?.(selectedStarsCount);
        }
    }, [hasFeedback, onAccept]);

    const acceptHandler = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starsCount);
    }, [onAccept, starsCount]);

    const cancelHandler = useCallback(() => {
        onCloseModal();
        onCancel?.(starsCount);
    }, [onCancel, onCloseModal, starsCount]);

    const modalContent = (
        <>
            <Text title={feedbackTitle} />
            <Input
                value={feedback}
                onChange={setFeedback}
                placeholder={t('Your feedback')}
            />

        </>
    );

    return (
        <Card className={classNames(cls.RatingCardContainer, {}, [className])}>
            <VStack align="center" gap="8">
                <Text title={title} />
                <StarRating size={40} onSelect={onSelectStars} selectedStars={starsCount} />
            </VStack>
            <BrowserView>
                <Modal
                    isOpen={isModalOpen}
                    onClose={onCloseModal}
                    isLazy
                >
                    <VStack max gap="32">
                        {modalContent}
                        <HStack max gap="8" justify="end">
                            <Button
                                onClick={acceptHandler}
                            >
                                {t('Send')}
                            </Button>
                            <Button
                                onClick={cancelHandler}
                            >
                                {t('Cancel')}
                            </Button>
                        </HStack>
                    </VStack>
                </Modal>

            </BrowserView>
            <MobileView>
                <Drawer
                    isOpen={isModalOpen}
                    onClose={onCloseModal}
                    isLazy
                >
                    <VStack max gap="32">
                        {modalContent}
                        <HStack max gap="8" justify="end">
                            <Button
                                fullWidth
                                onClick={acceptHandler}
                                size={ButtonSize.L}
                            >
                                {t('Send')}
                            </Button>
                        </HStack>
                    </VStack>
                </Drawer>
            </MobileView>
        </Card>
    );
});
