"use strict";angular.module("fitness.controllers.signup",[]).controller("SignupCtrl",["$scope","loginService","$location",function(e,t,n){!e.auth||n.path("/groups");e.$on("angularFireAuth:login",function(){n.path("/groups")});e.err=null;e.login=function(n){e.err=null;t.login(e.email,e.pass,"/groups",function(t,r){e.err=t||null;typeof n=="function"&&n(t,r)})};e.createAccount=function(){console.log("controller saw it");if(!e.email)e.err="Please enter an email address";else if(!e.pass){console.log("erroring");e.err="Please enter a password"}else{console.log("passing off to loginservice");t.createAccount(e.email,e.pass,function(n,r){n?e.err=n:e.login(function(e){e||t.createProfile(r.id,r.email)})})}}}]);