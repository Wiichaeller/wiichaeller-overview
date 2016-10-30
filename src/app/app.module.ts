/// <reference path="../../typings/index.d.ts" />

// lib
import * as angular from 'angular';
import 'angular-aria/angular-aria.js';
import 'angular-ui-router';
import 'angular-animate';
import 'angular-material/angular-material.js';
import 'angular-material/angular-material.css';
// app
import appStates from './app.states';
import home from './components/home/home.comp';
// import stylesheet
require("./app.scss");

console.log(home);

angular.module('wiichaeller', [
    'ngMaterial',
    'ui.router',
    appStates,
    home
]);
