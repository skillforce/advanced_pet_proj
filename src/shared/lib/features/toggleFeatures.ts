import { FeatureFlag } from '@/shared/types/featureFlag';
import { getFeatureFlag } from './setGetFeatures';

interface ToggleFeaturesOptions<T> {
    name: keyof FeatureFlag;
    on: () => T;
    off: () => T;
}

export const toggleFeatures = <T>({
    off,
    on,
    name,
}: ToggleFeaturesOptions<T>) => {
    if (getFeatureFlag(name)) {
        return on();
    }
    return off();
};
