const commonRouter = [
  {
    path: '/musicPlayer',
    name: 'music-player',
    component: () => import('@/views/MusicPlayerPage'),
    meta: {
      pageTitle: 'musicPlayer',
      breadcrumb: [
        {
          text: 'Dashboards',
        },
        {
          text: 'music player',
          active: true,
        },
      ],
    },
  },
  {
    path: '/commonGridGuid',
    name: 'common-grid-guid',
    component: () => import('@/views/commonGridGuid'),
    meta: {
      pageTitle: 'musicPlayer',
      breadcrumb: [
        {
          text: '공통 그리드 데모',
          active: true,
        },
      ],
    },
  },
]
export default commonRouter
