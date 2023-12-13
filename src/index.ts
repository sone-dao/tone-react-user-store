import { StoreApi, UseBoundStore, create } from 'zustand'
import { persist } from 'zustand/middleware'

export type ToneUser = {
  isLoggedIn: boolean
  sessionId: string
  userId: string
  display: string
  darkMode: boolean
}

export type UseUserStore = UseBoundStore<StoreApi<ToneUser>>

export default create<ToneUser>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      sessionId: '',
      userId: '',
      display: '',
      darkMode: false,
    }),
    { name: 'tone.user' }
  )
)
