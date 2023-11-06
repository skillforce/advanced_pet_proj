import { Comment } from 'entity/Comment';
import { EntityState } from '@reduxjs/toolkit';
import { Article } from 'entity/Article';

export interface ArticleDetailsPageRecommendationsSchema extends EntityState<Article>{
    isLoading?:boolean,
    error?:string
}
