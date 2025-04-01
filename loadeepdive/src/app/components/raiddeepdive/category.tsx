'use client';

import { useAtom } from 'jotai';
import { selectedCategory } from '../../atoms/raiddeepdive'

export default function Categoty() {
    const [data,setDate] = useAtom(selectedCategory);

    return (
      <div>
        <hr />
        <div>카테고리</div>
        <div>선택된 카테고리: {data.raidType} {data.raidName} {data.raidDiff}</div>
        <button onClick={()=>setDate({...data, raidName:'쿠크'})}> 쿠크로 변경</button>
        <button onClick={()=>setDate({...data, raidName:'비아키스'})}> 비아키스로 변경</button>
        <hr />
      </div>
    );
  }
  