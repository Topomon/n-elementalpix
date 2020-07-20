/* eslint-disable prettier/prettier */ /* eslint-disable prettier/prettier */
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
          to="/"
        >
          CERRAR
        </nuxt-link>
      </div>
      <div
        class="container mx-auto font-black p-4 md:p-16 lg:p-32 text-2xl md:text-4xl lg:text-6xl"
      >
        Cada pixel es elemental
      </div>
      <div
        class="container mx-auto font-black p-4 md:p-16 lg:p-32 text-2xl md:text-4xl lg:text-6xl"
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus
        esse repellendus fugiat molestias cupiditate cumque culpa necessitatibus
        velit animi deleniti! Reprehenderit sit maiores veritatis aliquam
        recusandae enim numquam eveniet nam!
      </div>
      <div
        class="container mx-auto font-black p-4 md:p-16 lg:p-32 text-2xl md:text-4xl lg:text-6xl"
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus
        esse repellendus fugiat molestias cupiditate cumque culpa necessitatibus
        velit animi deleniti! Reprehenderit sit maiores veritatis aliquam
        recusandae enim numquam eveniet nam!
      </div>
      <div
        class="container mx-auto font-black p-4 md:p-16 lg:p-32 text-2xl md:text-4xl lg:text-6xl"
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus
        esse repellendus fugiat molestias cupiditate cumque culpa necessitatibus
        velit animi deleniti! Reprehenderit sit maiores veritatis aliquam
        recusandae enim numquam eveniet nam!
      </div>
      <div
        class="container mx-auto font-black p-4 md:p-16 lg:p-32 text-2xl md:text-4xl lg:text-6xl"
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
