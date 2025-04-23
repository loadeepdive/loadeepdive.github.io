# 개발에서 든 생각

- 한 객체 안의 value가 type이 다를 경우 다루기가 너무 힘들다;;

## github.io의 배포는 정적이라 [id]와 같이 Dynamic route를 사용시 미리 제시를 해줘야함...

- 로컬에선 문제가 없었지만, 배포 환경에선 네비게이션 리다이랙트 주소가 이상하게 처리됨



## 글 detail

- 처음에는 props를 이용해서 페이지를 설계하려고 코드 작성
- 좀 더 생각해보니 웹 페이지의 확장성(글 미리보기 등의 기능)을 생각하면 상태관리를 활용하는 편이 더 좋을거 같다는 생각이 들어 수정 시작
- 생각보다 큰 공사 ;;
- 기존 raiddeepdive/[id]/page.tsx 에서 데이터 파싱하고 이를 jotai를 이용하여 set으로 값을 저장하려고 했으나, set하는 작업 자체가 client side에서 이루어져야함 => useClient사용해야함 (기존엔 SPA 위주로 작업해서 생각치 못한 문제)
- 차라리 detail에 해당하는 ariticle component는 어차피 client로 조절한건데,  파일 주소를 읽는 과정부터 전부 article component에서 처리하는게 맞다는 생각이 듬

### 수정중 발생한 문제 

```typescript
// 기존 raiddeepdive/[id]/page의 코드
const articleNoteFilePath = './documents/raid/articleIdNote.md'
    const articleNote = fs.readFileSync(articleNoteFilePath,'utf-8').split('\n').map((data)=>data.split(':'));
    const noteMap = new Map();
    for (const [id,title] of articleNote ){
        noteMap.set(id,title)
    }
    const url = noteMap.has(id)? `./documents/raid/${noteMap.get(id)}`:null;
    const file = url?markdownToMap(url):null;
```

- 이를 수정해서 components/articles/articleDetail.tsx 에서 재활용 하게끔 코드 작성하려 했음

```typescript
"use client"
import { usePathname } from "next/navigation";
import fs from 'fs';

export default function ArticleDetailPage(){
    const path = usePathname().split('/');
    const [folderPath,id] = [path[1],path[2]];

    const articleNoteFilePath = folderPath==='raiddeepdive'?'./documents/raid/articleIdNote.md':''
    const articleNote = fs.readFileSync(articleNoteFilePath,'utf-8').split('\n').map((data)=>data.split(':'));
    console.log(articleNote)
    
    return (
        <div>
            아티클 디테일
        </div>
    )
}
```

- 하지만 articleDetail.tsx는 use client, client에서 작동함 => fs 불가(server단에서 처리할 작업) => path를 읽어 오는 것을 다른 곳에서 처리해야함
  - articleDetail.tsx에서 path를 읽고 jotai에 id 등을 저장하여 활용하는 방식을 사용? set 하는 작업 자체가 client 작업...
  - 그렇다면 애초에 props로 해결해야 할듯 => 읽어온 문서를 articleDetail에 넘기자
- 결론
  - 파일을 읽는 것 까진 서버단에서 처리 (raiddeepdive/[id]/page.tsx 에서 처리)
  - 읽은 파일(string type)을 props로 client 페이지인 articleDetail.tsx에 보냄
  - articleDetail.tsx에서 parsing 작업 처리
    - parsing도 코드블럭 부분을 처리하는 함수 따로, 본문을 처리하는 함수 따로 작성 => 타입 다루기가 쉬워짐







