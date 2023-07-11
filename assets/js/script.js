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


  //Save user input to local storage
    
  $('#hour-09 .description').val(localStorage.getItem('hour-09'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));

  // TODO: Add code to display the current date in the header of the page.

  displayClock();
  setInterval(displayClock, 1000);

});
