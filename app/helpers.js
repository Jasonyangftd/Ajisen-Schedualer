var mondayLunchArray = []
var tuesdayLunchArray = []
var wendnesdayLunchArray = []
var thursdayLunchArray = []
var fridayLunchArray = []
var saturdayLunchArray = []

var mondayDinnerArray = []
var tuesdayDinnerArray = []
var wendnesdayDinnerArray = []
var thursdayDinnerArray = []
var fridayDinnerArray = []
var saturdayDinnerArray = []
var sundayArray = []

var makeAvaList = function(employee){
  if (employee.mondayLunch){
    mondayLunchArray.push(employee);
  }
  if (employee.tuesdayLunch){
    tuesdayLunchArray.push(employee);
  }
  if (employee.wendnesdayLunch){
    wendnesdayLunchArray.push(employee);
  }
  if (employee.thursdayLunch){
    thursdayLunchArray.push(employee);
  }
  if (employee.fridayLunch){
    fridayLunchArray.push(employee);
  }
  if (employee.saturdayLunch){
    saturdayLunchArray.push(employee);
  }
  if (employee.mondayDinner){
    mondayDinnerArray.push(employee);
  }
  if (employee.tuesdayDinner){
    tuesdayDinnerArray.push(employee);
  }
  if (employee.wendnesdayDinner){
    wendnesdayDinnerArray.push(employee);
  }
  if (employee.thursdayDinner){
    thursdayDinnerArray.push(employee);
  }
  if (employee.fridayDinner){
    fridayDinnerArray.push(employee);
  }
  if (employee.saturdayDinner){
    saturdayDinnerArray.push(employee);
  }
  if (employee.sunday){
    sundayArray.push(employee);
  }
};























