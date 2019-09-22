<template lang="pug">
  v-app
    router-view(v-if="landing")
    login(v-if="!login && !landing")
    core-filter(v-if="login && !landing")
    core-toolbar(v-if="login && !landing")
    core-drawer(v-if="login && !landing")
    core-view(v-if="login && !landing")
</template>
<script>
import {
  mapState
} from 'vuex'
const login = () => import('@/views/Login')
export default {
  components: { login },
  data: () => ({
    landing: false
  }),
  computed: {
    ...mapState('app', ['login'])
  },
  watch: {
    '$route' (to, from) {
      if (to.name === 'LandingPage') {
        this.landing = true
      } else {
        this.landing = false
      }
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
