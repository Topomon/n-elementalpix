<template>
  <div
    class="p-3 lg:p-4 lg:text-lg border text-sm lg:px-8 px-6 mr-3 mb-3 border-gray-300 transition-all hover:border-gray-900 cursor-pointer duration-500 rounded-full"
    :class="{ active: hover }"
    @click="hover = !hover"
  >
    <p class="font-bold">{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'Text',
    },
  },
  data() {
    return {
      hover: false,
    }
  },
}
</script>

<style lang="sass" scoped>
@media (hover: none) and (pointer:coarse)
  div
    &:hover
      border: 1px #e2e8f0 solid

.active
  background: #111111
  color: white
  // border: solid 2px #111111
</style>
