import Lightning from '@lightningjs/core';

class LightningApp extends Lightning.Component {
  constructor(options) {
    super(options);
  }
}

export const createLightningApp = options => new LightningApp(options);
