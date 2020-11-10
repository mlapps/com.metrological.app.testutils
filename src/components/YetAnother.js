import { Lightning, Utils } from '@lightningjs/sdk'

export default class YetAnother extends Lightning.Component {
  static _template() {
    return {
      Text: {
        mount: 0.5,
        x: 960,
        y: 920,
        text: {
          text: 'Yet another component',
          fontFace: 'Regular',
          fontSize: 64,
          textColor: 0xbbffffff,
        },
      },
    }
  }
}
