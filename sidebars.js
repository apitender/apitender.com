// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'overview',
    {
      type: 'category',
      label: 'Quick Start',
      items: [
        'quickstart/intro',
        'quickstart/step_1_get_api_keys',
        'quickstart/step_2_add_middleware_to_your_app',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/intro',
        'guides/guide_one',
        'guides/guide_two',
      ],
    },
  ]
};

module.exports = sidebars;
