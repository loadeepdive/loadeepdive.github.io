import Bookmark from "../components/raiddeepdive/bookmark"
import Categoty from "../components/raiddeepdive/category"
import Articles from "../components/raiddeepdive/articles"

export default function raiddeepdivePage(){
    return (
        <div>
            <Bookmark></Bookmark>
            <Categoty></Categoty>
            <Articles pathName="raiddeepdive"></Articles>
        </div>
    )
}