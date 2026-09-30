import React, {type ReactNode} from 'react';
import CodeBlock from '@theme/CodeBlock';
import CodeInline from '@theme/CodeInline';

function shouldBeInline(props: {children?: ReactNode}) {
  return (
    typeof props.children !== 'undefined' &&
    React.Children.toArray(props.children).every((el) => typeof el === 'string' && !el.includes('\n'))
  );
}

function DocUrl({href}: {href: string}) {
  return (
    <a className="doc-ext-link" href={href} target="_blank" rel="noopener noreferrer">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
      <span>{href}</span>
    </a>
  );
}

export default function MDXCode(props: {children?: ReactNode}): ReactNode {
  if (!shouldBeInline(props)) {
    return <CodeBlock {...props} />;
  }
  const text = React.Children.toArray(props.children).join('').trim();
  if (/^https?:\/\//i.test(text)) {
    return <DocUrl href={text} />;
  }
  return <CodeInline {...props} />;
}
