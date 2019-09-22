<template lang="pug">
  v-app
    v-dialog(v-model='dialog')
      v-card
        v-card-title.headline(v-if="!sim") Você conhece a empresa Beauty Date?
        v-card-title.headline(v-else) Essa empresa está no Endereço Av. Sete de Setembro, 4751 - 4 - Água Verde, Curitiba - PR, 80250-205?
        v-card-text
        v-card-actions
          .flex-grow-1
          v-btn(color='blue' text='' @click='dialog = false' style="color: white !important")
            | Não sei
          v-btn(color='red' text='' @click='dialog = false' style="color: white !important" v-if="!sim")
            | Não
          v-btn(color='red' text='' @click='dialog = false' style="color: white !important" v-else)
            | Endereço incorreto
          v-btn(color='green darken-1' text='' @click='sim = true' style="color: white !important" v-if="!sim")
            | Sim
          v-btn(color='green darken-1' text='' @click='closeDialog' style="color: white !important" v-else)
            | Esse é o endereço correto
    router-view(v-if="landing")
    login(v-if="!login && !landing")
    core-filter(v-if="login && !landing")
    core-toolbar(v-if="login && !landing")
    core-drawer(v-if="login && !landing")
    core-view(v-if="login && !landing")
</template>
<script>
import {
  mapState,
  mapMutations
} from 'vuex'
const login = () => import('@/views/Login')
export default {
  components: { login },
  data: () => ({
    landing: false,
    dialog: false,
    sim: false
  }),
  computed: {
    ...mapState('app', ['login', 'money'])
  },
  watch: {
    '$route' (to, from) {
      if (to.name === 'LandingPage') {
        this.landing = true
      } else {
        this.landing = false
      }
    }
  },
  methods: {
    ...mapMutations('app', ['setMoney']),
    closeDialog () {
      this.dialog = false
      this.setMoney(this.money + 2.00)
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/index.scss';
/* Remove in 1.2 */
.v-dialog {
  width: initial !important;
}
.v-datatable thead th.column.sortable i {
  vertical-align: unset;
}
// .v-dialog:not(.v-dialog--fullscreen) {
//   width: 1024px;
//   height: initial;
// }
// .v-dialog:not(.v-dialog--fullscreen) {
//     max-height: 80vh;
//     width: 70vw;
//     @media screen and (max-width: 1200px){
//       max-height: 80%;
//       width: 100vw;
//     }
//     @media screen and (max-width: 600px){
//       max-height: 80%;
//       width: 100vw;
//     }
// }
</style>
