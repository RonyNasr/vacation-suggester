// Business (or back-end) logic:
 var calculate = function(ans1,ans2,ans3,ans4,ans5){
   var count1 = count(ans1,ans2,ans3,ans4,ans5,1);
   var count2 = count(ans1,ans2,ans3,ans4,ans5,2);
   var count3 = count(ans1,ans2,ans3,ans4,ans5,3);
   if (count1 > count2 && count1 > count3){
     return 1;
   }else if(count2 > count1 && count2 > count3){
     return 2;
   }else {
     return 3;
   }
}

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

// User interface (or front-end) logic:

$(document).ready(function() {
  $("form#test").submit(function(event) {
    // alert("submit");
    event.preventDefault();
    var ans1 = parseInt($("input:radio[name=flavor]:checked").val());
    var ans2 = parseInt($("input:radio[name=color]:checked").val());
    var ans3 = parseInt($("input:radio[name=cuisine]:checked").val());
    var ans4 = parseInt($("input:radio[name=passtime]:checked").val());
    var ans5 = parseInt($("input:radio[name=drink]:checked").val());

    var result = calculate(ans1,ans2,ans3,ans4,ans5);

    if(result === 1){
      alert ("paris!");
      // go to paris page
    }else if (result === 2) {
      alert ("Seychelles!");
      // go to sey  chelles page
    }else {
      alert ("Kenya!");
      // go to Kenya page
    }
    //console.log(sum);

  });
});
