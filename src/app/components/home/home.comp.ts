import * as angular from 'angular';

class Home {
    constructor() {
        console.log('home');
    }
}

const moduleName = 'wiichaeller.home';
export default moduleName;

angular.module(moduleName, [])
    .component('home', {
        controller: Home,
        controllerAs: '$ctrl',
        templateUrl: 'app/components/home/home.tmpl.html'
    });