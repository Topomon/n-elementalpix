import Vue from 'vue'
import locomotiveScroll from 'locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.min.css'

Object.defineProperty(Vue.prototype, 'locomotiveScroll', {
  value: locomotiveScroll,
})
// https://github.com/locomotivemtl/locomotive-scroll/issues/15#issuecomment-553067908
