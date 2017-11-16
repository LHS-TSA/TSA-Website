// JavaScript Document
function generateCards(person, place) {
  var master = $(template);
  master.find(".card-img-top").attr("src", "img/" + person.img);
  master.find(".card-title").text(person.name);
  master.find(".card-subtitle").text(person.position);
  master.find(".card-text").text('"' + person.quote + '"');
  $(place).append(master);
}

var template = '<div id="template" class="col-md-4 col-sm-12 my-3">' +
'<div class="card">' +
'<img class="card-img-top p-3" src="">' +
'<div class="card-body p-3">' +
'<h4 class="card-title"></h4>' +
'<h5 class="card-subtitle"></h5>' + 
'<p class="card-text"></p>' +
'</div>' +
'</div>' +
'</div>';

var members = [
  { name:"Stephen DuVall", position:"Reporter - Webmaster", quote:"I probably didn't turn it in", img:"blank_img2.svg" },
  { name:"Skylar Mack", position:"Member", quote:"It's not my fault...", img:"blank_img.svg" },
  { name:"Weston Allred", position:"VEX Team Captian", quote:"I saw this thing on the VEX Forum", img:"blank_img2.svg"},
  { name:"Jacob", position:"President -_-", quote:"...", img:"blank_img.svg"},
  { name:"Riley Dunn", position:"Member - Cheerleader", quote:"Goodbye Coach Tompkins!!!", img:"blank_img2.svg"},
];

$(document).ready(function() {
  for (var i = 0; i < officers.length; i++) {
    generateCards(officers[i], "#officers");
  }
  for (var j = 0; j < members.length; j++) {
    generateCards(members[j], "#members");
  }
  for (var k = 0; k < alumni.length; k++) {
    generateCards(alumni[k], "#alumni");
  }
});
