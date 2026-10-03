import Link from 'next/link';
import { ArrowRight, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { profile, projects, skills } from '@/lib/data';
import ProjectCard from '@/components/ProjectCard';

export default function Home(){return <>
<section className="hero"><div className="container hero-grid">
  <div className="hero-copy">
    <div className="availability"><span/> AI student · builder · currently exploring internship opportunities</div>
    <p className="hero-kicker">AI ENGINEERING · AGENTIC SYSTEMS · CLOUD</p>
    <h1>I build AI systems that <em>reason, act, and stay accountable.</em></h1>
    <p className="hero-lede">I’m Chahak Goswami, a Penn State Artificial Intelligence student focused on practical agentic AI, trustworthy automation, cloud engineering, and turning ambiguous problems into working prototypes.</p>
    <div className="hero-actions"><Link className="button primary" href="/projects">Explore my work <ArrowRight size={18}/></Link><a className="button ghost" href={profile.resume}>View résumé</a></div>
    <div className="hero-social"><a href={profile.github} target="_blank"><Github size={17}/> GitHub</a><a href={profile.linkedin} target="_blank"><Linkedin size={17}/> LinkedIn</a><a href={`mailto:${profile.email}`}><Mail size={17}/> Email</a></div>
  </div>
  <div className="hero-visual" aria-hidden="true">
    <div className="orbit orbit-a"><i/><i/><i/></div><div className="orbit orbit-b"><i/><i/></div><div className="core"><Sparkles size={29}/><strong>AI</strong><small>build → test → evaluate</small></div>
    <div className="visual-label one">reasoning</div><div className="visual-label two">retrieval</div><div className="visual-label three">tool use</div><div className="visual-label four">evaluation</div>
  </div>
</div></section>

<section className="metric-strip"><div className="container metrics"><div><strong>4</strong><span>agentic AI projects</span></div><div><strong>FAA</strong><span>federal AI internship</span></div><div><strong>40%</strong><span>token cost reduction contribution</span></div><div><strong>3.70</strong><span>Penn State GPA</span></div></div></section>

<section className="section"><div className="container"><div className="section-head"><div><div className="kicker">SELECTED WORK</div><h2>Systems over slideware.</h2></div><p>I like projects where AI has to do more than generate text: reason across evidence, interact with tools, make bounded decisions, recover from failure, and leave a trace.</p></div>
<div className="projects-grid">{projects.map((p,i)=><ProjectCard p={p} featured={i===0} key={p.slug}/>)}</div>
<div className="section-link"><Link href="/projects">View all project details <ArrowRight size={16}/></Link></div>
</div></section>

<section className="section split-section"><div className="container split-grid"><div><div className="kicker">EXPERIENCE</div><h2>Building AI in a real federal environment.</h2><p className="big-copy">At the FAA / Rigil Corporation, I worked across RAG, agentic workflows, speech AI, cloud security visibility, and AI FinOps.</p><Link className="text-link" href="/experience">See experience <ArrowRight size={16}/></Link></div>
<div className="experience-feature"><span>2026 · Washington, D.C.</span><h3>Agentic AI Intern</h3><h4>Federal Aviation Administration / Rigil Corporation</h4><ul><li>Built FAAGPT with Bedrock Knowledge Bases and Claude.</li><li>Designed FAA Airspace Agents with AgentCore, Claude Agent SDK, LangChain, and LangGraph.</li><li>Built traceable multi-agent workflows and supported model quality evaluation.</li><li>Reviewed AI/cloud usage and contributed to a 40% token-cost reduction.</li></ul></div></div></section>

<section className="section"><div className="container"><div className="section-head"><div><div className="kicker">TOOLKIT</div><h2>What I build with.</h2></div><p>My focus is not collecting logos. These are technologies I use to build, test, debug, and reason about AI systems.</p></div><div className="skill-grid">{Object.entries(skills).map(([k,v])=><div className="skill-box" key={k}><h3>{k}</h3><div className="tags">{v.map(x=><span key={x}>{x}</span>)}</div></div>)}</div></div></section>

<section className="section statement"><div className="container statement-inner"><div className="kicker">HOW I THINK</div><blockquote>“The interesting part of autonomous AI isn’t just what it can do. It’s how clearly we can define what it should do, what it must never do, and how we prove the difference.”</blockquote><p>That idea shows up across my projects: approval gates, rollback paths, source provenance, contradiction checks, audit trails, and deterministic tests.</p></div></section>
</>}
