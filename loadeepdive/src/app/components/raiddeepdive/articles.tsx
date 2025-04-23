import fs from 'fs/promises';
import * as fsSync from 'fs';
import Link from 'next/link';

export default async function Articles({pathName}:{pathName:string}) {
    // 폴더 읽어오기
    const folderPath = pathName == 'raiddeepdive'?'./documents/raid':''; // 경로 설정
    let articleArray: string[] = [];
    try {
      articleArray = await fs.readdir(folderPath);
      console.log(articleArray)
    } catch (err) {
      console.error('폴더 읽기 실패:', err);
    }
    // 글과 id 매칭
    const articleNoteFilePath = './documents/raid/articleIdNote.md'
    const articleNote = fsSync.readFileSync(articleNoteFilePath,'utf-8').split('\n').map((data)=>data.split(':'));
    const articleIdMap = new Map();
    for (const [id,title] of articleNote ){articleIdMap.set(title,id)}

    return (
      <div>
        <hr/>
        <div>아티클스</div>
        <ul>
        {articleArray.length > 0 ? (
          articleArray.map((article,idx) => articleIdMap.has(article)?(
          <div key={idx}>
            <Link href={`raiddeepdive/${articleIdMap.get(article)}`}>{article} : {articleIdMap.get(article)}</Link>
          </div>
        ):null
        )) : (<li>죄송합니다. 글을 찾지 못했습니다</li>)}
      </ul>
        <hr />
      </div>
    );
  }
  