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


    constructor(private $timeout: angular.ITimeoutService, private $translate: angular.translate.ITranslateService) {
        let lineAnimation: number = 500;
        $timeout(() => {
            this.animate.lines.top = true;
            this.animate.lines.right = true;
            this.animate.lines.bottom = true;
            this.animate.lines.left = true;
        }, lineAnimation * 1);
        $timeout(() => {
            this.animate.title = true;
        }, lineAnimation * 2);
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