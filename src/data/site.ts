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
  // recruiter-facing availability status — shown as the green-pulse pill
  status: 'Open to full-time AI / SDE roles · graduating Dec 2026',
};

// ── flagship case studies — one AI, one SDE, shown before everything else ──
export const flagships = [
  {
    tag: 'AI · ML Systems',
    name: 'llm-inference-optimizer',
    repo: 'https://github.com/SapnilPatel/llm-inference-optimizer',
    oneLiner: 'A distributed LLM serving platform that makes LLaMA-3 & Mistral answer faster, cheaper, and at higher volume.',
    problem: 'Naive LLM serving runs one request at a time in FP32 — GPUs sit idle between requests and memory is wasted, making inference slow and expensive.',
    approach: [
      'Dynamic batching: concurrent requests merged into a single forward pass within a max_wait_ms window',
      'Explicit KV-cache decode loop with a memory estimator for OOM-safe admission control',
      'FP16/BF16 mixed precision with automatic CPU→FP32 fallback',
      'Tensor parallelism across GPUs via DeepSpeed / HF Accelerate',
      'Prometheus metrics + Grafana dashboard; Docker + Kubernetes HPA deploy',
    ],
    metrics: [
      { value: '2.3×', label: 'throughput vs FP32 baseline' },
      { value: '−38%', label: 'GPU memory' },
      { value: 'p50→p99', label: 'full latency breakdown' },
    ],
    architecture: `HTTP ─▶ FastAPI ─▶ InferenceEngine ─▶ DynamicBatcher ─▶ ModelBackend
                     │                   │                  │
                /metrics           async queue +      prefill + KV-cached
               (Prometheus)       max_wait window     decode, FP16/BF16 · TP`,
    stack: ['PyTorch', 'DeepSpeed', 'FastAPI', 'Kubernetes', 'Prometheus', 'Grafana'],
    note: 'Inference cost is an engineering problem, not a hardware bill you just pay.',
  },
  {
    tag: 'SDE · Systems',
    name: 'epoll-httpd',
    repo: 'https://github.com/SapnilPatel/epoll-httpd',
    oneLiner: 'A multithreaded HTTP/1.1 server written from scratch in C++17 that beats nginx on small-payload throughput.',
    problem: 'Frameworks hide where HTTP performance actually comes from. Building on raw epoll, SO_REUSEPORT, and sendfile — no dependencies beyond libc and pthreads — exposes every microsecond.',
    approach: [
      'Event-driven core on epoll with SO_REUSEPORT worker sharding',
      'Zero-copy responses via sendfile',
      'Benchmarked honestly against nginx: matched config, pinned cores, published methodology and run-to-run variance',
    ],
    metrics: [
      { value: '~150k', label: 'requests/sec (1 KB, 2-core Xeon)' },
      { value: '1.6×', label: 'nginx throughput, same hardware' },
      { value: '<½', label: 'the resident memory (5 MB vs 10 MB)' },
    ],
    architecture: `        :8080  (SO_REUSEPORT)
   ┌──────────┴──────────┐
 worker 0    …    worker N        each: epoll loop
   │                    │         parse ▸ route ▸ sendfile
   └── zero-copy responses ──▶ kernel copy path`,
    stack: ['C++17', 'epoll', 'sendfile', 'pthreads', 'wrk'],
    note: 'At 64 KB payloads both servers hit the kernel copy path — knowing where your bottleneck moves is the whole game.',
  },
];

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
    period: 'graduating Dec 2026',
    points: [
      'Research Assistant @ CeNEC alongside coursework',
      'Core Tech Team member @DeCodeCafe, @GirlScript',
      'Open-source contributor',
    ],
  },
];

export const projects = [
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
    name: 'minisearch',
    repo: 'https://github.com/SapnilPatel/minisearch',
    blurb:
      'A search engine from first principles — polite crawler, compact dedup filter, inverted index, BM25 ranking. 215 tests, answers queries in milliseconds.',
    stack: ['Python', 'BM25', 'Information Retrieval'],
    featured: true,
  },
  {
    name: 'Brain-Thought-Visualization',
    repo: 'https://github.com/SapnilPatel/Brain-Thought-Visualization',
    blurb:
      'Reconstructing visual experience from brain activity — where neuroscience meets generative models. Part of my research at USC CeNEC.',
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
