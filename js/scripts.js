// // Back End
function Ticket(movie, time, age, snacks) {
  this.name = movie;
  this.time = time;
  this.age = age;
  this.snacks = snacks;
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
  if (this.snacks.length >= 1) {
    for (var i = 0; i < this.snacks.length; i++) {
      this.price += 1;
    }
    this.snacks = this.snacks.join(', ');
    // console.log(this.snacks);
}
  return this.name + ", " + this.time + ", " + this.age + ", " + this.price + ", " + this.snacks;
};

// Front End
$(document).ready(function() {
  $("form#movie").submit(function(event) {
    event.preventDefault();
    var inputtedMovie = $("#movieName").val();
    var inputtedTime = $("#movieTime").val();
    var inputtedAge = $('input[name=senior]:checked').val();
    var inputtedSnacks = [];
    $.each($("input[name='snacks']:checked"),function() {
      inputtedSnacks.push($(this).val());
    });
    var newTicket = new Ticket(inputtedMovie, inputtedTime, inputtedAge, inputtedSnacks);
    var ticketDisplay = newTicket.ticketTotal();

console.log(newTicket);
    $(".results").text(ticketDisplay);
  });
  });
