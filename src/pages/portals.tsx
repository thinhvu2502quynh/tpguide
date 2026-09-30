import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useLocation} from '@docusaurus/router';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import type {ReactNode} from 'react';
import {guideGroups} from '@site/src/components/guideCatalog';
import {ChapterLinks} from '@site/src/components/ChapterLinks';

function Icon({name}: {name: 'home' | 'tpcloud' | 'baas' | 'cloudconnect'}) {
  const common = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  };
  if (name === 'home') {
    return (
      <svg {...common}>
        <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
        <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      </svg>
    );
  }
  if (name === 'baas') {
    return (
      <svg {...common}>
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 12a9 3 0 0 0 5 2.69" />
        <path d="M21 9.3V5" />
        <path d="M3 5v14a9 3 0 0 0 6.47 2.88" />
        <path d="M12 12v4h4" />
        <path d="M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16" />
      </svg>
    );
  }
  if (name === 'cloudconnect') {
    return (
      <svg {...common}>
        <path d="M12 13v8" />
        <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
        <path d="m8 17 4-4 4 4" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  );
}

function ProductMenu({en}: {en: boolean}): ReactNode {
  const {pathname} = useLocation();
  const home = pathname === '/home' || pathname === '/en/home' || pathname === '/en';
  return (
    <nav className="tpg-side">
      <Link className={home ? 'tpg-side-link active' : 'tpg-side-link'} to="/home">
        <Icon name="home" />
        <span>{en ? 'Home' : 'Trang chủ'}</span>
      </Link>
      <p>{en ? 'Guides' : 'Hướng dẫn'}</p>
      {guideGroups.map((group) => (
        <details key={group.id} className="tpg-side-drop">
          <summary className="tpg-side-link">
            <Icon name={group.id} />
            <span>{group.title}</span>
            <span className="tpg-chevron" aria-hidden="true" />
          </summary>
          <ChapterLinks
            pathname={pathname}
            chapters={group.chapters.map((chapter) => ({
              href: chapter.href,
              label: en ? chapter.en : chapter.vi,
            }))}
          />
        </details>
      ))}
    </nav>
  );
}

export default function PortalsPage(): ReactNode {
  const {i18n} = useDocusaurusContext();
  const {pathname} = useLocation();
  const en = i18n.currentLocale === 'en';

  return (
    <Layout
      title={en ? 'Home' : 'Trang chủ'}
      description={
        en
          ? 'User guides for TPCOMS portals.'
          : 'Tài liệu hướng dẫn sử dụng các portal của TPCOMS.'
      }>
      <div className="tpg-shell">
        <ProductMenu en={en} />
        <main className="tpg-home">
        <Heading as="h1">TPGUIDE</Heading>
        <p className="tpg-lead">
          {en
            ? 'User guides for TPCOMS portals. Choose a product below, then follow the chapters.'
            : 'Tài liệu hướng dẫn sử dụng các portal của TPCOMS. Chọn đúng sản phẩm bên dưới, rồi làm theo hướng dẫn.'}
        </p>
        <Heading as="h2">{en ? 'Guides' : 'Hướng dẫn'}</Heading>
        <div className="tpg-cards">
          {guideGroups.map((group) => (
            <details key={group.id} id={group.id} className="tpg-card tpg-drop">
              <summary>
                <span className="tpg-card-icon">
                  <Icon name={group.id} />
                </span>
                <span className="tpg-card-body">
                  <span className="tpg-card-title">
                    <strong>{group.title}</strong>
                    <span className="tpg-chevron" aria-hidden="true" />
                  </span>
                  <span>{en ? group.en : group.vi}</span>
                </span>
              </summary>
              <ChapterLinks
                pathname={pathname}
                chapters={group.chapters.map((chapter) => ({
                  href: chapter.href,
                  label: en ? chapter.en : chapter.vi,
                }))}
              />
            </details>
          ))}
        </div>
      </main>
      </div>
    </Layout>
  );
}
