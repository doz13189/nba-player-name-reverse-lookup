<template>

  <p class="is-5 has-text-black">
    日本語の発音を知りたい NBA 選手名を入力してください。
  </p>

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
import { defineComponent, ref, watchEffect, inject } from 'vue';
import { Search } from '@/domain/models/Search'
import { SearchResponseOIF } from '@/domain/models/SearchResponseOIF'

export default defineComponent({
  setup() {  

    const refSearchString = ref<string>('')
    let search: Search

    // 検索結果のレスポンスを親コンポーネントに送る用の関数
    type updateSearchResponseType = (value: SearchResponseOIF) => void
    const updateSearchResponse = inject<updateSearchResponseType>('updateSearchResponse')
    
    watchEffect(() => {
      // 検索文字の入力によって値オブジェクトを生成
      search = new Search(refSearchString.value)
    })

    const triggerSearch = async () => {

      // 検索の実行
      const result = await search.getPlayer()

      // 検索結果を確認
      if (result === undefined) { return }

      // 検索結果が問題ない場合、レスポンスを親コンポーネントに送る
      const searchResponse: SearchResponseOIF = result
      if (updateSearchResponse) { updateSearchResponse(searchResponse) }

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
