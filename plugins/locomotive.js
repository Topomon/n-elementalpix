import Vue from 'vue'
import locomotiveScroll from 'locomotive-scroll'
import '~/assets/css/locomotive-scroll.css'

Object.defineProperty(Vue.prototype, 'LocomotiveScroll', {
  value: locomotiveScroll,
})
// https://github.com/locomotivemtl/locomotive-scroll/issues/15#issuecomment-553067908
