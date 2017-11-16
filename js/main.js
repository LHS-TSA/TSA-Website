// JavaScript Document
function generateMembers(person) {
  var master = $(template);
  master.find(".card-img-top").attr("src", "img/" + person.img);
  master.find(".card-title").text(person.name);
  master.find(".card-text").text('"' + person.quote + '"');
  $("#members").append(master);

}

var template = '<div id="template" class="col-md-4 col-sm-12 my-3">' +
'<div class="card">' +
'<img class="card-img-top p-3" src="">' +
'<div class="card-body p-3">' +
'<h4 class="card-title"></h4>' +
'<p class="card-text"></p>' +
'</div>' +
'</div>' +
'</div>';


var member = {
  img: "blank_img2.svg",
  name: "Stephen DuVall",
  quote: "I probably didn't turn it in2",
};

$(document).ready(function() {
  generateMembers(member);
});