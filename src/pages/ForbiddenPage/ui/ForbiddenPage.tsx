import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';

function ForbiddenPage() {
    const { t } = useTranslation('forbiddenPage');
    return (
        <Page>
            <Text
                title={t('You don\'t have any access to that page')}
                theme={TextTheme.ERROR}
                size={TextSize.L}
            />
        </Page>
    );
}

export default memo(ForbiddenPage);
