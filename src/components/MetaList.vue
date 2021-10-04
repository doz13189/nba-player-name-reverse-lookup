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
// import { Search } from '@/domain/models/Search'

export default defineComponent({
  props: ['meta'],
  setup(props) {

    let reactiveMeta = reactive<any>({})

    watchEffect(() => {
      Object.assign(reactiveMeta, props.meta)
    })

    return {
      reactiveMeta
    }
    
  }
});
</script>

<style scoped>
</style>
