import React from 'react';
import {NavbarSecondaryMenuFiller, type NavbarSecondaryMenuComponent} from '@docusaurus/theme-common';
import {useNavbarMobileSidebar} from '@docusaurus/theme-common/internal';
import type {Props} from '@theme/DocSidebar/Mobile';
import ChapterSidebar from '@site/src/components/ChapterSidebar';

const DocSidebarMobileSecondaryMenu: NavbarSecondaryMenuComponent<Props> = ({sidebar, path}) => {
  const mobileSidebar = useNavbarMobileSidebar();
  return (
    <ChapterSidebar
      sidebar={sidebar}
      path={path}
      onNavigate={() => mobileSidebar.toggle()}
    />
  );
};

function DocSidebarMobile(props: Props) {
  return <NavbarSecondaryMenuFiller component={DocSidebarMobileSecondaryMenu} props={props} />;
}

export default React.memo(DocSidebarMobile);
