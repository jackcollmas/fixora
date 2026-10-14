export const SERVER_STATUSES = [
  { id: 1, name: 'Xiaomi Mi Auth Server (Global)', status: 'online', latency: '42ms', load: '18%' },
  { id: 2, name: 'Samsung FRP USB Direct (All Android)', status: 'online', latency: '35ms', load: '45%' },
  { id: 3, name: 'Apple Carrier & iCloud Check API', status: 'online', latency: '120ms', load: '32%' },
  { id: 4, name: 'Motorola Fastboot Tool Auth', status: 'online', latency: '75ms', load: '12%' },
  { id: 5, name: 'Infinix / Tecno MDM Bypass Hub', status: 'busy', latency: '190ms', load: '88%' },
  { id: 6, name: 'MTN & Airtel MiFi Unlock Server', status: 'online', latency: '65ms', load: '24%' },
  { id: 7, name: 'Oppo / Realme Qualcomm EDL Auth', status: 'online', latency: '54ms', load: '39%' },
  { id: 8, name: 'Huawei Chimera / Sigma Remote Link', status: 'online', latency: '82ms', load: '15%' }
];

export const GSM_SERVICES = [
  {
    id: 'srv-xiaomi-auth',
    category: 'Xiaomi / Redmi',
    name: 'Xiaomi Authorized Mi Flashing (Global / China)',
    description: 'Instant remote EDL authorization for Qualcomm Snapdragon & MediaTek HyperOS / MIUI devices.',
    priceUSD: 14.99,
    estimatedTime: '2 - 10 Minutes',
    status: 'Instant Online',
    popular: true,
    supportedModels: ['Redmi Note 13 / 14 Series', 'Xiaomi 13 / 14 / 15', 'Poco X5 / X6 / F6', 'Redmi K60 / K70'],
    requirements: ['Windows PC with TeamViewer or AnyDesk', 'Fastboot to EDL cable or TestPoint access', 'Stable Internet']
  },
  {
    id: 'srv-samsung-frp',
    category: 'Samsung',
    name: 'Samsung FRP Remote Removal (Android 11 - 15 / OneUI 6-7)',
    description: 'One-click remote FRP unlock via USB Direct tool. No knox trip, works on latest 2026 security patches.',
    priceUSD: 8.50,
    estimatedTime: '3 - 5 Minutes',
    status: 'Instant Online',
    popular: true,
    supportedModels: ['Galaxy S24 / S23 / S22 / S21', 'Galaxy A55 / A35 / A15 / A05s', 'Galaxy Z Fold/Flip 5 & 6', 'Tab S9 / S8 series'],
    requirements: ['Original Type-C Cable', 'Normal USB Port on PC', 'Device in normal setup or emergency call mode']
  },
  {
    id: 'srv-apple-check',
    category: 'Apple / iPhone',
    name: 'Apple Full GSX & Carrier / iCloud FMI Status Check',
    description: 'Full official GSX carrier lock report, MDM status, Sold-by information, and iCloud Clean/Lost audit.',
    priceUSD: 2.20,
    estimatedTime: '1 - 3 Minutes',
    status: 'Automated Instant',
    popular: false,
    supportedModels: ['iPhone 6s to iPhone 16 Pro Max', 'All iPad & Apple Watch series'],
    requirements: ['15-digit IMEI or Serial Number']
  },
  {
    id: 'srv-apple-carrier-unlock',
    category: 'Apple / iPhone',
    name: 'Apple Carrier Factory Unlock (AT&T, T-Mobile, Verizon)',
    description: 'Permanent official IMEI factory unlock via Apple activation database. Clean IMEI only.',
    priceUSD: 34.00,
    estimatedTime: '24 - 48 Hours',
    status: 'Online',
    popular: true,
    supportedModels: ['iPhone 12 through iPhone 16 Pro Max'],
    requirements: ['Clean IMEI (No blacklist / unpaid balance)']
  },
  {
    id: 'srv-transsion-mdm',
    category: 'Transsion (Tecno/Infinix)',
    name: 'Infinix & Tecno MDM / PayJoy / PalmPay Removal',
    description: 'Permanent company loan app MDM unlock without re-locking on factory reset or system updates.',
    priceUSD: 11.00,
    estimatedTime: '5 - 15 Minutes',
    status: 'Online',
    popular: false,
    supportedModels: ['Tecno Camon 20/30, Spark 10/20', 'Infinix Hot 30/40, Note 30/40', 'Itel S23/P55'],
    requirements: ['MTK USB VCOM Drivers installed', 'TestPoint or BROM key combination']
  },
  {
    id: 'srv-moto-frp',
    category: 'Motorola',
    name: 'Motorola FRP Key Bypass (Fastboot Server Tool)',
    description: 'Direct key calculation and remote factory reset protection bypass for all Snapdragon & Unisoc Moto devices.',
    priceUSD: 6.90,
    estimatedTime: '5 - 10 Minutes',
    status: 'Instant Online',
    popular: false,
    supportedModels: ['Moto G Power, Stylus, Edge 30/40/50', 'Razr 40 / 50 Ultra', 'ThinkPhone'],
    requirements: ['Device connected in Fastboot mode']
  },
  {
    id: 'srv-mifi-unlock',
    category: 'Modems & Routers',
    name: 'Universal 4G/5G MiFi Router Network Unlock',
    description: 'Unlock MTN, Airtel, Glo, Spectranet, and Huawei/ZTE portable hotspot modems for all networks.',
    priceUSD: 4.50,
    estimatedTime: '5 Minutes',
    status: 'Instant Online',
    popular: false,
    supportedModels: ['MTN M022, M028T, MF927U', 'Airtel OLAX, MF910', 'ZTE & Huawei pocket WiFi'],
    requirements: ['Direct USB connection to Windows PC']
  }
];

