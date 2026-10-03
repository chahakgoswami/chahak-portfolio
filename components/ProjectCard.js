import Link from 'next/link';
import { ArrowUpRight, Github } from 'lucide-react';
export default function ProjectCard({p,featured=false}){ return <article className={`project-card ${featured?'featured':''}`}>
  <div className="project-top"><span className="project-number">{p.number}</span><span className={`status ${p.status==='Working build'?'live':''}`}>{p.status}</span></div>
  <div><div className="eyebrow">{p.eyebrow}</div><h3>{p.title}</h3><p>{p.summary}</p></div>
  <div className="tags">{p.stack.slice(0,4).map(x=><span key={x}>{x}</span>)}</div>
  <div className="card-actions"><Link href={`/projects/${p.slug}`}>Case study <ArrowUpRight size={16}/></Link><a href={p.repo} target="_blank"><Github size={16}/> Code</a></div>
</article> }
