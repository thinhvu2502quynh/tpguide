import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'TPGUIDE',
  tagline: 'Tài liệu hướng dẫn sử dụng các portal của TPCOMS.',
  favicon: 'img/favicon.svg',
  future: {
    v4: true,
  },
  url: 'http://localhost:3000',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  markdown: {
    format: 'detect',
  },
  i18n: {
    defaultLocale: 'vi',
    locales: ['vi', 'en'],
    localeConfigs: {
      vi: {label: 'VI', htmlLang: 'vi'},
      en: {label: 'EN', htmlLang: 'en'},
    },
  },
  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en'],
        indexBlog: false,
        docsRouteBasePath: '/docs',
        searchBarShortcut: false,
        searchBarShortcutHint: false,
      },
    ],
  ],
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'TPGUIDE',
      logo: {
        alt: 'TPGUIDE',
        src: 'img/favicon.svg',
        href: '/home',
      },
      items: [],
    },
    footer: {
      copyright: 'TPGUIDE · Bản quyền thuộc TPCOMS',
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