export const FIRMWARE_DATABASE = [
  {
    id: 'fw-1',
    brand: 'Samsung',
    model: 'Galaxy S24 Ultra (SM-S928B)',
    region: 'Global / Multi-CSC (OXM)',
    androidVersion: 'Android 15 (OneUI 7.0)',
    buildNumber: 'S928BXXU3BXK2',
    securityPatch: 'March 2026',
    fileSize: '8.4 GB',
    downloadCount: 4210,
    verified: true,
    fileType: 'Official 4-File Repair Firmware (BL, AP, CP, CSC)'
  },
  {
    id: 'fw-2',
    brand: 'Xiaomi',
    model: 'Redmi Note 13 Pro+ 5G (zircon)',
    region: 'Global Stable (MI)',
    androidVersion: 'HyperOS 2.0 (Android 14)',
    buildNumber: 'OS2.0.4.0.UNOMIXM',
    securityPatch: 'February 2026',
    fileSize: '6.8 GB',
    downloadCount: 8940,
    verified: true,
    fileType: 'Fastboot TGZ Image (EDL / MiFlash Ready)'
  },
  {
    id: 'fw-3',
    brand: 'Tecno',
    model: 'Camon 30 Pro 5G (CL8)',
    region: 'Africa / Global',
    androidVersion: 'HiOS 14 (Android 14)',
    buildNumber: 'CL8-H932A-U-GL-250110V438',
    securityPatch: 'January 2026',
    fileSize: '5.2 GB',
    downloadCount: 3120,
    verified: true,
    fileType: 'Scatter Firmware + DA Agent / Preloader'
  },
  {
    id: 'fw-4',
    brand: 'Infinix',
    model: 'Note 40 Pro+ 5G (X6851B)',
    region: 'Global',
    androidVersion: 'XOS 14 (Android 14)',
    buildNumber: 'X6851B-H922B-U-GL-250212V104',
    securityPatch: 'February 2026',
    fileSize: '5.6 GB',
    downloadCount: 2890,
    verified: true,
    fileType: 'Official Factory Signed Scatter ROM'
  },
  {
    id: 'fw-5',
    brand: 'Samsung',
    model: 'Galaxy A55 5G (SM-A556E)',
    region: 'Multi-Region (INS/MID/EGY)',
    androidVersion: 'Android 14 (OneUI 6.1)',
    buildNumber: 'A556EXXS4AXK1',
    securityPatch: 'March 2026',
    fileSize: '6.9 GB',
    downloadCount: 6510,
    verified: true,
    fileType: 'Full 5-File Odin Firmware with Home CSC'
  },
  {
    id: 'fw-6',
    brand: 'Oppo',
    model: 'Reno 11 Pro 5G (CPH2607)',
    region: 'Global',
    androidVersion: 'ColorOS 14.1',
    buildNumber: 'CPH2607_14.0.1.720(EX01)',
    securityPatch: 'February 2026',
    fileSize: '7.1 GB',
    downloadCount: 1980,
    verified: true,
    fileType: 'OFP Official Flash File (EDL / MSM Tool)'
  },
  {
    id: 'fw-7',
    brand: 'Motorola',
    model: 'Moto Edge 50 Pro (XT2403-1)',
    region: 'Retail Global',
    androidVersion: 'Android 14',
    buildNumber: 'U1UC34.1-105-3',
    securityPatch: 'January 2026',
    fileSize: '4.8 GB',
    downloadCount: 1420,
    verified: true,
    fileType: 'Fastboot Flash XML Archive'
  },
  {
    id: 'fw-8',
    brand: 'Google',
    model: 'Pixel 9 Pro XL (komodo)',
    region: 'Global Factory Image',
    androidVersion: 'Android 15 QPR2',
    buildNumber: 'BP1A.250305.019',
    securityPatch: 'March 2026',
    fileSize: '3.4 GB',
    downloadCount: 5200,
    verified: true,
    fileType: 'Official Fastboot Factory Dump'
  }
];

