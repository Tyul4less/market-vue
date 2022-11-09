var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { showWorkInfoList } from '@/api/logi/production.js';
const actions = {
    setTable(state, tableColumns) {
        state.commit('SET_TABLE', tableColumns);
    },
    // 작업지시조회
    // ActionContext안에 state commit dispatch가 들어있음
    // eslint-disable-next-line consistent-return
    SHOW_WORK_INFO_LIST(state) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data } = yield showWorkInfoList();
                console.log(data);
                const gridRow = data.gridRowJson;
                console.log(gridRow);
                state.commit('SHOW_WORK_INFO_LIST', gridRow);
                // commit('showWorkInfoList', data)
            }
            catch (err) {
                if (err instanceof Error) {
                    throw new Error(err.message);
                }
                return null;
            }
        });
    },
};
export default actions;
