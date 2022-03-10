export const state = () => ({
  editMode: true,
  theme: 'light' /* light or dark ☀️/🌚 */,

  selectedGradient: 1 /* According to *colors* position */,
  gradients: [
    { id: 1, name: 'Breeze', gradient: { from: '#CD2F9A', to: '#6C3CEA' } },
    { id: 2, name: 'Candy', gradient: { from: '#A68FFB', to: '#E8BFF8' } },
    { id: 3, name: 'Crimson', gradient: { from: '#FD6262', to: '#763535' } },
    { id: 4, name: 'Falcon', gradient: { from: '#BAE0E9', to: '#393957' } },
    { id: 5, name: 'Meadow', gradient: { from: '#5AD296', to: '#9F882F' } },
    { id: 6, name: 'Midnight', gradient: { from: '#4CC7C7', to: '#212336' } },
    { id: 7, name: 'Raindrop', gradient: { from: '#8BC4F9', to: '#1F58AC' } },
    { id: 8, name: 'Sunset', gradient: { from: '#FFCE72', to: '#FF7C31' } },
  ],
});

export const mutations = import('./mutations.js');
