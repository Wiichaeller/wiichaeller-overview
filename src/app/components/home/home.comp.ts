import * as angular from 'angular';
import { ISlideShowItem } from '../slideshow/slideshow.dire';

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

class SlideShowItem implements ISlideShowItem{
    constructor(private $translate: angular.translate.ITranslateService, 
    private translationName: string,
    private translationText: string){

    }
    public getName(): string{
        return this.$translate.instant(this.translationName);
    }
    public getText(): string{
        return this.$translate.instant(this.translationText);
    }
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
        let lineAnimation : number = 500;
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
    public slideshow : SlideShowItem[] = [
        new SlideShowItem(this.$translate, 'slideshow.0.name', 'slideshow.0.value')
    ]
}

const moduleName = 'wiichaeller.home';
export default moduleName;

angular.module(moduleName, [])
    .component('home', {
        controller: Home,
        controllerAs: '$ctrl',
        templateUrl: 'app/components/home/home.tmpl.html'
    });