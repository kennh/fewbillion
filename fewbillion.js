

function money(){
  var penny = .01;
  for (var i = 0; i < 29; i++){

    penny *= 2;
  }
  //needs to give results after 30 days
  return ("$" + penny);
}
money();
