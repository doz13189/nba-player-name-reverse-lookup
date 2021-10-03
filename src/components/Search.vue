<template>
  <div class="columns is-mobile is-centered">
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
      <p>
      {{ refSearchString }}
      </p>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue';
import { Search } from '@/domain/models/Search'

export default defineComponent({
  setup() {

    const refSearchString = ref<string>('')
    let search: Search = new Search(refSearchString.value)
    
    watchEffect(() => {
      search = new Search(refSearchString.value)
      console.log('search.searchString', search.searchString)
    })

    const triggerSearch = () => {
      search.getPlayer()
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
