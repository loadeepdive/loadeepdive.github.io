import { atom } from 'jotai';
import { Section } from '../customFunction/markdownParsing';
export type ArticleDetailType = {
    head: [string,string][];
    body: Section
  };

export const articleDetailAtom = atom<ArticleDetailType>({
    head: [],
    body: {title:'', content:[]}
})