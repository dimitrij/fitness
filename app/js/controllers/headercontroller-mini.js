"use strict";angular.module("fitness.controllers.header",["fitness.services.login"]).controller("HeaderController",["$scope","$location","loginService","angularFire","FBURL",function(e,t,n,r,i){e.$on("angularFireAuth:login",function(){r(new Firebase(i+"/users/"+e.auth.id),$rootScope,"user")});e.logout=function(){n.logout("/signin")};e.navbarEntries=[]}]);