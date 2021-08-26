import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.indexCtas}>
              <Link className="button button--outline button--secondary button--lg" href="/invite" target="_blank">
                Invite to Server
              </Link>
              <Link className="button button--outline button--secondary button--lg" href="/discord" target="_blank">
                Join Discord
              </Link>
            </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Cordviews`}
      description="Cordviews is a Discord platform for users of Discord to find a server to join with **trusted reviews**, and **trusted feedback** for server admins.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <h3 className="center"><strong>Cordviews is also open source, encouraging transparency and endless possibilities, such as self-hosting.</strong></h3>
        <br />
      </main>
    </Layout>
  );
}