export const DESKTOP_TOOLS = [
  {
    id: 'tool-1',
    name: 'Fixora GSM Assistant Pro v3.4',
    version: '3.4.2 (2026 Build)',
    size: '86 MB',
    category: 'Service Client',
    description: 'Lightweight desktop bridge for remote USB sharing, direct Samsung COM test mode port reading, and Fastboot automated flashing.',
    features: ['USB over Network Bridge', 'Auto driver installer (MTK, Qualcomm, SPD, Samsung)', 'Instant IMEI extraction', 'One-click reboot to EDL/Fastboot']
  },
  {
    id: 'tool-2',
    name: 'Qualcomm QDLoader & MTK VCOM All-in-One Drivers',
    version: '2026 Signed WHQL',
    size: '142 MB',
    category: 'Drivers',
    description: 'Signed Windows 10/11 64-bit driver suite required for EDL 9008, BROM, Preloader, and Fastboot operations without signature enforcement errors.',
    features: ['Qualcomm 9008 Driver', 'Mediatek CDC & DA VCOM', 'Spreadtrum / Unisoc SPD Driver', 'ADB & Fastboot Minimal Kit']
  },
  {
    id: 'tool-3',
    name: 'Fixora Mi Account & FRP Direct Bypass Tool',
    version: 'v2.1',
    size: '48 MB',
    category: 'FRP Tool',
    description: 'Companion utility to connect directly to the Fixora server API for automated token verification and instantaneous status monitoring.',
    features: ['Live Server Token Sync', 'Realtime log window', 'Device information audit', 'Safe backup before flash']
  }
];

export const AUTHORIZED_RESELLERS = [
  {
    id: 'res-1',
    name: 'Fixora GSM Hub Lagos',
    region: 'West Africa (Nigeria, Ghana)',
    contact: '+234 803 555 0192',
    telegram: '@fixoragsm_ng',
    paymentMethods: ['Bank Transfer (NGN)', 'USDT TRC20', 'Chipper Cash'],
    reputation: 'Verified Master Distributor',
    ordersCompleted: '14,200+'
  },
  {
    id: 'res-2',
    name: 'Alpha Tech GSM Dubai',
    region: 'Middle East & Asia',
    contact: '+971 50 123 4567',
    telegram: '@alphagsm_dxb',
    paymentMethods: ['Binance Pay', 'USDT ERC20', 'Bank Wire'],
    reputation: 'Premier Tier-1 Reseller',
    ordersCompleted: '28,900+'
  },
  {
    id: 'res-3',
    name: 'Fixora Europe Telecom Solutions',
    region: 'Europe & UK',
    contact: '+44 7700 900123',
    telegram: '@fixora_europe',
    paymentMethods: ['SEPA Transfer', 'Revolut', 'Crypto', 'PayPal'],
    reputation: 'Verified Official Agent',
    ordersCompleted: '9,450+'
  }
];
