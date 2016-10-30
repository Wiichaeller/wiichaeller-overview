/// <reference path="../../typings/index.d.ts" />
import $ = require('jquery');
import angular = require('angular');
import 'angular-aria/angular-aria.js';
import 'angular-ui-router';
import 'angular-animate';
import 'angular-material/angular-material.js';
import 'angular-material/angular-material.css';
require("./app.scss");


angular.module('wiichaeller', [
    'ngMaterial',
    'ui.router'
]);
