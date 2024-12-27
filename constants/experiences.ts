import { Experience } from "@/types";
import { v4 } from "uuid";

export const experiences: Experience[] = [
  {
    company: "Tata Consultancy Services",
    role: "Jr Frontend Developer",
    from: "June 2021",
    to: "July 2022",
    descriptions: [
      "Developed and maintained web applications using React Js.",
      "Collaborated with the design team to implement responsive and user-friendly interfaces.",
      "Implemented form validation and error handling to improve user experience.",
      "Optimized web application performance by implementing lazy loading, code splitting, and minimizing unnecessary re-renders.",
      "Contributed to improving the website's SEO by ensuring clean and semantic HTML markup and optimizing page load speeds.",
    ],
    color: "malibu",
    id: v4(),
  },
  {
    company: "Elorce",
    role: "Intern",
    from: "Jan 2021",
    to: "Apr 2021",
    descriptions: [
      "Assisted in developing responsive web pages using HTML, CSS, and JavaScript, ensuring compatibility across various devices and browsers.",
      "Learnt the UI Technologies like Html, css and Javascript.",
      "Documented codebase changes and new features, creating and updating README files, API documentation, for teams use.",
      "Participated in the integration of third-party libraries and tools, such as charting libraries, form validation tools, and authentication services, to extend application functionality.",
    ],
    color: "biloba",
    id: v4(),
  },
  {
    company: "Tata Consultancy Services",
    role: "Intern",
    from: "Aug 2020",
    to: "Nov 2020",
    descriptions: [
      "Worked on a project called Automation of Engineering Bill Preparation.",
      "Prepared a playbook analyzing As-is process and multiple use cases involved in floating a project.",
      "Learnt the basics of SQL, Oracle application framework.",
      "Created SQL tables, Stored Procedures, triggers and functions.",
    ],
    color: "lavender",
    id: v4(),
  },
];
