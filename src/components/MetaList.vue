<template>
  <div>
    <p>
      {{ reactiveMeta.total_pages }}
      {{ reactiveMeta.current_page }}
      {{ reactiveMeta.next_page }}
      {{ reactiveMeta.per_page }}
      {{ reactiveMeta.total_count }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, watchEffect } from 'vue';
// import { Meta, PlayerList } from '@/domain/models/SearchResponse'

export default defineComponent({
  props: ['meta'],
  setup(props) {

    let reactiveMeta = reactive<any>({})
    // let meta: Meta = new Meta({
    //   total_pages : 0,
    //   current_page : 0,
    //   next_page : 0,
    //   per_page : 0,
    //   total_count : 0
    // })

    // watchEffect(() => {
    //   meta = new Meta(Object.assign(reactiveMeta, props.meta))
    // })

    return {
      reactiveMeta
    }
    
  }
});
</script>

<style scoped>
</style>
