<template>
  <div class="mt-6">
    <!-- <p>Escribenos los detalles</p> -->
    <textarea
      :id="text"
      maxlength="200"
      placeholder="Escríbenos los detalles aquí"
      class="outline-none border-b-2 p-3 border-gray-400 focus:border-gray-900 transition-colors duration-1000 w-full resize-none overflow-auto break-words font-bold text-black"
      :name="text"
      cols="30"
      rows="4"
    ></textarea>
    <!-- <span
      data-placeholder="Escribenos los detalles aquí"
      class="textarea border-b-2 p-3 border-gray-400 focus:border-gray-900 transition-colors duration-1000 w-full resize-none overflow-hidden break-words bg-white text-black"
      role="textbox"
      contenteditable
    ></span> -->
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
textarea::placeholder
  color: #cbd5e0
// .textarea[contenteditable]:empty::before
//   content: attr(data-placeholder)
//   color: #cbd5e0
//   display: inline-block
//   // transform: translateY(-6px)

.textarea
  min-height: 40px
  width: 100%
  max-height: 240px
  display: block
  outline: none
</style>
