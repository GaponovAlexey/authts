const { createSlice } = require('@reduxjs/toolkit')

const initialState = {
  email: null,
  token: null,
  id: null,
}

const userSlice = createSlice({
  name: 'auto',
  initialState,
  reducers: {
    setUser(state, { payload, type }) {
      state.email = payload.email
      state.token = payload.token
      state.id = payload.id
    },
    removeUser(state) {
      state.email = null
      state.id = null
      state.token = null
    },
  },
})

export const { setUser, removeUser } = userSlice.actions

export default userSlice.reducer
