# 프로젝트 중단 이유
1. 프로젝트의 방향성이 lostark의 상황 및 방향성과 괴리감이 심해 수요가 없고, 컨텐츠를 작성하려는 사람(본인)에게도 흥미가 전혀 생기지 않는 프로젝트.
    - 이로 인해 이 프로젝트에 대한 흥미가 식어버렸다.
2. github.io에서 배포하는 방식은 글을 자유롭게 작성하기도 어렵고, 추가적으로 기능을 추가하는데 너무 많은 제약이 있다.
    - 서버에서 파일을 읽어서 파싱을 통해 텍스트로 글을 내보내는 방식으로 인해 추가 기능 만들기가 너무 힘듬
        - 예를들어 게시글 리스트에서 호버링 시 글 요약 기능을 추가 고려 상황
        - 클릭하지 않은 모든 게시글을 전부 읽어야하거나, 따로 요약본을 미리 적어둬야함 -> AI를 통한 자동 요약등을 전혀 활용하지 못하는 확장성

## 배운점
- SSR과 CSR에서 데이터(상태 관리...)의 차이점을 배우게 됨
    - 기존 프로젝트는 모두 SPA로 이루어져 server에서 정보가 처리되는 것을 전혀 고민할 필요가 없었음 => props 사용 이유를 못느끼고, 왠만하면 상태관리 라이브러리에서 처리
    - 이 프로젝트는 서버에서만 처리해야 하는 일(파일 읽기)을 통해 얻은 데이터를 처리하려면 jotai 사용이 불가(파일일기는 서버, 상태관리 라이브러리는 클라이언트에서 작동)
- 타입스크립트를 쓰며 느낀점
    - 기존에는 TypeScript의 실용성에 대해 단순히 Type을 곁들이는 것이기에 타인의 코드를 봤을 때 객체 처리 과정을 쉽게 이해하는데 쓰이겠구나 라고 단순하게 생각
    - 객체를 조금 복잡하게 설계 했는데, 그러다 보니 이 객체를 다룰 때 타입을 불러와서 처리하는게 굉장히 불편했음
    - 그러다 보니 객체를 좀 더 간단하게 설계할 방법을 고민하게 됨
- AI의 힘이 대단하다.
    - 기존이였다면 3~4시간 걸려서 처리할 문제들을 AI와 대화하면서 파악해나가다 보니 1시간 넘게 고민한 문제들이 거의 없었음
    - 앞으로는 문제를 정의하고, 설계를 잘하는 사람의 능력이 중요한 시대라는 생각이 들었는데, 그렇다면 이를 어떻게 검증 할 수 있을까? 라는 새로운 생각이 생겼다.


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
