//form is completely empty:
//done button proceeds, next button says 'Please fill out all fields before adding another exercise'
//
//form has some fields filled out:
//done button throws modal, next button says 'Please fill out all fields before adding another exercise'
//
//form has all fields filled out:
//proceed as normal
//
//number inputs are invalid:
//highlight field, throw error
app.controller("NewExerciseCtrl",["$rootScope","$scope","$routeParams","Exercise","$location","$timeout",function(e,t,n,r,i,s){e.userID||i.path("/");e.loading=0;t.submitted=!1;t.modal=!1;t.groupId=n.groupId;t.headerNum=n.exerciseCount;r.setRefs();t.submit=function(n){t.submitted=!0;t.buttonClicked=n;t.message="";if(t.exerciseName&&t.exerciseWeight&&t.exerciseSets&&t.exerciseReps){r.create(t.groupId,t.exerciseName,t.exerciseWeight,t.exerciseSets,t.exerciseReps);if(n==="done")e.slideView("view-slide-right","/groups");else{t.countExercises();e.slideView("view-slide-left",t.groupId+"/new-exercise/"+t.exerciseCount)}}else if(t.exerciseName||t.exerciseWeight||t.exerciseSets||t.exerciseReps)if(n==="done")t.modal=!0;else{t.message="Please fill out all fields before advancing or click 'Done' in the top left to go back.";s(function(){t.submitted=!1},5e3)}else if(n==="done")e.slideView("view-slide-right","/groups");else{t.message="Please fill out all fields before advancing or click 'Done' in the top left to go back.";s(function(){t.submitted=!1},5e3)}};t.modalClick=function(n){t.modal=!1;n=="yes"&&e.slideView("view-slide-right","/groups")};t.countExercises=function(){r.dataRef(t.groupId).once("value",function(e){t.exerciseCount=e.numChildren()+1})}}]);