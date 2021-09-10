import controller from './controller';
import template from './template.html';

export default {
  bindings: {
    serviceName: '<',
    goBack: '<',
    host: '<',
    trackPage: '<',
    trackClick: '<',
    restartHostHitTracking: '<',
  },
  controller,
  template,
};
