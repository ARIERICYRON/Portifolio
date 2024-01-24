/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Cyron's Portfolio",
  description:
    "Dynamic fullstack Developer with 2 years of web development. Skilled at developing complex solutions, possessing strong creative thinking skills, and high integrity. I am dedicated to constantly improving tools and infrastructure to maximise productivity, minimize system downtime and quickly resposnd to the changing needs of business. A fast learner, self motivated, and dependable individual",
  og: {
    title: "Cyron Arieri Portfolio",
    type: "website",
    url: "http://ariericyron.com",
  },
};

//Home Page
const greeting = {
  title: "Cyron Arieri",
  logo_name: "CyronArieri",
  nickname: "Babu",
  subTitle:
    "Fullstack Developer with more than two year of Fullstack application development. I have extensive experience working with Javascript, React, Ruby, Ruby on Rails, redux, typescript and Digital Marketing. Dynamic Software Developer skilled at developing complex solutions, possessing strong creative thinking skills , and high integrity. I am dedicated to constantly improving tools and infrastructure to maximize productivity, minimize system downtime, and quicly respond to the changing needs of the business. A fast Learner, self motivated, and dependabe individual",

  resumeLink:
    "https://drive.google.com/file/d/1qbqzL7zQ0jcLDuUgv-jiw0nYVWy77ThN/view?usp=drive_link",
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
    link: "mailto:ariericyron@gmail.com",
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
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing web applications using reactJs, Ruby on Rails and Ruby",
        "⚡ Creating application backend in Ruby, Ruby on Rails & PostgreSQL",
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
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
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
        "⚡ Customizing logo designs and building logos from scratch",
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
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
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
        "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
        "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
        "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
      ],
      website_link: "https://moringaschool.com/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Software Development",
      subtitle: "- Andrew Ng",
      logo_path: "moringa.png",
      certificate_link:
        "https://drive.google.com/file/d/1mrrdkO4Wn_e9HmxyzGMwmt4tm3fFKfdN/view?usp=sharing",
      alt_name: "Moringa School",
      color_code: "#8C151599",
    },
    {
      title: "Intro to Cybersecurity",
      subtitle: "- Andrew Ng",
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
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link: "",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link: "",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link: "",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link: "",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
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
          company: "FaRu Health",
          company_url: "https://faru.health/",
          logo_path: "FaRu.png",
          duration: "Dec 2021 - Sep 2023",
          location: "Nairobi, Kenya",
          description:
            "A Digital Healthcare Platform for rapid medical care provision, designed to manage and automate all aspects of medical provision and medical service providers on a single platform.",
          color: "#0879bf",
        },
        {
          title: "FullStack Developer",
          company: "FaRu Health",
          company_url: "https://faru.health/",
          logo_path: "FaRu.png",
          duration: "Dec 2021 - Sep 2023",
          location: "Nairobi, Kenya",
          description:
            "A Digital Healthcare Platform for rapid medical care provision, designed to manage and automate all aspects of medical provision and medical service providers on a single platform.",
          color: "#9b1578",
        },
        {
          title: "FullStack Developer",
          company: "FaRu Health",
          company_url: "https://faru.health/",
          logo_path: "FaRu.png",
          duration: "Dec 2021 - Dec 2023",
          location: "Nairobi, Kenya",
          description:
            "A Digital Healthcare Platform for rapid medical care provision, designed to manage and automate all aspects of medical provision and medical service providers on a single platform.",
          color: "#fc1f20",
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
        {
          title: "FullStack Developer Intern",
          company: "FaRu Health",
          company_url: "https://faru.health/",
          logo_path: "FaRu.png",
          duration: "Dec 2021 - Sept 2023",
          location: "Nairobi, Kenya",
          description:
            "A Digital Healthcare Platform for rapid medical care provision, designed to manage and automate all aspects of medical provision and medical service providers on a single platform.",
          color: "#ee3c26",
        },
        {
          title: "Fullstack Developer Intern",
          company: "FaRu Health",
          company_url: "https://faru.health/",
          logo_path: "FaRu.png",
          duration: "Dec 2021 - Sep 2023",
          location: "Work From Home",
          description:
            "A Digital Healthcare Platform for rapid medical care provision, designed to manage and automate all aspects of medical provision and medical service providers on a single platform.",
          color: "#0071C5",
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
        {
          title: "Volunteer Fullstack Developer",
          company: "FaRu Health",
          company_url: "https://faru.health/",
          logo_path: "FaRu.png",
          duration: "Dec 2021 - Sep 2023",
          location: "Nairobi, Kenya",
          description:
            "A Digital Healthcare Platform for rapid medical care provision, designed to manage and automate all aspects of medical provision and medical service providers on a single platform.",
          color: "#D83B01",
        },
        {
          title: "Volunteer Fullstack Developer",
          company: "FaRu Health",
          company_url: "https://faru.health/",
          logo_path: "FaRu.png",
          duration: "Dec 2021 - Sep 2023",
          location: "Nairobi, Kenya",
          description:
            "A Digital Healthcare Platform for rapid medical care provision, designed to manage and automate all aspects of medical provision and medical service providers on a single platform.",
          color: "#000000",
        },
        {
          title: "Volunteer Fullstack Developer",
          company: "FaRu Health",
          company_url: "https://faru.health/",
          logo_path: "FaRu.png",
          duration: "Dec 2021 - May 2023",
          location: "Nairobi, Kenya",
          description:
            "A Digital Healthcare Platform for rapid medical care provision, designed to manage and automate all aspects of medical provision and medical service providers on a single platform.",
          color: "#0C9D58",
        },
        {
          title: "Volunteer Fullstack Developer",
          company: "FaRu Health",
          company_url: "https://faru.health/",
          logo_path: "FaRu.png",
          duration: "Dec 2021 - Sep 2023",
          location: "Nairobi, Kenya",
          description:
            "A Digital Healthcare Platform for rapid medical care provision, designed to manage and automate all aspects of medical provision and medical service providers on a single platform.",
          color: "#181717",
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
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
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
