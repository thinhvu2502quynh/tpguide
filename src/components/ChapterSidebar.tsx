import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useLocation} from '@docusaurus/router';
import type {ReactNode} from 'react';
import {ChapterLinks} from '@site/src/components/ChapterLinks';
import {GuideMark} from '@site/src/components/GuideMark';

type SideItem = {
  type: string;
  label: string;
  href?: string;
  items?: SideItem[];
};

function collectLinks(item: SideItem): {label: string; href: string}[] {
  if (item.type === 'link' && item.href) {
    return [{label: item.label, href: item.href}];
  }
  return (item.items ?? []).flatMap(collectLinks);
}

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
      <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    </svg>
  );
}

export default function ChapterSidebar({
  sidebar,
  path,
  onNavigate,
}: {
  sidebar: SideItem[];
  path: string;
  onNavigate?: () => void;
}): ReactNode {
  const {i18n} = useDocusaurusContext();
  const en = i18n.currentLocale === 'en';
  const {pathname} = useLocation();
  const current = path || pathname;
  const groups = sidebar.filter((item) => item.type === 'category');

  return (
    <nav className="tpg-doc-side" onClick={onNavigate}>
      <Link className="tpg-side-link" to="/home">
        <HomeIcon />
        <span>{en ? 'Home' : 'Trang chủ'}</span>
      </Link>
      {groups.map((group) => {
        const chapters = collectLinks(group);
        const open = chapters.some((chapter) => chapter.href.replace(/\/$/, '') === current.replace(/\/$/, ''));
        return (
          <details key={group.label} className="tpg-side-drop" open={open}>
            <summary className="tpg-side-link">
              <GuideMark name={group.label} />
              <span>{group.label}</span>
              <span className="tpg-chevron" aria-hidden="true" />
            </summary>
            <ChapterLinks chapters={chapters} pathname={current} />
          </details>
        );
      })}
    </nav>
  );
}
