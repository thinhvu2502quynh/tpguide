import React, {type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import {useSidebarBreadcrumbs} from '@docusaurus/plugin-content-docs/client';
import DocBreadcrumbsStructuredData from '@theme/DocBreadcrumbs/StructuredData';

export default function DocBreadcrumbs(): ReactNode {
  const breadcrumbs = useSidebarBreadcrumbs();
  if (!breadcrumbs || breadcrumbs.length === 0) {
    return null;
  }
  const product = breadcrumbs.find((item) => item.type === 'category') ?? breadcrumbs[0];
  const current = breadcrumbs[breadcrumbs.length - 1];

  return (
    <>
      <DocBreadcrumbsStructuredData breadcrumbs={breadcrumbs} />
      <nav className="tpg-crumbs" aria-label="Breadcrumbs">
        {product.href ? <Link to={product.href}>{product.label}</Link> : <span>{product.label}</span>}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="m9 18 6-6-6-6" />
        </svg>
        <span className="current">{current.label}</span>
      </nav>
    </>
  );
}
