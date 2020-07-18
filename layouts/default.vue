<template>
  <div id="js-scroll" class="main-background">
    <div class="md:pl-16 md:pr-16 pl-8 pr-8 flex justify-end">
      <Navbar class="items-center flex h-32" />
    </div>
    <Nuxt class="md:pl-16 md:pr-16 pl-8 pr-8" />

    <cursor-fx
      class="show-mouse"
      :shape="'square'"
      :mix-blend-mode="'difference'"
      :outside-size="'50px'"
      :inside-size="'14px'"
      :color="'#ed8936'"
      :color-hover="'#a0aec0'"
      :config="{
        scale: {
          ratio: 0.18,
          min: 0.75,
          max: 1.25,
        },
        lerps: {
          dot: 0.15,
          circle: 0.08,
          custom: 0.23,
        },
      }"
    />
  </div>
</template>

<style lang="sass">
.main-background
  z-index: -1
  // background-color: #111111
body
  overflow: hidden
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
