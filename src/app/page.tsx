import {
  Heading,
  Text,
  Button,
  RevealFx,
  Column,
  Badge,
  Row,
  Schema,
  Meta,
  Line,
} from "@once-ui-system/core";
import { home, about, person, baseURL, routes } from "@/resources";
import { Newsletter } from "@/components";
import { Projects } from "@/components/work/Projects";
import { Posts } from "@/components/blog/Posts";
import Image from "next/image";
import styles from "./home.module.scss";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <Column maxWidth="l" gap="xl" paddingY="xl" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <RevealFx fillWidth translateY="12">
        <Row
          className={styles.hero}
          fillWidth
          gap="xl"
          vertical="center"
          s={{ direction: "column-reverse", gap: "32" }}
        >
          <Column className={styles.heroContent} fillWidth flex={1} gap="m">
          {home.featured.display && (
            <RevealFx
              fillWidth
              paddingBottom="8"
            >
              <Badge
                background="brand-alpha-weak"
                paddingX="12"
                paddingY="4"
                onBackground="neutral-strong"
                textVariant="label-default-s"
                arrow={false}
                href={home.featured.href}
              >
                <Row paddingY="2">{home.featured.title}</Row>
              </Badge>
            </RevealFx>
          )}
          <RevealFx translateY="4" fillWidth paddingBottom="8">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={200} fillWidth paddingBottom="8">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx delay={300}>
            <Row gap="12" wrap paddingTop="8">
              <Button href="/work" variant="primary" size="m" arrowIcon>
                Explore my projects
              </Button>
              <Button href={`mailto:${person.email}`} variant="secondary" size="m">
                Get in touch
              </Button>
            </Row>
          </RevealFx>
          <Row wrap gap="8" paddingTop="m">
            {["C#", "ASP.NET Core", "SQL Server", "AI Business Analysis", "MLOps", "Prompt Engineering"].map((skill) => (
              <Badge key={skill} background="neutral-alpha-weak" onBackground="neutral-strong">
                {skill}
              </Badge>
            ))}
          </Row>
          </Column>
          <Column className={styles.portraitColumn} flex={1} horizontal="center">
            <div className={styles.portraitFrame}>
              <Image
                className={styles.portrait}
                src={person.avatar}
                alt="Aya Mohamed's illustrated profile avatar"
                fill
                priority
                sizes="(max-width: 768px) 72vw, 320px"
              />
              <div className={styles.portraitCaption}>
                <span className={styles.statusDot} />
                <span>
                  <strong>Aya Mohamed</strong>
                  <small>Software Engineer · .NET · AI</small>
                </span>
              </div>
            </div>
          </Column>
        </Row>
      </RevealFx>
      <RevealFx translateY="16" delay={600}>
        <Projects range={[1, 1]} />
      </RevealFx>
      {routes["/blog"] && (
        <Column fillWidth gap="24" marginBottom="l">
          <Row fillWidth paddingRight="64">
            <Line maxWidth={48} />
          </Row>
          <Row
            fillWidth
            gap="24"
            marginTop="40"
            s={{ direction: "column", marginTop: "16", gap: "8" }}
          >
            <Row
              flex={1}
              paddingLeft="l"
              paddingTop="24"
              s={{ paddingLeft: "16", paddingTop: "8" }}
            >
              <Heading as="h2" variant="display-strong-xs" wrap="balance">
                Latest from the blog
              </Heading>
            </Row>
            <Row flex={3} paddingX="20" s={{ paddingX: "0" }}>
              <Posts range={[1, 2]} columns="2" />
            </Row>
          </Row>
          <Row fillWidth paddingLeft="64" horizontal="end">
            <Line maxWidth={48} />
          </Row>
        </Column>
      )}
      <Projects range={[2]} />
      <Newsletter />
    </Column>
  );
}
