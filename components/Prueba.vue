<template>
  <section class="relative" data-scroll-section data-persistent>
    <div
      id="scroll-direction-pop"
      class="container mx-auto lg:pl-16 lg:pr-16 md:pl-32 md:pr-32 pl-10 pr-10"
    >
      <div class="lg:flex lg:min-h-screen">
        <div
          data-scroll
          data-scroll-sticky
          data-scroll-target="#scroll-direction-pop"
          class="w-auto xl:w-2/3 xl:grid xl:items-center bg-gray-700 h-screen"
        >
          <img class="shadow-xl" alt="" src="~assets/img/img1.png" />
        </div>
        <div class="w-auto xl:w-1/3">
          <div class="h-screen grid items-center">Squidplot</div>
          <div class="h-screen grid items-center">
            Ve - Arquitectura
          </div>
          <div class="h-screen grid items-center">
            Jorge Alberto Ayllon
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="sass" scoped>
.custom-height
  height: 300vh
</style>
