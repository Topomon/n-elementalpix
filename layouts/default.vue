<template>
  <div id="js-scroll">
    <Nuxt />
  </div>
</template>

<script>
// import locomotive from '~/mixins/locomotive.js'

// export default {
//   mixins: [locomotive],

// }
</script>

<style lang="sass">
@keyframes appear
  0%
    opacity: 0
  30%
    opacity: 0
  100%
    opacity: 1

.appear
  animation: appear 2s forwards

html
  cursor: default

@media (min-width: 1024px)
  html
    overflow: hidden

a
  cursor: pointer

body
  overflow: hidden
  margin: 0
  padding: 0
  ::selection
    color: #111111
    background: #a0aec0

// @keyframes show-mouse
//   0%
//     opacity: 0.3
//   100%
//     opacity: 1

// .show-mouse
//   animation: show-mouse 2s
</style>
