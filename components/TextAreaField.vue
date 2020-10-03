<template>
  <div class="mt-6">
    <textarea
      v-model="textAreaField"
      maxlength="200"
      placeholder="Escríbenos los detalles aquí (Max. 200 caracteres)"
      class="outline-none border-b-2 p-3 border-gray-400 focus:border-gray-900 transition-colors duration-1000 w-full resize-none overflow-auto break-words font-bold text-black"
      :class="{
        'border-gray-900': $v.textAreaField.$dirty,
      }"
      :name="text"
      cols="30"
      rows="4"
      @input="$emit('update:input:change', $event.target.value)"
      @change="touch()"
    ></textarea>
  </div>
</template>

<script>
import { maxLength } from 'vuelidate/lib/validators'
export default {
  props: {
    text: {
      type: String,
      default: 'Text',
    },
  },
  data() {
    return {
      textAreaField: '',
    }
  },
  validations: {
    textAreaField: {
      maxLength: maxLength(200),
    },
  },
  methods: {
    touch() {
      this.$v.textAreaField.$touch()
    },
  },
}
</script>

<style lang="sass" scoped>
textarea:focus::placeholder
  opacity: 0
  transition: 0.4s opacity

textarea::placeholder
  color: #cbd5e0
  transition: 1s opacity

.textarea
  min-height: 40px
  width: 100%
  max-height: 240px
  display: block
  outline: none
</style>
