var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
   $scope.submitLog= function(){
      var data = $.param({
        book: JSON.stringify({
            user: $scope.user,
            pass : $scope.pass
            
        })
      });
         console.log(data);
      $http.post("/api/book/", data).success(function(data, status) {
        console.log('Data posted successfully');
      })
   }
});