"use client"
import { markdownToMap,parseBodyMarkdown } from "@/app/customFunction/markdownParsing";

export default function ArticleDetailPage({ article, articleTitle }: { article: string, articleTitle:string }){
    const data = [...markdownToMap(article)];
    const bodyData = parseBodyMarkdown(article);
    return (
        <div>
        <h1> 글 제목:{articleTitle}</h1>
        <div>{data?data.map((item, index)=>(<div key={index}>{item[0]} : {item[1]}</div>)):'데이터가 없습니다..'}</div>

        <h1>bodyData</h1>
        {bodyData.map((firstObj,index)=>(
            // # 시작
            <div key={index}>
                <h1>{firstObj.title}</h1>
                {firstObj.content.map((str1,str1Index)=>(<div key={str1Index}>{str1}</div>))}
                {/* ##에 해당하는 글 */}
                {firstObj.details?firstObj.details.map((secondObj,detailIndex)=>(
                    <div key={detailIndex}>
                        <h2>{secondObj.title}</h2>
                        {secondObj.content.map((str2,str2Index)=>(<div key={str2Index}>{str2}</div>))}
                        {/* ###에 해당하는 글 */}
                        {secondObj.details?.map((thirdObj,thirdObjIndex)=>(
                         <div key={thirdObjIndex}>
                            <h3>{thirdObj.title}</h3>
                            {thirdObj.content.map((str3,str3Index)=>(<div key={str3Index}>{str3}</div>))}
                         </div>   
                        ))}

                    </div> // ## 끝
                )):null}
            </div> // # 끝
        ))}
    </div>
    )
}