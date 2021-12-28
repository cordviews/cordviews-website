const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Cordviews',
  tagline: 'Cordviews is a Discord platform for users of Discord to find a server to join with trusted reviews, and trusted feedback for server admins.',
  url: 'https://www.cordviews.tk',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',
  organizationName: 'cordviews',
  projectName: 'cordviews-website',
  themeConfig: {
    announcementBar: {
      id: 'announcementBar',
      content:
        "<div><strong>Cordviews development has been temporarily paused. There is no current ETA on when it will be resumed.</strong></div>",
      backgroundColor: '#fecaca',
      textColor: '#dc2626',
      isCloseable: false,
    },
    navbar: {
      title: 'Cordviews',
      logo: {
        alt: 'Cordviews Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Docs',
        },
        {
          to: '/guide/getting-started',
          position: 'left',
          label: 'Guide',
        },
        {
          to: '/blog',
          label: 'Blog',
          position: 'left'
        },
        {
          to: '/ban-appeal',
          label: 'Ban Appeal',
          position: 'left',
        },
        {
          href: '/invite',
          target: '_blank',
          label: 'Invite',
          position: 'right',
        },
        {
          href: '/discord',
          target: '_blank',
          label: 'Discord',
          position: 'right',
        },
        {
          href: 'https://github.com/cordviews/cordviews',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'Bot GitHub Repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Website',
          items: [
            {
              label: 'Documentation',
              to: '/docs/intro',
            },
            {
              label: 'Guide',
              to: '/guide/getting-started',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://cordviews.tk/discord',
            },
            {
              html: `
                <a href="https://www.netlify.com" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">
                  <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg" alt="Deploys by Netlify" />
                </a>
              `,
            },
          ],
        },
        {
          title: 'Developement',
          items: [
            {
              label: 'Bot GitHub',
              href: 'https://github.com/cordviews/cordviews'
            },
            {
              label: 'Website GitHub',
              href: 'https://github.com/cordviews/cordviews-website',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Cordviews`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/cordviews/cordviews-website/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'guide',
        path: 'guide',
        routeBasePath: 'guide',
        sidebarPath: require.resolve('./guide-sidebars.js'),
        editUrl:
          'https://github.com/cordviews/cordviews-website/edit/main/',
      },
    ],
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
      },
    ],
  ],
  scripts: [
    {
      src: 'https://arc.io/widget.min.js#dPFzDXgZ',
      async: true,
    },
  ],
};
