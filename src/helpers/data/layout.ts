const preRouter = "";

const PUBLIC_ROUTES = {
  HOME: `${preRouter}/`,
  ITEMS1: `${preRouter}/items1`,
  ITEMS2: `${preRouter}/items2`,
  ITEMS3: `${preRouter}/items3`,
  ITEMS4: `${preRouter}/items4`,
};

const headerMenus = [
  {
    key: "home",
    label: "home",
    href: PUBLIC_ROUTES?.HOME,
  },
  {
    key: "items1",
    label: "items1",
    href: PUBLIC_ROUTES?.ITEMS1,
  },
  {
    key: "items2",
    label: "items2",
    href: PUBLIC_ROUTES?.ITEMS2,
  },
  {
    key: "items3",
    label: "items3",
    href: PUBLIC_ROUTES?.ITEMS3,
  },
  {
    key: "items4",
    label: "items4",
    href: PUBLIC_ROUTES?.ITEMS4,
  },
];

const footerMenus = [
  {
    key: "about-us",
    label: "About Us",
    children: [
      {
        key: "careers",
        label: "Careers",
      },
      {
        key: "company-details",
        label: "Company Details",
      },
      {
        key: "terms-and-conditions",
        label: "Terms & Conditions",
      },
      {
        key: "help-center",
        label: "Help Center",
      },
      {
        key: "privacy-policy",
        label: "Privacy Policy",
      },
      {
        key: "affiliate",
        label: "Affiliate",
      },
    ],
  },
  {
    key: "products",
    label: "Products",
    children: [
      {
        key: "nft-marketplace",
        label: "NFT Marketplace",
      },
      {
        key: "slingshot",
        label: "Slingshot",
      },
      {
        key: "swaps",
        label: "Swaps",
      },
      {
        key: "nft-launchpad",
        label: "NFT Launchpad",
      },
      {
        key: "runes-platform",
        label: "Runes Platform",
      },
      {
        key: "creator-dashboard",
        label: "Creator Dashboard",
      },
    ],
  },
  {
    key: "resources",
    label: "Resources",
    children: [
      {
        key: "support",
        label: "Support",
      },
      {
        key: "api",
        label: "API",
      },
      {
        key: "features-requests",
        label: "Features Requests",
      },
      {
        key: "trust-and-safety",
        label: "Trust & Safety",
      },
      {
        key: "sitemap",
        label: "Sitemap",
      },
    ],
  },
  {
    key: "contact-us",
    label: "Contact Us",
    children: [
      {
        key: "email-1",
        label: "support@tech.com",
      },
      {
        key: "email-2",
        label: "affiliate@tech.com",
      },
    ],
  },
];

export { headerMenus, footerMenus, PUBLIC_ROUTES };
