var tongUp = angular.module('tongUp', ['firebase']);
var headers = ['WorkShift','Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'];

tongUp.controller('tongController', function ($scope, $firebase) {
  $scope.heads = headers;
  var fb = new Firebase('https://ajisen-scheduler.firebaseio.com/tong');
  var sync = $firebase(fb);
  // $scope.employees = sync.$asObject();
  $scope.tong = sync.$asObject();

  $scope.tongUpdate = function(){
    innerFunc = function(){
      $('#shiftLMON option:selected').each(function() {
      fb.update({mondayLunch: ($(this).val() === "true")});
      });
      $('#shiftLTUE option:selected').each(function() {
      fb.update({tuesdayLunch: ($(this).val() === "true")});
      });
      $('#shiftLWED option:selected').each(function() {
      fb.update({wendnesdayLunch: ($(this).val() === "true")});
      });
      $('#shiftLTHU option:selected').each(function() {
      fb.update({thursdayLunch: ($(this).val() === "true")});
      });
      $('#shiftLFRI option:selected').each(function() {
      fb.update({fridayLunch: ($(this).val() === "true")});
      });
      $('#shiftLSAT option:selected').each(function() {
      fb.update({saturdayLunch: ($(this).val() === "true")});
      });
      $('#shiftSUN option:selected').each(function() {
      fb.update({sunday: ($(this).val() === "true")});
      });
      $('#shiftDMON option:selected').each(function() {
      fb.update({mondayDinner: ($(this).val() === "true")});
      });
      $('#shiftDTUE option:selected').each(function() {
      fb.update({tuesdayDinner: ($(this).val() === "true")});
      });
      $('#shiftDWED option:selected').each(function() {
      fb.update({wendnesdayDinner: ($(this).val() === "true")});
      });
      $('#shiftDTHU option:selected').each(function() {
      fb.update({thursdayDinner: ($(this).val() === "true")});
      });
      $('#shiftDFRI option:selected').each(function() {
      fb.update({fridayDinner: ($(this).val() === "true")});
      });
      $('#shiftDSAT option:selected').each(function() {
      fb.update({saturdayDinner: ($(this).val() === "true")});
      });

    }


    innerFunc();
    alert('Updated!')
  }

})

// var update = function(){
//   $('#shiftLM option:selected').each(function() {
//       tong.mondayLunch = $(this).val() === "true";
//     });
//   console.log(tong)
//   // return eileen;
// }
