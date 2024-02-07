import React, { HTMLAttributeAnchorTarget, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { List, ListRowProps, WindowScroller } from 'react-virtualized';
import { PAGE_ID } from 'widgets/Page/Page';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { ArticleListItem } from '../../ui/ArticleListItem/ArticleListItem';
import { Article, ArticlesView } from '../../model/types/article';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles:Article[];
    isLoading?:boolean;
    view?:ArticlesView
    target?:HTMLAttributeAnchorTarget;
    virtualized?:boolean

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
        virtualized = true,

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
                {
                    ({
                        width,
                        height,
                        onChildScroll,
                        registerChild,
                        scrollLeft,
                        scrollTop,
                        isScrolling,
                    }) => (
                        <div
                            // @ts-ignore
                            ref={registerChild}
                            className={classNames(cls.ArticleListContainer, {}, [cls[view], className])}
                        >
                            {virtualized ? (
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
                            ) : (
                                articles.map((article) => (
                                    <ArticleListItem
                                        article={article}
                                        target={target}
                                        className={cls.card}
                                        view={view}
                                        key={article.id}
                                    />
                                ))
                            )}

                        </div>
                    )
                }
            </WindowScroller>
            <div className={classNames(cls.ArticleListContainer, {}, [cls[view], className])}>
                {isLoading && getSkeleton(view) }
            </div>
        </>
    );
});
