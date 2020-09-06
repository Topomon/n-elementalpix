/* eslint-disable prettier/prettier */ /* eslint-disable prettier/prettier */
<template>
  <div class="" data-scroll-container>
    <!-- <nuxt-link class="font-gray-400" to="/">Back</nuxt-link> -->
    <section data-scroll data-scroll-section class="text-gray-500 acerca">
      <div class="appear items-center flex h-32 justify-end container mx-auto">
        <div
          class="text-gray-700 text-sm font-bold md:pl-16 md:pr-16 pl-10 pr-10"
        >
          <nuxt-link
            class="hover:text-gray-500 transition-colors duration-500"
            data-cursor-hover
            data-cursor-mix-blend-mode="difference"
            to="/"
          >
            CERRAR
          </nuxt-link>
        </div>
      </div>
      <div
        data-scroll
        class="container mx-auto font-black p-4 md:p-16 text-2xl md:text-4xl lg:text-6xl lg:h-80vh lg:items-center lg:grid"
      >
        Cada pixel es elemental
      </div>
      <div
        data-scroll
        class="container mx-auto font-black p-4 md:p-16 text-2xl md:text-4xl lg:text-6xl"
      >
        Texto o descripción importante aquí
      </div>
    </section>

    <!-- <cursor-fx
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
    /> -->
  </div>
</template>

<script>
import locomotive from '~/mixins/locomotive.js'

export default {
  mixins: [locomotive],
  mounted() {
    // console.log('acerca-de mounted')
  },
}
</script>

<style lang="sass" scoped>
.acerca
  background-color: #111111
</style>
