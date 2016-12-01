/// <reference path='../../typings/index.d.ts' />

// lib
import * as angular from 'angular';
import 'angular-aria/angular-aria.js';
import 'angular-ui-router';
import 'angular-animate';
import 'angular-translate';
import 'angular-material/angular-material.js';
import 'angular-material/angular-material.css';
import * as firebase from 'firebase';
import 'angularfire';
// app
import appStates from './app.states';
import home from './components/home/home.comp';
import feedback from './components/feedback/feedback.comp';

// import stylesheet
require('./app.scss');

class AppConfig {
    constructor($translateProvider: angular.translate.ITranslateProvider) {

        var config = {
            apiKey: "AIzaSyAHo1b4F7LNgovriQtz6JG5aAkSclWJ_po",
            authDomain: "wiichaeller.firebaseapp.com",
            databaseURL: "https://wiichaeller.firebaseio.com",
            storageBucket: "wiichaeller.appspot.com",
            messagingSenderId: "946828911682"
        };
        firebase.initializeApp(config);

        $translateProvider.translations('de', {
            'home': {
                'introduction': 'Du bist dir unsicher, ob dein Wein gut oder schlecht ist?'
            },
            'process': {
                'sendwine': {
                    'title': 'Wein schicken',
                    'description': 'Du kannst dein Wein bei uns einschicken. Er sollte gut verpackt sein, in einem Karton, damit er sicher bei uns ankommt.'
                },
                'test': {
                    'title': 'Testen',
                    'description': 'Unsere qualifizierten Wein-Tester werden deinen eingschickten Wein innerhalb von 4-20 Werktagen testen.'
                },
                'feedback': {
                    'title': 'Feedback',
                    'description': 'Dir wird eine Rückmeldung zurückgeschickt per Email, wie gut dein Wein ist. Es variert von "sehr gut" zu "schlecht"'
                }
            },
            'quotes': {
                'title': 'Unsere Kunden sagen...',
                'danitolopez': {
                    'name': 'Danito Lopez',
                    'text': 'Die Seite hat mir echt weitergeholfen!'
                }
            },
            'costumer-of-the-day': 'Kunde des Tages'

        });
        $translateProvider.translations('wiichaeller', {
            'home': {
                'introduction': 'Du bisch dir unsicher, öb din Wii banqer isch oder wack-ass-pussy shit?'
            },
            'process': {
                'sendwine': {
                    'title': 'Wii ischicke',
                    'description': 'Du chasch din Wii bi eus ischicke. Er sötti guet verpackt si imene Karton, damit er sicher bi eus achund.'
                },
                'test': {
                    'title': 'Teste',
                    'description': 'Üsi qualifizierte Wii-Tester werdet din igschickte Wii innerhalb vo 4-20 Werchtäg teste.'
                },
                'feedback': {
                    'title': 'Feedback',
                    'description': 'Dir wird en Rückmeldig zruggschickt per Email, wie guet din Wii isch. Es variert vo "banqer zeugs imo" zu "str8 ban imo".'
                }
            },
            'quotes': {
                'title': 'Üsi Kunde säged...',
                'danitolopez': {
                    'name': 'Danito Lopez',
                    'text': 'Die Website isch echt banqer'
                }
            },
            'costumer-of-the-day': 'Kund vom Tag'
        });
        $translateProvider.preferredLanguage('de');
    }
}

angular.module('wiichaeller', [
    'ngMaterial',
    'ui.router',
    'firebase',
    'pascalprecht.translate',
    appStates,
    home,
    feedback
])
    .config(AppConfig);
