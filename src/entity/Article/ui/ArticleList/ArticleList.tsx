import React, { HTMLAttributeAnchorTarget, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleListItemSkeleton } from 'entity/Article/ui/ArticleListItem/ArticleListItemSkeleton';
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { List, ListRowProps, WindowScroller } from 'react-virtualized';
import { PAGE_ID } from 'widgets/Page/Page';
import { ArticleListItem } from '../../ui/ArticleListItem/ArticleListItem';
import { Article, ArticlesView } from '../../model/types/article';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles:Article[];
    isLoading?:boolean;
    view?:ArticlesView
    target?:HTMLAttributeAnchorTarget;

}

const getSkeleton = (view:ArticlesView) => new Array(view === ArticlesView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => (
        <ArticleListItemSkeleton
            view={view}
            key={index}
        />
    ));

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        view = ArticlesView.SMALL,
        target,

    } = props;
    const { t } = useTranslation('article');

    const isBig = view === ArticlesView.BIG;
    const itemsPerRow = isBig ? 1 : 4;
    const rowCount = isBig ? articles.length : Math.ceil(articles.length / itemsPerRow);

    const rowRender = ({
        index,
        isScrolling,
        key,
        style,
    }:ListRowProps) => {
        const items = [];
        const fromIndex = index * itemsPerRow;
        const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);

        for (let i = fromIndex; i < toIndex; i += 1) {
            items.push(
                <ArticleListItem
                    className={cls.card}
                    article={articles[i]}
                    view={view}
                    target={target}
                    key={articles[index].id}
                />,
            );
        }

        return (
            <div
                key={key}
                style={style}
                className={cls.row}
            >
                {items}
            </div>
        );
    };

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleListContainer, {}, [cls[view], className])}>
                <Text bodyText={t('Article list is empty')} align={TextAlign.CENTER} size={TextSize.L} />
            </div>
        );
    }
    return (
        <>
            <WindowScroller scrollElement={document.getElementById(PAGE_ID) as Element}>
                {({
                    width,
                    height,
                    onChildScroll,
                    registerChild,
                    scrollLeft,
                    scrollTop,
                    isScrolling,
                }) => (
                    <div ref={registerChild} className={classNames(cls.ArticleListContainer, {}, [cls[view], className])}>
                        <List
                            autoHeight
                            scrollTop={scrollTop}
                            onChildScroll={onChildScroll}
                            scrollLeft={scrollLeft}
                            isScrolling={isScrolling}
                            rowCount={rowCount}
                            rowHeight={isBig ? 700 : 350}
                            rowRenderer={rowRender}
                            height={height ?? 700}
                            width={width ? width - 55 : 1180}
                        />

                    </div>
                )}
            </WindowScroller>
            <div className={classNames(cls.ArticleListContainer, {}, [cls[view], className])}>
                {isLoading && getSkeleton(view) }
            </div>
        </>
    );
});
