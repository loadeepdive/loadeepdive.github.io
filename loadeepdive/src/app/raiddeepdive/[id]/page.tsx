// 'use client';
import * as React from 'react';
import fs from 'fs';

export default function RaidArticleDetail({params,}: {params: Promise<{ id: string }>;}) {
    const { id } = React.use(params);
    const articleNoteFilePath = './documents/raid/articleIdNote.md'
    const articleNote = fs.readFileSync(articleNoteFilePath,'utf-8').split('\n').map((data)=>data.split(':'));
    const noteMap = new Map();
    for (const [id,title] of articleNote ){
        noteMap.set(id,title)
    }

    if (!noteMap.get(id)) return <h1>없는 글입니다.</h1>
    return <h1>{id}번 글</h1>;
}