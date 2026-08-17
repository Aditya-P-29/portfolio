export const technologies = [
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "HTML5",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Java",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },

  {
    name: "React.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    logo: "https://img.icons8.com/nolan/64/express-js.png",
  },
  {
    name: "Tailwind CSS",
    logo: "https://img.icons8.com/color/96/tailwindcss.png",
  },

  {
    name: "AWS",
    logo: "https://img.icons8.com/nolan/64/amazon-web-services.png",
  },
  {
    name: "Docker",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  { name: "CI/CD", logo: "https://img.icons8.com/fluency/48/infinity.png" },

  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },

  { name: "SQL", logo: "https://img.icons8.com/fluency/48/sql.png" },

  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    logo: "https://img.icons8.com/fluency-systems-filled/48/github.png",
  },
];

export const testimonials = [
  {
    name: "Prashant June",
    role: "Owner",
    image: "/testimonial.png",
    content:
      "Aditya built a web app for my local business in Patna, Bihar. I was impressed with the clean UI, smooth animations, and how budget‑friendly the solution was. We had multiple discussions during development, and I was very happy with the final product. The app has been a great success, and my business is running well thanks to it.",
  },
];

export const projects = [
  {
    title: "CodePulse, custom version control system!",
    description:
      "It's a functional VCS with a custom CLI, real developer workflow, cloud infrastructure on AWS, and a clean UI -- built by me. ",
    image: "/vcs.png",
    technologies: [
      "React.js",
      "TailwindCSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "AWS EC2",
      "AWS Amplify",
      "AWS S3",
      "AWS API Gateway",
      "AWS IAM",
      "JWT",
      "Bcrypt.js",
      "Chalk.js",
      "Yargs",
    ],
    liveUrl:
      "https://www.linkedin.com/posts/activity-7461754223416930304-pfAC?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEx7v4IBmM6PcOySRFZ1edZvChq_UMtHglY",
    githubUrl: "https://github.com/Aditya-P-29/codePulse-web-frontend",
    // "https://github.com/Aditya-P-29/codePulse-web-backend",

    features: [
      "Repo CRUD",
      "Activity Heatmap",
      "Star repos",
      "Colorfull terminal output with chalk.js",
      "Argument parsing with yargs",
    ],
  },
  {
    title: "DevGPT --my AI Chat Assitant!",
    description:
      "A full-stack AI assistant featuring real-time, word-by-word streaming using Server-Sent Events (SSE) to optimize response delivery from the OpenRouter API. Deployed on Vercel/Render as well as on EC2 ",
    image: "/devgpt.png",
    technologies: [
      "React.js",
      "MongoDB",
      "Express.js",
      "Node.js",
      "OpenRouter",
      "Github Actions",
      "EC2",
    ],
    liveUrl: "https://dev-gpt-frontend.vercel.app/",
    githubUrl: "https://github.com/Aditya-P-29/devGPT-frontend",
    // "https://github.com/Aditya-P-29/devGPT-backend",

    features: [
      "Word-by-word streaming response(SSE)",
      "JWT Authentication",
      "Persistant history",
      "Dark/light mode toggle",
      "Powered by OpenRouter API",
    ],
  },
  {
    title: "Bharat, a freelance project",
    description:
      "I successfully delivered a freelance web application for a local business in Patna, Bihar, helping them establish their digital presence and expand customer reach.",
    image: "/testimonial.png",
    technologies: ["Next.js", "TailwindCSS", "FormSubmit", "Framer-motion"],
    liveUrl: "https://bharatwaterbottle.vercel.app",
    githubUrl: "https://github.com/Aditya-P-29/Bharat",
    features: [
      "Business Impact",
      "Freelance",
      "Budget-friendly Solution",
      "Client Collaboration",
    ],
  },
  {
    title: "React Props Info",
    description:
      "Built and deployed a React project that explains props and Context API in a hands-on way",
    image: "/react-props.png",
    technologies: ["React.js", "TailwindCSS", "Context API"],
    liveUrl: "https://advance-props.vercel.app",
    githubUrl: "https://github.com/Aditya-P-29/AdvanceProps",
    features: [
      "Theme swicther",
      "Live click count and status update",
      "Context API",
    ],
  },
];
