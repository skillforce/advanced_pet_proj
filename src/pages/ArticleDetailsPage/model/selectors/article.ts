import { createSelector } from '@reduxjs/toolkit';
import { getArticleDetailsData } from 'entity/Article';
import { getUserAuthData } from 'entity/User';

export const getIsAbleToEditArticle = createSelector(
    getArticleDetailsData,
    getUserAuthData,
    (article, user) => {
        if (!user || !article) {
            return false;
        }
        return article?.user?.id === user?.id;
    },
);
