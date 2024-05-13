import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { errorPopUp } from "../../helpers/toatify";
import { fetchAllDeaneries } from "../Api";

export const getAllDeanery = createAsyncThunk(
  "/user/deanery/",
  async ({ rejectWithValue }) => {
    console.log(8);
    try {
      const res = await fetchAllDeaneries();
      console.log(res);
      return res.data;
    } catch (err) {
      errorPopUp({ msg: err.response.data.error });

      return rejectWithValue(err.response.data);
    }
  }
);

const deanerySlice = createSlice({
  name: "deanery",
  initialState: { deaneries: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllDeanery.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getAllDeanery.fulfilled, (state, action) => {
      state.isLoading = false;
      state.deaneries = action.payload;
    });
    builder.addCase(getAllDeanery.rejected, (state, action) => {
      state.isError = true;
    });
  },
});

export default deanerySlice.reducer;
