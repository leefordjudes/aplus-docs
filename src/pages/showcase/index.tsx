import type {ReactNode} from 'react';

import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

const TITLE = 'Auditplus ERP Extensions Showcase';
const DESCRIPTION = 'List of extensions available for Auditplus ERP. You can submit your extension to be listed here. Extensions are paid or free, and can be installed from the Auditplus ERP Marketplace.';
const SUBMIT_URL = 'https://www.auditplus.io/extensions/submit';

function ShowcaseHeader() {
  return (
    <section className="margin-top--lg margin-bottom--lg text--center">
      <Heading as="h1">{TITLE}</Heading>
      <div className="margin-bottom--lg">
        <p style={{maxWidth: '40%', margin: '0 auto' }}>{DESCRIPTION}</p>
      </div>
      <Link className="button button--primary" to={SUBMIT_URL}>
          🙏 Please add your Extensions
      </Link>
    </section>
  );
}

export default function Showcase(): ReactNode {
  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <main className="margin-vert--lg">
        <ShowcaseHeader />
        <h4>ShowcaseFilters</h4>
        <div
          style={{display: 'flex', marginLeft: 'auto'}}
          className="container">
          <h4>ShowcaseSearchBar</h4>
        </div>
        <h4>ShowcaseCards</h4>
      </main>
    </Layout>
  );
}