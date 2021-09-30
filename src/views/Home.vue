<template>
  <div class="home">
    <Searchbox/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Searchbox from '@/components/Searchbox.vue';

export default defineComponent({
  components: {
    Searchbox,
  },
});
</script>
