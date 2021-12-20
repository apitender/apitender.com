// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'APItender',
  tagline: 'Payments and User Management for API Businesses',
  url: 'https://apitender.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'apitender',
  projectName: 'apitender.com',

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/apitender/apitender.com/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/apitender/apitender.com/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'APItender Logo',
          src: 'img/logo.svg',
        },
        title: 'APItender',
        items: [
          { to: '/product', label: 'Product', position: 'right' },
          { to: '/use-cases', label: 'Use Cases', position: 'right' },
          { to: '/pricing', label: 'Pricing', position: 'right' },
          { to: '/sign-up', label: 'Sign Up', position: 'right', className: 'navlink--sign-up-button' },
        ],
      },
      footer: {
        style: 'dark',
        logo: {
          alt: 'APItender Logo',
          src: 'img/logo.svg',
        },
        links: [
          {
            title: 'APItender',
            items: [
              {
                label: 'Product',
                to: '/product',
              },
              {
                label: 'Use Cases',
                to: '/use-cases',
              },
              {
                label: 'Pricing',
                to: '/pricing',
              },
            ],
          },
          {
            title: 'Docs',
            items: [
              {
                label: 'Quick Start',
                to: '/docs/quickstart',
              },
              {
                label: 'Guides',
                to: '/docs/guides',
              },
            ],
          },
          {
            title: 'Policy',
            items: [
              {
                label: 'Privacy',
                to: '/privacy',
              },
              {
                label: 'Security',
                to: '/security',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Prime Factor LLC.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
