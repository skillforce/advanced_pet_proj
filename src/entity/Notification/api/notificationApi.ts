import { rtkApi } from '@/shared/api/rtkApi';
import { Notifications } from '../model/types/notifications';

const notificationApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getNotifications: build.query<Notifications[], null>({
            query: () => ({
                url: '/notifications',
            }),
        }),
    }),
    overrideExisting: false,
});

export const useNotifications = notificationApi.useGetNotificationsQuery;
