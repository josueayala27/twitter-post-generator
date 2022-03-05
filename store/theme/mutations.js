export default {
  setGradient(state, index) {
    state.selectedGradient = index;
  },

  setTheme(state, theme) {
    if (theme === 'light') state.theme = 'dark';
    else state.theme = 'light';
  },
};
