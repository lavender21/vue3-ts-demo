import { reactive } from 'vue'
import { IS_DEBUG } from '@/store/custom/config'

export const userStore = {
  state: reactive({
    username: 'runting'
  }),

  setUsername (newValue: string) {
    if (IS_DEBUG) {
      console.log('setMessageAction triggered with', newValue, this)
    }

    this.state.username = newValue
  }
}
