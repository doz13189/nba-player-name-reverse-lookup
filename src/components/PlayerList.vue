<template>

  <table class="table is-bordered" align="center">
    <thead>
      <th>team</th>
      <th>name</th>
    </thead>

    <tbody>
      <tr v-for="player in reactivePlayerList"
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
  
</template>

<script lang="ts">
import { defineComponent, reactive, watchEffect } from 'vue';
// import { Search } from '@/domain/models/Search'

export default defineComponent({
  props: ['playerList'],
  setup(props) {

    let reactivePlayerList = reactive<any>({})

    watchEffect(() => {
      Object.assign(reactivePlayerList, props.playerList)
    })

    return {
      reactivePlayerList
    }
    
  }
});
</script>

<style scoped>
</style>
