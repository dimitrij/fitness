(function(){var e=angular.module("fitness",["ngAnimate","ngRoute"]);e.run(function(e){e.allExercises=[]});e.config(function(e){e.when("/",{templateUrl:"pages/page-groups.html",controller:"groupsController"}).when("/new-group",{templateUrl:"pages/page-new-group.html",controller:"newGroupController"})});e.controller("groupsController",function(e,t){t.autofill=function(){e.allExercises=[{name:"Tuesday",exerciseArray:[{name:"DB Bench Press",weight:65,sets:3,reps:6},{name:"DB Incline Bench Press",weight:40,sets:2,reps:10},{name:"DB Military Press",weight:35,sets:3,reps:6},{name:"BB Lying Tricep Extensions",weight:22.5,sets:3,reps:10}]},{name:"Thursday",exerciseArray:[{name:"Pullups",weight:5,sets:3,reps:10},{name:"Bentover Rows",weight:85,sets:3,reps:8},{name:"DB Hammercurls",weight:30,sets:2,reps:10},{name:"Situps",weight:20,sets:3,reps:10}]}]}});e.controller("newGroupController",function(){});e.controller("slideController",function(e,t,n){t.slideView=function(t,r){e.slideDir=t;n.path(r)}});e.controller("mainController",function(e){})})();