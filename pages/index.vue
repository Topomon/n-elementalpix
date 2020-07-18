<template>
  <div class="custom-height flex items-center">
    <div
      class="font-serif text-2xl sm:text-2xl md:text-4xl lg:text-6xl text-gray-500 font-light container mx-auto p-3 normalize-position"
    >
      <p>elemental<span class="font-bold pix text-orange-500"> px</span></p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="sass" scoped>
.normalize-position
  transform: translateY(-64px)
.custom-height
  height: calc(100vh - 128px)
.pix
  &::after
    content: ''
    position: absolute
    margin-top: 8px
    border-radius: 1px
    height: 3px
    width: 3px
    background-color: #ed8936

@media (min-width: 640px)
  .pix
    &::after
      content: ''
      position: absolute
      margin-top: 8px
      border-radius: 1px
      height: 4px
      width: 4px
      background-color: #ed8936

@media (min-width: 768px)
  .pix
    &::after
      content: ''
      position: absolute
      margin-top: 13px
      border-radius: 1px
      height: 6px
      width: 6px
      background-color: #ed8936

@media (min-width: 1024px)
  .pix
    &::after
      content: ''
      position: absolute
      margin-top: 26px
      border-radius: 2px
      height: 10px
      width: 10px
      background-color: #ed8936

@media (min-width: 1280px)
  .pix
    &::after
      content: ''
      position: absolute
      margin-top: 26px
      border-radius: 2px
      height: 10px
      width: 10px
      background-color: #ed8936
</style>
