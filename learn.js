// map settings initialise
// var map = L.map('map').setView([51.505, -0.09], 13);
// L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox/streets-v11',
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken: 'your.mapbox.access.token'
// }).addTo(map);
// google
// et map;

// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 8,
//   });
// }

// window.initMap = initMap;

// async function iss(){
//   const response = await fetch('https://api.wheretheiss.at/v1/satellites/25544')
//   const data=await response.json()
//   show(data)
// const {latitude:lat,longitude:long}=data
// show(lat)
// }
// iss();


//  function show(s){
//   console.log(s)
// }
// var img_file=document.getElementById('img')
// var img='';
// img_file.addEventListener('change',function(){
//   img=img_file.value;
//   console.log(img);
//   var reader=new FileReader();
//   reader.onload=function(){
//     img=reader.result;
//     document.getElementById('imgs').setAttribute("src",img);

//   }
 

// })
// ?
var formdata= new FormData();
formdata.append('key1', 'name')
formdata.append('key2', 'age')

// // for(let key of formdata.keys()){
// //   console.log(key,formdata[key])
// // }
// // Create a test FormData object
// var formData = new FormData();
// formData.append('key1', 'value1');
// formData.append('key2', 'value2');
var adey =new Headers();
adey.append('bruno', '18');
// Display the keys

console.log(adey)
console.log(formdata)