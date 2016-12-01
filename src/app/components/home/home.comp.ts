import * as angular from 'angular';
import Toolbar from '../toolbar/toolbar.comp';
import FourTwentyModule, { IFourTwenty } from '../../core/fourtwenty.serv';
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
    private animate: IHomeAnimation = {
        lines: {
            top: false,
            bottom: false,
            right: false,
            left: false
        },
        title: false
    };
    private test: String = "asd";
    private costumer: Object = {
        image: 'https://scontent.xx.fbcdn.net/v/t1.0-9/14570371_1586856344951450_7703284831115121613_n.jpg?oh=897b024269afc65bc33fe8329a73804c&oe=58C56DAF',
        name: 'Kevin Schatt'
    };

    constructor(private $timeout: angular.ITimeoutService, private $translate: angular.translate.ITranslateService, private FourTwenty: IFourTwenty) {
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

        FourTwenty.blazeIt().then(() => {
            this.$translate.use('wiichaeller');
            this.costumer = {
                image: 'http://wiichaeller.site/old/rösti.gif',
                name: 'Florin Simmen'
            }
        });
    }
}

const moduleName = 'wiichaeller.home';
export default moduleName;

angular.module(moduleName, [Toolbar, FourTwentyModule])
    .component('home', {
        controller: Home,
        controllerAs: '$ctrl',
        templateUrl: 'app/components/home/home.tmpl.html'
    });