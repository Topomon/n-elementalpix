<template>
  <section
    class="c-section container mx-auto"
    data-scroll-section
    data-persistent
  >
    <div
      class="xl:hidden md:pl-16 md:pr-16 pl-10 pr-10 pb-10 lg:pl-0 lg:pr-0 lg:pb-0"
    >
      <div
        class="relative overflow-hidden custom-pb bg-white hover:shadow-lg transition-shadow duration-300"
      >
        <nuxt-link tabindex="-1" :to="`/proyecto/${id}`"
          ><img
            class="absolute h-full w-full object-left-top object-cover md:object-contain"
            alt=""
            :src="imagen"
          />
          <div
            class="bottom-0 left-0 right-0 text-center absolute bg-white md:h-2/5 p-6 m-6 sm:p-6 sm:m-8"
          >
            <div
              class="md:absolute md:bottom-0 md:left-0 md:right-0 md:top-0 md:grid md:items-center md:m-12 lg:m-6"
            >
              <p
                class="text-base font-bold md:font-normal md:text-lg sm:text-xl text-gray-800"
              >
                {{ title }}
              </p>
              <p class="text-2xl font-bold hidden md:block">
                {{ description }}
              </p>
              <p class="text-gray-600 hidden md:block">{{ tags }}</p>
            </div>
          </div></nuxt-link
        >
      </div>
    </div>
    <div
      :id="`fixed-elements-${id}`"
      class="o-container hidden xl:block lg:pl-6 lg:pr-6"
    >
      <div class="o-layout">
        <div class="o-layout_item xl:w-3/5 lg:w-1/2">
          <div
            class="c-fixed_wrapper"
            data-scroll
            data-scroll-call="dynamicBackground"
            data-scroll-repeat
          >
            <div :id="`fixed-target-${id}`" class="c-fixed_target"></div>
            <div
              class="c-fixed"
              data-scroll
              data-scroll-sticky
              :data-scroll-target="`#fixed-target-${id}`"
              :style="{ backgroundImage: `url(${imagen})` }"
            >
              <nuxt-link
                tabindex="-1"
                data-cursor-hover
                class="absolute link-proyecto outline-none"
                :to="`/proyecto/${id}/`"
              >
                <div class="link-proyecto bg-red-500 opacity-50"></div>
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="o-layout_item xl:w-2/5 lg:w-1/2">
          <!-- add data-scroll-sticky to make text stop within range -->
          <div
            class="c-section_infos -padding xl:pl-3vw lg:pl-8 lg:pr-8"
            data-scroll
            :data-scroll-target="`#fixed-elements-${id}`"
          >
            <div
              class="c-section_infos_inner"
              data-scroll
              data-scroll-speed="0.5"
              data-scroll-offset="0"
            >
              <h3
                data-scroll
                data-scroll-speed="0"
                class="text-gray-800 font-medium xl:text-2xl xl:pb-2 lg:text-xl lg:pb-4"
              >
                {{ title }}
              </h3>
              <div class="">
                <p
                  data-scroll
                  data-scroll-speed="0.5"
                  class="text-gray-800 font-black xl:text-4xl xl:pb-2 lg:text-2xl lg:pb-4"
                >
                  <nuxt-link
                    class="font-black"
                    data-cursor-hover
                    :to="`/proyecto/${id}/`"
                  >
                    {{ description }}
                  </nuxt-link>
                </p>
                <p
                  data-scroll
                  data-scroll-speed="1"
                  class="text-gray-600 xl:text-lg"
                >
                  {{ tags }}
                </p>
              </div>
            </div>
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
      type: String,
      default: 'Id',
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
    imagen() {
      return require(`~/assets/img/img-${this.id}.png`)
    },
  },
}
</script>

<style>
.custom-pb {
  padding-bottom: 100%;
}
@media (min-width: 1280px) {
  .link-proyecto {
    min-height: 364px;
    width: 100%;
    top: calc((100vh - 364px) / 2);
  }
}

.c-section {
  position: relative;
}

