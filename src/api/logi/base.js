import { logiApi } from '../index'

function searchItem(divisionCode) {
  console.log(divisionCode)
  return logiApi.get('/base/codeList', {
    params: {
      divisionCode,
    },
  })
}
function getStandardUnitPrice(itemCode) {
  console.log(itemCode)
  return logiApi.get('/base/getStandardUnitPrice', {
    params: {
      itemCode,
    },
  })
}
export {
  searchItem, getStandardUnitPrice,
}
