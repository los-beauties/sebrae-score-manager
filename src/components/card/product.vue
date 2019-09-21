<template lang="pug">
v-card.mx-auto()
  v-img(src='https://cdn.vuetifyjs.com/images/cards/sunshine.jpg' height='200px')
  v-card-title
    div Top western road trips
    span.grey--text.subtitle-1 1,000 miles of wonder
  v-card-actions
    v-layout(row wrap).pb-3
      v-btn(text='') Comprar
      v-btn(@click='show = !show')
        | Detalhes
  v-expand-transition
    div(v-show='show')
      v-card-text
        | I&apos;m a thing. But, like most politicians, he promised more than he could deliver. You won&apos;t have time for sleeping, soldier, not with all the bed making you&apos;ll be doing. Then we&apos;ll go with that data file! Hey, you add a one and two zeros to that or we walk! You&apos;re going to do his laundry? I&apos;ve got to find a way to escape.
</template>

<script>
export default {
  data: () => ({
    show: false
  })
}
</script>
<style lang="scss">
</style>
