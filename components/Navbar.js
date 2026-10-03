'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const links = [['/projects','Projects'],['/experience','Experience'],['/about','About']];

export default function Navbar(){
  const path = usePathname();
  const [open,setOpen]=useState(false);
  return <header className="nav-wrap"><nav className="nav container">
    <Link href="/" className="brand" onClick={()=>setOpen(false)}><span className="brand-mark">CG</span><span>Chahak Goswami</span></Link>
    <div className={`nav-links ${open?'open':''}`}>
      {links.map(([href,label])=><Link key={href} className={path.startsWith(href)?'active':''} href={href} onClick={()=>setOpen(false)}>{label}</Link>)}
      <a className="nav-cta" href="/Chahak_Goswami_Resume.docx">Resume <span>↗</span></a>
    </div>
    <button className="menu" aria-label="Toggle navigation" onClick={()=>setOpen(!open)}>{open?<X size={20}/>:<Menu size={20}/>}</button>
  </nav></header>
}
