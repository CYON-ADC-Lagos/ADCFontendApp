import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { errorPopUp } from "../../helpers/toatify";
import { fetchAllParish } from "../Api";

export const getAllParishById = createAsyncThunk(
  "/parish/",
  async ({ rejectWithValue }) => {
    console.log(8);
    try {
      const res = await fetchAllParish();
      console.log(res);
      return res.data;
    } catch (err) {
      errorPopUp({ msg: err.response.data.error });

      return rejectWithValue(err.response.data);
    }
  }
);

const parishSlice = createSlice({
  name: "parish",
  initialState: { parishes: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllParishById.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getAllParishById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.parishes = action.payload;
    });
    builder.addCase(getAllParishById.rejected, (state, action) => {
      state.isError = true;
    });
  },
});

export default parishSlice.reducer;
