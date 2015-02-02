
var app = angular.module('app', ['firebase']);

app.controller('MainController', function ($scope, $firebase) {

  $scope.heads = headers;

  var ref = new Firebase('https://ajisen-scheduler.firebaseio.com/');
  var sync = $firebase(ref);

  $scope.data = sync.$asObject();

  $scope.init = function(){
    makeAvaList($scope.data.eileen);
    makeAvaList($scope.data.vicky);
    makeAvaList($scope.data.kimmy);
    makeAvaList($scope.data.katy);
    makeAvaList($scope.data.wendy);
    makeAvaList($scope.data.tong);
    makeAvaList($scope.data.jeff);
    makeAvaList($scope.data.karry);
    makeAvaList($scope.data.charlie);
    makeAvaList($scope.data.harvey);
    makeAvaList($scope.data.sam);
    makeAvaList($scope.data.sunnie);
    makeAvaList($scope.data.maggey);
    makeAvaList($scope.data.mathew);
    makeAvaList($scope.data.boa);
    makeAvaList($scope.data.eva);
    makeAvaList($scope.data.harry);
    makeAvaList($scope.data.meng);
    makeAvaList($scope.data.yao);
  }
  
  $scope.mondayLunch = mondayLunchArray;
  $scope.tuesdayLunch = tuesdayLunchArray;
  $scope.wendnesdayLunch = wendnesdayLunchArray;
  $scope.thursdayLunch = thursdayLunchArray;
  $scope.fridayLunch = fridayLunchArray;
  $scope.saturdayLunch = saturdayLunchArray;

  $scope.mondayDinner = mondayDinnerArray;;
  $scope.tuesdayDinner = tuesdayDinnerArray;
  $scope.wendnesdayDinner = wendnesdayDinnerArray;
  $scope.thursdayDinner = thursdayDinnerArray;
  $scope.fridayDinner = fridayDinnerArray;
  $scope.saturdayDinner = saturdayDinnerArray;
  $scope.sunday = sundayArray;

  $scope.getTotalHours = getTotal;
  $scope.total = totalHours;

  $scope.checkConflicts = checkCon;
  $scope.showConflicts = conflicts;
})
