import React, {type ReactNode} from 'react';
import {useColorMode} from '@docusaurus/theme-common';
import SearchBar from '@theme/SearchBar';
import NavbarMobileSidebarToggle from '@theme/Navbar/MobileSidebar/Toggle';
import NavbarLogo from '@theme/Navbar/Logo';
import LocaleSwitch from '@site/src/components/LocaleSwitch';
import {useNavbarMobileSidebar} from '@docusaurus/theme-common/internal';

function ThemeButton(): ReactNode {
  const {colorMode, setColorMode} = useColorMode();
  const dark = colorMode === 'dark';
  return (
    <button
      type="button"
      className="tpg-theme clean-btn"
      aria-label={dark ? 'Chuyển sang chế độ sáng' : 'Chuyển sang chế độ tối'}
      onClick={() => setColorMode(dark ? 'light' : 'dark')}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {dark ? (
          <>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
          </>
        ) : (
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        )}
      </svg>
    </button>
  );
}

export default function NavbarContent(): ReactNode {
  const mobileSidebar = useNavbarMobileSidebar();

  return (
    <div className="tpg-nav">
      <div className="tpg-nav-brand">
        {!mobileSidebar.disabled && <NavbarMobileSidebarToggle />}
        <NavbarLogo />
      </div>
      <div className="tpg-nav-center">
        <div className="tpg-nav-search">
          <SearchBar />
        </div>
      </div>
      <div className="tpg-nav-end">
        <LocaleSwitch />
        <ThemeButton />
      </div>
    </div>
  );
}
