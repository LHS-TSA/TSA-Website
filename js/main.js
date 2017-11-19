// JavaScript Document
function generateCards(person, place) {
      var master = $(template);
  master.find(".card-img-top").attr("src", "img/" + person.img);
  master.find(".card-title").text(person.name);
  master.find(".card-subtitle").text(person.position);
  master.find(".card-text").text('"' + person.quote + '"');
      $(place).append(master);
}

      var template =
  '<div id="template" class="col-md-3 col-sm-10 my-3">' +
          '<div class="card">' +
  '<img class="card-img-top p-3" src="">' +
          '<div class="card-body p-3">' +
          '<h4 class="card-title"></h4>' +
          '<h5 class="card-subtitle"></h5>' +
  '<p class="card-text"></p>' +
  "</div>" +
          "</div>" +
          "</div>";

  }
}

$(document).ready(function() {
  for (var i = 0; i < officers.length; i++) {
    generateCards(officers[i], "#officers");
  }
  for (var j = 0; j < members.length; j++) {
    generateCards(members[j], "#members");
  }
});
