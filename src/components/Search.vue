<template>
  <div class="columns is-mobile is-centered m-3">
    <div class="field has-addons">
      <div class="control">
        <input
          class="input is-rounded"
          type="text"
          v-model="refSearchString"
          @keyup.enter="triggerSearch()"
          data-testid="search-string"
          >
          <!--
            @focus="focus"
            @blur="blur"
          -->
      </div>
      <div class="control">
        
        <!-- @click="triggerSearch()" -->
        <button class="button is-rounded is-primary"
          @click="updateUserLocation('aaa')"
          data-testid="search-button">
          SEARCH
        </button>
      </div>
    </div>
    
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect, inject } from 'vue';
import { Search } from '@/domain/models/Search'
// import { SearchResponseOIF } from '@/domain/models/SearchResponseOIF'

export default defineComponent({
  emits: ['passDataToParent'],
  setup() {  

    // const userLocation = inject('location', 'The Universe')
    // const userGeolocation = inject('geolocation')
    const updateUserLocation: any = inject('updateLocation')
    

    const refSearchString = ref<string>('')
    let search: Search
    
    watchEffect(() => {
      search = new Search(refSearchString.value)
    })

    // let searchResponse: SearchResponseOIF
    const triggerSearch = async () => {
      const result = await search.getPlayer()
      if (result !== undefined) {
        if (updateUserLocation) {
          updateUserLocation(result)
        }
        // inject('SearchResponse', searchResponse)
        // emit('passDataToParent', { meta: searchResponse.meta.meta, playerList: searchResponse.playerList.playerList })
      }
    }

    return {
      updateUserLocation,
      refSearchString,
      triggerSearch
    }
    
  }
});
</script>

<style scoped>
</style>
