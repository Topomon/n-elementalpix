<template>
  <div class="mt-6">
    <!-- <p>{{ text }}</p> -->
    <input
      :id="text"
      autocomplete="off"
      :placeholder="text"
      class="outline-none border-b-2 p-3 border-gray-400 focus:border-gray-900 transition-colors w-full duration-1000 text-black font-bold"
      type="text"
      :name="text"
    />
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
}
</script>

<style lang="sass" scoped>
input::placeholder
  color: #cbd5e0
</style>
