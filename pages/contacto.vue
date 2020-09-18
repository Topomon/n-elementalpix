<template>
  <div data-scroll-container class="bg-gray-100">
    <section
      data-scroll
      data-scroll-section
      class="container mx-auto md:pl-16 md:pr-16 pl-10 pr-10"
    >
      <div
        class="lg:pt-64 pt-40 text-4xl md:text-5xl lg:text-7xl font-bold banner"
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
      <div class="flex flex-wrap pt-8 enter-up lg:w-4/5">
        <Checkbox text="Diseño Web" />
        <Checkbox text="HTML/CSS" />
        <Checkbox text="Desarrollo Web" />
        <Checkbox text="UX/UI" />
        <Checkbox text="Consultoría" />
        <Checkbox text="E-commerce" />
        <Checkbox text="Estrategia creativa" />
        <Checkbox text="Diseño responsive" />
      </div>
      <div
        class="pt-20 pb-20 xl:text-3xl text-base font-bold text-gray-400 container mx-auto"
      >
        <form action="" class="lg:w-4/5">
          <InputField text="Nombre" />
          <InputField text="Correo" />
          <InputField text="Descripción" />
          <InputField text="Presupuesto" />
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import locomotive from '~/mixins/locomotive.js'

export default {
  mixins: [locomotive],
}
</script>

<style lang="sass" scoped>
.banner > :nth-child(2)
  animation-delay: 0.72s

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
</style>
