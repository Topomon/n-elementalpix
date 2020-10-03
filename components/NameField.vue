<template>
  <div class="mt-6">
    <input
      :id="text"
      v-model="nameField"
      autocomplete="off"
      :placeholder="text"
      class="outline-none border-b-2 p-3 border-gray-400 placeholder-gray-400 focus:border-gray-900 w-full text-gray-900 font-bold transition-colors duration-300"
      type="text"
      :name="text"
      :class="{
        'border-red-300 placeholder-red-300 text-red-300 focus:border-red-300':
          $v.nameField.$error,
        'border-gray-900': $v.nameField.$dirty,
      }"
      @input="validateOnInput($event.target.value)"
      @change="touch()"
    />
    <p
      :class="{
        'opacity-100 translate-y-1 text-red-300':
          $v.nameField.$invalid && $v.nameField.$dirty,
      }"
      class="absolute text-gray-400 text-base ml-3 font-normal transition-all transform opacity-0 duration-300"
    >
      Dinos quién eres
    </p>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
export default {
  props: {
    text: {
      type: String,
      default: 'Text',
    },
  },
  data() {
    return {
      nameField: '',
    }
  },
  validations: {
    nameField: {
      required,
    },
  },
  mounted() {},
  methods: {
    touch() {
      this.$v.nameField.$touch()
    },
    validateOnInput(value) {
      this.$emit('update:input:change', value)
      this.$parent.validateInput()
    },
  },
}
</script>

<style lang="sass" scoped>

input:focus::placeholder
  opacity: 0
  transition: 0.4s opacity

input::placeholder
  transition: 1s opacity
</style>
