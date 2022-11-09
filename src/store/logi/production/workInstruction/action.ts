import { ActionContext, ActionTree } from 'vuex'
import { showWorkInfoList } from '@/api/logi/production.js'
import { WorkInstruction } from '@/store/logi/production/workInstruction/state'

const actions: ActionTree<WorkInstruction, Object> = {

  setTable(state: ActionContext<WorkInstruction, Object>, tableColumns) {
    state.commit('SET_TABLE', tableColumns)
  },

  // 작업지시조회
  // ActionContext안에 state commit dispatch가 들어있음
  // eslint-disable-next-line consistent-return
  async SHOW_WORK_INFO_LIST(state: ActionContext<WorkInstruction, Object>) {
    try {
      const { data } = await showWorkInfoList()
      console.log(data)

      const gridRow = data.gridRowJson
      console.log(gridRow)
      state.commit('SHOW_WORK_INFO_LIST', gridRow)

      // commit('showWorkInfoList', data)
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(err.message)
      }
      return null
    }
  },

}

export default actions
