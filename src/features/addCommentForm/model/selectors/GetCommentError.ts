import { StateSchema } from '@/app/providers/StoreProvider';

export const getCommentError = (state: StateSchema) =>
    state.addCommentForm?.error;
