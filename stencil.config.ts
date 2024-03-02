import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-v4-sc-deep-nested-slot-reordering',
  extras: {
    experimentalSlotFixes: true,
    experimentalScopedSlotChanges: true,
  },
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    browserHeadless: 'new',
  },
};
