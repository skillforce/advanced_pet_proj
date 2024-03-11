import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Icon } from '@/shared/ui/Icon/Icon';
import { ArticlesView } from '../../model/consts/consts';
import cls from './ArticleViewSelector.module.scss';
import ListIcon from '../../../../shared/assets/icons/list-24-24.svg';
import TiledIcon from '../../../../shared/assets/icons/tiled-24-24.svg';

interface ArticleViewSelectorProps {
    className?: string;
    view:ArticlesView;
    onViewClick:(newView:ArticlesView)=>void
}
const viewTypes = [
    {
        view: ArticlesView.SMALL,
        icon: TiledIcon,
    }, {
        view: ArticlesView.BIG,
        icon: ListIcon,
    },
];

export const ArticleViewSelector = memo(({ className, view, onViewClick }: ArticleViewSelectorProps) => {
    const { t } = useTranslation();

    const onClick = (newView:ArticlesView) => () => {
        onViewClick?.(newView);
    };
    return (
        <div className={classNames(cls.ArticleViewSelectorContainer, {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    className={classNames('', { [cls.selected]: viewType.view === view }, [])}
                    key={viewType.view}
                    theme={ButtonTheme.CLEAR}
                    onClick={onClick(viewType.view)}
                >
                    <Icon Svg={viewType.icon} />
                </Button>
            ))}
        </div>
    );
});
