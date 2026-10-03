export const profile = {
  name: 'Chahak Goswami',
  title: 'AI Engineer & Agentic AI Builder',
  school: 'Penn State University',
  degree: 'B.S. in Artificial Intelligence',
  graduation: 'May 2029',
  gpa: '3.70',
  email: 'goswamichahak@gmail.com',
  github: 'https://github.com/chahakgoswami',
  linkedin: 'https://www.linkedin.com/in/chahakgoswami/',
  resume: '/Chahak_Goswami_Resume.docx'
};

export const projects = [
  {
    slug: 'self-healing-data-pipeline-agent',
    number: '01',
    title: 'Self-Healing Data Pipeline Agent',
    eyebrow: 'Agentic Data Reliability',
    repo: 'https://github.com/chahakgoswami/self-healing-data-pipeline-agent',
    status: 'Working build',
    summary: 'An agentic ETL system that detects schema drift, drafts controlled fixes, requires human approval, validates recovery, and automatically rolls back failed mutations.',
    problem: 'Data pipelines fail when upstream schemas drift. Manual triage is repetitive, slow, and risky when automated fixes are allowed to mutate production data.',
    solution: 'The agent classifies drift, drafts a transformation, gates the change behind approval, executes it in an isolated path, re-validates the schema, and restores the last known-good state if validation fails.',
    highlights: ['4 schema-drift classes', 'Human-in-the-loop approval', 'Automatic rollback', 'Structured audit trail', '130+ pytest tests'],
    stack: ['Python', 'Agentic AI', 'ETL', 'Pytest', 'CLI', 'Audit Logging'],
    architecture: ['Incoming batch', 'Drift detector', 'Fix drafter', 'Human approval', 'Sandboxed executor', 'Validation', 'Audit / rollback'],
    learnings: 'A useful autonomous system needs boundaries. The most important engineering decision was not “how do I let an agent fix data?” but “how do I make every proposed change observable, reviewable, reversible, and testable?”'
  },
  {
    slug: 'deep-research-agent-citation-graph',
    number: '02',
    title: 'Deep Research Agent with Citation Graph',
    eyebrow: 'Trustworthy AI Research',
    repo: 'https://github.com/chahakgoswami/deep-research-agent-citation-graph',
    status: 'Working build',
    summary: 'A multi-hop research agent that expands questions, retrieves evidence, builds a citation graph, grades sources, detects contradictions, and produces a traceable report.',
    problem: 'Research agents can sound convincing while hiding weak evidence, conflicting sources, or unclear provenance.',
    solution: 'The system models sources as a directed citation graph, grades source quality, links contradictions, and compiles findings with inline citations so conclusions remain inspectable.',
    highlights: ['Up to 10 research hops', 'Directed citation graph', 'A–F source grading', 'Contradiction detection', 'Human-confirmed file writes'],
    stack: ['Python', 'NetworkX', 'Pydantic', 'Agentic Research', 'Source Evaluation', 'CLI'],
    architecture: ['Research query', 'Sub-question expansion', 'Retrieval', 'Hop chain', 'Citation graph', 'Source grading', 'Contradiction detection', 'Structured report'],
    learnings: 'Trustworthiness improves when evidence is a first-class data structure instead of an afterthought. Citation provenance, source quality, and disagreement between sources should be represented explicitly.'
  },
  {
    slug: 'autonomous-ticket-resolution-engine',
    number: '03',
    title: 'Autonomous Ticket Resolution Engine',
    eyebrow: 'Agentic Operations',
    repo: 'https://github.com/chahakgoswami/autonomous-ticket-resolution-engine',
    status: 'Project build / roadmap',
    summary: 'An agentic support workflow designed to read tickets, inspect data, plan safe versus destructive actions, request confirmation where needed, and produce auditable resolution records.',
    problem: 'Support teams repeatedly investigate similar tickets, but fully autonomous resolution can create risk when the agent changes or deletes data.',
    solution: 'The design separates read-only actions from destructive actions, inserts a confirmation gate for risky operations, and records before/after state and agent decisions.',
    highlights: ['Ticket intent analysis', 'Safe vs destructive planning', 'Human confirmation gate', 'Resolution reports', 'Decision audit log'],
    stack: ['Python', 'Agentic AI', 'Workflow Orchestration', 'Mock DB', 'Pytest'],
    architecture: ['Ticket', 'Intent analysis', 'Query engine', 'Fix planner', 'Safety gate', 'Executor', 'Resolution report'],
    learnings: 'Good agent design is often permission design. Read-only operations and destructive mutations should not share the same execution path.'
  },
  {
    slug: 'ci-triage-agent',
    number: '04',
    title: 'CI Triage Agent',
    eyebrow: 'AI for Developer Workflows',
    repo: 'https://github.com/chahakgoswami/ci-triage-agent',
    status: 'Project build / roadmap',
    summary: 'An engineering agent designed to read failing CI logs, classify errors, reproduce failures, propose code patches, validate fixes, and open approval-ready pull requests.',
    problem: 'CI failures create context switching: engineers must inspect logs, reproduce errors, locate the cause, patch code, rerun tests, and document the fix.',
    solution: 'The workflow turns those steps into an auditable agent loop with reproduction before remediation and human approval before finalizing a patch.',
    highlights: ['CI log parsing', 'Sandboxed reproduction', 'LLM-backed patch proposals', 'Test-before-PR validation', 'Human approval'],
    stack: ['Python', 'OpenAI-compatible LLM', 'CI/CD', 'Git', 'Pytest', 'Agent Orchestration'],
    architecture: ['Failing CI logs', 'Parser', 'Reproducer', 'Fix agent', 'Test runner', 'PR artifact', 'Human approval'],
    learnings: 'AI should enter engineering workflows after deterministic evidence gathering. Reproducing the failure before proposing a fix creates a stronger feedback loop.'
  }
];

