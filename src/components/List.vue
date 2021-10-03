<template>
  <div>
    <p>
      {{ reactiveMeta }}
      {{ reactivePlayerList }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, watchEffect } from 'vue';
// import { Search } from '@/domain/models/Search'

export default defineComponent({
  props: ['meta', 'playerList'],
  setup(props) {

    let reactiveMeta = reactive<object>({})
    let reactivePlayerList = reactive<object>({})

    watchEffect(() => {
      Object.assign(reactiveMeta, props.meta)
      Object.assign(reactivePlayerList, props.playerList)
    })

    return {
      reactiveMeta,
      reactivePlayerList
    }
    
  }
});
</script>

<style scoped>
</style>
