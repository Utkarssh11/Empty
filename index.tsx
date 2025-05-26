/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import WebIcon from '@mui/icons-material/Web'; // Import the WebIcon here



// SVG Icon Components
const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em" aria-hidden="true">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
);

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em" aria-hidden="true">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zm-11 6H5v10h3V9zm-1.5-2.25A1.75 1.75 0 0 0 4.75 5a1.75 1.75 0 0 0 0 3.5A1.75 1.75 0 0 0 6.5 6.75zm7.5 2.25H11v1.75h.01c.44-.84 1.5-1.75 3.09-1.75C17.55 8 19 9.87 19 12.94V19h-3v-5.74c0-1.37-.49-2.31-1.74-2.31A1.74 1.74 0 0 0 12.5 12.3v6.7h-3V9z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em" aria-hidden="true">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.565 21.796 24 17.302 24 12 24 5.373 18.626 0 12 0z"/>
  </svg>
);

interface ExternalLinkIconProps {
  style?: React.CSSProperties;
}

const ExternalLinkIcon: React.FC<ExternalLinkIconProps> = ({ style: customStyle }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width="0.9em"
    height="0.9em"
    aria-hidden="true"
    style={{ marginLeft: '0.3em', verticalAlign: 'middle', ...customStyle }}
  >
    <path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
  </svg>
);


const resumeData = {
  name: "Utkarsh Patidar",
  contact: {
    phone: "+917000025951",
    email: "utkarshpatidar011@gmail.com",
    linkedin: "https://linkedin.com/in/utkarsh-patidar",
    github: "https://github.com/Utkarssh11",
    portfolio: "https://utkarsh-patidar-portfolio.vercel.app/"
  },
  // Portfolio data removed as per request
  summary: "Software Developer with practical experience in building and deploying web applications using React.js, Java, Spring Boot, and PostgreSQL. Skilled in developing interactive user interface components, integrating RESTful APIs, and providing user-friendly responsive features in agile startup environments. Quick learner with a strong grasp of clean code practices, collaboration, and end-to-end development workflows.",
  education: {
    institution: "Jawaharlal Institute of Technology, Khargone (MP)",
    degree: "Bachelor of Technology in Computer Science Engineering",
    period: "2020 – 2024",
    cgpa: "7.97"
  },
  experience: [
    {
      company: "Vanspecto",
      role: "Junior Software Developer (Remote)",
      period: "June 2024 – Present",
      location: "Pune, India",
      points: [
        "Developed responsive front-end interfaces using React.js, HTML, CSS, and Bootstrap.",
        "Integrated RESTful APIs into front-end components, enabling real-time display of inspection summaries and improving user interaction speed.",
        "Improved UI consistency and cross-device compatibility by refactoring layout components and applying reusable design patterns.",
        "Participated in debugging and frontend optimization, reducing component load time and improving user experience."
      ]
    },
    {
      company: "JSpiders Training Institute",
      role: "Full-Stack Developer Trainee",
      period: "Dec 2023 – May 2024",
      location: "Pune, India",
      points: [
        "Completed intensive full-stack development training focused on Java, Spring Boot, Hibernate, JDBC, and React.js.",
        "Designed and developed scalable full-stack applications with React.js, Spring Boot, and PostgreSQL.",
        "Created and integrated RESTful APIs for data exchange, user management, and secure authentication.",
        "Implemented complex backend logic using JDBC and ensured optimized SQL performance.",
        "Built dynamic and responsive front-end components and improved overall user experience."
      ]
    }
  ],
  technicalSkills: {
    frontend: "React.js, HTML, CSS, JavaScript, Bootstrap",
    backend: "Java, Spring Boot, JDBC",
    databases: "PostgreSQL",
    versionControl: "Git, GitHub",
    tools: "Eclipse, VS Code, Postman",
    concepts: "Object-Oriented Programming, Data Structures, Algorithms, RESTful APIs"
  },
  projects: [
    {
      name: "Health Management Platform",
      type: "Internship Project",
      points: [
        "Contributed to the backend and frontend of a web-based healthcare app.",
        "Developed REST APIs with Spring Boot to manage health records and appointments.",
        "Integrated PostgreSQL with JDBC for data storage and retrieval.",
        "Collaborated with mentors to implement new features and resolve bugs.",
        "Built frontend components with React.js for appointment tracking and profile management."
      ],
      repoUrl: "https://github.com/Utkarssh11/Personalized-Health-Management-Platform",
      repoNote: "View project details on GitHub"
    }
  ],
  achievements: [
    "Solved 200+ problems on LeetCode; highest rating of 1806, ranking in the top 8.75%.",
    "Ranked 917th in the LeetCode Contest 331 out of 22,489 participants.",
    "Scored 1700+ on GFG; secured first rank in my institute.",
    "Earned a perfect score of 100/100 in the GeeksforGeeks Mega Job-A-Thon."
  ],
  codingProfiles: [
    { name: "LeetCode", url: "https://leetcode.com/utkarssh_" },
    { name: "GeeksforGeeks", url: "https://auth.geeksforgeeks.org/user/utkarshpaqzjs/practice" }
  ]
};

