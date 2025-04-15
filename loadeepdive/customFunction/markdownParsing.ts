import fs from 'fs';

export function markdownToMap(filePath:string){
    const origin_file = fs.readFileSync(filePath,'utf-8');
    const codeBlock = origin_file.match(/```([\s\S]*?)```/);
    const data = codeBlock?codeBlock[0]:'```\n```';
    const dataArr = data.split('\n').map((data)=>data.split(':'))
    
    const body = origin_file.replace(codeBlock?codeBlock[0]:'','').trim()
    const dataMap = new Map();
    dataMap.set('bodyData',body)
    for (let i = 1; i<dataArr.length-1; i++){
        if (dataArr[i].length != 2) continue
        dataMap.set(dataArr[i][0],dataArr[i][1])
    }
    return dataMap
}

