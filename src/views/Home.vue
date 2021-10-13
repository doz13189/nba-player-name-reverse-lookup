<template>
  <div class="home">
    <Search />
    
    <MetaList />
    <PlayerList />

    <hr>
    <p>debug</p>

    {{ searchResponse }}

  </div>

</template>

<script lang="ts">
import { defineComponent, reactive, readonly, provide, watchEffect } from 'vue'
import Search from '@/components/Search.vue'
import PlayerList from '@/components/PlayerList.vue'
import MetaList from '@/components/MetaList.vue'
import { SearchResponseOIF, MetaOIF, PlayerOIF } from '@/domain/models/SearchResponseOIF'
import { SearchResponseFactory } from '@/domain/models/SearchResponseFactory'


export default defineComponent({
  components: {
    Search,
    MetaList,
    PlayerList
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


    // リアクティブオブジェクトとして扱えるように data プロパティを持つインターフェースに変更
    interface reactiveMetaOIF {
      data : MetaOIF
    }

    // 空のオブジェクトを定義
    const meta = reactive<reactiveMetaOIF>({ data: SearchResponseFactory.createSearchResponse().meta })

    // リアクティブオブジェクトとして扱えるように data プロパティを持つインターフェースに変更
    interface reactivePlayerOIF {
      data : PlayerOIF[]
    }

    // 空のオブジェクトを定義
    const playerList = reactive<reactivePlayerOIF>({ data: SearchResponseFactory.createSearchResponse().data })

    watchEffect(() => {
      meta.data = searchResponse.data.meta
      playerList.data = searchResponse.data.data
    })

    provide('meta', readonly(meta))
    provide('playerList', readonly(playerList))

    return {
      searchResponse
    }
  }
});
</script>
