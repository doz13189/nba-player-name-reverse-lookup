<template>

  {{ playerList.data.data }}

  <!-- <div v-if="Boolean(Object.keys(playerList).length)">

    <table class="table is-bordered" align="center">
      <thead>
        <th>team</th>
        <th>name</th>
      </thead>

      <tbody>
        <tr v-for="player in playerList"
            :key="player.id"
            >
          <td >
            {{ player.team.full_name }}
          </td>
          <td >
            {{ player.first_name }} {{ player.last_name }}
          </td>
        </tr>
      </tbody>
    </table>

  </div> -->

</template>

<script lang="ts">
import { defineComponent, inject, isReactive } from 'vue';
// import { PlayerList } from '@/domain/models/SearchResponse'
// import { PlayerOIF } from '@/domain/models/SearchResponseOIF'
import { SearchResponseOIF } from '@/domain/models/SearchResponseOIF'


export default defineComponent({
  setup() {

    // 検索結果のレスポンスを受け取る
    const playerList = inject<SearchResponseOIF>('playerList')
    console.log(isReactive(playerList))

    return {
      playerList
    }
    
  }
});
</script>

<style scoped>
</style>
