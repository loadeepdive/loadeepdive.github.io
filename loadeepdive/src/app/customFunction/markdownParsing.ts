// import fs from 'fs';

export function markdownToMap(origin_file:string):Map<string,string>{
    const codeBlock = origin_file.match(/```([\s\S]*?)```/);
    // 코드블럭으로 감싼 정보 처리
    const data = codeBlock?codeBlock[0]:'```\n```';
    const dataArr = data.split('\n').map((data)=>data.split(':'))
    const dataMap = new Map();
    for (let i = 1; i<dataArr.length-1; i++){
        if (dataArr[i].length != 2) continue
        dataMap.set(dataArr[i][0],dataArr[i][1])
    }
    // 본문
    // const body = parseBodyMarkdown(origin_file.replace(codeBlock?codeBlock[0]:'','').trim().split('\n'))
    // dataMap.set('bodyData',body)
    return dataMap
}

export type Section = {
    title: string;
    content: string[];
    details?: Section[];
};
  
// export const parseBodyMarkdown = (lines: string[])=>{
export const parseBodyMarkdown = (origin_file: string)=>{
    const codeBlock = origin_file.match(/```([\s\S]*?)```/);
    const lines = origin_file.replace(codeBlock?codeBlock[0]:'','').trim().split('\n')
    const result: Section[] = [];
    let currentTop: Section | null = null;
    let currentDetail: Section | null = null;
    let currentSubDetail: Section | null = null;

    for (const line of lines) {
        const trimmed = line.trim();

        if (trimmed.startsWith('# ')) {
        currentTop = { title: trimmed.replace('# ', ''), content: [] };
        result.push(currentTop);
        currentDetail = null;
        currentSubDetail = null;
        } else if (trimmed.startsWith('## ')) {
        if (currentTop) {
            currentDetail = { title: trimmed.replace('## ', ''), content: [] };
            currentTop.details ??= [];
            currentTop.details.push(currentDetail);
        }
        currentSubDetail = null;
        } else if (trimmed.startsWith('### ')) {
        if (currentDetail) {
            currentSubDetail = { title: trimmed.replace('### ', ''), content: [] };
            currentDetail.details ??= [];
            currentDetail.details.push(currentSubDetail);
        }
        } else {
        if (currentSubDetail) {
            currentSubDetail.content.push(trimmed);
        } else if (currentDetail) {
            currentDetail.content.push(trimmed);
        } else if (currentTop) {
            currentTop.content.push(trimmed);
        }}
    }
    return result;
    }