<template>

  <div v-if="reactiveIsDisplayed">

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
import { defineComponent, reactive, ref } from 'vue'
import { firestoreProductionConfig } from '@/plugins/firestore'
import { FirestoreService } from '@/domain/repository/firestore'
import { KatakanaOIF, Katakana } from '@/domain/models/Katakana'


export default defineComponent({
  props: {
    playerId: Number
  },
  setup(props) {

    // リアクティブオブジェクトとして扱えるように data プロパティを持つインターフェースに変更
    interface reactiveKatakanaOIF {
      data: KatakanaOIF
    }

    // 画面用のカタカナ表記の変数を定義
    const reactivePlayer = reactive<reactiveKatakanaOIF>({ data: { first_name: '', last_name:'' } })

    // カタカナ表記を表示するかどうかの変数を定義
    const reactiveIsDisplayed = ref<boolean>(false)

    // Katanaka class に渡す firestore class をインスタンス化
    const firestoreService =  new FirestoreService(firestoreProductionConfig)

    if (props.playerId) {
      const katakana = new Katakana(props.playerId, firestoreService)

      // setup は async ファンクションにできないため、then で対応
      katakana.getPlayerslDocument().then(value => {

        reactiveIsDisplayed.value = katakana.isDisplayed

        if (value) {
          reactivePlayer.data = value
        }
      })
    }

    return {
      reactiveIsDisplayed,
      reactivePlayer
    }
    
  }
});
</script>

<style scoped>
</style>
