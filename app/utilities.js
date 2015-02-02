var conflicts = []
var checkCon = function(){
  var mondayA ={'name': 'Monday'};
  var tuesdayA ={'name': 'Tuesday'};
  var wendnesdayA ={'name': 'Wendnesday'};
  var thursdayA ={'name': 'Thursday'};
  var fridayA ={'name': 'Friday'};
  var saturdayA ={'name': 'Saturday'};
  var sundayA ={'name': 'Sunday'};
  
  var innerFuncA = function(){
    var temp = [];
    $('.monday option:selected').each(function() {
      temp.push($(this).val());
    });
    for (var i = 0; i < temp.length; i++){
      if (mondayA[temp[i]]){
        mondayA[temp[i]]++;
      } else {
        mondayA[temp[i]] = 1;
      }
    }
  };

  var innerFuncB = function(){
    var temp = [];
    $('.tuesday option:selected').each(function() {
      temp.push($(this).val());
    });
    for (var i = 0; i < temp.length; i++){
      if (tuesdayA[temp[i]]){
        tuesdayA[temp[i]]++;
      } else {
        tuesdayA[temp[i]] = 1;
      }
    }
  };

  var innerFuncC = function(){
    var temp = [];
    $('.wendnesday option:selected').each(function() {
      temp.push($(this).val());
    });
    for (var i = 0; i < temp.length; i++){
      if (wendnesdayA[temp[i]]){
        wendnesdayA[temp[i]]++;
      } else {
        wendnesdayA[temp[i]] = 1;
      }
    }
  };

  var innerFuncD = function(){
    var temp = [];
    $('.thursday option:selected').each(function() {
      temp.push($(this).val());
    });
    for (var i = 0; i < temp.length; i++){
      if (thursdayA[temp[i]]){
        thursdayA[temp[i]]++;
      } else {
        thursdayA[temp[i]] = 1;
      }
    }
  };

  var innerFuncE = function(){
    var temp = [];
    $('.friday option:selected').each(function() {
      temp.push($(this).val());
    });
    for (var i = 0; i < temp.length; i++){
      if (fridayA[temp[i]]){
        fridayA[temp[i]]++;
      } else {
        fridayA[temp[i]] = 1;
      }
    }
  };

  var innerFuncF = function(){
    var temp = [];
    $('.saturday option:selected').each(function() {
      temp.push($(this).val());
    });
    for (var i = 0; i < temp.length; i++){
      if (saturdayA[temp[i]]){
        saturdayA[temp[i]]++;
      } else {
        saturdayA[temp[i]] = 1;
      }
    }
  };

  var innerFuncG = function(){
    var temp = [];
    $('.sunday option:selected').each(function() {
      temp.push($(this).val());
    });
    for (var i = 0; i < temp.length; i++){
      if (sundayA[temp[i]]){
        sundayA[temp[i]]++;
      } else {
        sundayA[temp[i]] = 1;
      }
    }
  };



  innerFuncA()
  innerFuncB()
  innerFuncC()
  innerFuncD()
  innerFuncE()
  innerFuncF()
  innerFuncG()

  var check = function(obj){
    for (var key in obj){
      if (obj[key] > 1){
        var tempString = key + ' is working '+obj[key]+' shifts on '+obj.name+'!'
        conflicts.push(tempString)
      }
    }
  }

  check(mondayA);
  check(tuesdayA);
  check(wendnesdayA);
  check(thursdayA);
  check(fridayA);
  check(saturdayA);
  check(sundayA);
  // console.log(mondayA)

  console.log(conflicts)
}

// checkCon()















