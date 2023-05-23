import { createSlice } from "@reduxjs/toolkit";

import type { RootState } from "./store";

// Define a type for the slice state
interface ContactState {
  contact: {
    firstName: string;
    lastName: string;
    status: string;
  }[];
}

// Define the initial state using that type
const initialState: ContactState = {
  contact: [
    {
      firstName: "FIRST",
      lastName: "NAME",
      status: "0",
    },
  ],
};

export const contactSlice = createSlice({
  name: "contact",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contact.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.contact.splice(action.payload, 1);
    },
    updateContact: (state, action) => {
      console.log(action.payload);
      state.contact[action?.payload?.id]=action?.payload?.data;
    },
  },
});

export const { addContact, deleteContact, updateContact } =
  contactSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectContact = (state: RootState) => state.contact;

export default contactSlice.reducer;
