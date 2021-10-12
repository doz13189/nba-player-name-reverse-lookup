<template>
  <div class="home">
    <Search @passDataToParent="receiveSearchResult($event)" />
    
    <!-- <MetaList :meta="reactiveMeta" />
    <PlayerList :playerList="reactivePlayerList" /> -->

    <p>location : {{ location }}</p>
    <!-- {{ geolocation }} -->
    {{ response }}

  </div>

</template>

<script lang="ts">
import { defineComponent, reactive, provide, ref } from 'vue'
import Search from '@/components/Search.vue'
import PlayerList from '@/components/PlayerList.vue'
import MetaList from '@/components/MetaList.vue'
// import { MetaIF, PlayerIF } from '@/domain/models/SearchResponse'
import { SearchResponseOIF } from '@/domain/models/SearchResponseOIF'


export default defineComponent({
  components: {
    Search,
    MetaList,
    PlayerList
  },
  setup() {

    const location = ref<string>('North Pole')
    const response = reactive({})
    // const geolocation = reactive<object>({
    //   longitude: 90,
    //   latitude: 135
    // })

    const updateLocation = (value: any): void => {
      Object.assign(response, value)
    }

    provide('location', location)
    provide('updateLocation', updateLocation)

    // provide('SearchResponse', new PlayerList([{
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
    //   }])
    // )
    const a = [{
        id : 0,
        first_name : '',
        height_feet : null,
        height_inches : null,
        last_name : '',
        position : '',
        team : {
          id: 0,
          abbreviation : '',
          city : '',
          conference : '',
          division : '',
          full_name : '',
          name : ''
        },
        weight_pounds : null
      }]

    
    provide('SearchResponse', reactive(a))

    let reactiveMeta = reactive<any>({})
    let reactivePlayerList = reactive<any>({})

    // const receiveSearchResult = (event: { meta: MetaIF, playerList: PlayerIF }) => {
    //   Object.assign(reactiveMeta, event.meta)
    //   Object.assign(reactivePlayerList, event.playerList)
    // }

    return {
      a,
      location,
      response,
      // geolocation,
      // receiveSearchResult,
      reactiveMeta,
      reactivePlayerList
    }
  }
});
</script>
