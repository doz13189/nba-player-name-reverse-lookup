<template>
  <div class="home">
    <Search @passDataToParent="receiveSearchResult($event)" />
    <MetaList :meta="reactiveMeta" />
    <PlayerList :playerList="reactivePlayerList" />
  </div>

</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import Search from '@/components/Search.vue'
import PlayerList from '@/components/PlayerList.vue'
import MetaList from '@/components/MetaList.vue'
import { MetaIF, PlayerIF } from '@/domain/models/SearchResponse'

export default defineComponent({
  components: {
    Search,
    MetaList,
    PlayerList
  },
  setup() {

    let reactiveMeta = reactive<any>({})
    let reactivePlayerList = reactive<any>({})

    const receiveSearchResult = (event: { meta: MetaIF, playerList: PlayerIF }) => {
      Object.assign(reactiveMeta, event.meta)
      Object.assign(reactivePlayerList, event.playerList)
    }

    return {
      receiveSearchResult,
      reactiveMeta,
      reactivePlayerList
    }
  }
});
</script>
