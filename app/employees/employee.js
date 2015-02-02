var employee = angular.module('employee', ['firebase']);

employee.controller('EmployeeController', function ($scope, $firebase) {

  var fb = new Firebase('https://ajisen-scheduler.firebaseio.com/');
  var sync = $firebase(fb);
  // $scope.employees = sync.$asObject();
  var syncObject = sync.$asObject();
  syncObject.$bindTo($scope, "employees");

})