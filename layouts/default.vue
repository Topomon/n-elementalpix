<template>
  <div id="js-scroll" data-scroll data-scroll-container>
    <Nuxt />
  </div>
</template>

<style lang="sass">
html
  cursor: none

@media (min-width: 1024px)
  html
    overflow: hidden

a
  cursor: none

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
