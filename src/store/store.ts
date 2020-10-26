import { createStore } from 'vuex'
import { GlobalDataProp } from './types'
import { testPosts, testData } from '@/mock/testData'

export default createStore<GlobalDataProp>({
  state: {
    columns: testData,
    posts: testPosts,
    user: { isLogin: false, name: '' }
  }
})
