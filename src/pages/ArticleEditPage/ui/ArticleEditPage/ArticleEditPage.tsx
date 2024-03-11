import React, { memo } from 'react';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page/Page';

interface ArticleEditPageProps {
    className?: string
}

const ArticleEditPage = memo(({ className }: ArticleEditPageProps) => {
    const { id } = useParams<{id:string}>();
    const isEdit = Boolean(id);
    return (
        <Page className={classNames('', {}, [className])}>
            {isEdit ? `edit article with id = ${id}` : 'create new article'}
        </Page>
    );
});

export default ArticleEditPage;
