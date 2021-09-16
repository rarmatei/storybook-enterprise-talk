
import { formatFiles, installPackagesTask, Tree } from '@nrwl/devkit';
import { libraryGenerator, storybookConfigurationGenerator } from '@nrwl/react';
import { Linter } from '@nrwl/linter';

export default async function (host: Tree, schema: any) {
  await libraryGenerator(host, {
    name: `ui-${schema.name}`,
    style: 'css',
    skipFormat: false,
    skipTsConfig: false,
    unitTestRunner: 'jest',
    linter: Linter.EsLint,
    directory: schema.directory,
    component: true,
    tags: `scope:${schema.directory},type:ui`,
  });
  await storybookConfigurationGenerator(host, {
    name: `${schema.directory}-ui-${schema.name}`,
    configureCypress: true,
    generateStories: true,
    generateCypressSpecs: true,
  });
  await formatFiles(host);
}
