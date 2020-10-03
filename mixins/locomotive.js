const debounce = require('lodash/debounce')

export default {
  mounted() {
    this.createLMS()
  },
  destroyed() {
    this.lmS.destroy()
    window.removeEventListener('resize', this.onLmsResize)
    window.removeEventListener('keydown', this.onLmsKeydown)
  },
  methods: {
    createLMS() {
      this.$nextTick(
        function () {
          this.lmS = new this.LocomotiveScroll({
            el: document.querySelector('#js-scroll'),
            smooth: true /* if false disable overflow: hidden on html, body */,
            lerp: 0.07,
            multiplier: 0.5,
          })
          window.addEventListener(
            'resize',
            debounce(this.onLmsResize.bind(this), 150)
          )
          window.addEventListener(
            'keydown',
            debounce(this.onLmsKeydown.bind(this), 10)
          )
          window.addEventListener('wheel', (e) => {
            this.lmS.scroll.stop = false
          })
        }.bind(this)
      )
    },
    onLmsResize() {
      this.$nextTick(() => {
        this.lmS.update()
        window.removeEventListener('resize', this.onLmsResize)
      })
      // this.lmS.scrollTo('top', 0, 0)
    },
    onLmsKeydown() {
      this.$nextTick(() => {
        // this.lmS.stop()
        // this.lmS.update()
        this.lmS.scroll.stop = true
        window.removeEventListener('keydown', this.onLmsKeydown)
      })
    },
  },
}
