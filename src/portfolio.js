/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Jayakumar",
  title: "Hi all, I'm Jayakumar",
  subTitle: emoji(
    "Your not-so-average Cloud and DevOps wizard. When I'm not busy moving mountains (or at least, data) to the cloud, I'm tinkering away with on-premise setups because someone has to keep those ancient relics running, right?."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1k6Ism2Z9vE8LNYOJxH6Jybbwlhqx0aAe/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/in/jayakumar-jay",
  gmail: "jai9176288@gmail.com",
  gitlab: "https://gitlab.com/",
  facebook: "https://www.facebook.com/",
  medium: "https://medium.com/",
  stackoverflow: "https://stackoverflow.com/users/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Breaking Something Always🙂🙂🙂🙂",
  skills: [
    emoji(
      "⚡ Cloud Solutions: Transforming your digital nightmares into seamless, scalable solutions. Because, why not have your head in the clouds?."
    ),
    emoji("⚡ DevOps Magic: Automating the boring stuff so you can focus on what truly matters – like choosing the perfect GIF for your next code review."),
    emoji(
      "⚡ On-Premise Sorcery: Keeping those on-prem systems alive and kicking. Think of it as CPR for your server room."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Windows",
      fontAwesomeClassname: "fab fa-windows"
    },
    {
      skillName: "Gitlab",
      fontAwesomeClassname: "fab fa-gitlab"
    },
    {
      skillName: "Cloud",
      fontAwesomeClassname: "fa fa-cloud"
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "Sql-Database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },

    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Guru Nanak College",
      logo: require("./assets/images/gnc-logo.png"),
      subHeader: "Bachlor of Science in Information Technology",
      duration: "June 2019 - April 2022",
      desc: "I continued my involvement in student affairs by assuming the role of a student coordinator, where I actively contributed to academic and extracurricular activities..",
      descBullets: [
        "Concurrently, I served as a proud member of G-IT Hub, a club dedicated to nurturing innovative ideas and conducting workshops to facilitate students' practical learning experiences.",
        "Furthermore, I took the initiative to conduct and lead various sessions related to Cloud and DevOps, contributing to the knowledge-sharing culture within the academic community. And also developed an web application for the admission related queries using Alan Ai."
      ]
    },
   {
      schoolName: "Atlantic Technological University",
      logo: require("./assets/images/atu.webp"),
      subHeader: "Masters of Science in Computing DevOps",
      duration: "September 2024 - September 2025",
      desc: "Currently pursuing a Master’s in DevOps, focusing on advanced methodologies for continuous integration and delivery (CI/CD), cloud infrastructure management, automation, and agile practices.",
      descBullets: [
        "My coursework includes exploring tools like Jenkins, Docker, Kubernetes, and cloud platforms such as AWS and Azure to drive operational efficiency and streamline deployment workflows.",
        "Through hands-on projects, I am gaining expertise in managing DevOps pipelines, automating infrastructure provisioning, and ensuring scalability and security in application delivery. This program is equipping me with the skills to bridge the gap between development and operations, fostering seamless collaboration and driving innovation in enterprise environments."
      ]
    }
    
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Cloud Architecture", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "System Design",
      progressPercentage: "70%"
    },
    {
      Stack: "Cloud-Native",
      progressPercentage: "60%"
    },
    {
      Stack: "Containerization",
      progressPercentage: "70%"
    },
    {
      Stack: "Infrastructure as Code",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Technical Support Engineer",
      company: "Zoho Corporation",
      companylogo: require("./assets/images/zoho (3).png"),
      date: "May 2024 – July 2024",
      desc: "Provide expert-level support for Active Directory, including user management, group policies, and authentication issues.",
      descBullets: [
        "Manage and troubleshoot Exchange Server environments, addressing mail flow problems, mailbox issues, and server performance.",

        "Offer specialized support for Azure Cloud services, including VM deployment, resource management, and connectivity issues.",

        "Diagnose and resolve hardware, software, and network issues across various platforms and devices.",

        "Maintain and administer Windows Server environments, ensuring optimal performance and security.",
        
        "Assist end-users with technical issues, providing clear and effective solutions and guidance.",
      ]
    },
    {
      role: "Data Analyst",
      company: "NielsenIQ",
      companylogo: require("./assets/images/Nielseniq-new-logo.png"),
      date: "October 2022 – April 2024",
      desc: "Worked as part of the Output Validation Team, performing various validations using Python scripts and finalizing end deliverables for clients.",
      descBullets: [
      "As a Data Analyst at NielsenIQ, I played a pivotal role in ensuring the accuracy and integrity of market research data used by global clients. I worked with millions of records sourced from major retail giants like Walmart, Costco, Lidl, and Aldi, validating data for accuracy and ensuring it met stringent quality standards. Utilizing Python and SQL in Jupyter Notebooks, I executed complex data transformations and queries, contributing to a 99% data accuracy rate in all reports.",

      "In addition to my daily data validation tasks, I led a team of 6 members in managing Omni Sales reports, integrating offline and online data. I was responsible for migrating 1TB+ of data from Presto on-premises servers to Azure Cloud, improving data processing speeds and scalability. This migration was completed within a 3-months period and involved rigorous performance testing and load balancing to ensure 99.9% uptime and optimal performance.",

      "I collaborated closely with stakeholders across multiple departments, providing updates on data progress, resolving issues, and ensuring SLA compliance for data delivery and report accuracy. My efforts in automating data validation workflows using Python and SQL resulted in a 30% reduction in manual effort and a 20% faster report delivery time. These improvements led to enhanced decision-making for clients and more efficient resource utilization across the team.",
      ]
    },
    /*{
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }*/
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AWS - Solutions Architect Associate",
      subtitle:
        "The AWS Certified Solutions Architect – Associate certification validates the ability to design and deploy well-architected solutions on the AWS platform that are scalable, secure, and cost-effective..",
      image: require("./assets/images/Amazon_Web_Services-Logo.wine.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/3b62908a-85e7-45d4-80c6-d8b4a9dd369a/linked_in_profile"
        },
      ]
    },
    {
      title: "CKA:Certified Kubernetes Administrator",
      subtitle:
        "The Certified Kubernetes Administrator (CKA) certification validates the ability to design, deploy, manage, and troubleshoot Kubernetes clusters. It ensures proficiency in core Kubernetes concepts, including cluster architecture, networking, security, scheduling, and storage, making candidates well-equipped to manage production environments efficiently.",
      image: require("./assets/images/kubernetes.512x499.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/cdfc0d69-ed63-4a92-908b-ad821823e705/linked_in_profile"
        },
      ]
    },
    {
      title: "HashiCorp Certified : Terraform Associate",
      subtitle:
        "The HashiCorp Certified: Terraform Associate certification validates the ability to use Terraform for infrastructure as code (IaC), covering fundamental concepts such as writing and managing Terraform configurations, understanding state management, working with modules, and implementing best practices for deploying scalable, secure, and efficient cloud infrastructure.",
      image: require("./assets/images/HashiCorp Terraform.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/4daf326a-5f80-4652-9aaf-42f52db8ec11/linked_in_profile"
        },
      ]
    },
    {
      title: "Azure Fundamentals - AZ900",
      subtitle:
        "Started my first certification in Microsoft Azure.",
      image: require("./assets/images/Azure-Logo-Transparent.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://learn.microsoft.com/en-in/users/jayakumars-2226/credentials/b3d3daa8863d1e5c?ref=https%3A%2F%2Fwww.linkedin.com%2F"
        },
      ]
    },
    {
      title: "GitOps Fundamentals",
      subtitle:
        "Demonstrated proficiency in GitOps principles and practices with Argo CD and Argo Rollouts..",
      image: require("./assets/images/argocd.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/07cb1906-8f89-44c3-9201-89f2ee4ed05d/public_url"
        }
      ]
    },

    {
      title: "Most Valuable Team - NielsenIQ",
      subtitle: "We have been awarded as the most valuable team for the Q1 2024",
      image: require("./assets/images/Nielseniq-new-logo.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Award", url: "https://www.linkedin.com/posts/jayakumar-jay_niq-nielseniq-awards-activity-7141045709516025856-EiTa?utm_source=share&utm_medium=member_desktop"}
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.cloudyjay.com/blog/kubernetes-blog/",
      title: "Kubernetes Architecture",
      description:
        "Let's break down its architecture:"
    },
    {
      url: "https://blog.cloudyjay.com/blog/vm-vs-docker/",
      title: "Virtual Machines vs Containers Which One to Choose? 🤔",
      description:
        "Difference between VM and Containers"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Just want to say hi? My Inbox is open for all.",
  number: "+351 899453792",
  email_address: "jai9176288@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
