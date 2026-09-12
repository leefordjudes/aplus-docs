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
        <div className='wrapper'>
          <p>docs Markdown section </p>
          <Link className="button button--secondary button--md"
                to="/extensions">
                Goto Extension
          </Link>
        </div>
        <div className='wrapper'>
          <p>pages Markdown section</p>
          <Link className="button button--secondary button--md"
                to="/services">
                Goto Services
          </Link>
        </div>
        <div className='wrapper'>
          <p>Goto home page</p>
          <Link className="button button--secondary button--md"
                to="/">
                Goto Home
          </Link>
        </div>
      </div>
    </Layout>
  );
}
