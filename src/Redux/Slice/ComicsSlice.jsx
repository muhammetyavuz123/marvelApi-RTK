import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchComics = createAsyncThunk(
  "comics/fetchComics",
  async (id) => {
    const response = await axios.get(
      `https://gateway.marvel.com/v1/public/characters/${id}/comics?ts=1&apikey=8cf96a35fa238c333ff3048c2bcd2831&hash=432dfd7d397af01560333f861abc6b75`
    );
    return response.data;
  }
);

const initialState = {
  comics: [],
};

const comicSlice = createSlice({
  name: "comics",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchComics.pending, (state, action) => {
      console.log("Pending");
    });

    builder.addCase(fetchComics.fulfilled, (state, action) => {
      state.comics = action.payload.data.results;
    });
    builder.addCase(fetchComics.rejected, (state, action) => {
      console.log("Rejected");
    });
  },
});

export default comicSlice.reducer;
export const getAllcomics = (state) => state.comics.comics;
