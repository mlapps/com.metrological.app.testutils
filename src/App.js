import { Lightning } from '@lightningjs/sdk'
import Wrapper from './components/Wrapper'
import Example from './components/Example'

export default class App extends Lightning.Component {
  static _template() {
    return {
      Wrapper: {
        type: Wrapper,
      },
    }
  }

  _init() {
    const wrapper = this.tag('Wrapper')

    wrapper.mount(Example)
    wrapper.unmount()
    wrapper.mount(Example)
    wrapper.trigger('Up')
    wrapper.trigger('Down')
    wrapper.trigger('Left')
    wrapper.trigger('Right')
    console.log('exists:', wrapper.exists())
    console.log('visible:', wrapper.isVisible())
    console.log(wrapper.find('Another'))
    console.log(wrapper.findAll('Another'))
    console.log(wrapper.findComponent('Another'))
    console.log(wrapper.text())
  }

  _getFocused() {
    return this.tag('Wrapper')
  }
}
