app.factory("Auth",["$firebaseSimpleLogin","FBURL","$rootScope",function(e,t,n){var r=new Firebase(t),i=e(r),s={register:function(e){return i.$createUser(e.email,e.password)},signedIn:function(){return i.user!==null},logout:function(){i.$logout()}};n.signedIn=function(){return s.signedIn()};return s}]);