"use strict";angular.module("fitness.config",[]);app.config(["$routeProvider",function(e){e.when("/",{templateUrl:"views/home.html"}).when("/signin",{templateUrl:"views/home.html"}).when("/signup",{templateUrl:"views/signup.html"}).when("/groups",{templateUrl:"views/groups.html",authRequired:!0}).when("/new-group",{templateUrl:"views/new-group.html",authRequired:!0}).when("/:groupId/edit-group",{templateUrl:"views/edit-group.html",authRequired:!0}).when("/:groupId/new-exercise/:exerciseCount",{templateUrl:"views/new-exercise.html",authRequired:!0}).when("/new-exercise2",{templateUrl:"views/new-exercise.html"}).when("/:groupId/edit-exercise/:exerciseId",{templateUrl:"views/edit-exercise.html",authRequired:!0}).when("/:groupId/workout",{templateUrl:"views/workout.html",authRequired:!0}).otherwise({redirectTo:"/"})}]).run(["angularFireAuth","FBURL","$rootScope",function(e,t,n){e.initialize(new Firebase(t),{scope:n,name:"auth",path:"/signin"});n.FBURL=t;n.currentExercise={};n.currentGroup={}}]).constant("FBURL","fitnesskdm.firebaseIO.com");