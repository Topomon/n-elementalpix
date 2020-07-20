<template>
  <div id="js-scroll" data-scroll data-scroll-speed="1" data-scroll-container>
    <Nuxt class="md:pl-16 md:pr-16 pl-8 pr-8" />
  </div>
</template>

<style lang="sass">
html
  overflow: hidden
body
  background-color: #111111
  ::selection
    color: #111111
    background: #a0aec0

@keyframes show-mouse
  0%
    opacity: 0.3
  100%
    opacity: 1

.show-mouse
  animation: show-mouse 2s
</style>
