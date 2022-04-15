import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//create action
export const fetchProfileAction = createAsyncThunk(
  "profile/list",
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`https://api.github.com/users/${user}`);
      return data; //payload from reducer
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response);
    }
  }
);

export const fetchReposAction = createAsyncThunk(
  "repos/list",
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `https://api.github.com/users/${user}/repos`
      );
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response);
    }
  }
);

//slices
const reposSlices = createSlice({
  name: "repos",
  initialState: { user: "webdevsimplified" },
  extraReducers: (builder) => {
    //profile
    builder.addCase(fetchProfileAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchProfileAction.fulfilled, (state, action) => {
      state.loading = false;
      state.profile = action?.payload;
      state.error = undefined;
    });
    builder.addCase(fetchProfileAction.rejected, (state, action) => {
      state.loading = false;
      state.profile = undefined;
      state.error = action?.payload;
    });

    //repolist
    builder.addCase(fetchReposAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchReposAction.fulfilled, (state, action) => {
      state.loading = false;
      state.reposList = action?.payload;
      state.error = undefined;
    });
    builder.addCase(fetchReposAction.rejected, (state, action) => {
      state.loading = false;
      state.reposList = undefined;
      state.error = action?.payload;
    });
  },
});


export default reposSlices.reducer;
