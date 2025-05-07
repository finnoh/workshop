import type {ReactNode, JSX} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className={styles.heroBackground}>
        <div className={styles.heroBackgroundInner}>
          <div className={styles.heroContent}>
            <Heading as="h1" className={styles.heroTitle}>
              {siteConfig.title}
            </Heading>
            <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
            <div className={styles.heroButtons}>
              <Link
                className={clsx(
                  'button button--lg',
                  styles.heroButton,
                  styles.getStartedButton
                )}
                to="/docs/overview">
                Get Started 🚀
              </Link>
              <Link
                className={clsx(
                  'button button--lg',
                  styles.heroButton,
                  styles.githubButton
                )}
                to="https://github.com/finnoh/workshop_pe">
                View on GitHub <span className={styles.githubIcon}>→</span>
              </Link>
            </div>
            <div className={styles.heroStats}>
              <div className={styles.heroStat}>
                <span className={styles.heroStatNumber}>10+</span>
                <span className={styles.heroStatLabel}>Modules</span>
              </div>
              <div className={styles.heroStat}>
                <span className={styles.heroStatNumber}>50+</span>
                <span className={styles.heroStatLabel}>Exercises</span>
              </div>
              <div className={styles.heroStat}>
                <span className={styles.heroStatNumber}>∞</span>
                <span className={styles.heroStatLabel}>Possibilities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

interface FeatureItem {
  title: string;
  description: JSX.Element;
}

const FeatureList: FeatureItem[] = [
  {
    title: 'Modern Research Skills',
    description: (
      <>
        Learn essential programming skills needed for modern research workflows,
        from version control to cloud computing.
      </>
    ),
  },
  {
    title: 'Hands-on Learning',
    description: (
      <>
        Practice with real-world examples and exercises designed to reinforce
        your understanding of key concepts.
      </>
    ),
  },
  {
    title: 'Comprehensive Resources',
    description: (
      <>
        Access a curated collection of resources, documentation, and best practices
        to support your learning journey.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

function MainFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Learn essential programming skills for modern research workflows"
      wrapperClassName="homepage">
      <HomepageHeader />
      <main>
        <MainFeatures />
      </main>
    </Layout>
  );
}
