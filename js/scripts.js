//  back-end logic:
var calculate = function(ans1,ans2,ans3,ans4,ans5){
 // get the count for each result
 var count = [];
 for (var i=1;i<=3;i++){
   count.push(count(ans1,ans2,ans3,ans4,ans5,i));
 }
 // return the highest count
 if (count[0] > count[1] && count[0] > count[2]){
   return 1;
 }else if(count[1] > count[0] && count[1] > count[2]){
   return 2;
 }else {
   return 3;
 }
}

// count how many times a certain value was selected
var count = function  (ans1,ans2,ans3,ans4,ans5,param){
  var count =0
  if (ans1 === param){
    count += 1;
  }
  if (ans2 === param){
    count += 1;
  }
  if (ans3 === param){
    count += 1;
  }
  if (ans4 === param){
    count += 1;
  }
  if (ans5 === param){
    count += 1;
  }
  return count;
}

//  front-end logic:

$(document).ready(function() {
  $("form#test").submit(function(event) {
    event.preventDefault();
    //get input
    var ans1 = parseInt($("input:radio[name=flavor]:checked").val());
    var ans2 = parseInt($("input:radio[name=color]:checked").val());
    var ans3 = parseInt($("input:radio[name=cuisine]:checked").val());
    var ans4 = parseInt($("input:radio[name=passtime]:checked").val());
    var ans5 = parseInt($("input:radio[name=drink]:checked").val());
    //calculate result
    var result = calculate(ans1,ans2,ans3,ans4,ans5);
    //display result
    if(result === 1){
    //  window.location.href = "paris.html";
      window.location.replace("paris.html");
    }else if (result === 2) {
      window.location.replace("seychelles.html");
    }else {
      window.location.replace("kenya.html");
    }


  });
});
