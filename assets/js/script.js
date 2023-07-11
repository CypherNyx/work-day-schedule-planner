var timeDisplayEl = $('#currentDay');
var currentHour = dayjs().format('HH');

function displayClock() {
  var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
}

$(document).ready(function () {
   
 
  // Add a listener for click events on the save button.
  $('.saveBtn').click(function(event){
    event.preventDefault();
    var time = $(this).parent().attr('id');
    var value = $(this).siblings(".description").val();
    console.log(time);
    console.log(value);
    localStorage.setItem(time, value);
    console.log(localStorage);

  });

  // apply past, present, or future class depending on time
  $('.time-block').each( function(){
    var hourDiv = $(this).attr('id').split('-')[1];
    console.log(hourDiv);
    console.log(currentHour);
    if (currentHour == hourDiv) {
      $(this).addClass('present');
    }else if (currentHour < hourDiv) {
      $(this).addClass("future");
    } else if (currentHour > hourDiv){
      $(this).addClass('past');
    }
  });


    //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

  displayClock();
  setInterval(displayClock, 1000);

});
