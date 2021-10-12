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
import { defineComponent, reactive } from 'vue';
// import { Meta, PlayerList } from '@/domain/models/SearchResponse'

export default defineComponent({
  setup() {


    return {
      reactiveMeta
    }
    
  }
});
</script>

<style scoped>
</style>
