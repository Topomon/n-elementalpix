<template>
  <div>
    <section
      data-scroll
      data-scroll-speed="1"
      data-scroll-section
      class="text-gray-500"
    >
      <div class="items-center flex h-32 md:pl-16 md:pr-16 pl-8 pr-8">
        <nuxt-link
          class="hover:text-gray-500 transition-colors duration-500 container mx-auto text-gray-700 text-sm font-bold flex justify-end"
          data-cursor-hover
          data-cursor-mix-blend-mode="difference"
          to="/acerca-de"
        >
          ACERCA DE
        </nuxt-link>
      </div>
      <div
        data-scroll
        data-scroll-speed="5"
        class="font-serif text-2xl sm:text-2xl md:text-4xl lg:text-6xl text-gray-500 font-light container mx-auto min-h-screen flex items-center"
      >
        <p>elemental<span class="font-bold pix text-orange-500"> px</span></p>
      </div>
      <div
        class="container mx-auto font-black p-4 md:p-16 lg:p-32 text-2xl md:text-4xl lg:text-6xl bg-gray-900"
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus
        esse repellendus fugiat molestias cupiditate cumque culpa necessitatibus
        velit animi deleniti! Reprehenderit sit maiores veritatis aliquam
        recusandae enim numquam eveniet nam!
      </div>
    </section>

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

<script>
import locomotive from '~/mixins/locomotive.js'

export default {
  mixins: [locomotive],
}
</script>

<style lang="sass" scoped>
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
