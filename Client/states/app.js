import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
};

const AppSlice = createSlice({
  name: "AppReducer",
  initialState,
  reducers: {
    setLoading(state, action) {
      const { payload: loading } = action;
      return {
        ...state,
        loading,
      };
    },
  },
});

const { setLoading } = AppSlice.actions;

export { setLoading };

export default AppSlice.reducer;
