import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

// Define a type for the slice state
interface ContactState {
  value: number
}

// Define the initial state using that type
const initialState: ContactState = {
  value: 0,
}

export const contactSlice = createSlice({
  name: 'contact',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = contactSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectContact = (state: RootState) => state.contact.value

export default contactSlice.reducer