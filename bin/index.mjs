#!/usr/bin/env node
import chalk from "chalk";
import boxen from "boxen";
import gradient from "gradient-string";

// Define a color palette for a professional and modern look
const blue = '#e6f030ff';
const magenta = '#229e45ff'; // A bold, rich purple/pink for accents
const lightGray = '#afadadff';
const darkText = '#c2c1c1ff';

// A function to center text based on a fixed width
const terminalWidth = 50; // Adjust this value to match your terminal width
const centerText = (text, width) => {
    const padding = Math.max(0, Math.floor((width - text.length) / 2));
    return ' '.repeat(padding) + text;
};

// Helper function for creating a colored, underlined section header
const sectionHeader = (text) => {
    return chalk.hex(blue).bold.underline(text);
};

// Helper function for coloring bolded titles
const title = (text) => {
    return chalk.hex(magenta).bold(text);
};

// --- HEADER ---
const headerLine = "=".repeat(terminalWidth);
const name = centerText("TUSHAR KHATRI", terminalWidth);
const footerText = centerText("Thanks for viewing my resume!", terminalWidth);

const resumeContent = `
${gradient.pastel(headerLine)}
${gradient.pastel(name)}
${gradient.pastel(headerLine)}\n
${chalk.hex(lightGray)("📱 Phone:")} ${chalk.hex(darkText)("+91 9084313847")}
${chalk.hex(lightGray)("📧 Email:")} ${chalk.hex(darkText)("tusharkhatri1001@gmail.com")}
${chalk.hex(lightGray)("🔗 LinkedIn:")} ${chalk.hex(darkText)("linkedin.com/in/tushar-khatri-2b4454244")}
${chalk.hex(lightGray)("💻 GitHub:")} ${chalk.hex(darkText)("github.com/tusharkhatri434")}
${chalk.hex(lightGray)("🌐 Portfolio:")} ${chalk.hex(darkText)("tusharkhatri.vercel.app\n")}

${sectionHeader("🎯 OBJECTIVE")}
${chalk.hex(darkText)("Motivated SDET and Frontend Developer with hands-on experience in React.js, Node.js, MongoDB, and Firebase.")}
${chalk.hex(darkText)("Passionate about building scalable web applications and delivering exceptional user experiences.\n")}

${sectionHeader("🛠 SKILLS")}
${chalk.hex(magenta)("Languages:")} ${chalk.hex(darkText)("C++, Java, JavaScript, TypeScript")}
${chalk.hex(magenta)("Technologies:")} ${chalk.hex(darkText)("HTML5, CSS3, React.js, Node.js, Mongoose")}
${chalk.hex(magenta)("Libraries:")} ${chalk.hex(darkText)("ShadcnUI, TailwindCSS, Redux-toolkit, Playwright")}
${chalk.hex(magenta)("Databases:")} ${chalk.hex(darkText)("SQL, MongoDB")}
${chalk.hex(magenta)("Tools:")} ${chalk.hex(darkText)("Git, GitHub")}
${chalk.hex(magenta)("Soft Skills:")} ${chalk.hex(darkText)("Critical thinking, Data-driven decision making, Project ownership\n")}

${sectionHeader("🎓 EDUCATION")}
${title("Master of Computer Applications (MCA) – 2023-2025")}
${chalk.hex(darkText)("Dewan vs institute of engineering and technology Meerut")}
${title("Bachelor of Computer Applications (BCA) – 2020-2023")}
${chalk.hex(darkText)("Neelkanth Vidyapeeth Modipuram Meerut\n")}

${sectionHeader("💼 EXPERIENCE")}
${title("SDET Intern – Allen digital (Aug 2025 – Present)")}
${chalk.hex(darkText)("• Wrote automation scripts for UI automation of file uploads and test-taking.")}
${chalk.hex(darkText)("• Fixed bugs and monitored stage and production during on-call.\n")}

${title("Frontend Developer – Pixel8Ai (Jan 2025 – Jul 2025)")}
${chalk.hex(darkText)("• Built responsive landing pages, e-commerce sites, and CRM dashboards using React.js, HTML, CSS, and JavaScript.")}
${chalk.hex(darkText)("• Collaborated with designers and backend teams to integrate APIs and deliver full MERN stack features.")}
${chalk.hex(darkText)("• Improved UI performance by optimizing components and applying best practices in React.\n")}

${sectionHeader("🚀 PROJECTS")}
${title("Craxflix-GPT (Live | Code)")}
${chalk.hex(darkText)("• Developed a Netflix-inspired UI using React.js, TailwindCSS, and Redux-toolkit.")}
${chalk.hex(darkText)("• Implemented secure user authentication via Firebase for over 1000 users.")}
${chalk.hex(darkText)("• Integrated Chat-GPT for an interactive search feature, producing personalized recommendations.")}
${chalk.hex(darkText)("• Leveraged recommendation systems and TMDB APIs to increase user retention by 30%.\n")}

${title("YouTube-Clone (Live | Code)")}
${chalk.hex(darkText)("• Engineered a YouTube-like platform using ReactJS, Tailwind CSS, and Redux Toolkit.")}
${chalk.hex(darkText)("• Implemented debouncing techniques to optimize search functionality, resulting in a 20% reduction in query response time.")}
${chalk.hex(darkText)("• Integrated search recommendation APIs and voice features to enhance user experience and retention.\n")}

${title("Forever Buy (Live | Code)")}
${chalk.hex(darkText)("• Built a fully responsive MERN stack e-commerce web app with 100% mobile and desktop compatibility.")}
${chalk.hex(darkText)("• Secured admin and customer roles with JWT-based authentication and bcryptjs encryption.")}
${chalk.hex(darkText)("• Developed a dynamic admin panel to handle CRUD operations for 100+ products and orders.\n")}

${gradient.pastel(headerLine)}
${gradient.pastel(footerText)}
${gradient.pastel(headerLine)}
`;

const boxedResume = boxen(resumeContent, {
    padding: 1,
    margin: 1,
    borderStyle: 'double',
    borderColor: 'magenta',
});

console.log(boxedResume);