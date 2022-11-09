export const mutations = {
    SHOW_WORK_INFO_LIST(state, gridRow) {
        state.detailGrid = [];
        state.grid = gridRow;
    },
    SET_TABLE(state, tableColumns) {
        state.tableColumns = tableColumns[0].tableColumns;
        state.detailTableColumns = tableColumns[0].detailTableColumns;
    },
};
export default mutations;
