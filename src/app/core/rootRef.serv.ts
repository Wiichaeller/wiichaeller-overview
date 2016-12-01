import firebase from 'firebase';
const moduleName = 'wiichaeller.core.rootRef';
export default moduleName;

angular.module(moduleName, [])
    .constant('FirebaseUrl', 'https://wiichaeller.firebaseio.com/')
    .service('RootRef', function (FirebaseUrl: string) {
        return firebase.database().ref();
    });