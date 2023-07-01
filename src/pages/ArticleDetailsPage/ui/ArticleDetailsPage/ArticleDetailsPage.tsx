import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entity/Article';
import { DynamicModuleLoader, ReducersListSchema } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from 'entity/Article/model/slice/articleDetailsSlice';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entity/Comment';
import cls from './ArticleDetailsPage.module.scss';

const reducers:ReducersListSchema = {
    articleDetails: articleDetailsReducer,
};
interface ArticleDetailsPageProps {
    className?: string
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation('article');
    const queryParams = useParams();
    const { id } = queryParams;

    if (!id) {
        return (
            <div className={classNames(cls.ArticleDetailsPageContainer, {}, [className])}>
                {t('Article doesn\'t exist')}
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetailsPageContainer, {}, [className])}>
                <ArticleDetails id={id} />
                <Text title={t('Comments')} className={cls.commentsContainerTitle} />
                <CommentList comments={[]} />
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
