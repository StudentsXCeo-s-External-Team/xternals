export type Resource = {
  slug: string;
  title: string;
  badge: string;
  category: string;
  month: string;
  audience: string;
  hero: string;
  cover: string;
  excerpt: string;
  content: string;
  highlights: string[];
};

export const RESOURCES: Resource[] = [
  {
    slug: "blog-insights",
    title: "Expert Perspectives & Industry Deep Dives",
    badge: "Blog / Insights",
    category: "Knowledge",
    month: "Weekly Update",
    audience: "Aspiring Professionals",
    hero: "/resources/leadership.jpeg",
    cover: "/resources/leadership.jpeg",
    excerpt: "Explore the latest trends in the corporate world, curated by industry leaders and our expert alumni network.",
    content: "Our blog serves as a bridge between academic theory and corporate reality. Each article is designed to provide actionable insights for students navigating the transition into high-impact careers.\n\nFrom navigating your first 90 days to mastering executive presence, we cover the topics that matter most to the next generation of CEOs. Our contributors include seasoned professionals from Top-tier consulting firms, tech giants, and successful startups.",
    highlights: ["Industry Trend Reports", "Alumni Success Stories", "Interview Strategy Guides"]
  },
  {
    slug: "leadership-toolkit",
    title: "Essential Frameworks for Modern Leaders",
    badge: "Leadership Toolkit",
    category: "Frameworks",
    month: "Monthly Release",
    audience: "Student Leaders",
    hero: "/resources/Friendship.jpeg",
    cover: "/resources/Friendship.jpeg",
    excerpt: "Practical templates, frameworks, and guides to help you lead teams and manage projects with executive-level precision.",
    content: "Leadership is a skill that is honed through the application of the right tools. Our toolkit provides the fundamental frameworks used by global executives to manage complex organizations.\n\nWhether you are leading a student organization or preparing for an internship, these resources will help you structure your thinking, manage your time, and inspire your team members toward a shared vision.",
    highlights: ["Project Management Templates", "Decision Making Frameworks", "Team Dynamics Playbook"]
  },
  {
    slug: "career-resources",
    title: "Strategizing Your Path to the C-Suite",
    badge: "Career Resources",
    category: "Development",
    month: "Quarterly Update",
    audience: "Job Seekers",
    hero: "/resources/leadership.jpeg",
    cover: "/resources/leadership.jpeg",
    excerpt: "Curated job boards, resume reviews, and mock interview sessions designed to give you a competitive edge in recruitment.",
    content: "Landing a high-impact role requires more than just a strong GPA. It requires a strategic approach to personal branding and interview performance.\n\nWe provide curated access to exclusive job opportunities and professional development workshops. Our mock interview sessions simulate real-world recruitment processes from top companies, ensuring you are prepared for every stage of the hiring journey.",
    highlights: ["Exclusive Job Board Access", "Resume Optimization Guides", "Case Interview Prep Kits"]
  }
];