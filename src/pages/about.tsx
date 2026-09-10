import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About</title>
        <meta name="description" content='This is the about page' />
      </Head>
      <div className='wrapper'>
        <div>
          <h1 className='logo-blue'>About</h1>
          <p>This is the about page.</p>
        </div>
        <div>
          <Link className="button button--secondary button--md"
                to="/getting-started">
                Goto Extension
          </Link>
        </div>
      </div>
    </Layout>
  );
}
