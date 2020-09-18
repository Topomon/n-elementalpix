<template>
  <div id="js-scroll">
    <Nuxt />
  </div>
</template>

<script></script>

<style lang="sass">
*
  -webkit-tap-highlight-color: rgba(0,0,0,0)
  -webkit-tap-highlight-color: transparent

@keyframes appear
  0%
    opacity: 0
  30%
    opacity: 0
  100%
    opacity: 1

.appear
  animation: appear 2s forwards

@keyframes enter-up
  0%
    opacity: 0
  30%
    opacity: 0
  100%
    opacity: 1
    transform: translateY(0px)

.enter-up
  transform: translateY(50px)
  animation: enter-up 2s forwards

.second-enter-up
  opacity: 0
  transform: translateY(50px)
  animation: enter-up 2s 0.5s forwards

html
  cursor: default
@media (hover: none) and (pointer:coarse)
  html, body
    overflow: scroll!important

@media (min-width: 1024px)
  html
    overflow: hidden

@media (max-width: 1023px)
  html, body
    overflow: hidden
a
  cursor: pointer

body
  overflow: auto
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
