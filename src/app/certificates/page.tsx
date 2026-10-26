import { Column, Heading, Meta, Schema, Text } from "@once-ui-system/core";
import { baseURL, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: `Certificates & Training – ${person.name}`,
    description: `Education and backend development training completed by ${person.name}`,
    baseURL,
    path: "/certificates",
  });
}

export default function CertificatesPage() {
  return (
    <Column maxWidth="m" paddingTop="24" gap="xl">
      <Schema as="webPage" baseURL={baseURL} path="/certificates" title={`Certificates & Training – ${person.name}`} description="Education and backend development training." author={{ name: person.name, url: `${baseURL}/about`, image: baseURL }} />
      <Column gap="m">
        <Heading variant="display-strong-s">Certificates & Training</Heading>
      </Column>
      <Column gap="8">
        <Heading as="h2" variant="heading-strong-l">Backend Development Training</Heading>
        <Text variant="heading-default-s" onBackground="brand-weak">Metigator · June–August 2025</Text>
        <Text onBackground="neutral-weak">Mastering ASP.NET Core: Concepts to Production-Ready APIs. Covered Clean Architecture, CQRS, MediatR, domain modeling, Entity Framework Core, ASP.NET Core Identity, real-time notifications, API testing, Docker, and GitHub Actions.</Text>
      </Column>
      <Column gap="8">
        <Heading as="h2" variant="heading-strong-l">.NET Backend Development</Heading>
        <Text variant="heading-default-s" onBackground="brand-weak">Programming Advices · July 2023–January 2025</Text>
        <Text onBackground="neutral-weak">A two-year foundational training program focused on .NET, C#, ADO.NET, SQL Server, T-SQL, algorithms, and data structures.</Text>
      </Column>
      <Column gap="8">
        <Heading as="h2" variant="heading-strong-l">Computer and Systems Engineering</Heading>
        <Text variant="heading-default-s" onBackground="brand-weak">Al-Azhar University · 2021–2026</Text>
        <Text onBackground="neutral-weak">Bachelor's degree · Overall grade: Very Good</Text>
      </Column>
    </Column>
  );
}