const App = () => (
  <div className="resume-container" aria-label="Utkarsh Patidar's Resume">
    <header className="main-header-info" role="banner">
      <h1 className="main-name">{resumeData.name}</h1>
      <div className="contact-details-line">
        <a href={`tel:${resumeData.contact.phone.replace(/\s/g, '')}`} className="contact-link">
          <PhoneIcon />{resumeData.contact.phone}
        </a>
        <span className="contact-separator"> | </span>
        <a href={`mailto:${resumeData.contact.email}`} className="contact-link">
          <EmailIcon />{resumeData.contact.email}
        </a>
        <span className="contact-separator"> | </span>
        <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
          <LinkedInIcon />LinkedIn
        </a>
        <span className="contact-separator"> | </span>
        <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer" className="contact-link">
          <GitHubIcon />GitHub
        </a>

<span className="contact-separator"> | </span>
<a href={resumeData.contact.portfolio} target="_blank" rel="noopener noreferrer" className="contact-link">
  <WebIcon style={{ fontSize: '16px' }} /> Portfolio
</a>


      </div>
    </header>

    {/* Portfolio Section Removed as per request */}

    <section aria-labelledby="summary-heading">
      <h2 id="summary-heading">Professional Summary</h2>
      <p>{resumeData.summary}</p>
    </section>

    <section aria-labelledby="education-heading">
      <h2 id="education-heading">Education</h2>
      <div className="education-item">
        <h3>{resumeData.education.institution}</h3>
        <p className="date-location">{resumeData.education.period}</p>
        <p className="degree-title">{resumeData.education.degree}</p>
        <p>CGPA: {resumeData.education.cgpa}</p>
      </div>
    </section>

    <section aria-labelledby="experience-heading">
      <h2 id="experience-heading">Experience</h2>
      {resumeData.experience.map((exp, index) => (
        <div key={index} className="job">
          <h3>{exp.company}</h3>
          <p className="job-title">{exp.role}</p>
          <p className="date-location">{exp.period} | {exp.location}</p>
          <ul>
            {exp.points.map((point, i) => <li key={i}>{point}</li>)}
          </ul>
        </div>
      ))}
    </section>

    <section aria-labelledby="skills-heading">
      <h2 id="skills-heading">Technical Skills</h2>
      <div className="skills-list">
        <p><strong className="skill-label">Frontend:</strong> {resumeData.technicalSkills.frontend}</p>
        <p><strong className="skill-label">Backend:</strong> {resumeData.technicalSkills.backend}</p>
        <p><strong className="skill-label">Databases:</strong> {resumeData.technicalSkills.databases}</p>
        <p><strong className="skill-label">Version Control:</strong> {resumeData.technicalSkills.versionControl}</p>
        <p><strong className="skill-label">Tools:</strong> {resumeData.technicalSkills.tools}</p>
        <p><strong className="skill-label">Concepts:</strong> {resumeData.technicalSkills.concepts}</p>
      </div>
    </section>

    <section aria-labelledby="projects-heading">
      <h2 id="projects-heading">Projects</h2>
      {resumeData.projects.map((project, index) => (
        <div key={index} className="project">
          <h3>{project.name} <span className="project-type">({project.type})</span></h3>
          <ul>
            {project.points.map((point, i) => <li key={i}>{point}</li>)}
          </ul>
          {project.repoUrl && project.repoNote && (
            <p className="project-repo-link">
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                <GitHubIcon /> {project.repoNote} <ExternalLinkIcon/>
              </a>
            </p>
          )}
        </div>
      ))}
    </section>

    <section aria-labelledby="achievements-heading">
      <h2 id="achievements-heading">Achievements</h2>
      <ul>
        {resumeData.achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
    </section>

    <section aria-labelledby="profiles-heading">
      <h2 id="profiles-heading">Coding Profiles</h2>
      <div className="coding-profiles-list">
        {resumeData.codingProfiles.map((profile, index) => (
          <a key={index} href={profile.url} target="_blank" rel="noopener noreferrer" className="coding-profile-link">
            <ExternalLinkIcon style={{ marginLeft: '0', marginRight: '0.3em'}} />
            {profile.name}
            <ExternalLinkIcon />
          </a>
        ))}
      </div>
    </section>
  </div>
);

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Target container 'root' not found in the DOM. The app will not render.");
}
