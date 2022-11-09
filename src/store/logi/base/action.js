import {
  searchItem, getStandardUnitPrice,
} from '@/api/logi/base'

export default {
  async SEARCH_ITEM({ commit }, divisionCode) {
    try {
      const res = await searchItem(divisionCode)
      const itemList = res.data.detailCodeList
      commit('SEARCH_ITEM', itemList)
      return itemList
    } catch (err) {
      throw new Error(err)
    }
    // getStandardUnitPrice
  },
  async GET_STANDARD_UNIT_PRICE({ commit }, itemCode) {
    try {
      const res = await getStandardUnitPrice(itemCode)
      const gridRow = res.data.gridRowJson
      return gridRow
      // commit('setGrid', gridRow)

      // return res
    } catch (err) {
      throw new Error(err)
    }
  },
}
