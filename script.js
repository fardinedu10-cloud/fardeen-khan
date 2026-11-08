/*
  ==========================================================
  FARDHIN KHAN PORTFOLIO — EDIT THESE DATA OBJECTS
  ==========================================================
*/

/* 1) PERSONAL INFORMATION */
const personalInfo = {
  name: "Fardeen Khan",
  role: "Software Engineer",
  location: "Dhaka, Bangladesh",
  university: "Sonargaon University",
  degree: "B.Sc. in Computer Science & Engineering",
  semester: "8th Semester",
  availability: "Available for opportunities"
};

/* 2) PROJECT DETAILS
   Replace the sample projects below with your actual projects.
   Do not claim technologies or features you have not built.
*/
const projects = [
  {
    title: "Project One",
    description: "A production-focused web application designed around a clear user workflow and maintainable frontend architecture.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "#"
  },
  {
    title: "Project Two",
    description: "A responsive software solution with structured components, intuitive interactions, and a clean user experience.",
    technologies: ["JavaScript", "API", "Responsive UI"],
    link: "#"
  },
  {
    title: "Project Three",
    description: "A full project concept ready for your strongest academic, personal, or professional work.",
    technologies: ["Your Stack", "Database", "Git"],
    link: "#"
  }
];

/* 3) COMMUNICATION / SOCIAL LINKS */
const communication = {
  phone: "+8801531-654066",
  email: "fardin.edu10@gmail.com",
  facebook: "https://facebook.com/fardeen-khan",
  linkedin: "https://linkedin.com/in/yourusername",
  github: "https://github.com/fardinedu10-cloud"
};

/* 4) COLOR SYSTEM
   These values match the requested palette.
   Change colors here instead of searching through CSS.
*/
const colors = {
  background: "#071B2B",
  accent: "#167D8D",
  soft: "#B9E4E8",
  light: "#EEEEEE"
};

document.documentElement.style.setProperty("--bg", colors.background);
document.documentElement.style.setProperty("--accent", colors.accent);
document.documentElement.style.setProperty("--soft", colors.soft);
document.documentElement.style.setProperty("--light", colors.light);

const skillData = [
  { name: "Software Engineering", text: "Architecture, clean code & maintainable systems" },
  { name: "Web Development", text: "Responsive interfaces & modern web experiences" },
  { name: "Problem Solving", text: "Structured thinking & practical implementation" },
  { name: "Development Tools", text: "Git, version control & engineering workflow" }
];

document.title = `${personalInfo.name} | ${personalInfo.role}`;

const skillGrid = document.getElementById("skillGrid");
skillGrid.innerHTML = skillData.map((skill, index) => `
  <article class="skill">
    <span class="skill-number">${String(index + 1).padStart(2, "0")}</span>
    <div>
      <h3>${skill.name}</h3>
      <p>${skill.text}</p>
    </div>
  </article>
`).join("");

const projectList = document.getElementById("projectList");
projectList.innerHTML = projects.map((project, index) => `
  <article class="project">
    <span class="project-index">${String(index + 1).padStart(2, "0")}</span>
    <div>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="tags">
        ${project.technologies.map(tech => `<span class="tag">${tech}</span>`).join("")}
      </div>
    </div>
    <a class="project-link" href="${project.link}" target="_blank" rel="noopener">VIEW ↗</a>
  </article>
`).join("");

const contactLinks = [
  { label: "EMAIL", value: communication.email, href: `mailto:${communication.email}` },
  { label: "PHONE", value: communication.phone, href: `tel:${communication.phone}` },
  { label: "LINKEDIN", value: "LinkedIn profile", href: communication.linkedin },
  { label: "GITHUB", value: "GitHub profile", href: communication.github },
  { label: "FACEBOOK", value: "Facebook profile", href: communication.facebook }
];

document.getElementById("contactLinks").innerHTML = contactLinks.map(item => `
  <a class="contact-link" href="${item.href}" target="_blank" rel="noopener">
    <small>${item.label}</small>
    <span>${item.value}</span>
  </a>
`).join("");

document.getElementById("year").textContent = new Date().getFullYear();

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(element => observer.observe(element));
