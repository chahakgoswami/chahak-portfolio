import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '@/lib/data';
export default function Footer(){ return <footer className="footer"><div className="container footer-inner">
  <div><div className="kicker">LET'S BUILD SOMETHING USEFUL.</div><h2>Interested in AI engineering, agent systems, or applied research?</h2></div>
  <div className="socials">
    <a href={`mailto:${profile.email}`} aria-label="Email"><Mail/></a><a href={profile.github} target="_blank" aria-label="GitHub"><Github/></a><a href={profile.linkedin} target="_blank" aria-label="LinkedIn"><Linkedin/></a>
  </div>
  <div className="footer-bottom"><span>© 2026 Chahak Goswami</span><span>Built with Next.js · Designed for clarity, proof, and curiosity.</span></div>
</div></footer> }
