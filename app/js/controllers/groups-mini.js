app.controller("GroupsCtrl",["$rootScope","$scope","$location","$firebase","FBURL","$timeout","Exercise","Auth","User","Group",function(e,t,n,r,i,s,o,u,a,f){e.userID||n.path("/");e.loading=0;console.log("loaded");f.setRefs();o.setRefs();console.log(e.userID);t.allGroups=f.all();console.log(t.allGroups);t.countGroups=function(){f.dataRef().once("value",function(e){t.groupCount=e.numChildren()})};t.countGroups();t.allExercises=function(e){return o.all(e)};var l={};t.editMode=!1;t.removeGroup=function(e){f.remove(e);t.countGroups();t.groupCount||(t.editMode=!1)};t.removeExercise=function(t,n){e.currentExercise={};s(function(){o.remove(t,n);s(function(){e.currentGroup=t},500)},300)};t.countExercises=function(e){o.dataRef(e).once("value",function(e){t.exerciseCount=e.numChildren()+1})};t.autofill=function(){f.create("Thursday Workout").then(function(e){var t=e.name();o.create(t,"Dumbbell Bench Press",65,3,6);o.create(t,"Dumbbell Incline Bench Press",40,2,10);o.create(t,"Dumbbell Military Press",35,3,6);o.create(t,"Barbell Lying Tricep Extensions",22.5,3,10)});f.create("Tuesday Workout").then(function(e){var t=e.name();o.create(t,"Pullups",5,3,10);o.create(t,"Bentover Rows",85,3,8);o.create(t,"Dumbbell Hammercurls",30,2,10);o.create(t,"Situps",20,3,10)});t.countGroups()};t.setGroup=function(t){if(e.currentGroup===t){e.currentGroup={};e.currentExercise={}}else e.currentGroup=t};t.isGroupClicked=function(t){return e.currentGroup===t};t.setExercise=function(t){e.currentExercise===t?e.currentExercise={}:e.currentExercise=t};t.isExerciseClicked=function(t){return e.currentExercise===t};t.showEdit=function(){return t.groupCount>0&&t.editMode===!1?!0:!1};t.logout=function(){u.logout()};t.$on("$firebaseSimpleLogin:logout",function(){delete e.userID})}]);