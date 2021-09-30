<template>
  <div class="columns is-mobile is-centered">
    <div class="field has-addons">
      <div class="control">
        <input
          class="input is-rounded"
          type="text"
          v-model="searchText"
          @keyup.enter="search()"
          data-testid="search-input"
          >
          <!--
            @focus="focus"
            @blur="blur"
          -->
      </div>
      <div class="control">
        
        <button class="button is-rounded is-primary"
          @click="search()"
          data-testid="search-button">
          SEARCH
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Search } from '@/domain/models/Search'

export default defineComponent({
  setup() {
    console.log('search.vue')

    const refSearchString = ref<string>('')
    new Search(refSearchString.value).execute()
  }
});
</script>

<style scoped>
</style>
