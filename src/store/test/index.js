import axios from 'axios'

export default {
    namespaced: true,
    state: {
        companyInfo: '',
    },
    getters: {},
    mutations: {
        getCompanyCode(state, response) {
            const { companyCode, companyName } = response.data.gridRowJson[0]
            const companyInfo = [{ companyCode, companyName }]
            state.companyInfo = companyInfo
        }
    },
    actions: {
        async GET_COMPANY_CODE({ commit }) {
            console.log(123213213)
            const response = await hrApi.get('/company/searchCompany')
            console.log(response)
            commit('getCompanyCode', response)
        },
    },
}
