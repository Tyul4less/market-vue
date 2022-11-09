const OutsourceRoute = [

  {
    path: '/logi/outsource/order',
    name: 'order',
    component: () => import('@/views/logistic/outsourc/order/OrderPage'),
    meta: {
      pageTitle: '발주 및 재고처리',
      breadcrumb: [
        {
          text: '자재구매 관리',
        },
        {
          text: '발주 및 재고처리',
        },
      ],
    },
  },
]

export default OutsourceRoute
