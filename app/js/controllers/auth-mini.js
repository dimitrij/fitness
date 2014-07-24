app.controller("AuthCtrl",["$rootScope","$scope","$location","$routeParams","$timeout","Auth","User",function(e,t,n,r,i,s,o){e.userID&&e.slideView("view-slide-left","/groups");t.user={email:"",oldPassword:"",passwordConfirm:"",password:""};e.loading=0;t.signUpMode=!1;t.login=function(){e.loading=1;s.login(t.user).then(function(t){e.userID=t.uid;e.slideView("view-slide-left","/groups")},function(n){t.passReset=0;e.loading=0;switch(n.code){case"INVALID_EMAIL":t.message="Oops! Double-check that email address.";break;case"INVALID_USER":t.message="Oops! We can't find that email in our system.";break;case"INVALID_PASSWORD":t.passReset=1;break;default:t.message=n.toString()}})};t.loginAnon=function(){e.loading=1;s.loginAnon().then(function(t){e.userID=t.uid;e.slideView("view-slide-left","/groups")},function(n){e.loading=0;t.message=n.toString()})};t.register=function(){console.log(t.user.passwordConfirm,t.user.password);t.user.passwordConfirm===t.user.password?s.register(t.user).then(function(t){o.create(t);e.userID=t.uid;e.slideView("view-slide-left","/groups")},function(e){switch(e.code){case"INVALID_EMAIL":t.message="Oops! Double-check that email address.";break;case"INVALID_USER":t.message="Oops! We can't find that email in our system.";break;case"INVALID_PASSWORD":t.message="Be sure to enter a password.";break;default:t.message=e.toString()}}):t.message="Passwords don't match."};t.submit=function(e){if(t.signUpMode===!1)if(e==="logincreate")t.login();else{console.log("logging in as guest");t.loginAnon()}else if(e==="logincreate")t.register();else{console.log("cancelling");t.signUpMode=!1}};t.resetPassword=function(){e.loading=1;s.resetPassword(t.user.email).then(function(n){e.loading=0;t.passReset=0;t.message="Reset instructions emailed successfully."},function(n){e.loading=0;t.passReset=0;t.message="Oops! Try re-entering your credentials."})};t.update=function(){e.loading=1;if(t.user.password===t.passConfirm){t.user.oldPassword=r.temp;t.changePassword()}else{e.loading=0;t.message="Passwords don't match"}};t.changePassword=function(){s.changePassword(t.user).then(function(n){e.loading=0;t.message="Password updated successfully!";t.login()},function(n){e.loading=0;t.message="Oops! Try clicking the link in your email again."})}}]);