"use strict";angular.module("fitness.config",[]);app.config(["$routeProvider",function(e){e.when("/",{templateUrl:"views/signin.html"}).when("/signin",{templateUrl:"views/signin.html"}).when("/signup",{templateUrl:"views/signup.html"}).when("/groups",{templateUrl:"views/groups.html"}).when("/new-group",{templateUrl:"views/new-group.html"}).when("/edit-group",{templateUrl:"views/edit-group.html"}).when("/new-exercise",{templateUrl:"views/new-exercise.html"}).when("/new-exercise2",{templateUrl:"views/new-exercise.html"}).when("/edit-exercise",{templateUrl:"views/edit-exercise.html"}).when("/workout",{templateUrl:"views/workout.html"}).otherwise({redirectTo:"/"})}]).run(["angularFireAuth","FBURL","$rootScope",function(e,t,n){e.initialize(new Firebase(t),{scope:n,name:"auth",path:"/signin"});n.FBURL=t;n.allGroups=[],n.currentExercise={};n.currentGroup={}}]).constant("FBURL","fitnesskdm.firebaseIO.com");