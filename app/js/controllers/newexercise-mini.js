app.controller("NewExerciseCtrl",["$rootScope","$scope","$routeParams","Exercise","$timeout",function(e,t,n,r,i){t.groupId=n.groupId;console.log(t.groupId);t.headerNum=n.exerciseCount;t.addExercise=function(){t.exerciseName&&t.exerciseWeight&&t.exerciseSets&&t.exerciseReps&&r.create(t.groupId,t.exerciseName,t.exerciseWeight,t.exerciseSets,t.exerciseReps)};t.countExercises=function(){r.dataRef(t.groupId).once("value",function(e){t.exerciseCount=e.numChildren()+1})}}]);