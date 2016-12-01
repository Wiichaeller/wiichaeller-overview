import * as angular from 'angular';
import * as firebase from 'firebase';

class Home {
    private data: AngularFireObject;
    constructor(private $firebaseObject: AngularFireObject) {
        var ref = new Firebase()
        this.data $firebaseObject(ref);
    }
}

const moduleName = 'wiichaeller.feedback';
export default moduleName;

angular.module(moduleName, [])
    .component('feedback', {
        controller: Home,
        controllerAs: '$ctrl',
        templateUrl: 'app/components/feedback/feedback.tmpl.html'
    });