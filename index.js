// Write your code here!
const mainElement = document.getElementById('main');
mainElement.remove();

// Create a new h1 header element
const newHeader = document.createElement('h1');
newHeader.id = 'victory'; // Set the ID attribute
newHeader.textContent = 'YOUR-NAME is the champion'; // Set the text content
document.body.appendChild(newHeader)




