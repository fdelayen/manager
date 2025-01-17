export const state = {
  name: 'sign-up.details',
  url: 'details',
  views: {
    details: {
      component: 'ovhSignUpDetails',
    },
  },
  resolve: {
    onFieldError: /* @ngInject */ (trackError) => (field) =>
      trackError('step2', field),
    trackField: /* @ngInject */ (atInternet) => (field, value) => {
      atInternet.trackClick({
        type: 'action',
        name: `accountcreation::${field}::${value}`,
      });
    },
  },
  atInternet: {
    rename: 'accountcreation-step2',
  },
};

export const registerState = /* @ngInject */ ($stateProvider) => {
  $stateProvider.state(state.name, state);
};

export default {
  registerState,
  state,
};
