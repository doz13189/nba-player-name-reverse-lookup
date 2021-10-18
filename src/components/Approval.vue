<template>
  <div v-if="reactiveIsDisplayed">
    <span>
      <!-- 以下のデータを "合意済" という表示名にするべきだが、ロジックとして小さいためハードコーディング -->
      <!-- {{ reactiveApproval.data.status }} -->
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
import { defineComponent, reactive, ref } from 'vue'
import { firestoreProductionConfig } from '@/plugins/firestore'
import { FirestoreService } from '@/domain/repository/firestore'
import { ApprovalOIF, Approval } from '@/domain/models/Approval'


export default defineComponent({
  props: {
    playerId: Number
  },
  setup(props) {

    // リアクティブオブジェクトとして扱えるように data プロパティを持つインターフェースに変更
    interface reactiveApprovalOIF {
      data: ApprovalOIF
    }

    // 画面用の合意状況の変数を定義
    const reactiveApproval = reactive<reactiveApprovalOIF>({ data: { status: false } })

    // 画面用の合意状況を表示するかどうかの変数を定義
    const reactiveIsDisplayed = ref<boolean>(false)

    // Approval class に渡す firestore class をインスタンス化
    const firestoreService =  new FirestoreService(firestoreProductionConfig)

    if (props.playerId) {
      const approval = new Approval(props.playerId, firestoreService)

      // setup は async ファンクションにできないため、then で対応
      approval.getApprovalDocument().then(value => {

        reactiveIsDisplayed.value = approval.isDisplayed

        if (value) {
          reactiveApproval.data = value
        }
      })

    }

    return {
      reactiveIsDisplayed,
      reactiveApproval
    }
    
  }
});
</script>

<style scoped>
</style>
