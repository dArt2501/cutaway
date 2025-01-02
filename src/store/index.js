import { createStore } from 'vuex'

export default createStore({
  state () {
    return {
      isDropdownOpen: false
    }
  },
  mutations: {
    openDropdown(state) {
      state.isDropdownOpen = true
    },

    closeDropdown(state) {
      state.isDropdownOpen = false
    }
  },
  actions: {}
})