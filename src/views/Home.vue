<template>
  <div class="home">
    <Search @passDataToParent="receiveSearchResult($event)" />
    <List :meta="reactiveMeta" :playerList="reactivePlayerList"  />
  </div>

</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import Search from '@/components/Search.vue';
import List from '@/components/List.vue';
import { MetaIF, PlayerIF } from '@/domain/models/SearchResponse'

export default defineComponent({
  components: {
    Search,
    List
  },
  setup() {

    let reactiveMeta = reactive<object>({})
    let reactivePlayerList = reactive<object>({})

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
