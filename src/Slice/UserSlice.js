import { createSlice } from '@reduxjs/toolkit'

export const UserSlice = createSlice({
  name: 'counter',
  initialState: {
    value: JSON.parse(localStorage.getItem('user'))?JSON.parse(localStorage.getItem('user')):null,
  },
  reducers: {

    userData: (state, action) => {
      state.value = action.payload
    },
  },
})


export const { userData } = UserSlice.actions

export default UserSlice.reducer