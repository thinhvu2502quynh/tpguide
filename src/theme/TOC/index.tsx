import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import TOCItems from '@theme/TOCItems';
import type {Props} from '@theme/TOC';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const LINK_CLASS_NAME = 'table-of-contents__link toc-highlight';
const LINK_ACTIVE_CLASS_NAME = 'table-of-contents__link--active';

export default function TOC({className, ...props}: Props): ReactNode {
  const {i18n} = useDocusaurusContext();
  const title = i18n.currentLocale === 'en' ? 'On this page' : 'Trên trang này';
  return (
    <div className={clsx('tpg-toc thin-scrollbar', className)}>
      <div className="tpg-toc-title">{title}</div>
      <TOCItems
        {...props}
        linkClassName={LINK_CLASS_NAME}
        linkActiveClassName={LINK_ACTIVE_CLASS_NAME}
      />
    </div>
  );
}
