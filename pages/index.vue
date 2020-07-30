<template>
  <div id="js-scroll" class="" data-scroll-container>
    <section data-scroll data-scroll-section class="text-gray-500 hero">
      <div class="appear items-center flex h-32 justify-end container mx-auto">
        <div
          class="text-gray-700 text-sm font-bold md:pl-16 md:pr-16 pl-10 pr-10"
        >
          <nuxt-link
            class="hover:text-gray-500 transition-colors duration-500"
            data-cursor-hover
            data-cursor-mix-blend-mode="difference"
            to="/acerca-de"
          >
            ACERCA DE
          </nuxt-link>
        </div>
      </div>
      <div
        class="text-4xl lg:text-6xl text-gray-500 font-light container mx-auto grid items-center justify-center h-80vh"
      >
        <div class="md:pl-16 md:pr-16 pl-10 pr-10">
          <p class="font-serif enter-up text-center lg:text-left">
            elemental<span class="font-serif font-bold pix"> px</span>
          </p>
        </div>
      </div>

      <div
        class="text-4xl lg:text-6xl text-gray-500 font-light container mx-auto grid items-center h-80vh"
      >
        <div class="md:pl-16 md:pr-16 pl-10 pr-10">
          <p class="font-black text-2xl md:text-4xl lg:text-6xl lg:text-left">
            Somos un estudio creativo con sólidos principios de diseño y
            experiencia en desarrollo web.
          </p>
        </div>
      </div>
    </section>

    <Proyecto
      :id="1"
      :description="'Destacando el diseño a través de la arquitectura'"
      :title="'Ve Arquitectura'"
      :tags="'diseño + desarrollo + responsive'"
    />
    <Proyecto
      :id="2"
      :description="'Portafolio de artista contemporáneo'"
      :title="'Jorge alberto Ayllon'"
      :tags="'diseño + desarrollo + responsive'"
    />
    <Proyecto
      :id="3"
      :description="'Servicio de impresión online'"
      :title="'Squidplot'"
      :tags="'diseño + desarrollo + responsive + e-commerce'"
    />

    <cursor-fx
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
  mounted() {
    console.log('index mounted')
  },
}
</script>

<style lang="sass" scoped>
$pix-color: #a0aec0

.hero
  background-color: #111111

@keyframes enter-up
  0%
    opacity: 0
  30%
    opacity: 0
  100%
    opacity: 1
    transform: translateY(-50px)

.enter-up
  animation: enter-up 2s forwards

.second-enter-up
  opacity: 0
  transform: translateY(50px)
  animation: enter-up 2s 0.5s forwards
.pix
  &::after
    content: ''
    position: absolute
    margin-top: 13px
    border-radius: 1px
    height: 6px
    width: 6px
    background-color: $pix-color

@media (min-width: 768px)
  .pix
    &::after
      content: ''
      position: absolute
      margin-top: 13px
      border-radius: 1px
      height: 6px
      width: 6px
      background-color: $pix-color

@media (min-width: 1024px)
  .pix
    &::after
      content: ''
      position: absolute
      margin-top: 26px
      border-radius: 2px
      height: 10px
      width: 10px
      background-color: $pix-color

@media (min-width: 1280px)
  .pix
    &::after
      content: ''
      position: absolute
      margin-top: 26px
      border-radius: 2px
      height: 10px
      width: 10px
      background-color: $pix-color
</style>
