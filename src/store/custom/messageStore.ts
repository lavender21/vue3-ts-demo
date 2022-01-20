import { reactive } from 'vue'
import { IS_DEBUG } from '@/store/custom/config'

export const messageStore = {
  state: reactive({
    message: 'Hello!'
  }),

  setMessage (newValue: string) {
    if (IS_DEBUG) {
      console.log('setMessageAction triggered with', newValue)
    }

    this.state.message = newValue
  }
}
