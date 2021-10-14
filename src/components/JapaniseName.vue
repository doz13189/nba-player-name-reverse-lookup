<template>

  <div v-if="reactivePlayer.data.first_name !== '' && reactivePlayer.data.last_name !== ''">

    <span>
      {{ reactivePlayer.data.first_name }}・{{ reactivePlayer.data.last_name }}
    </span>
    
  </div>
  <div v-else>
    <span>
      未登録
    </span>
  </div>




</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { firestoreProductionConfig } from '@/plugins/firestore'
import { FirestoreService } from '@/domain/repository/firestore'

export default defineComponent({
  props: {
    playerId: Number
  },
  setup(props) {

    interface PlayerOIF {
      first_name: string
      last_name:string
    }

    const reactivePlayer = reactive<{ data: PlayerOIF }>({ data: { first_name: '', last_name:'' } })

    const firestoreService =  new FirestoreService(firestoreProductionConfig)
    firestoreService.getDocument('players', String(props.playerId)).then(result => {
      reactivePlayer.data = result
    })

    return {
      reactivePlayer
    }
    
  }
});
</script>

<style scoped>
</style>
