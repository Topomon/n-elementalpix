<template>
  <div class="text-gray-700 font-bold text-sm">
    <nuxt-link
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
      }, 1000)
    },
  },
}
</script>
