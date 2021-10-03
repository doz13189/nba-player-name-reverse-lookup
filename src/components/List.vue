<template>
  <div>
    <p>
      {{ reactiveMeta.total_pages }}
      {{ reactiveMeta.current_page }}
      {{ reactiveMeta.next_page }}
      {{ reactiveMeta.per_page }}
      {{ reactiveMeta.total_count }}
    </p>
  </div>

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
  props: ['meta', 'playerList'],
  setup(props) {

    let reactiveMeta = reactive<any>({})
    let reactivePlayerList = reactive<any>({})

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
