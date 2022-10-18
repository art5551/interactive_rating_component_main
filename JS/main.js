document.addEventListener('DOMContentLoaded', function() {


  // Show rate window and hide results window
  document.querySelector('#results-window').style.display = 'none';
  document.querySelector('#rate-window').style.display = 'block';
  // Add listener to SUBMIT button
  document.querySelector('#submit-btn').addEventListener('click', () => rate_me());

});

// Rate me will get selected radio button and use the id to get the rating score
// Each radio button id is associated with the 1 thru 5 scoring
function rate_me() {

  // Get checked radio button
  let selected = document.querySelector('input[type="radio"]:checked');
  const rating = selected.id;
  document.querySelector('#result').innerHTML = rating;

  // This function is finished and works.
  // Show compose view and hide other views
  document.querySelector('#results-window').style.display = 'block';
  // New div added to view an email
  document.querySelector('#rate-window').style.display = 'none';


}

