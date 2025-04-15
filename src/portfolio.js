/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Cyron's Portfolio",
  description:
    "Experienced Fullstack Developer, Strong in complex solutions, creative thinking, and system optimization. Fast learner, Self motivated and reliable.",
  og: {
    title: "Cyron Arieri Portfolio",
    type: "website",
    url: "https://ariericyron.com",
  },
};

//Home Page
const greeting = {
  title: "Cyron Arieri",
  logo_name: "CyronArieri",
  nickname: "Prodigy",
  subTitle:
    "Results-driven Full-Stack Developer with 2+ of experience designing, developing, and deploying scalable web applications. Proficient in both front-end and back-end technologies. Skilled in Agile methodologies , CI / CD pipelines, and cloud platforms like AWS and GCP. Passionate about building user-centric high-performance applications and collaborating with cross-functional teams to deliver innovative solutions.",

  resumeLink:
    "https://drive.google.com/file/d/1_pmARlxA73aGg-sGq3xZdkFP2apVwjiE/view?usp=sharing",
  portfolio_repository: "https://github.com/ARIERICYRON/Portifolio",
  githubProfile: "https://github.com/ARIERICYRON",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/ARIERICYRON",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/cyron-mongare-5a12ba142/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:8ld8r39r@anonaddy.me",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/cyron.arieri/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/ariericyron/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Proficient in front-end technologies including HTML5, CSS3, JavaScript (ES6+), TypeScript, and frameworks such as React.js (with Redux and Context API). Experienced in building responsive and mobile-first interfaces using Tailwind CSS, Bootstrap, Ant Design, and Material UI. Familiar with server-side rendering and static site generation using Next.js, and modern front-end tooling like Webpack, Babel, and Vite.",
        "⚡ Skilled in back-end development with Ruby on Rails, and Django. Experienced in designing and consuming RESTful APIs, implementing MVC architecture, and managing user authentication and authorization using JWT and OAuth. Knowledgeable in real-time communication with WebSockets.",
        "⚡ Strong background in working with databases including PostgreSQL, MySQL, SQLite, MongoDB, and Redis. Experienced with ORMs such as Prisma, Sequelize, TypeORM, and ActiveRecord. Familiar with Firebase Realtime Database and Firestore for cloud-based data management.",
        "⚡ Hands-on experience with cloud platforms like AWS (EC2, S3, RDS, Lambda, CloudFront) and Google Cloud Platform. Skilled in containerization with Docker and orchestration using Kubernetes. Proficient in CI/CD pipelines using GitHub Actions, Jenkins, and CircleCI, and deploying applications with Nginx or Apache. Basic knowledge of infrastructure as code using Terraform and CloudFormation.",
        "⚡ Experienced in testing and quality assurance using Jest, Mocha, Chai, and React Testing Library, as well as end-to-end testing with Cypress and Playwright. Proficient in API testing with Postman and Swagger, and test-driven development using RSpec and Capybara for Ruby projects.",
        "⚡ Proficient in version control using Git with GitHub and GitLab, and experienced in Agile and Scrum methodologies using tools like Jira, Trello, and Notion. Comfortable collaborating with designers using Figma and Adobe XD. Knowledgeable in web accessibility standards (WCAG), web security best practices (OWASP, XSS, CSRF), and performance optimization techniques.",
        "⚡ Strong interpersonal and soft skills including problem-solving, effective communication, cross-functional collaboration, time management, and a continuous learning mindset.",
        "⚡ Passionate about building scalable and maintainable applications, and dedicated to delivering high-quality software solutions that meet user needs and business goals.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Ruby",
          fontAwesomeClassname: "simple-icons:ruby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Ruby on Rails",
          fontAwesomeClassname: "simple-icons:rails",
          style: {
            color: "#02569B",
          },
        },
        {
          title: "Digital marketing and Google Analytics",
          fileName: "DataScienceImg",
          skills: [
            "⚡ Search Engine Optimization(SEO)",
            "⚡ E-commerce",
            "⚡ Email Marketing",
            "⚡ Display Advertising",
            "⚡ Marketing",
          ],
          softwareSkills: [
            {
              skillName: "Analytics",
              fontAwesomeClassname: "fa-solid fa-chart-simple",
              style: {
                backgroundColor: "transparent",
              },
            },
            {
              skillName: "SEO",
              fontAwesomeClassname: "simple-icons:keras",
              style: {
                backgroundColor: "white",
                color: "#D00000",
              },
            },
          ],
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Designed and deployed scalable cloud-based solutions including servers, databases, networks, and applications across AWS and Azure environments.",
        "⚡ Migrated on-premise systems and legacy applications to cloud infrastructure, ensuring minimal downtime and data integrity.",
        "⚡ Automated cloud infrastructure provisioning and management using Infrastructure as Code tools such as Terraform and AWS CloudFormation.",
        "⚡ Managed and optimized cloud environments for high availability, performance, and cost-effectiveness by monitoring resource usage and applying best practices.",
        "⚡ Creating and managing Docker containers",
        "⚡ Implemented robust cloud security measures including IAM policies, encryption protocols, and network configurations to safeguard data and services.",
        "⚡ Developed and maintained CI/CD pipelines for seamless application deployment and updates using tools like Jenkins, GitHub Actions, and AWS CodePipeline.",
        "⚡ Developed CI/CD pipelines for automated deployment and testing of applications using tools like Jenkins, GitHub Actions, and AWS CodePipeline.",
        "⚡ Working with cloud storage solutions",
        "⚡ Monitored cloud systems for performance and reliability using tools like CloudWatch and Prometheus, and resolved issues through proactive troubleshooting.",
        "⚡ Collaborated cross-functionally with development, DevOps, and security teams to streamline deployments and support continuous delivery pipelines.",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Creating responsive designs using Figma",
        "⚡ Designing user-friendly interfaces for better user experience",
        "⚡ Conducting user research and usability testing",
        "⚡ Creating wireframes and prototypes",
        "⚡ Collaborating with developers to implement designs",
        "⚡ Keeping up with design trends and best practices",
        "⚡ Creating design systems and style guides",
        "⚡ Designing for accessibility and inclusivity",
        "⚡ Creating and maintaining design documentation",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Kenyatta University",
      subtitle: "BSc. in Computer Science",
      logo_path: "Kenyatta_University_Logo.png",
      alt_name: "Kenyatta University",
      duration: "2019 - 2022",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Cybersecurity Cloud Computing and Full Stack Development.",
        "⚡ I was selected for Merit Scholarship for my academic performance.",
      ],
      website_link: "https://www.ku.ac.ke/",
    },
    {
      title: "Moringa School",
      subtitle: "Software Development",
      logo_path: "moringa.png",
      alt_name: "Moringa School",
      duration: "2022 - 2022",
      descriptions: [
        "⚡ I have studied Full Stack Development and Data Science.",
        "⚡ I have done projects on Full Stack Development.",
        "⚡ During my time at the Bootcamp, i led a team of 8 students to develop a web application.",
        "⚡ I was selected for Merit Scholarship for my academic performance.",
      ],
      website_link: "https://moringaschool.com/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Software Development",
      subtitle: "- Fullstack Developer",
      logo_path: "moringa.png",
      certificate_link:
        "https://drive.google.com/file/d/1mrrdkO4Wn_e9HmxyzGMwmt4tm3fFKfdN/view?usp=sharing",
      alt_name: "Moringa School",
      color_code: "#8C151599",
    },
    {
      title: "Intro to Cybersecurity",
      subtitle: "- Skills for all",
      logo_path: "cisco_cy.png",
      certificate_link:
        "https://www.credly.com/badges/6b80752d-6277-4d6e-ab89-de8921a6b612/public_url",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "DevOps Certification",
      subtitle: "- AWS DevOps",
      logo_path: "amazon.png",
      certificate_link: "",
      alt_name: "Amazon",
      color_code: "#0C9D5899",
    },
    {
      title: "Google Analytics",
      subtitle: "- Google",
      logo_path: "google_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1CxFddjjE16Q1j6FQ2F4KS2LqViQIA3-b/view?usp=sharing",
      alt_name: "Analytics",
      color_code: "#1F70C199",
    },
    {
      title: "Digital Marketing",
      subtitle: "Google",
      logo_path: "google_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/15H4tgDw0EOcCnKUYcQueCANUZUdlg4Z6/view?usp=sharing",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "IoT",
      subtitle: "Skills",
      logo_path: "cisco_cy.png",
      certificate_link:
        "https://www.credly.com/badges/9c217107-d025-465c-9ddc-785b6d07b2c6/public_url",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Google Cloud Computing",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link: "",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },

    {
      title: "Fullstack Development",
      subtitle: "- Cantek",
      logo_path: "fullstack.png",
      certificate_link: "",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Advanced SQL for Query Tuning and Performance Optimization",
      subtitle: "- Linkedin",
      logo_path: "gcp_logo.png",
      certificate_link: "",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with FaRU Health as Fullstack Developer but mainly focusing on Backend. I also participated in the Product designing team and i would occasionally help the frontend team while utilizing Ant design, react, CSS and Typescript. As a Certified AWS DevOps, am familiar with CI/CD, testing and Deployment of applications",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "FullStack",
          company: "Vosyn",
          company_url: "https://vosyn.ai/",
          logo_path: "vosyn.png",
          duration: "Sep 2024 - April 2025",
          location: "Toronto, Canada",
          description:
            "An AI-powered plaform that offers real time transription and translation in multiple languages. It is designed to enhance communication and collaboration across language barriers.",
          color: "#0879bf",
        },
        {
          title: "FullStack",
          company: "FaRu Health",
          company_url: "https://faru.health/",
          logo_path: "FaRu.png",
          duration: "Dec 2021 - Dec 2023",
          location: "Nairobi, Kenya",
          description:
            "A Digital Healthcare Platform for rapid medical care provision, designed to manage and automate all aspects of medical provision and medical service providers on a single platform.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "FullStack Developer Intern",
          company: "FaRu Health",
          company_url: "https://faru.health/",
          logo_path: "FaRu.png",
          duration: "Dec 2021 - Aug 2023",
          location: "Nairobi, Kenya",
          description:
            "A Digital Healthcare Platform for rapid medical care provision, designed to manage and automate all aspects of medical provision and medical service providers on a single platform.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Volunteer Fullstack Developer",
          company: "FaRu",
          company_url: "https://faru.health/",
          logo_path: "FaRu.png",
          duration: "Dec 2021 - Sep 2023",
          location: "Nairobi, Kenya",
          description:
            "A Digital Healthcare Platform for rapid medical care provision, designed to manage and automate all aspects of medical provision and medical service providers on a single platform.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url: "",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url: "",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url: "",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url: "",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url: "",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "sam2.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with React, Ruby, Cloud and Fullstack Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Toronto, Canada",
    locality: "Toronto",
    country: "Canada",
    region: "Toronto",
    postalCode: "####",
    streetAddress: "Toronto",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://g.co/kgs/yiX43K5",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
