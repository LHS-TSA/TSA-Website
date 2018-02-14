// JavaScript Document
function generateCards(group, place) {
  switch (place) {
    case "#officers-cards":
      var template =
        '<div class="col-md-3 col-sm-10 my-3">' +
        '<div class="card">' +
        '<img class="card-img-top p-3" src="">' +
        '<div class="card-body p-3">' +
        '<h5 class="card-subtitle"></h5>' +
        '<h4 class="card-title"></h4>' +
        '<p class="card-text my-1"></p>' +
        "</div>" +
        "</div>" +
        "</div>";

      var master = $(template);
      master.find(".card-img-top").attr("src", "img/" + group.img);
      master.find(".card-title").text(group.name);
      master.find(".card-subtitle").text(group.position);
      master.find(".card-text").text('"' + group.quote + '"');
      $(place).append(master);
      break;

    case "#members":
      var template =
        '<div class="card">' +
        '<div class="card-body p-3">' +
        '<h4 class="card-title"></h4>' +
        '<h5 class="card-subtitle"></h5>' +
        '<p class="card-text my-1"></p>' +
        "</div>" +
        "</div>";

      var master = $(template);
      master.find(".card-title").text(group.name);
      master.find(".card-subtitle").text(group.projects);
      master.find(".card-text").text('"' + group.quote + '"');
      $(place).append(master);
      break;
  }
}

function generatePosts(source, place) {
  var template =
    '<div class="col-md-6 col-sm-10 my-3">' +
    '<div class="card">' +
    '<img class="card-img-top" src="">' +
    '<div class="card-body p-3">' +
    '<h4 class="card-title"></h4>' +
    '<h5 class="card-subtitle"></h5>' +
    '<p class="card-text my-1"></p>' +
    "</div>" +
    "</div>" +
    "</div>";
  var master = $(template);
  master.find(".card-img-top").attr("src", "img/" + source.img);
  master.find(".card-title").text(source.title);
  master.find(".card-subtitle").text(source.date + " - " + source.source);
  master.find(".card-text").text(source.body);
  $(place).append(master);
}

$(document).ready(function() {
  for (var i = 0; i < officers.length; i++) {
    generateCards(officers[i], "#officers-cards");
  }
  for (var j = 0; j < members.length; j++) {
    generateCards(members[j], "#members");
  }
  for (var k = 0; k < posts.length; k++) {
    generatePosts(posts[k], "#posts");
  }
});
