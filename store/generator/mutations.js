export default {
  /**
   *
   * @param {*} state
   * @param {array} args [0] key; [1] value
   */
  setStore(state, args) {
    state[args[0]] = args[1];
  },
};
