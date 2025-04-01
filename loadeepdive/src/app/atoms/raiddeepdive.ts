import { atom } from 'jotai';

// 카운터 상태
export const countAtom = atom(0);
export const selectedCategory = atom({
    raidType: '',
    raidName: '',
    raidDiff: ''
})