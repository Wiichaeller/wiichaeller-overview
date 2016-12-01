import firebase from 'firebase';

class ToolbarComponent {
    constructor(private $translate: angular.translate.ITranslateService) {
    }
    changeLanguage(langKey) {
        this.$translate.use(langKey);
    };
}

const moduleName = 'wiichaeller.toolbar';
export default moduleName;

angular.module(moduleName, [])
    .component('toolbar', {
        controller: ToolbarComponent,
        controllerAs: '$ctrl',
        templateUrl: 'app/components/toolbar/toolbar.tmpl.html'
    });