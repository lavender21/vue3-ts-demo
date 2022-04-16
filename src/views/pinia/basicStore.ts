import { defineStore } from 'pinia'

export const useBasicStore = defineStore('basic', {
  state: () => {
    return {
      items: [{ id: 1, name: 'test11111' }, { id: 2, name: 'test222' }, { id: 3, name: 'test33333' }]
    }
  }
})
