// // Back End
function Ticket(movie, time, age) {
  this.name = movie;
  this.time = time;
  this.age = age;
  this.price = 10;
}

Ticket.prototype.ticketTotal = function() {
  if (this.time === "Matinee") {
    this.price = this.price - 2;
  }
  if (this.age === "senior") {
    this.price -= 2;
  }
  if (this.name === "StarWars") {
    this.price -= 2;
  }
  return this.name + ", " + this.time + ", " + this.age + ", " + this.price;
};

// Front End
$(document).ready(function() {
  $("form#movie").submit(function(event) {
    event.preventDefault();
    var inputtedMovie = $("#movieName").val();
    var inputtedTime = $("#movieTime").val();
    var inputtedAge = $('input[name=senior]:checked').val();
    var newTicket = new Ticket(inputtedMovie, inputtedTime, inputtedAge);
    var ticketDisplay = newTicket.ticketTotal();

    $(".results").text(ticketDisplay);
  });
});
