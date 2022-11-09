import { MutationTree } from 'vuex'
import { WorkInstruction } from '@/store/logi/production/workInstruction/state'

export const mutations: MutationTree<WorkInstruction> = {

  SHOW_WORK_INFO_LIST(state, gridRow) {
    state.detailGrid = []
    state.grid = gridRow
  },
  SET_TABLE(state, tableColumns) {
    state.tableColumns = tableColumns[0].tableColumns
    state.detailTableColumns = tableColumns[0].detailTableColumns
  },
}

export default mutations
