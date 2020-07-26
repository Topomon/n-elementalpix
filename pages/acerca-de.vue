/* eslint-disable prettier/prettier */ /* eslint-disable prettier/prettier */
<template>
  <div>
    <section
      data-scroll
      data-scroll-section
      data-scroll-speed="1"
      class="text-gray-500"
    >
      <NavigationBar />
      <div
        data-scroll
        data-scroll-speed="1"
        class="container mx-auto font-black p-4 md:p-16 text-2xl md:text-4xl lg:text-6xl lg:h-80vh lg:items-center lg:grid"
      >
        Cada pixel es elemental
      </div>
      <div
        data-scroll
        data-scroll-speed="3"
        class="container mx-auto font-black p-4 md:p-16 text-2xl md:text-4xl lg:text-6xl"
      >
        Realizamos proyectos únicos porque sabemos que cada tipo de proyecto
        debe abordarse de manera distinta.
      </div>

      <div
        class="container mx-auto font-black p-4 md:p-16 text-2xl md:text-4xl lg:text-6xl"
      >
        Nuestras áreas de expertise
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
