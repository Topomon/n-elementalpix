<template>
  <div class="appear items-center flex h-32 justify-end container mx-auto">
    <div class="text-gray-700 text-sm font-bold md:pl-16 md:pr-16 pl-10 pr-10">
      <nuxt-link
        class="hover:text-gray-500 transition-colors duration-500"
        data-cursor-hover
        data-cursor-mix-blend-mode="difference"
        :to="isIndexPage ? altPath : '/'"
      >
        {{ isIndexPage ? 'ACERCA DE' : 'CERRAR' }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isIndexPage: true,
      altPath: '/acerca-de',
    }
  },
  created() {
    if (this.$route.fullPath === this.altPath) {
      this.isIndexPage = !this.isIndexPage
    }
  },
}
</script>

<style lang="sass" scoped>
@keyframes appear
  0%
    opacity: 0
  30%
    opacity: 0
  100%
    opacity: 1

.appear
  animation: appear 2s forwards
</style>
