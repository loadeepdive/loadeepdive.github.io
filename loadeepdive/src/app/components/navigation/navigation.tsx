"use client";
// import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from '@mui/material';

export default function Navigation(){
    const path = usePathname().split('/');
    return (
    <nav>
        {path[1]=== ""?<Button href="/" variant="contained">Home</Button>:<Button href="/" variant="outlined">Home</Button>}
        {path[1]=== "raiddeepdive"?<Button href="/raiddeepdive" variant="contained">Raid Deep Dive</Button>:<Button href="/raiddeepdive" variant="outlined">Raid Deep Dive</Button>}
    </nav>
        );
}