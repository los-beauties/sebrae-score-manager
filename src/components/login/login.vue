<template lang="pug">
v-card.elevation-12
  v-toolbar(color='primary' dark='' flat='')
  v-card-text
    v-form
      v-text-field(label='Email' name='Email' prepend-icon='fas fa-envelope' type='email')
      v-text-field#password(label='Password' name='password' prepend-icon='fas fa-lock' type='password')
  v-card-actions
    v-spacer
    v-btn(color='#2196f3' style="color: white !important" @click="clicked") Criar conta
    v-btn(color='#2196f3' style="color: white !important" @click="login") Login
</template>

<script>
import {
  mapMutations
} from 'vuex'
export default {
  methods: {
    ...mapMutations('app', ['setLogin']),
    login () {
      this.setLogin(true)
    },
    clicked () {
      this.$emit('clicked')
    }
  }
}
</script>
