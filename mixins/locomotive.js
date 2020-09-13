/* eslint-disable no-unused-vars */
import _ from 'lodash'
const OFFSET = 350

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
            // smoothMobile: true,
          })
          window.addEventListener(
            'resize',
            _.debounce(this.onLmsResize.bind(this), 150)
          )
        }.bind(this)
      )
    },
    onLmsResize() {
      setTimeout(() => {
        this.lmS.update()
      }, 100)
      // this.lmS.scrollTo('top', 0, 0)
    },
  },
}
