import React from 'react';
import Layout from '@theme/Layout';

export default function MyCustomPage() {
  return (
    <Layout 
      title="Custom Layout" 
      description="This is a custom layout page"
    >
      <main className="container margin-vert--xl">
        <div className="row">
          {/* Main Sidebar */}
          <div className="col col--3">
            <div className="card padding--md">
              <h3>Sidebar</h3>
            </div>
          </div>
          {/* Main Content Area */}
          <div className="col col--9">
            <h1>My Custom Page</h1>
            <p>This is a 2-column grid layout using Infima CSS.</p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
