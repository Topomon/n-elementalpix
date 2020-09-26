<template>
  <div
    class="p-3 lg:p-4 lg:text-lg border text-sm lg:px-8 px-6 mr-3 mb-3 border-gray-300 transition-all hover:border-gray-900 cursor-pointer duration-500 rounded-full text-gray-900"
    :class="{ active: checked }"
    @click="toggleChecked"
  >
    <p class="font-bold">{{ name }}</p>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'Name',
    },
    checked: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toggleChecked() {
      this.$emit(
        'toggle:checked',
        { service_name: this.name },
        { last_checked_state: this.checked },
        { now_checked_state: !this.checked }
      )
    },
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
</style>
