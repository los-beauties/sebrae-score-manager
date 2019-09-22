<template lang="pug">
  v-content
    #core-view
      v-fade-transition(mode='out-in')
        router-view
</template>

<script>
export default {
  metaInfo () {
    return {
      title: 'Sebrae Recompensa'
    }
  }
}
</script>

<style>
#core-view {
  padding-bottom: 100px;
}
</style>
