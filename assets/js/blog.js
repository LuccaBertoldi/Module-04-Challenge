function loadFromLocalStorage() {
    var formDataJSON = localStorage.getItem('blogFormData');
    if (formDataJSON) {
      var formData = JSON.parse(formDataJSON);
  
      // Create elements for title, content, and username
      var titleElement = document.createElement('h1');
      titleElement.textContent = formData.title;
  
      var contentElement = document.createElement('p');
      contentElement.textContent = formData.content;
  
      var usernameElement = document.createElement('p');
      usernameElement.textContent = (formData.username);
  
      // Get the container elements where you want to append the elements
      var titleContainer = document.getElementById('titleContainer');
      var contentContainer = document.getElementById('contentContainer');
      var usernameContainer = document.getElementById('usernameContainer');
  
      // Append elements to their respective containers
      titleContainer.appendChild(titleElement);
      contentContainer.appendChild(contentElement);
      usernameContainer.appendChild(usernameElement);

    }
  }

  window.addEventListener('load', loadFromLocalStorage);

  function toggleDarkMode() {
    // Toggle dark mode class on the body element
    document.body.classList.toggle('dark-mode');
  
    // Check if dark mode is on
    var darkModeOn = document.body.classList.contains('dark-mode');
  
    // Select the <h2> element
    var h2Element = document.querySelector('header h2');
  
    // Replace the text content based on dark mode
    if (darkModeOn) {
      // If dark mode is on, set the moon emoji
      h2Element.textContent = '🌒'; // Replace with moon emoji
    } else {
      // If dark mode is off, set the sun emoji
      h2Element.textContent = '☀️'; // Replace with sun emoji
    }
  }

  document.getElementById('sunSymbol').addEventListener('click', function() {
    toggleDarkMode();
  });