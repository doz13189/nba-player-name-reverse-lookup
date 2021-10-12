<template>
  <div class="home">
    <Search />
    
    <!-- <MetaList :meta="reactiveMeta" /> -->
    <!-- <PlayerList :playerList="reactivePlayerList" /> -->

    <p>{{ searchResponse.data }}</p>

  </div>

</template>

<script lang="ts">
import { defineComponent, reactive, provide, ref } from 'vue'
import Search from '@/components/Search.vue'
// import PlayerList from '@/components/PlayerList.vue'
// import MetaList from '@/components/MetaList.vue'
// import { MetaIF, PlayerIF } from '@/domain/models/SearchResponse'
import { SearchResponseOIF, MetaOIF, PlayerOIF } from '@/domain/models/SearchResponseOIF'
import { SearchResponseFactory } from '@/domain/models/SearchResponseFactory'


export default defineComponent({
  components: {
    Search,
    // MetaList,
    // PlayerList
  },
  setup() {

    // リアクティブオブジェクトとして扱えるように data プロパティを持つインターフェースに変更
    interface reactiveSearchResponseOIF {
      data : SearchResponseOIF
    }

    // 空のオブジェクトを定義
    const searchResponse = reactive<reactiveSearchResponseOIF>({ data: SearchResponseFactory.createSearchResponse() })

    // 子コンポーネントに渡す用の関数
    const updateSearchResponse = (value: SearchResponseOIF): void => {
      searchResponse.data = value
    }

    provide('updateSearchResponse', updateSearchResponse)

    // provide('playerList', searchResponse.data.data)
    // provide('meta', searchResponse.data.meta)

    return {
      searchResponse
    }
  }
});
</script>
