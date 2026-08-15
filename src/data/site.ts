// ── Single source of truth for all site content ──────────────────────────
// Edit this file to update the site. No component changes needed.

export const profile = {
  name: 'Sapnil Patel',
  handle: 'sapnilpatel',
  title: 'AI Engineer',
  tagline: 'I build intelligent systems that solve real-world problems — agentic AI workflows, LLM applications, and end-to-end ML pipelines that ship.',
  location: 'Los Angeles, CA',
  email: 'sapnilku@usc.edu',
  github: 'https://github.com/SapnilPatel',
  linkedin: 'https://www.linkedin.com/in/sapnilpatel/',
  medium: 'https://medium.com/@SapnilPatel',
  resumeUrl: '/resume.pdf',
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
      'Tensor parallelism across GPUs via DeepSpeed, with async batching scheduler and admission control for backpressure',
      'Prometheus + Grafana observability; deployed on GCP via GKE with horizontal pod autoscaling for zero-downtime serving',
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
    stack: ['PyTorch', 'DeepSpeed', 'FastAPI', 'GKE / GCP', 'Prometheus', 'Grafana'],
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
    org: 'Pacific Production Services, Inc. · Los Angeles',
    period: 'Jun 2026 — present',
    points: [
      'Architected concurrent, high-throughput backend microservices (Python, FastAPI) automating document parsing — saving $25,000+ annually',
      'Automated 100% of rental-agreement generation from live scheduling data via an idempotent, unit-tested pipeline with content-hash change detection — saving $55,000+ annually',
    ],
  },
  {
    title: 'AI Research Assistant',
    org: 'USC-CeNEC Lab · Los Angeles',
    period: 'Mar 2025 — present',
    points: [
      'Engineered distributed evaluation engines benchmarking LLM outputs across 1,050+ experiments, improving throughput by 50%',
      'Built custom Ollama inference pipelines integrating fine-tuned local models into automated agent frameworks',
    ],
  },
  {
    title: 'Software Developer',
    org: 'Nivaan Infotech · Visnagar, India',
    period: 'Jan 2024 — Oct 2024',
    points: [
      'Developed conversational backends over a PostgreSQL order-processing service, eliminating 1–2 hours of manual request handling daily',
      'Deployed predictive modeling and PPO-based reinforcement learning for personalization — lifting engagement 25% under differential privacy (TensorFlow Privacy)',
    ],
  },
];

export const education = [
  {
    school: 'University of Southern California',
    degree: 'MS, Applied Data Science',
    period: 'Jan 2025 — Dec 2026',
    detail: 'Data Management · ML for Data Science · Predictive Analytics · Data Mining',
  },
  {
    school: 'CHARUSAT University',
    degree: 'B.Tech, Computer Engineering',
    period: 'Oct 2020 — Apr 2024',
    detail: 'AI · NLP · DSA · Networking · Big Data · Computer Vision · Databases',
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
      'Multi-agent AI debug assistant (LangGraph + Pinecone RAG) automating post-silicon failure triage across 10M+ validation logs — cutting engineering debugging time 40% and surfacing 85%+ of recurring failure patterns.',
    stack: ['LangGraph', 'Pinecone', 'RAG', 'Anomaly Detection'],
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
      'A search engine from first principles: BM25 queries at 1–13 ms p50 over 20K docs, 7,400 pages/sec crawl at 40 MB peak memory, and a from-scratch bloom filter cutting URL-dedup memory 99× (measured 1.02% false-positive rate, within 2% of theory). 215 tests.',
    stack: ['Python', 'BM25', 'Bloom Filter', 'Async Crawling'],
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
  Languages: ['Python', 'C++', 'Java', 'JavaScript', 'C', 'SQL', 'Bash', 'Kotlin', 'Scala'],
  'ML & Deep Learning': ['PyTorch', 'TensorFlow', 'Transformers', 'Hugging Face', 'DeepSpeed', 'scikit-learn', 'XGBoost', 'OpenCV'],
  'LLM & Agents': ['LangChain', 'LangGraph', 'CrewAI', 'Ollama', 'RAG', 'Vector databases', 'LLM fine-tuning', 'Claude Code'],
  'Backend & Systems': ['FastAPI', 'Docker', 'Kubernetes (GKE)', 'CI/CD', 'Linux', 'Prometheus / Grafana', 'pytest', 'CUDA'],
  'Cloud & Databases': ['AWS (SageMaker, EC2, S3)', 'GCP', 'PostgreSQL', 'MongoDB', 'Redis', 'Pinecone'],
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
