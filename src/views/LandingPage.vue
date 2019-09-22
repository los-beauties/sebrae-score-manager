<template lang="pug">
  #LandingPage
    v-btn(ref='button' color='primary' block='' @click='$vuetify.goTo("#imagem2", options)') scroll
    #imagem1
      img(src="../img/fundo1.png")
    #imagem2
      img(src="../img/fundo2.png")
    #imagem3
      img(src="../img/fundo3.png")
</template>
<script>

export default {
  data: () => ({
    fundo1: () => import('../img/cashback.png'),
    fundo2: () => import('@/img/fundo2.png'),
    fundo3: () => import('@/img/fundo3.png')
  }),
  computed: {
    options () {
      return {
        duration: 1000,
        offset: 0,
        easing: 'linear'
      }
    }
  }
}
</script>
