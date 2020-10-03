<template>
  <div class="flex flex-wrap pt-4 lg:w-4/5">
    <label
      v-for="(optionKey, optionValue) in budgets"
      :key="optionValue"
      :class="{ active: optionKey.checked }"
      class="p-3 lg:p-4 lg:text-lg border text-sm lg:px-8 px-6 mr-3 mb-3 border-gray-300 transition-all hover:border-gray-900 cursor-pointer duration-500 rounded-full text-gray-900"
    >
      <input
        :id="`radio-btn-${optionKey.id}`"
        class="hidden"
        type="radio"
        :value="optionKey.name"
        :checked="value == optionKey.name"
        @input="$emit('input', $event.target.value)"
        @change="toggle(optionKey)"
      />
      <p class="font-bold">{{ optionKey.name }}</p>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
    budgets: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    toggle(item) {
      const id = item.id
      this.budgets.forEach((item) => {
        item.id === id ? (item.checked = true) : (item.checked = false)
      })
    },
  },
}
</script>

<style lang="sass" scoped>
.active
  background: #1a202c
  color: white
</style>
