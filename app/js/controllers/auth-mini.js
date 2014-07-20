app.controller("AuthCtrl",["$rootScope","$scope","$location","$routeParams","$timeout","Auth","User",function(e,t,n,r,i,s,o){e.userID&&e.slideView("view-slide-left","/groups");t.user={email:"",password:"",newPassword:""};e.loading=0;t.login=function(){e.loading=1;s.login(t.user).then(function(t){e.loading=0;console.log(e.loading);e.userID=t.uid;e.slideView("view-slide-left","/groups")},function(e){t.passReset=0;switch(e.code){case"INVALID_EMAIL":t.message="Oops! Double-check that email address.";break;case"INVALID_USER":t.message="Oops! We can't find that email in our system.";break;case"INVALID_PASSWORD":t.passReset=1;break;default:t.message="hey"}})};t.loginAnon=function(){s.loginAnon().then(function(t){e.userID=t.uid;e.slideView("view-slide-left","/groups")},function(e){t.message=e.toString()})};t.register=function(){s.register(t.user).then(function(t){o.create(t);e.userID=t.uid;e.slideView("view-slide-left","/groups")},function(e){t.message=e.toString()})};t.resetPassword=function(){s.resetPassword(t.user.email).then(function(e){t.passReset=0;t.message="Reset instructions emailed successfully!"},function(e){t.passReset=0;t.message="Oops! Something went wrong, please try re-entering your credentials."})};t.update=function(){if(t.user.newPassword===t.passConfirm){t.user.password=r.temp;t.login();t.changePassword()}else t.message="Passwords don't match"};t.changePassword=function(){s.changePassword(t.user).then(function(n){t.message="Password updated successfully!";i(function(){e.slideView("view-slide-left","/groups")},1e3)},function(e){t.message="Oops! Try clicking the link in your email again."})}}]);