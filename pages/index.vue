<template>
  <div class="bg-gray-200" data-scroll-container>
    <section data-scroll data-scroll-section class="text-gray-500 hero">
      <div class="appear items-center flex h-32 justify-end container mx-auto">
        <div
          class="text-gray-600 text-sm font-bold md:pl-16 md:pr-16 pl-10 pr-10"
        >
          <nuxt-link
            class="hover:text-gray-200 transition-colors duration-500"
            data-cursor-hover
            data-cursor-mix-blend-mode="difference"
            to="/acerca-de/"
          >
            ACERCA DE
          </nuxt-link>
        </div>
      </div>
      <div
        class="text-4xl lg:text-5xl xl:text-6xl text-gray-500 font-light container mx-auto grid items-center justify-center md:h-80vh h-70vh"
      >
        <div class="md:pl-16 md:pr-16 pl-10 pr-10">
          <Logo
            class="stroke-current fill-current enter-up lg:w-auto lg:max-w-sm md:w-auto md:max-w-xs w-48"
          />
        </div>
      </div>

      <div
        class="second-enter-up text-4xl lg:text-5xl xl:text-6xl text-gray-500 font-light container mx-auto grid md:items-center lg:h-75vh items-start md:h-60vh h-25vh"
      >
        <div class="md:pl-16 md:pr-16 pl-10 pr-10">
          <p
            data-scroll
            data-scroll-speed="0.5"
            class="md:font-black text-xl md:text-4xl lg:text-5xl xl:text-6xl lg:text-left text-center"
          >
            Somos un estudio creativo con sólidos principios de diseño y
            experiencia en desarrollo web.
          </p>
        </div>
      </div>
    </section>
    <section data-scroll data-scroll-section class="xl:block container mx-auto">
      <div
        class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-800 text-center grid items-center h-60vh md:pl-16 md:pr-16 pl-10 pr-10 md:h-60vh lg:h-60vh xl:h-90vh"
      >
        Descubre nuestros proyectos
      </div>
    </section>
    <div
      class="lg:grid lg:grid-cols-2 lg:gap-10 xl:gap-0 xl:grid-cols-none lg:p-10 xl:p-0"
    >
      <Ventana
        id="ve-arquitectura"
        description="Destacando el diseño a través de la arquitectura"
        title="Ve Arquitectura"
        tags="diseño + desarrollo + responsive"
      />
      <Ventana
        id="squidplot"
        description="Servicio de impresión online"
        title="Squidplot"
        tags="diseño + desarrollo + responsive + e-commerce"
      />
      <Ventana
        id="jorgealbertoayllon"
        description="Portafolio de artista contemporáneo"
        title="Jorge Alberto Ayllon"
        tags="diseño + desarrollo + responsive"
      />
    </div>
    <div class="xl:h-64 md:h-20"></div>
    <section data-scroll data-scroll-section class="xl:h-screen hero">
      <div
        class="container mx-auto md:pl-16 md:pr-16 pl-10 pr-10 text-center md:text-left pt-20vh pb-10vh"
      >
        <p
          data-scroll
          data-scroll-speed="0.75"
          class="text-gray-200 text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold"
        >
          ¿Quieres crear algo?
        </p>
        <p data-scroll data-scroll-speed="0.5">
          <nuxt-link to="/contacto/">
            <span
              data-cursor-hover
              data-cursor-mix-blend-mode="difference"
              class="text-gray-600 text-2xl md:text-4xl lg:text-5xl xl:text-6xl hover:text-gray-200 duration-300 transition-colors font-bold"
              >Cuéntanos . . .</span
            ></nuxt-link
          >
        </p>
        <div class="text-gray-200 pt-20vh xl:absolute xl:bottom-0 xl:pb-20vh">
          <p class="text-lg sm:text-2xl pb-4">
            <a to="mailto:info@elemetalpix.com" data-cursor-hover
              >info@elementalpix.com</a
            >
          </p>
          <p class="text-sm">
            <nuxt-link data-cursor-hover to="/politicas-de-privacidad/"
              >Políticas de privacidad</nuxt-link
            >
          </p>
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
  name: 'HomePage',
  mixins: [locomotive],
}
</script>

<style lang="sass" scoped>
$pix-color: #a0aec0

.hero
  background-color: #111111
</style>
