import * as angular from 'angular';
import * as ui from 'angular-ui-router';

const moduleName = 'wiichaeller.states';
export default moduleName;

function StateConfig($stateProvider: ui.StateProvider, $urlRouterProvider: ui.UrlRouterProvider) {
    $stateProvider.state('app', {
        component: 'home',
        url: '/'
    });
    $urlRouterProvider.otherwise('/');
}

angular.module(moduleName, [
    'ui.router'
]).config(StateConfig);