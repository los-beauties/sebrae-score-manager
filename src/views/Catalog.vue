<template lang="pug">
v-container(fill-height='' fluid='' grid-list-xl='')
  v-layout(row wrap='')
    v-flex(xs12 md6 lg3 v-for="(item, index) in items" :key="index")
      cardProduct(@buy="setItems")
  .text-center
    v-snackbar(v-model='snackbar', :timeout='timeout' color="success" top)
      | {{ text }}
</template>

<script>
import {
  mapMutations, mapState
} from 'vuex'
const cardProduct = () => import('@/components/card/product')
export default {
  components: { cardProduct },
  data: () => ({
    snackbar: false,
    text: 'Compra efetuada com sucesso!',
    timeout: 1000
  }),
  computed: {
    ...mapState('app', ['money', 'products']),
    items () {
      return 1 - this.products
    }
  },
  methods: {
    ...mapMutations('app', ['setMoney', 'setProduct']),
    setItems () {
      this.snackbar = true
      console.log(this.money, this.products)
      this.setProduct(this.products + 1)
      this.setMoney(this.money - 30.00)
      this.items = this.items - 1
    }
  }
}
</script>
