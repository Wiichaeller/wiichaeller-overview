import RootRef from '../../core/rootRef.serv';

class Feedback {
    ref: Firebase;
    constructor(private RootRef: Firebase, private $firebaseObject: AngularFireObject, private $firebaseArray: AngularFireArray) {
        this.ref = RootRef.child('feedback');
    }

    public get(): AngularFireArray {
        return this.$firebaseArray(this.ref);
    }
}

const moduleName = 'wiichaeller.feedback.data';
export default moduleName;

angular.module(moduleName, [RootRef])
    .service('Feedback', Feedback);