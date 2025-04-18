export interface Profile {
  name: string;
  title: string;
  email: string;
  location: string;
  bio: string;
  image: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    researchGate?: string;
    scholar?: string;
    [key: string]: string | undefined;
  };
  education: {
    degree: string;
    department: string;
    departmentUrl: string;
    institution: string;
    institutionUrl: string;
    year: string;
  }[];
  skills: string[];
  about: string;
  interests: string[];
  relatedWebsite: {
    title: string;
    url: string;
  };
  lab: {
    name: string;
    fullName: string;
    url: string;
    advisor: string;
  };
}

export const profileData: Profile = {
  name: "Gyuna Kim",
  title: "Digital Health and HCI Researcher",
  email: "gyuna.kim@kaist.ac.kr",
  location: "Daejeon, Republic of Korea",
  bio: "Researching signals (wearable, speech, PPG) for digital health and mental well-being | M.S. student @ KAIST ICLab",
  image: "/images/profile.jpg",
  socialLinks: {
    github: "https://github.com/gn0219",
    linkedin: "https://www.linkedin.com/in/gyuna/",
    scholar: "https://scholar.google.com/citations?user=YOUR_ID"
  },
  education: [
    {
      degree: "M.S.",
      department: "Graduate School of Data Science",
      departmentUrl: "https://gsds.kaist.ac.kr/",
      institution: "KAIST",
      institutionUrl: "https://www.kaist.ac.kr/",
      year: "2024 - Present"
    },
    {
      degree: "B.S.",
      department: "Industrial Engineering",
      departmentUrl: "https://ie.unist.ac.kr/",
      institution: "UNIST",
      institutionUrl: "https://www.unist.ac.kr/",
      year: "2020 - 2024"
    }
  ],
  skills: [
    "Human-Computer Interaction",
    "Multimodal Data Analysis",
    "Machine Learning/Deep Learning",
    "Digital Phenotyping",
    "Signal Processing",
    "Visual Analytics"
  ],
  about: `My research touches on various aspects of digital health, from modeling human states using multimodal data to enhancing physiological signal quality and designing evaluative tools. While the specific topics vary, they all share a common goal: leveraging everyday data and technologies to promote better health outcomes.

Ultimately, I hope to contribute to systems that make digital health support more effective, interpretable, and responsive across different contexts
`,
  interests: [
    "User Modeling",
    "Multimodal Interaction",
    "Sensor Fusion",
    "Human-Computer Interaction"
  ],
  relatedWebsite: {
    title: "ICLab in KAIST",
    url: "https://kaist-iclab.github.io"
  },
  lab: {
    name: "KAIST ICLab",
    fullName: "KAIST Interactive Computing Laboratory",
    url: "https://ic.kaist.ac.kr/",
    advisor: "Prof. Uichin Lee"
  }
}; 