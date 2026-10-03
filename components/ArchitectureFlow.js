import { ArrowRight } from 'lucide-react';
export default function ArchitectureFlow({items}){return <div className="architecture-flow">{items.map((x,i)=><div className="flow-fragment" key={x}><span>{x}</span>{i<items.length-1&&<ArrowRight size={17}/>}</div>)}</div>}
