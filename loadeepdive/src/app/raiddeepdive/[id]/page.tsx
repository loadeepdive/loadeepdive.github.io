import * as React from 'react';
import fs from 'fs';
import path from 'path';
import ArticleDetailPage from '@/app/components/articles/articleDetail';

export default function RaidArticleDetail({params,}: {params: Promise<{ id: string }>;}) {
    const { id } = React.use(params);
    const articleNoteFilePath = './documents/raid/articleIdNote.md'
    const articleNote = fs.readFileSync(articleNoteFilePath,'utf-8').split('\n').map((data)=>data.split(':'));
    const noteMap = new Map();
    for (const [id,title] of articleNote ){
        noteMap.set(id,title)
    }
    const title = noteMap.has(id)?noteMap.get(id):'';
    const url = noteMap.has(id)? `./documents/raid/${noteMap.get(id)}`:'';
    const originArticle = fs.readFileSync(url,'utf-8');

    return (
        <div>
            <ArticleDetailPage article={originArticle} articleTitle={title}></ArticleDetailPage>
        </div>
);
}

export async function generateStaticParams(): Promise<Array<{ id: string }>> {
  
    const articleNoteFilePath = path.join(process.cwd(), 'documents/raid/articleIdNote.md');
    const articleNote = fs.readFileSync(articleNoteFilePath, 'utf-8')
      .split('\n')
      .map((line: string) => line.split(':')[0]);
  
    return articleNote.map((id: string) => ({ id }));
  }