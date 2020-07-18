/* eslint-disable prettier/prettier */
<template>
  <section>
    <div
      class="text-gray-500"
      data-scroll
      data-scroll-speed="0.1"
      data-scroll-section
    >
      <div
        class="container mx-auto md:text-4xl md:p-16 lg:text-6xl font-black lg:p-32 p-4 text-2xl"
      >
        Cada pixel es elemental
      </div>
      <div
        class="container mx-auto md:text-4xl md:p-16 lg:text-6xl font-black lg:p-32 p-4 text-2xl"
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus
        esse repellendus fugiat molestias cupiditate cumque culpa necessitatibus
        velit animi deleniti! Reprehenderit sit maiores veritatis aliquam
        recusandae enim numquam eveniet nam!
      </div>
    </div>
  </section>
</template>

<script>
import locomotive from '~/mixins/locomotive.js'

export default {
  mixins: [locomotive],
}
</script>
