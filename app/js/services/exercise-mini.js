app.factory("Exercise",["$rootScope","$firebase","FBURL",function(e,t,n){var r,i,s={setRefs:function(){r=new Firebase(n+"/users/"+e.userID+"/exercise groups");i=t(r)},all:function(e){return i.$child(e+"/exercises")},create:function(e,t,n,r,s){return i.$child(e+"/exercises").$add({name:t,weight:n,sets:r,reps:s,maxWeight:0,failures:0,lastRecorded:""})},dataRef:function(e){return r.child(e+"/exercises")},find:function(e,t){return i.$child(e+"/exercises/"+t)},remove:function(e,t){return i.$remove(e+"/exercises/"+t)}};return s}]);