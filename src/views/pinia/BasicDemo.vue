<template>
  <section>
    <h2>Pinia basic use demo</h2>
    <div class="demo-container">
      <div v-for="item in basicStore.items" :key="item.id">
        <p>{{item.name}}</p>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { useBasicStore } from '@/views/pinia/basicStore'

const basicStore = useBasicStore()

</script>
<style lang="scss" scoped>
@import '../../styles/index.css';

</style>
