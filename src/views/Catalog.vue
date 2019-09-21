<template lang="pug">
v-container(fill-height='' fluid='' grid-list-xl='')
  v-layout(row wrap='')
    v-flex(xs12 md6 lg3 v-for="(item, index) in 12" :key="index")
      cardProduct
</template>

<script>
const cardProduct = () => import('@/components/card/product')
export default {
  components: { cardProduct }
}
</script>
