import { StoreApi, UseBoundStore, create } from 'zustand'
import { persist } from 'zustand/middleware'

export type UserSocials = {
  twitter?: string
  instagram?: string
  discord?: string
  spotify?: string
}

export type UserAvatar = {
  blob?: Blob
  dataURL: string
}

export type ToneUser = {
  isLoggedIn: boolean
  userId: string
  display: string
  description: string
  colors: [string, string]
  socials: UserSocials
  location: string
  avatar: UserAvatar
}

export type UseUserStore = UseBoundStore<StoreApi<ToneUser>>

export default create<ToneUser>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      userId: '',
      display: '',
      description: '',
      colors: ['', ''],
      socials: {},
      location: '',
      avatar: {
        dataURL: '',
      },
    }),
    { name: 'tone.user' }
  )
)
