<template>
  <section class="" data-scroll-section>
    <div
      :id="`scroll-direction${id}`"
      class="container mx-auto lg:pl-16 lg:pr-16 md:pl-32 md:pr-32 pl-10 pr-10"
    >
      <div class="min-h-screen">
        <div
          data-scroll
          data-scroll-sticky
          :data-scroll-target="`#scroll-direction${id}`"
          class="xl:flex hidden min-h-screen"
        >
          <div class="w-auto xl:w-1/2 lg:grid lg:items-center">
            <div>
              <p
                class="text-xl h-20 text-gray-900"
                data-scroll
                data-scroll-speed="0.5"
              >
                {{ title }}
              </p>
              <p
                class="lg:text-3xl pb-10 mr-10 text-gray-800 font-semibold"
                data-scroll
                data-scroll-speed="1"
              >
                {{ description }}
              </p>
              <p
                class="text-lg text-gray-700"
                data-scroll
                data-scroll-speed="1.5"
              >
                {{ tags }}
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
          <div class="w-auto xl:w-1/2 lg:grid lg:items-center shadow-xl">
            <img class="" alt="" :src="image" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      default: 1,
    },
    title: {
      type: String,
      default: 'Title',
    },
    description: {
      type: String,
      default: 'Description',
    },
    tags: {
      type: String,
      default: 'Tags',
    },
  },
  computed: {
    image() {
      return require(`~/assets/img/img${this.id}.png`)
    },
  },
}
</script>

<style></style>
