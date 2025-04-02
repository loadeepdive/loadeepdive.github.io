import fs from 'fs/promises';

export default async function Articles({pathName}:{pathName:string}) {
    // 폴더 읽어오기
    const folderPath = pathName == 'raiddeepdive'?'./documents/raid':''; // 경로 설정
    let articleArray: string[] = [];
    try {
      articleArray = await fs.readdir(folderPath);
    } catch (err) {
      console.error('폴더 읽기 실패:', err);
    }

    // return
    return (
      <div>
        <hr />
        <div>아티클스</div>
        <ul>
        {articleArray.length > 0 ? (
          articleArray.map((article) => <li key={article}>{article}</li>)
        ) : (
          <li>죄송합니다. 글을 찾지 못했습니다</li>
        )}
      </ul>
        <hr />
      </div>
    );
  }
  