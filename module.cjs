function add(a,b){
    return a + b;
} 
exports.add=add;
var fortunes = [
    "Conquer your fears or they will conquer you.",
    "Rivers need springs.",
    "Do not fear what you don't know.",
    "You will have a pleasant surprise.",
    "Whenever possible, keep it simple.",
    
   ];
  function getFortune(){
       var n=Math.floor(Math.random()*fortunes.length)
       return fortunes[n];

   }
   exports.getFortune =getFortune;