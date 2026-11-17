const REPO = 'https://github.com/DylanL4556/Portfolio-Projects/tree/main'

export const profile = {
  name: 'Dylan Lott',
  role: 'Software Engineer',
  tagline:
    'Back-end and algorithm-focused developer. I like problems that are mathematically involved: optimization, data pipelines, machine learning, and the systems they run on.',
  email: 'DylanRobertbobLott@gmail.com',
  github: 'https://github.com/DylanL4556',
  linkedin: 'https://www.linkedin.com/in/dylan-lott02/',
}

export const about = [
  'I’m a computer science graduate (Applied Computer Science, USC Aiken, May 2026) with over six years of programming experience. My strengths are in AI/ML, mathematical programming, algorithm design and optimization, and data analysis.',
  'Right now I’m a System Administrator for the Edgefield County School District. Before that I spent two years on USC Aiken’s IT team, did grant-funded image-processing research, and co-authored a capstone on predictive authentication that was accepted for publication by CCSC.',
  'Outside of work I often participate in CTFs, solve Katas, and work on Kaggle datasets.',
]

export const experience = [
  {
    dates: 'Jun 2026 — Present',
    title: 'System Administrator',
    org: 'Edgefield County School District',
    points: [
      'Build desktop apps and scripts that automate and optimize how the district’s tech ecosystem is managed.',
      'Manage distributed systems at scale with PDQ, Jamf, GAM, Active Directory, Group Policy and Google/Windows tooling.',
      'Track down hard-to-find problems across software, operating systems, networking, servers, hardware and security systems.',
    ],
    tags: ['Automation', 'Active Directory', 'Jamf', 'PDQ', 'GAM'],
  },
  {
    dates: 'Apr 2024 — May 2026',
    title: 'System Administrator Intern',
    org: 'University of South Carolina Aiken',
    points: [
      'Set up an offline LLaMA-3 model to turn Microsoft Defender XDR reports into readable summaries for security monitoring across departments.',
      'Wrote automation for campus-wide device imaging, deployment and management, and managed the deployment servers.',
      'Led a technical team, delegating system deployments and computer-lab configuration.',
    ],
    tags: ['LLaMA-3', 'Defender XDR', 'Imaging', 'Team lead'],
  },
  {
    dates: 'Apr 2024 — Aug 2024',
    title: 'Summer Research Intern',
    org: 'University of South Carolina Aiken',
    points: [
      'Won a competitive grant to research and design a novel color model for image processing.',
      'Built the C++ and Java codebases with OpenGL, plus custom datasets to validate the model’s metrics.',
      'Presented the research and its performance data at a conference.',
    ],
    tags: ['C++', 'Java', 'OpenGL', 'Research'],
  },
]

export const featured = [
  {
    title: 'Predictive Biometric Authentication',
    kind: 'Capstone research · 2025–26',
    summary:
      'An authentication system that scores multi-modal telemetry (location, device fingerprint and password behavior) with custom ML models. One core piece predicts whether two passwords came from the same person, using string-similarity features: longest common substring across many strings (suffix trees), Levenshtein, Jaccard and a custom EPSB metric.',
    stats: [
      { value: '88.6%', label: 'accuracy (XGBoost)' },
      { value: '370K', label: 'password pairs tested' },
      { value: 'CCSC', label: 'paper accepted' },
    ],
    tags: ['Python', 'Java', 'C++', 'scikit-learn', 'XGBoost', 'Suffix trees'],
    links: [
      { label: 'Analysis & models', href: `${REPO}/CapstoneWork` },
      { label: 'Algorithms repo', href: 'https://github.com/DylanL4556/USCA_Capstone_DylanLott_BrandonWeathers' },
    ],
    note: 'With Brandon Weathers · advised by Dr. Yilian Zhang',
  },
  {
    title: 'Retrieval-Augmented Q&A over a University Website',
    kind: 'Personal project · 2026',
    summary:
      'A complete RAG pipeline: scrape a website, clean and split it into 500-token chunks with 100-token overlap, embed the chunks into a persistent ChromaDB vector store, then answer questions using only the retrieved context. Next step: replace fixed-size chunks with LLM-based semantic chunking.',
    stats: [
      { value: '500 / 100', label: 'token chunk / overlap' },
      { value: 'Top-50', label: 'chunks retrieved' },
    ],
    tags: ['Python', 'ChromaDB', 'Embeddings', 'tiktoken'],
    links: [{ label: 'Source', href: `${REPO}/RAG%20testing` }],
  },
]

export const projects = [
  {
    title: 'High-Performance Pathfinding Engine',
    summary: 'A Java pathfinding application built on Dijkstra’s algorithm, optimized to process millions of spatial data points in under a second.',
    tags: ['Java', 'Graphs', 'Optimization'],
  },
  {
    title: 'Blockchain & Elliptic-Curve Crypto Engine',
    summary: 'A custom blockchain using elliptic-curve cryptography, with original chain-obfuscation algorithms for privacy (similar in spirit to Monero).',
    tags: ['Cryptography', 'ECC', 'Math'],
  },
  {
    title: 'Flight Routing Planner',
    summary: 'A desktop app for planning routes between airports, with a GUI for managing the airport and aircraft database. My first project on pathfinding and application design.',
    tags: ['Java', 'GUI', 'Graphs'],
  },
  {
    title: 'Real-Time Database Web App',
    summary: 'A hosted web app that keeps the front end in sync in real time using two Firebase databases.',
    tags: ['Firebase', 'JavaScript', 'Real-time'],
  },
  {
    title: 'Algorithm Katas',
    summary: 'A sample of Codewars problems I’ve solved in various languages, for fun and practice.',
    tags: ['C++', 'GoLang', 'Python', 'Java', 'Algorithms'],
  },
  {
    title: 'Web Development Final Project',
    summary: 'My first in-depth web project, built with plain HTML, CSS and JavaScript for a web development course.',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
]

export const skills = [
  { group: 'Languages', items: ['C++', 'C', 'C#', 'Java', 'Python', 'Go', 'SQL', 'JavaScript / TypeScript', 'HTML / CSS'] },
  { group: 'Data & ML', items: ['NumPy', 'Pandas', 'Matplotlib', 'scikit-learn', 'Hugging Face Transformers', 'ChromaDB'] },
  { group: 'Systems', items: ['Linux (Arch, Debian, Ubuntu, Kali)', 'Windows', 'macOS', 'Active Directory', 'Group Policy', 'Azure', 'Intune'] },
  { group: 'Tools', items: ['Jamf', 'PDQ', 'GAM', 'Firebase', 'Flutter', 'OpenGL', 'Git'] },
]

export const education = {
  degree: 'Applied Computer Science',
  school: 'University of South Carolina Aiken',
  date: 'May 2026',
  honors: [
    'Full-ride scholarship',
    'Dean’s List & President’s List',
    'Published research paper (CCSC)',
    'Multiple research grants',
    'Led a USCA Cyber Pacers team in CTF competition',
  ],
}
