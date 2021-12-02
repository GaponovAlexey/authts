import { getAuth } from 'firebase/auth'
import { configureStore } from '@reduxjs/toolkit'
import userReduser from './userSlice'

export const store = configureStore({
  reducer: {
    user: userReduser,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>