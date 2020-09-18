/* eslint-disable no-unused-vars */
// import _ from 'lodash'
const debounce = require('lodash/debounce')

export default {
  data() {
    return {
      scrollPosition: 0,
    }
  },
  // watch: {
  //   $route() {
  //     console.log('route changed: ', this.$route)
  //     this.lmS.update()
  //   },
  // },
  mounted() {
    // setTimeout(() => {
    //   this.createLMS()
    // }, 100)
    this.createLMS()
  },
  destroyed() {
    this.lmS.destroy()
    window.removeEventListener(
      'resize',
      this.onLmsResize
      // console.log('destroyed')
    )
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
            // smoothMobile: true,
          })
          window.addEventListener(
            'resize',
            debounce(this.onLmsResize.bind(this), 150)
          )
        }.bind(this)
      )
    },
    onLmsResize() {
      setTimeout(() => {
        this.lmS.update()
        window.removeEventListener('resize', this.onLmsResize)
      }, 100)
      // this.lmS.scrollTo('top', 0, 0)
    },
  },
}
