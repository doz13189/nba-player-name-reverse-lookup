<template>

  <div v-if="reactiveApproval.data.status">
    <span>
      合意済
    </span>    
  </div>
  <div v-else>
    <span>
      未合意
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

    interface ApprovalOIF {
      status: boolean
    }

    const reactiveApproval = reactive<{ data: ApprovalOIF }>({ data: { status: false } })

    const firestoreService =  new FirestoreService(firestoreProductionConfig)
    firestoreService.getDocument('approval', String(props.playerId)).then(result => {
      reactiveApproval.data = result
    })

    return {
      reactiveApproval
    }
    
  }
});
</script>

<style scoped>
</style>
