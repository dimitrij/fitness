angular.module("fitness.controllers.groups",["fitness.services.login","fitness.services.groups","fitness.services.exercises"]).controller("groupsCtrl",["$rootScope","$scope","$location","loginService","angularFire","FBURL","$timeout","Groups","Exercises",function(e,t,n,r,i,s,o,u,a){t.collectExercises=function(e){return a.collect(e)};e.numGroups=1;var f=function(){t.allGroups=u.collect()};o(function(){},1e3);f();var l={};t.editMode=!1;t.removeGroup=function(e){u.remove(e)};t.removeExercise=function(e,t){console.log("removing "+t+" from "+e);a.remove(e,t)};t.countExercises=function(e){console.log(e);a.count(e).once("value",function(e){t.exerciseCount=e.numChildren()+1;console.log("exercise count "+t.exerciseCount)})};t.autofill=function(){var t=u.create("Thursday Workout"),n=u.create("Tuesday Workout");a.create(t,"Dumbbell Bench Press",65,3,6);a.create(t,"Dumbbell Incline Bench Press",40,2,10);a.create(t,"Dumbbell Military Press",35,3,6);a.create(t,"Barbell Lying Tricep Extensions",22.5,3,10);a.create(n,"Pullups",5,3,10);a.create(n,"Bentover Rows",85,3,8);a.create(n,"Dumbbell Hammercurls",30,2,10);a.create(n,"Situps",20,3,10);e.numGroups=2;u.count()};t.setGroup=function(t){if(e.currentGroup===t){e.currentGroup={};e.currentExercise={}}else e.currentGroup=t};t.isGroupClicked=function(t){return e.currentGroup===t};t.setExercise=function(t){e.currentExercise===t?e.currentExercise={}:e.currentExercise=t};t.isExerciseClicked=function(t){return e.currentExercise===t};t.showEdit=function(){return e.numGroups>0&&t.editMode===!1?!0:!1};t.logout=function(){r.logout("/")}}]);