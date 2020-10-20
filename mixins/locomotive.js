const debounce = require('lodash/debounce')

export default {
  mounted() {
    this.mixinCreateLMS()
  },
  destroyed() {
    this.lmS.destroy()
    window.removeEventListener('resize', this.mixinLmsUpdate)
    window.removeEventListener('keydown', this.mixinOnLmsKeydown)
  },
  methods: {
    mixinCreateLMS() {
      this.$nextTick(
        function () {
          this.lmS = new this.LocomotiveScroll({
            el: document.querySelector('#js-scroll'),
            smooth: true /* if false disable overflow: hidden on html, body */,
            lerp: 0.07,
            multiplier: 0.5, // more steps to scroll
          })
          window.addEventListener(
            'resize',
            debounce(this.mixinLmsUpdate.bind(this), 150)
          )
          window.addEventListener(
            'keydown',
            debounce(this.mixinOnLmsKeydown.bind(this), 10)
          )
          window.addEventListener('wheel', (e) => {
            this.lmS.scroll.stop = false // activate scrolling on wheel
          })
        }.bind(this)
      )
    },
    mixinLmsUpdate() {
      this.$nextTick(() => {
        this.lmS.update()
        window.removeEventListener('resize', this.mixinLmsUpdate)
      })
      // this.lmS.scrollTo('top', 0, 0)
    },
    mixinOnLmsKeydown() {
      this.$nextTick(() => {
        this.lmS.scroll.stop = true // deactivate scrolling on keypress
        window.removeEventListener('keydown', this.mixinOnLmsKeydown)
      })
    },
  },
}
