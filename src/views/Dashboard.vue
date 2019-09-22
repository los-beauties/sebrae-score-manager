<template lang="pug">
v-container(fill-height='' fluid='' grid-list-xl='')
  v-layout(row wrap='')
    v-flex(xs12)
      v-stepper(v-model='e1')
        v-stepper-header
          v-stepper-step(:complete='e1 > 1' step='1')
            img(src="../img/achievement.png" height="35")
          v-divider
          v-stepper-step(:complete='e1 > 2' step='2')
            img(src="../img/achievement.png" height="35")
          v-divider
          v-stepper-step(:complete='e1 > 3' step='3')
            img(src="../img/achievement.png" height="35")
        v-stepper-items
          v-stepper-content(step='1')
            v-text-field(label="CNPJ")
            v-text-field(label="Segmento")
            v-text-field(label="Razão social")
            v-text-field(label="Nome fantasia")
            v-btn(color='#85bb65' style='color: white !important' @click='setAnswer(2)')
              | Ganhar R$ 10,00!
          v-stepper-content(step='2')
            v-text-field(label="E-mail empresarial")
            v-text-field(label="Telefone")
            v-text-field(label="Endereço")
            v-btn(color='#85bb65' style='color: white !important' @click='setAnswer(3)')
              | Ganhar R$ 10,00!
          v-stepper-content(step='3')
            v-text-field(label="Quantidade de funcionários ")
            v-text-field(label="Quantidade de clientes")
            v-text-field(label="Porte da empresa")
            v-text-field(label="CNAE")
            v-btn(color='#85bb65' style='color: white !important' @click='setAnswer(4)')
              | Ganhar R$ 10,00!
</template>
<script>
import {
  mapMutations,
  mapState
} from 'vuex'
export default {
  data: () => ({
    login: true,
    e1: 0
  }),
  computed: {
    ...mapState('app', ['money'])
  },
  methods: {
    ...mapMutations('app', ['setMoney']),
    setAnswer (id) {
      this.e1 = id
      this.setMoney(this.money + 10.00)
    }
  }
}
</script>
