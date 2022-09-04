import create from 'zustand';

const useStore = create((set) => ({
  // bears: 0,
  // increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  // removeAllBears: () => set({ bears: 0 }),
  user: {},
  isLoggedIn: false,
  blogs: [],
  isIntroDone: false,
  isDarkMode: true,
  setUser: (payload) => set({ user: payload }),
  setIsLoggedIn: (payload) => set({ isLoggedIn: payload }),
  setBlogs: (payload) => set({ blogs: payload }),
  setIsIntroDone: (payload) => set({ isIntroDone: payload }),
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));

export default useStore;
