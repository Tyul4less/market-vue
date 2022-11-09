import OutsourcRoute from '@/router/logi/OutsourceRoute'
import ProductionRoute from './ProductionRoute'
import salesRoute from './SalesRoute'

const ERP = '/logi'
const logiRouter = [
  {
    path: `${ERP}/home`,
    name: 'logiHome',
    component: () => import('@/views/logistic/Home.vue'),
    meta: {
      pageTitle: 'LOGI',
      breadcrumb: [
        {
          text: 'LOGI Home',
          active: true,
        },
      ],
    },
  },
  ...salesRoute,
  ...ProductionRoute,
  ...OutsourcRoute,
]
export default logiRouter
