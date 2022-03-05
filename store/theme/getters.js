export default {
  background({ gradients, selectedGradient }) {
    return gradients[selectedGradient].gradient;
  },
};
