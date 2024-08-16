import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run barbi:serve',
        production: 'nx run barbi:preview',
      },
      ciWebServerCommand: 'nx run barbi:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
