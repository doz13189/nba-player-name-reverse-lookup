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
        
        <button class="button is-rounded is-primary"
          @click="triggerSearch()"
          data-testid="search-button">
          SEARCH
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue';
import { Search } from '@/domain/models/Search'
import { SearchResponse } from '@/domain/models/SearchResponse'

export default defineComponent({
  emits: ['passDataToParent'],
  setup(props, { emit }) {

    const refSearchString = ref<string>('')
    let search: Search
    
    watchEffect(() => {
      search = new Search(refSearchString.value)
    })

    let searchResponse: SearchResponse
    const triggerSearch = async () => {
      const result = await search.getPlayer()
      if (result !== undefined) {
        searchResponse = result
        emit('passDataToParent', { meta: searchResponse.meta.meta, playerList: searchResponse.playerList.playerList })
      }
    }

    return {
      refSearchString,
      triggerSearch
    }
    
  }
});
</script>

<style scoped>
</style>
