import { InstagramFilled, LinkedinFilled, MessageFilled, TwitterCircleFilled } from "@ant-design/icons";
import { bootstrap, css, figma, firebase, git, github, html, javascript, mongodb, nextauth, nextjs, reactjs, redux, tailwind, typescript } from "../assets"
import { BsFiletypeCss, BsFiletypeHtml, BsFiletypeJava } from "react-icons/bs";
import { FaGitAlt, FaReact } from "react-icons/fa6";
import { RiBootstrapLine, RiFirebaseLine, RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { FaFigma, FaGithub } from "react-icons/fa";
import { TbBrandMongodb, TbBrandTypescript } from "react-icons/tb";
import { SiNextdns } from "react-icons/si";

const navLinks = [
    {
        id: 1,
        name: "Home",
        url: "/#hero"
    },
    {
        id: 2,
        name: "About Me",
        url: "/#aboutme"
    },
    {
        id: 3,
        name: "Projects",
        url: "/#projects"
    },
    {
        id: 4,
        name: "Experience",
        url: "/#experience"
    },
    {
        id: 5,
        name: "Skills",
        url: "/#skills"
    },

]

const aboutMe = {
    "title": "About Me",
    "desc": "Hi there! I'm HEMANTH BABU S, a passionate and dedicated front-end developer with a keen eye for detail and a love for creating beautiful, responsive, and user-friendly websites. With 1.6 years of experience in the industry, I have honed my skills in HTML, CSS, JavaScript, React JS, Next JS and various front-end frameworks to deliver high-quality web applications."
}

const projects = [
    {
        id: 1,
        title: "Radiant Ways",
        desc: "Radiant Ways is your go-to platform for comprehensive digital solutions, tailored to meet all your professional needs across diverse sectors, including IT, finance, agriculture, and education",
        techStack: [
            {
                name: "Next.Js(14)",
                color: "blue-text-gradient",
            },
            {
                name: "Tailwind CSS & Antd",
                color: "green-text-gradient",
            },
            {
                name: "TypeScript",
                color: "orange-text-gradient",
            },
            {
                name: "Firebase",
                color: "violet-text-gradient",
            },
            {
                name: "Redux Toolkit",
                color: "pink-text-gradient",
            },
            {
                name: "Next Auth",
                color: "blue-text-gradient",
            },
        ],
        demoLink: "https://radiantways.in",
        image: "/projects/radiantways.png",
        isRadiantWays: true
    },
    {
        id: 2,
        title: "Radiant Ways Blogs",
        desc: "Welcome to Radiant Ways Blogs, where passion meets purpose. Explore a world of travel, culinary delights, tech insights, fashion, lifestyle tips, fitness routines, personal development, and parenting wisdom—all crafted to inspire and elevate your everyday life",
        techStack: [
            {
                name: "Next.Js(14)",
                color: "orange-text-gradient",
            },
            {
                name: "Tailwind CSS & Antd",
                color: "green-text-gradient",
            },
            {
                name: "Typescript",
                color: "pink-text-gradient",
            },
            {
                name: "Sanity.io",
                color: "violet-text-gradient",
            },
        ],
        demoLink: "https://radiantways.in/blogs",
        image: "/projects/radiantwaysBlogs.png"

    },
    {
        id: 3,
        title: "Personal Portfolio",
        desc: "A dynamic personal portfolio showcasing my skills, experiences, and projects. Explore my journey, achievements, and the expertise I bring to the table, all designed to make a lasting impact",
        techStack: [
            {
                name: "Next.Js(14)",
                color: "blue-text-gradient",
            },
            {
                name: "Tailwind CSS",
                color: "green-text-gradient",
            },
            {
                name: "Antd",
                color: "pink-text-gradient",
            },
            {
                name: "TypeScript",
                color: "violet-text-gradient",
            },
        ],
        demoLink: "https://hemanth.radiantways.in",
        image: "/projects/developerPortfolio.png"
    }
]

const professionalProjects = [
    {
        id: 4,
        title: "PrepAce",
        desc: "Get ready for your interviews with our AI-powered mock interview app! Practice industry-specific questions, receive instant feedback, and track your progress. Boost your confidence and ace your next interview!",
        techStack: [
            {
                name: "Next.Js(14)",
                color: "blue-text-gradient",
            },
            {
                name: "Tailwind CSS & Antd",
                color: "green-text-gradient",
            },
            {
                name: "TypeScript",
                color: "orange-text-gradient",
            },
            {
                name: "Redux Toolkit & Next Auth",
                color: "pink-text-gradient",
            },
            {
                name: "Generative AI",
                color: "blue-text-gradient",
            },
        ],
        demoLink: "https://app.eazycoding.com/",
        image: "/projects/professional/prepace.png",

    },
    {
        id: 3,
        title: "AnyUni",
        desc: "Discover your ideal university with our AI-Powered course finding tool!",
        techStack: [
            {
                name: "Next.Js(14)",
                color: "blue-text-gradient",
            },
            {
                name: "Tailwind CSS & Antd",
                color: "green-text-gradient",
            },
            {
                name: "Aceternity UI",
                color: "orange-text-gradient",
            },
            {
                name: "Redux Toolkit",
                color: "pink-text-gradient",
            },
            {
                name: "Next Auth",
                color: "blue-text-gradient",
            },
        ],
        demoLink: "https://www.anyuni.io/",
        image: "/projects/professional/anyuni.png",

    },
    {
        id: 2,
        title: "EazyCoding",
        desc: "Unlock your coding potential with our comprehensive platform! Explore tutorials, coding challenges, and collaborative projects designed for all skill levels. Join a vibrant community of developers, share your knowledge, and enhance your skills with hands-on practice. Start coding today!",
        techStack: [
            {
                name: "Next.Js(14)",
                color: "orange-text-gradient",
            },
            {
                name: "Tailwind CSS & Antd",
                color: "green-text-gradient",
            },
            {
                name: "Typescript",
                color: "pink-text-gradient",
            },
            {
                name: "Strapi",
                color: "violet-text-gradient",
            },
        ],
        demoLink: "https://www.eazycoding.com/",
        image: "/projects/professional/eazyCoding.png",
        isRadiantWays: true

    },
    {
        id: 1,
        title: "Bytup",
        desc: "Create high-performance websites that captivate users with stunning designs and lightning-fast speeds. Our expertise ensures a seamless blend of aesthetics and functionality, enhancing user experience. Elevate your online presence and engage your audience like never before!",
        techStack: [
            {
                name: "Next.Js(14)",
                color: "blue-text-gradient",
            },
            {
                name: "Tailwind CSS",
                color: "green-text-gradient",
            },
            {
                name: "Antd",
                color: "pink-text-gradient",
            },
            {
                name: "Aceternity UI",
                color: "violet-text-gradient",
            },
        ],
        demoLink: "https://www.bytup.in/",
        image: "/projects/professional/bytup.png"
    }
]

const experiences = [
    {
        id: 2,
        title: "Front-end Developer",
        desc: "As a full-time Front-end Developer at BytUp Technologies, I led the development of web applications using React.js, Next.js, Redux, and TypeScript. I managed a team of junior developers, ensuring high-quality, scalable code. My role included collaborating with UI/UX designers, optimizing performance, and working with cross-functional teams to deliver responsive, client-focused solutions.",
        company_name: "BytUp Technologies Pvt Ltd",
        date: "July 2023 - Present",
        points: [
            {
                title: "Front-end Developer",
                text: "Led the front-end development of complex web applications, focusing on building scalable and maintainable codebases using React.js, Next.js, Redux, and TypeScript."
            },
            {
                title: "Team Leadership",
                text: "Managed and mentored a team of junior developers, providing guidance on best practices, code quality, and project management to ensure timely and successful project delivery."
            },
            {
                title: "UI/UX Collaboration",
                text: "Collaborated closely with UI/UX designers to transform wireframes and prototypes into polished, responsive web interfaces that align with business goals and user needs."
            },
            {
                title: "Performance Optimization",
                text: "Implemented performance optimization techniques, including code splitting, lazy loading, and caching strategies, resulting in improved application load times and user experience."
            },
            {
                title: "Cross-functional Collaboration",
                text: "Worked with cross-functional teams, including back-end developers, product managers, and QA engineers, to ensure seamless integration of front-end components with back-end systems."
            },
            {
                title: "Continuous Learning & Innovation",
                text: "Stayed ahead of industry trends by learning and adopting new technologies and frameworks, contributing to the company’s technical growth and innovation."
            },
            {
                title: "Client Communication",
                text: "Regularly communicated with clients to gather requirements, provide updates, and deliver high-quality, client-focused web solutions that meet or exceed expectations."
            }
        ],
        status: "present"
    },
    {
        id: 1,
        title: "Front-end Developer (Intern)",
        desc: "My journey into web development was sparked by a deep curiosity about how websites function and a passion for crafting digital experiences that are both functional and visually appealing. During my internship at BytUp Technologies, I had the opportunity to contribute to a diverse range of projects, from small business websites to complex, large-scale web applications. Each project presented unique challenges and provided invaluable learning experiences that helped me grow as a developer.",
        company_name: "BytUp Technologies Pvt Ltd",
        date: "January 2023 - June 2023",
        points: [
            {
                title: "Web Application Development",
                text: "Utilized React.js and related front-end technologies to build and enhance web applications, focusing on delivering high-quality user experiences."
            },
            {
                title: "Responsive Design Implementation",
                text: "Ensured that all web applications were responsive and provided a seamless user experience across various devices and screen sizes."
            },
            {
                title: "Cross-Browser Compatibility",
                text: "Worked on ensuring that web applications functioned consistently across different browsers, resolving any compatibility issues."
            },
            {
                title: "Code Reviews",
                text: "Actively participated in code reviews, both giving and receiving constructive feedback to ensure code quality, maintainability, and adherence to best practices."
            },
            {
                title: "Collaboration",
                text: "Worked closely with the design and back-end development teams to implement UI/UX designs and integrate front-end features with back-end services."
            },
            {
                title: "Learning & Development",
                text: "Continuously learned new technologies and frameworks, staying up-to-date with the latest trends in front-end development to bring innovative solutions to the projects I worked on."
            }
        ],
        status: "past"
    },
];

const skills = [
    {
        id: 1,
        name: "HTML & HTML5",
        icon: html,
        percentage: 95,
        resumeIcon: <BsFiletypeHtml />
    },
    {
        id: 2,
        name: "CSS",
        icon: css,
        percentage: 80,
        resumeIcon: <BsFiletypeCss />
    },
    {
        id: 3,
        name: "JavaScript",
        icon: javascript,
        percentage: 75,
        resumeIcon: <BsFiletypeJava />
    },
    {
        id: 4,
        name: "React JS",
        icon: reactjs,
        percentage: 75,
        resumeIcon: <FaReact />
    },
    {
        id: 5,
        name: "Next JS",
        icon: nextjs,
        percentage: 75,
        resumeIcon: <RiNextjsLine />
    },
    {
        id: 6,
        name: "Redux",
        icon: redux,
        percentage: 75,
        resumeIcon: <SiRedux />
    },
    {
        id: 7,
        name: "Tailwind CSS",
        icon: tailwind,
        percentage: 95,
        resumeIcon: <RiTailwindCssFill />
    },
    {
        id: 8,
        name: "BootStrap",
        icon: bootstrap,
        percentage: 95,
        resumeIcon: <RiBootstrapLine />
    },
    {
        id: 9,
        name: "Git",
        icon: git,
        percentage: 80,
        resumeIcon: <FaGitAlt />
    },
    {
        id: 10,
        name: "Git Hub",
        icon: github,
        percentage: 80,
        resumeIcon: <FaGithub />
    },
    {
        id: 11,
        name: "TypeScript",
        icon: typescript,
        percentage: 45,
        resumeIcon: <TbBrandTypescript />
    },
    {
        id: 12,
        name: "Mongo DB",
        icon: mongodb,
        percentage: 50,
        resumeIcon: <TbBrandMongodb />
    },
    {
        id: 13,
        name: 'Firebase',
        icon: firebase,
        percentage: 25,
        resumeIcon: <RiFirebaseLine />
    },
    {
        id: 14,
        name: "Figma",
        icon: figma,
        percentage: 80,
        resumeIcon: <FaFigma />
    },
    {
        id: 15,
        name: "Next Auth",
        icon: nextauth,
        percentage: 50,
        resumeIcon: <SiNextdns />
    },

]

const socialIcons = [
    {
        title: "Linked In",
        url: "https://www.linkedin.com/in/hemanthbabu648/",
        icon: <LinkedinFilled />
    },
    {
        title: "Instagram",
        url: "https://www.instagram.com/hemanthbabu648/",
        icon: <InstagramFilled />
    },
    {
        title: "Twitter",
        url: "https://twitter.com/hemanthbabu648",
        icon: <TwitterCircleFilled />
    },
    {
        title: "Telegram",
        url: "https://t.me/fsdhemanth648",
        icon: <MessageFilled />
    }
]

export { navLinks, aboutMe, projects, experiences, skills, socialIcons, professionalProjects }
