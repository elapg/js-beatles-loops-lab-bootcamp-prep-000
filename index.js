// add solution here

function theBeatlesPlay(musicans,instruments){
  var array = [] ;
  for (let i = 0; i < musicans.length; i++)
{
  var string = '${musicans[i]'} plays ${instrument[i]}';
  array.push(string);
}
return array 
}
function johnLennonFacts(facts){
  var array = [];
  let i = 0;
  while (i < facts.length){
    array.push('${facts[i]}')
  }
}
