import angular from 'angular';

import '@ovh-ux/ui-kit';
import 'angular-translate';
import ngAtInternet from '@ovh-ux/ng-at-internet';
import ngOvhFeatureFlipping from '@ovh-ux/ng-ovh-feature-flipping';

import choice from './installation/choice';
import inputs from './inputs';
import gabarit from './installation/gabarit';
import ovh from './installation/ovh';
import progress from './installation/progress';
import install from './install';

import component from './general-information.component';

const moduleName = 'ovhManagerBmServerComponentsDashboardGeneralInformation';

angular
  .module(moduleName, [
    ngAtInternet,
    'oui',
    'pascalprecht.translate',
    ngOvhFeatureFlipping,
    choice,
    inputs,
    gabarit,
    ovh,
    progress,
    install,
  ])
  .component('serverGeneralInformation', component)
  .run(/* @ngTranslationsInject:json ./translations */);

export default moduleName;
