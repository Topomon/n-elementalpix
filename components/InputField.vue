<template>
  <div>
    <p>{{ text }}</p>
    <input
      :id="text"
      class="outline-none border-b border-gray-400 focus:border-gray-900 transition-colors w-full duration-1000"
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

<style></style>
