import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "",
  searchQuery: "",
  randomTestimonial: null,
  lastTestimonialIndex: null, // 🔹 Simpan indeks terakhir agar tidak mengulang
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
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * state.testimonials.length);
      } while (randomIndex === state.lastTestimonialIndex); // 🔹 Pastikan tidak memilih yang sama dua kali berturut-turut

      state.lastTestimonialIndex = randomIndex;
      state.randomTestimonial = state.testimonials[randomIndex];
    },
  },
});

export const { setCategory, setSearchQuery, setRandomTestimonial } = portfolioSlice.actions;
export const selectCategory = (state) => state.portfolio.category;
export const selectSearchQuery = (state) => state.portfolio.searchQuery;
export const selectRandomTestimonial = (state) => state.portfolio.randomTestimonial;

export default portfolioSlice.reducer;
