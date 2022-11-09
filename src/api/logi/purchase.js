import { logiApi } from '../index'

const axiosConfig = {
  headers: {
    'Content-Type': 'application/json',
  },
}

// 전체조회
function searchOrderList(payload) {
  return logiApi.get('/purchase/getOrderList', {
    params: {
      startDate: payload.startDate,
      endDate: payload.endDate,
    },
  })
}

export {
  // eslint-disable-next-line import/prefer-default-export
  searchOrderList,
}
