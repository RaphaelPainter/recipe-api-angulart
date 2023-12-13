import { angularOutputTarget } from '@stencil/angular-output-target';
import { Config } from '@stencil/core/internal';

export const config: Config = {
  namespace: 'stencil-library',
  outputTargets: [
    // By default, the generated proxy components will
    // leverage the output from the `dist` target, so we
    // need to explicitly define that output alongside the
    // Angular target
    {
      type: 'dist',
    },
    angularOutputTarget({
      componentCorePackage: 'stencil-library',
      outputType: 'component',
      directivesProxyFile: '../angular-workspace/projects/component-library3/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../angular-workspace/projects/component-library3/src/lib/stencil-generated/index.ts',
    }),
  ],
};