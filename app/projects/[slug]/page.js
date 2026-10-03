import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Github } from 'lucide-react';
import { projects } from '@/lib/data';
import ArchitectureFlow from '@/components/ArchitectureFlow';

export function generateStaticParams(){return projects.map(p=>({slug:p.slug}))}
export async function generateMetadata({params}){const {slug}=await params; const p=projects.find(x=>x.slug===slug); return {title:`${p?.title||'Project'} | Chahak Goswami`}}
export default async function ProjectPage({params}){const {slug}=await params; const p=projects.find(x=>x.slug===slug); if(!p) notFound(); return <section className="page project-page"><div className="container narrow">
<Link href="/projects" className="back"><ArrowLeft size={16}/> All projects</Link>
<div className="project-hero"><div><div className="eyebrow">{p.eyebrow}</div><h1>{p.title}</h1><p>{p.summary}</p></div><a className="button primary" href={p.repo} target="_blank"><Github size={18}/> View code <ArrowUpRight size={17}/></a></div>
<div className="project-meta"><span>{p.status}</span>{p.stack.map(x=><span key={x}>{x}</span>)}</div>
<div className="case-grid"><div className="case-block"><div className="kicker">THE PROBLEM</div><h2>Why this exists.</h2><p>{p.problem}</p></div><div className="case-block"><div className="kicker">THE APPROACH</div><h2>How I approached it.</h2><p>{p.solution}</p></div></div>
<div className="case-block wide"><div className="kicker">ARCHITECTURE</div><h2>The system flow.</h2><ArchitectureFlow items={p.architecture}/></div>
<div className="case-grid"><div className="case-block"><div className="kicker">ENGINEERING SIGNALS</div><h2>What to notice.</h2><ul className="check-list">{p.highlights.map(x=><li key={x}>{x}</li>)}</ul></div><div className="case-block"><div className="kicker">WHAT I LEARNED</div><h2>The takeaway.</h2><p>{p.learnings}</p></div></div>
<div className="next-project"><span>Keep exploring</span><Link href="/projects">See the rest of the project portfolio <ArrowUpRight size={18}/></Link></div>
</div></section>}
