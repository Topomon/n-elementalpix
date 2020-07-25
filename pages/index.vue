<template>
  <div data-scroll-container data-scroll>
    <section data-scroll data-scroll-section class="text-gray-500">
      <NavigationBar />
      <div
        class="text-4xl lg:text-6xl text-gray-500 font-light container mx-auto grid items-center h-80vh"
      >
        <div class="md:pl-16 md:pr-16 pl-10 pr-10">
          <p class="font-serif enter-up text-center lg:text-left">
            elemental<span class="font-serif font-bold pix text-orange-500">
              px</span
            >
          </p>
          <p
            class="second-enter-up lg:text-3xl mt-16 lg:pr-56 text-center lg:text-left text-2xl pr-10 pl-10 lg:p-0"
          >
            Somos un estudio creativo con sólidos principios de diseño y
            experiencia en desarrollo web.
          </p>
        </div>
      </div>
    </section>
    <section
      data-scroll-section
      class="text-gray-500 font-black tracking-widest container mx-auto lg:pl-16 lg:pr-16 md:pl-32 md:pr-32 pl-10 pr-10"
    >
      <div
        class="text-4xl lg:text-5xl text-center lg:text-left pt-32 pb-32 h-64"
      >
        <div
          data-scroll
          data-scroll-speed="1"
          class="text-gray-700 leading-none"
        >
          nuestros
        </div>
        <div
          data-scroll
          data-scroll-speed="1.5"
          class="text-gray-500 leading-none"
        >
          proyectos
        </div>
      </div>
    </section>
    <Proyecto />

    <section
      class="text-gray-500 container mx-auto lg:pl-16 lg:pr-16 md:pl-32 md:pr-32 pl-10 pr-10"
      data-scroll-section
    >
      <div id="scroll-direction2" class="">
        <div class="">
          <div
            data-scroll
            data-scroll-sticky
            data-scroll-target="#scroll-direction2"
            class="lg:flex min-h-screen"
          >
            <div class="w-auto xl:w-1/2 lg:grid lg:items-center">
              <div>
                <p class="text-xl" data-scroll data-scroll-speed="0.5">
                  Squidplot
                </p>
                <p
                  class="lg:text-3xl pt-10 pr-10"
                  data-scroll
                  data-scroll-speed="1"
                >
                  Servicio de impresión online
                </p>
                <p
                  class="text-lg pt-10 text-gray-600"
                  data-scroll
                  data-scroll-speed="1.5"
                >
                  diseño + desarrollo + responsive + e-commerce
                </p>
              </div>
            </div>
            <div class="w-auto xl:w-1/2">
              <!-- <img class="" src="~assets/img/img1.png" alt="" /> -->
            </div>
          </div>
          <div class="lg:flex">
            <div class="w-auto xl:w-1/2">
              <!-- <img class="" src="~assets/img/img1.png" alt="" /> -->
            </div>
            <div class="w-auto xl:w-1/2 lg:grid lg:items-center pb-10">
              <img class="" src="~assets/img/img3.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      class="text-gray-500 container mx-auto lg:pl-16 lg:pr-16 md:pl-32 md:pr-32 pl-10 pr-10"
      data-scroll-section
    >
      <div id="scroll-direction3" class="">
        <div class="">
          <div
            data-scroll
            data-scroll-sticky
            data-scroll-target="#scroll-direction3"
            class="lg:flex min-h-screen"
          >
            <div class="w-auto xl:w-1/2 lg:grid lg:items-center">
              <div>
                <p class="text-xl" data-scroll data-scroll-speed="0.5">
                  Jorge Alberto Ayllón
                </p>
                <p
                  class="lg:text-3xl pt-10 pr-10"
                  data-scroll
                  data-scroll-speed="1"
                >
                  Portafolio de artista
                </p>
                <p
                  class="text-lg pt-10 text-gray-600"
                  data-scroll
                  data-scroll-speed="1.5"
                >
                  diseño + desarrollo + responsive
                </p>
              </div>
            </div>
            <div class="w-auto xl:w-1/2">
              <!-- <img class="" src="~assets/img/img1.png" alt="" /> -->
            </div>
          </div>
          <div class="lg:flex">
            <div class="w-auto xl:w-1/2">
              <!-- <img class="" src="~assets/img/img1.png" alt="" /> -->
            </div>
            <div class="w-auto xl:w-1/2 lg:grid lg:items-center pb-10">
              <img class="" src="~assets/img/img2.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>

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
}
</script>

<style lang="sass" scoped>
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
