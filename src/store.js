import { createStore } from "vuex";
import createMutationsSharer from "vuex-shared-mutations";


export default createStore({
  state() {
    return {
      id: 1,
    };
  },
  mutations: {
    send_id(state, id) {
        console.log('pasx')
      state.id = id;
    },
  },
});
