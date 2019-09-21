<template lang="pug">
v-container(fill-height='' fluid='' grid-list-xl='')
  v-layout(row wrap='')
    v-stepper(value='1')
      v-stepper-header
        v-stepper-step(step='1') Curso EAD
        v-divider
        v-stepper-step(step='2') Consultoria
        v-divider
        v-stepper-step(step='3') Carro
        v-divider
        v-stepper-step(step='4') Carro
</template>
<script>
export default {
  data: () => ({
    login: true
  })
}
</script>
