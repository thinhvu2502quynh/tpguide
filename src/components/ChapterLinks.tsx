import Link from '@docusaurus/Link';
import type {ReactNode} from 'react';

export function parseChapterTitle(title: string): {num?: string; text: string} {
  const match = title.match(/^(\d+\.?)\s+(.*)$/);
  if (!match) return {text: title};
  return {num: match[1], text: match[2]};
}

function InfoIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}

export function ChapterLinks({
  chapters,
  pathname,
}: {
  chapters: {href: string; label: string}[];
  pathname?: string;
}): ReactNode {
  const current = (pathname ?? '').replace(/\/$/, '');
  return (
    <div className="tpg-chapter-list">
      {chapters.map((chapter) => {
        const {num, text} = parseChapterTitle(chapter.label);
        const selected = current === chapter.href.replace(/\/$/, '');
        return (
          <Link
            key={chapter.href}
            className={selected ? 'tpg-chapter-link active' : 'tpg-chapter-link'}
            to={chapter.href}>
            {num ? <span className="num">{num}</span> : <InfoIcon />}
            <span>{text}</span>
          </Link>
        );
      })}
    </div>
  );
}
