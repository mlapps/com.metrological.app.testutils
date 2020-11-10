import { Lightning, Utils } from '@lightningjs/sdk'
import Another from './Another'

export default class Example extends Lightning.Component {
  static _template() {
    return {
      Background: {
        w: 1920,
        h: 1080,
        color: 0xfffbb03b,
        src: Utils.asset('images/background.png'),
      },
      Logo: {
        mountX: 0.5,
        mountY: 1,
        x: 960,
        y: 600,
        src: Utils.asset('images/logo.png'),
      },
      Text: {
        mount: 0.5,
        x: 960,
        y: 720,
        text: {
          text: 'Some example component',
          fontFace: 'Regular',
          fontSize: 64,
          textColor: 0xbbffffff,
        },
      },
      Another: {
        type: Another,
      },
    }
  }

  _handleUp() {
    console.log('handle up')
  }

  _handleDown() {
    console.log('handle down')
  }

  _handleLeft() {
    console.log('handle left')
  }

  _handleRight() {
    console.log('handle right')
  }

  _handleEnter() {
    console.log('handle enter')
  }
}
