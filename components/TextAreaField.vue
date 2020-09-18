<template>
  <div>
    <p>{{ text }}</p>
    <textarea
      :id="text"
      class="outline-none border-b border-gray-400 focus:border-gray-900 transition-colors duration-500 w-full resize-none overflow-hidden break-words"
      :name="text"
      cols="30"
      rows="1"
    ></textarea>
    <span
      class="textarea border-b border-gray-400 focus:border-gray-900 transition-colors duration-500 w-full resize-none overflow-hidden break-words bg-white"
      role="textbox"
      contenteditable
    ></span>
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
  methods: {},
}
</script>

<style lang="sass" scoped>
.textarea
  min-height: 40px
  width: 100%
  display: block
  outline: none
</style>
