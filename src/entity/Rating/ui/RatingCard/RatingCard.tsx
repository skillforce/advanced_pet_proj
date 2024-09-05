import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserView, MobileView } from 'react-device-detect';
import { Card } from '@/shared/ui/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { StarRating } from '@/shared/ui/StarRating';
import { Text } from '@/shared/ui/Text';
import { Modal } from '@/shared/ui/Modal';
import { Button, ButtonSize } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Drawer } from '@/shared/ui/Drawer';

interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
    rate?: number;
}

export const RatingCard = memo(
    ({
        className,
        title,
        feedbackTitle,
        hasFeedback,
        onCancel,
        onAccept,
        rate = 0,
    }: RatingCardProps) => {
        const { t } = useTranslation('rating');
        const [isModalOpen, setIsModalOpen] = useState(false);
        const [starsCount, setStarsCount] = useState(rate);
        const [feedback, setFeedback] = useState('');

        const onCloseModal = useCallback(() => {
            setIsModalOpen(false);
        }, []);

        const onSelectStars = useCallback(
            (selectedStarsCount: number) => {
                setStarsCount(selectedStarsCount);
                if (hasFeedback) {
                    setIsModalOpen(true);
                } else {
                    onAccept?.(selectedStarsCount);
                }
            },
            [hasFeedback, onAccept],
        );

        const acceptHandler = useCallback(() => {
            setIsModalOpen(false);
            onAccept?.(starsCount, feedback);
        }, [feedback, onAccept, starsCount]);

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
                    data-testid="RatingCard.Input"
                />
            </>
        );

        return (
            <Card className={className} max data-testid="RatingCard">
                <VStack align="center" gap="8">
                    <Text
                        title={
                            starsCount ? t("Thank's for your review!") : title
                        }
                    />
                    <StarRating
                        selectedStars={starsCount}
                        size={40}
                        onSelect={onSelectStars}
                    />
                </VStack>
                <BrowserView>
                    <Modal isOpen={isModalOpen} onClose={onCloseModal} isLazy>
                        <VStack max gap="32">
                            {modalContent}
                            <HStack max gap="8" justify="end">
                                <Button
                                    onClick={acceptHandler}
                                    data-testid="RatingCard.Send"
                                >
                                    {t('Send')}
                                </Button>
                                <Button
                                    onClick={cancelHandler}
                                    data-testid="RatingCard.Cancel"
                                >
                                    {t('Cancel')}
                                </Button>
                            </HStack>
                        </VStack>
                    </Modal>
                </BrowserView>
                <MobileView>
                    <Drawer isOpen={isModalOpen} onClose={onCloseModal} isLazy>
                        <VStack max gap="32">
                            {modalContent}
                            <HStack max gap="8" justify="end">
                                <Button
                                    fullWidth
                                    onClick={acceptHandler}
                                    size={ButtonSize.L}
                                    data-testid="RatingCard.Send"
                                >
                                    {t('Send')}
                                </Button>
                            </HStack>
                        </VStack>
                    </Drawer>
                </MobileView>
            </Card>
        );
    },
);
