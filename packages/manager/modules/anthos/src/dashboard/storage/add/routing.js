export default /* @ngInject */ ($stateProvider) => {
  $stateProvider.state('anthos.dashboard.storage.add', {
    url: '/add',
    views: {
      modal: {
        component: 'addStorage',
      },
    },
    layout: 'modal',
    resolve: {
      breadcrumb: () => null,

      goBack: /* @ngInject */ (goToStorage) => (message, type) =>
        goToStorage(message, type),

      addStorageHitTracking: () => {
        return 'add-volume';
      },
    },
  });
};
