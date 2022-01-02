<template>
  <section>
    <h2>demo1: 通过绑定class实现动画效果</h2>
    <div class="demo-container demo1">
      <button class="trigger-button" @click="demo1.showCase1 = !demo1.showCase1">click me</button>
      <div class="content" >
        <p :class="{'transition-class': demo1.showCase1}"
           @transitionstart="transitionstart"
           @transitionrun="transitionrun"
           @transitioncancel="transitioncancel"
           @transitionend="transitionend">这是一个通过css class绑定变量的方式实现的动画效果 js监听动画完成时机</p>
      </div>
    </div>
    <div class="demo-container demo1">
      <button class="trigger-button" @click="demo1.showCase2 = !demo1.showCase2">click me</button>
      <div class="content" >
        <p :class="{'animation-class': demo1.showCase2}"
           @animationstart="animationstart"
           @animationend="animationend"
        >这是一个通过css class绑定变量的方式实现的动画效果 js监听动画完成时机</p>
      </div>
    </div>
  </section>
  <section>
    <h2>demo2: 通过transition组件实现</h2>
    <div class="demo-container demo2">
      <button class="trigger-button" @click="demo2.showCase1 = !demo2.showCase1">click me</button>
      <div class="content">
        <transition name="fade">
          <p v-if="demo2.showCase1">通过Vue提供的transition组件实现过渡效果 transition</p>
        </transition>
      </div>
    </div>
    <div class="demo-container demo2">
      <button class="trigger-button" @click="demo2.showCase2 = !demo2.showCase2">click me</button>
      <div class="content">
        <transition name="bounce" @before-enter="beforeEnter"
                    @enter="enter"
                    @after-enter="afterEnter"
                    @enter-cancelled="enterCancelled"
                    @before-leave="beforeLeave"
                    @leave="leave"
                    @after-leave="afterLeave"
                    @leave-cancelled="leaveCancelled">
          <p v-if="demo2.showCase2">通过Vue提供的transition组件实现动画效果 animation and js hooks</p>
        </transition>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'

const demo1 = reactive({ showCase1: true, showCase2: true })
const demo2 = reactive({ showCase1: true, showCase2: true })

const transitionend = () => {
  console.log('----transitionend')
}
const transitioncancel = () => {
  console.log('------transitioncancel')
}
const transitionrun = () => {
  console.log('------transitionrun')
}
const transitionstart = () => {
  console.log('-------transitionstart')
}
const animationend = () => {
  console.log('-----animationend')
}
const animationstart = () => {
  console.log('----animationstart')
}

const leaveCancelled = () => {
  console.log('---leaveCancelled')
}
const afterLeave = () => {
  console.log('----afterLeave')
}
const leave = () => {
  console.log('-----leave')
}
const beforeLeave = () => {
  console.log('----beforeLeave')
}
const enterCancelled = () => {
  console.log('------enterCancelled')
}
const afterEnter = () => {
  console.log('-----afterEnter')
}
const enter = () => {
  console.log('-----enter')
}
const beforeEnter = () => {
  console.log('----beforeEnter')
}
</script>
<style scoped>
.demo-container {
  width: 80%;
  display: flex;
  padding: 16px;
  border-radius: 10px;
  margin: 0 auto 16px;
  background: #b8d7c8;
  font-size: 16px;
}
.trigger-button {
  padding: 12px 16px;
  min-width: 100px;
  align-self: flex-start;
  border-radius: 4px;
  border: none;
  background: #15c073;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  opacity: 0.8;
  transition: all 0.3s ease-in;
}
.trigger-button:hover, .trigger-button:active {
  opacity: 1;
}
.content {
  padding: 16px;
  margin-left: 16px;
  width: 100%;
  height: 100px;
  border-radius: 5px;
  background: #e1f8ee;
}
.demo1 p {
  transition: all 0.5s ease-in-out;
}
.demo1 .animation-class {
  animation: bounce-in .5s ease-out both;
}
.demo1 .transition-class {
  transform: scale(1.25);
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in .5s ease-out both;
}

.bounce-leave-active {
  animation: bounce-in .5s reverse ease-in both;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
