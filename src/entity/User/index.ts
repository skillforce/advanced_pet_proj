import {
    userReducer,
    userActions,
    userSlice,
} from '../User/model/slice/userSlice';
import { User } from '../User/ui/User';
import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
import {
    isUserAdmin,
    isUserManager,
    getUserRoles,
} from './model/selectors/roleSelector';

export { getIsInited } from './model/selectors/getIsInited/getIsInited';

export type {
    UserStateScheme,
    UserScheme,
} from './model/types/UserStateScheme';

export { UserRoles } from './model/consts/consts';

export {
    userReducer,
    userActions,
    userSlice,
    User,
    getUserAuthData,
    isUserAdmin,
    isUserManager,
    getUserRoles,
};
