import React from "react";
import { CgWorkAlt } from "react-icons/cg";

export const links = [
    {
      name: "Intro",
      hash: "#intro",
    },
    {
      name: "Projects",
      hash: "#projects",
    },
    {
      name: "Skills",
      hash: "#skills",
    },
    {
      name: "Experience",
      hash: "#experience",
    },
    {
      name: "Education",
      hash: "#education",
    },
    {
      name: "Contact",
      hash: "#contact",
    },
  ] as const;


  export const professionalProjectsData = [
    {
      title: "Rosie Bot",
      description:
        "A Slack-integrated chatbot that streamlines workflows by automating Jira and GitHub tasks using Python, Flask, and Bolt for Slack. Utilizes LLMs via LangGraph to deliver intelligent responses for queries like release status and ticket assignments. Built Flask APIs for Slack integration and ensured smooth communication with external services. Boosted productivity through in-Slack interactions and smart automation.",
      tags: ["Python", "Slack", "Flask", "LLM", "LangChain"],
      icons: [
        "logos:python",
        "logos:slack-icon",
        "logos:flask",
        "bytesize:github",
        "simple-icons:langgraph",
      ],
      imageUrl: '/projects/RosieBot.png',
      githubLink: "",
      demoLink: "",
      imageClasses:"top-[69px] right-4 w-[27rem]"
    },
    {
      title: "PSCI",
      description:
        "An AI-powered SaaS platform for government contractors, designed to automate opportunity matching, document analysis, and proposal generation. Built with Next.js, Supabase, Tailwind CSS, ShadCN, and Radix UI, featuring interactive components, robust APIs, and optimized performance for a seamless user experience.",
      tags: ["Next.js", "Supabase", "Tailwind CSS", "ShadCN", "Radix UI"],
      icons: [
        "devicon:nextjs",
        "logos:supabase-icon",
        "logos:typescript-icon",
        "simple-icons:shadcnui",
        "devicon:tailwindcss",
      ],
      imageUrl: '/projects/PSCI.png',
      urlLink: "",
      githubLink: "",
      imageClasses:"top-[43px] right-4 w-[26rem]"
    },
    {
      title: "HP Label Designer",
      description:
        "A web-based label design tool for HP, enabling users to create and manage custom labels with text, images, and barcodes using HTML Canvas. Built with Angular and .NET 8, featuring RESTful APIs, version control, and Azure Blob Storage. Developed a Windows service for automated label processing and optimized backend with Entity Framework and SQL stored procedures.",
      tags: [".NET 8", "Angular", "HTML Canvas", "Azure", "SQL", "Entity Framework"],
      icons: [
        "logos:dotnet",
        "devicon:entityframeworkcore",
        "logos:angular-icon",
        "logos:azure-icon",
        "devicon:azuresqldatabase"
      ],
      imageUrl: '/projects/Hp-Label-Editor-With-Items.png',
      githubLink: "",
      imageClasses:"top-[98px] right-4 w-[27rem]"
    },
    {
      title: "DIGITRAX",
      description:
        "An industrial monitoring solution built with .NET 5 and Angular 11, used by clients like FBR to regulate production and reduce counterfeiting. I developed APIs using Entity Framework and Repository pattern, deployed the backend to Azure, integrated Blob Storage, and implemented background jobs using Hangfire for reliable task execution.",
      tags: [".NET 5", "Angular 11", "Entity Framework", "Azure", "Cosmos DB", "Hangfire"],
      icons: [
        "logos:angular-icon",
        "logos:dotnet",
        "devicon:entityframeworkcore",
        "logos:azure-icon",
        "devicon:azuresqldatabase",
        "devicon:cosmosdb"
      ],
      imageUrl: '/projects/Digitrax-Dashboard.png',
      githubLink: "",
      urlLink: "",
      imageClasses:"top-[98px] right-4 w-[27rem]"
    },
    {
      title: "KMBL - Financial Scoring System",
      description:
        "A financial scoring system for a banking institution, built using .NET 5, Angular 11 and MySQL. Calculates customer credit scores based on user inputs and predefined criteria to determine loan eligibility. Includes scoring logic, loan assessment workflows, and fault-tolerant architecture for reliable operation.",
      tags: [".NET 5", "Angular 11", "Financial Scoring", "Loan Assessment"],
      icons: [
        "logos:dotnet",
        "logos:angular-icon",
        "logos:mysql"
      ],
      imageUrl: '/projects/KMBL.png',
      githubLink: "",
      imageClasses:"top-[40px] right-4 w-[19rem]"
    },
    {
      title: "2nd Bid",
      description:
        "A real estate bidding platform developed with .NET 5 and Flutter for a US-based client. The backend was built using Clean Architecture, CQRS, Dapper ORM, and MySQL, and deployed on AWS EC2. Features include property listing management, social login, Firebase notifications, and worker services for third-party API sync and notification handling.",
      tags: [".NET 5", "Flutter", "MySQL", "AWS EC2", "Dapper", "CQRS", "Firebase"],
      icons: [
        "logos:dotnet",
        "logos:flutter",
        "logos:mysql",
        "logos:aws",
        "logos:firebase"
      ],
      imageUrl: '/projects/2nd Bid.png',
      githubLink: "",
      demoLink: "",
      imageClasses:"top-[-70px] -right-10 w-[19rem]"
    },
    {
      title: "ASCENT 2.0 - Contract Management System",
      description:
        "A desktop-based contract management system for global automotive leasing clients like Mercedes-Benz and BMW. Developed with WPF using the MVVM pattern to manage the full lifecycle of automobile leasing contracts. Included dynamic UI scripting, backend logic, and hotfixes for critical client-facing modules.",
      tags: ["WPF", "C#", ".NET", "MVVM", "Desktop App"],
      icons: [
        "devicon:csharp",
        "logos:dotnet"
      ],
      imageUrl: '/projects/NFS Ascent.png',
      githubLink: "",
      demoLink: "",
      imageClasses:"top-[45px] right-4 w-[27rem]"
    },
  ] as const;


  export const personalProjectsData = [
    {
      title: "Developer Portfolio",
      description:
        "A modern, responsive developer portfolio built with Next.js, Tailwind CSS, and ShadCN UI. It features a clean UI to showcase professional and personal projects, highlight technical skills with icons, and present experience, education, and contact details. Includes support for light/dark themes and a downloadable resume to streamline outreach for recruiters and collaborators.",
      tags: ["Next.js", "Tailwind CSS", "ShadCN", "TypeScript", "Dark Mode", "Responsive UI"],
      icons: [
        "devicon:nextjs",
        "devicon:tailwindcss",
        "logos:typescript-icon",
        "material-symbols-light:dark-mode"
      ],
      imageUrl: '/projects/Portfolio.png',
      githubLink: "",
      demoLink: "",
      imageClasses:"top-[50px] right-4 w-[27rem]"
    },
    {
      title: "Icebreaker Application",
      description:
        "An AI-powered application built with Python and LangChain to streamline user discovery on social platforms. Features two intelligent agents—one for locating users on LinkedIn and another for Twitter. Includes a custom tool designed to support and enhance agent functionality for more accurate and context-aware results.",
      tags: ["Python", "LangChain", "Agents", "LinkedIn", "Twitter", "Custom Tools"],
      icons: [
        "logos:python",
        "simple-icons:langchain",
        "logos:linkedin-icon",
        "logos:twitter"
      ],
      imageUrl: "/projects/IceBreaker.png",
      githubLink: "",
      demoLink: "",
      imageClasses:"top-[45px] right-4 w-[25rem]"
    }
  ];

  export const skillsData = [
    {
      name: ".Net",
      icon: "skill-icons:dotnet",
    },
    {
      name: "C#",
      icon: "devicon:csharp",
    },
    {
      name: "JavaScript",
      icon: "logos:javascript",
    },
    {
      name: "TypeScript",
      icon: "logos:typescript-icon",
    },
    {
      name: "React",
      icon: "logos:react",
    },
    {
      name: "Next Js",
      icon: "devicon:nextjs",
    },
    {
      name: "Angular",
      icon: "logos:angular-icon",
    },
    {
      name: "Node.js",
      icon: "logos:nodejs-icon",
    },
    {
      name: "Python",
      icon: "logos:python",
    },
    {
      name: "Cosmos DB",
      icon: "devicon:cosmosdb",
    },
    {
      name: "PostgreSQL",
      icon: "devicon:postgresql",
    },
    {
      name: "MySQL",
      icon: "logos:mysql",
    },
    {
      name: "HTML",
      icon: "vscode-icons:file-type-html",
    },
    {
      name: "CSS",
      icon: "vscode-icons:file-type-css",
    },
    {
      name: "SCSS",
      icon: "logos:sass",
    },
    {
      name: "Git",
      icon: "logos:git-icon",
    },
    {
      name: "Bitbucket",
      icon: "vscode-icons:file-type-bitbucketpipeline",
    },
    {
      name: "Jira",
      icon: "devicon:jira",
    },
    {
      name: "Confluence",
      icon: "vscode-icons:file-type-confluence",
    },
    {
      name: "Azure",
      icon: "devicon:azure",
    },
    {
      name: "AWS",
      icon: "logos:aws",
    },
    {
      name: "Docker",
      icon: "logos:docker-icon",
    }
  ] as const;

  export const experiencesData = [
    {
      title: "Principal Software Engineer",
      location: "Techlogix",
      description:
        "Led the development of full-stack applications using technologies such as Next.js, React, Python, .NET, and Angular. Notable projects include RosieBot, a Slack-integrated AI assistant leveraging LLMs, PSCI's government contracting SaaS platform using Supabase and Tailwind CSS, and HP's Label Designer built on .NET 8 and Azure. Delivered scalable, secure solutions across cloud platforms (Azure, AWS) while integrating APIs, automation services, and dynamic UI components.",
      icon: React.createElement(CgWorkAlt),
      date: "October 2021 - Present",
    },
    {
      title: "Senior Software Engineer",
      location: "TenX",
      description:
        "Contributed to multiple full-stack .NET projects including KMBL, a financial scoring system for banking loan eligibility, and 2nd Bid, a real estate platform using Flutter and AWS. Built APIs using Clean Architecture, CQRS, and Dapper ORM, implemented background services for data sync and notifications, and integrated social login and Firebase. Focused on scalable, cloud-deployed solutions with MySQL and S3 for efficient data management.",
      icon: React.createElement(CgWorkAlt),
      date: "February 2021 - October 2021",
    },
    {
      title: "Software Engineer",
      location: "Netsol",
      description:
        "Worked on ASCENT 2.0, a Contract Management System used by global automotive clients like Mercedes-Benz and BMW. Developed WPF desktop applications using .NET and MVVM architecture. Built reusable UI frameworks, handled full software lifecycle from development to hotfixes, and optimized backend performance. Contributed to dynamic UI rendering and resolution of complex client issues across leasing and finance modules.",
      icon: React.createElement(CgWorkAlt),
      date: "July 2017 - February 2021",
    }
  ] as const;