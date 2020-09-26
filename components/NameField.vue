<template>
  <div class="mt-6">
    <input
      :id="text"
      v-model="inputContent"
      autocomplete="off"
      :placeholder="text"
      class="outline-none border-b-2 p-3 border-gray-400 placeholder-gray-400 focus:border-gray-900 w-full text-black font-bold transition-colors duration-1000"
      type="text"
      :name="text"
      :class="{
        'border-red-300 placeholder-red-300 text-red-300 focus:border-red-300':
          $v.inputContent.$error,
        'border-gray-900': $v.inputContent.$dirty,
      }"
      @input="$emit('update:input:change', $event.target.value)"
      @change="validateInput($event.target.value)"
    />
    <!-- <p class="mt-3 text-red-400" v-if="!$v.name.required">Field is required</p> -->
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
      inputContent: '',
    }
  },
  validations: {
    inputContent: {
      required,
    },
  },
  mounted() {},
  methods: {
    validateInput(value) {
      this.$v.inputContent.$touch()
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
