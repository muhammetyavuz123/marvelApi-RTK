import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMarvels = createAsyncThunk(
  "marvels/fetchMarvels",
  async (offset) => {
    const response = await axios.get(
      `https://gateway.marvel.com/v1/public/characters?limit=10&offset=${offset}&ts=1&apikey=8cf96a35fa238c333ff3048c2bcd2831&hash=432dfd7d397af01560333f861abc6b75`
    );
    return response.data;
  }
);

export const fetchMarvel = createAsyncThunk(
  "marvels/fetchMarvel",
  async (id) => {
    const response = await axios.get(
      `https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=8cf96a35fa238c333ff3048c2bcd2831&hash=432dfd7d397af01560333f861abc6b75`
    );
    console.log("resss", response.data);
    return response.data;
  }
);

const initialState = {
  marvels: [],
  marvel: {},
};

const marvelSlice = createSlice({
  name: "marvels",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchMarvels.pending, (state, action) => {
      console.log("Pending");
    });

    builder.addCase(fetchMarvels.fulfilled, (state, action) => {
      state.marvels = action.payload.data.results;
    });
    builder.addCase(fetchMarvels.rejected, (state, action) => {
      console.log("Rejected");
    });

    // Details
    builder.addCase(fetchMarvel.pending, (state, action) => {
      console.log("Pending");
    });

    builder.addCase(fetchMarvel.fulfilled, (state, action) => {
      state.marvel = action.payload.data.results;
    });
    builder.addCase(fetchMarvel.rejected, (state, action) => {
      console.log("Rejected");
    });
  },
});

export default marvelSlice.reducer;
export const getAllMarvels = (state) => state.marvels.marvels;
export const getMarvel = (state) => state.marvels.marvel;
