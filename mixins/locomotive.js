/* eslint-disable no-unused-vars */
import _ from 'lodash'
// import imagesLoaded from 'imagesloaded'
import { store, mutations } from '~/store/store.js'
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
  beforeUpdate() {
    // console.log('locomotive mixin updated')
    this.lmS.update()
  },
  mounted() {
    // imagesLoaded('#js-scroll', () => {
    //   this.createLMS()
    // })
    // console.log('locomotive mixin mounted')
    // setTimeout(() => {
    //   this.createLMS()
    // }, 100)
    this.createLMS()
  },
  destroyed() {
    // console.log('locomotive scroll destroyed')
    this.lmS.destroy()
    window.removeEventListener(
      'resize',
      this.onLmsResize
      // console.log('destroyed')
    )
  },
  computed: {
    // isNavSmall() {
    //   return store.isNavSmall
    // },
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
          // this.lmS.on('scroll', _.throttle(this.onLmsScroll, 150))
          window.addEventListener(
            'resize',
            _.debounce(this.onLmsResize.bind(this), 150)
          )
        }.bind(this)
      )
    },
    // onLmsScroll(obj) {
    //   this.scrollPosition = obj.scroll.y
    //   console.log('scrollPosition + na', this.scrollPosition)
    //   if (this.scrollPosition < OFFSET) {
    //     if (this.isNavSmall) {
    //       // console.log('grow')
    //       mutations.growNav()
    //     }
    //   } else if (!this.isNavSmall) {
    //     // console.log('shrink')
    //     mutations.shrinkNav()
    //   }
    // },
    onLmsResize() {
      // console.log('updated LMS')
      setTimeout(() => {
        this.lmS.update()
      }, 100)
      // this.lmS.scrollTo('top', 0, 0)
    },
  },
}
