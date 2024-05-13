import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { errorPopUp, successPopUp } from "../../helpers/toatify";
import { loginUser } from "../Api";

export const userLogin = createAsyncThunk(
  "/user/login",
  async ({ payload, navigate }, { rejectWithValue }) => {
    try {
      const res = await loginUser(payload);
      successPopUp({
        msg: `Welcome back, ${res?.data?.firstName}`,
        duration: 500,
      });
      navigate("/dashboard/home");
      return res.data;
    } catch (err) {
      errorPopUp({ msg: err.response.data.error });

      return rejectWithValue(err.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
    error: {},
    isError: false,
    deaneries: [],
    userInfo: {},
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      localStorage.removeItem("user");
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        localStorage.setItem("user", JSON.stringify({ ...action.payload }));
        state.user = action.payload;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.isError = true;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
