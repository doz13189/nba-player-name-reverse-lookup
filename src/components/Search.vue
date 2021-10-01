<template>
  <div class="columns is-mobile is-centered">
    <div class="field has-addons">
      <div class="control">
        <input
          class="input is-rounded"
          type="text"
          v-model="refSearchString"
          @keyup.enter="search.getPlayer()"
          data-testid="search-input"
          >
          <!--
            @focus="focus"
            @blur="blur"
          -->
      </div>
      <div class="control">
        
        <button class="button is-rounded is-primary"
          @click="search.getPlayer()"
          data-testid="search-button">
          SEARCH
        </button>
      </div>
      {{ refSearchString }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Search } from '@/domain/models/Search'

export default defineComponent({
  setup() {

    const refSearchString = ref<string>('beal')
    const search = new Search(refSearchString.value)

    return {
      refSearchString,
      search
    }
    
  }
});
</script>

<style scoped>
</style>
