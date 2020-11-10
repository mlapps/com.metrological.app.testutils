import { Lightning, Utils } from '@lightningjs/sdk'
import YetAnother from './YetAnother'

export default class Another extends Lightning.Component {
  static _template() {
    return {
      Text: {
        mount: 0.5,
        x: 960,
        y: 820,
        text: {
          text: 'Another component',
          fontFace: 'Regular',
          fontSize: 64,
          textColor: 0xbbffffff,
        },
      },
      Another: {
        type: YetAnother,
      },
    }
  }
}
