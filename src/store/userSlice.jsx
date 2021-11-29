// const { configureStore, createSlice } = require("@reduxjs/toolkit");

const { createSlice } = require("@reduxjs/toolkit")

// const initialState = {
//   email: null,
//   token: null,
//   id: null
// }

// const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     setUser(state, action) {
//       state.email = action.payload.email
//       state.token = action.payload.token
//       state.id = action.payload.id
//     },
//     removeUser(state) {
//       state.email = null
//       state.token = null
//       state.id = null
//     }
//   }
// })

// export const {setUser, removeUser } = userSlice.actions

// export default userSlice.reducer



const initialState = {
  email: null,
  token: null,
  id: null,
}

const userSlice = createSlice({
  name: 'auto',
  initialState,
  reducers: {
    setUser (state, {payload, type}) {
      state.email = payload.email
      state.token = payload.token
      state.id = payload.id
    },
    removeUser (state) {
      state.email = null
      state.id= null
      state.token = null
    }
  }
})

export const {setUser,removeUser } = userSlice.actions

export default userSlice.reducer