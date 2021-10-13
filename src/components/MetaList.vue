<template>
  <div>
    <p>
      {{ reactiveMeta.data.total_pages }}
      {{ reactiveMeta.data.current_page }}
      {{ reactiveMeta.data.next_page }}
      {{ reactiveMeta.data.per_page }}
      {{ reactiveMeta.data.total_count }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import { MetaOIF } from '@/domain/models/SearchResponseOIF'


export default defineComponent({
  setup() {

    // リアクティブオブジェクトとして扱えるように data プロパティを持つインターフェースに変更
    interface reactiveMetaOIF {
      data : MetaOIF
    }

    // 検索結果のレスポンスを受け取る
    const reactiveMeta = inject<reactiveMetaOIF>('meta')

    return {
      reactiveMeta
    }
    
  }
});
</script>

<style scoped>
</style>
