import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useAlternatePageUtils} from '@docusaurus/theme-common/internal';
import type {ReactNode} from 'react';

export default function LocaleSwitch(): ReactNode {
  const {i18n} = useDocusaurusContext();
  const alternatePageUtils = useAlternatePageUtils();
  const en = i18n.currentLocale === 'en';
  const to = (locale: 'vi' | 'en') =>
    `pathname://${alternatePageUtils.createUrl({locale, fullyQualified: false})}`;

  return (
    <div className="tpg-locale">
      <Link className={en ? undefined : 'active'} to={to('vi')}>
        VI
      </Link>
      <Link className={en ? 'active' : undefined} to={to('en')}>
        EN
      </Link>
    </div>
  );
}
