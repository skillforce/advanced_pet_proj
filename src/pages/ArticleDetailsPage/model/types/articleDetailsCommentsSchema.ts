import { Comment } from 'entity/Comment';
import { EntityState } from '@reduxjs/toolkit';

export interface ArticleDetailsCommentsSchema extends EntityState<Comment>{
    isLoading?:boolean,
    error?:string
}
