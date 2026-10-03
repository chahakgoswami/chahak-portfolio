import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/lib/data';
export const metadata={title:'Projects | Chahak Goswami'};
export default function Projects(){return <section className="page"><div className="container"><div className="page-head"><div className="kicker">PROJECTS</div><h1>AI systems built around real engineering constraints.</h1><p>Autonomy is useful only when the system is observable, testable, grounded, and bounded. These projects explore those constraints through data reliability, research, support automation, and developer workflows.</p></div><div className="projects-grid all">{projects.map(p=><ProjectCard p={p} key={p.slug}/>)}</div></div></section>}
