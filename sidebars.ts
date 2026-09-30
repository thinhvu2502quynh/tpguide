import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: 'TPCLOUD',
      collapsed: true,
      items: [
    "tpcloud/muc-dich-tai-lieu",
    "tpcloud/kich-hoat-tai-khoan",
    "tpcloud/portal",
    "tpcloud/vapp",
    "tpcloud/vm",
    "tpcloud/edge",
    "tpcloud/dfw",
    "tpcloud/admin",
    "tpcloud/backup",
      ],
    },
    {
      type: 'category',
      label: 'BaaS',
      collapsed: true,
      items: [
    "baas/baas-muc-dich",
    "baas/baas-dang-nhap",
    "baas/baas-dashboard",
    "baas/baas-backup-job",
    "baas/baas-restore",
      ],
    },
    {
      type: 'category',
      label: 'CloudConnect',
      collapsed: true,
      items: [
    "cloudconnect/cc-login",
    "cloudconnect/cc-connect",
    "cloudconnect/cc-policy",
    "cloudconnect/cc-job",
    "cloudconnect/cc-restore",
    "cloudconnect/cc-report",
      ],
    },
  ],
};

export default sidebars;
