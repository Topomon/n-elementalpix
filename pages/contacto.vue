<template>
  <div data-scroll-container class="">
    <section
      data-scroll
      data-scroll-section
      class="container mx-auto md:pl-16 md:pr-16 pl-10 pr-10"
    >
      <div
        class="banner lg:pt-64 pt-40 text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900"
      >
        <p class="rotateX">Hola!</p>
        <p class="rotateX">Cuéntanos sobre tu proyecto</p>
      </div>
      <div
        class="pt-32 lg:text-3xl md:text-2xl text-xl text-gray-400 font-bold"
      >
        <p class="enter-up">
          Creo que necesito ...
        </p>
      </div>
      <fieldset :disabled="formLoading == true || formSendSuccess">
        <div class="flex flex-wrap pt-8 enter-up lg:w-4/5">
          <Checkbox
            v-for="item in services"
            :key="item.id"
            :checked="item.checked"
            :name="item.name"
            @toggle:checked="item.checked = !item.checked"
          />
        </div>
        <div
          class="pt-20 pb-20 lg:text-3xl md:text-2xl text-xl font-bold text-gray-400 container mx-auto"
        >
          <form id="formulario" class="lg:w-4/5">
            <NameField
              ref="NameField"
              text="Nombre"
              :input:change.sync="name"
            />
            <MailField
              ref="MailField"
              text="Correo"
              :input:change.sync="email"
            />
            <TextAreaField
              text="Descripción"
              :input:change.sync="description"
            />
            <p class="p-3">Presupuesto</p>
            <RadioGroup v-model="selectedBudget" :budgets="budgets" />
          </form>
          <div class="lg:w-4/5 flex flex-wrap">
            <button
              id="aceptar"
              class="p-3 lg:p-4 lg:text-lg border text-sm lg:px-8 px-6 mb-3 bg-gray-400 transition-all hover:border-gray-900 duration-500 rounded-full text-gray-900 font-bold mt-6"
              :class="{
                'cursor-not-allowed animate-send-loading': formLoading,
                'animate-send-success cursor-not-allowed': formSendSuccess,
              }"
              :disabled="(formLoading || formSendSuccess)"
              @click.prevent="enviar"
            >
              <span
                class="transition-opacity duration-300 delay-1000"
                :class="{ 'opacity-100': formSendSuccess }"
                >{{ buttonMessage }}</span
              >
            </button>
            <span
              v-if="formSendSuccess == false"
              :class="{
                'opacity-100 ': !formIsValid,
                'opacity-100': formSendError,
              }"
              class="text-red-300 text-lg px-8 pt-8 lg:pt-10 transition-all duration-300 opacity-0"
              >{{ formMessage }}</span
            >
          </div>
        </div>
      </fieldset>
    </section>
  </div>
</template>

<script>
import locomotive from '~/mixins/locomotive.js'

export default {
  name: 'ContactPage',
  mixins: [locomotive],
  data() {
    return {
      buttonMessage: 'Enviar',
      formMessage: 'Algo no está completo : (',
      formIsValid: true,
      formLoading: false,
      selectedBudget: 'None selected',
      formSendError: null,
      formSendSuccess: false,
      name: '',
      email: '',
      description: '',
      budgets: [
        { id: 1, name: '< $1000', checked: false },
        { id: 2, name: '$1000 - $3000', checked: false },
        { id: 3, name: '$3000 +', checked: false },
      ],
      services: [
        { id: 1, name: 'Diseño Web', checked: false },
        { id: 2, name: 'HTML/CSS', checked: false },
        { id: 3, name: 'Desarrollo Web', checked: false },
        { id: 4, name: 'UX/UI', checked: false },
        { id: 5, name: 'Consultoría', checked: false },
        { id: 6, name: 'E-commerce', checked: false },
        { id: 7, name: 'PWA', checked: false },
        { id: 8, name: 'Estrategia creativa', checked: false },
        { id: 9, name: 'Diseño responsive', checked: false },
      ],
    }
  },
  computed: {
    selectedServices() {
      const filterServices = this.services
        .filter((item) => item.checked === true)
        .map((item) => item.name)
      if (filterServices.length === 0) {
        return 'No service selected'
      } else {
        return filterServices
      }
    },
  },
  methods: {
    buildForm() {
      // Build object to send to server
      const form = {
        services: this.selectedServices,
        name: this.name,
        email: this.email,
        description: this.description,
        budget: this.selectedBudget,
      }
      return form
    },
    validateInput() {
      // Listens to inputs and hide message setting formIsValid to true
      const NameField = this.$refs.NameField.$v
      const MailField = this.$refs.MailField.$v
      // Console.log('checking if both fields are valid and hide message if true')
      if (
        MailField.$invalid === false &&
        NameField.$invalid === false &&
        MailField.$dirty === true &&
        NameField.$dirty === true
      ) {
        return (this.formIsValid = true)
      }
    },
    validateForm() {
      const invalidName = this.$refs.NameField.$v.$invalid
      const invalidMail = this.$refs.MailField.$v.$invalid
      this.$refs.MailField.touch()
      this.$refs.NameField.touch()
      // console.log('Cheking if form is valid to send')
      if (invalidMail === false && invalidName === false) {
        this.formIsValid = true
      } else {
        this.formIsValid = false
      }
      return this.formIsValid
    },
    async enviar() {
      this.formSendError = false
      this.formLoading = true
      // Start to send data to server after validity of form
      if (this.validateForm() === true) {
        // console.log('Form is valid')
        // Send axios request because form is valid
        await this.$axios
          .post(
            'https://us-central1-sengridmail.cloudfunctions.net/youvegotmail',
            this.buildForm(),
            {
              progress: false,
              headers: {
                'Content-Type': 'application/json',
              },
            }
          )
          .then((response) => {
            // console.log(response)
            this.formSendError = false
            this.formSendSuccess = true
            this.buttonMessage = 'Listo!'
            // add disabled to all inputs
          })
          .catch(() => {
            // console.log('No connection to server')
            this.formSendError = true
            this.formSendSuccess = false
            this.formMessage =
              'Hubo un error al momento de enviar el formulario'
            this.mixinLmsUpdate() // updates locomotive scroll
            // console.error({ statusCode: 400, message: 'Bad Request' })
          })
      } else {
        console.log('Form is not valid')
      }
      this.formLoading = false
    },
  },
}
</script>

<style lang="sass" scoped>
@keyframes success
  0%
    width: 89.14px
  100%
    color: white
    background: #1a202c
    width: 100%

.animate-send-success
  transition: 1s
  animation: success 1s forwards ease-in-out

@keyframes loading
  0%
    width: 0%
  100%
    background: #1a202c
    width: 100%

.animate-send-loading
  overflow: hidden
  position: relative
  &::after
    content: ''
    position: absolute
    left: 0
    top: 0
    bottom: 0
    width: 0%
    opacity: .25
    background-image: linear-gradient() // to mask background inside button
    transition: 1s
    animation: loading 1s infinite ease-in-out

#aceptar
  outline: none

@keyframes entrar
  0%
    opacity: 0
    transform: perspective(500px) rotateX(-60deg) translateY(60px)
  100%
    opacity: 1
    transform: perspective(500px) rotateX(0deg) translateY(0px)

.rotateX
  opacity: 0
  transform: perspective(700px) rotateX(-45deg)
  transition: transform 0.5s ease
  animation: entrar 1s 0.5s forwards

// Makes the second item inside .banner class delay for 0.72s
.banner > :nth-child(2)
  animation-delay: 0.72s
</style>
