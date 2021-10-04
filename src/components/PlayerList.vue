<template>

  <div v-if="Boolean(Object.keys(reactivePlayerList).length)">

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

  </div>

</template>

<script lang="ts">
import { defineComponent, reactive, watchEffect } from 'vue';
import { PlayerList } from '@/domain/models/SearchResponse'

export default defineComponent({
  props: ['playerList'],
  setup(props) {

    let reactivePlayerList = reactive<any>({})
    // let players: PlayerList = new PlayerList([{
    //     id : 0,
    //     first_name : '',
    //     height_feet : null,
    //     height_inches : null,
    //     last_name : '',
    //     position : '',
    //     team : {
    //       id: 0,
    //       abbreviation : '',
    //       city : '',
    //       conference : '',
    //       division : '',
    //       full_name : '',
    //       name : ''
    //     },
    //     weight_pounds : null
    //   }]
    // )

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
