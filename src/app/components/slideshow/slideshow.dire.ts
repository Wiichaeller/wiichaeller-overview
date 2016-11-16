import * as angular from 'angular';

interface ISlideShowItem {
    getName(): string;
    getText(): string;
}
class SlideShowItemIntern {
    constructor(public name: string, public text: string){

    }
}
class Slideshow {
    public items : ISlideShowItem[];
    public internItems : SlideShowItemIntern[] = [];
    constructor(){
        this.items.forEach((item) => {
            this.internItems.push(new SlideShowItemIntern(item.getName(), item.getText()));
        });
    }
    static link(){
    }
}

const moduleName = 'wiichaeller.slideshow';
export default moduleName;
export { ISlideShowItem };
angular.module(moduleName, [])
    .directive('slideshow', function () {
        return {
            controller: Slideshow,
            controllerAs: '$ctrl',
            templateUrl: 'app/components/slideshow/slideshow.tmpl.html',
            restrict: 'E',
            bindToController: true,
            link: Slideshow.link,
            scope: {
                'items': '='
            }
        };
    });