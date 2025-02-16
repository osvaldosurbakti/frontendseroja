import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "",
  searchQuery: "",
  randomTestimonial: null, // 🔹 Tambahkan state ini
  testimonials: [
    { text: "Pelayanan sangat baik, proyek selesai tepat waktu!", name: "Budi Santoso" },
    { text: "Hasil kerja sangat memuaskan, desain modern dan rapi.", name: "Siti Rahma" },
    { text: "Rekomendasi terbaik untuk konstruksi!", name: "Andi Wijaya" },
  ],
};

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setRandomTestimonial: (state) => {
      const randomIndex = Math.floor(Math.random() * state.testimonials.length);
      state.randomTestimonial = state.testimonials[randomIndex]; // 🔹 Update state dengan testimonial acak
    },
  },
});

export const { setCategory, setSearchQuery, setRandomTestimonial } = portfolioSlice.actions;
export const selectCategory = (state) => state.portfolio.category;
export const selectSearchQuery = (state) => state.portfolio.searchQuery;
export const selectRandomTestimonial = (state) => state.portfolio.randomTestimonial;

export default portfolioSlice.reducer;
