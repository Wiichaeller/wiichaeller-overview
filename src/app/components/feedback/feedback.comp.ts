import Feedback from './feedback.serv';
import firebase from 'firebase';

class Home {
    private feedbacks: AngularFireArray;
    private name: string;
    private text: string;
    private focusName: boolean;
    constructor(private Feedback) {
        this.feedbacks = Feedback.get();
    }
    private newFeedback() {
        if (this.name && this.text) {
            this.feedbacks.$add({
                name: this.name,
                text: this.text,
                created: firebase.database.ServerValue.TIMESTAMP
            });
            this.name = "";
            this.text = "";
        }

    }
}

const moduleName = 'wiichaeller.feedback';
export default moduleName;

angular.module(moduleName, [Feedback])
    .component('feedback', {
        controller: Home,
        controllerAs: '$ctrl',
        templateUrl: 'app/components/feedback/feedback.tmpl.html'
    });