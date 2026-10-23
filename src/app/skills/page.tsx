import { Column, Heading, Meta, Row, Schema, Tag, Text } from "@once-ui-system/core";
import { baseURL, person } from "@/resources";

const groups = [
  {
    title: "Languages & Backend",
    skills: ["C#", "ASP.NET Core", "ASP.NET Core Web API", "RESTful APIs", "MVC", "Microservices", "SQL", "T-SQL", "Python (learning)"],
  },
  {
    title: "Data",
    skills: ["SQL Server", "Entity Framework Core", "LINQ", "Dapper", "ADO.NET"],
  },
  {
    title: "Architecture & Quality",
    skills: ["Clean Architecture", "SOLID", "Design Patterns", "CQRS", "MediatR", "Domain Events", "Repository Pattern", "Result Pattern", "JWT", "Authentication & Authorization", "xUnit", "Unit & Integration Testing", "TDD"],
  },
  {
    title: "Tools & Current Learning",
    skills: ["Git", "GitHub", "Docker", "GitHub Actions", "Visual Studio", "Postman", "Jira", "Artificial Intelligence", "Machine Learning", "Agentic AI"],
  },
];

export async function generateMetadata() {
  return Meta.generate({
    title: `Skills – ${person.name}`,
    description: `Backend development skills and technologies used by ${person.name}`,
    baseURL,
    path: "/skills",
  });
}

export default function SkillsPage() {
  return (
    <Column maxWidth="m" paddingTop="24" gap="xl">
      <Schema as="webPage" baseURL={baseURL} path="/skills" title={`Skills – ${person.name}`} description="Backend development skills and technologies." author={{ name: person.name, url: `${baseURL}/about`, image: baseURL }} />
      <Column gap="m">
        <Heading variant="display-strong-s">Skills</Heading>
        <Text onBackground="neutral-weak">Technologies and practices I use in backend development, plus areas I am currently exploring.</Text>
      </Column>
      {groups.map((group) => (
        <Column key={group.title} gap="m">
          <Heading as="h2" variant="heading-strong-l">{group.title}</Heading>
          <Row wrap gap="8">
            {group.skills.map((skill) => <Tag key={skill} size="l">{skill}</Tag>)}
          </Row>
        </Column>
      ))}
    </Column>
  );
}
