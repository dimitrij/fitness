app.factory("Auth",["$firebaseSimpleLogin","FBURL","$rootScope","$firebase",function(e,t,n,r){var i=new Firebase(t),s=e(i),o={register:function(e){return s.$createUser(e.email,e.password)},signedIn:function(){return s.user!==null},login:function(e){return s.$login("password",{email:e.email,password:e.password,rememberMe:!0})},loginAnon:function(){return s.$login("anonymous",{rememberMe:!0})},logout:function(){delete n.userID;n.slideView("view-slide-right","/");return s.$logout()},resetPassword:function(e){console.log(e);return s.$sendPasswordResetEmail(e)},changePassword:function(e){return s.$changePassword(e.email,e.oldPassword,e.password)}};n.signedIn=function(){return o.signedIn()};return o}]);