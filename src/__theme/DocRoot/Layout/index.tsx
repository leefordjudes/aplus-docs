import React, {type ReactNode, useState} from 'react';
import {useDocsSidebar} from '@docusaurus/plugin-content-docs/client';
import {useLocation} from '@docusaurus/router';
import BackToTopButton from '@theme/BackToTopButton';
import DocRootLayoutSidebar from '@theme/DocRoot/Layout/Sidebar';
import DocRootLayoutMain from '@theme/DocRoot/Layout/Main';
import type {Props} from '@theme/DocRoot/Layout';

export default function DocRootLayout({children}: Props): ReactNode {
  const sidebar = useDocsSidebar();
  const {pathname} = useLocation();
  const [hiddenSidebarContainer, setHiddenSidebarContainer] = useState(false);
  const hideSidebar = pathname.replace(/\/$/, '').endsWith('/mydoc');
  const showSidebar = sidebar && !hideSidebar;

  console.log('DocRootLayout: pathname=', pathname, ' hideSidebar=', hideSidebar, ' showSidebar=', showSidebar);

  return (
    <div className="docsWrapper">
      <BackToTopButton />
      <div className="docRoot">
        {showSidebar && (
          <DocRootLayoutSidebar
            sidebar={sidebar.items}
            hiddenSidebarContainer={hiddenSidebarContainer}
            setHiddenSidebarContainer={setHiddenSidebarContainer}
          />
        )}
        <DocRootLayoutMain
          hiddenSidebarContainer={hiddenSidebarContainer || hideSidebar}>
          {children}
        </DocRootLayoutMain>
      </div>
    </div>
  );
}