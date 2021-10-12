<template>
  <div class="home">
    <Search />
    
    <!-- <MetaList /> -->
    <PlayerList />

    <hr>

    {{ searchResponse }}

  </div>

</template>

<script lang="ts">
import { defineComponent, reactive, provide } from 'vue'
import Search from '@/components/Search.vue'
import PlayerList from '@/components/PlayerList.vue'
// import MetaList from '@/components/MetaList.vue'
// import { MetaIF, PlayerIF } from '@/domain/models/SearchResponse'
import { SearchResponseOIF } from '@/domain/models/SearchResponseOIF'
import { SearchResponseFactory } from '@/domain/models/SearchResponseFactory'


export default defineComponent({
  components: {
    Search,
    PlayerList
    // MetaList,
  },
  setup() {

    // リアクティブオブジェクトとして扱えるように data プロパティを持つインターフェースに変更
    interface reactiveSearchResponseOIF {
      data : SearchResponseOIF
    }

    // 空のオブジェクトを定義
    const searchResponse = reactive<reactiveSearchResponseOIF>({ data: SearchResponseFactory.createSearchResponse() })

    // 子コンポーネントに渡す用の関数
    const updateSearchResponse = (searchResponseValue: SearchResponseOIF): void => {
      searchResponse.data = searchResponseValue
    }

    provide('updateSearchResponse', updateSearchResponse)

    // playerList 用の変数を用意して、リアクティブに個別に渡す
    provide('playerList', searchResponse)
    // provide('meta', searchResponse.data.meta)

    return {
      searchResponse
    }
  }
});
</script>