export const experience = [
  {
    company: 'Federal Aviation Administration (FAA) / Rigil Corporation',
    role: 'Agentic AI Intern',
    period: 'Jun 2026 — Aug 2026',
    location: 'Washington, D.C.',
    bullets: [
      'Built and deployed FAAGPT, an Air Traffic Controller training assistant using Amazon Bedrock, Bedrock Knowledge Bases, Anthropic Claude, Python, Java, JavaScript, and TypeScript.',
      'Designed FAA Airspace Agents using Amazon Bedrock AgentCore, Agent Harness, Claude Agent SDK, LangChain, and LangGraph for autonomous reasoning, retrieval, and controlled tool use.',
      'Built multi-agent workflows for training-content retrieval, procedure summarization, scenario-based question answering, session context, and traceable agent actions.',
      'Fine-tuned OpenAI Whisper models for speech-to-text training use cases and supported AI quality testing and evaluation.',
      'Created an AWS asset inventory across EC2, VPCs, IAM roles, and security groups to improve security visibility, ownership, tagging, and documentation.',
      'Reviewed AI and AWS usage for governance and cost opportunities, contributing to a 40% reduction in AI token costs.'
    ]
  },
  {
    company: 'Penn State Golf Course',
    role: 'Part-Time Golf Operations Support — Intercollegiate Athletics',
    period: 'Sep 2025 — Present',
    location: 'State College, PA',
    bullets: [
      'Support daily golf operations and events while creating an organized and welcoming experience for guests.',
      'Check in visiting teams, verify scorecards, and coordinate tee-time changes during intercollegiate events.'
    ]
  }
];

export const skills = {
  'Agentic AI': ['Bedrock AgentCore', 'Claude Agent SDK', 'LangChain', 'LangGraph', 'Multi-agent workflows', 'Agent Harness', 'Tool calling'],
  'AI / GenAI': ['Amazon Bedrock', 'SageMaker', 'OpenAI', 'Anthropic Claude', 'RAG', 'Embeddings', 'Knowledge bases'],
  'Engineering': ['Python', 'TypeScript', 'Java', 'JavaScript', 'REST APIs', 'Testing', 'Debugging', 'Root-cause analysis'],
  'Cloud / Security': ['AWS', 'EC2', 'VPC', 'IAM', 'Security Groups', 'Asset inventory', 'Governance', 'Compliance tagging']
};
