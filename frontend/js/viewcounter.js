// Replace this URL with the URL of your Azure Function
const url = 'https://cloudres.azurewebsites.net/api/cloudreshttp';

// If you have a visitor ID stored in a cookie, include it in the query parameters
// const visitorId = getVisitorIdFromCookie();
// const urlWithVisitorId = url + '?visitorId=' + visitorId;

fetch(url)
    .then(response => response.text())
    .then(data => {
      // Update the counter on the page with the response from the Azure Function
      document.getElementById('counter').textContent = data;
    })
    .catch(error => {
      console.error('Error:', error);
    });
