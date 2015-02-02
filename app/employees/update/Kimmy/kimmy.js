var kimmyUp = angular.module('kimmyUp', ['firebase']);
var headers = ['WorkShift','Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'];

kimmyUp.controller('kimmyController', function ($scope, $firebase) {
  $scope.heads = headers;
  var fb = new Firebase('https://ajisen-scheduler.firebaseio.com/kimmy');
  var sync = $firebase(fb);
  // $scope.employees = sync.$asObject();
  $scope.kimmy = sync.$asObject();

  $scope.kimmyUpdate = function(){
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
//       kimmy.mondayLunch = $(this).val() === "true";
//     });
//   console.log(kimmy)
//   // return eileen;
// }
