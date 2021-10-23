<template>

  <div class="has-text-centered m-5">
    <p class="is-5 has-text-black">
      カタカナ表記を知りたい NBA 選手の英語名を入力してください。
    </p>
  </div>

  <div class="columns is-mobile is-centered m-5">
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


  <div class="has-text-centered m-5">
    <p class="is-5 has-text-danger">
      {{ refResponseMessage }}
    </p>
  </div>

</template>

<script lang="ts">
import { defineComponent, ref, watchEffect, inject } from 'vue';
import { Search } from '@/domain/models/Search'
import { SearchResponseOIF } from '@/interfaces/ObjectInterfaces'


export default defineComponent({
  setup() {  

    // 検索ボックスの入力文字用の変数を定義
    const refSearchString = ref<string>('')
    let search: Search

    // 検索実行結果のメッセージ用の変数を定義
    const refResponseMessage = ref<string>('')

    // 検索結果のレスポンスを親コンポーネントに送る用の関数
    type updateSearchResponseType = (value: SearchResponseOIF) => void
    const updateSearchResponse = inject<updateSearchResponseType>('updateSearchResponse')
    
    watchEffect(() => {
      // 検索文字の入力によって値オブジェクトを生成
      search = new Search(refSearchString.value)
    })

    const triggerSearch = async () => {
      // エラーメッセージの初期化
      // 以下はドメインロジックとして取り込むべき
      refResponseMessage.value = ''

      // 検索の実行
      const result = await search.getPlayer()

      // 検索実行の結果がエラー
      if (search.isError(result)) { return }

      // isError で以降の処理には undefined は流れないが、typescript のエラーが取れないため
      if (result === undefined) { return }

      // 検索実行の結果が0件
      if (search.isZero(result)) {
        // 以下はドメインロジックとして取り込むべき
        refResponseMessage.value = '検索結果は 0 件です。'
        return
      }

      // 検索結果が問題ない場合、レスポンスを親コンポーネントに送る
      const searchResponse: SearchResponseOIF = result
      if (updateSearchResponse) { updateSearchResponse(searchResponse) }

    }

    return {
      refSearchString,
      refResponseMessage,
      triggerSearch
    }
    
  }
});
</script>

<style scoped>
</style>
