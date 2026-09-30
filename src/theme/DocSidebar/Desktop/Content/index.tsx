import React, {type ReactNode} from 'react';
import type {Props} from '@theme/DocSidebar/Desktop/Content';
import ChapterSidebar from '@site/src/components/ChapterSidebar';

export default function DocSidebarDesktopContent({path, sidebar}: Props): ReactNode {
  return <ChapterSidebar sidebar={sidebar} path={path} />;
}
