import * as React from 'react';
import fs from 'fs';
import path from 'path';
import { markdownToMap } from '@/app/customFunction/markdownParsing';

export default function RaidArticleDetail({params,}: {params: Promise<{ id: string }>;}) {
    const { id } = React.use(params);
    const articleNoteFilePath = './documents/raid/articleIdNote.md'
    const articleNote = fs.readFileSync(articleNoteFilePath,'utf-8').split('\n').map((data)=>data.split(':'));
    const noteMap = new Map();
    for (const [id,title] of articleNote ){
        noteMap.set(id,title)
    }
    const url = noteMap.has(id)? `./documents/raid/${noteMap.get(id)}`:null;
    const file = url?markdownToMap(url):null;
    const data = file?[...file].filter((data)=> data[0] !== 'bodyData'):null;
    const body = file?file.get('bodyData'):'';

    if (!noteMap.has(id)) return <h1>없는 글입니다.</h1>
    return (
    <div>
        <h1>{id}번 글</h1>
            <div>
                {data?data.map((item, index)=>(<div key={index}>{item[0]} : {item[1]}</div>)):'데이터가 없습니다..'}
            </div>
        <h1>bodyData</h1>
        <div>{body}</div>
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