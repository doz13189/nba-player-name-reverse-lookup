<template>
  <div class="home">
    <Search @passDataToParent="receiveSearchResult($event)" />
    <MetaList :meta="reactiveMeta" />
    <PlayerList :playerList="reactivePlayerList" />

    {{ location }}
    {{ geolocation }}

  </div>

</template>

<script lang="ts">
import { defineComponent, reactive, provide, ref } from 'vue'
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

    const location = ref<string>('North Pole')
    const geolocation = reactive<object>({
      longitude: 90,
      latitude: 135
    })

    const updateLocation: Function = (): void => {
      location.value = 'South Pole'
    }


    provide('location', location)
    provide('geolocation', geolocation)
    provide('updateLocation', updateLocation)

    let reactiveMeta = reactive<any>({})
    let reactivePlayerList = reactive<any>({})

    const receiveSearchResult = (event: { meta: MetaIF, playerList: PlayerIF }) => {
      Object.assign(reactiveMeta, event.meta)
      Object.assign(reactivePlayerList, event.playerList)
    }

    return {
      location,
      geolocation,
      receiveSearchResult,
      reactiveMeta,
      reactivePlayerList
    }
  }
});
</script>
