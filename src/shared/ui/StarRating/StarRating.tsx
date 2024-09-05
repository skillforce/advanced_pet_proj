import React, { memo, useCallback, useState } from 'react';
import { classNames } from '../../lib/classNames/classNames';
import cls from './StarRating.module.scss';
import StarIcon from '../../assets/icons/starIcon.svg';
import { Icon } from '../Icon/Icon';

interface StarRatingProps {
    className?: string;
    onSelect?: (starsCount: number) => void;
    selectedStars?: number;
    size?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo(
    ({
        className,
        size = 30,
        selectedStars = 0,
        onSelect,
    }: StarRatingProps) => {
        const [currentStarsCount, setCurrentStarsCount] =
            useState(selectedStars);
        const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

        const onHover = useCallback(
            (starsCount: number) => () => {
                if (!isSelected) {
                    setCurrentStarsCount(starsCount);
                }
            },
            [isSelected],
        );
        const onLeave = useCallback(() => {
            if (!isSelected) {
                setCurrentStarsCount(0);
            }
        }, [isSelected]);

        const onClick = useCallback(
            (starsCount: number) => () => {
                if (!isSelected) {
                    onSelect?.(starsCount);
                    setCurrentStarsCount(starsCount);
                    setIsSelected(true);
                }
            },
            [isSelected, onSelect],
        );

        return (
            <div className={classNames('', {}, [className])}>
                {stars.map((starNumber) => (
                    <Icon
                        className={classNames(
                            cls.starIcon,
                            {
                                [cls.hovered]: currentStarsCount >= starNumber,
                                [cls.empty]: currentStarsCount < starNumber,
                                [cls.selected]: Boolean(isSelected),
                            },
                            [],
                        )}
                        Svg={StarIcon}
                        key={starNumber}
                        width={size}
                        height={size}
                        onMouseEnter={onHover(starNumber)}
                        onMouseLeave={onLeave}
                        onClick={onClick(starNumber)}
                        data-testId={`StarRating.${starNumber}`}
                        data-selected={currentStarsCount >= starNumber}
                    />
                ))}
            </div>
        );
    },
);
