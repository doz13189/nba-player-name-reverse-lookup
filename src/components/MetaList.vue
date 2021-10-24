<template>

  <div v-if="metaButtonDisplay">

    <div v-if="warningDisplay">
      <div class="has-text-centered m-5">
        <p class="has-text-danger">検索結果が 100 件を超えています。</p>
        <p class="has-text-danger">もう少し名前を詳しく教えてくれませんか？</p>
      </div>
    </div>

  </div>

</template>

<script lang="ts">
import { defineComponent, ref, watchEffect, inject } from 'vue'
import { Meta } from '@/domain/models/Meta'
import { MetaOIF } from '@/interfaces/ObjectInterfaces'


export default defineComponent({
  setup() {

    // リアクティブオブジェクトとして扱えるように data プロパティを持つインターフェースに変更
    interface reactiveMetaOIF {
      data : MetaOIF
    }

    // 検索結果のレスポンスを受け取る
    const reactiveMeta = inject<reactiveMetaOIF>('meta')

    // 画面の現在ページ・総ページの表示・非表示の分岐用の変数を定義
    const metaButtonDisplay = ref<boolean>(false)

    // 画面の注意書きの表示・非表示の分岐用の変数を定義
    const warningDisplay = ref<boolean>(false)

    watchEffect(() => {
      if (reactiveMeta === undefined) { return }
      if (reactiveMeta.data === undefined) { return }

      const meta =  new Meta(reactiveMeta.data)
      metaButtonDisplay.value = meta.isMeta()
      warningDisplay.value =  meta.isOver100()

    })

    return {
      reactiveMeta,
      metaButtonDisplay,
      warningDisplay
    }
    
  }
});
</script>

<style scoped>
</style>
