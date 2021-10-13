<template>

  <div v-if="tableDisplay">
    <div class=" my-5">

      <table class="table is-bordered" align="center">
        <thead>
          <th>所属チーム</th>
          <th>選手英語名</th>
          <th>選手日本語名</th>
          <th>承認</th>
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
            <td>-</td>
            <td>非承認</td>
          </tr>
        </tbody>
      </table>

    </div>

  </div>

</template>

<script lang="ts">
import { defineComponent, inject, watchEffect,ref } from 'vue'
import { PlayerList } from '@/domain/models/SearchResponse'
import { PlayerOIF } from '@/domain/models/SearchResponseOIF'

export default defineComponent({
  setup() {

    // リアクティブオブジェクトとして扱えるように data プロパティを持つインターフェースに変更
    interface reactivePlayerOIF {
      data : PlayerOIF[]
    }

    // 検索結果のレスポンスを受け取る
    const reactivePlayerList = inject<reactivePlayerOIF>('playerList')

    // 画面のテーブル表示・非表示の分岐用の変数を定義
    const tableDisplay = ref<boolean>(false)

    // 
    watchEffect(() => {
      if (reactivePlayerList) {
        tableDisplay.value = new PlayerList(reactivePlayerList.data).isPlayerList()
      }
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
