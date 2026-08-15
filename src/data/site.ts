// ── Single source of truth for all site content ──────────────────────────
// Edit this file to update the site. No component changes needed.

export const profile = {
  name: 'Sapnil Patel',
  handle: 'sapnilpatel',
  title: 'AI Engineer',
  tagline: 'I build intelligent systems that solve real-world problems — agentic AI workflows, LLM applications, and end-to-end ML pipelines that ship.',
  location: 'Los Angeles, CA',
  email: 'temp.opsgrouppps@gmail.com',
  github: 'https://github.com/SapnilPatel',
  linkedin: 'https://www.linkedin.com/in/sapnilpatel/',
  medium: 'https://medium.com/@SapnilPatel',
  resumeUrl: '', // drop a PDF in /public and set e.g. '/resume.pdf'
};

export const roles = [
  {
    title: 'AI Automation Engineer',
    org: 'Current role',
    period: '2026 — present',
    points: [
      'Automating real-world business operations end-to-end: scheduling data → generated documents',
      'Tested, self-verifying pipelines saving teams 40–50% of their daily workload',
      'Human-in-the-loop design for workflows that can\'t afford silent failures',
    ],
  },
  {
    title: 'Research Assistant',
    org: 'USC Center for the Neuroscience of Embodied Cognition (CeNEC)',
    period: '2025 — present',
    points: [
      'Connecting cognitive science with AI tools and methods',
      'Brain-activity-based image reconstruction research',
    ],
  },
  {
    title: 'MS, Applied Data Science',
    org: 'University of Southern California',
    period: 'Los Angeles',
    points: [
      'Core Tech Team member @DeCodeCafe, @GirlScript',
      'Open-source contributor',
    ],
  },
];

export const projects = [
  {
    name: 'llm-inference-optimizer',
    repo: 'https://github.com/SapnilPatel/llm-inference-optimizer',
    blurb:
      'High-throughput, low-latency LLM inference platform for LLaMA-3 & Mistral. Dynamic batching, KV-cache optimization, FP16/BF16 mixed precision, tensor parallelism — with Prometheus/Grafana observability and Kubernetes (HPA) deployment.',
    stack: ['PyTorch', 'CUDA', 'FastAPI', 'Kubernetes', 'Prometheus'],
    featured: true,
  },
  {
    name: 'ChatDB',
    repo: 'https://github.com/SapnilPatel/ChatDB',
    blurb:
      'Natural-language interface to SQL & NoSQL databases powered by LLMs. Ask questions in plain English; get validated queries and results. Lead developer.',
    stack: ['LLMs', 'SQL', 'NoSQL', 'Semantic Parsing'],
    featured: true,
  },
  {
    name: 'Silicon Validation Log-Analysis Agent',
    repo: 'https://github.com/SapnilPatel/Silicon-Validation-Log-Analysis-Agent',
    blurb:
      'LLM agent that digs through hardware validation logs so engineers don\'t have to — retrieval, reasoning loops, and structured findings over messy real-world logs.',
    stack: ['Agents', 'RAG', 'Python'],
    featured: true,
  },
  {
    name: 'Agentic Anomaly & Root-Cause Intelligence',
    repo: 'https://github.com/SapnilPatel/Agentic_Anomaly_and_Root_Cause_Intelligence_Platform',
    blurb:
      'Agent-driven platform that detects anomalies in operational data and reasons about their root cause autonomously.',
    stack: ['Multi-agent', 'Anomaly Detection', 'Python'],
    featured: true,
  },
  {
    name: 'Brain-Thought-Visualization',
    repo: 'https://github.com/SapnilPatel/Brain-Thought-Visualization',
    blurb:
      'Reconstructing visual experience from brain activity — where neuroscience meets generative models.',
    stack: ['Computer Vision', 'Generative Models', 'fMRI'],
    featured: false,
  },
  {
    name: 'Multi-Robot Warehouse Navigation Simulator',
    repo: 'https://github.com/SapnilPatel/Multi-Robot-Warehouse-Navigation-Simulator',
    blurb:
      'Simulating coordinated multi-robot path planning and conflict resolution in warehouse environments.',
    stack: ['Path Planning', 'Simulation', 'Python'],
    featured: false,
  },
  {
    name: 'epoll-httpd',
    repo: 'https://github.com/SapnilPatel/epoll-httpd',
    blurb:
      'An event-driven HTTP server written from scratch in C++ on epoll — because understanding the metal matters.',
    stack: ['C++', 'epoll', 'Systems'],
    featured: false,
  },
  {
    name: 'minisearch',
    repo: 'https://github.com/SapnilPatel/minisearch',
    blurb:
      'A compact search engine built from first principles — indexing, ranking, retrieval.',
    stack: ['Python', 'IR', 'Ranking'],
    featured: false,
  },
];

export const skills = {
  'Languages & ML': ['Python', 'PyTorch', 'TensorFlow', 'Hugging Face', 'scikit-learn', 'Pandas', 'C++'],
  'LLM Engineering': ['LoRA / QLoRA fine-tuning', 'Inference optimization', 'Agentic workflows', 'RAG', 'Evaluation'],
  'Deployment & Infra': ['FastAPI', 'Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Prometheus / Grafana'],
  Data: ['PostgreSQL', 'MySQL', 'MongoDB'],
};

export const whatIDo = [
  {
    icon: '◆',
    title: 'Agentic AI Systems',
    body: 'Multi-agent workflows, reasoning loops, autonomous task execution.',
  },
  {
    icon: '▲',
    title: 'AI-Powered Automation',
    body: 'Replacing repetitive office workflows with robust, human-in-the-loop pipelines.',
  },
  {
    icon: '●',
    title: 'LLM Applications',
    body: 'Natural language → SQL, semantic parsing, inference optimization.',
  },
  {
    icon: '■',
    title: 'LLM Fine-Tuning',
    body: 'LoRA / QLoRA, domain adaptation, rigorous model evaluation.',
  },
];
