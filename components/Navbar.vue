<template>
  <div
    class="container mx-auto text-gray-700 text-sm font-bold flex justify-end"
  >
    <nuxt-link
      :key="1"
      class="hover:text-gray-500 transition-colors duration-500"
      data-cursor-hover
      data-cursor-mix-blend-mode="difference"
      :to="isIndexPage ? altPath : '/'"
      @click.native="changePath"
    >
      {{ isIndexPage ? 'ACERCA DE' : 'CERRAR' }}
    </nuxt-link>
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
  methods: {
    changePath() {
      setTimeout(() => {
        this.isIndexPage = !this.isIndexPage
      }, 800)
    },
  },
}
</script>
