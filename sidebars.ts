import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    'overview',
    {
      type: 'category',
      label: 'Workflow Management',
      items: [
        'workflow_management/cloud-computing',
        'workflow_management/curating-your-results',
        'workflow_management/genai-and-programming',
      ],
    },
    {
      type: 'category',
      label: 'LLMs in Research',
      items: [
        'llms_research/llm-core-concepts',
        'llms_research/llms-in-research',
        'llms_research/environmental-concerns',
      ],
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
