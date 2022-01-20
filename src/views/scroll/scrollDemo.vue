<template>
  <section>
    <h2>scroll event demo</h2>
    <div
      class="demo-container scroll-demo"
      @scroll="handleScroll"
    >
      this is a custom scroll event demo,this is a custom scroll event demo
      this is a custom scroll event demo,this is a custom scroll event demo
      this is a custom scroll event demo,this is a custom scroll event demo
      this is a custom scroll event demo,this is a custom scroll event demo
      this is a custom scroll event demo,this is a custom scroll event demo
      this is a custom scroll event demo,this is a custom scroll event demo
    </div>
    <hello-world />
  </section>
</template>
<script lang="ts" setup>
import { userStore } from '@/store/custom/userStore'
import HelloWorld from '@/components/HelloWorld.vue'
import { messageStore } from '@/store/custom/messageStore'
import { useCounterStore } from '@/store/pinia/counterStore'

const handleScroll = (e) => {
  e.preventDefault()
  user.setUsername('xunxun')
  messageStore.setMessage('test store')
  console.log(e)
}
const user = userStore
const message = messageStore

const counter = useCounterStore()

counter.count++
// with autocompletion ✨
counter.$patch({ count: counter.count + 1 })
// or using an action instead
counter.increment()
</script>
<style scoped>
@import '../../styles/index.css';
.scroll-demo {
  width: 200px;
  height: 100px;
  overflow: scroll;
}
</style>
