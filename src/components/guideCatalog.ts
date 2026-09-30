export type GuideChapter = {
  href: string;
  vi: string;
  en: string;
};

export type GuideGroup = {
  id: 'tpcloud' | 'baas' | 'cloudconnect';
  title: string;
  vi: string;
  en: string;
  chapters: GuideChapter[];
};

export const guideGroups: GuideGroup[] = [
  {
    id: 'tpcloud',
    title: 'TPCLOUD',
    vi: 'Hướng dẫn sử dụng Portal TPCLOUD: mạng, vApp, máy ảo, Edge Gateway, sao lưu và giám sát.',
    en: 'Guide to the TPCLOUD Portal: networking, vApps, virtual machines, Edge Gateway, backup and monitoring.',
    chapters: [
      {href: '/docs/tpcloud/muc-dich-tai-lieu', vi: 'Mục đích tài liệu', en: 'Document purpose'},
      {href: '/docs/tpcloud/kich-hoat-tai-khoan', vi: 'Kích hoạt tài khoản và MFA', en: 'Activate the account and MFA'},
      {href: '/docs/tpcloud/portal', vi: '1. Hướng dẫn sử dụng Portal TPCLOUD', en: '1. Using the TPCLOUD Portal'},
      {href: '/docs/tpcloud/vapp', vi: '2. Tạo và quản lý vApp', en: '2. Creating and managing vApps'},
      {href: '/docs/tpcloud/vm', vi: '3. Tạo và quản lý máy ảo', en: '3. Creating and managing VMs'},
      {href: '/docs/tpcloud/edge', vi: '4. Edge Gateway', en: '4. Edge Gateway'},
      {href: '/docs/tpcloud/dfw', vi: '5. Distributed Firewall', en: '5. Distributed Firewall'},
      {href: '/docs/tpcloud/admin', vi: '6. Quản lý User và Monitor', en: '6. Managing users and monitoring'},
      {href: '/docs/tpcloud/backup', vi: '7. Backup trên Portal Cloud', en: '7. Backup on the Cloud Portal'},
    ],
  },
  {
    id: 'baas',
    title: 'BaaS',
    vi: 'Hướng dẫn Backup as a Service: đăng nhập portal Veeam, dashboard, tạo backup job và restore VM.',
    en: 'Backup as a Service guide: sign in to the Veeam portal, dashboard, backup jobs and VM restore.',
    chapters: [
      {href: '/docs/baas/baas-muc-dich', vi: 'Mục đích tài liệu', en: 'Document purpose'},
      {href: '/docs/baas/baas-dang-nhap', vi: '1. Đăng nhập Portal BaaS', en: '1. Sign in to the BaaS Portal'},
      {href: '/docs/baas/baas-dashboard', vi: '2. Giao diện Dashboard', en: '2. Dashboard'},
      {href: '/docs/baas/baas-backup-job', vi: '3. Tạo backup job', en: '3. Create a backup job'},
      {href: '/docs/baas/baas-restore', vi: '4. Restore VM', en: '4. Restore a VM'},
    ],
  },
  {
    id: 'cloudconnect',
    title: 'CloudConnect',
    vi: 'Hướng dẫn Veeam Cloud Connect 2026: đăng nhập console, kết nối máy, backup policy, backup job, khôi phục và report.',
    en: 'Veeam Cloud Connect 2026 guide: sign in to the console, connect machines, backup policies, backup jobs, restore and reports.',
    chapters: [
      {href: '/docs/cloudconnect/cc-login', vi: '1. Đăng nhập Veeam Service Provider Console', en: '1. Sign in to the Veeam Service Provider Console'},
      {href: '/docs/cloudconnect/cc-connect', vi: '2. Kết nối máy chủ/máy trạm vào Portal', en: '2. Connect servers and workstations to the Portal'},
      {href: '/docs/cloudconnect/cc-policy', vi: '3. Tạo và quản lý Backup Policy', en: '3. Create and manage a Backup Policy'},
      {href: '/docs/cloudconnect/cc-job', vi: '4. Tạo và vận hành Backup Job', en: '4. Create and run a Backup Job'},
      {href: '/docs/cloudconnect/cc-restore', vi: '5. Khôi phục dữ liệu', en: '5. Restore data'},
      {href: '/docs/cloudconnect/cc-report', vi: '6. Cấu hình và sử dụng Report', en: '6. Configure and use reports'},
    ],
  },
];
