import * as React from 'react';
import fs from 'fs';
import path from 'path';
import { markdownToMap,Section } from '@/app/customFunction/markdownParsing';

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
    console.log(body)

    if (!noteMap.has(id)) return <h1>없는 글입니다.</h1>
    return (
    <div>
        <h1>{id}번 글</h1>
            <div>
                {data?data.map((item, index)=>(<div key={index}>{item[0]} : {item[1]}</div>)):'데이터가 없습니다..'}
            </div>
        <h1>bodyData</h1>
        {body?body.map((firstObj:Section,index:string)=>(
            // #
            <div key={index}>
                {/* #에 해당하는 글 */}
                <h1>{firstObj.title}</h1>
                {firstObj.content.map((str1,str1Index)=>(<div key={str1Index}>{str1}</div>))}
                {/* ##에 해당하는 글 */}
                {firstObj.details?firstObj.details.map((secondObj:Section,detailIndex)=>(
                    <div key={detailIndex}>
                        <h2>{secondObj.title}</h2>
                        {secondObj.content.map((str2,str2Index)=>(<div key={str2Index}>{str2} </div>))}
                    {/* ###에 해당하는 글 */}
                    {secondObj.details?secondObj.details.map((thirdObj:Section,thirdObjIndex)=>(
                        <div key={thirdObjIndex}>
                            <h3>{thirdObj.title}</h3>
                            {thirdObj.content.map((str3,str3Index)=>(<div key={str3Index}>{str3}</div>))}
                        </div>
                    )):""}
                    </div>
                )):""}

            </div>
        )):''}
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