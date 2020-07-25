<template>
  <section
    class="text-gray-500 container mx-auto lg:pl-16 lg:pr-16 md:pl-32 md:pr-32 pl-10 pr-10"
    data-scroll-section
  >
    <div id="scroll-direction" class="">
      <div class="">
        <div
          data-scroll
          data-scroll-sticky
          data-scroll-target="#scroll-direction"
          class="lg:flex min-h-screen"
        >
          <div class="w-auto xl:w-1/2 lg:grid lg:items-center">
            <div>
              <p class="text-xl" data-scroll data-scroll-speed="0.5">
                Ve Arquitectura
              </p>
              <p
                class="lg:text-3xl pt-10 pr-10"
                data-scroll
                data-scroll-speed="1"
              >
                Estudio de arquitectura y diseño de interior
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
            <img class="" src="~assets/img/img1.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style></style>