.c-section_infos {
  position: relative;
  /* max-width: 500px; */
  z-index: 0;
}
@media (min-width: 1280px) {
  /* .c-section_infos {
    padding-top: 7.5rem;
  } */
  .c-section_infos.-padding {
    background-color: transparent;
    padding-top: 40vh;
    padding-bottom: 25vh;
  }
}
@media (max-width: 1279px) {
  /* .c-section_infos {
    margin-bottom: 1.875rem;
  } */
  .c-section_infos.-padding {
    background-color: transparent;
    padding-top: 40vh;
    padding-bottom: 5vh;
  }
}

.c-section_infos_inner > * {
  opacity: 0;
  transform: translateY(60px);
  transition: opacity 1.2s cubic-bezier(0.215, 0.61, 0.355, 1),
    transform 1.2s cubic-bezier(0.215, 0.61, 0.355, 1);
}
.c-section_infos_inner.is-inview > * {
  opacity: 1;
  transform: none;
}
.c-section_infos_inner.is-inview > :first-child {
  transition-delay: 0.06s;
}
.c-section_infos_inner.is-inview > :nth-child(2) {
  transition-delay: 0.12s;
}
.c-section_infos_inner.is-inview > :nth-child(3) {
  transition-delay: 0.18s;
}
.c-sections_infos_text {
  margin-top: 1.25rem;
}
.o-container {
  margin-right: auto;
  margin-left: auto;
  max-width: 95rem;
}
@media (max-width: 699px) {
  /* .o-container {
    padding-right: 20px;
    padding-left: 20px;
  } */
}
@media (min-width: 700px) {
  /* .o-container {
    padding-right: 2.5rem;
    padding-left: 2.5rem;
  } */
}
.o-layout {
  padding: 0;
  list-style: none;
  font-size: 0;
  margin: 0;
}
.o-layout.-gutter {
  margin-left: -3.75rem;
}
.o-layout.-gutter-small {
  margin-left: -1.875rem;
}
.o-layout.-center {
  text-align: center;
}
.o-layout.-right {
  text-align: right;
}
.o-layout.-reverse {
  direction: rtl;
}
.o-layout.-reverse.-flex {
  flex-direction: row-reverse;
}
.o-layout.-flex {
  display: flex;
}
.o-layout.-flex.-top {
  align-items: flex-start;
}
.o-layout.-flex.-middle {
  align-items: center;
}
.o-layout.-flex.-bottom {
  align-items: flex-end;
}
.o-layout.-stretch {
  align-items: stretch;
}
.o-layout_item {
  display: inline-block;
  /* width: 50%; */
  vertical-align: top;
  font-size: 1rem;
  padding-left: 0;
}
.o-layout.-gutter > .o-layout_item {
  padding-left: 3.75rem;
}
.o-layout.-gutter-small > .o-layout_item {
  padding-left: 1.875rem;
}
.o-layout.-middle > .o-layout_item {
  vertical-align: middle;
}
.o-layout.-bottom > .o-layout_item {
  vertical-align: bottom;
}
.o-layout.-center > .o-layout_item,
.o-layout.-reverse > .o-layout_item,
.o-layout.-right > .o-layout_item {
  text-align: left;
}
.o-layout.-reverse > .o-layout_item {
  direction: ltr;
}
html.is-ready .o-layout_item:nth-child(2) .c-header_heading_label {
  transition-delay: 0.1s;
}

.c-fixed_wrapper {
  position: relative;
  overflow: hidden;
  /* background-color: #721919; */
}
@media (min-width: 1000px) {
  .c-fixed_wrapper {
    height: 100vh;
  }
}
@media (max-width: 999px) {
  .c-fixed_wrapper {
    height: 100vh;
  }
}
.c-fixed_target {
  bottom: -100vh;
}
.c-fixed,
.c-fixed_target {
  position: absolute;
  top: -100vh;
  right: 0;
  left: 0;
}
.c-fixed {
  height: 100%;
  background-size: contain;
  background-position: 50%;
  opacity: 1;
  background-repeat: no-repeat;
  /* mix-blend-mode: multiply; */
}
</style>
