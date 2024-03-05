import { createSlice } from "@reduxjs/toolkit";
import { addCourse } from "./courseSlice";
const formSlice = createSlice({
  name: "form",
  // initialState=ilk durum
  initialState: {
    name: "",
    description: "",
    cost: 0,
  },
  reducers: {
    changeName(state, action) {
      // debugger;
      state.name = action.payload;
    },
    changeDesc(state, action) {
      // debugger;
      state.description = action.payload;
    },
    changeCost(state, action) {
      // debugger;
      state.cost = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(addCourse, (state, action) => {
      state.name = "";
      state.description = "";
      state.cost = 0;
    });
  },
});

export const formReducer = formSlice.reducer;
export const { changeName, changeCost, changeDesc } = formSlice.actions;
