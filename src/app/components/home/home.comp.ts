import * as angular from 'angular';

interface ILinesAnimation {
    top: boolean;
    bottom: boolean;
    right: boolean;
    left: boolean;
}

interface IHomeAnimation {
    lines: ILinesAnimation;
    title: boolean;
}

class Home {
    public animate: IHomeAnimation = {
        lines: {
            top: false,
            bottom: false,
            right: false,
            left: false
        },
        title: false
    };
    constructor($timeout: angular.ITimeoutService) {
        let lineAnimation : number = 500;
        $timeout(() => {
            this.animate.lines.top = true;
        }, lineAnimation * 1);
        $timeout(() => {
            this.animate.lines.right = true;
        }, lineAnimation * 2);
        $timeout(() => {
            this.animate.lines.bottom = true;
        }, lineAnimation * 3);
        $timeout(() => {
            this.animate.lines.left = true;
        }, lineAnimation * 4);
        $timeout(() => {
            this.animate.title = true;
        }, lineAnimation * 5);
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