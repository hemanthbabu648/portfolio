import { experiences, skills } from "./data";

export const resumeData = {
  header: {
    fullName: "Hemanth Babu Setti",
    role: "Front-end Developer",
    desc: "Results-driven React.js and Next.js Developer with 1.8 years of practical experience in designing and developing user interfaces, along with testing, debugging, and deploying scalable web applications. Demonstrates strong proficiency in utilizing advanced skills in HTML5, CSS3, JavaScript ES6/ES7, and contemporary JS libraries/frameworks to craft responsive and intuitive UI components. Skilled in collaborating with cross-functional teams to deliver high-quality software solutions that improve user experience and align with business goals.",
  },
  projects: [
    {
      id: 3,
      title: "PrepAce",
      duration: "(04/2024 - Present)",
      points: [
        "Developed AI-driven mock interview platform, enhancing user preparedness and confidence in job interviews.",
        "Customized interview simulations tailored to specific industries, providing relevant practice scenarios for users.",
        "Implemented advanced feedback mechanisms, allowing users to receive constructive critiques on their performance.",
        "Integrated video recording features, enabling users to review their interview responses and improve delivery.",
        "Optimized user interface for intuitive navigation, improving overall user experience and satisfaction.",
        "Leveraged real-time analytics to track user progress, helping them identify strengths and areas for improvement.",
      ],
    },
    {
      id: 2,
      title: "Any UNI",
      duration: "(08/2023 - 04/2024)",
      points: [
        "Developed a comprehensive web application for exploring and applying to university courses abroad, simplifying the application process for users.",
        "Integrated dedicated mentorship programs, providing personalized guidance and support throughout the application journey.",
        "Implemented an extensive database of universities and courses, enabling users to easily search and compare options based on their preferences.",
        "Integrated application tracking features, allowing users to monitor the status of their university applications in real-time.",
        "Optimized user interface for seamless navigation, enhancing the overall user experience and engagement with the platform.",
        "Created resource-rich content, including articles and videos on studying abroad, application tips, and scholarship opportunities.",
      ],
    },
    {
      id: 1,
      title: "E-learning Platform",
      duration: "(01/2023 - 08/2023)",
      points: [
        "Developed a comprehensive e-learning platform enabling users to browse, purchase, and access a wide range of online courses.",
        "Implemented a user-friendly dashboard for personalized learning experiences, allowing users to track their progress and manage enrolled courses.",
        "Optimized course discovery through advanced search and filtering options, helping users find relevant content quickly.",
        "Created interactive course materials, including video lectures, quizzes, and assignments, enhancing user engagement and knowledge retention.",
        "Established a robust content management system, allowing instructors to easily upload and manage course materials.",
      ],
    },
  ],
  skills,
  experiences,
  education: [
    {
      institute:
        "Rajiv Gandhi University of Knowledge Technologies, R.K Valley (A.P)",
      branch: "B.Tech (Computer Science and Engineering)",
      year: "2019-2023",
      cgpa: "8.80",
    },
    {
      institute:
        "Rajiv Gandhi University of Knowledge Technologies, R.K Valley (A.P)",
      branch: "PUC",
      year: "2017-2019",
      cgpa: "8.02",
    },
  ],
  certifications: [
    {
      id: 4,
      title: "Become a Full-Stack Web Developer (LinkedIn)",
      startYear: "06/2022",
      endYear: "09/2022",
      certificationId: "AYiVyjcyLwPOCzozjTTyOxO34VD-",
    },
    {
      id: 3,
      title: "Modern JavaScript: ES6 Basics (Coursera)",
      startYear: "06/2022",
      endYear: "07/2022",
      certificationId: "TWURENQFJP2W",
    },
    {
      id: 2,
      title: "98368MTA Mobility and Device Fundamentals (Microsoft)",
      startYear: "01/2022",
      endYear: "06/2022",
      certificationId: "https://shorturl.at/MU2SY",
    },
    {
      id: 1,
      title: "Python for Everybody (Coursera)",
      startYear: "10/2021",
      endYear: "01/2022",
      certificationId: "CRG9AKZ8PZD2",
    },
  ],
};
