import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCategory: "",
  searchQuery: "",
};

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

// Export actions
export const { setCategory, setSearchQuery } = portfolioSlice.actions;

// Export reducer
export default portfolioSlice.reducer;

// Selectors
export const selectCategory = (state) => state.portfolio.selectedCategory;
export const selectSearchQuery = (state) => state.portfolio.searchQuery;
