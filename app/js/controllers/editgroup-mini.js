app.controller("EditGroupCtrl",["$rootScope","$scope","$routeParams","$firebase","Group",function(e,t,n,r,i){e.userID||$location.path("/");i.setRefs();e.loading=0;i.find(n.groupId).$bind(t,"group");t.submit=function(){document.getElementById("group-name").blur();e.slideView("view-slide-right","/groups")}}]);