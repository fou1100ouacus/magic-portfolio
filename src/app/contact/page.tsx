import { Button, Column, Heading, Meta, Schema, Text } from "@once-ui-system/core";
import { baseURL, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: `Contact – ${person.name}`,
    description: `Get in touch with ${person.name} about backend development opportunities and projects`,
    baseURL,
    path: "/contact",
  });
}

export default function ContactPage() {
  return (
    <Column maxWidth="s" paddingTop="24" gap="l">
    <Schema as="webPage" baseURL={baseURL} path="/contact" title={`Contact – ${person.name}`} description={`Contact ${person.name}.`} author={{ name: person.name, url: `${baseURL}/about`, image: baseURL }} />
      <Heading variant="display-strong-s">Let's connect</Heading>
      <Text onBackground="neutral-weak">I am interested in backend development, software engineering, and AI. Reach out by email or find my code on GitHub.</Text>
      <Button href={`mailto:${person.email}`} size="m" variant="primary">{person.email}</Button>
      <Button href="https://github.com/fou1100ouacus" size="m" variant="secondary">GitHub profile</Button>
    </Column>
  );
}
