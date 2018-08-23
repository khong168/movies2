// // Back End
function Ticket(movie, time, age) {
  this.name = movie;
  this.time = time;
  this.age = age;
  this.price = 10;
}
//
// Ticket.prototype.EndTicket = function() {
//   return this.movie + ", " + this.time + ", " + this.age;
// }
//
Ticket.prototype.ticketTotal = function() {
  if (this.time === "matinee"){
    this.price = this.price - 2;
    debugger;
  }
  if (this.age === "option2"){
    this.price -= 2;
  }
  return this.price
  console.log(this.price);
};



//   }
// }
// };

// Front End
$(document).ready(function() {
  $("form#movie").submit(function(event) {
    event.preventDefault();
    var inputtedMovie = $("#movieName").val();
    console.log(inputtedMovie);
    var inputtedTime = $("#movieTime").val();
    console.log(inputtedTime);
    var inputtedAge = $('input[name=senior]:checked').val();
    console.log(inputtedAge);

    var newTicket = new Ticket(inputtedMovie, inputtedTime, inputtedAge);
    console.log(newTicket);

    newTicket.ticketTotal();
    console.log(newTicket.ticketTotal);
    // var inputtedTime = $(".time").val();
    // var inputtedAge = $(".age").val();




  });

});

  // $(function(){
  //   $("#addMovies").click(function() {
  //     var inputtedMovieName = $("select[name=movie] option:selected").text();
  //     var inputtedMovieTime = $("select[name=ticket-type] option:selected").text();
  //     var inputtedMovieAge = $("select[name=ticket-time] option:selected").text();
  //     var inputtedMovieQuantity = parseInt($("input[name=quantity]").val());
  //     var newMovie = new Movie(inputtedMovieName, inputtedMovieType, inputtedTicketType, inputtedMovieTime, inputtedMovieQuantity);





  // });
