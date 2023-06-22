import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import { ArticleImageBlock } from '../../model/types/article';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
    className?: string
    block:ArticleImageBlock
}

export const ArticleImageBlockComponent = memo(({ className, block }: ArticleImageBlockComponentProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.ArticleImageBlockComponentContainer, {}, [className])}>
            <img src={block.src} className={cls.img} alt="articleImage" />
            {block.title && (
                <Text
                    align={TextAlign.CENTER}
                    title={block.title}
                />
            )}
        </div>
    );
});
