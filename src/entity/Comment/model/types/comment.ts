import { UserScheme } from '@/entity/User';

export interface Comment {
    id: string;
    user: UserScheme;
    text: string;
}
