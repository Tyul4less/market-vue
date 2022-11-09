import mutations from './mutation'
import actions from './action'

export default {
  namespaced: true,
  state: {
    slipFormList: [],
    slipForm: {},
    journalList: ['권대원'],
  },
  getters: {
    GET_SELETED_SLIP(state) {
      return Array.of(state.slipForm)
    },
    GET_SELETED_JOURNALlIST(state) {
      return state.slipForm?.journalList
    },
  },

  mutations,

  actions,

}
