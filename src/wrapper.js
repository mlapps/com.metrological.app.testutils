import { createLightningApp } from './create-lightning-app';

export default class Wrapper {
  constructor({ application, component, properties }) {
    this.testApp = application || createLightningApp({
      stage: {
        w: 1920,
        h: 1080,
        useImageWorker: false,
        canvas2d: true
      },
    });

    this.testApp.children = [{ type: component, ...properties }]
    this.component = this.testApp.children[0];
  }

  static getTreeFlat(component) {
    return [
      component,
      ...component.__childList._items.reduce(
        (previous, current) => [...previous, ...Wrapper.getTreeFlat(current)],
        []
      ),
    ]
  }

  isVisible() {
    return this.component.visible;
  }

  exists() {
    return !!this.component && this.component.__attached;
  }

  find(ref) {
    return new Wrapper({
      component: Wrapper.getTreeFlat(this.component).find(item => item.__ref === ref)
    });
  }

  findAll(ref) {
    return Wrapper.getTreeFlat(this.component).filter(item => item.__ref === ref).map(component => new Wrapper({
      component,
    }));
  }

  findComponent(type) {
    return new Wrapper({
      component: Wrapper.getTreeFlat(this.component).find(item => !!item.type && item.type.name === type),
    });
  }

  text() {
    return Wrapper.getTreeFlat(this.component)
      .map(item => (item.__texture && item.__texture._text) || '')
      .join(' ');
  }

  trigger(key) {
    this.component[`_handle${key}`]();
  }
}
