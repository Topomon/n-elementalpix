<template>
  <section class="" data-scroll data-scroll-section>
    <div
      :id="`scroll-direction${id}`"
      data-scroll
      class="container mx-auto lg:pl-16 lg:pr-16 md:pl-32 md:pr-32 pl-10 pr-10"
    >
      <div data-scroll class="">
        <div
          data-scroll
          data-scroll-sticky
          :data-scroll-target="`#scroll-direction${id}`"
          class="xl:flex hidden min-h-screen"
        >
          <div data-scroll class="w-auto xl:w-1/2 lg:grid lg:items-center">
            <div>
              <p
                class="text-xl pb-6 text-gray-900"
                data-scroll
                data-scroll-speed="0.5"
              >
                {{ title }}
              </p>
              <p
                class="lg:text-3xl pb-6 mr-10 text-gray-800 font-semibold"
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
          <!-- <div class="w-auto xl:w-1/2">
            <img class="" src="~assets/img/img1.png" alt="" />
          </div> -->
        </div>
        <div data-scroll class="lg:flex">
          <div data-scroll class="w-auto xl:w-1/2">
            <!-- <img class="" src="~assets/img/img1.png" alt="" /> -->
          </div>
          <div
            data-scroll
            class="w-auto xl:w-1/2 lg:grid lg:items-center shadow-xl"
          >
            <img data-scroll class="" alt="" :src="image" />
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

<style lang="sass" scoped>
.topo
  height: 5000px
</style>
