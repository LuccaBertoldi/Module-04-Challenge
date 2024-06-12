// Function to save form input to local storage
function saveToLocalStorage() {
  var username = document.getElementById('username').value;
  var title = document.getElementById('title').value;
  var content = document.getElementById('content').value;

  if (username.trim() === '' || title.trim() === '' || content.trim() === '') {
    alert('Please fill out all fields before submitting.');
    return; 
  } 

  // Create an object to store the form data
  var formData = {
      username: username,
      title: title,
      content: content
  };

  // Convert the object to a JSON string
  var formDataJSON = JSON.stringify(formData);



  // Save the JSON string to local storage
  localStorage.setItem('blogFormData', formDataJSON);

  // Inform the user that the data has been saved
  alert('Your post was added successfully to the Blog ✨!');

  window.location.href = 'blog.html';
}
document.getElementById('submit').addEventListener('click', function(event) {
  // Prevent the default form submission
  event.preventDefault();
  saveToLocalStorage();
});

function toggleDarkMode() {
  // Toggle dark mode class on the body element
  document.body.classList.toggle('dark-mode');
  
  // Check if dark mode is on
  var darkModeOn = document.body.classList.contains('dark-mode');
  
  // Select the <h1> element
  var h1Element = document.querySelector('header h1');

  // Replace the text content based on dark mode
  if (darkModeOn) {
      // If dark mode is on, set the moon emoji
      h1Element.textContent = '🌒'; 
  } else {
      // If dark mode is off, set the sun emoji
      h1Element.textContent = '☀️'; 
  }
}

// Event listener for clicking on the sun symbol
document.getElementById('sunSymbol').addEventListener('click', function() {
  toggleDarkMode();
});







