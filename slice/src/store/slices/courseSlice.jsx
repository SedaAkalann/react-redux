import { createSlice, nanoid } from "@reduxjs/toolkit";
const courseSlice = createSlice({
  name: "course",
  initialState: {
    searchTerm: "",
    data: [],
  },
  reducers: {
    addCourse(state, action) {
      // buradaki action bir objedir ve diğer yerde yazdığımız değişken direkt action olmaz action.payload değişkenimiz oluyor ve ben birden fazla değişken yazmak istersem eğer ki payloadı bir obje ye çeviririm.yani ilgili yerde bu metodu kullanırken değişkenlerimi obje içinde yazarım ve o değişkenleri tutan da mantık olarak payload oluyor zaten
      // debugger;
      // push metoduyla ilk başta anlamamıştım şu ki:bu metodla ekliyoruz ve ben ekledikçe dizimin elemeanları çoğalır
      state.data.push({
        name: action.payload.name,
        description: action.payload.description,
        cost: action.payload.cost,
        id: nanoid(),
        //  nanoid benzersiz idler oluşturur
      });
    },
    changeSerchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    deleteCourse(state, action) {
      state.data = state.data.filter((item) => {
        return item.id !== action.payload;
      });
    },
  },
});
export const { addCourse, deleteCourse, changeSerchTerm } = courseSlice.actions;
export const courseReducer = courseSlice.reducer;
