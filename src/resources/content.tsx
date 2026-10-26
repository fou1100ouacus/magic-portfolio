import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Aya",
  lastName: "Mohamed",
  name: "Aya Mohamed",
  role: "Software Engineer | Backend .NET | AI Business Analyst | MLOps Engineer | Prompt Engineer",
  avatar: "/images/aya-profile.jpg",
  email: "sdeveloper140@gmail.com",
  location: "Africa/Cairo",
  languages: ["English"],
  locale: "en", // BCP 47 language tag for the HTML lang attribute, e.g., 'en', 'ja', 'zh-TW'
};

const newsletter: Newsletter = {
  display: false,
  title: <></>,
  description: <></>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/fou1100ouacus",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/api/og/generate?title=Aya%20Mohamed%20%7C%20Software%20Engineer%20%26%20AI",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Scalable backends. Thoughtful AI. Real-world impact.</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Backend Development</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Selected projects
        </Text>
      </Row>
    ),
    href: "/work/mechanic-shop-management-system",
  },
  subline: (
    <>
      I'm {person.firstName}, a software engineer focused on .NET backend development and
      interested in AI business analysis, MLOps, and prompt engineering. I build secure, scalable
      applications and explore how thoughtful AI can solve practical problems.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, a .NET backend developer based in Egypt`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: { display: false, link: "" },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>Passionate .NET Backend Developer focused on building scalable, secure, and high-performance applications. Skilled in ASP.NET Core, C#, SQL Server, and backend architecture. Continuously learning new technologies, exploring Artificial Intelligence, and improving software engineering skills.</>
    ),
  },
  work: {
    display: true,
    title: "Experience",
    experiences: [
      {
        company: "Huma Valve",
        timeframe: "Oct 2026 – Present · Remote",
        role: "Junior Backend .NET Developer · Internship",
        achievements: [],
      },
      {
        company: "SpaceTech",
        timeframe: "Sep 2026 · Alexandria, Egypt · Remote",
        role: "Associate Software Engineer · Internship",
        achievements: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Al-Azhar University",
        description: <>B.Sc. in Computers and Systems Engineering · 2021–2026 · Overall grade: Very Good</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Backend Development",
        description: <>C#, ASP.NET Core, Web API, REST, MVC, microservices, SQL Server, T-SQL, Entity Framework Core, LINQ, Dapper, and ADO.NET.</>,
        tags: [
          { name: "C#" }, { name: "ASP.NET Core" }, { name: "REST APIs" }, { name: "SQL Server" }, { name: "Entity Framework Core" }, { name: "LINQ" }, { name: "Dapper" }, { name: "ADO.NET" },
        ],
        images: [],
      },
      {
        title: "Architecture & Quality",
        description: <>Clean Architecture, SOLID, design patterns, CQRS, MediatR, domain events, Result Pattern, JWT, authentication and authorization, xUnit, TDD, and integration testing.</>,
        tags: [
          { name: "Clean Architecture" }, { name: "SOLID" }, { name: "CQRS" }, { name: "MediatR" }, { name: "JWT" }, { name: "xUnit" }, { name: "TDD" },
        ],
        images: [],
      },
      {
        title: "Tools & Current Learning",
        description: <>Git, GitHub, Docker, GitHub Actions, Visual Studio, Postman, Jira, Python, Artificial Intelligence, Machine Learning, and Agentic AI.</>,
        tags: [
          { name: "Git" }, { name: "Docker" }, { name: "GitHub Actions" }, { name: "Python (learning)" }, { name: "AI (exploring)" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Backend Engineering Notes",
  description: `Notes on .NET backend development, software architecture, and learning AI by ${person.name}`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Backend engineering projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
