import { Lightning } from '@lightningjs/sdk'

export default class Wrapper extends Lightning.Component {
  static _template() {
    return {}
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

  _init() {
    this.hasMountedComponent = false
  }

  mount(type, properties) {
    if (this.hasMountedComponent) {
      throw new Error('Component already mounted, use unmount() first')
    }

    this.hasMountedComponent = true
    this.children = [{ type, ...properties }]
    this.component = this.children[0]
  }

  unmount() {
    this.hasMountedComponent = false
    this.children = []
  }

  _getFocused() {
    return this.children[0]
  }

  isVisible() {
    return this.component.visible
  }

  exists() {
    return !!this.component && this.component.__attached
  }

  find(ref) {
    return Wrapper.getTreeFlat(this.component).find(item => item.__ref === ref)
  }

  findAll(ref) {
    return Wrapper.getTreeFlat(this.component).filter(item => item.__ref === ref)
  }

  findComponent(type) {
    return Wrapper.getTreeFlat(this.component).find(item => !!item.type && item.type.name === type)
  }

  text() {
    return Wrapper.getTreeFlat(this.component)
      .map(item => (item.__texture && item.__texture._text) || '')
      .join(' ')
  }

  trigger(key) {
    this.component[`_handle${key}`]()
  }
}
