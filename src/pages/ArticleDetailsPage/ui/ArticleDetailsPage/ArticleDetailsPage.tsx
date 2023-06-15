import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entity/Article';
import { DynamicModuleLoader, ReducersListSchema } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from 'entity/Article/model/slice/articleDetailsSlice';
import cls from './ArticleDetailsPage.module.scss';

const reducers:ReducersListSchema = {
    articleDetails: articleDetailsReducer,
};
interface ArticleDetailsPageProps {
    className?: string
}

export const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation('article');
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetailsPageContainer, {}, [className])}>
                <ArticleDetails />
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
