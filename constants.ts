import { Award, BlogPost, Experience, Project, SocialLink } from "./types";

export const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Awards", href: "#awards" },
  { name: "Blog", href: "#blog" },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "1",
    role: "Undergraduate Researcher (HRI)",
    company: "Imperial College London",
    period: "Summer 2023",
    description: "Developed a multi-modal robot tutor using CNN, YOLO, MediaPipe, and LLMs. Successfully boosted accuracy and speed for real-time interactions, enhancing the learning experience.",
    technologies: ["Python", "PyTorch", "YOLO", "MediaPipe", "LLMs"],
  },
  {
    id: "2",
    role: "Undergraduate Researcher (Option Pricing)",
    company: "Imperial College London",
    period: "Summer 2022",
    description: "Conducted comparative analysis of ML models versus traditional pricing methods. Cleaned 20 years of financial data, improved prediction time, and significantly reduced error rates.",
    technologies: ["Python", "Data Analysis", "ML Models", "Finance"],
  },
  {
    id: "3",
    role: "Engineering Intern",
    company: "Goldman Sachs",
    period: "Spring 2021",
    description: "Built a neural-network-based hedging model for natural gas futures. Integrated complex weather and market data to predict prices. Won 1st place among 6 intern teams.",
    technologies: ["Python", "Neural Networks", "Financial Modeling"],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "GlassBox Labs: Agent Observability",
    description: "Winner of 'Brave Soldier' Award at UCLxHolisticAI. An observability tool that turns raw AI agent logs into transparent, human-understandable interactive graphs. Features end-to-end trajectory capture and a three-panel workspace for deep trace interrogation.",
    imageUrl: "https://picsum.photos/600/400?random=10",
    tags: ["Multi-Agent Systems", "LLM Debugging", "Visualization", "React"],
    links: [
      { type: "external", url: "https://devpost.com/software/agent-glassbox#updates", label: "Devpost" }
    ],
  },
  {
    id: "2",
    title: "Sign2Speak",
    description: "2nd Place at ElevenLabs × LFH Hackathon. A system translating sign language into speech using a Gemini-powered vision pipeline and AR overlay. Enables seamless bidirectional conversation on smart glasses.",
    imageUrl: "/assets/sign2speak.png",
    tags: ["Computer Vision", "AR", "FastAPI", "VoiceAI", "Gemini"],
    links: [
      { type: "youtube", url: "http://www.youtube.com/watch?v=3xIiecQodXA" },
      { type: "demo", url: "https://beamish-frangollo-b72e80.netlify.app" }
    ],
  },
  {
    id: "3",
    title: "BlockChain Coder",
    description: "A novel multi-agent framework (Planner, Optimizer, Debugger) that guides LLMs to solve complex coding challenges. Enabled smaller models to rival GPT-4 performance on unseen LeetCode problems.",
    imageUrl: "/assets/BlockChain Coder.png",
    tags: ["LangChain", "Multi-Agent", "Code Generation", "LLMs"],
    links: [
      { type: "pdf", url: "/assets/BlockChain Coder.pdf", label: "Paper" }
    ],
  },
  {
    id: "4",
    title: "Predator-Prey MARL",
    description: "Explored complex behaviors in a simulated ecosystem using Multi-Agent Reinforcement Learning. Implemented reward-shaping techniques to foster cooperation and ensemble methods for robustness.",
    imageUrl: "https://picsum.photos/600/400?random=13",
    tags: ["Reinforcement Learning", "MADDPG", "PyTorch", "Simulation"],
    links: [
      { type: "github", url: "https://github.com/Julie3399/MARL_Predator_Prey" }
    ],
  },
  {
    id: "5",
    title: "Real-time Robot Tutor",
    description: "Multi-person robot tutoring system combining vision, audio, and LLM modules. Used Bayesian Knowledge Tracing to personalize learning experiences in real-time.",
    imageUrl: "https://picsum.photos/600/400?random=14",
    tags: ["Robotics", "Bayesian Modeling", "HRI", "Python"],
    links: [
      { type: "github", url: "https://github.com/Julie3399/UROP2023" }
    ],
  },
  {
    id: "6",
    title: "ML for Option Pricing",
    description: "Improved prediction accuracy and speed for financial derivative pricing using Mixture Density Networks (MDN) and Bayesian Neural Networks (BNN).",
    imageUrl: "https://picsum.photos/600/400?random=15",
    tags: ["Deep Learning", "Finance", "BNN", "MDN"],
    links: [],
  },
];

export const AWARDS: Award[] = [
  {
    id: "1",
    title: "'Brave Soldier' Award",
    organization: "UCL x HolisticAI: Great Agent Hack 2025",
    date: "2025",
    description: "Awarded for GlassBox Labs, a tool providing transparent AI agent debugging and observability.",
  },
  {
    id: "2",
    title: "2nd Place Winner",
    organization: "ElevenLabs × LFH Hackathon",
    date: "2024",
    description: "Recognized for Sign2Speak, an AI-powered sign language translation system with AR integration.",
  },
  {
    id: "3",
    title: "1st Place Team",
    organization: "Goldman Sachs Engineering Intern Hackathon",
    date: "Spring 2021",
    description: "Awarded for developing the best neural-network-based hedging model for natural gas futures.",
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "Deconstructing Multi-Agent Systems",
    summary: "How delegating specific roles (Planner, Debugger) significantly improves LLM performance on complex logical tasks.",
    date: "March 2024",
    readTime: "6 min read",
    category: "AI Research",
    link: "#",
  },
  {
    id: "2",
    title: "Bayesian Knowledge Tracing in Robotics",
    summary: "Implementing real-time personalization for robot tutors using probabilistic modeling.",
    date: "Feb 2024",
    readTime: "8 min read",
    category: "Robotics",
    link: "#",
  },
  {
    id: "3",
    title: "The Future of Agent Observability",
    summary: "Why we need better tools to visualize the 'thought process' of autonomous AI agents.",
    date: "Jan 2024",
    readTime: "5 min read",
    category: "Opinion",
    link: "#",
  },
];

export const SOCIALS: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/Julie3399", iconName: "Github" },
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/zhiqi-huang/", iconName: "Linkedin" },
  { platform: "Email", url: "mailto:hello@juliehuang.com", iconName: "Mail" },
];