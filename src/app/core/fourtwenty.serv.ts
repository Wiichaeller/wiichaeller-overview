import firebase from 'firebase';
const moduleName = 'wiichaeller.core.420';
export default moduleName;
export { IFourTwenty };
interface IFourTwenty {
    blazeIt(): angular.IPromise<boolean>;
}
class FourTwenty {
    deferred: angular.IDeferred<boolean>;
    constructor(private $q: angular.IQService) {
        this.deferred = $q.defer();
        this.watch();
    }

    private watch() {
        let date = new Date();
        setInterval(() => {
            if ((date.getHours() == 4 || date.getHours() == 16) && (date.getMinutes() == 20)) {
                this.deferred.resolve();
            }
        }, 1000);
    }

    public blazeIt(): angular.IPromise<boolean> {
        return this.deferred.promise;
    }
}

angular.module(moduleName, [])
    .service('FourTwenty', FourTwenty);