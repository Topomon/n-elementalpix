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
      <div class="pl-10 pr-10 sm:pl-10 sm:pr-10">
        <div
          data-scroll
          class="container mx-auto font-black pt-4 pb-4 md:p-16 text-2xl md:text-4xl lg:text-6xl lg:h-80vh lg:items-center h-20vh lg:grid"
        >
          Cada pixel es elemental
        </div>
        <div
          data-scroll
          class="container mx-auto font-black pt-4 pb-4 md:p-16 text-2xl md:text-4xl lg:text-6xl"
        >
          <p class="text-lg md:text-3xl pb-10">Manifiesto</p>
          Nos gusta diseñar y desarrollar páginas únicas e innovadoras.
        </div>
        <div
          data-scroll
          class="container mx-auto font-black pt-4 pb-4 md:p-16 text-2xl md:text-4xl lg:text-6xl"
        >
          Con una estrategia creativa podemos iniciar o mejorar la presencia en
          línea de una marca, producto o empresa.
        </div>
        <div
          data-scroll
          class="container mx-auto font-black pt-4 pb-4 md:p-16 text-2xl md:text-4xl lg:text-6xl"
        >
          Somos buenos tomando desiciones de diseño, UX, UI y haciendo tus
          proyectos responsive.
        </div>
        <div
          data-scroll
          class="container mx-auto font-black pt-4 pb-4 md:p-16 text-2xl md:text-4xl lg:text-6xl"
        >
          Nuestro conocimiento tecnológico y de diseño especializado nos permite
          desarrollar un front-end a medida.
        </div>
      </div>
      <div class="acerca h-10vh"></div>
    </section>
    <section
      data-scroll-section
      data-scroll
      class="pl-10 pr-10 sm:pl-10 sm:pr-10 pt-20 pb-20"
    >
      <div class="container mx-auto pt-4 pb-4 md:p-16">
        <p class="lg:text-5xl text-3xl font-black">
          Nosotros
        </p>
        <div class="grid gap-10 grid-cols-1 sm:grid-cols-2 pt-20">
          <div class="">
            <div class="relative overflow-hidden pb-1/1 lg:pb-3/5">
              <img class="bg-gray-300 absolute h-full w-full object-cover" />
            </div>
            <p class="text-2xl font-black pt-6">Diego Frias</p>
            <p>Director de proyectos</p>
          </div>
          <div>
            <div class="relative overflow-hidden pb-1/1 lg:pb-3/5">
              <img class="bg-gray-300 absolute h-full w-full object-cover" />
            </div>
            <p class="text-2xl font-black pt-6">Jorge Ou</p>
            <p>Director de tecnologías</p>
          </div>
        </div>
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
