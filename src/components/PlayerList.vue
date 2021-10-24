<template>

  <div v-if="tableDisplay">
    <div class="m-3">

      <table class="table is-bordered" align="center">
        <thead>
          <th>所属チーム</th>
          <th>英語選手名</th>
          <th>カタカナ表記</th>
          <th>合意状況</th>
        </thead>

        <tbody>
          <tr v-for="player in reactivePlayerList.data"
              :key="player.id"
              >
            <td>
              {{ player.team.full_name }}
            </td>
            <td>
              {{ player.first_name }} {{ player.last_name }}
            </td>
            <td>
              <Katakana :playerId="player.id" />
            </td>
            <td>
              <Approval :playerId="player.id" />
            </td>
          </tr>
        </tbody>
      </table>

    </div>

  </div>

</template>

<script lang="ts">
import { defineComponent, inject, watchEffect,ref } from 'vue'
import { PlayerList } from '@/domain/models/PlayerList'
import { PlayerOIF } from '@/interfaces/ObjectInterfaces'

import Katakana from '@/components/Katakana.vue'
import Approval from '@/components/Approval.vue'


export default defineComponent({
  components: {
    Katakana,
    Approval
  },
  setup() {

    // リアクティブオブジェクトとして扱えるように data プロパティを持つインターフェースに変更
    interface reactivePlayerOIF {
      data : PlayerOIF[]
    }

    // 検索結果のレスポンスを受け取る
    const reactivePlayerList = inject<reactivePlayerOIF>('playerList')

    // 画面のテーブル表示・非表示の分岐用の変数を定義
    const tableDisplay = ref<boolean>(false)

    watchEffect(() => {
      if (reactivePlayerList === undefined) { return }
      if (reactivePlayerList.data === undefined) { return }
      tableDisplay.value = new PlayerList(reactivePlayerList.data).isPlayerList()
    })
    
    return {
      tableDisplay,
      reactivePlayerList
    }
    
  }
});
</script>

<style scoped>
</style>
